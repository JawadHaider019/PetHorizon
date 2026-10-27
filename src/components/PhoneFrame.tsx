import React from 'react';

interface PhoneFrameProps {
  src?: string;
  alt?: string;
  className?: string;
  frameClassName?: string;
  priority?: boolean;
  children?: React.ReactNode;
  showButtons?: boolean;
}

export default function PhoneFrame({
  src,
  alt = 'Phone screen preview',
  className = '',
  frameClassName = 'w-[275px] sm:w-[310px]',
  priority = false,
  children,
  showButtons = true
}: PhoneFrameProps) {
  return (
    <div
      className={`relative ${frameClassName} rounded-[2.8rem] sm:rounded-[3.2rem] p-2 sm:p-2.5 bg-[#0F1115] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-slate-800/80 select-none ${className}`}
    >
      {/* Side Hardware Buttons */}
      {showButtons && (
        <>
          {/* Action Button (Left Top) */}
          <div className="absolute -left-[3px] sm:-left-[4px] top-[48px] sm:top-[54px] w-[3px] sm:w-[4px] h-[18px] sm:h-[22px] bg-[#2A2E35] rounded-l-sm" />
          {/* Volume Up Button (Left) */}
          <div className="absolute -left-[3px] sm:-left-[4px] top-[80px] sm:top-[90px] w-[3px] sm:w-[4px] h-[34px] sm:h-[40px] bg-[#2A2E35] rounded-l-sm" />
          {/* Volume Down Button (Left) */}
          <div className="absolute -left-[3px] sm:-left-[4px] top-[124px] sm:top-[140px] w-[3px] sm:w-[4px] h-[34px] sm:h-[40px] bg-[#2A2E35] rounded-l-sm" />
          {/* Power Button (Right) */}
          <div className="absolute -right-[3px] sm:-right-[4px] top-[82px] sm:top-[92px] w-[3px] sm:w-[4px] h-[48px] sm:h-[56px] bg-[#2A2E35] rounded-r-sm" />
        </>
      )}

      {/* Screen Container: Edge-to-edge Content */}
      <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19.5] shadow-inner bg-[#F5F6F8]">
        {/* Content / Screenshot */}
        {src ? (
          <img
            src={src}
            alt={alt}
            width={499}
            height={1024}
            decoding="async"
            className="w-full h-full object-cover object-top block"
            loading={priority ? 'eager' : 'lazy'}
            {...(priority ? { fetchPriority: 'high' } : {})}
          />
        ) : (
          children
        )}

        {/* Subtle Screen Glass Sheen Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.08] z-20" />
      </div>
    </div>
  );
}
