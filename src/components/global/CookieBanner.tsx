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
        const timer = setTimeout(() => setIsVisible(true), 1000);
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
    <aside
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 backdrop-blur-md text-slate-800 border border-emerald-500/20 rounded-3xl p-5 shadow-2xl shadow-emerald-950/10 ring-1 ring-slate-900/5">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs">
              <Cookie className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-black text-slate-900 tracking-tight">
                Cookie &amp; Privacy Notice
              </h4>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                Pet Horizon Security
              </span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss cookie notice"
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
          Pet Horizon uses essential local caching to synchronize care schedules across family phones.
          We never monetize or sell personal pet data.{' '}
          <button
            onClick={() => onNavigateLegal('privacy')}
            className="text-emerald-700 hover:text-emerald-800 underline font-semibold decoration-emerald-300 cursor-pointer"
          >
            Privacy Protocol
          </button>
        </p>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleAccept}
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all text-center cursor-pointer"
          >
            Got it, Accept
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-slate-600 hover:text-slate-900 font-semibold py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-colors cursor-pointer whitespace-nowrap"
          >
            Essential Only
          </button>
        </div>

        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-slate-600">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            GDPR &amp; Play Policy Compliant
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold">Local-first sync</span>
        </div>
      </div>
    </aside>
  );
}
