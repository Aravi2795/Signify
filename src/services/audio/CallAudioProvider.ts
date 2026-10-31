/**
 * Real Phone & Mock Call Audio Provider Abstraction
 * Follows strict architectural boundary: Audio Stream -> STT -> Semantic -> Sign -> Avatar.
 */

export interface CallAudioProvider {
  id: string;
  start(): Promise<void>;
  stop(): Promise<void>;
  onAudioChunk(callback: (chunk: ArrayBuffer) => void): void;
  onSpeakingChange(callback: (isSpeaking: boolean, energyLevel: number) => void): void;
  isCapturing(): boolean;
}

/**
 * Mock audio provider that simulates caller telephony audio streaming with natural pauses
 */
export class MockCallAudioProvider implements CallAudioProvider {
  id = 'mock-telephony-audio';
  private capturing = false;
  private chunkListeners: ((chunk: ArrayBuffer) => void)[] = [];
  private speakingListeners: ((isSpeaking: boolean, energyLevel: number) => void)[] = [];
  private intervalId: number | null = null;
  private currentEnergy = 0;
  private targetEnergy = 0;

  async start(): Promise<void> {
    this.capturing = true;
    
    // Simulate real audio stream packet delivery (every 100ms)
    this.intervalId = window.setInterval(() => {
      if (!this.capturing) return;

      // Smooth energy transitions
      this.currentEnergy += (this.targetEnergy - this.currentEnergy) * 0.25;
      
      // Dispatch mock PCM chunk
      const buffer = new ArrayBuffer(512);
      this.chunkListeners.forEach(cb => cb(buffer));

      const isSpeaking = this.currentEnergy > 0.15;
      this.speakingListeners.forEach(cb => cb(isSpeaking, this.currentEnergy));
    }, 100);
  }

  async stop(): Promise<void> {
    this.capturing = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.targetEnergy = 0;
    this.currentEnergy = 0;
    this.speakingListeners.forEach(cb => cb(false, 0));
  }

  setSimulatedSpeaking(isSpeaking: boolean, intensity: number = 0.75): void {
    this.targetEnergy = isSpeaking ? intensity : 0.05;
  }

  onAudioChunk(callback: (chunk: ArrayBuffer) => void): void {
    this.chunkListeners.push(callback);
  }

  onSpeakingChange(callback: (isSpeaking: boolean, energyLevel: number) => void): void {
    this.speakingListeners.push(callback);
  }

  isCapturing(): boolean {
    return this.capturing;
  }
}

/**
 * Browser Microphone Audio Provider (for live speech testing via real user voice)
 */
export class WebMicAudioProvider implements CallAudioProvider {
  id = 'web-microphone-audio';
  private capturing = false;
  private mediaStream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private chunkListeners: ((chunk: ArrayBuffer) => void)[] = [];
  private speakingListeners: ((isSpeaking: boolean, energyLevel: number) => void)[] = [];
  private animFrameId: number | null = null;

  async start(): Promise<void> {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const source = this.audioContext.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      source.connect(this.analyser);

      this.capturing = true;
      const dataArray = new Uint8Array(this.analyser.frequencyBinCount);

      const monitorAudio = () => {
        if (!this.capturing || !this.analyser) return;
        this.analyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const avg = sum / dataArray.length;
        const normalized = Math.min(1.0, avg / 80);
        const isSpeaking = normalized > 0.12;

        this.speakingListeners.forEach(cb => cb(isSpeaking, normalized));

        // Simulated chunk
        if (isSpeaking) {
          const chunk = dataArray.buffer.slice(0, 128);
          this.chunkListeners.forEach(cb => cb(chunk));
        }

        this.animFrameId = requestAnimationFrame(monitorAudio);
      };

      monitorAudio();
    } catch (err) {
      console.warn('Microphone access not permitted or unavailable, falling back to mock provider.', err);
      throw err;
    }
  }

  async stop(): Promise<void> {
    this.capturing = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    if (this.audioContext) {
      await this.audioContext.close();
      this.audioContext = null;
    }
    this.speakingListeners.forEach(cb => cb(false, 0));
  }

  onAudioChunk(callback: (chunk: ArrayBuffer) => void): void {
    this.chunkListeners.push(callback);
  }

  onSpeakingChange(callback: (isSpeaking: boolean, energyLevel: number) => void): void {
    this.speakingListeners.push(callback);
  }

  isCapturing(): boolean {
    return this.capturing;
  }
}

/**
 * Android Native Telephony Audio Provider (Stub for React Native / Android InCallService)
 */
export class AndroidCallAudioProviderStub implements CallAudioProvider {
  id = 'android-native-incall-telephony';
  private capturing = false;

  async start(): Promise<void> {
    // In production React Native app with InCallService / TelecomManager:
    // await NativeModules.InCallAudioModule.startAudioCapture();
    console.log('[AndroidCallAudioProvider] TelecomManager InCallService hook initialized');
    this.capturing = true;
  }

  async stop(): Promise<void> {
    // await NativeModules.InCallAudioModule.stopAudioCapture();
    this.capturing = false;
  }

  onAudioChunk(_callback: (chunk: ArrayBuffer) => void): void {}
  onSpeakingChange(_callback: (isSpeaking: boolean, energyLevel: number) => void): void {}
  isCapturing(): boolean {
    return this.capturing;
  }
}
