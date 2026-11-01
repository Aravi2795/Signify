import React, { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { 
  CallSession, 
  CallMode, 
  CallSettings, 
  TranscriptEntry
} from '../types/call';
import { MockCallAudioProvider } from '../services/audio/CallAudioProvider';
import { SpeechToTextService } from '../services/stt/SpeechToTextService';
import { SemanticProcessor } from '../services/semantic/SemanticProcessor';
import { SignLanguageEngine } from '../services/sign/SignLanguageEngine';
import { AvatarAnimationEngine } from '../services/avatar/AvatarAnimationEngine';
import { CONVERSATION_SCENARIOS, type ConversationScenario } from '../mock/conversationScenarios';
import { SignifyTelephony, isNativeAndroid } from '../services/telephony/AndroidTelephonyBridge';

interface CallSessionContextType {
  session: CallSession;
  settings: CallSettings;
  avatarEngine: AvatarAnimationEngine;
  currentScenario: ConversationScenario;
  activeScenarioId: string;
  isMicActive: boolean;
  
  // Actions
  acceptCall: () => void;
  declineCall: () => void;
  endCall: () => void;
  startCallWithScenario: (scenarioId: string) => void;
  setMode: (mode: CallMode) => void;
  toggleMute: () => void;
  toggleSpeaker: () => void;
  toggleLiveMic: () => Promise<boolean>;
  updateSettings: (partial: Partial<CallSettings>) => void;
  clearTranscript: () => void;
  copyTranscript: () => Promise<boolean>;
  addUserSpeech: (text: string) => void;
  triggerManualSpeech: (text: string) => void;
  simulateFailure: (type: 'stt' | 'sign' | 'none') => void;
}

const defaultSettings: CallSettings = {
  fontSize: 'medium',
  autoScroll: true,
  showTimestamps: true,
  signLanguage: 'ISL',
  signingSpeed: 1.0,
  avatarModel: 'rahul',
  highContrast: false,
  reducedMotion: false,
  hapticFeedback: true
};

const CallSessionContext = createContext<CallSessionContextType | null>(null);

export const CallSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Service singletons
  const audioProvider = useMemo(() => new MockCallAudioProvider(), []);
  const sttService = useMemo(() => new SpeechToTextService(), []);
  const semanticProcessor = useMemo(() => new SemanticProcessor(), []);
  const signEngine = useMemo(() => new SignLanguageEngine(), []);
  const avatarEngine = useMemo(() => new AvatarAnimationEngine(signEngine), [signEngine]);

  const audioProviderRef = useRef<MockCallAudioProvider>(audioProvider);
  const sttServiceRef = useRef<SpeechToTextService>(sttService);
  const semanticProcessorRef = useRef<SemanticProcessor>(semanticProcessor);
  const signEngineRef = useRef<SignLanguageEngine>(signEngine);
  const avatarEngineRef = useRef<AvatarAnimationEngine>(avatarEngine);

  // Keep refs in sync with memoized instances
  useEffect(() => {
    audioProviderRef.current = audioProvider;
    sttServiceRef.current = sttService;
    semanticProcessorRef.current = semanticProcessor;
    signEngineRef.current = signEngine;
    avatarEngineRef.current = avatarEngine;
  }, [audioProvider, sttService, semanticProcessor, signEngine, avatarEngine]);

  // Settings
  const [settings, setSettings] = useState<CallSettings>(() => {
    try {
      const saved = localStorage.getItem('accessible_call_settings');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  // Current Scenario
  const [activeScenarioId, setActiveScenarioId] = useState<string>('john-mathew-office');
  const currentScenario = CONVERSATION_SCENARIOS.find(s => s.id === activeScenarioId) || CONVERSATION_SCENARIOS[0];

  // Call session state
  const [session, setSession] = useState<CallSession>(() => ({
    id: 'call_init_' + Date.now(),
    caller: currentScenario.caller,
    status: 'incoming', // Master prompt flow starts with incoming call from John Mathew
    mode: 'call',
    duration: 0,
    isMuted: false,
    isSpeakerOn: true,
    isCallerSpeaking: false,
    audioLevel: 0,
    transcript: [],
    currentPartialText: '',
    currentSignSequence: [],
    activeSignIndex: -1,
    sttAvailable: true,
    signAvailable: true
  }));

  const [isMicActive, setIsMicActive] = useState(false);

  // Scenario execution timeout refs
  const scenarioTimersRef = useRef<number[]>([]);
  const durationTimerRef = useRef<number | null>(null);

  // Clear all pending timeouts
  const clearScenarioTimers = useCallback(() => {
    scenarioTimersRef.current.forEach(id => clearTimeout(id));
    scenarioTimersRef.current = [];
  }, []);

  // Update localStorage when settings change
  const updateSettings = useCallback((partial: Partial<CallSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...partial };
      try {
        localStorage.setItem('accessible_call_settings', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save settings', e);
      }
      return updated;
    });
  }, []);

  // Process incoming finalized text into Semantic + Sign
  const handleFinalTranscript = useCallback((text: string, speaker: 'caller' | 'user' = 'caller') => {
    const entry: TranscriptEntry = {
      id: `tx_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      speaker,
      text,
      timestamp: Date.now(),
      isFinal: true
    };

    setSession(prev => ({
      ...prev,
      transcript: [...prev.transcript, entry],
      currentPartialText: '',
      isCallerSpeaking: false,
      audioLevel: 0
    }));

    audioProviderRef.current.setSimulatedSpeaking(false, 0);

    // If sign service is enabled, process semantic & sign sequences
    if (session.signAvailable) {
      const { semantic, glosses } = semanticProcessorRef.current.process(text);
      const signSequence = signEngineRef.current.getSignSequence(glosses, settings.signingSpeed);

      setSession(prev => ({
        ...prev,
        currentSemantic: semantic,
        currentSignSequence: signSequence
      }));

      // Send to avatar engine
      avatarEngineRef.current.setSequence(signSequence, (activeSign, index) => {
        setSession(prev => ({
          ...prev,
          activeSignIndex: index,
          activeSign
        }));
      });
    }
  }, [session.signAvailable, settings.signingSpeed]);

  // Handle progressive partial text streaming
  const handlePartialTranscript = useCallback((partial: string) => {
    if (!session.sttAvailable) return;
    setSession(prev => ({
      ...prev,
      currentPartialText: partial,
      isCallerSpeaking: partial.length > 0,
      audioLevel: partial.length > 0 ? 0.65 : 0
    }));

    audioProviderRef.current.setSimulatedSpeaking(partial.length > 0, 0.7);
  }, [session.sttAvailable]);

  // Hook STT listeners
  useEffect(() => {
    const stt = sttServiceRef.current;
    const unsubPartial = stt.onPartial(handlePartialTranscript);
    const unsubFinal = stt.onFinal(entry => handleFinalTranscript(entry.text, entry.speaker));

    return () => {
      unsubPartial();
      unsubFinal();
    };
  }, [handlePartialTranscript, handleFinalTranscript]);

  // Call duration counter
  useEffect(() => {
    if (session.status === 'connected') {
      durationTimerRef.current = window.setInterval(() => {
        setSession(prev => ({ ...prev, duration: prev.duration + 1 }));
      }, 1000);
    } else {
      if (durationTimerRef.current) {
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
    }

    return () => {
      if (durationTimerRef.current) {
        clearInterval(durationTimerRef.current);
        durationTimerRef.current = null;
      }
    };
  }, [session.status]);



  // Run scripted mock scenario
  const playScenario = useCallback((scenario: ConversationScenario) => {
    clearScenarioTimers();
    let accumulatedDelay = 800; // Small initial pause after connecting

    scenario.steps.forEach((step) => {
      accumulatedDelay += step.delayAfterPrevious;

      // 1. Begin speaking step
      const startSpeakerTimer = window.setTimeout(() => {
        setSession(prev => {
          if (prev.status !== 'connected') return prev;
          return {
            ...prev,
            isCallerSpeaking: true,
            audioLevel: 0.65
          };
        });
        audioProviderRef.current.setSimulatedSpeaking(true, 0.75);
      }, accumulatedDelay);
      scenarioTimersRef.current.push(startSpeakerTimer);

      // 2. Stream progressive words
      let wordDelay = accumulatedDelay;
      let streamedSentence = '';

      step.words.forEach((word) => {
        wordDelay += word.delayMs;
        streamedSentence += (streamedSentence ? ' ' : '') + word.text;
        const currentSentenceSnapshot = streamedSentence;

        const wordTimer = window.setTimeout(() => {
          setSession(prev => {
            if (prev.status !== 'connected') return prev;
            return {
              ...prev,
              currentPartialText: currentSentenceSnapshot,
              audioLevel: 0.7 + Math.random() * 0.25
            };
          });
        }, wordDelay);
        scenarioTimersRef.current.push(wordTimer);
      });

      // 3. Sentence finalized at sentence boundary
      accumulatedDelay = wordDelay + 300;
      const finalTimer = window.setTimeout(() => {
        setSession(prev => {
          if (prev.status !== 'connected') return prev;
          return prev;
        });
        handleFinalTranscript(step.text, step.speaker);
      }, accumulatedDelay);
      scenarioTimersRef.current.push(finalTimer);
    });
  }, [clearScenarioTimers, handleFinalTranscript]);

  // Accept incoming call
  const acceptCall = useCallback(() => {
    clearScenarioTimers();
    audioProviderRef.current.start();

    setSession(prev => ({
      ...prev,
      status: 'connecting'
    }));

    const connectTimer = window.setTimeout(() => {
      setSession(prev => ({
        ...prev,
        status: 'connected',
        duration: 0
      }));

      if (isNativeAndroid()) {
        SignifyTelephony.answerCall().catch(console.warn);
        sttServiceRef.current.startLiveMicCapture();
        setIsMicActive(true);
      } else {
        playScenario(currentScenario);
      }
    }, 900);

    scenarioTimersRef.current.push(connectTimer);
  }, [clearScenarioTimers, currentScenario, playScenario]);

  // Decline call
  const declineCall = useCallback(() => {
    clearScenarioTimers();
    audioProviderRef.current.stop();
    if (isNativeAndroid()) {
      SignifyTelephony.endCall().catch(console.warn);
    }
    setSession(prev => ({
      ...prev,
      status: 'ended'
    }));
  }, [clearScenarioTimers]);



  // End active call -> transition to summary
  const endCall = useCallback(() => {
    clearScenarioTimers();
    audioProviderRef.current.stop();
    avatarEngineRef.current.clear();
    sttServiceRef.current.stopLiveMicCapture();
    setIsMicActive(false);
    if (isNativeAndroid()) {
      SignifyTelephony.endCall().catch(console.warn);
    }

    setSession(prev => ({
      ...prev,
      status: 'summary',
      isCallerSpeaking: false,
      audioLevel: 0,
      currentPartialText: ''
    }));
  }, [clearScenarioTimers]);

  // Listen to physical SIM card phone calls via Android InCallService
  useEffect(() => {
    if (!isNativeAndroid()) return;

    let subIncoming: { remove: () => void } | null = null;
    let subConnected: { remove: () => void } | null = null;
    let subEnded: { remove: () => void } | null = null;

    const setupListeners = async () => {
      try {
        subIncoming = await SignifyTelephony.addListener('incomingCall', (data) => {
          clearScenarioTimers();
          setSession(prev => ({
            ...prev,
            id: 'call_sim_' + Date.now(),
            caller: {
              name: 'Incoming SIM Call',
              phoneNumber: data.phoneNumber || 'Unknown',
              initials: 'SIM',
              subtitle: 'CELLULAR PHONE CALL'
            },
            status: 'incoming',
            mode: 'call',
            duration: 0,
            transcript: [],
            currentPartialText: ''
          }));
        });

        subConnected = await SignifyTelephony.addListener('callConnected', () => {
          setSession(prev => ({ ...prev, status: 'connected' }));
          sttServiceRef.current.startLiveMicCapture();
          setIsMicActive(true);
        });

        subEnded = await SignifyTelephony.addListener('callEnded', () => {
          endCall();
        });
      } catch (err) {
        console.warn('Native telephony listeners setup failed:', err);
      }
    };

    setupListeners();

    return () => {
      subIncoming?.remove();
      subConnected?.remove();
      subEnded?.remove();
    };
  }, [clearScenarioTimers, endCall]);

  // Restart call with a specific scenario
  const startCallWithScenario = useCallback((scenarioId: string) => {
    clearScenarioTimers();
    audioProviderRef.current.stop();
    avatarEngineRef.current.clear();
    sttServiceRef.current.stopLiveMicCapture();
    setIsMicActive(false);

    const scenario = CONVERSATION_SCENARIOS.find(s => s.id === scenarioId) || CONVERSATION_SCENARIOS[0];
    setActiveScenarioId(scenario.id);

    setSession({
      id: 'call_' + Date.now(),
      caller: scenario.caller,
      status: 'incoming',
      mode: 'call',
      duration: 0,
      isMuted: false,
      isSpeakerOn: true,
      isCallerSpeaking: false,
      audioLevel: 0,
      transcript: [],
      currentPartialText: '',
      currentSignSequence: [],
      activeSignIndex: -1,
      sttAvailable: true,
      signAvailable: true
    });
  }, [clearScenarioTimers]);

  // Mode switching
  const setMode = useCallback((mode: CallMode) => {
    setSession(prev => ({
      ...prev,
      mode
    }));
  }, []);

  const toggleMute = useCallback(() => {
    setSession(prev => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const toggleSpeaker = useCallback(() => {
    setSession(prev => ({ ...prev, isSpeakerOn: !prev.isSpeakerOn }));
  }, []);

  // Toggle Live Microphone for direct user speech testing
  const toggleLiveMic = useCallback(async (): Promise<boolean> => {
    if (isMicActive) {
      sttServiceRef.current.stopLiveMicCapture();
      setIsMicActive(false);
      return false;
    } else {
      const started = sttServiceRef.current.startLiveMicCapture();
      if (started) {
        setIsMicActive(true);
      }
      return started;
    }
  }, [isMicActive]);

  // Add listener reply (You)
  const addUserSpeech = useCallback((text: string) => {
    if (!text.trim()) return;
    const entry: TranscriptEntry = {
      id: `tx_user_${Date.now()}`,
      speaker: 'user',
      text: text.trim(),
      timestamp: Date.now(),
      isFinal: true
    };
    setSession(prev => ({
      ...prev,
      transcript: [...prev.transcript, entry]
    }));
  }, []);

  // Trigger manual phrase (e.g. testing specific signs)
  const triggerManualSpeech = useCallback((text: string) => {
    clearScenarioTimers();
    handleFinalTranscript(text, 'caller');
  }, [clearScenarioTimers, handleFinalTranscript]);

  const clearTranscript = useCallback(() => {
    setSession(prev => ({
      ...prev,
      transcript: [],
      currentPartialText: ''
    }));
  }, []);

  const copyTranscript = useCallback(async () => {
    try {
      const formatted = session.transcript.map((t: TranscriptEntry) => {
        const time = new Date(t.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const name = t.speaker === 'caller' ? session.caller.name : 'You';
        return `[${time}] ${name}:\n${t.text}\n`;
      }).join('\n');

      await navigator.clipboard.writeText(formatted);
      return true;
    } catch {
      return false;
    }
  }, [session.transcript, session.caller.name]);

  const simulateFailure = useCallback((type: 'stt' | 'sign' | 'none') => {
    setSession(prev => ({
      ...prev,
      sttAvailable: type !== 'stt',
      signAvailable: type !== 'sign'
    }));
  }, []);

  return (
    <CallSessionContext.Provider
      value={{
        session,
        settings,
        avatarEngine,
        currentScenario,
        activeScenarioId,
        isMicActive,
        acceptCall,
        declineCall,
        endCall,
        startCallWithScenario,
        setMode,
        toggleMute,
        toggleSpeaker,
        toggleLiveMic,
        updateSettings,
        clearTranscript,
        copyTranscript,
        addUserSpeech,
        triggerManualSpeech,
        simulateFailure
      }}
    >
      {children}
    </CallSessionContext.Provider>
  );
};

export const useCallSession = () => {
  const context = useContext(CallSessionContext);
  if (!context) {
    throw new Error('useCallSession must be used within a CallSessionProvider');
  }
  return context;
};
