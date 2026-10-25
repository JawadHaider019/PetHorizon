import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface AnnouncementBarProps {
  onNavigateChangelog: () => void;
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
    <div className="w-full bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 text-white text-xs py-2 px-3 sm:px-4 shadow-xs border-b border-emerald-500/30 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div
          onClick={onNavigateChangelog}
          className="flex-1 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 cursor-pointer group min-w-0"
        >
          <span className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-50 shrink-0">
            <Sparkles className="w-3 h-3 text-emerald-200" />
            v1.0.10 Live
          </span>

          <span className="font-medium text-emerald-50 text-[11px] sm:text-xs truncate">
            Expense Tracking &amp; Receipt Vault now live in Pet Horizon
          </span>

          <span className="hidden sm:inline-flex items-center gap-0.5 font-bold text-white text-[11px] sm:text-xs underline group-hover:text-emerald-200 transition-colors whitespace-nowrap shrink-0">
            See Changelog
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
