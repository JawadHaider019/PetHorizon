/**
 * Official Google Play 2022 Logo Vector (Exact authentic brand paths)
 */
export function GooglePlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466 512" className={className}>
      <g fillRule="nonzero">
        {/* Blue Left */}
        <path
          fill="#4285F4"
          d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"
        />
        {/* Green Top */}
        <path
          fill="#34A853"
          d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"
        />
        {/* Red Bottom */}
        <path
          fill="#EA4335"
          d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"
        />
        {/* Yellow Right */}
        <path
          fill="#FBBC04"
          d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"
        />
      </g>
    </svg>
  );
}

/**
 * Official Apple Logo Vector (Standard 384x512 Brand Silhouette)
 */
export function AppleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90.1-61.7-91.9zm-56.6-162.7c17.3-21 29-50.2 25.8-79.4-24.8 1-55.5 16.5-73.5 37.6-15.6 18-29.4 47.4-25.7 75.8 27.7 2.1 56.1-13.6 73.4-34z" />
    </svg>
  );
}

interface BadgeProps {
  href?: string;
  className?: string;
}

/**
 * Official Google Play Store Badge
 */
export function GooglePlayBadge({
  href = "https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon",
  className = "",
}: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-4 py-2.5 rounded-2xl border border-neutral-700/80 shadow-xs hover:shadow-md transition-all duration-200 group shrink-0 ${className}`}
    >
      <GooglePlayIcon className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform" />
      <div className="flex flex-col text-left">
        <span className="text-[9px] font-semibold tracking-wider uppercase text-neutral-300 leading-none whitespace-nowrap">
          GET IT ON
        </span>
        <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight leading-tight mt-0.5 whitespace-nowrap">
          Google Play
        </span>
      </div>
    </a>
  );
}

/**
 * Official Apple App Store Badge (with Coming Soon state & optional waitlist trigger)
 */
export function AppStoreBadge({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-4 py-2.5 rounded-2xl border border-neutral-700/80 shadow-xs select-none shrink-0 transition-all duration-200 cursor-pointer ${className}`}
      title={onClick ? "Click to join the iOS Beta Waitlist" : "Coming Soon to the Apple App Store"}
    >
      <AppleIcon className="w-6 h-6 text-white shrink-0" />
      <div className="flex flex-col text-left">
        <span className="text-[9px] font-semibold tracking-tight text-neutral-300 leading-none whitespace-nowrap">
          Download on the
        </span>
        <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight leading-tight mt-0.5 whitespace-nowrap">
          App Store
        </span>
      </div>
      <span className="text-[9px] font-bold uppercase tracking-wider bg-white/15 text-neutral-200 border border-white/20 px-2 py-0.5 rounded-md ml-auto hover:bg-emerald-500/30 transition-colors whitespace-nowrap">
        Soon
      </span>
    </button>
  );
}

/**
 * Scan QR Code to Download Badge (Desktop bridge)
 */
export function QrScanButton({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 font-bold text-xs cursor-pointer ${className}`}
    >
      <div className="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="5" height="5" x="3" y="3" rx="1" />
          <rect width="5" height="5" x="16" y="3" rx="1" />
          <rect width="5" height="5" x="3" y="16" rx="1" />
          <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
          <path d="M21 21v.01" />
          <path d="M12 7v3a2 2 0 0 1-2 2H7" />
          <path d="M3 12h.01" />
          <path d="M12 3h.01" />
          <path d="M12 16v.01" />
          <path d="M16 12h1" />
          <path d="M21 12v.01" />
          <path d="M12 21v-1" />
        </svg>
      </div>
      <span>Scan QR with Phone</span>
    </button>
  );
}
