import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import NavbarDesktopDropdown from './NavbarDesktopDropdown';
import NavbarMobileMenu from './NavbarMobileMenu';

export type NavView = 'home' | 'privacy' | 'terms' | 'deletion' | 'blog';

interface NavbarProps {
  currentView?: NavView;
  onNavigate?: (view: NavView, hash?: string) => void;
}

export default function Navbar({ currentView = 'home', onNavigate }: NavbarProps) {
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

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

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
      } else {
        const slug =
          view === 'blog' ? 'blog' : view === 'privacy' ? 'privacy-policy' : 'data-deletion';
        window.location.href = `/${slug}`;
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5'
            : 'bg-white/70 backdrop-blur-xs py-4 border-b border-slate-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2.5 group cursor-pointer select-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/app-icon.png"
                  alt="Pet Horizon Logo"
                  className="w-full h-full object-cover rounded-[14px]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/applogo.png';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Pet Horizon
                </span>
                <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-widest -mt-1">
                  Family Pet Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-slate-200/70 p-1.5 rounded-2xl shadow-xs">
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
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors cursor-pointer select-none"
              >
                Pricing
              </a>

              <a
                href="/blog"
                onClick={(e) => handleLinkClick(e, 'blog')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer select-none flex items-center gap-1.5 ${
                  currentView === 'blog'
                    ? 'text-emerald-700 bg-emerald-50/90 font-bold border border-emerald-200/60'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                <span>Blog &amp; Guides</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-full shadow-2xs">
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
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors cursor-pointer select-none"
              >
                FAQs
              </a>
            </nav>

            {/* Right Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-[13px] font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all duration-150 group"
              >
                <span>Download App</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <NavbarMobileMenu
        isOpen={isOpen}
        onLinkClick={handleLinkClick}
        playStoreUrl={playStoreUrl}
      />
    </>
  );
}
