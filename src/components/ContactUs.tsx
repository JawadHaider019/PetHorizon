import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Check,
  Copy,
  Clock,
  ExternalLink,
  Code2,
  Sparkles,
  Smartphone,
  AlertTriangle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const BACKEND_EMAIL = 'pethorizon2026@gmail.com';
const DISPLAY_SUPPORT_EMAIL = 'support@pethorizon.com';
const DEVELOPER_PORTFOLIO_URL = 'https://aqibfolio.vercel.app/';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

export default function ContactUs() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DISPLAY_SUPPORT_EMAIL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  const supportMailtoUrl = `mailto:${BACKEND_EMAIL}?subject=${encodeURIComponent(
    '[Pet Horizon Support] Assistance Request'
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Support &amp; Developer Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect With Our Team Directly
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3.5 font-normal leading-relaxed">
            No endless contact forms or automated bots. Send an email straight to our support desk or connect with the creator behind Pet Horizon.
          </p>
        </motion.div>

        {/* 2 Clean Cards Side-by-Side: Support Card + Founder & Developer Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: Official Support Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 text-left group"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full border bg-emerald-100 text-emerald-800 border-emerald-200">
                  Official Support
                </span>
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2.5">
                General Help &amp; Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Questions regarding routine setup, medication schedule alerts, multi-caretaker sync, or subscription queries? Send an email directly to our dedicated helpdesk.
              </p>

              {/* Display Email Box */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 flex items-center justify-between gap-3">
                <div className="truncate">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Direct Support Inbox
                  </span>
                  <a
                    href={supportMailtoUrl}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors truncate block"
                    title="Click to write email"
                  >
                    {DISPLAY_SUPPORT_EMAIL}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy support email address"
                  className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 text-[11px] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-[11px] font-bold">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              {/* Response time */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Typically responds within 24 hours</span>
              </div>

              {/* Primary Direct Mail Button */}
              <a
                href={supportMailtoUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs shadow-emerald-700/10 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Email Support Directly</span>
              </a>

              {/* Quick Reference Link */}
              <a
                href="#faq"
                className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 hover:text-emerald-700 transition-colors pt-1"
              >
                <span>Read Frequently Asked Questions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Founder & Lead Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 text-left group"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full border bg-blue-100 text-blue-800 border-blue-200">
                  Founder &amp; Developer
                </span>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2.5">
                Crafted by Aqib Mansoor
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Sole founder and lead engineer behind Pet Horizon. Built to give pet parents worldwide a seamless routine tracker, medical journal, and family care hub.
              </p>

              {/* Interactive Developer Profile Box */}
              <a
                href={DEVELOPER_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to explore portfolio"
                className="group/dev bg-gradient-to-br from-slate-50 to-blue-50/40 hover:from-blue-50/70 hover:to-indigo-50/60 border border-slate-200/90 hover:border-blue-300 rounded-2xl p-4 mb-6 flex items-center justify-between gap-3 transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer block"
              >
                <div className="flex items-center gap-3.5 truncate">
                  {/* Avatar with initials & active pulse */}
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-900 to-blue-900 text-white font-black text-sm flex items-center justify-center shadow-xs">
                      AM
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>

                  <div className="truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 group-hover/dev:text-blue-700 transition-colors truncate">
                        Aqib Mansoor
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium block truncate">
                      aqibfolio.vercel.app
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200/80 text-blue-700 group-hover/dev:bg-blue-600 group-hover/dev:text-white group-hover/dev:border-blue-600 text-xs font-bold flex items-center gap-1 transition-colors shrink-0 shadow-2xs">
                  <span>Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              {/* Creator role note */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Full-Stack &amp; Mobile Engineer</span>
              </div>

              {/* Primary Portfolio Button */}
              <a
                href={DEVELOPER_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
              >
                <span>Visit Developer Portfolio</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Quick Reference Link */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 hover:text-blue-700 transition-colors pt-1"
              >
                <span>View Google Play Official Store Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Supplementary Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-left">
            
            {/* Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Support Coverage
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM (UTC). Weekend emails are reviewed for critical service inquiries.
                </p>
              </div>
            </div>

            {/* Google Play Store Direct Support */}
            <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Google Play Official App
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Rate us or request assistance directly through our verified Google Play listing.
                </p>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:underline mt-1"
                >
                  Visit Store Listing <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Emergency Vet Reminder */}
            <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Pet Health Emergencies
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Pet Horizon is a wellness companion app. In any acute medical emergency, please contact your nearest 24/7 veterinary clinic.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
