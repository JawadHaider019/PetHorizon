import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import NavbarDesktopDropdown from './NavbarDesktopDropdown';
import NavbarMobileMenu from './NavbarMobileMenu';
import AnnouncementBar from './global/AnnouncementBar';

import { PLAY_STORE_URL } from '../config/siteConfig';

export type NavView = 'home' | 'privacy' | 'terms' | 'deletion' | 'blog';

interface NavbarProps {
  currentView?: NavView;
  onNavigate?: (view: NavView, hash?: string) => void;
  onOpenQrModal?: () => void;
}

export default function Navbar({
  currentView = 'home',
  onNavigate,
  onOpenQrModal
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'product' | 'legal' | null>(null);

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playStoreUrl = PLAY_STORE_URL;

  const handleDropdownEnter = (menu: 'product' | 'legal') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleLinkClick = (e: React.MouseEvent, view: NavView, hash?: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(view, hash);
    } else {
      if (view === 'home') {
        window.location.href = hash ? `/${hash}` : '/';
        const slug =
          view === 'blog' ? 'blogs' : view === 'privacy' ? 'privacy-policy' : 'data-deletion';
        window.location.href = `/${slug}`;
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <header className="px-3 sm:px-6 pt-2 pb-1 pointer-events-none">
        <div
          className={`mx-auto max-w-5xl rounded-full transition-all duration-300 pointer-events-auto border px-3 sm:px-5 py-2 flex items-center justify-between ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-2xl border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.08)]'
              : 'bg-white/85 backdrop-blur-xl border-black/[0.05] shadow-[0_6px_24px_rgba(0,0,0,0.04)]'
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer select-none shrink-0"
          >
            <div className="w-8.5 h-8.5 rounded-full bg-[#EAF5EE] border border-[#125B46]/20 flex items-center justify-center p-1.5 shadow-2xs group-hover:scale-105 group-hover:bg-[#D2ECDE] transition-all duration-200">
              <img
                src="/ph-logo-mark.png"
                alt="Pet Horizon Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/app-icon.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-display group-hover:text-[#125B46] transition-colors leading-none">
                Pet<span className="text-[#125B46] font-black ml-0.5">Horizon</span>
              </span>
              <span className="text-[9px] text-[#D97706] font-bold uppercase tracking-widest mt-0.5">
                Family Pet Hub
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 border border-slate-200/60 px-2 py-1 rounded-full">
            <NavbarDesktopDropdown
              type="product"
              label="Product"
              isOpen={activeDropdown === 'product'}
              onEnter={() => handleDropdownEnter('product')}
              onLeave={handleDropdownLeave}
              onLinkClick={handleLinkClick}
            />

            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, 'home', '#pricing')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#125B46] hover:bg-white transition-colors cursor-pointer select-none"
            >
              Pricing
            </a>

            <a
              href="/blog"
              onClick={(e) => handleLinkClick(e, 'blog')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer select-none flex items-center gap-1.5 ${
                currentView === 'blog'
                  ? 'text-[#125B46] bg-white font-bold shadow-2xs border border-[#125B46]/20'
                  : 'text-slate-700 hover:text-[#125B46] hover:bg-white'
              }`}
            >
              <span>Blog &amp; Guides</span>
              <span className="text-[9px] font-extrabold uppercase tracking-wider bg-[#125B46] text-white px-1.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap shrink-0">
                New
              </span>
            </a>

            <NavbarDesktopDropdown
              type="legal"
              label="Legal &amp; Safety"
              isOpen={activeDropdown === 'legal'}
              onEnter={() => handleDropdownEnter('legal')}
              onLeave={handleDropdownLeave}
              onLinkClick={handleLinkClick}
              isActiveView={['privacy', 'terms', 'deletion'].includes(currentView)}
            />

            <a
              href="#faq"
              onClick={(e) => handleLinkClick(e, 'home', '#faq')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#125B46] hover:bg-white transition-colors cursor-pointer select-none"
            >
              FAQs
            </a>
          </nav>

          {/* Right Action: Dana-style Pill CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {onOpenQrModal && (
              <button
                type="button"
                onClick={onOpenQrModal}
                className="p-2 rounded-full border border-slate-200/90 text-slate-700 hover:text-[#125B46] hover:border-[#125B46]/40 hover:bg-[#EAF5EE] transition-all cursor-pointer shadow-2xs"
                title="Scan QR Code with your phone camera"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="5" height="5" x="3" y="3" rx="1" />
                  <rect width="5" height="5" x="16" y="3" rx="1" />
                  <rect width="5" height="5" x="3" y="16" rx="1" />
                  <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                  <path d="M21 21v.01" />
                  <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                  <path d="M3 12h.01" />
                  <path d="M12 3h.01" />
                  <path d="M12 16v.01" />
                  <path d="M16 12h1" />
                  <path d="M21 12v.01" />
                  <path d="M12 21v-1" />
                </svg>
              </button>
            )}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111827] hover:bg-[#125B46] text-white pl-4 pr-1.5 py-1.5 text-xs font-bold transition-all shadow-xs hover:shadow-md"
            >
              <span>Get Pet Horizon</span>
              <span className="w-6 h-6 rounded-full bg-[#125B46] group-hover:bg-[#F8C152] group-hover:text-[#111827] text-white flex items-center justify-center text-xs font-extrabold transition-all">
                →
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-[#125B46] hover:bg-[#EAF5EE] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <NavbarMobileMenu
        isOpen={isOpen}
        onLinkClick={handleLinkClick}
        playStoreUrl={playStoreUrl}
      />
    </div>
  );
}
