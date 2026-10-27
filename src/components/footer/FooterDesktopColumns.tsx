import { ShieldCheck } from 'lucide-react';
import { SUPPORT_EMAIL } from '../../config/siteConfig';

interface FooterDesktopColumnsProps {
  onLegalClick: (e: React.MouseEvent, doc: 'privacy' | 'deletion') => void;
  onBlogClick: (e: React.MouseEvent) => void;
  onChangelogClick?: (e: React.MouseEvent) => void;
}

export default function FooterDesktopColumns({
  onLegalClick,
  onBlogClick,
  onChangelogClick
}: FooterDesktopColumnsProps) {
  return (
    <div className="hidden md:grid grid-cols-3 gap-8 py-10 sm:py-12 border-b border-white/[0.08] text-left">
      {/* Col 1: Product Features */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
          Product Features
        </h4>
        <ul className="space-y-2.5 text-sm">
          <li>
            <a href="#how-it-works" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              How Pet Horizon Works
            </a>
          </li>
          <li>
            <a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Care Schedules &amp; Reminders
            </a>
          </li>
          <li>
            <a href="#family-hub" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Shared Family Care Hub
            </a>
          </li>
          <li>
            <a href="#journal" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Daily Photo Journal &amp; Milestones
            </a>
          </li>
          <li>
            <a href="#tour" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Interactive App Tour
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Membership &amp; Family Plans
            </a>
          </li>
        </ul>
      </div>

      {/* Col 2: Knowledge & Support */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
          Knowledge &amp; Support
        </h4>
        <ul className="space-y-2.5 text-sm">
          <li>
            <button
              onClick={onBlogClick}
              className="text-slate-400 hover:text-emerald-400 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
            >
              <span>Veterinary Care Guides</span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-full whitespace-nowrap">
                New
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={onChangelogClick}
              className="text-slate-400 hover:text-emerald-400 transition-colors font-medium text-left cursor-pointer flex items-center gap-1.5"
            >
              <span>App Changelog &amp; Notes</span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-white/[0.08] text-slate-300 border border-white/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                v1.0.10
              </span>
            </button>
          </li>
          <li>
            <a href="#faq" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Frequently Asked Questions
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium block">
              Contact Support Desk
            </a>
          </li>
          <li>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-xs block truncate mt-1"
            >
              {SUPPORT_EMAIL}
            </a>
          </li>
        </ul>
      </div>

      {/* Col 3: Legal & Trust */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Trust &amp; Governance</span>
        </h4>
        <ul className="space-y-2.5 text-sm">
          <li>
            <button
              onClick={(e) => onLegalClick(e, 'privacy')}
              className="text-slate-400 hover:text-emerald-400 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Privacy Policy</span>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => onLegalClick(e, 'deletion')}
              className="text-slate-400 hover:text-rose-400 transition-colors font-medium text-left cursor-pointer flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
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
