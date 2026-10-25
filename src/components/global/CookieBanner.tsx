import { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigateLegal: (doc: 'privacy' | 'deletion') => void;
}

const STORAGE_KEY = 'ph_cookie_consent_v1';

export default function CookieBanner({ onNavigateLegal }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        // Small delay so it smoothly appears
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // Ignore
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'essential');
    } catch {
      // Ignore
    }
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Cookie and Privacy Notice" className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Cookie className="w-4 h-4" />
            </span>
            <h4 className="text-sm font-bold text-white tracking-tight">Cookie &amp; Privacy Notice</h4>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Close cookie banner"
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Pet Horizon uses essential local caching and anonymous telemetry to maintain care schedule reliability.
          We never monetize or sell personal pet data.{' '}
          <button
            onClick={() => onNavigateLegal('privacy')}
            className="text-emerald-400 hover:text-emerald-300 underline font-medium cursor-pointer"
          >
            Read Privacy Protocol
          </button>
        </p>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleAccept}
            className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2 px-3 rounded-xl transition-all shadow-sm text-center cursor-pointer"
          >
            Got it, Accept
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-slate-400 hover:text-white font-medium py-2 px-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Essential Only
          </button>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            GDPR &amp; Google Play Compliant
          </span>
          <span className="text-[10px] text-slate-500">Local-first sync</span>
        </div>
      </div>
    </aside>
  );
}
