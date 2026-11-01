import { ChevronDown } from 'lucide-react';
import { NavView } from './Navbar';
import { PRODUCT_LINKS, LEGAL_LINKS, TOOL_LINKS } from './navData';

interface NavbarDesktopDropdownProps {
  type: 'product' | 'legal' | 'tools';
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
        type="button"
        aria-expanded={isOpen}
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
          isOpen || isActiveView ? 'text-emerald-700 bg-emerald-50/80 font-bold' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-500'
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 grid gap-1 animate-in fade-in zoom-in-95 duration-150 ${
            type === 'product' ? 'left-0 w-80' : type === 'tools' ? 'left-0 w-84' : 'right-0 w-84'
          }`}
        >
            {type === 'product' ? (
              PRODUCT_LINKS.map((item) => (
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
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </a>
              ))
            ) : type === 'tools' ? (
              TOOL_LINKS.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = item.path;
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                >
                  <div className={`p-2 rounded-xl ${item.color} shrink-0 mt-0.5`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="block text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-1.5 py-0.2 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </a>
              ))
            ) : (
              LEGAL_LINKS.map((item) => (
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
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </a>
              ))
            )}
        </div>
      )}
    </div>
  );
}
