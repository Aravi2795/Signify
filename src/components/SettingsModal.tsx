import React, { useEffect } from 'react';
import { X, Type, Eye, Accessibility, Sparkles, Check } from 'lucide-react';
import { useCallSession } from '../context/CallSessionContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings } = useCallSession();

  // Synchronize high contrast to document root
  useEffect(() => {
    if (settings.highContrast) {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  }, [settings.highContrast]);

  if (!isOpen) return null;

  return (
    <div className="settings-inphone-modal">
      {/* Header (Always Visible & Pinned at Top) */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-subtle bg-sunken shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#eb4d2d]/20 border border-[#eb4d2d]/40 flex items-center justify-center text-[#eb4d2d] shrink-0">
            <Sparkles size={13} />
          </div>
          <div>
            <h2 className="font-display text-xs font-bold text-primary leading-tight">
              Call & Accessibility Settings
            </h2>
            <p className="font-mono text-[9px] text-tertiary">
              Interpreter, captions & display
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full bg-surface hover:bg-subtle border border-subtle text-secondary hover:text-primary transition-colors cursor-pointer"
          aria-label="Close Settings"
          title="Close Settings"
        >
          <X size={15} />
        </button>
      </div>

      {/* Scrollable Clean Options Container */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-3.5 text-xs font-body">
        
        {/* Card 1: Live Captions */}
        <div className="settings-group-card">
          <div className="flex items-center gap-2 mb-3 text-secondary font-mono text-[11px] font-bold uppercase tracking-wider">
            <Type size={14} className="text-[#10b981]" />
            <span>Live Captions & Text</span>
          </div>

          {/* Font Size Selector */}
          <div className="mb-3">
            <label className="text-[10px] font-mono text-tertiary block mb-1.5 uppercase">
              Caption Font Size
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['small', 'medium', 'large', 'extra-large'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => updateSettings({ fontSize: size })}
                  className={`settings-pill-btn capitalize ${settings.fontSize === size ? 'active' : ''}`}
                >
                  {size === 'extra-large' ? 'XL' : size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Auto Scroll Toggle */}
          <div className="settings-toggle-row border-t border-subtle/50 pt-2.5">
            <div>
              <div className="font-medium text-primary text-xs">Auto-scroll Captions</div>
              <div className="text-[10px] text-tertiary font-mono">Keep newest speech in view</div>
            </div>
            <div 
              onClick={() => updateSettings({ autoScroll: !settings.autoScroll })}
              className={`custom-switch ${settings.autoScroll ? 'checked' : ''}`}
            >
              <div className="custom-switch-thumb" />
            </div>
          </div>

          {/* Timestamps Toggle */}
          <div className="settings-toggle-row border-t border-subtle/50 pt-2.5 mt-1">
            <div>
              <div className="font-medium text-primary text-xs">Show Timestamps</div>
              <div className="text-[10px] text-tertiary font-mono">Display utterance time markers</div>
            </div>
            <div 
              onClick={() => updateSettings({ showTimestamps: !settings.showTimestamps })}
              className={`custom-switch ${settings.showTimestamps ? 'checked' : ''}`}
            >
              <div className="custom-switch-thumb" />
            </div>
          </div>
        </div>

        {/* Card 2: 3D Sign Language Interpreter */}
        <div className="settings-group-card">
          <div className="flex items-center gap-2 mb-3 text-secondary font-mono text-[11px] font-bold uppercase tracking-wider">
            <Eye size={14} className="text-[#eb4d2d]" />
            <span>3D Sign Language Interpreter</span>
          </div>

          {/* Sign Language Standard */}
          <div className="mb-3">
            <label className="text-[10px] font-mono text-tertiary block mb-1.5 uppercase">
              Sign Language Standard
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => updateSettings({ signLanguage: 'ISL' })}
                className={`settings-pill-btn flex items-center justify-center gap-1.5 py-2 ${settings.signLanguage === 'ISL' ? 'active' : ''}`}
              >
                {settings.signLanguage === 'ISL' && <Check size={12} />}
                <span>Indian Sign (ISL)</span>
              </button>

              <button
                onClick={() => updateSettings({ signLanguage: 'ASL' })}
                className={`settings-pill-btn flex items-center justify-center gap-1.5 py-2 ${settings.signLanguage === 'ASL' ? 'active' : ''}`}
              >
                {settings.signLanguage === 'ASL' && <Check size={12} />}
                <span>American Sign (ASL)</span>
              </button>
            </div>
          </div>

          {/* Signing Speed */}
          <div className="mb-3 border-t border-subtle/50 pt-2.5">
            <label className="text-[10px] font-mono text-tertiary block mb-1.5 uppercase">
              Interpreter Speed
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {([0.75, 1.0, 1.25] as const).map(speed => (
                <button
                  key={speed}
                  onClick={() => updateSettings({ signingSpeed: speed })}
                  className={`settings-pill-btn py-1.5 ${settings.signingSpeed === speed ? 'active' : ''}`}
                >
                  {speed}x {speed === 1.0 ? 'Normal' : speed < 1 ? 'Slow' : 'Fast'}
                </button>
              ))}
            </div>
          </div>

          {/* Avatar Character */}
          <div className="border-t border-subtle/50 pt-2.5">
            <label className="text-[10px] font-mono text-tertiary block mb-1.5 uppercase">
              Avatar Character Rig
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => updateSettings({ avatarModel: 'rahul' })}
                className={`settings-pill-btn py-2 ${settings.avatarModel === 'rahul' ? 'active' : ''}`}
              >
                Rahul (XBot)
              </button>
              <button
                onClick={() => updateSettings({ avatarModel: 'priya' })}
                className={`settings-pill-btn py-2 ${settings.avatarModel === 'priya' ? 'active' : ''}`}
              >
                Priya (YBot)
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Visual Accessibility */}
        <div className="settings-group-card">
          <div className="flex items-center gap-2 mb-3 text-secondary font-mono text-[11px] font-bold uppercase tracking-wider">
            <Accessibility size={14} className="text-[#3b82f6]" />
            <span>Accessibility & Motion</span>
          </div>

          {/* High Contrast */}
          <div className="settings-toggle-row">
            <div>
              <div className="font-medium text-primary text-xs">High Contrast Mode</div>
              <div className="text-[10px] text-tertiary font-mono">Maximum luminance & crisp borders</div>
            </div>
            <div 
              onClick={() => updateSettings({ highContrast: !settings.highContrast })}
              className={`custom-switch ${settings.highContrast ? 'checked' : ''}`}
            >
              <div className="custom-switch-thumb" />
            </div>
          </div>

          {/* Reduced Motion */}
          <div className="settings-toggle-row border-t border-subtle/50 pt-2.5 mt-1">
            <div>
              <div className="font-medium text-primary text-xs">Reduced Motion</div>
              <div className="text-[10px] text-tertiary font-mono">Minimize animations & transitions</div>
            </div>
            <div 
              onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
              className={`custom-switch ${settings.reducedMotion ? 'checked' : ''}`}
            >
              <div className="custom-switch-thumb" />
            </div>
          </div>
        </div>

      </div>

      {/* Footer (Always Visible & Pinned at Bottom) */}
      <div className="p-3.5 border-t border-subtle bg-sunken shrink-0">
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#eb4d2d] hover:bg-[#eb4d2d]/90 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Done
        </button>
      </div>

    </div>
  );
};
