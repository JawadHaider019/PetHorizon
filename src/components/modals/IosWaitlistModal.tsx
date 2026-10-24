import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Apple, Mail, CheckCircle2, ArrowRight, Bell } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Save to local storage for persistence
    try {
      const waitlist = JSON.parse(localStorage.getItem('pethorizon_ios_waitlist') || '[]');
      waitlist.push({ email: email.trim(), date: new Date().toISOString() });
      localStorage.setItem('pethorizon_ios_waitlist', JSON.stringify(waitlist));
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch {
        // safe fallback
      }
    }, 600);
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
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 text-center overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-slate-900 via-neutral-800 to-emerald-600" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Apple Badge Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white mx-auto flex items-center justify-center shadow-md mb-4 mt-1">
                  <Apple className="w-7 h-7" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-2">
                  <Bell className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Apple App Store • TestFlight Beta</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Get Notified for iOS Launch
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 mb-6 max-w-xs mx-auto leading-relaxed">
                  We are finalizing Pet Horizon for iPhone &amp; Apple Watch. Enter your email to receive priority invitation to our private beta and public App Store release.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
                  <div>
                    <label htmlFor="ios-waitlist-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Email Address
                    </label>
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
                        placeholder="e.g. sarah@gmail.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                      />
                    </div>
                    {error && <p className="text-xs text-rose-600 font-semibold mt-1.5">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 mt-1"
                  >
                    <span>{isSubmitting ? 'Reserving Spot...' : 'Join iOS Early Access List'}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    🔒 Zero spam. We only email you when the iOS version is ready to test.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  You're on the Priority List! 🎉
                </h3>
                <p className="text-slate-600 text-sm mt-2 mb-6 max-w-xs mx-auto leading-relaxed">
                  Thank you! We've saved <span className="font-bold text-slate-900">{email}</span>. You will be among the first pet parents invited to download Pet Horizon on iOS.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
