import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Eye,
  Camera,
  HardDrive,
  Trash2,
  Mail,
  AlertCircle
} from 'lucide-react';
import { LegalDocument } from '../data/legalData';

interface LegalSectionsListProps {
  currentDoc: LegalDocument;
  activeSectionId: string;
}

export default function LegalSectionsList({
  currentDoc,
  activeSectionId
}: LegalSectionsListProps) {
  return (
    <div className="space-y-8">
      {currentDoc.sections.map((section, idx) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={`bg-white rounded-3xl border p-6 sm:p-9 shadow-xs scroll-mt-36 transition-all ${
            activeSectionId === section.id
              ? 'border-emerald-300 ring-2 ring-emerald-500/10'
              : 'border-slate-200/80 hover:border-slate-300'
          }`}
        >
          {/* Section Header */}
          <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
            <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-700 font-black flex items-center justify-center text-sm shrink-0 border border-emerald-100 shadow-2xs">
              {idx + 1}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {section.title}
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="mt-5 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {section.content.map((p, pIdx) => (
              <p key={pIdx} className="font-normal">{p}</p>
            ))}
          </div>

          {/* Subsections */}
          {section.subsections && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.subsections.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-5 border border-slate-200/70 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      {sub.subtitle}
                    </h4>
                    {sub.paragraph && (
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                        {sub.paragraph}
                      </p>
                    )}
                    {sub.items && (
                      <ul className="space-y-2 mt-2">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Device Permissions Visual */}
          {section.id === 'device-permissions' && (
            <div className="mt-7 pt-5 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-600" />
                Permissions Transparency Map
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <Camera className="w-4 h-4 text-emerald-700 mb-2" />
                  <h5 className="font-bold text-xs text-slate-900">Camera Access</h5>
                  <p className="text-[11px] text-slate-600 mt-1">Used exclusively when you snap pet photos.</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                  <HardDrive className="w-4 h-4 text-teal-700 mb-2" />
                  <h5 className="font-bold text-xs text-slate-900">Gallery / Storage</h5>
                  <p className="text-[11px] text-slate-600 mt-1">Accesses only the photo you choose to upload.</p>
                </div>
              </div>
            </div>
          )}

          {/* In-App Deletion Highlight */}
          {section.id === 'in-app-steps' && (
            <div className="mt-6 p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-rose-600 shrink-0" />
              <p className="text-xs text-rose-950 font-medium">
                In-app deletion requires zero emails or phone calls and takes under 30 seconds.
              </p>
            </div>
          )}
        </motion.section>
      ))}
    </div>
  );
}
