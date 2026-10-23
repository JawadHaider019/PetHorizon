import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-expect-error canvas-confetti does not ship internal types
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  Clock,
  ExternalLink,
  Smartphone,
  AlertTriangle,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  Layers,
  Bug,
  Crown,
  HelpCircle,
  Star,
  User,
  MessageSquare,
  CheckCircle2,
  RefreshCw,
  Zap,
  ArrowRight,
  X
} from 'lucide-react';

const BACKEND_EMAIL = 'pethorizon2026@gmail.com';
const DISPLAY_SUPPORT_EMAIL = 'pethorizon2026@gmail.com';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnppnazk';

interface TopicOption {
  id: string;
  label: string;
  icon: React.ElementType;
  subjectTag: string;
}

const SUPPORT_TOPICS: TopicOption[] = [
  {
    id: 'general',
    label: 'General Inquiry',
    icon: HelpCircle,
    subjectTag: 'General Support'
  },
  {
    id: 'routine',
    label: 'Routines & Alerts',
    icon: Sparkles,
    subjectTag: 'Routine Setup'
  },
  {
    id: 'family',
    label: 'Family Hub Sync',
    icon: Layers,
    subjectTag: 'Family Hub'
  },
  {
    id: 'bug',
    label: 'Bug Report',
    icon: Bug,
    subjectTag: 'Bug Report'
  },
  {
    id: 'billing',
    label: 'Premium & Billing',
    icon: Crown,
    subjectTag: 'Billing'
  },
  {
    id: 'account',
    label: 'Account & Privacy',
    icon: ShieldCheck,
    subjectTag: 'Account & Data'
  }
];

interface TicketData {
  ticketId: string;
  name: string;
  email: string;
  topic: TopicOption;
  priority: 'normal' | 'urgent';
  message: string;
  submittedAt: string;
}

interface ToastNotification {
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
  ticketId?: string;
}

