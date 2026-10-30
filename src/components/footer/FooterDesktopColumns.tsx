import { ShieldCheck } from 'lucide-react';
import { SUPPORT_EMAIL } from '../../config/siteConfig';

interface FooterDesktopColumnsProps {
  onLegalClick: (e: React.MouseEvent, doc: 'privacy' | 'terms' | 'deletion') => void;
  onBlogClick: (e: React.MouseEvent) => void;
  onChangelogClick?: (e: React.MouseEvent) => void;
  onToolClick?: (e: React.MouseEvent) => void;
}

export default function FooterDesktopColumns({
  onLegalClick,
  onBlogClick,
  onChangelogClick,
  onToolClick
}: FooterDesktopColumnsProps) {
  return (
    <div className="grid grid-cols-3 gap-6 sm:gap-8 text-left">
      {/* Col 1: Product Features */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
          Product Features
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm">
          <li>
            <a href="#how-it-works" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              How Pet Horizon Works
            </a>
          </li>
          <li>
            <a href="#features" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Care Schedules &amp; Reminders
            </a>
          </li>
          <li>
            <a href="#family-hub" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Shared Family Care Hub
            </a>
          </li>
          <li>
            <a href="#journal" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Daily Photo Journal &amp; Milestones
            </a>
          </li>
          <li>
            <button
              onClick={onToolClick}
              className="text-slate-600 hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
            >
              <span>Pet Calorie Calculator</span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-[#166534] border border-emerald-200/70 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                Free Tool
              </span>
            </button>
          </li>
          <li>
            <a href="#tour" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Interactive App Tour
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Membership &amp; Family Plans
            </a>
          </li>
        </ul>
      </div>

      {/* Col 2: Knowledge & Support */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
          Knowledge &amp; Support
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm">
          <li>
            <button
              onClick={onBlogClick}
              className="text-slate-600 hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
            >
              <span>Veterinary Care Guides</span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-[#166534] border border-emerald-200/70 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                New
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={onChangelogClick}
              className="text-slate-600 hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
            >
              <span>App Changelog &amp; Notes</span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                v1.0.10
              </span>
            </button>
          </li>
          <li>
            <a href="#faq" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Frequently Asked Questions
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-600 hover:text-[#166534] transition-colors font-medium block">
              Contact Support Desk
            </a>
          </li>
          <li>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-[#166534] hover:underline transition-colors font-semibold text-xs block truncate mt-1"
            >
              {SUPPORT_EMAIL}
            </a>
          </li>
        </ul>
      </div>

      {/* Col 3: Legal & Trust */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#166534]" />
          <span>Trust &amp; Governance</span>
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm">
          <li>
            <button
              onClick={(e) => onLegalClick(e, 'privacy')}
              className="text-slate-600 hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
              <span>Privacy Policy</span>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => onLegalClick(e, 'terms')}
              className="text-slate-600 hover:text-[#166534] transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
              <span>Terms of Service</span>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => onLegalClick(e, 'deletion')}
              className="text-slate-600 hover:text-rose-600 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
              <span>Data &amp; Account Deletion</span>
            </button>
          </li>
          <li className="text-xs text-slate-500 pt-1 font-normal leading-normal">
            Google Play Policy Compliant
          </li>
          <li className="text-xs text-slate-500 font-normal leading-normal">
            TLS 1.3 Health Record Encryption
          </li>
        </ul>
      </div>
    </div>
  );
}
