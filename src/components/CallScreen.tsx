import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  FileText, 
  PhoneOff, 
  Grid, 
  Settings,
  Radio,
  Eye,
  Delete,
  X
} from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';

interface CallScreenProps {
  onOpenSettings: () => void;
}

export const CallScreen: React.FC<CallScreenProps> = ({ onOpenSettings }) => {
  const {
    session,
    setMode,
    toggleMute,
    toggleSpeaker,
    endCall,
    toggleLiveMic,
    isMicActive
  } = useCallSession();

  const [showKeypad, setShowKeypad] = useState(false);
  const [dialedDigits, setDialedDigits] = useState('');

  // Format call duration (MM:SS)
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleKeypadPress = (digit: string) => {
    setDialedDigits(prev => prev + digit);
  };

  const keypadMap = [
    { key: '1', sub: ' ' },
    { key: '2', sub: 'ABC' },
    { key: '3', sub: 'DEF' },
    { key: '4', sub: 'GHI' },
    { key: '5', sub: 'JKL' },
    { key: '6', sub: 'MNO' },
    { key: '7', sub: 'PQRS' },
    { key: '8', sub: 'TUV' },
    { key: '9', sub: 'WXYZ' },
    { key: '*', sub: ' ' },
    { key: '0', sub: '+' },
    { key: '#', sub: ' ' },
  ];

  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-surface text-primary select-none px-5 py-3 pb-5 font-body overflow-hidden">
      
      {/* 1. Header: Clean Connection Status, Call Timer & Action Buttons */}
      <div className="flex items-center justify-between w-full shrink-0 pt-1 pb-2 border-b border-subtle">
        {/* Left: HD Voice / Transmitting Badge + Call Duration */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sunken border border-subtle">
            <span className={`w-2 h-2 rounded-full ${session.isCallerSpeaking ? 'bg-[#10b981] animate-pulse' : 'bg-secondary'}`} />
            <span className="font-mono text-[10px] tracking-wider uppercase font-semibold text-secondary">
              {session.isCallerSpeaking ? 'Transmitting' : 'HD Voice'}
            </span>
          </div>
          <span className="font-mono text-xs tabular-nums text-primary font-bold tracking-wider">
            {formatTime(session.duration)}
          </span>
        </div>

        {/* Right: Mic, Speaker and Settings Kept Together with Right Padding */}
        <div className="flex items-center gap-1.5 pr-2">
          {/* Quick Mic / Mute */}
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

          {/* Settings button with padding right */}
          <button
            onClick={onOpenSettings}
            className="phone-header-settings-btn"
            aria-label="Call Settings"
            title="Call Settings"
          >
            <Settings size={13} />
          </button>
        </div>
      </div>

      {/* 2. Focused Caller Identity Profile */}
      <div className="flex flex-col items-center justify-center text-center my-auto py-2 shrink-0">
        {/* Circular Avatar with Glowing Ring */}
        <div className="relative mb-3">
          <div 
            className={`w-22 h-22 rounded-full bg-sunken border-2 transition-all duration-300 flex items-center justify-center shadow-lg overflow-hidden ${
              session.isCallerSpeaking 
                ? 'border-[#10b981] ring-4 ring-[#10b981]/25 scale-102' 
                : 'border-default ring-0'
            }`}
          >
            {session.caller.avatarUrl ? (
              <img 
                src={session.caller.avatarUrl} 
                alt={session.caller.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-display text-3xl font-bold tracking-wider text-primary">
                {session.caller.initials || 'JM'}
              </span>
            )}
          </div>

          {session.isCallerSpeaking && (
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#10b981] text-white font-mono text-[8px] font-bold tracking-widest uppercase shadow-sm">
              SPEAKING
            </div>
          )}
        </div>

        {/* Caller Name */}
        <h1 className="font-display text-2xl font-bold tracking-tight text-primary mb-0.5">
          {session.caller.name}
        </h1>

        <div className="flex items-center gap-2 font-mono text-xs text-secondary">
          <span className="tabular-nums">{session.caller.phoneNumber}</span>
          <span className="text-tertiary">·</span>
          <span className="uppercase text-[10px] text-tertiary">
            {session.caller.subtitle || 'MOBILE CALL'}
          </span>
        </div>

        {/* Cool Live Captions Card (High Contrast & Frosted Glass) */}
        <div className="w-full max-w-[320px] mt-4 cool-captions-box text-left">
          <div className="flex items-center justify-between mb-1.5">
            <span className="caption-tag-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb4d2d] animate-pulse" />
              <span>LIVE CC</span>
            </span>
            {session.isCallerSpeaking && (
              <span className="font-mono text-[9px] text-[#10b981] animate-pulse font-semibold">
                AUDIO STREAMING
              </span>
            )}
          </div>

          <p className="font-mono text-xs text-primary leading-relaxed line-clamp-2 min-h-[2rem]">
            {session.currentPartialText ? (
              <>
                &ldquo;{session.currentPartialText}&rdquo;
                <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#eb4d2d] cursor-blink align-middle" />
              </>
            ) : session.transcript.length > 0 ? (
              <span className="text-secondary italic">
                &ldquo;{session.transcript[session.transcript.length - 1].text}&rdquo;
              </span>
            ) : (
              <span className="text-tertiary italic text-[11px]">
                Live speech-to-text active. Awaiting voice...
              </span>
            )}
          </p>
        </div>
      </div>

      {/* 3. In-Call Touch Controls Matrix (Native Smartphone 3x2 Circular Buttons) */}
      <div className="flex flex-col items-center gap-3.5 w-full shrink-0">
        <div className="grid grid-cols-3 gap-x-6 gap-y-3 max-w-[290px] w-full">
          {/* Mute */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={toggleMute}
              className={`phone-circle-btn ${session.isMuted ? 'btn-active-warning' : ''}`}
              aria-label={session.isMuted ? 'Unmute microphone' : 'Mute microphone'}
            >
              {session.isMuted ? <MicOff size={22} /> : <Mic size={22} />}
            </button>
            <span className="font-mono text-[10px] text-secondary uppercase font-medium">
              {session.isMuted ? 'Muted' : 'Mute'}
            </span>
          </div>

          {/* Keypad */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={() => setShowKeypad(true)}
              className="phone-circle-btn"
              aria-label="Show Keypad"
            >
              <Grid size={22} />
            </button>
            <span className="font-mono text-[10px] text-secondary uppercase font-medium">
              Keypad
            </span>
          </div>

          {/* Speaker */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={toggleSpeaker}
              className={`phone-circle-btn ${session.isSpeakerOn ? 'btn-active-live' : ''}`}
              aria-label={session.isSpeakerOn ? 'Speaker off' : 'Speaker on'}
            >
              {session.isSpeakerOn ? <Volume2 size={22} /> : <VolumeX size={22} />}
            </button>
            <span className="font-mono text-[10px] text-secondary uppercase font-medium">
              Speaker
            </span>
          </div>

          {/* Transcript / Text Mode */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={() => setMode('transcript')}
              className="phone-circle-btn relative"
              aria-label="Open transcript text"
            >
              <FileText size={22} />
              {session.transcript.length > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#eb4d2d] ring-2 ring-surface" />
              )}
            </button>
            <span className="font-mono text-[10px] text-secondary uppercase font-medium">
              Captions
            </span>
          </div>

          {/* 3D Sign Avatar Mode */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={() => setMode('sign')}
              className="phone-circle-btn btn-active-accent"
              aria-label="Switch to 3D Sign Avatar"
            >
              <Eye size={22} />
            </button>
            <span className="font-mono text-[10px] text-[#eb4d2d] uppercase font-bold">
              3D Sign
            </span>
          </div>

          {/* Test Mic */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={toggleLiveMic}
              className={`phone-circle-btn ${isMicActive ? 'btn-active-live' : ''}`}
              aria-label="Toggle live microphone"
              title="Test real microphone"
            >
              <Radio size={22} className={isMicActive ? 'animate-pulse' : ''} />
            </button>
            <span className="font-mono text-[10px] text-secondary uppercase font-medium">
              {isMicActive ? 'Mic On' : 'Test Mic'}
            </span>
          </div>
        </div>

        {/* Large Iconic Red End Call Button */}
        <div className="pt-1">
          <button
            onClick={endCall}
            className="phone-end-call-btn"
            aria-label="End call"
          >
            <PhoneOff size={28} />
          </button>
        </div>
      </div>

      {/* 4. Fullscreen Opaque Keypad Sheet (Zero Background Bleed-Through!) */}
      {showKeypad && (
        <div className="keypad-fullscreen-modal">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-subtle pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              KEYPAD DIALER
            </span>
            <button
              onClick={() => setShowKeypad(false)}
              className="p-1.5 rounded-full bg-sunken hover:bg-subtle text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Dialed Digits Display (Positioned at TOP!) */}
          <div className="keypad-digits-display">
            <span className="font-mono text-2xl tracking-widest text-primary tabular-nums overflow-x-auto">
              {dialedDigits || <span className="text-tertiary text-sm tracking-normal">Enter digits...</span>}
            </span>
            {dialedDigits && (
              <button 
                onClick={() => setDialedDigits(prev => prev.slice(0, -1))}
                className="text-tertiary hover:text-primary p-1 cursor-pointer"
                title="Backspace"
              >
                <Delete size={20} />
              </button>
            )}
          </div>

          {/* 3x4 Machined Telephone Matrix */}
          <div className="grid grid-cols-3 gap-3.5 max-w-[270px] mx-auto w-full my-auto">
            {keypadMap.map(item => (
              <button
                key={item.key}
                onClick={() => handleKeypadPress(item.key)}
                className="keypad-circle-btn mx-auto"
              >
                <span className="font-display text-xl font-bold leading-none">{item.key}</span>
                {item.sub.trim() && (
                  <span className="font-mono text-[8px] text-tertiary tracking-widest uppercase mt-0.5">
                    {item.sub}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Bottom Dismiss Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowKeypad(false)}
              className="px-8 py-2.5 rounded-full bg-elevated hover:bg-subtle border border-default text-xs font-mono font-bold text-secondary hover:text-primary uppercase tracking-wider cursor-pointer shadow-sm active:scale-95 transition-all"
            >
              Hide Keypad
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
