import React from 'react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  statusTheme?: 'emerald' | 'dark' | 'light';
}

export default function PhoneFrame({
  src,
  alt,
  className = '',
  frameClassName = 'w-[275px] sm:w-[310px]',
  statusTheme = 'light'
}: PhoneFrameProps) {
  // Clean white status bar with crisp slate icons by default, matching device bezels
  const headerBg = statusTheme === 'light' ? 'bg-white border-b border-slate-100' : statusTheme === 'dark' ? 'bg-slate-900' : 'bg-[#297845]';
  const textColor = statusTheme === 'light' ? 'text-slate-800' : 'text-white';
  const iconColor = statusTheme === 'light' ? '#1E293B' : '#FFFFFF';

  return (
    <div
      className={`relative ${frameClassName} rounded-[2.8rem] sm:rounded-[3.2rem] p-2.5 sm:p-3 bg-slate-950 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)] border-4 border-slate-800/90 select-none ${className}`}
    >
      {/* Screen Container with No Notch */}
      <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden bg-white flex flex-col shadow-inner">
        {/* Realistic Mobile Status Bar (Dedicated Safe Area, No Cutout) */}
        <div
          className={`h-6 sm:h-7 px-5 flex items-center justify-between ${headerBg} ${textColor} shrink-0 z-10`}
        >
          {/* Status Bar Left: Clock */}
          <span className="text-[11px] sm:text-xs font-semibold tracking-tight tabular-nums">9:41</span>

          {/* Status Bar Right: Signal, Wi-Fi, Battery */}
          <div className="flex items-center gap-1.5">
            {/* Cellular Signal Bars */}
            <svg className="w-3.5 h-3" viewBox="0 0 17 12" fill="none">
              <rect x="0.5" y="8.5" width="2.5" height="3" rx="0.6" fill={iconColor} />
              <rect x="4.5" y="6" width="2.5" height="5.5" rx="0.6" fill={iconColor} />
              <rect x="8.5" y="3.5" width="2.5" height="8" rx="0.6" fill={iconColor} />
              <rect x="12.5" y="1" width="2.5" height="10.5" rx="0.6" fill={iconColor} />
            </svg>

            {/* Wi-Fi Icon */}
            <svg className="w-3.5 h-3" viewBox="0 0 16 12" fill={iconColor}>
              <path d="M8 11.2a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm-3.2-3.4a4.5 4.5 0 0 1 6.4 0 .8.8 0 0 0 1.1-1.1 6.1 6.1 0 0 0-8.6 0 .8.8 0 1 0 1.1 1.1zm-2.8-2.8a8.5 8.5 0 0 1 12 0 .8.8 0 1 0 1.1-1.1 10.1 10.1 0 0 0-14.2 0 .8.8 0 0 0 1.1 1.1z" />
            </svg>

            {/* Battery Icon */}
            <div className="flex items-center">
              <div className="w-5 h-2.5 rounded-[3px] border border-current p-[1.5px] flex items-center">
                <div className="h-full w-full rounded-[1px]" style={{ backgroundColor: iconColor }} />
              </div>
              <div className="w-[1.5px] h-1 rounded-r-[1px] -ml-[0.5px]" style={{ backgroundColor: iconColor }} />
            </div>
          </div>
        </div>

        {/* Screenshot Content (100% visible, fully unobscured) */}
        <div className="w-full relative flex-1 overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover object-top block"
            loading="lazy"
          />
        </div>

        {/* Mobile Bottom Navigation Bar / Home Indicator */}
        <div className="h-4 sm:h-5 bg-white flex items-center justify-center shrink-0 border-t border-slate-100">
          <div className="w-28 sm:w-32 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}
