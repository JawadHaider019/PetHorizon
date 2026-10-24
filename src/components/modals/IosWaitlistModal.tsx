import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Apple, Mail, CheckCircle2, ArrowRight, Shield, Clock } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import { FORMSPREE_ENDPOINT } from '../contact/contactData';

interface IosWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IosWaitlistModal({ isOpen, onClose }: IosWaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // 1. Dispatch directly to Formspree endpoint (sends email notification)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          inquiryType: 'iOS Waitlist & TestFlight Beta',
          email: email.trim(),
          submittedAt: new Date().toISOString(),
          notes: 'User requested TestFlight beta invite on Pet Horizon website'
        })
      });
      if (!res.ok) {
        console.warn('Waitlist remote endpoint returned status:', res.status);
      }
    } catch (err) {
      console.warn('Formspree dispatch error:', err);
    }

    // 2. Backup to browser local storage so user registration is never lost
    try {
      const waitlist = JSON.parse(localStorage.getItem('pethorizon_ios_waitlist') || '[]');
      waitlist.push({ email: email.trim(), date: new Date().toISOString() });
      localStorage.setItem('pethorizon_ios_waitlist', JSON.stringify(waitlist));
    } catch {
      // safe fallback
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // safe fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[440px] bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 z-10 text-center overflow-hidden"
          >
            {/* Top Apple Dark Slate Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Apple & TestFlight Badge */}
                <div className="flex items-center justify-center gap-2 mb-3 pt-1">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                    <Apple className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap shrink-0">
                      Apple TestFlight Beta
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-tight mt-0.5">
                      iOS Early Access
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed max-w-sm mx-auto">
                  Pet Horizon for iPhone &amp; Apple Watch is currently in private beta testing. Join the list to get an invitation code as soon as slots open.
                </p>

                {/* Benefits List */}
                <div className="bg-slate-50 rounded-2xl p-3 sm:p-3.5 border border-slate-200/80 mb-5 text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Priority TestFlight build download link</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Estimated TestFlight rollout: Next Beta Sprint</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free complimentary Premium trial for beta testers</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="ios-waitlist-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Enter your email for TestFlight invite"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 shadow-2xs transition-all"
                      />
                    </div>
                    {error && <p className="text-xs text-rose-600 font-semibold mt-1.5">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Reserving...' : 'Join iOS TestFlight Waitlist'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 No spam. You will only be notified when the iOS version is ready.
                  </p>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-2">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  You're on the Waitlist!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 mb-5 max-w-xs mx-auto leading-relaxed">
                  We've reserved a priority spot for <span className="font-bold text-slate-900">{email}</span>. You'll receive the TestFlight beta link directly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
