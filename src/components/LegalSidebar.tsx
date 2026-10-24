import { ChevronRight, ShieldCheck, Mail, Lock } from 'lucide-react';
import { LegalDocument } from '../data/legalData';

interface LegalSidebarProps {
  currentDoc: LegalDocument;
  activeSectionId: string;
  onScrollToSection: (id: string) => void;
  readPercent: number;
}

export default function LegalSidebar({
  currentDoc,
  activeSectionId,
  onScrollToSection,
  readPercent
}: LegalSidebarProps) {
  return (
    <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
      {/* Table of Contents Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs">
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Document Sections
          </span>
          <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
            {readPercent}% Read
          </span>
        </div>

        <nav className="space-y-1">
          {currentDoc.sections.map((sec, idx) => {
            const isActive = activeSectionId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => onScrollToSection(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200/80 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="truncate">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                  isActive ? 'text-emerald-700 translate-x-0.5' : 'text-slate-400 group-hover:text-slate-600'
                }`} />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Security Guarantee Box */}
      <div className="bg-emerald-50/70 rounded-3xl border border-emerald-200/80 p-5 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
          <Lock className="w-4 h-4 text-emerald-700" />
          <span>Encrypted Cloud Storage</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          All pet health records, profiles, and scheduled events are encrypted in transit via TLS and stored securely.
        </p>
      </div>

      {/* Support Box */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-2xs space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
          Official Inquiries
        </span>
        <p className="text-xs text-slate-600 leading-relaxed">
          Questions regarding data handling? Reach our team directly:
        </p>
        <a
          href="mailto:pethorizon2026@gmail.com"
          className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
        >
          <Mail className="w-3.5 h-3.5" />
          pethorizon2026@gmail.com
        </a>
      </div>
    </aside>
  );
}
