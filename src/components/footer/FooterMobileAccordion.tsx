import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SUPPORT_EMAIL, INSTAGRAM_URL } from '../../config/siteConfig';

interface FooterMobileAccordionProps {
  onLegalClick: (e: React.MouseEvent, doc: 'privacy' | 'terms' | 'deletion') => void;
  onBlogClick: (e: React.MouseEvent) => void;
  onChangelogClick?: (e: React.MouseEvent) => void;
  onToolClick?: (e: React.MouseEvent) => void;
  onAgeToolClick?: (e: React.MouseEvent) => void;
}

export default function FooterMobileAccordion({
  onLegalClick,
  onBlogClick,
  onChangelogClick,
  onToolClick,
  onAgeToolClick
}: FooterMobileAccordionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <div className="lg:hidden divide-y divide-emerald-950/[0.08] border-t border-b border-emerald-950/[0.08] text-left mt-6 mb-4">
      {/* Product Features */}
      <div>
        <button
          onClick={() => toggleAccordion('product')}
          className="w-full py-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
        >
          <span>Product Features</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
              openAccordion === 'product' ? 'rotate-180 text-[#166534]' : ''
            }`}
          />
        </button>
        {openAccordion === 'product' && (
          <ul className="pb-3 space-y-2 text-xs text-slate-600 pl-1">
            <li><a href="#how-it-works" className="hover:text-[#166534] transition-colors font-medium block">How Pet Horizon Works</a></li>
            <li><a href="#features" className="hover:text-[#166534] transition-colors font-medium block">Care Schedules &amp; Reminders</a></li>
            <li><a href="#family-hub" className="hover:text-[#166534] transition-colors font-medium block">Shared Family Care Hub</a></li>
            <li><a href="#journal" className="hover:text-[#166534] transition-colors font-medium block">Daily Photo Journal &amp; Milestones</a></li>
            <li>
              <a
                href="/tools/pet-age-calculator"
                onClick={onAgeToolClick}
                className="hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
              >
                <span>Pet Age Calculator</span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-[#166534] border border-emerald-200/70 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                  New Tool
                </span>
              </a>
            </li>
            <li>
              <a
                href="/tools/pet-calorie-calculator"
                onClick={onToolClick}
                className="hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
              >
                <span>Pet Calorie Calculator</span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-[#166534] border border-emerald-200/70 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                  Free Tool
                </span>
              </a>
            </li>
            <li><a href="#tour" className="hover:text-[#166534] transition-colors font-medium block">Interactive App Tour</a></li>
            <li><a href="#pricing" className="hover:text-[#166534] transition-colors font-medium block">Membership &amp; Family Plans</a></li>
          </ul>
        )}
      </div>

      {/* Knowledge & Support */}
      <div>
        <button
          onClick={() => toggleAccordion('knowledge')}
          className="w-full py-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
        >
          <span>Knowledge &amp; Support</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              openAccordion === 'knowledge' ? 'rotate-180 text-[#166534]' : ''
            }`}
          />
        </button>
        {openAccordion === 'knowledge' && (
          <ul className="pb-3 space-y-2 text-xs text-slate-600 pl-1">
            <li>
              <a
                href="/blogs"
                onClick={onBlogClick}
                className="hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
              >
                <span>Veterinary Care Guides</span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-[#166534] border border-emerald-200/70 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                  New
                </span>
              </a>
            </li>
            <li>
              <a
                href="/changelog"
                onClick={onChangelogClick}
                className="hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
              >
                <span>App Changelog &amp; Notes</span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  v1.0.10
                </span>
              </a>
            </li>
            <li><a href="#faq" className="hover:text-[#166534] transition-colors font-medium block">Frequently Asked Questions</a></li>
            <li><a href="#contact" className="hover:text-[#166534] transition-colors font-medium block">Contact Support Desk</a></li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="me noopener noreferrer"
                className="hover:text-[#166534] transition-colors font-medium block"
              >
                Instagram (@pethorizon.app)
              </a>
            </li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#166534] font-semibold text-xs block truncate mt-1">
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
          className="w-full py-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-900 cursor-pointer"
        >
          <span>Trust &amp; Privacy Protocol</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              openAccordion === 'legal' ? 'rotate-180 text-[#166534]' : ''
            }`}
          />
        </button>
        {openAccordion === 'legal' && (
          <ul className="pb-3 space-y-2 text-xs text-slate-600 pl-1">
            <li>
              <a
                href="/privacy-policy"
                onClick={(e) => onLegalClick(e, 'privacy')}
                className="hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                onClick={(e) => onLegalClick(e, 'terms')}
                className="hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                <span>Terms of Service</span>
              </a>
            </li>
            <li>
              <a
                href="/data-deletion"
                onClick={(e) => onLegalClick(e, 'deletion')}
                className="hover:text-rose-600 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>Data &amp; Account Deletion</span>
              </a>
            </li>
            <li className="text-xs text-slate-500 pt-1 font-normal">Google Play Policy Compliant</li>
            <li className="text-xs text-slate-500 font-normal">TLS 1.3 Health Encryption</li>
          </ul>
        )}
      </div>
    </div>
  );
}
