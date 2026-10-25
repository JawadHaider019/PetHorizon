import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, ArrowUpRight } from 'lucide-react';
import { NavView } from './Navbar';
import { PRODUCT_LINKS, LEGAL_LINKS } from './navData';

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onLinkClick: (e: React.MouseEvent, view: NavView, hash?: string) => void;
  playStoreUrl: string;
}

export default function NavbarMobileMenu({
  isOpen,
  onLinkClick,
  playStoreUrl
}: NavbarMobileMenuProps) {
  const [productOpen, setProductOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="w-full bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl px-5 py-5 lg:hidden overflow-y-auto max-h-[calc(100vh-100px)]"
        >
          <div className="flex flex-col space-y-2">
            {/* Product Features Accordion */}
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-800 cursor-pointer"
              >
                <span>Product Features</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
              </button>
              {productOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-100 bg-white">
                  {PRODUCT_LINKS.map((item) => (
                    <a
                      key={item.title}
                      href={item.hash}
                      onClick={(e) => onLinkClick(e, 'home', item.hash)}
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
              href="#pricing"
              onClick={(e) => onLinkClick(e, 'home', '#pricing')}
              className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-sm transition-colors"
            >
              Pricing Plans
            </a>

            <a
              href="/blog"
              onClick={(e) => onLinkClick(e, 'blog')}
              className="flex items-center justify-between font-bold text-slate-900 bg-emerald-50/70 text-emerald-800 px-3.5 py-2.5 rounded-xl text-sm border border-emerald-100"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Blog &amp; Pet Guides</span>
              </div>
              <span className="text-[10px] font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                Verified
              </span>
            </a>

            {/* Legal Accordion */}
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setLegalOpen(!legalOpen)}
                className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-800 cursor-pointer"
              >
                <span>Legal &amp; Policy Pages</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${legalOpen ? 'rotate-180' : ''}`} />
              </button>
              {legalOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-100 bg-white">
                  {LEGAL_LINKS.map((item) => (
                    <a
                      key={item.title}
                      href={`/${item.view}`}
                      onClick={(e) => onLinkClick(e, item.view)}
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
              onClick={(e) => onLinkClick(e, 'home', '#faq')}
              className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-sm transition-colors"
            >
              Frequently Asked Questions
            </a>

            <a
              href="#contact"
              onClick={(e) => onLinkClick(e, 'home', '#contact')}
              className="font-semibold text-slate-800 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/70 text-sm transition-colors"
            >
              Contact Support
            </a>

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
  );
}
