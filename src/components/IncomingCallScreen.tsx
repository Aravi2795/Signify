import React from 'react';
import { Phone, PhoneOff, Settings } from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';

interface IncomingCallScreenProps {
  onOpenSettings: () => void;
}

export const IncomingCallScreen: React.FC<IncomingCallScreenProps> = ({ onOpenSettings }) => {
  const {
    session,
    acceptCall,
    declineCall
  } = useCallSession();

  return (
    <div className="relative flex flex-col justify-between h-full w-full bg-surface text-primary select-none px-6 py-4 pb-6 font-body overflow-hidden">
      
      {/* 1. Header: Incoming Call Status (In-Flow, Zero Overlap!) */}
      <div className="flex items-center justify-between w-full shrink-0 border-b border-subtle pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#eb4d2d] animate-pulse" />
          <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-primary">
            INCOMING CALL
          </span>
          <span className="text-tertiary font-mono text-[10px]">/</span>
          <span className="text-secondary font-mono text-[10px] uppercase">HD VOICE</span>
        </div>

        <button
          onClick={onOpenSettings}
          className="phone-header-settings-btn"
          aria-label="Settings"
          title="Call Settings"
        >
          <Settings size={15} />
        </button>
      </div>

      {/* 2. Focused Caller Profile */}
      <div className="flex flex-col items-center justify-center my-auto text-center w-full py-2 shrink-0">
        {/* Caller Avatar with Pulse Ring */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-sunken border-2 border-default flex items-center justify-center shadow-xl overflow-hidden ring-4 ring-white/5 animate-pulse">
            {session.caller.avatarUrl ? (
              <img 
                src={session.caller.avatarUrl} 
                alt={session.caller.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-display text-4xl font-bold tracking-wider text-primary">
                {session.caller.initials || 'JM'}
              </span>
            )}
          </div>
        </div>

        {/* Caller Name */}
        <h1 className="font-display text-2xl font-bold tracking-tight text-primary mb-1">
          {session.caller.name}
        </h1>

        {/* Telephone Number */}
        <p className="font-mono text-sm text-secondary tabular-nums tracking-wide mb-1.5">
          {session.caller.phoneNumber}
        </p>

        {/* Call Route / Subtitle */}
        <p className="text-[11px] font-mono text-tertiary uppercase tracking-wider mb-4">
          {session.caller.subtitle || 'MOBILE CELLULAR'}
        </p>

        {/* Accessibility Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunken border border-subtle font-mono text-[10px] text-secondary shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span>3D SIGN & CAPTIONS READY</span>
        </div>
      </div>

      {/* 3. Physical Response Keys (Native Mobile Decline / Accept) */}
      <div className="w-full max-w-xs mx-auto shrink-0 pb-2">
        <div className="flex items-center justify-around">
          {/* Decline Button */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={declineCall}
              className="phone-end-call-btn"
              aria-label="Decline incoming call"
            >
              <PhoneOff size={28} />
            </button>
            <span className="font-mono text-[11px] text-secondary uppercase font-semibold">Decline</span>
          </div>

          {/* Accept Button */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={acceptCall}
              className="phone-accept-call-btn"
              aria-label="Accept incoming call"
            >
              <Phone size={28} />
            </button>
            <span className="font-mono text-[11px] text-[#10b981] uppercase font-bold">Accept</span>
          </div>
        </div>
      </div>

    </div>
  );
};
