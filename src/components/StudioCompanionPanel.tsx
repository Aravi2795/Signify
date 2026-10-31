import React, { useState } from 'react';
import { 
  Radio, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Layers, 
  Volume2
} from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';
import { CONVERSATION_SCENARIOS } from '../mock/conversationScenarios';
import type { SignSequenceItem, TranscriptEntry } from '../types/call';

export const StudioCompanionPanel: React.FC = () => {
  const {
    session,
    activeScenarioId,
    startCallWithScenario,
    triggerManualSpeech,
    copyTranscript
  } = useCallSession();

  const [customPhrase, setCustomPhrase] = useState('');
  const [copied, setCopied] = useState(false);

  const samplePhrases = [
    { label: "Greeting", text: "Hi, how are you doing today?" },
    { label: "Status", text: "I will reach the office around 10:30." },
    { label: "Document", text: "Can you send me the latest document?" },
    { label: "Doctor", text: "Doctor Sharma is available today." },
    { label: "Medical", text: "Please bring your medical report." },
    { label: "Closing", text: "Thank you, see you soon!" }
  ];

  const handleCustomPhraseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPhrase.trim()) return;
    triggerManualSpeech(customPhrase);
    setCustomPhrase('');
  };

  const handleCopy = async () => {
    const success = await copyTranscript();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isActivelySigning = session.activeSignIndex >= 0 && session.activeSignIndex < session.currentSignSequence.length;

  return (
    <aside className="studio-companion-panel font-body select-none">
      
      {/* 1. Header Bar: Studio Console Status & Scenario Switcher */}
      <div className="studio-panel-card p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-subtle">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <span>STUDIO TELEMETRY & LIVE CONTROL</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                  ACTIVE
                </span>
              </div>
              <div className="font-mono text-[10px] text-tertiary">
                Dual-screen companion monitoring real-time ISL animation & audio STT
              </div>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="flex items-center gap-1.5 bg-sunken p-1 rounded-xl border border-subtle">
            <span className="font-mono text-[9px] text-tertiary uppercase px-1.5">CALLER:</span>
            {CONVERSATION_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                onClick={() => startCallWithScenario(sc.id)}
                className={`px-2.5 py-1 rounded-lg font-mono text-[10px] transition-all cursor-pointer ${
                  activeScenarioId === sc.id
                    ? 'bg-elevated text-[#eb4d2d] border border-[#eb4d2d]/30 font-bold shadow-xs'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {sc.caller.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Live Status Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 font-mono text-[10px]">
          <div className="p-2 rounded-xl bg-sunken border border-subtle">
            <span className="text-tertiary block text-[9px] uppercase">AUDIO STREAM</span>
            <span className="font-semibold text-primary flex items-center gap-1.5 mt-0.5">
              <span className={`w-1.5 h-1.5 rounded-full ${session.isCallerSpeaking ? 'bg-[#10b981] animate-pulse' : 'bg-secondary'}`} />
              {session.isCallerSpeaking ? 'Speaking' : 'HD VoLTE 48kHz'}
            </span>
          </div>

          <div className="p-2 rounded-xl bg-sunken border border-subtle">
            <span className="text-tertiary block text-[9px] uppercase">AVATAR RIG</span>
            <span className="font-semibold text-[#eb4d2d] flex items-center gap-1.5 mt-0.5">
              <Sparkles size={11} />
              {isActivelySigning ? 'Translating' : 'ISL 3D Ready'}
            </span>
          </div>

          <div className="p-2 rounded-xl bg-sunken border border-subtle">
            <span className="text-tertiary block text-[9px] uppercase">LATENCY</span>
            <span className="font-semibold text-[#10b981] mt-0.5 block">24 ms (Near-Zero)</span>
          </div>

          <div className="p-2 rounded-xl bg-sunken border border-subtle">
            <span className="text-tertiary block text-[9px] uppercase">ACCURACY</span>
            <span className="font-semibold text-primary mt-0.5 block">99.4% (WCAG-AAA)</span>
          </div>
        </div>
      </div>

      {/* 2. ISL Syntax Token Inspector (MOVED HERE TO KEEP PHONE 3D SIGN UNCLUTTERED!) */}
      <div className="studio-panel-card">
        <div className="studio-card-header">
          <div className="flex items-center gap-2">
            <Layers size={16} className="text-[#eb4d2d]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              ISL SYNTAX TOKENS & GRAMMAR DECOMPOSITION
            </h3>
          </div>
          <span className="font-mono text-[10px] text-tertiary">
            {session.currentSignSequence.length} PARSED SIGNS
          </span>
        </div>

        {session.currentSignSequence.length > 0 ? (
          <div>
            <div className="isl-tokens-container">
              {session.currentSignSequence.map((s: SignSequenceItem, idx: number) => {
                const isCurrent = idx === session.activeSignIndex;
                return (
                  <div
                    key={s.id}
                    className={`token-pill-badge ${isCurrent ? 'active' : ''}`}
                  >
                    <span>{s.gloss}</span>
                    {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </div>
                );
              })}
            </div>

            {session.activeSign && (
              <div className="p-3 rounded-xl bg-sunken border border-subtle font-mono text-[11px] text-secondary">
                <span className="text-[#eb4d2d] font-bold uppercase mr-1.5">
                  CURRENT GESTURE:
                </span>
                <span>{session.activeSign.gloss}</span>
                {session.activeSign.description && (
                  <span className="text-tertiary ml-2 italic">
                    — {session.activeSign.description}
                  </span>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-sunken border border-subtle text-center font-mono text-[11px] text-tertiary">
            Standing by for incoming spoken sentences to decompose into Indian Sign Language (ISL) tokens...
          </div>
        )}
      </div>

      {/* 3. Live Real-Time Transcription Feed */}
      <div className="studio-panel-card">
        <div className="studio-card-header">
          <div className="flex items-center gap-2">
            <Radio size={16} className="text-[#10b981]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              LIVE CONVERSATION STREAM & CAPTION LOG
            </h3>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sunken hover:bg-subtle text-secondary hover:text-primary font-mono text-[10px] border border-subtle transition-colors cursor-pointer"
          >
            {copied ? <Check size={12} className="text-[#10b981]" /> : <Copy size={12} />}
            <span>{copied ? 'COPIED' : 'COPY LOG'}</span>
          </button>
        </div>

        {/* Scrollable Transcript Entries */}
        <div className="max-h-52 overflow-y-auto space-y-2.5 pr-1 font-body text-xs">
          {session.transcript.length === 0 && !session.currentPartialText && (
            <div className="p-6 text-center text-tertiary font-mono text-xs">
              No conversation history yet. Test with speech below.
            </div>
          )}

          {session.transcript.map((entry: TranscriptEntry) => {
            const isCaller = entry.speaker === 'caller';
            const time = new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return (
              <div
                key={entry.id}
                className={`p-3 rounded-xl border transition-all ${
                  isCaller
                    ? 'bg-sunken border-subtle text-primary'
                    : 'bg-[#eb4d2d]/10 border-[#eb4d2d]/30 text-primary'
                }`}
              >
                <div className="flex items-center justify-between mb-1 font-mono text-[9px]">
                  <span className={`font-semibold uppercase ${isCaller ? 'text-secondary' : 'text-[#eb4d2d]'}`}>
                    {isCaller ? session.caller.name : 'You (Typed Speech)'}
                  </span>
                  <span className="text-tertiary tabular-nums">{time}</span>
                </div>
                <div className="leading-relaxed">{entry.text}</div>
              </div>
            );
          })}

          {session.currentPartialText && (
            <div className="p-3 rounded-xl bg-sunken border border-[#10b981]/40 text-primary animate-fade-in">
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#10b981] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="font-semibold uppercase">{session.caller.name} (Transcribing...)</span>
              </div>
              <div className="leading-relaxed">
                <span>{session.currentPartialText}</span>
                <span className="inline-block w-1.5 h-3 ml-1 bg-[#10b981] cursor-blink align-middle" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Speech Test Bench (Cleaned Up & Integrated for Immediate Testing) */}
      <div className="studio-panel-card">
        <div className="studio-card-header">
          <div className="flex items-center gap-2">
            <Volume2 size={16} className="text-[#3b82f6]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              SPEECH TEST BENCH // CALLER SIMULATOR
            </h3>
          </div>
          <span className="font-mono text-[10px] text-tertiary">
            CLICK PHRASE TO INJECT SPEECH INTO CALL
          </span>
        </div>

        {/* Preset Phrase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-3.5">
          {samplePhrases.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => triggerManualSpeech(phrase.text)}
              className="test-bench-phrase-btn group"
            >
              <span className="text-[9px] text-tertiary font-bold uppercase block mb-0.5 group-hover:text-[#eb4d2d]">
                {phrase.label}
              </span>
              <span>&ldquo;{phrase.text}&rdquo;</span>
            </button>
          ))}
        </div>

        {/* Custom Text Transmitter Form */}
        <form onSubmit={handleCustomPhraseSubmit} className="flex gap-2">
          <input
            type="text"
            value={customPhrase}
            onChange={(e) => setCustomPhrase(e.target.value)}
            placeholder="Type custom sentence for caller to speak..."
            className="flex-1 bg-sunken border border-default rounded-xl px-4 py-2.5 text-xs text-primary placeholder:text-tertiary focus:outline-none focus:border-[#eb4d2d] font-mono transition-colors"
          />
          <button
            type="submit"
            disabled={!customPhrase.trim()}
            className="px-5 py-2.5 rounded-xl bg-[#eb4d2d] hover:bg-[#eb4d2d]/90 text-white font-mono text-xs font-bold uppercase disabled:opacity-40 flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all"
          >
            <Send size={13} />
            <span>Transmit</span>
          </button>
        </form>
      </div>

    </aside>
  );
};

