import { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { PLAY_STORE_URL } from '../../config/siteConfig';

interface AnnouncementBarProps {
  onNavigateChangelog?: () => void;
}

const STORAGE_KEY = 'ph_announce_dismissed_v1010';

export default function AnnouncementBar({ onNavigateChangelog }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const isDismissed = localStorage.getItem(STORAGE_KEY);
      if (!isDismissed) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore localStorage errors
    }
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-emerald-50 via-[#f0fdf4] to-emerald-50/90 text-slate-700 text-xs py-2 px-3 sm:px-6 border-b border-emerald-200/70 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 cursor-pointer group min-w-0"
        >
          {/* Release badge with subtle status dot */}
          <span className="inline-flex items-center gap-1.5 bg-white text-emerald-800 border border-emerald-300/80 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold shadow-2xs shrink-0">
            <span className="flex h-1.5 w-1.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
            </span>
            Official Release
          </span>

          <span className="text-slate-800 text-[11px] sm:text-xs truncate font-medium">
            Pet Horizon is officially live on Google Play Store
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-800 text-[11px] sm:text-xs transition-colors whitespace-nowrap shrink-0">
            <span>Get it on Google Play</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-emerald-100/60 transition-colors shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
