import { useState } from 'react';
import { Mail, Clock, Smartphone, ExternalLink, Check, Copy } from 'lucide-react';
import { DISPLAY_SUPPORT_EMAIL, PLAY_STORE_URL } from './contactData';

export default function ContactSidebar() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DISPLAY_SUPPORT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#FAFBFB] flex flex-col justify-between space-y-6">
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
          Direct Channels
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
          Official Support Desk
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
          Whether you’re setting up medication reminders, syncing family care, or experiencing sync delays, our engineers are here.
        </p>

        {/* Email Box */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Developer Email
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <a
            href={`mailto:${DISPLAY_SUPPORT_EMAIL}`}
            className="text-sm font-bold text-emerald-700 hover:underline block break-all"
          >
            {DISPLAY_SUPPORT_EMAIL}
          </a>
        </div>

        {/* Response SLA Box */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Response Turnaround Time</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Standard inquiries are answered within <strong>24 business hours</strong>. Critical bugs and data safety requests receive priority triage within <strong>6 hours</strong>.
          </p>
        </div>

        {/* Google Play Store Card */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>Android App Support</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Ensure you are running the latest version from Google Play for automatic cloud syncing and bug fixes.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1 mt-1"
          >
            <span>Open Google Play Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200/80 text-[11px] text-slate-500">
        Pet Horizon Support Desk &bull; Mon–Fri 9:00 AM – 6:00 PM EST
      </div>
    </div>
  );
}
