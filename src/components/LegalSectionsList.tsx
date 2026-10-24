import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Eye,
  Camera,
  HardDrive,
  Trash2,
  Mail,
  AlertTriangle,
  Copy,
  Check,
  Bell,
  ArrowRight
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
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const emailTemplate = `Subject: Data Deletion Request - Pet Horizon
To: pethorizon2026@gmail.com

Dear Pet Horizon Support Team,

Please permanently delete my Pet Horizon user account and all associated cloud data in accordance with Google Play User Data policies.

Registered Email / Google Account: [INSERT YOUR REGISTERED EMAIL]
Registered Pet Name(s): [OPTIONAL: E.G. BELLA, LUNA]

I understand this action is permanent and cannot be undone.

Thank you.`;

  const handleCopyEmailTemplate = () => {
    navigator.clipboard?.writeText(emailTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <article className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-12 text-left">
      {currentDoc.sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 transition-all ${
            idx > 0 ? 'border-t border-slate-100 pt-10 sm:pt-12' : ''
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3.5 mb-5">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center border border-emerald-200/80 shrink-0">
              {idx + 1}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              {section.title.replace(/^\d+\.\s*/, '')}
            </h2>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-3.5 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
            {section.content.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>

          {/* Specialized View: In-App Deletion Step-by-Step Flow */}
          {section.id === 'in-app-steps' && (
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  <strong>Warning:</strong> Account deletion is immediate and permanent. All feeding routines, medical schedules, vaccine reminders, and photo memories linked to your household will be unrecoverable.
                </p>
              </div>

              {/* 6 Step Visual Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { step: '1', title: 'Open Mobile App', desc: 'Launch Pet Horizon on your Android device.' },
                  { step: '2', title: 'Go to Settings', desc: 'Tap the Profile / Settings tab in bottom navigation.' },
                  { step: '3', title: 'Account Settings', desc: 'Scroll down and tap Account Settings.' },
                  { step: '4', title: 'Select Delete', desc: 'Tap the red "Delete Account" button.' },
                  { step: '5', title: 'Confirm Deletion', desc: 'Review the irreversible deletion prompt.' },
                  { step: '6', title: 'Immediate Purge', desc: 'You are signed out and data is queued for purge.' }
                ].map((s) => (
                  <div key={s.step} className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{s.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specialized View: Email Deletion Request Template */}
          {section.id === 'email-request' && (
            <div className="mt-6 p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <span>Web Deletion Email Template</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmailTemplate}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-colors cursor-pointer shadow-2xs"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Template Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email Template</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-white border border-slate-200/80 font-mono text-[11px] text-slate-700 whitespace-pre-wrap leading-relaxed overflow-x-auto shadow-inner">
                {emailTemplate}
              </pre>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Direct Mailbox: <strong>pethorizon2026@gmail.com</strong></span>
                <a
                  href="mailto:pethorizon2026@gmail.com?subject=Data%20Deletion%20Request%20-%20Pet%20Horizon"
                  className="text-emerald-700 hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Open in Mail App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Standard Subsections Rendering */}
          {section.subsections && section.id !== 'in-app-steps' && (
            <div className="mt-6 space-y-4">
              {section.subsections.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#F8FAF9] rounded-2xl p-5 border border-slate-200/80 space-y-3"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{sub.subtitle}</span>
                  </h3>

                  {sub.paragraph && (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sub.paragraph}
                    </p>
                  )}

                  {sub.items && (
                    <ul className="space-y-2 pt-1">
                      {sub.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Specialized View: Device Permissions Transparency Grid */}
          {section.id === 'device-permissions' && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-700" />
                <span>Runtime Permissions Transparency Table</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2.5">
                    <Camera className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Camera Access</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Used only when capturing daily pet photos or scanning family QR invites.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2.5">
                    <HardDrive className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Storage / Media</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Used strictly to select existing pet profile pictures from your gallery.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2.5">
                    <Bell className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Push Notifications</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Dispatches medication alerts, feeding reminders, and sitter sync updates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </article>
  );
}
