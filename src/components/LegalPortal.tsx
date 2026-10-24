import { useState, useEffect } from 'react';
import { useScroll, motion } from 'framer-motion';
import { Mail, ChevronRight, ArrowLeft, ShieldCheck, Trash2 } from 'lucide-react';
import { PRIVACY_POLICY, DATA_DELETION_GUIDE, LegalDocument } from '../data/legalData';
import LegalSidebar from './LegalSidebar';
import LegalSectionsList from './LegalSectionsList';

interface LegalPortalProps {
  initialDoc?: 'privacy' | 'deletion';
  onNavigateHome: () => void;
  onSelectDoc?: (docId: 'privacy' | 'deletion') => void;
}

export default function LegalPortal({
  initialDoc = 'privacy',
  onNavigateHome,
  onSelectDoc
}: LegalPortalProps) {
  const [activeDocId, setActiveDocId] = useState<'privacy' | 'deletion'>(initialDoc);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [readPercent, setReadPercent] = useState(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setActiveDocId(initialDoc);
  }, [initialDoc]);

  const currentDoc: LegalDocument =
    activeDocId === 'privacy' ? PRIVACY_POLICY : DATA_DELETION_GUIDE;

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setReadPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentDoc.sections.length > 0) {
      setActiveSectionId(currentDoc.sections[0].id);
    }
  }, [activeDocId]);

  const handleDocChange = (id: 'privacy' | 'deletion') => {
    setActiveDocId(id);
    if (onSelectDoc) onSelectDoc(id);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-24 pb-16 selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb (Identical styling to BlogHub) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <button
              onClick={onNavigateHome}
              className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 whitespace-nowrap">Legal &amp; Trust Center</span>
            <span className="text-slate-300">/</span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 whitespace-nowrap">
              {activeDocId === 'privacy' ? 'Privacy Policy' : 'Data & Account Deletion'}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs w-fit whitespace-nowrap shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Official Public Record
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium whitespace-nowrap bg-slate-100 px-2.5 py-1 rounded-full">
              Effective: {currentDoc.effectiveDate}
            </span>
          </div>
        </div>

        {/* Hero Banner (Identical layout & typography to BlogHub) */}
        <div className="text-center max-w-3xl mx-auto pt-2 pb-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">
              Official Compliance &amp; Security Protocol
            </p>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {activeDocId === 'privacy' 
                ? 'Pet Horizon Privacy Policy' 
                : 'User Data & Account Deletion Protocol'}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {currentDoc.subtitle}
            </p>
          </motion.div>

          {/* Modular Document Switcher Pills (Matching Blog category filter pills) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => handleDocChange('privacy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap select-none ${
                activeDocId === 'privacy'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-700/20 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => handleDocChange('deletion')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap select-none ${
                activeDocId === 'deletion'
                  ? 'bg-rose-600 text-white shadow-sm shadow-rose-700/20 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              <Trash2 className="w-4 h-4 shrink-0" />
              <span>Data &amp; Account Deletion</span>
            </button>
          </div>
        </div>

        {/* Key Executive Guarantees Pill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-12 pt-6 border-t border-slate-100">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Zero Data Monetization</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              We never sell, rent, or trade your pet health or personal care data to any advertisers or third party brokers.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Encrypted Health Records</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              All records, medical dosages, and walk timelines are encrypted in transit via TLS 1.3 and securely isolated.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Unconditional Deletion</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Delete your account in-app or via email at any time with total irreversible database purging.
            </p>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <LegalSidebar
            currentDoc={currentDoc}
            activeSectionId={activeSectionId}
            onScrollToSection={scrollToSection}
            readPercent={readPercent}
          />

          <div className="lg:col-span-8 space-y-8">
            <LegalSectionsList
              currentDoc={currentDoc}
              activeSectionId={activeSectionId}
            />

            {/* Bottom Document Switcher */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 print:hidden">
              <button
                onClick={() => handleDocChange(activeDocId === 'privacy' ? 'deletion' : 'privacy')}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all text-left group cursor-pointer shadow-xs"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Switch Document
                </div>
                <div className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm flex items-center justify-between">
                  <span>{activeDocId === 'privacy' ? 'Data Deletion Guide' : 'Privacy Policy'}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-emerald-950">Questions or inquiries?</h5>
                  <p className="text-[11px] text-emerald-800">Email our engineering team directly.</p>
                </div>
                <a
                  href="mailto:pethorizon2026@gmail.com"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
