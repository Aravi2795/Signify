import type { SignKeyframe, SignSequenceItem, ArmPose, HeadPose } from '../../types/call';
import { SignLanguageEngine } from '../sign/SignLanguageEngine';

export interface InterpolatedPose {
  leftArm: ArmPose;
  rightArm: ArmPose;
  head: HeadPose;
  breathOffset: number;
}

export class AvatarAnimationEngine {
  private engine: SignLanguageEngine;
  private currentSequence: SignSequenceItem[] = [];
  private activeSignIndex = -1;
  private signStartTime = 0;
  private restPose: SignKeyframe;
  private currentPose: SignKeyframe;
  private targetPose: SignKeyframe;
  private lastBlinkTime = 0;
  private isBlinking = false;
  private blinkDuration = 180; // ms
  private onSignChangeCallback?: (sign: SignSequenceItem | undefined, index: number) => void;

  constructor(engine: SignLanguageEngine) {
    this.engine = engine;
    this.restPose = this.engine.getRestPose();
    this.currentPose = JSON.parse(JSON.stringify(this.restPose));
    this.targetPose = JSON.parse(JSON.stringify(this.restPose));
  }

  setSequence(sequence: SignSequenceItem[], onSignChange?: (sign: SignSequenceItem | undefined, index: number) => void): void {
    this.currentSequence = sequence;
    this.onSignChangeCallback = onSignChange;
    this.activeSignIndex = sequence.length > 0 ? 0 : -1;
    this.signStartTime = performance.now();

    if (sequence.length > 0) {
      this.targetPose = sequence[0].keyframes[0] || this.restPose;
      this.onSignChangeCallback?.(sequence[0], 0);
    } else {
      this.targetPose = this.restPose;
      this.onSignChangeCallback?.(undefined, -1);
    }
  }

  appendGlosses(glosses: string[], speedMultiplier = 1.0): void {
    const newItems = this.engine.getSignSequence(glosses, speedMultiplier);
    if (this.currentSequence.length === 0 || this.activeSignIndex >= this.currentSequence.length) {
      this.setSequence(newItems, this.onSignChangeCallback);
    } else {
      this.currentSequence.push(...newItems);
    }
  }

  clear(): void {
    this.currentSequence = [];
    this.activeSignIndex = -1;
    this.targetPose = this.restPose;
    this.onSignChangeCallback?.(undefined, -1);
  }

