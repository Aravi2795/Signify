import type { TranscriptEntry } from '../../types/call';

export interface STTEventMap {
  partial: (text: string) => void;
  final: (entry: TranscriptEntry) => void;
  sentenceBoundary: (sentence: string) => void;
  error: (errorMessage: string) => void;
}

export class SpeechToTextService {
  private partialListeners: ((text: string) => void)[] = [];
  private finalListeners: ((entry: TranscriptEntry) => void)[] = [];
  private sentenceBoundaryListeners: ((sentence: string) => void)[] = [];
  private errorListeners: ((errorMessage: string) => void)[] = [];

  private isRunning = false;
  private currentPartial = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private speechRecognition: any = null;
  private mockTimerId: number | null = null;

  getCurrentPartial(): string {
    return this.currentPartial;
  }

  constructor() {
    this.initBrowserSpeechRecognition();
  }

  private initBrowserSpeechRecognition(): void {
    // Check if browser has Web Speech API
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              interimTranscript += transcript;
            }
          }

          if (interimTranscript) {
            this.handlePartial(interimTranscript);
          }

          if (finalTranscript) {
            this.handleFinal(finalTranscript.trim());
          }
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onerror = (event: any) => {
          console.warn('[STT Service] Speech recognition error:', event.error);
        };

        this.speechRecognition = recognition;
      } catch (err) {
        console.warn('[STT Service] Browser speech recognition not initialized:', err);
      }
    }
  }

  startLiveMicCapture(): boolean {
    if (!this.speechRecognition) return false;
    try {
      this.isRunning = true;
      this.speechRecognition.start();
      return true;
    } catch (e) {
      console.warn('SpeechRecognition start failed', e);
      return false;
    }
  }

  stopLiveMicCapture(): void {
    if (this.speechRecognition && this.isRunning) {
      try {
        this.speechRecognition.stop();
      } catch (e) {
        console.warn('SpeechRecognition stop error', e);
      }
    }
    this.isRunning = false;
  }

  /**
   * Process incoming partial text from mock simulator or streaming server
   */
  handlePartial(text: string): void {
    this.currentPartial = text;
    this.partialListeners.forEach(cb => cb(text));
  }

  /**
   * Process finalized utterance
   */
  handleFinal(text: string, speaker: 'caller' | 'user' = 'caller'): TranscriptEntry {
    const entry: TranscriptEntry = {
      id: 'tx_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      speaker,
      text,
      timestamp: Date.now(),
      isFinal: true
    };

    this.currentPartial = '';
    this.partialListeners.forEach(cb => cb(''));
    this.finalListeners.forEach(cb => cb(entry));
    this.sentenceBoundaryListeners.forEach(cb => cb(text));

    return entry;
  }

  simulateError(message: string): void {
    this.errorListeners.forEach(cb => cb(message));
  }

  onPartial(callback: (text: string) => void): () => void {
    this.partialListeners.push(callback);
    return () => {
      this.partialListeners = this.partialListeners.filter(cb => cb !== callback);
    };
  }

  onFinal(callback: (entry: TranscriptEntry) => void): () => void {
    this.finalListeners.push(callback);
    return () => {
      this.finalListeners = this.finalListeners.filter(cb => cb !== callback);
    };
  }

  onSentenceBoundary(callback: (sentence: string) => void): () => void {
    this.sentenceBoundaryListeners.push(callback);
    return () => {
      this.sentenceBoundaryListeners = this.sentenceBoundaryListeners.filter(cb => cb !== callback);
    };
  }

  onError(callback: (msg: string) => void): () => void {
    this.errorListeners.push(callback);
    return () => {
      this.errorListeners = this.errorListeners.filter(cb => cb !== callback);
    };
  }

  destroy(): void {
    this.stopLiveMicCapture();
    if (this.mockTimerId !== null) {
      clearInterval(this.mockTimerId);
      this.mockTimerId = null;
    }
    this.partialListeners = [];
    this.finalListeners = [];
    this.sentenceBoundaryListeners = [];
    this.errorListeners = [];
  }
}
