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
            className="flex items-center gap-2.5 group cursor-pointer select-none focus:outline-none"
            aria-label="Return to Pet Horizon Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100/90 flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 group-hover:bg-emerald-100/60 transition-all duration-200">
              <img
                src="/ph-logo-mark.png"
                alt="Pet Horizon Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/app-icon.png';
                }}
              />
            </div>
            <div className="flex flex-col text-left hidden sm:flex">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-none">
                Pet<span className="text-emerald-600 font-extrabold ml-0.5">Horizon</span>
              </span>
              <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-widest mt-0.5">
                Privacy &amp; Trust Center
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

    </header>
  );
}
