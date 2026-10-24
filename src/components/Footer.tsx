import { useState } from 'react';
import { GooglePlayBadge, AppStoreBadge } from './AppBadges';
import { ShieldCheck, ChevronDown } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'blog' | 'privacy' | 'terms' | 'deletion', hash?: string) => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function Footer({ onNavigate, onNavigateLegal }: FooterProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  const handleLegalClick = (e: React.MouseEvent, doc: 'privacy' | 'deletion') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(doc);
    } else if (onNavigateLegal) {
      onNavigateLegal(doc);
    } else {
      window.location.href = `/${doc === 'privacy' ? 'privacy-policy' : 'data-deletion'}`;
    }
  };

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('blog');
    } else {
      window.location.href = '/blog';
    }
  };

  return (
    <footer className="bg-[#F8F9FA] text-slate-700 pt-10 sm:pt-14 pb-8 sm:pb-12 border-t border-slate-200/90 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Unified Brand & App Download Header */}
        <div className="pb-8 sm:pb-10 border-b border-slate-200/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Brand Identity & Mission */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left">
              <div className="flex items-center space-x-3 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-600 flex items-center justify-center p-2 shadow-md shadow-emerald-600/20">
                  <img
                    src="/ph-logo-white.png"
                    alt="Pet Horizon"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/ph-logo-mark.png';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none block">
                    Pet<span className="text-emerald-600 font-extrabold">Horizon</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mt-1">
                    Smart Companion Care
                  </span>
                </div>
              </div>

              <span className="hidden sm:block h-8 w-px bg-slate-200 mx-2" />

              <p className="text-xs sm:text-sm text-slate-500 max-w-md font-normal leading-relaxed">
                Synchronizing daily feedings, walk routines, medication alarms, and veterinary milestones for companion families worldwide.
              </p>
            </div>

            {/* Badges in a single side-by-side row */}
            <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto shrink-0 max-w-sm sm:max-w-none">
              <GooglePlayBadge href={playStoreUrl} className="w-full justify-center" />
              <AppStoreBadge className="w-full justify-center" />
            </div>

          </div>
        </div>

        {/* Mobile Directory: Clean Modern Accordions (Used by Apple, Spotify, Airbnb) */}
        <div className="md:hidden divide-y divide-slate-200/70 border-b border-slate-200/80 text-left">
          
          {/* Mobile Accordion: Product */}
          <div>
            <button
              onClick={() => toggleAccordion('product')}
              className="w-full py-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
            >
              <span>Product Features</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openAccordion === 'product' ? 'rotate-180 text-emerald-700' : ''
                }`}
              />
            </button>
            {openAccordion === 'product' && (
              <ul className="pb-4 space-y-2.5 text-xs text-slate-600 pl-1 animate-in fade-in slide-in-from-top-1">
                <li>
                  <a href="#how-it-works" className="hover:text-emerald-700 transition-colors font-medium block">
                    How Pet Horizon Works
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-emerald-700 transition-colors font-medium block">
                    Care Schedules &amp; Reminders
                  </a>
                </li>
                <li>
                  <a href="#family-hub" className="hover:text-emerald-700 transition-colors font-medium block">
                    Shared Family Care Hub
                  </a>
                </li>
                <li>
                  <a href="#journal" className="hover:text-emerald-700 transition-colors font-medium block">
                    Daily Photo Journal &amp; Milestones
                  </a>
                </li>
                <li>
                  <a href="#tour" className="hover:text-emerald-700 transition-colors font-medium block">
                    Interactive App Tour
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-emerald-700 transition-colors font-medium block">
                    Membership &amp; Family Plans
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Mobile Accordion: Knowledge */}
          <div>
            <button
              onClick={() => toggleAccordion('knowledge')}
              className="w-full py-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
            >
              <span>Knowledge &amp; Support</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openAccordion === 'knowledge' ? 'rotate-180 text-emerald-700' : ''
                }`}
              />
            </button>
            {openAccordion === 'knowledge' && (
              <ul className="pb-4 space-y-2.5 text-xs text-slate-600 pl-1 animate-in fade-in slide-in-from-top-1">
                <li>
                  <button
                    onClick={handleBlogClick}
                    className="hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Veterinary Care Blog</span>
                    <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">
                      Guides
                    </span>
                  </button>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-700 transition-colors font-medium block">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-emerald-700 transition-colors font-medium block">
                    Contact Support Team
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:pethorizon2026@gmail.com"
                    className="text-emerald-700 hover:text-emerald-800 transition-colors font-semibold block mt-1"
                  >
                    pethorizon2026@gmail.com
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Mobile Accordion: Legal */}
          <div>
            <button
              onClick={() => toggleAccordion('legal')}
              className="w-full py-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trust &amp; Governance</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openAccordion === 'legal' ? 'rotate-180 text-emerald-700' : ''
                }`}
              />
            </button>
            {openAccordion === 'legal' && (
              <ul className="pb-4 space-y-2.5 text-xs text-slate-600 pl-1 animate-in fade-in slide-in-from-top-1">
                <li>
                  <button
                    onClick={(e) => handleLegalClick(e, 'privacy')}
                    className="hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Official Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLegalClick(e, 'deletion')}
                    className="hover:text-rose-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>Data &amp; Account Deletion</span>
                  </button>
                </li>
                <li className="text-slate-500 pt-1 font-normal leading-normal">
                  Google Play Policy Compliant
                </li>
                <li className="text-slate-500 font-normal leading-normal">
                  TLS 1.3 Health Record Encryption
                </li>
              </ul>
            )}
          </div>

        </div>

        {/* Desktop Directory: 3 Structured Columns (Hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 py-12 border-b border-slate-200/80 text-left">
          
          {/* Col 1: Core Product */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Product Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#how-it-works" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Care Schedules
                </a>
              </li>
              <li>
                <a href="#family-hub" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Family Care Hub
                </a>
              </li>
              <li>
                <a href="#journal" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Daily Photo Journal
                </a>
              </li>
              <li>
                <a href="#tour" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Interactive App Tour
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Membership Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Knowledge & Resources */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Knowledge Hub
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={handleBlogClick}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Pet Care Blog</span>
                  <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                    Guides
                  </span>
                </button>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium block">
                  Contact Support Desk
                </a>
              </li>
              <li>
                <a
                  href="mailto:pethorizon2026@gmail.com"
                  className="text-emerald-700 hover:text-emerald-800 transition-colors font-semibold text-xs block truncate mt-1"
                >
                  pethorizon2026@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Trust &amp; Governance</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={(e) => handleLegalClick(e, 'privacy')}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLegalClick(e, 'deletion')}
                  className="text-slate-600 hover:text-rose-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Data &amp; Account Deletion</span>
                </button>
              </li>
              <li className="text-xs text-slate-500 pt-1 font-normal leading-normal">
                Google Play Policy Compliant
              </li>
              <li className="text-xs text-slate-500 font-normal leading-normal">
                TLS 1.3 Health Record Encryption
              </li>
            </ul>
          </div>

        </div>

        {/* Refined Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 font-medium">
            <button
              onClick={handleBlogClick}
              className="hover:text-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Veterinary Guides
            </button>
            <span className="text-slate-300">&bull;</span>
            <button
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Privacy Protocol
            </button>
            <span className="text-slate-300">&bull;</span>
            <button
              onClick={(e) => handleLegalClick(e, 'deletion')}
              className="hover:text-rose-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Data Deletion
            </button>
            <span className="text-slate-300">&bull;</span>
            <a href="#contact" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Engineering Support
            </a>
          </div>

          <p className="font-normal text-center md:text-right text-[11px] sm:text-xs text-slate-500">
            Pet Horizon &copy; {new Date().getFullYear()} &bull; Built with care by{' '}
            <a
              href="https://aqibfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 font-bold hover:text-emerald-700 transition-colors underline decoration-slate-300 hover:decoration-emerald-500"
            >
              Aqib Mansoor
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
