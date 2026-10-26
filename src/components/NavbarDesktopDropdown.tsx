import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavView } from './Navbar';
import { PRODUCT_LINKS, LEGAL_LINKS } from './navData';

interface NavbarDesktopDropdownProps {
  type: 'product' | 'legal';
  label: string;
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onLinkClick: (e: React.MouseEvent, view: NavView, hash?: string) => void;
  isActiveView?: boolean;
}

export default function NavbarDesktopDropdown({
  type,
  label,
  isOpen,
  onEnter,
  onLeave,
  onLinkClick,
  isActiveView
}: NavbarDesktopDropdownProps) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
          isOpen || isActiveView ? 'text-emerald-700 bg-emerald-50/80 font-bold' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 grid gap-1 ${
              type === 'product' ? 'left-0 w-80' : 'right-0 w-84'
            }`}
          >
            {type === 'product'
              ? PRODUCT_LINKS.map((item) => (
                  <a
                    key={item.title}
                    href={item.hash}
                    onClick={(e) => onLinkClick(e, 'home', item.hash)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                  >
                    <div className={`p-2 rounded-xl ${item.color} shrink-0 mt-0.5`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))
              : LEGAL_LINKS.map((item) => (
                  <a
                    key={item.title}
                    href={`/${item.view}`}
                    onClick={(e) => onLinkClick(e, item.view)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                  >
                    <div className={`p-2 rounded-xl ${item.color} shrink-0 mt-0.5`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
