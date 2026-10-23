import { GooglePlayBadge, AppStoreBadge } from './AppBadges';

interface FooterProps {
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function Footer({ onNavigateLegal }: FooterProps) {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  const handleLegalClick = (e: React.MouseEvent, doc: 'privacy' | 'deletion') => {
    e.preventDefault();
    if (onNavigateLegal) {
      onNavigateLegal(doc);
    } else {
      window.location.href = `/${doc === 'privacy' ? 'privacy-policy' : 'data-deletion'}`;
    }
  };

  return (
    <footer className="bg-[#F5F6F8] text-slate-700 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-200">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-4 text-left flex flex-col gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center p-1 shadow-md shadow-emerald-600/20">
                <img
                  src="/app-icon.png"
                  alt="Pet Horizon"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/applogo.png';
                  }}
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Pet<span className="text-emerald-600 font-extrabold">Horizon</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              The complete pet companion assistant. Manage daily feeding routines, medication alerts, vaccination dates, shared family caretaking, and photo memories all in one app.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live on Google Play
              </span>
              <span className="text-xs text-slate-500">Android &bull; Worldwide</span>
            </div>
          </div>

          {/* Product Links (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Care Schedules
                </a>
              </li>
              <li>
                <a href="#family-hub" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Family Hub
                </a>
              </li>
              <li>
                <a href="#journal" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Daily Journal
                </a>
              </li>
              <li>
                <a href="#tour" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Interactive Tour
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Pricing Plans
                </a>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/blog');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Pet Care Blog</span>
                  <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">
                    New
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (3 Cols) */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Legal &amp; Privacy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={(e) => handleLegalClick(e, 'privacy')}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLegalClick(e, 'deletion')}
                  className="text-slate-600 hover:text-rose-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  Account &amp; Data Deletion
                </button>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  FAQs &amp; Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:pethorizon2026@gmail.com"
                  className="text-emerald-700 hover:text-emerald-800 transition-colors font-semibold text-xs block truncate"
                >
                  support@pethorizon.com
                </a>
              </li>
            </ul>
          </div>

          {/* App Download (3 Cols) */}
          <div className="md:col-span-3 text-left flex flex-col items-start gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
              Download App
            </h4>
            
            <GooglePlayBadge href={playStoreUrl} />
            <AppStoreBadge />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-medium text-center sm:text-left">
            Pet Horizon &copy; {new Date().getFullYear()} &bull; Designed &amp; Built by{' '}
            <a
              href="https://aqibfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 font-bold hover:text-emerald-700 transition-colors underline decoration-slate-300 hover:decoration-emerald-500"
            >
              Aqib Mansoor
            </a>{' '}
            &bull; All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-medium">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/blog');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Blog &amp; Guides
            </button>
            <span>&bull;</span>
            <button
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={(e) => handleLegalClick(e, 'deletion')}
              className="hover:text-rose-700 transition-colors cursor-pointer"
            >
              Data Deletion
            </button>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">
              Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
