import { useRef, useState } from 'react';
import { motion, AnimatePresence, MotionValue } from 'framer-motion';
import {
  ShieldCheck,
  Trash2,
  ArrowLeft,
  Mail,
  Copy,
  Check,
  ChevronDown,
  Calendar,
  Lock,
  Smartphone,
  UserCheck
} from 'lucide-react';
import { LegalDocument } from '../data/legalData';

interface LegalHeaderProps {
  currentDoc: LegalDocument;
  activeDocId: 'privacy' | 'deletion';
  onDocChange: (id: 'privacy' | 'deletion') => void;
  onNavigateHome: () => void;
  readPercent: number;
  activeSectionId: string;
  onScrollToSection: (id: string) => void;
}

export default function LegalHeader({
  currentDoc,
  activeDocId,
  onDocChange,
  onNavigateHome,
  readPercent,
  activeSectionId,
  onScrollToSection
}: LegalHeaderProps) {
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const activeIdx = currentDoc.sections.findIndex((s) => s.id === activeSectionId);

  return (
    <>
      <header className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-13 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-600" />
              <span>Home</span>
            </button>
          </div>

          <div className="flex items-center p-0.5 sm:p-1 rounded-xl bg-slate-100/90 border border-slate-200/60 text-xs shrink-0">
            <button
              onClick={() => onDocChange('privacy')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeDocId === 'privacy' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">Privacy Policy</span>
              <span className="sm:hidden">Privacy</span>
            </button>
            <button
              onClick={() => onDocChange('deletion')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeDocId === 'deletion' ? 'bg-white text-rose-800 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span className="hidden sm:inline">Account Deletion</span>
              <span className="sm:hidden">Deletion</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <a
              href="mailto:pethorizon2026@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent pt-10 pb-12 border-b border-slate-200/70 text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-emerald-200 text-xs font-semibold text-emerald-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Google Play Policy &amp; Data Safety Compliant</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            {currentDoc.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {currentDoc.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Effective: <strong>{currentDoc.effectiveDate}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Updated: <strong>{currentDoc.lastUpdated}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>App: <strong>{currentDoc.app}</strong></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
