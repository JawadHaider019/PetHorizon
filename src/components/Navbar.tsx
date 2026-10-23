import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Smartphone } from 'lucide-react';
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center p-1 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/app-icon.png"
                  alt="Pet Horizon"
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    // Fallback to logo if app-icon fails
                    (e.currentTarget as HTMLImageElement).src = '/applogo.png';
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="flex items-center text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                  Pet<span className="text-emerald-600 font-extrabold ml-0.5">Horizon</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-emerald-700/80 uppercase mt-0.5">
                  Smart Pet Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-slate-600 hover:text-emerald-600 transition-colors duration-200 text-sm tracking-normal"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white px-4 py-2 rounded-xl font-semibold shadow-xs hover:shadow-md border border-slate-700/80 hover:border-slate-600 transition-all duration-200 text-xs sm:text-sm group"
              >
                <img src={googlePlayImg} alt="Google Play" className="w-4 h-4 object-contain" />
                <span>Google Play</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-slate-100 text-base"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold shadow-xs text-sm flex items-center justify-center gap-2.5 border border-slate-700/80"
                >
                  <img src={googlePlayImg} alt="Google Play" className="w-4 h-4 object-contain" />
                  <span>Get on Google Play</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
