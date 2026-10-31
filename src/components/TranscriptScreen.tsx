import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Trash2, 
  Type, 
  PhoneOff, 
  Send,
  Settings,
  Eye,
  Phone,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';
import type { TranscriptEntry } from '../types/call';

interface TranscriptScreenProps {
  onOpenSettings: () => void;
}

export const TranscriptScreen: React.FC<TranscriptScreenProps> = ({ onOpenSettings }) => {
  const {
    session,
    settings,
    setMode,
    endCall,
    toggleMute,
    toggleSpeaker,
    clearTranscript,
    copyTranscript,
    addUserSpeech,
    updateSettings
  } = useCallSession();

  const [copied, setCopied] = useState(false);
  const [userReplyText, setUserReplyText] = useState('');
  const transcriptEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll on new entries or partial updates
  useEffect(() => {
    if (settings.autoScroll && transcriptEndRef.current) {
      transcriptEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [session.transcript, session.currentPartialText, settings.autoScroll]);

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

  const handleSendReply = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userReplyText.trim()) return;
    addUserSpeech(userReplyText);
    setUserReplyText('');
  };

  // Font size classes
  const getFontSizeClass = () => {
    switch (settings.fontSize) {
      case 'small': return 'text-xs leading-relaxed';
      case 'large': return 'text-base leading-relaxed';
      case 'extra-large': return 'text-lg leading-loose';
      case 'medium':
      default: return 'text-sm leading-relaxed';
    }
  };

  const cycleFontSize = () => {
    const sizes: ('small' | 'medium' | 'large' | 'extra-large')[] = ['small', 'medium', 'large', 'extra-large'];
    const nextIdx = (sizes.indexOf(settings.fontSize) + 1) % sizes.length;
    updateSettings({ fontSize: sizes[nextIdx] });
  };

  const quickReplies = [
    'Yes, received',
    'Checking now',
    'Please repeat',
    'Hold on a moment'
  ];

  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-surface text-primary select-none font-body px-4 py-3 pb-5 overflow-hidden">
      
      {/* 1. Header: Back, Caller Info & Actions (In-Flow, Zero Overlap!) */}
      <div className="flex items-center justify-between w-full shrink-0 pb-2.5 border-b border-subtle">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('call')}
            className="p-1.5 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-all cursor-pointer"
            aria-label="Back to voice view"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-display text-xs font-bold text-primary tracking-tight">
              <span>{session.caller.name}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${session.isCallerSpeaking ? 'bg-[#10b981] animate-pulse' : 'bg-secondary'}`} />
            </div>
            <div className="font-mono text-[10px] text-secondary flex items-center gap-1.5">
              <span>Live Transcript</span>
              <span>·</span>
              <span className="tabular-nums font-medium">{formatTime(session.duration)}</span>
            </div>
          </div>
        </div>

        {/* Quick Actions: Tools, Mic, Speaker, Settings */}
        <div className="flex items-center gap-1.5 pr-2">
          <button
            onClick={cycleFontSize}
            className="p-1.5 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-colors cursor-pointer"
            title={`Font size (${settings.fontSize})`}
            aria-label="Cycle Font Size"
          >
            <Type size={13} />
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-colors cursor-pointer"
            title="Copy transcript"
            aria-label="Copy transcript text"
          >
            {copied ? <Check size={13} className="text-[#10b981]" /> : <Copy size={13} />}
          </button>

          <button
            onClick={clearTranscript}
            className="p-1.5 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-[#ef4444] transition-colors cursor-pointer"
            title="Clear transcript"
            aria-label="Clear transcript"
          >
            <Trash2 size={13} />
          </button>

          {/* Quick Mic */}
          <button
            onClick={toggleMute}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
              session.isMuted 
                ? 'bg-[#eab308]/20 text-[#eab308] border-[#eab308]/40' 
                : 'bg-sunken hover:bg-subtle border-subtle text-secondary hover:text-primary'
            }`}
            aria-label={session.isMuted ? 'Unmute microphone' : 'Mute microphone'}
            title={session.isMuted ? 'Unmute microphone' : 'Mute microphone'}
          >
            {session.isMuted ? <MicOff size={13} /> : <Mic size={13} />}
          </button>

          {/* Quick Speaker */}
          <button
            onClick={toggleSpeaker}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
              session.isSpeakerOn 
                ? 'bg-[#10b981]/20 text-[#10b981] border-[#10b981]/40' 
                : 'bg-sunken hover:bg-subtle border-subtle text-secondary hover:text-primary'
            }`}
            aria-label={session.isSpeakerOn ? 'Speaker off' : 'Speaker on'}
            title={session.isSpeakerOn ? 'Speaker off' : 'Speaker on'}
          >
            {session.isSpeakerOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
          </button>

          {/* Settings */}
          <button
            onClick={onOpenSettings}
            className="phone-header-settings-btn"
            aria-label="Settings"
            title="Call Settings"
          >
            <Settings size={13} />
          </button>
        </div>
      </div>

      {/* 2. Message History Stream (Padded, Rounded Bubbles with Cool Effects!) */}
      <div className="flex-1 overflow-y-auto my-2.5 px-2 py-2 space-y-3 font-body min-h-0">
        {session.transcript.length === 0 && !session.currentPartialText && (
          <div className="flex flex-col items-center justify-center h-48 text-center text-tertiary font-mono">
            <span className="text-3xl mb-2 opacity-30">💬</span>
            <p className="text-xs uppercase tracking-wider font-semibold">Awaiting caller speech...</p>
            <p className="text-[10px] text-tertiary mt-1">Live voice transcriptions will display here</p>
          </div>
        )}

        {/* Historic Utterances */}
        {session.transcript.map((entry: TranscriptEntry) => {
          const isCaller = entry.speaker === 'caller';
          const time = new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          return (
            <div 
              key={entry.id} 
              className={`flex flex-col ${isCaller ? 'items-start' : 'items-end'} animate-fade-in`}
            >
              <div className="flex items-center gap-1.5 mb-1 px-1 font-mono text-[9px] text-secondary">
                <span className={`w-1.5 h-1.5 rounded-full ${isCaller ? 'bg-secondary' : 'bg-[#eb4d2d]'}`} />
                <span className="font-semibold">{isCaller ? session.caller.name : 'You'}</span>
                {settings.showTimestamps && (
                  <span className="text-tertiary tabular-nums">· {time}</span>
                )}
              </div>

              <div 
                className={`${isCaller ? 'chat-bubble-caller' : 'chat-bubble-user'} ${getFontSizeClass()}`}
              >
                {entry.text}
              </div>
            </div>
          );
        })}

        {/* Real-time Streaming Bubble */}
        {session.currentPartialText && (
          <div className="flex flex-col items-start animate-fade-in">
            <div className="flex items-center gap-1.5 mb-1 px-1 font-mono text-[9px] text-[#10b981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-semibold">{session.caller.name} (speaking...)</span>
            </div>

            <div className={`chat-bubble-caller ${getFontSizeClass()} border-[#10b981]/40`}>
              <span>{session.currentPartialText}</span>
              <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#10b981] cursor-blink align-middle" />
            </div>
          </div>
        )}

        <div ref={transcriptEndRef} />
      </div>

      {/* 3. Consolidated Bottom Section: Quick Replies + Input + Mode Bar */}
      <div className="flex flex-col gap-2 shrink-0 pt-1">
        {/* Quick Replies Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => addUserSpeech(reply)}
              className="px-3 py-1 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary font-mono text-[10px] whitespace-nowrap transition-colors active:scale-95 cursor-pointer shadow-xs"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Text Input Row */}
        <form onSubmit={handleSendReply} className="flex gap-2 items-center">
          <input
            type="text"
            value={userReplyText}
            onChange={(e) => setUserReplyText(e.target.value)}
            placeholder="Type message to speak aloud..."
            className="flex-1 bg-sunken border border-default rounded-full px-4 py-2 text-xs text-primary placeholder:text-tertiary focus:outline-none focus:border-[#eb4d2d] font-mono transition-colors"
          />
          <button
            type="submit"
            disabled={!userReplyText.trim()}
            className="w-9 h-9 rounded-full bg-[#eb4d2d] hover:bg-[#eb4d2d]/90 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Send reply"
          >
            <Send size={14} />
          </button>
        </form>

        {/* Bottom Navigation Dock */}
        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded-full bg-sunken border border-subtle mt-0.5">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setMode('call')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-elevated hover:bg-subtle text-secondary hover:text-primary text-[10px] font-mono font-medium border border-subtle transition-all active:scale-95 cursor-pointer"
            >
              <Phone size={12} />
              <span>Voice</span>
            </button>

            <button
              onClick={() => setMode('sign')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-elevated hover:bg-subtle text-[#eb4d2d] hover:text-[#eb4d2d]/90 text-[10px] font-mono font-bold border border-subtle transition-all active:scale-95 cursor-pointer"
            >
              <Eye size={12} />
              <span>3D Sign</span>
            </button>
          </div>

          <button
            onClick={endCall}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#dc2626] hover:bg-[#ef4444] text-white text-[10px] font-mono font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
            aria-label="End call"
          >
            <PhoneOff size={12} />
            <span>End Call</span>
          </button>
        </div>
      </div>

    </div>
  );
};
