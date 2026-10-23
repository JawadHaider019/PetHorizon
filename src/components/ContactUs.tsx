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
  MessageCircle,
  Copy,
  Check,
  HelpCircle,
  Sparkles,
  User,
  Layers,
  Bug,
  Crown,
  HeartHandshake
} from 'lucide-react';

const BACKEND_EMAIL = 'pethorizon2026@gmail.com';
const DISPLAY_SUPPORT_EMAIL = 'support@pethorizon.com';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

interface TopicOption {
  id: string;
  label: string;
  icon: React.ElementType;
  defaultSubject: string;
}

const TOPIC_OPTIONS: TopicOption[] = [
  {
    id: 'routine',
    label: 'Routines & Alerts',
    icon: Sparkles,
    defaultSubject: 'Pet Routine & Medication Alert Inquiry'
  },
  {
    id: 'family',
    label: 'Family Hub Sync',
    icon: Layers,
    defaultSubject: 'Family Hub Collaboration & Sync Help'
  },
  {
    id: 'account',
    label: 'Account & Data Deletion',
    icon: ShieldCheck,
    defaultSubject: 'Account Privacy & Data Request'
  },
  {
    id: 'bug',
    label: 'Bug / App Issue',
    icon: Bug,
    defaultSubject: 'Android App Issue Report'
  },
  {
    id: 'premium',
    label: 'Premium & Billing',
    icon: Crown,
    defaultSubject: 'Pet Horizon Premium Subscription Question'
  },
  {
    id: 'general',
    label: 'General Help',
    icon: HeartHandshake,
    defaultSubject: 'Pet Horizon General Inquiry'
  }
];

