import { useState } from 'react';
import { ChevronRight, ShieldCheck, Mail, Printer, Check, Copy } from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('pethorizon2026@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-5 print:hidden text-left">
      {/* Table of Contents Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            Contents Navigation
          </span>
          <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            {readPercent}% Read
          </span>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
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
                  <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                    isActive ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'
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

      {/* Quick Actions (Print & Official Record) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrint}
          className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-slate-500" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Security & Verification Guarantee Box */}
      <div className="bg-[#F8FAF9] rounded-2xl border border-slate-200/80 p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Google Play Policy Compliant</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
          Complies with Google Play Data Safety policies, strict encryption standards, and user-initiated data deletion mandates.
        </p>
      </div>

      {/* Official Inquiries Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-2xs space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
          Data Protection Officer Contact
        </span>
        <div className="flex items-center justify-between gap-2 pt-1">
          <a
            href="mailto:pethorizon2026@gmail.com"
            className="text-xs font-mono font-bold text-slate-800 hover:text-emerald-700 truncate flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">pethorizon2026@gmail.com</span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Copy email"
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer shrink-0"
          >
            {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </aside>
  );
}
