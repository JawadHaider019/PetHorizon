import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

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
    <div className="w-full bg-[#0B0F19] text-slate-200 text-xs py-2 px-3 sm:px-6 border-b border-slate-800/80 shadow-xs select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div
          onClick={onNavigateChangelog}
          className="flex-1 flex items-center justify-center sm:justify-start gap-2.5 cursor-pointer group min-w-0"
        >
          {/* Release badge with subtle status dot */}
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-md text-[11px] font-semibold text-emerald-400 shrink-0">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            v1.0.10
          </span>

          <span className="text-slate-300 text-[11px] sm:text-xs truncate font-medium">
            Expense Tracking &amp; Receipt Vault now available
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 font-semibold text-emerald-400 group-hover:text-emerald-300 text-[11px] sm:text-xs transition-colors whitespace-nowrap shrink-0">
            <span>Read changelog</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
