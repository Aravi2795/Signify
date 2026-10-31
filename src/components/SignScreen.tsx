import React from 'react';
import { 
  ArrowLeft, 
  FileText, 
  PhoneOff, 
  Settings, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff,
  FastForward,
  Phone
} from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';
import { AvatarCanvas } from './AvatarCanvas';

interface SignScreenProps {
  onOpenSettings: () => void;
}

export const SignScreen: React.FC<SignScreenProps> = ({ onOpenSettings }) => {
  const {
    session,
    settings,
    avatarEngine,
    setMode,
    endCall,
    toggleMute,
    toggleSpeaker,
    updateSettings
  } = useCallSession();

  // Format call duration
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Cycle signing speed
  const cycleSpeed = () => {
    const speeds: (0.75 | 1.0 | 1.25)[] = [0.75, 1.0, 1.25];
    const nextIdx = (speeds.indexOf(settings.signingSpeed) + 1) % speeds.length;
    updateSettings({ signingSpeed: speeds[nextIdx] });
  };

  // Find latest spoken sentence or partial text
  const latestEntry = session.transcript.slice(-1)[0];
  const displaySubtitle = session.currentPartialText || latestEntry?.text || 'Awaiting caller voice transmission...';
  const isActivelySigning = session.activeSignIndex >= 0 && session.activeSignIndex < session.currentSignSequence.length;

  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-surface text-primary select-none overflow-hidden font-body px-4 py-3 pb-5">
      
      {/* 1. Header: Back, Caller Name, Speed & Actions (In-flow, Zero Overlap!) */}
      <div className="flex items-center justify-between w-full shrink-0 pb-2.5 border-b border-subtle">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('call')}
            className="p-1.5 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-all cursor-pointer"
            aria-label="Back to voice call"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-display text-xs font-bold text-primary tracking-tight">
              <span>{session.caller.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </div>
            <div className="font-mono text-[10px] text-secondary flex items-center gap-1.5">
              <span className="text-[#eb4d2d] font-semibold">
                {isActivelySigning ? `SIGNING: ${session.activeSign?.gloss || 'GESTURE'}` : 'ISL 3D RIG'}
              </span>
              <span>·</span>
              <span className="tabular-nums font-medium">{formatTime(session.duration)}</span>
            </div>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-1.5 pr-2">
          {/* Speed Toggle Pill */}
          <button
            onClick={cycleSpeed}
            className="px-2 py-0.5 rounded-full bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-colors font-mono text-[10px] flex items-center gap-1 cursor-pointer"
            title="Signing Speed"
          >
            <FastForward size={10} />
            <span>{settings.signingSpeed}x</span>
          </button>

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
              session.isMuted 
                ? 'bg-[#eab308]/20 text-[#eab308] border-[#eab308]/40' 
                : 'bg-sunken hover:bg-subtle border-subtle text-secondary hover:text-primary'
            }`}
            aria-label={session.isMuted ? 'Unmute' : 'Mute'}
          >
            {session.isMuted ? <MicOff size={13} /> : <Mic size={13} />}
          </button>

          {/* Speaker Toggle */}
          <button
            onClick={toggleSpeaker}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
              session.isSpeakerOn 
                ? 'bg-[#eb4d2d]/20 text-[#eb4d2d] border-[#eb4d2d]/40' 
                : 'bg-sunken hover:bg-subtle border-subtle text-secondary hover:text-primary'
            }`}
            aria-label={session.isSpeakerOn ? 'Speaker off' : 'Speaker on'}
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

      {/* 2. Main 3D Avatar Stage (100% Unobstructed Sightlines for Gestures) */}
      <div className="relative flex-1 w-full my-2.5 rounded-2xl avatar-stage-container overflow-hidden flex items-center justify-center min-h-0">
        <AvatarCanvas 
          engine={avatarEngine} 
          model={settings.avatarModel}
          signingSpeed={settings.signingSpeed}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* 3. Cool Subtitle Transcription Card (Dedicated Section with Proper Padding!) */}
      <div className="relative shrink-0 w-full mb-3 cool-captions-box">
        <div className="font-mono text-[9px] text-tertiary uppercase mb-1 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${session.isCallerSpeaking ? 'bg-[#10b981] animate-pulse' : 'bg-secondary'}`} />
            <span className="font-semibold text-secondary">{session.caller.name}</span>
          </span>
          {session.isCallerSpeaking && (
            <span className="text-[#10b981] font-semibold text-[9px] animate-pulse">TRANSMITTING...</span>
          )}
        </div>

        <p className="font-mono text-xs text-primary leading-relaxed line-clamp-2 min-h-[2rem]">
          &ldquo;{displaySubtitle}&rdquo;
        </p>
      </div>

      {/* 4. Bottom Mobile Action Bar (Consolidated & Compact) */}
      <div className="flex items-center justify-between w-full shrink-0 px-2 py-1.5 rounded-full bg-sunken border border-subtle">
        {/* Navigation buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMode('call')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-elevated hover:bg-subtle text-secondary hover:text-primary text-[10px] font-mono font-medium border border-subtle transition-all active:scale-95 cursor-pointer"
          >
            <Phone size={12} />
            <span>Voice</span>
          </button>

          <button
            onClick={() => setMode('transcript')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-elevated hover:bg-subtle text-secondary hover:text-primary text-[10px] font-mono font-medium border border-subtle transition-all active:scale-95 cursor-pointer"
          >
            <FileText size={12} />
            <span>Text</span>
          </button>
        </div>

        {/* End Call Button */}
        <button
          onClick={endCall}
          className="btn-end-call"
          aria-label="End call"
        >
          <PhoneOff size={12} />
          <span>End Call</span>
        </button>
      </div>

    </div>
  );
};
