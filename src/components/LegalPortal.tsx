import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Trash2,
  ArrowLeft,
  Mail,
  Copy,
  Check,
  Printer,
  ExternalLink,
  ChevronRight,
  Lock,
  Smartphone,
  Calendar,
  UserCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PRIVACY_POLICY, TERMS_OF_SERVICE, DATA_DELETION_GUIDE, LegalDocument } from '../data/legalData';

interface LegalPortalProps {
  initialDoc?: 'privacy' | 'terms' | 'deletion';
  onNavigateHome: () => void;
  onSelectDoc?: (docId: 'privacy' | 'terms' | 'deletion') => void;
}

export default function LegalPortal({
  initialDoc = 'privacy',
  onNavigateHome,
  onSelectDoc
}: LegalPortalProps) {
  const [activeDocId, setActiveDocId] = useState<'privacy' | 'terms' | 'deletion'>(initialDoc);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveDocId(initialDoc);
  }, [initialDoc]);

  // Current active document
  const currentDoc: LegalDocument =
    activeDocId === 'privacy'
      ? PRIVACY_POLICY
      : activeDocId === 'terms'
      ? TERMS_OF_SERVICE
      : DATA_DELETION_GUIDE;

  // Scroll to top when document changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentDoc.sections.length > 0) {
      setActiveSectionId(currentDoc.sections[0].id);
    }
  }, [activeDocId]);

  // Track scroll position to update active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionElements = currentDoc.sections.map((sec) => ({
        id: sec.id,
        el: document.getElementById(sec.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop - 160;
          if (scrollY >= top) {
            setActiveSectionId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentDoc]);

  const handleDocChange = (docId: 'privacy' | 'terms' | 'deletion') => {
    setActiveDocId(docId);
    if (onSelectDoc) {
      onSelectDoc(docId);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-[68px] sm:pt-[76px] selection:bg-emerald-500/20 selection:text-emerald-800">
      
      {/* Sticky Secondary Legal Sub-Bar */}
      <header className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          
          {/* Breadcrumb & Back to Home */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 border border-slate-200/80 hover:border-emerald-200 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>

            <div className="hidden sm:block h-4 w-px bg-slate-200" />

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span>Legal Center</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-semibold truncate max-w-[200px]">
                {currentDoc.title}
              </span>
            </div>
          </div>

          {/* Document Switcher Tabs (Desktop) */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => handleDocChange('privacy')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeDocId === 'privacy'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Privacy Policy
            </button>

            <button
              onClick={() => handleDocChange('terms')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeDocId === 'terms'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              Terms of Service
            </button>

            <button
              onClick={() => handleDocChange('deletion')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeDocId === 'deletion'
                  ? 'bg-white text-rose-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
              Data Deletion
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy Page Link"
              className="p-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer relative"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap animate-in fade-in">
                  Link copied!
                </span>
              )}
            </button>

            <button
              onClick={() => window.print()}
              title="Print Policy"
              className="hidden sm:flex p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>

            <a
              href="mailto:pethorizon2026@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs shadow-emerald-700/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Contact Support</span>
              <span className="sm:hidden">Help</span>
            </a>
          </div>

        </div>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden flex items-center justify-between border-t border-slate-200/70 px-4 py-2 bg-slate-50/70 overflow-x-auto gap-2">
          <button
            onClick={() => handleDocChange('privacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeDocId === 'privacy'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleDocChange('terms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeDocId === 'terms'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => handleDocChange('deletion')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeDocId === 'deletion'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            Data Deletion
          </button>
        </div>
      </header>

      {/* Hero Document Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent pt-12 pb-14 border-b border-slate-200/70">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          
          {/* Compliance & Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs border border-emerald-200 text-xs font-semibold text-emerald-800 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Google Play Policy &amp; Data Safety Compliant</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-500">Android Official</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            {currentDoc.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {currentDoc.subtitle}
          </p>

          {/* Document Metadata Badges Grid */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Effective: <strong className="text-slate-900 font-semibold">{currentDoc.effectiveDate}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-slate-600">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Last Updated: <strong className="text-slate-900 font-semibold">{currentDoc.lastUpdated}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-slate-600">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>App: <strong className="text-slate-900 font-semibold">{currentDoc.app}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-slate-600">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Developer: <strong className="text-slate-900 font-semibold">{currentDoc.developer}</strong></span>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-8 max-w-2xl mx-auto bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 text-left flex items-start gap-3.5 text-xs text-emerald-950 leading-relaxed shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5 text-emerald-900">Your Data Belongs to You</strong>
              Pet Horizon does not sell, rent, or monetize your pet's medical records or personal details to advertisers. All communications are TLS encrypted, and you can delete your data at any time.
            </div>
          </div>

        </div>
      </section>

      {/* Main Two-Column Document Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents (4 cols) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Box */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    Table of Contents
                  </h3>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    {currentDoc.sections.length} Sections
                  </span>
                </div>

                <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                  {currentDoc.sections.map((section) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-emerald-50 text-emerald-800 font-semibold border-l-3 border-emerald-600'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate">{section.title}</span>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Developer & Contact Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-md text-xs space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Official Support Helpdesk</h4>
                    <p className="text-[11px] text-slate-300">Fast assistance for data &amp; privacy</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-2.5 space-y-1">
                  <div className="text-[11px] text-slate-400">Official Contact:</div>
                  <a
                    href="mailto:pethorizon2026@gmail.com"
                    className="text-emerald-400 font-semibold hover:underline block truncate"
                  >
                    pethorizon2026@gmail.com
                  </a>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Android App Live</span>
                  <a
                    href={currentDoc.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Google Play <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Quick Legal Switcher Widget */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-xs space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Switch Legal Document
                </div>
                <div className="space-y-1.5">
                  <button
                    onClick={() => handleDocChange('privacy')}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      activeDocId === 'privacy'
                        ? 'bg-emerald-600 text-white font-semibold'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Privacy Policy
                  </button>

                  <button
                    onClick={() => handleDocChange('terms')}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      activeDocId === 'terms'
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Terms of Service
                  </button>

                  <button
                    onClick={() => handleDocChange('deletion')}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      activeDocId === 'deletion'
                        ? 'bg-rose-600 text-white font-semibold'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Data &amp; Account Deletion
                  </button>
                </div>
              </div>

            </div>
          </aside>

          {/* Right Column: Full Document Reading Experience (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            
            {currentDoc.sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs scroll-mt-24 transition-all hover:border-slate-300"
              >
                
                {/* Section Header */}
                <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0 border border-emerald-100">
                    {idx + 1}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Body Paragraphs */}
                <div className="mt-5 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="font-normal">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Subsections if present */}
                {section.subsections && (
                  <div className="mt-6 space-y-5">
                    {section.subsections.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-slate-200/60"
                      >
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          {sub.subtitle}
                        </h4>

                        {sub.paragraph && (
                          <p className="text-slate-600 text-sm leading-relaxed mb-3">
                            {sub.paragraph}
                          </p>
                        )}

                        {sub.items && (
                          <ul className="space-y-2 mt-2">
                            {sub.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Specific highlight for Account Deletion in Section 7 */}
                {section.id === 'data-retention-deletion' && (
                  <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block text-rose-900">Need Immediate Data Deletion?</strong>
                        Submit an instant email deletion request or use in-app deletion.
                      </div>
                    </div>
                    <a
                      href="mailto:pethorizon2026@gmail.com?subject=Data%20Deletion%20Request"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-xs transition-colors shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Send Deletion Email
                    </a>
                  </div>
                )}

                {/* Specific highlight for Veterinary disclaimer */}
                {section.id === 'vet-disclaimer' && (
                  <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-amber-900 mb-0.5">Important Veterinary Health Notice</strong>
                      Pet Horizon is an organization tool, not a veterinary clinic. In any emergency or health anomaly with your pet, seek immediate examination by a certified veterinarian.
                    </div>
                  </div>
                )}

              </section>
            ))}

            {/* Bottom Navigation between Legal Docs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              
              {activeDocId !== 'privacy' && (
                <button
                  onClick={() => handleDocChange('privacy')}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all text-left group cursor-pointer shadow-xs"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Read Document
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-emerald-700 text-base flex items-center justify-between">
                    <span>Privacy Policy</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Understand how data &amp; medical records are protected.
                  </p>
                </button>
              )}

              {activeDocId !== 'terms' && (
                <button
                  onClick={() => handleDocChange('terms')}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-left group cursor-pointer shadow-xs"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Read Document
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-blue-700 text-base flex items-center justify-between">
                    <span>Terms of Service</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Veterinary disclaimers and Google Play subscription rules.
                  </p>
                </button>
              )}

              {activeDocId !== 'deletion' && (
                <button
                  onClick={() => handleDocChange('deletion')}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 transition-all text-left group cursor-pointer shadow-xs"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Data Safety Requirement
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-rose-700 text-base flex items-center justify-between">
                    <span>Data &amp; Account Deletion</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Step-by-step instructions for 30-day data purging.
                  </p>
                </button>
              )}

            </div>

            {/* Back to Home CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-2xl font-black mb-2">Ready to explore Pet Horizon?</h3>
              <p className="text-emerald-100 text-sm max-w-md mx-auto mb-6">
                Discover the smart daily routines, vaccination alerts, and family hub built for happy, healthy pets.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onNavigateHome}
                  className="px-6 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-sm shadow-md hover:bg-emerald-50 transition-all cursor-pointer"
                >
                  Back to Main Website
                </button>
                <a
                  href={currentDoc.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-emerald-800/80 text-white font-bold text-sm border border-emerald-400/40 hover:bg-emerald-800 transition-all inline-flex items-center gap-1.5"
                >
                  Get on Google Play <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </main>

        </div>
      </div>

      {/* Minimal Legal Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Pet Horizon &copy; {new Date().getFullYear()} &bull; Developer: Pet Horizon Development Team &bull; pethorizon2026@gmail.com
          </p>
          <div className="flex items-center gap-4 font-medium">
            <button
              onClick={() => handleDocChange('privacy')}
              className={`hover:text-emerald-700 transition-colors cursor-pointer ${
                activeDocId === 'privacy' ? 'text-emerald-700 font-bold' : ''
              }`}
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => handleDocChange('terms')}
              className={`hover:text-emerald-700 transition-colors cursor-pointer ${
                activeDocId === 'terms' ? 'text-emerald-700 font-bold' : ''
              }`}
            >
              Terms of Service
            </button>
            <span>&bull;</span>
            <button
              onClick={() => handleDocChange('deletion')}
              className={`hover:text-emerald-700 transition-colors cursor-pointer ${
                activeDocId === 'deletion' ? 'text-emerald-700 font-bold' : ''
              }`}
            >
              Account Deletion
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
