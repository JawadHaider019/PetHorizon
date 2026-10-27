import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-expect-error canvas-confetti does not ship internal types
import confetti from 'canvas-confetti';
import { Mail, CheckCircle2, AlertCircle, X, ExternalLink } from 'lucide-react';
import {
  SUPPORT_TOPICS,
  TicketData,
  ToastNotification,
  FORMSPREE_ENDPOINT,
  DISPLAY_SUPPORT_EMAIL
} from './contact/contactData';
import ContactForm from './contact/ContactForm';
import ContactTicketSuccess from './contact/ContactTicketSuccess';
import ContactSidebar from './contact/ContactSidebar';

import { fadeInUp } from '../config/animationVariants';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('general');
  const [priority, setPriority] = useState<'normal' | 'urgent'>('normal');

  const [formErrors, setFormErrors] = useState<Record<string, string | undefined>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<TicketData | null>(null);
  const [dispatchError, setDispatchError] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastNotification | null>(null);

  const clearError = (field: string) => {
    if (formErrors[field]) setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    if (dispatchError) setDispatchError(null);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = 'Please provide your name';
    if (!email.trim() || !email.includes('@')) errors.email = 'Valid email address is required';
    if (!message.trim() || message.trim().length < 10) errors.message = 'Please provide at least 10 characters';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setDispatchError(null);

    const ticketId = `PH-${Date.now().toString().slice(-6)}`;
    const activeTopic = SUPPORT_TOPICS.find((t) => t.id === selectedTopicId) || SUPPORT_TOPICS[0];

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ticketId,
          name: name.trim(),
          email: email.trim(),
          topic: activeTopic.label,
          priority,
          message: message.trim()
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.65 } });
      } catch {
        // safe fallback
      }

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
      setToast({
        type: 'success',
        title: 'Support Ticket Dispatched! 🎉',
        message: `Ticket ${ticketId} has been logged. We will follow up shortly.`,
        ticketId
      });
    } catch (err) {
      console.warn('Formspree dispatch error:', err);
      setDispatchError(
        'Automated dispatch was blocked or offline. You can send this request directly to our email with 1-click below.'
      );
      setToast({
        type: 'error',
        title: 'Network Dispatch Blocked',
        message: 'Please send your inquiry directly via your email client.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setDispatchError(null);
    setName('');
    setEmail('');
    setMessage('');
    setPriority('normal');
    setSelectedTopicId('general');
    setFormErrors({});
  };

  const activeTopic = SUPPORT_TOPICS.find((t) => t.id === selectedTopicId) || SUPPORT_TOPICS[0];
  const mailtoUrl = `mailto:${DISPLAY_SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `[${activeTopic.label}] Support Request from ${name || 'Pet Parent'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPriority: ${priority}\nTopic: ${activeTopic.label}\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-4 sm:right-8 z-50 max-w-sm text-white rounded-2xl p-4 shadow-2xl border flex items-start gap-3 ${
              toast.type === 'error'
                ? 'bg-rose-950 border-rose-500/40 text-rose-50'
                : 'bg-slate-900 border-emerald-500/30'
            }`}
          >
            {toast.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="text-xs font-bold">{toast.title}</p>
              <p className="text-[11px] text-slate-300 mt-0.5">{toast.message}</p>
            </div>
            <button onClick={() => setToast(null)} className="text-slate-400 hover:text-white cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-950/[0.04] border border-emerald-900/10 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
            Helpdesk &amp; Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
            We’re Here to Help You and Your Pet
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Have questions about feeding sync, vaccination schedules, or app setup? Fill out a ticket or contact us directly.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-white rounded-3xl border border-black/[0.06] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200/80">
            {/* Inline Fallback Banner on Dispatch Failure */}
            {dispatchError && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-amber-900">Online Dispatch Unavailable</p>
                    <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
                      {dispatchError}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Email Directly</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {submittedTicket ? (
              <ContactTicketSuccess ticket={submittedTicket} onReset={handleReset} />
            ) : (
              <ContactForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                selectedTopicId={selectedTopicId}
                setSelectedTopicId={setSelectedTopicId}
                priority={priority}
                setPriority={setPriority}
                message={message}
                setMessage={setMessage}
                formErrors={formErrors}
                clearError={clearError}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          <ContactSidebar />
        </motion.div>
      </div>
    </section>
  );
}
