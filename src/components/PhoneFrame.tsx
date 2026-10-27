interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  priority?: boolean;
}

export default function PhoneFrame({
  src,
  alt,
  className = '',
  frameClassName = 'w-[275px] sm:w-[310px]',
  priority = false
}: PhoneFrameProps) {
  return (
    <div
      className={`relative ${frameClassName} rounded-[2.8rem] sm:rounded-[3.2rem] p-2.5 sm:p-3 bg-slate-800/90 shadow-[0_20px_50px_-10px_rgba(46,125,50,0.15)] border-4 border-slate-700/70 select-none ${className}`}
    >
      {/* Screen Container: Edge-to-edge Screenshot */}
      <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19.5] shadow-inner bg-[#F5F6F8]">
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
      </div>
    </div>
  );
}
