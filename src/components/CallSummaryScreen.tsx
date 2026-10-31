import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  RotateCcw, 
  FileText, 
  Clock,
  Settings,
  CheckCircle2
} from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';
import type { TranscriptEntry } from '../types/call';

interface CallSummaryScreenProps {
  onOpenSettings: () => void;
}

export const CallSummaryScreen: React.FC<CallSummaryScreenProps> = ({ onOpenSettings }) => {
  const {
    session,
    startCallWithScenario,
    activeScenarioId,
    copyTranscript
  } = useCallSession();

  const [copied, setCopied] = useState(false);

  // Format call duration
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleCopy = async () => {
    const success = await copyTranscript();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-surface text-primary select-none px-5 py-4 pb-8 overflow-y-auto font-body">
      
      {/* 1. Header */}
      <div className="flex items-center justify-between w-full shrink-0 border-b border-hairline pb-2.5 mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-primary">
            CALL SUMMARY
          </span>
          <span className="text-tertiary font-mono text-[10px]">/</span>
          <span className="text-secondary font-mono text-[10px] uppercase">ENDED</span>
        </div>

        <button
          onClick={onOpenSettings}
          className="phone-header-settings-btn"
          aria-label="Settings"
          title="Call Settings"
        >
          <Settings size={14} />
        </button>
      </div>

      {/* 2. Caller Identity Module */}
      <div className="flex flex-col items-center text-center my-auto w-full py-1">
        <div className="w-20 h-20 rounded-full bg-sunken border border-default flex items-center justify-center text-2xl font-bold font-display text-primary mb-2 shadow-md">
          {session.caller.initials || 'JM'}
        </div>

        <h1 className="font-display text-xl font-bold text-primary mb-0.5">
          {session.caller.name}
        </h1>

        <p className="font-mono text-xs text-secondary tabular-nums mb-3">
          {session.caller.phoneNumber}
        </p>

        {/* 3. Telemetry Matrix (Clean 2x2 Rounded Cards) */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-xs mb-3 text-left font-mono">
          <div className="p-2.5 rounded-xl bg-sunken border border-subtle">
            <div className="text-[9px] uppercase tracking-wider text-tertiary mb-1 flex items-center justify-between">
              <span>DURATION</span>
              <Clock size={11} className="text-secondary" />
            </div>
            <div className="font-display text-base font-bold text-primary tabular-nums">
              {formatTime(session.duration)}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-sunken border border-subtle">
            <div className="text-[9px] uppercase tracking-wider text-tertiary mb-1 flex items-center justify-between">
              <span>TURNS</span>
              <FileText size={11} className="text-secondary" />
            </div>
            <div className="font-display text-base font-bold text-primary tabular-nums">
              {session.transcript.length}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-sunken border border-subtle">
            <div className="text-[9px] uppercase tracking-wider text-tertiary mb-1 flex items-center justify-between">
              <span>INTERPRETER</span>
              <span className="text-[#eb4d2d] font-bold text-[9px]">ISL</span>
            </div>
            <div className="text-[10px] font-semibold text-[#eb4d2d] truncate">
              3D AVATAR RIG
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-sunken border border-subtle">
            <div className="text-[9px] uppercase tracking-wider text-tertiary mb-1 flex items-center justify-between">
              <span>AUDIO STT</span>
              <CheckCircle2 size={11} className="text-[#10b981]" />
            </div>
            <div className="text-[10px] font-semibold text-[#10b981] truncate">
              TRANSCRIBED
            </div>
          </div>
        </div>

        {/* 4. Complete Conversation Log Console */}
        <div className="w-full max-w-xs rounded-xl bg-sunken border border-subtle p-3 text-left mb-3 font-mono text-[11px]">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-subtle">
            <span className="font-semibold uppercase tracking-wider text-primary text-[9px]">
              LOG ARCHIVE ({session.transcript.length} TURNS)
            </span>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-elevated hover:bg-subtle text-secondary hover:text-primary font-mono text-[9px] transition-colors border border-subtle"
              aria-label="Copy transcript"
            >
              {copied ? <Check size={10} className="text-[#10b981]" /> : <Copy size={10} />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>

          <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1 font-body text-xs">
            {session.transcript.length === 0 ? (
              <p className="text-tertiary italic text-center py-2 font-mono text-[10px]">
                No utterances recorded
              </p>
            ) : (
              session.transcript.map((t: TranscriptEntry) => (
                <div key={t.id} className="leading-snug">
                  <span className="font-mono text-[10px] font-semibold uppercase text-secondary">
                    {t.speaker === 'caller' ? session.caller.name : 'YOU'}:{' '}
                  </span>
                  <span className="text-primary">{t.text}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 5. Bottom Action: Redispatch Call */}
      <div className="w-full max-w-xs mx-auto shrink-0">
        <button
          onClick={() => startCallWithScenario(activeScenarioId)}
          className="w-full py-3 rounded-full bg-[#eb4d2d] hover:bg-[#eb4d2d]/90 text-white font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
        >
          <RotateCcw size={14} />
          <span>Call Again</span>
        </button>
      </div>

    </div>
  );
};
