import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Clock,
  ExternalLink,
  Smartphone,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

const BACKEND_EMAIL = 'pethorizon2026@gmail.com';
const DISPLAY_SUPPORT_EMAIL = 'support@pethorizon.com';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

export default function ContactUs() {
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
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dedicated App Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect With Our Support Team
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3.5 font-normal leading-relaxed">
            No endless contact forms or automated bots. Tap below to send an email straight to our support desk and we’ll get back to you promptly.
          </p>
        </motion.div>

        {/* Sleek Centered Support Card (No Copy Button, Direct Click-to-Email) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 text-left mb-12"
        >
          {/* Card Header & Badge */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border bg-emerald-100 text-emerald-800 border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Official Customer Helpdesk
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
            Direct Email Inquiries
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
            Have questions about pet routine setup, medication alerts, family hub sync, or data requests? Click the button below to compose a direct message to our support inbox.
          </p>

          {/* Clean Display Box Linking Directly to Mail */}
          <a
            href={supportMailtoUrl}
            className="group block bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-4 sm:p-5 mb-8 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Official Support Email
                </span>
                <span className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {DISPLAY_SUPPORT_EMAIL}
                </span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 group-hover:border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-2xs">
                <span>Send Mail</span>
                <Send className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Primary Action Button */}
          <a
            href={supportMailtoUrl}
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-700/15 hover:shadow-lg hover:shadow-emerald-700/25 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Email Support Directly</span>
          </a>

          {/* Secondary Info & FAQ Reference */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Typical response time: within 24 hours</span>
            </div>
            <a
              href="#faq"
              className="inline-flex items-center gap-1 font-bold text-slate-600 hover:text-emerald-700 transition-colors"
            >
              <span>Have quick questions? Read FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Supplementary Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                  Monday – Friday: 9:00 AM – 6:00 PM (UTC). Weekend inquiries are checked for critical service issues.
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
                  Review or request assistance directly via our verified store listing.
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
                  Pet Horizon is an organizational wellness app. For acute medical emergencies, contact a licensed 24/7 veterinarian immediately.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
