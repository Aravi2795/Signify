// SignVerse Authentic Indian Sign Language (ISL) Dataset
// Sourced directly from nehaprapti/Sign_Verse repository
// Includes full 26 manual alphabets (A-Z) and 50+ core vocabulary signs with joint rotations.

export interface BoneStep {
  boneName: string;
  axis: 'x' | 'y' | 'z';
  target: number;
}

export const SIGN_VERSE_ALPHABETS: Record<string, BoneStep[]> = {
  "A": [
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "y",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "y",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "y",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.3142
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.2856
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": -0.0873
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": -0.0436
    }
  ],
  "B": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.4833
    },
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandIndex2",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandIndex3",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -0.6981
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "x",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.3142
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.4833
    }
  ],
  "C": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.4488
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.4833
    }
  ],
  "D": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.4488
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.4189
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.4833
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.1636
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.0952
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.1636
    }
  ],
  "E": [
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "y",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "y",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "y",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.2618
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": -0.0873
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.2094
    }
  ],
  "F": [
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.3491
    }
  ],
  "G": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.8976
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandIndex2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandIndex3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.2618
    }
  ],
  "H": [
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "z",
      "target": -0.2094
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.0524
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "y",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.1047
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.2083
    }
  ],
  "I": [
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "y",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "y",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "y",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 2.0268
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.2618
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": -0.0873
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.2417
    }
  ],
  "J": [
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.0873
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "y",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.8491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.309
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": -0.4488
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.2618
    }
  ],
  "K": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 1.848
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.6283
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": 0.3927
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7662
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.0952
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.1636
    }
  ],
  "L": [
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -1.3659
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 1.1855
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1047
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.7854
    }
  ],
  "M": [
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.3659
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": -0.1257
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.0524
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "y",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.1047
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.2083
    }
  ],
  "N": [
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.3659
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": -0.1257
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.0524
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "y",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.1047
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.2083
    }
  ],
  "O": [
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "y",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "y",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "y",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 2.1666
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.2618
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.2094
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": -0.0873
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.2417
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.1745
    }
  ],
  "P": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 0.748
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 0.748
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 0.748
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.3659
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": 0.2094
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5928
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.4833
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.1636
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.537
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.0952
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.1636
    }
  ],
  "Q": [
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 0.748
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 0.748
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.3659
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": -0.1257
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5928
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.309
    },
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandIndex2",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandIndex3",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "x",
      "target": 0.3142
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 0.3142
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 1.122
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.0952
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.309
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.3785
    }
  ],
  "R": [
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 0.3927
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 0.748
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "x",
      "target": 1.3659
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": -0.1257
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.3659
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5928
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.0524
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -2.4166
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "y",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.1047
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.2083
    }
  ],
  "S": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandIndex2",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandIndex3",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.0952
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.2083
    },
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandIndex2",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandIndex3",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 1.1636
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "y",
      "target": -2.3562
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.2083
    }
  ],
  "T": [
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -1.3659
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 1.1855
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1047
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.4833
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "z",
      "target": 0.5712
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": -1.1636
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": 0.1047
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.3696
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.309
    }
  ],
  "U": [
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "y",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "y",
      "target": -0.1745
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "y",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "y",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 2.1666
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 0.0873
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.3491
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.2618
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -1.5708
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 0.2618
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.2094
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": -0.0873
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.2417
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.1745
    }
  ],
  "V": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "y",
      "target": 0.1963
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "y",
      "target": -0.1963
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -1.3659
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 1.1855
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1047
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.7854
    }
  ],
  "W": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "y",
      "target": 0.1963
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "y",
      "target": -0.2618
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "y",
      "target": -0.3927
    },
    {
      "boneName": "mixamorigRightHandThumb1",
      "axis": "y",
      "target": 0.6283
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.309
    },
    {
      "boneName": "mixamorigLeftHandIndex1",
      "axis": "y",
      "target": -0.1963
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "y",
      "target": 0.3927
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "y",
      "target": 0.3927
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "y",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.1309
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.309
    }
  ],
  "X": [
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.0982
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.6981
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.5236
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.0952
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandThumb2",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHandThumb3",
      "axis": "y",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.2244
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "y",
      "target": -0.0952
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.0472
    }
  ],
  "Y": [
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle2",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandMiddle3",
      "axis": "z",
      "target": 2.0944
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing2",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandRing3",
      "axis": "z",
      "target": 1.9635
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky2",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandPinky3",
      "axis": "z",
      "target": 1.7453
    },
    {
      "boneName": "mixamorigRightHandThumb2",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHandThumb3",
      "axis": "y",
      "target": -1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": 1.2566
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "x",
      "target": -0.3927
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.2094
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "y",
      "target": 0.0952
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.428
    },
    {
      "boneName": "mixamorigLeftHandMiddle1",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle2",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandMiddle3",
      "axis": "z",
      "target": -2.0944
    },
    {
      "boneName": "mixamorigLeftHandRing1",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing2",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandRing3",
      "axis": "z",
      "target": -1.9635
    },
    {
      "boneName": "mixamorigLeftHandPinky1",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky2",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandPinky3",
      "axis": "z",
      "target": -1.7453
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "y",
      "target": -0.7854
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "x",
      "target": 1.5708
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.8976
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.428
    }
  ],
  "Z": [
    {
      "boneName": "mixamorigRightHandIndex1",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandMiddle1",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandRing1",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHandPinky1",
      "axis": "z",
      "target": 1.0472
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "z",
      "target": -0.3142
    },
    {
      "boneName": "mixamorigRightHand",
      "axis": "y",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "z",
      "target": 0.4488
    },
    {
      "boneName": "mixamorigRightForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "x",
      "target": -0.4833
    },
    {
      "boneName": "mixamorigRightArm",
      "axis": "z",
      "target": 1.1636
    },
    {
      "boneName": "mixamorigLeftHandThumb1",
      "axis": "x",
      "target": -1.0472
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "z",
      "target": 0.7854
    },
    {
      "boneName": "mixamorigLeftHand",
      "axis": "y",
      "target": -0.3491
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "z",
      "target": -0.5236
    },
    {
      "boneName": "mixamorigLeftForeArm",
      "axis": "x",
      "target": 0.1745
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "x",
      "target": -0.6283
    },
    {
      "boneName": "mixamorigLeftArm",
      "axis": "z",
      "target": -1.1636
    }
  ]
};

