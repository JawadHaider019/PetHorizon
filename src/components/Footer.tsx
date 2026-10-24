import { GooglePlayBadge, AppStoreBadge } from './AppBadges';
import { ArrowUp, ShieldCheck, Heart, Sparkles as SparkleIcon, Radio } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'blog' | 'privacy' | 'terms' | 'deletion', hash?: string) => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function Footer({ onNavigate, onNavigateLegal }: FooterProps) {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F9FA] text-slate-700 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-200/90 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Top Brand & Mission Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center p-2 shadow-md shadow-emerald-600/20">
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

          <div className="flex items-center gap-2.5 self-start md:self-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Release 1.0.4</span>
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-emerald-700 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-2xs"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Structured Multi-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 sm:gap-10 py-10 sm:py-12 border-b border-slate-200/80 text-left">
          
          {/* Col 1: Core Product (3 Cols) */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <span>Product Features</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
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

          {/* Col 2: Knowledge & Resources (3 Cols) */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <span>Knowledge Hub</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
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

          {/* Col 3: Legal & Trust (3 Cols) */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Trust &amp; Governance</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
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

          {/* Col 4: App Download & Badges (3 Cols) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col items-start gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">
              Mobile Application
            </h4>
            <p className="text-xs text-slate-500 leading-normal mb-1">
              Download the native mobile app to track schedules and invite family caretakers.
            </p>
            <div className="flex flex-col gap-2.5 w-full">
              <GooglePlayBadge href={playStoreUrl} className="w-full justify-center sm:justify-start" />
              <AppStoreBadge className="w-full justify-center sm:justify-start" />
            </div>
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
