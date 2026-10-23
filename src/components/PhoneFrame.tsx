import React from 'react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
}

export default function PhoneFrame({
  src,
  alt,
  className = '',
  frameClassName = 'w-[275px] sm:w-[310px]'
}: PhoneFrameProps) {
  return (
    <div
      className={`relative ${frameClassName} rounded-[2.8rem] sm:rounded-[3.2rem] p-2.5 sm:p-3 bg-slate-950 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)] border-4 border-slate-800/90 select-none ${className}`}
    >
      {/* Screen Container with No Notch (Aspect Ratio 9 / 19.5) */}
      <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden bg-emerald-950 aspect-[9/19.5] shadow-inner">
        {/* Completely Transparent Status Bar Overlay (Not white, not green, not black) */}
        <div className="absolute top-0 left-0 right-0 z-20 px-5 pt-2.5 pb-1 flex items-center justify-between text-white pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
          {/* Status Bar Left: Clock */}
          <span className="text-[11px] sm:text-xs font-semibold tracking-tight tabular-nums">9:41</span>

          {/* Status Bar Right: Signal, Wi-Fi, Battery */}
          <div className="flex items-center gap-1.5">
            {/* Cellular Signal Bars */}
            <svg className="w-3.5 h-3" viewBox="0 0 17 12" fill="none">
              <rect x="0.5" y="8.5" width="2.5" height="3" rx="0.6" fill="#FFFFFF" />
              <rect x="4.5" y="6" width="2.5" height="5.5" rx="0.6" fill="#FFFFFF" />
              <rect x="8.5" y="3.5" width="2.5" height="8" rx="0.6" fill="#FFFFFF" />
              <rect x="12.5" y="1" width="2.5" height="10.5" rx="0.6" fill="#FFFFFF" />
            </svg>

            {/* Wi-Fi Icon */}
            <svg className="w-3.5 h-3" viewBox="0 0 16 12" fill="#FFFFFF">
              <path d="M8 11.2a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm-3.2-3.4a4.5 4.5 0 0 1 6.4 0 .8.8 0 0 0 1.1-1.1 6.1 6.1 0 0 0-8.6 0 .8.8 0 1 0 1.1 1.1zm-2.8-2.8a8.5 8.5 0 0 1 12 0 .8.8 0 1 0 1.1-1.1 10.1 10.1 0 0 0-14.2 0 .8.8 0 0 0 1.1 1.1z" />
            </svg>

            {/* Battery Icon */}
            <div className="flex items-center">
              <div className="w-5 h-2.5 rounded-[3px] border border-white p-[1.5px] flex items-center">
                <div className="h-full w-full rounded-[1px] bg-white" />
              </div>
              <div className="w-[1.5px] h-1 rounded-r-[1px] -ml-[0.5px] bg-white" />
            </div>
          </div>
        </div>

        {/* Screenshot Content (Edge to Edge) */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top block"
          loading="lazy"
        />

        {/* Bottom Navigation Home Indicator Pill */}
        <div className="absolute bottom-1.5 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <div className="w-28 sm:w-32 h-1 bg-white/70 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] backdrop-blur-xs" />
        </div>
      </div>
    </div>
  );
}