export const SIGN_VERSE_WORDS: Record<string, BoneStep[][]> = {
  "BAD": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.55
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.93
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.26
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.99
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.28
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.32
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -0.54
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.55
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.93
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.86
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.72
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.23
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -0.16
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.19
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": -0.52
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": -0.14
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "BAT_ANIMAL": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.5
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.77
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.68
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.99
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.15
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.64
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.13
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": 0.13
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.26
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.13
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.63
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.13
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.43
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.34
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.06
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.13
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": 0.13
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.45
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.32
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.56
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -0.77
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": 0.68
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "BAT_CRICKET": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.03
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.98
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.58
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.64
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.28
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.03
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.98
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.03
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.98
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.58
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.64
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.28
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "BIG": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -1.26
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -1.06
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.55
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": -0.16
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": 0.71
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "x",
        "target": -1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.06
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.55
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.71
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.62
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -0.83
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -2.44
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.55
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.14
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "x",
        "target": -1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.44
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.55
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.14
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "COLD": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.55
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.56
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.55
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.55
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.56
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.37
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.55
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "DRINK": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.49
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.91
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.36
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.5
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.23
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "EAT": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -2.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.39
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.44
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -1.42
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 1.38
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -1.12
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -1.91
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.29
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.72
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -2.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.39
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.44
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -1.42
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 1.38
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -1.12
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -1.91
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.29
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.72
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -2.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.39
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.44
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -1.42
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 1.38
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -1.12
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -1.91
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.29
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.72
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "FATHER": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.8
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.44
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.32
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.8
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.28
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -2.07
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": 2.23
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "FRIEND": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.74
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -1.19
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -0.78
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.95
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.3
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 1.77
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.23
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.99
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.8
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "GO": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.9
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.77
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.08
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.94
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.24
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": -0.16
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.48
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.44
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.5
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "GOOD": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.64
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.56
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -0.62
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.84
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "x",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.34
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "x",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.96
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.75
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -0.62
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.84
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "x",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.34
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "x",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.64
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.56
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -0.62
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.84
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "x",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.34
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "x",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.96
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.75
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -0.62
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.84
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "x",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.34
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "x",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "GOODBYE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.4
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.75
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.4
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HAPPY": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 0.76
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.52
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -0.5
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": 0.48
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -1.24
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 0.44
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": -0.41
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.81
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.5
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.24
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.44
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.41
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.14
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.9
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -1.01
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": 0.27
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -2
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": -0.35
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.9
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.01
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.21
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HEAR": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.59
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.55
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -1.15
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.44
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.71
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0.25
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.41
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.64
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.23
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.71
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0.25
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HELLO": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.6
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.28
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.6
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.09
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HELP": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.5
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.77
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.68
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.99
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.15
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.64
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.13
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": 0.13
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.26
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.13
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.63
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.13
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.43
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.34
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.06
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.13
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": 0.13
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.45
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.32
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.56
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -0.77
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": 0.68
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HI": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.04
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.07
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.62
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.04
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.88
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.81
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.04
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.1
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.81
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.04
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.2
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.14
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.81
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HOME": [
    [
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "x",
        "target": -1.0472
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.0449
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.4488
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.5236
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": -1.0472
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.0449
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.4488
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.5236
      }
    ],
    [
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.2566
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.2566
      }
    ],
    [
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -2.0944
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.0944
      }
    ]
  ],
  "HOT": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 0.78
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.02
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": 2.57
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.8
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 3.14
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.44
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.33
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.6
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.64
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 0.81
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.44
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.02
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": 2.57
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.8
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 3.14
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.44
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.04
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.22
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.6
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.8
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 0.81
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.44
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": 1.66
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.87
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 3.14
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": 0.02
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.22
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.6
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.8
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "HOUSE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.39
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.53
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": -1.58
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -0.51
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 1.1
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": -0.58
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.05
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.58
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.51
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.58
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "KNOW": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.49
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.37
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.77
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.69
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.49
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.18
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.77
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.69
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.49
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.37
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.77
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.69
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "LEARN": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.02
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.28
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.55
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.61
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.16
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.16
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.03
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.75
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.55
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.69
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.99
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -0.55
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "x",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": -1.47
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.06
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.95
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.95
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.69
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "x",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.22
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "x",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "x",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.99
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.03
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.75
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.55
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.69
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.99
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -0.55
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "x",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": -1.47
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.06
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.95
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.95
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.69
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "x",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.22
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "x",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "x",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.99
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "LISTEN": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.59
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.55
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -1.15
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.44
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.71
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0.25
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.41
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.64
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.23
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.71
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0.25
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "MAKE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.55
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.26
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.27
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.32
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.93
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.55
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.26
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.27
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.48
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.32
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.93
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.55
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.26
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.27
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "y",
        "target": 1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.32
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.93
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "MOTHER": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.8
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.91
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.37
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.58
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.8
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.28
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -2.07
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "z",
        "target": 2.23
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "NO": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.36
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.23
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.15
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.65
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -1.03
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.36
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.23
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -1.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.36
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.23
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.15
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.65
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -1.03
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.36
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.23
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -1.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "PLAY": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.03
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.98
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.58
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.64
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.28
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.03
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.98
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.03
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.98
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.58
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.64
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.87
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.62
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.28
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "PLEASE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.57
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.22
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.98
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -2.47
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.41
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "x",
        "target": 1.46
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "y",
        "target": 0.57
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.93
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.19
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": 0.34
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": 0.15
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "x",
        "target": 1.86
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": 1.58
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "x",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.39
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.57
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.22
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.5
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -2.47
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.41
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "x",
        "target": 1.46
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "x",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "y",
        "target": 0.57
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.93
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.19
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": 0.34
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": 0.15
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "x",
        "target": 1.86
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": 1.58
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "x",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.39
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "SAD": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.29
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.22
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.76
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.29
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.67
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.43
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": 0.18
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.43
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.36
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.31
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "SCHOOL": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.19
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.81
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -2.18
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.07
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.21
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.19
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.81
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.82
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.07
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.82
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.21
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.19
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.81
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -2.18
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.07
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.21
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 1.19
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.81
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.82
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0.07
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.81
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.82
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.72
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.21
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "SEE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.83
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.6
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.32
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.68
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.83
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.6
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.86
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.68
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -0.39
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "SMALL": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.99
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 0.71
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.97
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.83
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.72
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "y",
        "target": -0.07
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -0.25
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "x",
        "target": 1.61
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -0.14
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "y",
        "target": -0.32
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -0.16
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "y",
        "target": -0.39
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.99
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.71
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.72
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 1.61
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "y",
        "target": 0.32
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "y",
        "target": 0.39
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0.18
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.99
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": 0.71
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.97
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.83
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.7
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.53
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "y",
        "target": -0.07
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -0.25
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigLeftHandThumb2",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigLeftHandThumb3",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "x",
        "target": 1.61
      },
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "y",
        "target": -0.25
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -0.14
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "y",
        "target": 0.02
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -0.16
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "y",
        "target": -0.12
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.99
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.71
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.7
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.67
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "x",
        "target": 0.46
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 1.61
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": 0.25
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.14
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0.18
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "SORRY": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.31
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.66
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.41
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.22
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.88
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.96
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.68
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.17
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.22
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.31
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.66
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.41
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.22
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.88
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.96
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.68
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.17
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.22
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.31
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.66
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.41
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.22
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.88
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.04
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.96
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.68
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.17
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.11
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.24
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.22
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "STOP": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.76
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.24
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.29
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -1.12
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "TEA": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.88
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.16
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.06
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.92
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.27
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.76
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.34
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.19
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": -0.08
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.88
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.16
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.06
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.92
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.27
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.22
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.34
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.19
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": -0.08
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.88
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.16
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.06
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.92
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.27
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.01
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "y",
        "target": -0.08
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.34
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.19
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "y",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "y",
        "target": -0.27
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": -0.08
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "THANKYOU": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.61
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.71
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.61
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "TIME": [
    [
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": -0.7854
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.7854
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.2566
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 0.5236
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.8976
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.3491
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2618
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.5236
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.5236
      }
    ],
    [
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0
      }
    ],
    [
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2618
      }
    ],
    [
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.0472
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.0472
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0
      }
    ]
  ],
  "TODAY": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.92
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.9
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.24
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.31
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.92
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.84
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.31
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.92
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.9
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.24
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.31
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.92
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.13
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 1.1
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.84
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.31
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "TOMORROW": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.31
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.67
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.54
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.68
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.56
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.62
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -1.31
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.67
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 1.54
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.68
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.16
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -2.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.02
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "WALK": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.76
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.76
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.65
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.89
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.64
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.76
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.76
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.65
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.89
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": -0.34
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.76
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.76
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.65
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.89
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0.64
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": 0.76
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "y",
        "target": -0.76
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.65
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": -2.89
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "y",
        "target": 0.12
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "z",
        "target": -0.37
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.48
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 1.49
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": -0.18
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.57
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.17
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.63
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": -0.34
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 1.26
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "x",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "y",
        "target": 0.07
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "WORK": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.3
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.69
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": -0.11
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.35
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.21
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": -0.21
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.08
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.03
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "z",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "x",
        "target": -0.07
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "y",
        "target": -0.09
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 2.07
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "YES": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.19
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.06
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.19
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.06
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.16
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.19
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.06
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.19
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 1.06
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.46
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.16
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": -1.05
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.4
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0.53
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.4
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "YOU": [
    [
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.5236
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.5236
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 1.0472
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -0.5236
      }
    ],
    [
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0
      }
    ]
  ],
  "PERSON": [
    [
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0.3491
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0.6981
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0.3927
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 1.0472
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": 1.0472
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": -0.5236
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": -0.3142
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": -0.7854
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": -1.0472
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.428
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.6283
      }
    ],
    [
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0.0349
      }
    ],
    [
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandIndex2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandIndex3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandThumb1",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandThumb2",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandThumb3",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.0472
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": 0
      }
    ]
  ],
  "DOCUMENT": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.52
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -0.95
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.95
      }
    ],
    [
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.68
      }
    ],
    [
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.52
      }
    ]
  ],
  "SEND": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.5
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.4
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.5
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.4
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.85
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.85
      }
    ]
  ],
  "OFFICE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.9
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.9
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.2
      }
    ]
  ],
  "REACH": [
    [
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.65
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.8
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.5
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -0.65
      }
    ]
  ],
  "THANK_YOU": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.74
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.97
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.15
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.61
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.06
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.78
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.91
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -0.52
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.71
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -1.61
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.05
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "BYE": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.4
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 1.75
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.14
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.83
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": -1.19
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 2.4
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": -0.12
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.09
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "z",
        "target": 0.2
      }
    ],
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.38
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.38
      }
    ]
  ],
  "10:30": [
    [
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": -1.5708
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": -0.7854
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": -0.7854
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.2566
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 0.5236
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 1.5708
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 0.8976
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0.3491
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2618
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0.5236
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0.5236
      }
    ],
    [
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0
      }
    ],
    [
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0.2618
      }
    ],
    [
      {
        "boneName": "mixamorigLeftHandIndex1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandIndex2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandIndex3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandMiddle1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandMiddle2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandMiddle3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandRing1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandRing2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandRing3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandPinky1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandPinky2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandPinky3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftHandThumb1",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -1.0472
      },
      {
        "boneName": "mixamorigLeftHand",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandIndex1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandMiddle3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandRing3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky1",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky2",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHandPinky3",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "z",
        "target": 1.0472
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "y",
        "target": 0
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "z",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "x",
        "target": 0
      },
      {
        "boneName": "mixamorigRightHand",
        "axis": "y",
        "target": 0
      }
    ]
  ],
  "DOCTOR": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "z",
        "target": -0.8
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -1.2
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.6
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.9
      }
    ]
  ],
  "CAN": [
    [
      {
        "boneName": "mixamorigLeftArm",
        "axis": "x",
        "target": -0.55
      },
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "y",
        "target": -0.65
      },
      {
        "boneName": "mixamorigRightArm",
        "axis": "x",
        "target": -0.55
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "y",
        "target": 0.65
      }
    ],
    [
      {
        "boneName": "mixamorigLeftForeArm",
        "axis": "x",
        "target": 0.3
      },
      {
        "boneName": "mixamorigRightForeArm",
        "axis": "x",
        "target": 0.3
      }
    ]
  ]
};