export default function ContactUs() {
  const [selectedTopic, setSelectedTopic] = useState<string>('routine');
  const [name, setName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [appVersion, setAppVersion] = useState<string>('v1.0.4 (Android)');
  const [customSubject, setCustomSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedDraft, setCopiedDraft] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeTopic = TOPIC_OPTIONS.find((t) => t.id === selectedTopic) || TOPIC_OPTIONS[0];
  const finalSubject = customSubject.trim() ? customSubject.trim() : `[Pet Horizon Support] ${activeTopic.defaultSubject}`;

  // Generate structured message draft
  const getStructuredDraft = () => {
    return `[Pet Horizon Support Request]
Topic: ${activeTopic.label}
Name: ${name.trim() || 'Not specified'}
Reply-To: ${senderEmail.trim() || 'Not specified'}
App Environment: ${appVersion}

--- Message ---
${message.trim() || '(Please type your message details here)'}
-----------------
Sent from Pet Horizon Web Support Portal`;
  };

  const supportMailtoUrl = `mailto:${BACKEND_EMAIL}?subject=${encodeURIComponent(
    finalSubject
  )}&body=${encodeURIComponent(getStructuredDraft())}`;

  const showToast = (text: string) => {
    setToastMessage(text);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(DISPLAY_SUPPORT_EMAIL);
      setCopiedEmail(true);
      showToast('Official support email copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
      showToast(`Email: ${DISPLAY_SUPPORT_EMAIL}`);
    }
  };

  const handleCopyDraft = async () => {
    const draftText = `To: ${DISPLAY_SUPPORT_EMAIL}
Subject: ${finalSubject}

${getStructuredDraft()}`;

    try {
      await navigator.clipboard.writeText(draftText);
      setCopiedDraft(true);
      showToast('Full message draft copied! Ready to paste into Gmail or Outlook.');
      setTimeout(() => setCopiedDraft(false), 2500);
    } catch {
      showToast('Could not copy automatically. You can tap "Send via Email App".');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[360px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[360px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Floating Status Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 border border-slate-700 pointer-events-none"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dedicated App Support & Helpdesk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            We’re Here For You and Your Pets
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-3.5 font-normal leading-relaxed">
            Need help configuring daily routines, syncing family members, or managing your data? Connect with our dedicated support team directly or compose a pre-formatted message below.
          </p>
        </motion.div>

        {/* 2-Column Responsive Support Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Quick Channels & Helpdesk Overview (Order 1 on mobile & desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 order-1">
            
            {/* Live Helpdesk Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>Helpdesk Active</span>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  SLA: &lt; 24h
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Fast, Human Assistance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                No automated conversational dead-ends. Our team directly handles pet routine guidance, account requests, and sync troubleshooting.
              </p>

              {/* Direct Email Container */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 transition-all">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Direct Support Inbox
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 break-all select-all">
                      {DISPLAY_SUPPORT_EMAIL}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/70">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-2xs hover:border-slate-300 cursor-pointer active:scale-98"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
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

                  <a
                    href={`mailto:${BACKEND_EMAIL}?subject=${encodeURIComponent('[Pet Horizon] Direct Help Request')}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-2xs hover:shadow-sm cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open Mail</span>
                  </a>
                </div>
              </div>

              {/* Coverage Schedule */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700">Hours: </span>
                  <span>Monday – Friday: 9:00 AM – 6:00 PM (UTC). Inquiries sent on weekends are reviewed for urgent sync issues.</span>
                </div>
              </div>
            </motion.div>

            {/* Google Play Verified Listing Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-blue-200 transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      Google Play Official App
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                      Android
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Download the latest release, leave developer feedback, or request assistance via our verified store presence.
                  </p>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline mt-2.5 transition-colors"
                  >
                    <span>Visit Google Play Store Listing</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Instant Help & FAQ Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-emerald-50/60 border border-emerald-200/80 rounded-3xl p-5 shadow-2xs flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                    Need an Immediate Answer?
                  </h4>
                  <p className="text-xs text-emerald-800/80 mt-0.5 font-medium">
                    Check our 10+ FAQ guide for species, sync, & data solutions.
                  </p>
                </div>
              </div>
              <a
                href="#faq"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold transition-all shrink-0 shadow-2xs"
              >
                <span>FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Emergency Vet Medical Disclaimer Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50/70 border border-amber-200 rounded-3xl p-5 sm:p-6 shadow-2xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 border border-amber-200 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Pet Health & Emergency Disclaimer
                  </h4>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    Pet Horizon is an administrative pet health companion and routine planner. In the event of an acute medical crisis, ingestion of toxic substances, or urgent symptoms, please contact your local licensed 24/7 veterinarian or emergency animal clinic immediately.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Inquiry Composer (Order 2 on mobile & desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 order-2 text-left"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border bg-emerald-100 text-emerald-800 border-emerald-200">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                Interactive Inquiry Composer
              </span>
              <span className="text-[11px] text-slate-400 font-semibold hidden sm:inline">
                Instant Mail Pre-Fill
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Compose Your Support Request
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
              Select your topic and enter details. We’ll generate a clean, structured draft that you can open in your email client or copy directly for webmail.
            </p>

            {/* Topic Category Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                Select Inquiry Topic
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {TOPIC_OPTIONS.map((topic) => {
                  const Icon = topic.icon;
                  const isSelected = selectedTopic === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        setSelectedTopic(topic.id);
                        if (!customSubject) {
                          setCustomSubject('');
                        }
                      }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer active:scale-98 ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-2xs'
                          : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`} />
                      <span className="truncate">{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Row: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Your Name (Optional)</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Your Email Address</span>
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/40 transition-all"
                />
              </div>
            </div>

            {/* App Version / Environment Selector */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                  <span>App Version / Environment</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">Helps resolve issues faster</span>
              </label>
              <select
                value={appVersion}
                onChange={(e) => setAppVersion(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/40 transition-all cursor-pointer"
              >
                <option value="v1.0.4 (Android)">v1.0.4 (Latest Google Play Build)</option>
                <option value="Android 15 / Pixel">Android 15 / Pixel or Native Android</option>
                <option value="Android 14 / Samsung One UI">Android 14 / Samsung One UI</option>
                <option value="Other Android Device">Other Android Phone or Tablet</option>
                <option value="General / Pre-Download Inquiry">General / Pre-Download Inquiry</option>
              </select>
            </div>

            {/* Custom Subject Field */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Subject Line
              </label>
              <input
                type="text"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder={activeTopic.defaultSubject}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/40 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Message Details</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  {message.length} characters
                </span>
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe what you need assistance with, steps to reproduce any bug, or specifics about your pet care setup..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/40 transition-all resize-y min-h-[100px]"
              />
            </div>

            {/* Live Message Preview Accordion/Snippet */}
            <div className="mb-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center justify-between mb-1.5 font-bold text-[11px] uppercase tracking-wider text-slate-500">
                <span>Routing Preview</span>
                <span className="text-emerald-700 font-extrabold">{DISPLAY_SUPPORT_EMAIL}</span>
              </div>
              <p className="line-clamp-2 text-slate-600 italic font-mono text-[11px]">
                {finalSubject} — {message.trim() ? message.trim() : 'Your custom message will be neatly formatted...'}
              </p>
            </div>

            {/* Dual Action Buttons: Send via Email App & Copy Structured Draft */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={supportMailtoUrl}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-all shadow-md shadow-emerald-700/15 hover:shadow-lg hover:shadow-emerald-700/25 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email App</span>
              </a>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-sm transition-all border border-slate-200 cursor-pointer active:scale-98"
                title="Copy entire draft to paste into Gmail or webmail"
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-800">Draft Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Copy Structured Draft</span>
                  </>
                )}
              </button>
            </div>

            {/* Helpful Helper Text for Webmail users */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Using Gmail or webmail? Use &ldquo;Copy Structured Draft&rdquo; to paste easily.
              </span>
              <span className="font-semibold text-slate-500">Official Desk: pethorizon2026@gmail.com</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
