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
      {/* Screen Container: Edge-to-edge Screenshot */}
      <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19.5] shadow-inner bg-slate-900">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top block"
          loading="lazy"
        />
      </div>
    </div>
  );
}