  /**
   * Evaluates current pose for the given timestamp
   */
  update(now: number): InterpolatedPose {
    // Check blinking logic
    if (!this.isBlinking && now - this.lastBlinkTime > 3200 + Math.random() * 2000) {
      this.isBlinking = true;
      this.lastBlinkTime = now;
    } else if (this.isBlinking && now - this.lastBlinkTime > this.blinkDuration) {
      this.isBlinking = false;
    }

    // Natural human breathing oscillation (approx 14 breaths per min = 4.2 sec cycle)
    const breathPhase = (now % 4200) / 4200;
    const breathOffset = Math.sin(breathPhase * Math.PI * 2) * 0.012;

    // Check if playing sequence
    if (this.activeSignIndex >= 0 && this.activeSignIndex < this.currentSequence.length) {
      const activeSign = this.currentSequence[this.activeSignIndex];
      const elapsedSign = (now - this.signStartTime) / 1000;
      const signDuration = activeSign.duration;

      if (elapsedSign >= signDuration) {
        // Move to next sign in sequence
        this.activeSignIndex++;
        this.signStartTime = now;

        if (this.activeSignIndex < this.currentSequence.length) {
          const nextSign = this.currentSequence[this.activeSignIndex];
          this.onSignChangeCallback?.(nextSign, this.activeSignIndex);
        } else {
          // Finished sequence, gracefully transition back to resting pose
          this.activeSignIndex = -1;
          this.targetPose = this.restPose;
          this.onSignChangeCallback?.(undefined, -1);
        }
      } else {
        // Calculate keyframe interpolation within current sign
        const progress = Math.min(1.0, elapsedSign / signDuration);
        const kfs = activeSign.keyframes;

        if (kfs.length === 1) {
          this.targetPose = kfs[0];
        } else {
          // Find enclosing keyframe pair
          let kfA = kfs[0];
          let kfB = kfs[kfs.length - 1];

          for (let i = 0; i < kfs.length - 1; i++) {
            if (progress >= kfs[i].timestampOffset && progress <= kfs[i + 1].timestampOffset) {
              kfA = kfs[i];
              kfB = kfs[i + 1];
              break;
            }
          }

          const range = kfB.timestampOffset - kfA.timestampOffset || 0.001;
          const localProgress = Math.max(0, Math.min(1, (progress - kfA.timestampOffset) / range));
          // Cubic ease-in-out for fluid human gestures
          const eased = localProgress < 0.5 
            ? 4 * localProgress * localProgress * localProgress 
            : 1 - Math.pow(-2 * localProgress + 2, 3) / 2;

          this.targetPose = this.interpolateKeyframes(kfA, kfB, eased);
        }
      }
    } else {
      this.targetPose = this.restPose;
    }

    // Smooth physics-like lerp from currentPose to targetPose for organic hand transitions
    const lerpFactor = 0.16;
    this.currentPose = this.interpolateKeyframes(this.currentPose, this.targetPose, lerpFactor);

    // Apply eye state
    const head = { ...this.currentPose.head };
    if (this.isBlinking) {
      head.eyes = 'blink';
    }

    return {
      leftArm: this.currentPose.leftArm,
      rightArm: this.currentPose.rightArm,
      head,
      breathOffset
    };
  }

  private interpolateKeyframes(a: SignKeyframe, b: SignKeyframe, t: number): SignKeyframe {
    const lerp = (v0: number, v1: number) => v0 + (v1 - v0) * t;

    const lerpArm = (armA: ArmPose, armB: ArmPose): ArmPose => {
      const fingers: [number, number, number, number, number] = [
        lerp(armA.handPose.fingersCurled[0], armB.handPose.fingersCurled[0]),
        lerp(armA.handPose.fingersCurled[1], armB.handPose.fingersCurled[1]),
        lerp(armA.handPose.fingersCurled[2], armB.handPose.fingersCurled[2]),
        lerp(armA.handPose.fingersCurled[3], armB.handPose.fingersCurled[3]),
        lerp(armA.handPose.fingersCurled[4], armB.handPose.fingersCurled[4])
      ];

      return {
        elbowX: lerp(armA.elbowX, armB.elbowX),
        elbowY: lerp(armA.elbowY, armB.elbowY),
        wristX: lerp(armA.wristX, armB.wristX),
        wristY: lerp(armA.wristY, armB.wristY),
        handPose: {
          shape: t > 0.5 ? armB.handPose.shape : armA.handPose.shape,
          rotation: lerp(armA.handPose.rotation, armB.handPose.rotation),
          fingersCurled: fingers
        }
      };
    };

    return {
      timestampOffset: lerp(a.timestampOffset, b.timestampOffset),
      head: {
        tilt: lerp(a.head.tilt, b.head.tilt),
        nod: lerp(a.head.nod, b.head.nod),
        turn: lerp(a.head.turn, b.head.turn),
        eyebrows: t > 0.5 ? b.head.eyebrows : a.head.eyebrows,
        mouth: t > 0.5 ? b.head.mouth : a.head.mouth,
        eyes: t > 0.5 ? b.head.eyes : a.head.eyes
      },
      rightArm: lerpArm(a.rightArm, b.rightArm),
      leftArm: lerpArm(a.leftArm, b.leftArm)
    };
  }

  getActiveSign(): SignSequenceItem | undefined {
    if (this.activeSignIndex >= 0 && this.activeSignIndex < this.currentSequence.length) {
      return this.currentSequence[this.activeSignIndex];
    }
    return undefined;
  }
}
