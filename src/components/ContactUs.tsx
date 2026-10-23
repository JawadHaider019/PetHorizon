import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Clock,
  ExternalLink,
  Smartphone,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  Layers,
  Bug,
  Crown,
  HelpCircle,
  Star
} from 'lucide-react';

const BACKEND_EMAIL = 'pethorizon2026@gmail.com';
const DISPLAY_SUPPORT_EMAIL = 'support@pethorizon.com';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

interface TopicChip {
  id: string;
  label: string;
  icon: React.ElementType;
  subject: string;
}

const TOPIC_CHIPS: TopicChip[] = [
  {
    id: 'general',
    label: 'General Inquiry',
    icon: HelpCircle,
    subject: '[Pet Horizon Support] General Assistance Request'
  },
  {
    id: 'routine',
    label: 'Routines & Alerts',
    icon: Sparkles,
    subject: '[Pet Horizon Support] Pet Routine & Medication Alert Setup'
  },
  {
    id: 'family',
    label: 'Family Hub Sync',
    icon: Layers,
    subject: '[Pet Horizon Support] Family Hub & Collaboration Inquiry'
  },
  {
    id: 'account',
    label: 'Account & Deletion',
    icon: ShieldCheck,
    subject: '[Pet Horizon Support] Account Privacy & Data Request'
  },
  {
    id: 'bug',
    label: 'Bug Report',
    icon: Bug,
    subject: '[Pet Horizon Support] Android App Bug Report'
  },
  {
    id: 'billing',
    label: 'Premium & Billing',
    icon: Crown,
    subject: '[Pet Horizon Support] Premium Plan & Billing Inquiry'
  }
];

export default function ContactUs() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('general');
  const [copied, setCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeTopic = TOPIC_CHIPS.find((t) => t.id === selectedTopicId) || TOPIC_CHIPS[0];

  const supportMailtoUrl = `mailto:${BACKEND_EMAIL}?subject=${encodeURIComponent(
    activeTopic.subject
  )}&body=${encodeURIComponent(
    `Hello Pet Horizon Support Team,\n\nI need assistance regarding ${activeTopic.label}.\n\n[Please describe your inquiry, device model, or account email here]\n\nThank you!`
  )}`;

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(DISPLAY_SUPPORT_EMAIL);
      setCopied(true);
      setToastMessage('Official support email copied to clipboard!');
      setTimeout(() => {
        setCopied(false);
        setToastMessage(null);
      }, 2500);
    } catch {
      setToastMessage(`Email: ${DISPLAY_SUPPORT_EMAIL}`);
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[380px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Floating Copied Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700 pointer-events-none"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dedicated App Support & Helpdesk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect With Our Support Team
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
            Real human guidance for pet routines, account requests, and syncing. Tap your inquiry topic below to start a direct message to our support desk.
          </p>
        </motion.div>

        {/* Master Glassmorphic Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] border border-emerald-100 shadow-xl shadow-emerald-950/5 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Lighting Inside the Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Card Body: Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            
            {/* Left Side: Brand Mascot & Live Helpdesk Status Showcase (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-slate-50/60 border-b lg:border-b-0 lg:border-r border-emerald-100/80 flex flex-col justify-between">
              <div>
                {/* Live Agent Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>Helpdesk Active • Reply &lt; 24h</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2.5">
                  We Love Caring For Pets As Much As You Do
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  No automated conversational bots. You’ll reach our dedicated product team who maintain Pet Horizon every day.
                </p>

                {/* Branded Visual Mascot Card with Floating Badge */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-100/50 to-white border border-emerald-200/80 p-4 shadow-xs mb-6 group">
                  <div className="h-40 sm:h-44 w-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/3d-pets-transparent.png"
                      alt="Pet Horizon Mascot Companions"
                      className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating Mini App Trust Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-emerald-100 shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/app-icon.png" alt="Pet Horizon App Icon" className="w-6 h-6 rounded-lg object-contain shadow-2xs" />
                      <div>
                        <p className="text-[10px] font-black uppercase text-emerald-800 tracking-wider leading-none">Pet Horizon</p>
                        <p className="text-[11px] font-bold text-slate-700 leading-tight">Official Helpdesk</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-black text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Info */}
              <div className="pt-4 border-t border-emerald-100/70 flex items-start gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Operating Hours: </span>
                  <span>Monday – Friday: 9:00 AM – 6:00 PM (UTC). Inquiries sent during weekends are prioritized for urgent sync issues.</span>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Topic Selector & 1-Click Mail Hub (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      Direct Email Hub
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Choose Your Topic to Compose
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Select a category below to automatically tailor your message draft with the appropriate subject tag for our team:
                </p>

                {/* Topic Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {TOPIC_CHIPS.map((chip) => {
                    const Icon = chip.icon;
                    const isSelected = selectedTopicId === chip.id;
                    return (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => setSelectedTopicId(chip.id)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer active:scale-95 ${
                          isSelected
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm shadow-emerald-700/20'
                            : 'bg-slate-50 hover:bg-emerald-50/50 border-slate-200/80 text-slate-700 hover:border-emerald-200'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`} />
                        <span className="truncate">{chip.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Official Email Display Box with 1-Click Copy */}
                <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Destination Email Address
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900 break-all select-all tracking-tight">
                      {DISPLAY_SUPPORT_EMAIL}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-2xs hover:border-slate-300 cursor-pointer active:scale-95 shrink-0 self-start sm:self-center"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Primary Action Button */}
                <a
                  href={supportMailtoUrl}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-800/20 hover:shadow-xl hover:shadow-emerald-800/30 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Email in Your Mail App</span>
                </a>

                {/* Pre-formatted Subject Preview */}
                <div className="mt-3.5 px-3 py-2 rounded-xl bg-slate-100/70 text-[11px] text-slate-500 font-mono flex items-center justify-between gap-2 overflow-hidden">
                  <span className="text-slate-400 shrink-0 uppercase text-[10px] font-bold">Subject:</span>
                  <span className="text-slate-700 font-semibold truncate">{activeTopic.subject}</span>
                </div>
              </div>

              {/* Discreet SLA Guarantee */}
              <p className="text-[11px] text-slate-400 mt-4 text-center sm:text-left font-medium">
                We review all incoming inquiries directly. Typical reply turnaround is under 24 hours.
              </p>
            </div>

          </div>

          {/* Integrated Frosted Bottom Footer Inside Card */}
          <div className="border-t border-emerald-100/90 bg-emerald-50/50 px-6 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            
            {/* Quick Links: Play Store & FAQ */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-slate-600 font-semibold">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-emerald-700 transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Google Play Official Store</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <span className="text-emerald-300 hidden sm:inline">•</span>

              <a
                href="#faq"
                className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-900 font-bold transition-colors"
              >
                <span>Have Common Questions? View FAQs</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </a>
            </div>

            {/* Emergency Vet Health Notice Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100/80 border border-amber-200/90 text-amber-900 text-[11px] font-medium text-center">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>
                <strong>Health Notice:</strong> For urgent medical crises, contact a licensed 24/7 veterinarian immediately.
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
