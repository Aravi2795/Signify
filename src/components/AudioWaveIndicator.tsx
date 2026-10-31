import React from 'react';

interface AudioWaveIndicatorProps {
  isSpeaking: boolean;
  level: number;
  label?: string;
  className?: string;
}

/**
 * AudioWaveIndicator
 * Industrial Precision LED VU-Meter (Nothing × CMF Inspired)
 * Displays 6 calibrated LED segments with peak warning and technical channel status.
 */
export const AudioWaveIndicator: React.FC<AudioWaveIndicatorProps> = ({
  isSpeaking,
  level,
  label,
  className = ''
}) => {
  // Quantize audio level into 6 discrete LED stages
  const activeBars = isSpeaking ? Math.min(6, Math.max(1, Math.round(level * 6))) : 0;

  return (
    <div 
      className={`inline-flex items-center gap-2.5 px-2.5 py-1 rounded bg-surface border border-subtle select-none shadow-xs ${className}`}
      role="status"
      aria-live="polite"
      aria-label={isSpeaking ? 'Caller is speaking' : 'Audio channel idle'}
    >
      {/* 6-Segment Calibrated Hardware VU-Meter */}
      <div className="flex items-center gap-[2px] h-3 px-1 py-0.5 rounded-xs bg-sunken border-subtle" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((barIndex) => {
          const isActive = barIndex <= activeBars;
          const isPeak = barIndex >= 5;

          return (
            <span
              key={barIndex}
              className={`w-[2.5px] rounded-[1px] transition-all duration-75 ${
                isActive
                  ? isPeak
                    ? 'h-2.5 bg-[#eb4d2d]'
                    : 'h-2 bg-[#10b981]'
                  : 'h-1 vu-bar-idle'
              }`}
            />
          );
        })}
      </div>

      {/* Technical Status Readout */}
      <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-secondary">
        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isSpeaking ? 'bg-[#10b981] animate-pulse' : 'vu-dot-idle'
        }`} />
        <span className="font-medium">
          {label || (isSpeaking ? 'VOICE RX' : 'CH 01 // IDLE')}
        </span>
      </div>
    </div>
  );
};
