import React, { useState } from 'react';
import { CallSessionProvider, useCallSession } from './context/CallSessionContext';
import { MobileFrame } from './components/MobileFrame';
import { IncomingCallScreen } from './components/IncomingCallScreen';
import { CallScreen } from './components/CallScreen';
import { TranscriptScreen } from './components/TranscriptScreen';
import { SignScreen } from './components/SignScreen';
import { CallSummaryScreen } from './components/CallSummaryScreen';
import { SettingsModal } from './components/SettingsModal';

const CallAppContent: React.FC = () => {
  const { session } = useCallSession();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  // Render view based on phone call state machine and selected mode
  const renderScreen = () => {
    switch (session.status) {
      case 'incoming':
        return <IncomingCallScreen onOpenSettings={openSettings} />;

      case 'connecting':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-surface text-primary p-6 text-center select-none font-body reticle-corner">
            <div className="w-24 h-24 rounded-md bg-sunken border-default flex items-center justify-center text-3xl font-bold font-display mb-4 shadow-panel">
              {session.caller.initials || 'JM'}
            </div>
            <h2 className="font-display text-xl font-bold tracking-tight mb-1">{session.caller.name}</h2>
            <p className="font-mono text-xs text-secondary tabular-nums tracking-wider mb-5">{session.caller.phoneNumber}</p>
            <div className="status-pill status-pill-live font-mono text-[10px]">
              <span className="status-dot status-dot-live status-dot-pulse" />
              <span>CARRIER HANDSHAKE // ESTABLISHING HD-VOIP...</span>
            </div>
          </div>
        );

      case 'connected':
        if (session.mode === 'transcript') {
          return <TranscriptScreen onOpenSettings={openSettings} />;
        }
        if (session.mode === 'sign') {
          return <SignScreen onOpenSettings={openSettings} />;
        }
        return <CallScreen onOpenSettings={openSettings} />;

      case 'ended':
      case 'summary':
      default:
        return <CallSummaryScreen onOpenSettings={openSettings} />;
    }
  };

  return (
    <>
      {renderScreen()}
      <SettingsModal isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
};

export function App() {
  return (
    <CallSessionProvider>
      <MobileFrame>
        <CallAppContent />
      </MobileFrame>
    </CallSessionProvider>
  );
}

export default App;
