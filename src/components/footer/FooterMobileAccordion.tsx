import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SUPPORT_EMAIL } from '../../config/siteConfig';

interface FooterMobileAccordionProps {
  onLegalClick: (e: React.MouseEvent, doc: 'privacy' | 'deletion') => void;
  onBlogClick: (e: React.MouseEvent) => void;
}

export default function FooterMobileAccordion({ onLegalClick, onBlogClick }: FooterMobileAccordionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <div className="md:hidden divide-y divide-slate-200/70 border-b border-slate-200/80 text-left">
      {/* Product Features */}
      <div>
        <button
          onClick={() => toggleAccordion('product')}
          className="w-full py-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
        >
          <span>Product Features</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              openAccordion === 'product' ? 'rotate-180 text-emerald-700' : ''
            }`}
          />
        </button>
        {openAccordion === 'product' && (
          <ul className="pb-4 space-y-2.5 text-xs text-slate-600 pl-1">
            <li><a href="#how-it-works" className="hover:text-emerald-700 transition-colors font-medium block">How Pet Horizon Works</a></li>
            <li><a href="#features" className="hover:text-emerald-700 transition-colors font-medium block">Care Schedules &amp; Reminders</a></li>
            <li><a href="#family-hub" className="hover:text-emerald-700 transition-colors font-medium block">Shared Family Care Hub</a></li>
            <li><a href="#journal" className="hover:text-emerald-700 transition-colors font-medium block">Daily Photo Journal &amp; Milestones</a></li>
            <li><a href="#tour" className="hover:text-emerald-700 transition-colors font-medium block">Interactive App Tour</a></li>
            <li><a href="#pricing" className="hover:text-emerald-700 transition-colors font-medium block">Membership &amp; Family Plans</a></li>
          </ul>
        )}
      </div>

      {/* Knowledge & Support */}
      <div>
        <button
          onClick={() => toggleAccordion('knowledge')}
          className="w-full py-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
        >
          <span>Knowledge &amp; Support</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              openAccordion === 'knowledge' ? 'rotate-180 text-emerald-700' : ''
            }`}
          />
        </button>
        {openAccordion === 'knowledge' && (
          <ul className="pb-4 space-y-2.5 text-xs text-slate-600 pl-1">
            <li>
              <button
                onClick={onBlogClick}
                className="hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
              >
                <span>Veterinary Care Guides</span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-1.5 py-0.2 rounded-full whitespace-nowrap">
                  New
                </span>
              </button>
            </li>
            <li><a href="#faq" className="hover:text-emerald-700 transition-colors font-medium block">Frequently Asked Questions</a></li>
            <li><a href="#contact" className="hover:text-emerald-700 transition-colors font-medium block">Contact Support Desk</a></li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-emerald-700 font-semibold text-xs block truncate mt-1">
                {SUPPORT_EMAIL}
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Legal & Trust */}
      <div>
        <button
          onClick={() => toggleAccordion('legal')}
          className="w-full py-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
        >
          <span>Trust &amp; Privacy Protocol</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              openAccordion === 'legal' ? 'rotate-180 text-emerald-700' : ''
            }`}
          />
        </button>
        {openAccordion === 'legal' && (
          <ul className="pb-4 space-y-2.5 text-xs text-slate-600 pl-1">
            <li>
              <button
                onClick={(e) => onLegalClick(e, 'privacy')}
                className="hover:text-emerald-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Privacy Policy</span>
              </button>
            </li>
            <li>
              <button
                onClick={(e) => onLegalClick(e, 'deletion')}
                className="hover:text-rose-700 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>Data &amp; Account Deletion</span>
              </button>
            </li>
            <li className="text-xs text-slate-400 pt-1 font-normal">Google Play Policy Compliant</li>
            <li className="text-xs text-slate-400 font-normal">TLS 1.3 Health Encryption</li>
          </ul>
        )}
      </div>
    </div>
  );
}
