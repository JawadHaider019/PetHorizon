import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Calendar,
  Users,
  Camera,
  Smartphone,
  ShieldCheck,
  FileText,
  Trash2,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type NavView = 'home' | 'privacy' | 'terms' | 'deletion' | 'blog';

interface NavbarProps {
  currentView?: NavView;
  onNavigate?: (view: NavView, hash?: string) => void;
}

export default function Navbar({ currentView = 'home', onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'product' | 'legal' | null>(null);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);

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
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
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
        if (hash) {
          window.location.hash = hash;
        } else {
          window.location.href = '/';
        }
      } else {
        const slug =
          view === 'blog'
            ? 'blog'
            : view === 'privacy'
            ? 'privacy-policy'
            : view === 'terms'
            ? 'terms-of-service'
            : 'data-deletion';
        window.location.href = `/${slug}`;
      }
    }
  };

  // Product Feature Sub-links
  const productLinks = [
    {
      title: 'Care Schedules',
      desc: 'Smart feeding routines, medicine alarms & vaccine alerts',
      icon: Calendar,
      hash: '#features',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Family Hub',
      desc: 'Collaborative pet caregiving & household sync',
      icon: Users,
      hash: '#family-hub',
      color: 'text-teal-600 bg-teal-50'
    },
    {
      title: 'Daily Journal',
      desc: 'Activity timelines, photos, health notes & milestones',
      icon: Camera,
      hash: '#journal',
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Interactive App Tour',
      desc: 'Explore 5 live interactive Android screens',
      icon: Smartphone,
      hash: '#tour',
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  // Legal Sub-links
  const legalLinks = [
    {
      title: 'Privacy Policy',
      desc: 'Official data protection & Google Play compliance',
      icon: ShieldCheck,
      view: 'privacy' as NavView,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Terms of Service',
      desc: 'Veterinary health disclaimers & subscription rules',
      icon: FileText,
      view: 'terms' as NavView,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Account & Data Deletion',
      desc: 'Step-by-step instructions for 30-day data purging',
      icon: Trash2,
      view: 'deletion' as NavView,
      color: 'text-rose-600 bg-rose-50'
    },
    {
      title: 'Helpdesk & Support',
      desc: 'Contact our developer team & FAQ assistance',
      icon: HelpCircle,
      hash: '#contact',
      color: 'text-slate-600 bg-slate-100'
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-3 group select-none cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-1 shadow-md shadow-emerald-700/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/app-icon.png"
                  alt="Pet Horizon"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/applogo.png';
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                  Pet<span className="text-emerald-600 font-extrabold ml-0.5">Horizon</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-emerald-700/90 uppercase mt-1">
                  Smart Pet Care Companion
                </span>
              </div>
            </a>

            {/* Desktop Navigation Grouped Items */}
            <nav className="hidden lg:flex items-center gap-1.5 relative">
              
              {/* 1. Product Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('product')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    activeDropdown === 'product'
                      ? 'text-emerald-700 bg-emerald-50/80'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Product</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'product' ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'product' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 grid gap-1"
                    >
                      {productLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.title}
                            href={item.hash}
                            onClick={(e) => handleLinkClick(e, 'home', item.hash)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                          >
                            <div className={`p-2 rounded-xl ${item.color} shrink-0 mt-0.5`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Pricing Link */}
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, 'home', '#pricing')}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors cursor-pointer select-none"
              >
                Pricing
              </a>

              {/* 3. Blog Hub Link (With VIP Guides Badge) */}
              <a
                href="/blog"
                onClick={(e) => handleLinkClick(e, 'blog')}
                className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer select-none flex items-center gap-1.5 ${
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

              {/* 4. Legal & Safety Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('legal')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    activeDropdown === 'legal' || ['privacy', 'terms', 'deletion'].includes(currentView)
                      ? 'text-emerald-700 bg-emerald-50/80 font-bold'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Legal &amp; Safety</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'legal' ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'legal' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full right-0 mt-1.5 w-84 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 grid gap-1"
                    >
                      {legalLinks.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = item.view && currentView === item.view;
                        return (
                          <a
                            key={item.title}
                            href={item.hash || (item.view ? `/${item.view}` : '#')}
                            onClick={(e) =>
                              item.view
                                ? handleLinkClick(e, item.view)
                                : handleLinkClick(e, 'home', item.hash)
                            }
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors group cursor-pointer ${
                              isCurrent ? 'bg-emerald-50/80' : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className={`p-2 rounded-xl ${item.color} shrink-0 mt-0.5`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                  {item.title}
                                </h4>
                                {item.view === 'privacy' && (
                                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                                    Official
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. FAQs Direct Link */}
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, 'home', '#faq')}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors cursor-pointer select-none"
              >
                FAQs
              </a>

            </nav>

            {/* Right Action: Download App Button */}
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

            {/* Mobile Menu Button */}
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

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[64px] sm:top-[72px] z-40 bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl px-5 py-5 lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="flex flex-col space-y-2">
              
              {/* Product Accordion on Mobile */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-800 cursor-pointer"
                >
                  <span>Product Features</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      mobileProductOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileProductOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-100 bg-white">
                    {productLinks.map((item) => (
                      <a
                        key={item.title}
                        href={item.hash}
                        onClick={(e) => handleLinkClick(e, 'home', item.hash)}
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <item.icon className="w-4 h-4 text-emerald-600" />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, 'home', '#pricing')}
                className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-sm transition-colors"
              >
                Pricing Plans
              </a>

              {/* Blog Link */}
              <a
                href="/blog"
                onClick={(e) => handleLinkClick(e, 'blog')}
                className="flex items-center justify-between font-bold text-slate-900 bg-emerald-50/70 text-emerald-800 px-3.5 py-2.5 rounded-xl text-sm border border-emerald-100"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Blog &amp; Pet Guides</span>
                </div>
                <span className="text-[10px] font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded-md">
                  New Hub
                </span>
              </a>

              {/* Legal & Safety Accordion on Mobile */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setMobileLegalOpen(!mobileLegalOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-800 cursor-pointer"
                >
                  <span>Legal &amp; Policy Pages</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      mobileLegalOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileLegalOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-100 bg-white">
                    {legalLinks.map((item) => (
                      <a
                        key={item.title}
                        href={item.hash || (item.view ? `/${item.view}` : '#')}
                        onClick={(e) =>
                          item.view
                            ? handleLinkClick(e, item.view)
                            : handleLinkClick(e, 'home', item.hash)
                        }
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <item.icon className="w-4 h-4 text-emerald-600" />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, 'home', '#faq')}
                className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-sm transition-colors"
              >
                Frequently Asked Questions
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'home', '#contact')}
                className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-sm transition-colors"
              >
                Contact Support
              </a>

              {/* Download Button */}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
                >
                  <span>Get Pet Horizon on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
