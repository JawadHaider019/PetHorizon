import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Trash2,
  ArrowLeft,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Lock,
  Smartphone,
  Calendar,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  Eye,
  Camera,
  Bell,
  HardDrive,
  Server
} from 'lucide-react';
import { PRIVACY_POLICY, DATA_DELETION_GUIDE, LegalDocument } from '../data/legalData';

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
  const [copied, setCopied] = useState(false);
  const [readPercent, setReadPercent] = useState(0);

  const horizontalNavRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setActiveDocId(initialDoc);
  }, [initialDoc]);

  // Current active document
  const currentDoc: LegalDocument =
    activeDocId === 'privacy'
      ? PRIVACY_POLICY
      : DATA_DELETION_GUIDE;

  // Track reading percentage
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setReadPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);

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
          const top = item.el.offsetTop - 190;
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

  // Auto-scroll the horizontal pill bar to keep the active section in view
  useEffect(() => {
    if (activeSectionId && horizontalNavRef.current) {
      const activeBtn = horizontalNavRef.current.querySelector(
        `[data-section="${activeSectionId}"]`
      ) as HTMLElement | null;
      if (activeBtn) {
        const container = horizontalNavRef.current;
        const scrollLeft =
          activeBtn.offsetLeft -
          container.offsetLeft -
          container.clientWidth / 2 +
          activeBtn.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeSectionId]);

  const [sectionDropdownOpen, setSectionDropdownOpen] = useState(false);
  const sectionDropdownRef = useRef<HTMLDivElement>(null);

  // Close section dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sectionDropdownRef.current &&
        !sectionDropdownRef.current.contains(e.target as Node)
      ) {
        setSectionDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDocChange = (docId: 'privacy' | 'deletion') => {
    setActiveDocId(docId);
    setSectionDropdownOpen(false);
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
    setSectionDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  const activeSectionIndex = currentDoc.sections.findIndex((s) => s.id === activeSectionId);
  const activeSection = currentDoc.sections[activeSectionIndex >= 0 ? activeSectionIndex : 0];

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-[64px] sm:pt-[70px] selection:bg-emerald-500/20 selection:text-emerald-800 relative">
      
      {/* Consolidated Single-Row Sleek Sub-Bar (Height ~52px) */}
      <header className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-13 flex items-center justify-between gap-3">
          
          {/* Left: Back to Home & Breadcrumb */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </button>

            <span className="text-slate-300 hidden sm:inline">&bull;</span>

            <span className="text-xs font-bold text-slate-800 hidden md:inline truncate max-w-[160px]">
              {currentDoc.id === 'privacy'
                ? 'Privacy Policy'
                : 'Account Deletion'}
            </span>
          </div>

          {/* Center: Document Switcher Segmented Control */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 text-xs">
            <button
              onClick={() => handleDocChange('privacy')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                activeDocId === 'privacy'
                  ? 'bg-white text-emerald-800 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => handleDocChange('deletion')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                activeDocId === 'deletion'
                  ? 'bg-white text-rose-800 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
              <span>Account Deletion</span>
            </button>
          </div>

          {/* Right: Compact "Jump to Section" Dropdown & Actions */}
          <div className="flex items-center gap-2">
            
            {/* Section Jump Dropdown */}
            <div className="relative" ref={sectionDropdownRef}>
              <button
                onClick={() => setSectionDropdownOpen(!sectionDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-900 transition-colors cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                <span className="hidden lg:inline truncate max-w-[170px] font-bold">
                  Sec {(activeSectionIndex >= 0 ? activeSectionIndex : 0) + 1}: {activeSection?.title.replace(/^\d+\.\s*/, '')}
                </span>
                <span className="lg:hidden font-bold">
                  {(activeSectionIndex >= 0 ? activeSectionIndex : 0) + 1}/{currentDoc.sections.length}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-emerald-700 transition-transform ${
                    sectionDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Floating Section Dropdown Card */}
              <AnimatePresence>
                {sectionDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 z-50 max-h-[70vh] overflow-y-auto"
                  >
                    <div className="px-2.5 py-1.5 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <span>Jump to Section</span>
                      <span className="text-emerald-700 font-extrabold">{readPercent}% Read</span>
                    </div>
                    <div className="mt-1 space-y-0.5">
                      {currentDoc.sections.map((sec, idx) => {
                        const isCurrent = activeSectionId === sec.id;
                        return (
                          <button
                            key={sec.id}
                            onClick={() => scrollToSection(sec.id)}
                            className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isCurrent
                                ? 'bg-emerald-50 text-emerald-800 font-bold'
                                : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                  isCurrent
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-slate-100 text-slate-500'
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <span className="truncate">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                            </div>
                            {isCurrent && (
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              title="Copy Page Link"
              className="p-1.5 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer relative"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-emerald-700 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap animate-in fade-in">
                  Copied!
                </span>
              )}
            </button>

            {/* Contact Helpdesk */}
            <a
              href="mailto:pethorizon2026@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs shadow-emerald-700/20 transition-all shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

        </div>

        {/* Ultra-Thin 2px Seamless Reading Progress Line (Pinned flush to sub-bar bottom) */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-500 origin-left"
        />
      </header>

      {/* Hero Document Header (Symmetrical, Centered) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent pt-10 pb-12 border-b border-slate-200/70">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10 text-center">
          
          {/* Compliance & Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-emerald-200 text-xs font-semibold text-emerald-800 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Google Play Policy &amp; Data Safety Compliant</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-500">Android Official</span>
          </motion.div>

          <motion.h1
            key={currentDoc.id + '-title'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto"
          >
            {currentDoc.title}
          </motion.h1>

          <motion.p
            key={currentDoc.id + '-subtitle'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {currentDoc.subtitle}
          </motion.p>

          {/* Document Metadata Badges Grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5 text-xs"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Effective: <strong className="text-slate-900 font-semibold">{currentDoc.effectiveDate}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Last Updated: <strong className="text-slate-900 font-semibold">{currentDoc.lastUpdated}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>App: <strong className="text-slate-900 font-semibold">{currentDoc.app}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-600">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Developer: <strong className="text-slate-900 font-semibold">{currentDoc.developer}</strong></span>
            </div>
          </motion.div>

          {/* Quick Notice Banner with Subtle Float Animation */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-7 max-w-2xl mx-auto bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 text-left flex items-start gap-3.5 text-xs text-emerald-950 leading-relaxed shadow-xs"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5 animate-pulse" />
            <div>
              <strong className="font-semibold block mb-0.5 text-emerald-900">Your Data Belongs to You</strong>
              Pet Horizon does not sell, rent, or monetize your pet's medical records or personal details to advertisers. All communications are TLS encrypted, and you can delete your data at any time.
            </div>
          </motion.div>

        </div>
      </section>

      {/* Main Centered Reading Document (Balanced, No Asymmetric Empty Space) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDocId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {currentDoc.sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className={`bg-white rounded-3xl border p-6 sm:p-9 shadow-xs scroll-mt-36 transition-all ${
                  activeSectionId === section.id
                    ? 'border-emerald-300 ring-2 ring-emerald-500/10'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                
                {/* Section Header */}
                <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-700 font-black flex items-center justify-center text-sm shrink-0 border border-emerald-100 shadow-2xs">
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

                {/* Subsections with Balanced 2-Column Responsive Internal Grids */}
                {section.subsections && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.subsections.map((sub, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.15 }}
                        className={`bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-slate-200/70 hover:border-emerald-200/80 transition-colors flex flex-col justify-between ${
                          section.subsections && section.subsections.length % 2 !== 0 && sIdx === section.subsections.length - 1
                            ? 'md:col-span-2'
                            : ''
                        }`}
                      >
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            {sub.subtitle}
                          </h4>

                          {sub.paragraph && (
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                              {sub.paragraph}
                            </p>
                          )}

                          {sub.items && (
                            <ul className="space-y-2 mt-2">
                              {sub.items.map((item, iIdx) => (
                                <li
                                  key={iIdx}
                                  className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* INTERACTIVE VISUAL 1: Section 4 Device Permissions Interactive Map */}
                {section.id === 'device-permissions' && (
                  <div className="mt-7 pt-5 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-emerald-600" />
                      Interactive Permissions Transparency Map
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-left"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                          <Camera className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-xs text-slate-900">Camera Access</h5>
                        <p className="text-[11px] text-slate-600 mt-1">Used exclusively when you snap pet photos.</p>
                        <span className="mt-2.5 inline-block text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                          User-Initiated Only
                        </span>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-left"
                      >
                        <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-2">
                          <HardDrive className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-xs text-slate-900">Gallery / Storage</h5>
                        <p className="text-[11px] text-slate-600 mt-1">Accesses only the photo you pick.</p>
                        <span className="mt-2.5 inline-block text-[10px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                          Zero Device Scanning
                        </span>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-left"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-2">
                          <Bell className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-xs text-slate-900">Notifications</h5>
                        <p className="text-[11px] text-slate-600 mt-1">Timely alarms for feeding &amp; meds.</p>
                        <span className="mt-2.5 inline-block text-[10px] font-bold text-blue-800 bg-blue-100/80 px-2 py-0.5 rounded">
                          Toggled In Settings
                        </span>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* INTERACTIVE VISUAL 2: Section 5 & 6 Security & Zero-Sale Badges */}
                {(section.id === 'data-sharing' || section.id === 'data-security') && (
                  <div className="mt-7 pt-5 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                        <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Zero Data Monetization</div>
                          <div className="text-[11px] text-slate-600 mt-0.5">Your pet data is never sold to advertisers or brokers.</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">TLS 1.3 &amp; AES-256</div>
                          <div className="text-[11px] text-slate-600 mt-0.5">Military-grade in-transit and at-rest cloud encryption.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* INTERACTIVE VISUAL 3: Section 7 3-Step Data Deletion Path */}
                {(section.id === 'data-retention-deletion' || section.id === 'what-is-deleted' || section.id === 'in-app-steps') && (
                  <div className="mt-6 p-6 rounded-2xl bg-rose-50/70 border border-rose-200/90 text-xs text-rose-950 space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-sm block text-rose-900">
                          Guaranteed 30-Day Irreversible Account Deletion
                        </strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          In accordance with Google Play Data Safety policies, you can trigger full data purging directly:
                        </p>
                      </div>
                    </div>

                    {/* 3 Steps Animated Path */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-center">
                      <div className="bg-white p-3.5 rounded-xl border border-rose-200/80 shadow-2xs">
                        <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 font-bold inline-flex items-center justify-center text-[10px] mb-1.5">
                          1
                        </span>
                        <div className="font-bold text-slate-900 text-xs">Request Deletion</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Via in-app settings or email</div>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-rose-200/80 shadow-2xs">
                        <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 font-bold inline-flex items-center justify-center text-[10px] mb-1.5">
                          2
                        </span>
                        <div className="font-bold text-slate-900 text-xs">Immediate Lockout</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Account tokens revoked</div>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-rose-200/80 shadow-2xs">
                        <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 font-bold inline-flex items-center justify-center text-[10px] mb-1.5">
                          3
                        </span>
                        <div className="font-bold text-slate-900 text-xs">Permanent Purge</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Wiped within 30 days</div>
                      </div>
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-rose-200/60">
                      <span className="text-[11px] text-slate-600">
                        Registered Email: <strong className="text-slate-900">pethorizon2026@gmail.com</strong>
                      </span>
                      <a
                        href="mailto:pethorizon2026@gmail.com?subject=Data%20Deletion%20Request"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-xs transition-colors shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Send Deletion Email
                      </a>
                    </div>
                  </div>
                )}

                {/* Specific Veterinary Disclaimer Card */}
                {section.id === 'vet-disclaimer' && (
                  <div className="mt-6 p-4.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-amber-900 mb-0.5">Important Veterinary Health Notice</strong>
                      Pet Horizon is an organization tool, not a veterinary clinic. In any emergency or health anomaly with your pet, seek immediate examination by a certified veterinarian.
                    </div>
                  </div>
                )}

              </motion.section>
            ))}

            {/* Developer Support & Contact Helpdesk Banner (In-Flow, Balanced) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Need help or have questions regarding your data?</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our developer team responds to all privacy inquiries and deletion requests within 2-3 business days.
                  </p>
                </div>
              </div>

              <a
                href="mailto:pethorizon2026@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-700/20 transition-all shrink-0 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>pethorizon2026@gmail.com</span>
              </a>
            </div>

            {/* Bottom Navigation between Legal Docs (2-Column Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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

            {/* Back to Home CTA Box (Clean Light Theme) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center border border-emerald-200/90 shadow-xs relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified &amp; Up to Date
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Ready to explore Pet Horizon?</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Discover the smart daily routines, vaccination alerts, and family hub built for happy, healthy pets.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onNavigateHome}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
                >
                  Back to Main Website
                </button>
                <a
                  href={currentDoc.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-all inline-flex items-center gap-1.5"
                >
                  Get on Google Play <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Minimal Legal Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
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