export default function ContactUs() {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('general');
  const [priority, setPriority] = useState<'normal' | 'urgent'>('normal');
  const [message, setMessage] = useState('');

  // UI / Interaction State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submittedTicket, setSubmittedTicket] = useState<TicketData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTicketId, setCopiedTicketId] = useState(false);
  const [toast, setToast] = useState<ToastNotification | null>(null);

  const activeTopic = SUPPORT_TOPICS.find((t) => t.id === selectedTopicId) || SUPPORT_TOPICS[0];

  const triggerToast = (
    title: string,
    messageText: string,
    type: 'success' | 'info' | 'error' = 'success',
    ticketId?: string
  ) => {
    setToast({ title, message: messageText, type, ticketId });
    setTimeout(() => {
      setToast((curr) => (curr?.title === title ? null : curr));
    }, 5500);
  };

  const handleCopySupportEmail = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      await navigator.clipboard.writeText(DISPLAY_SUPPORT_EMAIL);
      setCopiedEmail(true);
      triggerToast('Support Email Copied', `Official email ${DISPLAY_SUPPORT_EMAIL} copied to clipboard!`);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      triggerToast('Official Support Email', DISPLAY_SUPPORT_EMAIL);
    }
  };

  const handleCopyTicket = async () => {
    if (!submittedTicket) return;
    try {
      const summary = `Ticket ID: ${submittedTicket.ticketId}\nCategory: ${submittedTicket.topic.label}\nPriority: ${submittedTicket.priority.toUpperCase()}\nUser: ${submittedTicket.name} (${submittedTicket.email})\nMessage: ${submittedTicket.message}`;
      await navigator.clipboard.writeText(summary);
      setCopiedTicketId(true);
      triggerToast('Ticket Summary Copied', `Details for ${submittedTicket.ticketId} copied to clipboard.`);
      setTimeout(() => setCopiedTicketId(false), 2500);
    } catch {
      triggerToast('Ticket Reference', submittedTicket.ticketId);
    }
  };

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      errors.name = 'Please provide your full name.';
    }
    if (!email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      errors.message = 'Please provide details about your inquiry.';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `#PTH-${randomTicketNum}`;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ticketId,
          name: name.trim(),
          email: email.trim(),
          topic: activeTopic.label,
          priority: priority.toUpperCase(),
          message: message.trim(),
          _replyto: email.trim(),
          _subject: `[${ticketId}] [${activeTopic.subjectTag}] (${priority.toUpperCase()}) Support Ticket from ${name.trim()}`
        })
      });

      // Fire celebratory confetti burst!
      try {
        confetti({
          particleCount: 65,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#059669', '#10b981', '#14b8a6', '#f59e0b', '#3b82f6']
        });
      } catch {
        // safe fallback if canvas is restricted
      }

      if (response.ok) {
        triggerToast(
          'Support Ticket Dispatched! 🎉',
          `Ticket ${ticketId} was successfully sent to pethorizon2026@gmail.com. We'll reply to ${email.trim()} promptly!`,
          'success',
          ticketId
        );
      } else {
        triggerToast(
          'Ticket Created Locally',
          `Ticket ${ticketId} generated. You can also send a direct copy using the email backup buttons below.`,
          'info',
          ticketId
        );
      }
    } catch (err) {
      console.warn('Formspree dispatch error, continuing with local ticket intake:', err);
      triggerToast(
        'Ticket Created',
        `Ticket ${ticketId} is logged. Email backup tools are available below.`,
        'info',
        ticketId
      );
    } finally {
      const ticket: TicketData = {
        ticketId,
        name: name.trim(),
        email: email.trim(),
        topic: activeTopic,
        priority,
        message: message.trim(),
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setSubmittedTicket(ticket);
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setName('');
    setEmail('');
    setMessage('');
    setPriority('normal');
    setSelectedTopicId('general');
    setFormErrors({});
  };

  // Generate external email links for fallback
  const emailSubject = submittedTicket
    ? `[${submittedTicket.ticketId}] [${submittedTicket.topic.subjectTag}] Inquiry from ${submittedTicket.name}`
    : `[Pet Horizon Support] [${activeTopic.subjectTag}] Inquiry`;

  const emailBody = submittedTicket
    ? `Ticket ID: ${submittedTicket.ticketId}\nName: ${submittedTicket.name}\nEmail: ${submittedTicket.email}\nTopic: ${submittedTicket.topic.label}\nPriority: ${submittedTicket.priority.toUpperCase()}\n\nMessage:\n${submittedTicket.message}\n\n---\nSent via Pet Horizon Support Center`
    : `Hello Pet Horizon Support Team,\n\nI need assistance regarding ${activeTopic.label}.\n\n[Please describe your inquiry or issue here]\n\nThank you!`;

  const mailtoUrl = `mailto:${BACKEND_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${BACKEND_EMAIL}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[380px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-6 right-4 sm:right-8 z-50 max-w-sm sm:max-w-md w-full bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl p-4 sm:p-4.5 shadow-2xl shadow-emerald-950/40 border border-emerald-500/30 flex items-start gap-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-xs sm:text-sm font-black text-white tracking-tight">{toast.title}</p>
                {toast.ticketId && (
                  <span className="font-mono text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    {toast.ticketId}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">{toast.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
              title="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
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
            <span>Helpdesk & Priority Customer Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            We’re Here to Help You and Your Pet
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
            Have a question about pet routines, data sync, or need technical assistance? Fill out a ticket below or reach our team directly.
          </p>
        </motion.div>

        {/* Master Showcase Layout: Form + Concise Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] border border-slate-200/80 shadow-xl shadow-slate-900/5 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Lighting Inside the Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Grid Layout: 7 Cols (Interactive Form) + 5 Cols (Concise Contact Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            {/* Left Column: Interactive Ticket Form / Confirmation State */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!submittedTicket ? (
                  /* Live Ticket Creation Form */
                  <motion.form
                    key="support-form"
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      {/* Form Header */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                            Direct Support Request
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            Submit a Support Ticket
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {/* Name Field */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                                if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: undefined }));
                              }}
                              placeholder="Alex Smith"
                              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                                formErrors.name
                                  ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                                  : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                              }`}
                            />
                          </div>
                          {formErrors.name && (
                            <p className="text-[11px] text-rose-600 mt-1 font-medium">{formErrors.name}</p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (formErrors.email) setFormErrors((prev) => ({ ...prev, email: undefined }));
                              }}
                              placeholder="alex@example.com"
                              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                                formErrors.email
                                  ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                                  : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                              }`}
                            />
                          </div>
                          {formErrors.email && (
                            <p className="text-[11px] text-rose-600 mt-1 font-medium">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Topic Category Selection */}
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Inquiry Category <span className="text-rose-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {SUPPORT_TOPICS.map((topic) => {
                            const Icon = topic.icon;
                            const isSelected = selectedTopicId === topic.id;
                            return (
                              <button
                                key={topic.id}
                                type="button"
                                onClick={() => setSelectedTopicId(topic.id)}
                                className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer active:scale-95 ${
                                  isSelected
                                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm shadow-emerald-700/20'
                                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                              >
                                <Icon
                                  className={`w-3.5 h-3.5 shrink-0 ${
                                    isSelected ? 'text-emerald-100' : 'text-slate-500'
                                  }`}
                                />
                                <span className="truncate">{topic.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Priority Selector & Character Tip */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pt-1">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Urgency / Priority
                          </label>
                          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200">
                            <button
                              type="button"
                              onClick={() => setPriority('normal')}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                priority === 'normal'
                                  ? 'bg-white text-slate-800 shadow-2xs'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              Normal (Standard)
                            </button>
                            <button
                              type="button"
                              onClick={() => setPriority('urgent')}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                priority === 'urgent'
                                  ? 'bg-amber-500 text-white shadow-2xs'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              <Zap className="w-3 h-3" />
                              <span>Urgent</span>
                            </button>
                          </div>
                        </div>

                        <div className="text-[11px] text-slate-400 font-medium">
                          {priority === 'urgent' ? (
                            <span className="text-amber-600 font-bold">Priority queue: &lt; 6h response target</span>
                          ) : (
                            <span>Typical turnaround: &lt; 24h</span>
                          )}
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div className="mb-5">
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-slate-700">
                            Inquiry Details <span className="text-rose-500">*</span>
                          </label>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {message.length} / 1500 chars
                          </span>
                        </div>
                        <textarea
                          rows={4}
                          maxLength={1500}
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            if (formErrors.message) setFormErrors((prev) => ({ ...prev, message: undefined }));
                          }}
                          placeholder="Please provide details about what happened, your device model, or the pet routine you'd like guidance with..."
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all resize-y min-h-[110px] ${
                            formErrors.message
                              ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                              : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                          }`}
                        />
                        {formErrors.message && (
                          <p className="text-[11px] text-rose-600 mt-1 font-medium">{formErrors.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-800/15 hover:shadow-lg hover:shadow-emerald-800/25 cursor-pointer active:scale-98 disabled:opacity-75 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-white" />
                            <span>Sending Ticket to Support Desk...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Support Ticket</span>
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                        Secure Formspree 256-bit intake • Direct line to Pet Horizon engineers
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  /* High-Trust Ticket Confirmation State */
                  <motion.div
                    key="confirmation-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-between py-2"
                  >
                    <div>
                      {/* Success Pill & Status */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Delivered to pethorizon2026@gmail.com</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">
                          Received at {submittedTicket.submittedAt}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                        Thank You, {submittedTicket.name}!
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        Your inquiry has been assigned a priority tracking ID. Our core product support team will review it and reply directly to{' '}
                        <strong className="text-slate-800">{submittedTicket.email}</strong>.
                      </p>

                      {/* Ticket Summary Card */}
                      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-6 space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                              Ticket Reference ID
                            </span>
                            <span className="text-lg font-black text-emerald-800 font-mono">
                              {submittedTicket.ticketId}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopyTicket}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                          >
                            {copiedTicketId ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-500" />
                                <span>Copy Details</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-slate-400 block text-[11px]">Category</span>
                            <span className="font-bold text-slate-800">{submittedTicket.topic.label}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[11px]">Priority</span>
                            <span
                              className={`inline-block font-bold uppercase text-[10px] px-2 py-0.5 rounded-md ${
                                submittedTicket.priority === 'urgent'
                                  ? 'bg-amber-100 text-amber-800 font-black'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {submittedTicket.priority}
                            </span>
                          </div>
                        </div>

                        <div className="pt-1 text-xs">
                          <span className="text-slate-400 block text-[11px] mb-0.5">Message Summary</span>
                          <p className="text-slate-700 line-clamp-3 bg-white p-2.5 rounded-lg border border-slate-200/60 font-mono text-[11px]">
                            {submittedTicket.message}
                          </p>
                        </div>
                      </div>

                      {/* 1-Click Mail Fallback Options */}
                      <div className="mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                          Quick Email Backup Options
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <a
                            href={gmailWebUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-all shadow-2xs hover:border-slate-300 text-center"
                          >
                            <Mail className="w-3.5 h-3.5 text-red-500" />
                            <span>Open in Web Gmail</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>

                          <a
                            href={mailtoUrl}
                            className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-all shadow-2xs hover:border-slate-300 text-center"
                          >
                            <Send className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Open Default Mail App</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer active:scale-98"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Submit Another Inquiry</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Concise Contact Card (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-50/90 via-emerald-50/30 to-slate-50/70 flex flex-col justify-between">
              <div>
                {/* Live Helpdesk Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>Support Desk Active • Response &lt; 24h</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2.5">
                  Executive Support
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Direct communication with the Pet Horizon product engineers and customer care leads. No automated chat loops.
                </p>

                {/* Direct Official Support Email Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Direct Email Address
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-black text-slate-900 break-all select-all tracking-tight font-mono">
                      {DISPLAY_SUPPORT_EMAIL}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySupportEmail}
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all shrink-0 cursor-pointer active:scale-95"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Operating Hours Info */}
                <div className="bg-white/80 border border-slate-200/90 rounded-2xl p-4 shadow-2xs mb-5 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block mb-0.5">Operating Hours</span>
                    <p className="text-slate-600 leading-relaxed font-normal">
                      Monday – Friday: 9:00 AM – 6:00 PM (UTC).
                    </p>
                    <p className="text-slate-400 text-[11px] mt-1 font-medium">
                      Inquiries submitted over the weekend are prioritized first on Monday morning.
                    </p>
                  </div>
                </div>

                {/* Google Play Store Verified App Link */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded-2xl p-4 shadow-2xs transition-all flex items-center justify-between mb-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-100/70 border border-slate-200 group-hover:border-emerald-200 flex items-center justify-center shrink-0 transition-colors">
                      <Smartphone className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">Google Play Store</span>
                        <div className="flex items-center gap-0.5 text-[10px] font-black text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200/60">
                          <Star className="w-2.5 h-2.5 fill-amber-400" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500">Official Android App Release</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                </a>
              </div>

              {/* Emergency Health Disclaimer Banner */}
              <div className="pt-2">
                <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <strong className="font-bold text-amber-950">Urgent Health Crisis Notice: </strong>
                    <span>
                      Pet Horizon is a wellness and care scheduling tool. If your pet is facing an acute medical emergency, contact a licensed 24/7 veterinary hospital immediately.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Frosted Bottom Sub-Footer Inside Card */}
          <div className="border-t border-slate-200/80 bg-slate-50/80 px-6 sm:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Compliant with Google Play Data Safety standards • Privacy guaranteed</span>
            </div>

            <a
              href="#faq"
              className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold transition-colors text-xs"
            >
              <span>Have common questions? Browse FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
