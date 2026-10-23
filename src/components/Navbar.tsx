import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import googlePlayImg from '../assets/google-play.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Family Hub', href: '#family-hub' },
    { name: 'Journal', href: '#journal' },
    { name: 'App Tour', href: '#tour' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3 sm:py-3.5'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/50 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-3 group select-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-1 shadow-md shadow-emerald-700/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
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
                  Smart Pet Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[14px] font-semibold text-slate-700 hover:text-emerald-700 px-3.5 py-2 rounded-xl hover:bg-emerald-50/70 transition-all duration-150 tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Download App */}
            <div className="hidden sm:flex items-center">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[13.5px] font-bold px-4.5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-150 active:scale-95 group"
              >
                <span>Download App</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[65px] sm:top-[75px] z-40 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl px-6 py-5 lg:hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-base transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <span>Download on Google Play</span>
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
