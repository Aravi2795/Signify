import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Smartphone, 
  Maximize2, 
  Sun, 
  Moon 
} from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';
import { StudioCompanionPanel } from './StudioCompanionPanel';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  const [isFramed, setIsFramed] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const { session } = useCallSession();

  // Synchronize data-theme on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start py-2 px-2 md:py-3 overflow-x-hidden font-body select-none">
      
      {/* Top Navbar / Brand Strip */}
      <header className="w-full max-w-7xl mx-auto mb-3 flex items-center justify-between px-4 py-2 rounded-2xl bg-surface border border-default shadow-sm text-xs">
        {/* Brand System Status */}
        <div className="flex items-center gap-2.5 font-mono text-[11px] text-primary">
          <span className="w-2.5 h-2.5 rounded-full bg-[#eb4d2d] animate-pulse" />
          <span className="font-display font-bold tracking-wider text-sm">SIGNIFY</span>
          <span className="text-tertiary">/</span>
          <span className="text-secondary text-[10px] uppercase font-semibold">
            {session.status}
          </span>
          <span className="text-tertiary hidden sm:inline">·</span>
          <span className="text-tertiary text-[10px] hidden sm:inline">
            Smart Sign Language Telephony & Real-Time ISL RIG
          </span>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-xl bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-all cursor-pointer"
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? <Sun size={13} className="text-[#eb4d2d]" /> : <Moon size={13} />}
          </button>

          {/* Frame Toggle */}
          <button
            onClick={() => setIsFramed(!isFramed)}
            className="px-2.5 py-1.5 rounded-xl bg-sunken hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-all font-mono text-[10px] flex items-center gap-1.5 cursor-pointer"
            title="Toggle Frame vs Fullscreen"
          >
            {isFramed ? <Maximize2 size={12} /> : <Smartphone size={12} />}
            <span>{isFramed ? 'FULL' : 'CHASSIS'}</span>
          </button>
        </div>
      </header>

      {/* Dual-Panel Workspace: Mobile Phone on the LEFT, Studio Dashboard on the RIGHT */}
      <div className="studio-layout-wrapper">
        
        {/* LEFT COLUMN: The Native Mobile Phone Enclosure */}
        <div className="studio-phone-column">
          <div 
            className={
              isFramed 
                ? 'hardware-chassis' 
                : 'viewport-full'
            }
          >
            {/* Native Mobile Status Bar (In-Flow Flex Item: Never Overlaps Content!) */}
            <header className="phone-status-bar">
              {/* Clock */}
              <span className="font-semibold text-primary text-[13px] tabular-nums tracking-tight">09:42</span>

              {/* Dynamic Island Notch */}
              <div className="phone-dynamic-island">
                <div className="w-2 h-2 rounded-full bg-[#18181f] border border-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              </div>

              {/* Battery, Wifi, Signal */}
              <div className="flex items-center gap-1.5 text-secondary">
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={13} />
              </div>
            </header>

            {/* Active Screen Viewport (100% cleanly underneath the status bar) */}
            <main className="phone-main-viewport">
              {children}
            </main>

            {/* Minimal Hardware Home Indicator Bar */}
            <footer className="phone-home-bar">
              <div className="phone-home-pill" />
            </footer>
          </div>
        </div>

        {/* RIGHT COLUMN: Rich Companion Studio Panel (Transcripts, ISL Tokens, Speech Bench) */}
        <StudioCompanionPanel />

      </div>

    </div>
  );
};
