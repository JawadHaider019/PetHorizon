import { useState } from 'react';
import { motion, MotionValue } from 'framer-motion';
import {
  ShieldCheck,
  Trash2,
  ArrowLeft,
  Mail,
  Copy,
  Check
} from 'lucide-react';

interface LegalNavbarProps {
  activeDocId: 'privacy' | 'deletion';
  onDocChange: (doc: 'privacy' | 'deletion') => void;
  onNavigateHome: () => void;
  scaleX?: MotionValue<number>;
  readPercent?: number;
}

export default function LegalNavbar({
  activeDocId,
  onDocChange,
  onNavigateHome,
  scaleX,
  readPercent = 0
}: LegalNavbarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand & Return Home Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Return to Pet Horizon Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="text-left hidden sm:block">
              <span className="font-extrabold text-base text-slate-900 tracking-tight block leading-tight">
                Pet Horizon
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                Legal &amp; Trust Center
              </span>
            </div>
          </button>

          <span className="h-6 w-px bg-slate-200 hidden sm:block" />

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-600" />
            <span>Home</span>
          </button>
        </div>

        {/* Center: Clean Segmented Document Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200/60 text-xs">
          <button
            onClick={() => onDocChange('privacy')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeDocId === 'privacy'
                ? 'bg-white text-emerald-800 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => onDocChange('deletion')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeDocId === 'deletion'
                ? 'bg-white text-rose-800 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>Data Deletion</span>
          </button>
        </div>

        {/* Right: Actions (Copy Link & Contact) */}
        <div className="flex items-center gap-2">
          {readPercent > 0 && (
            <span className="hidden md:inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
              {readPercent}% read
            </span>
          )}

          <button
            onClick={handleCopyLink}
            title="Copy URL"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </button>

          <a
            href="mailto:pethorizon2026@gmail.com?subject=Legal%20%26%20Privacy%20Inquiry"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>Contact DPO</span>
          </a>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      {scaleX && (
        <motion.div
          style={{ scaleX }}
          className="h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 origin-left"
        />
      )}
    </header>
  );
}