export const SIGN_VERSE_STOP_WORDS = new Set([
  'A', 'AN', 'THE', 'IS', 'AM', 'ARE', 'WAS', 'WERE', 'BE', 'BEEN', 'BEING',
  'TO', 'OF', 'IN', 'ON', 'AT', 'FOR', 'AND', 'OR', 'BUT', 'SO', 'DO', 'DOES', 'DID'
]);

export const SIGN_VERSE_VERB_MAPPINGS: Record<string, string> = {
  PLAYED: 'PLAY',
  PLAYING: 'PLAY',
  PLAYS: 'PLAY',
  ATE: 'EAT',
  EATING: 'EAT',
  EATS: 'EAT',
  DRANK: 'DRINK',
  DRINKING: 'DRINK',
  DRINKS: 'DRINK',
  WENT: 'GO',
  GOING: 'GO',
  GOES: 'GO',
  SAW: 'SEE',
  SEEING: 'SEE',
  SEES: 'SEE',
  WALKED: 'WALK',
  WALKING: 'WALK',
  WALKS: 'WALK',
  WORKED: 'WORK',
  WORKING: 'WORK',
  WORKS: 'WORK',
  LEARNED: 'LEARN',
  LEARNING: 'LEARN',
  LEARNS: 'LEARN',
  HELPED: 'HELP',
  HELPING: 'HELP',
  HELPS: 'HELP',
  SENT: 'SEND',
  SENDING: 'SEND',
  SENDS: 'SEND',
  REACHED: 'REACH',
  REACHING: 'REACH',
  REACHES: 'REACH',
  CALLED: 'CALL',
  CALLING: 'CALL',
  CALLS: 'CALL',
  MADE: 'MAKE',
  MAKING: 'MAKE',
  MAKES: 'MAKE',
  KNEW: 'KNOW',
  KNOWING: 'KNOW',
  KNOWS: 'KNOW',
  LISTENED: 'LISTEN',
  LISTENING: 'LISTEN',
  LISTENS: 'LISTEN',
  HEARD: 'HEAR',
  HEARING: 'HEAR',
  HEARS: 'HEAR',
  STOPPED: 'STOP',
  STOPPING: 'STOP',
  STOPS: 'STOP',
  LIKED: 'LIKE',
  LIKING: 'LIKE',
  LIKES: 'LIKE'
};

export const SIGN_VERSE_WH_WORDS = new Set([
  'WHAT', 'WHERE', 'WHEN', 'WHO', 'WHOM', 'WHICH', 'WHY', 'HOW'
]);
