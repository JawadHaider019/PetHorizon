import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import { AppleIcon } from '../AppBadges';
import { FORMSPREE_ENDPOINT } from '../contact/contactData';
import IosWaitlistBenefits from './IosWaitlistBenefits';

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

    // 1. Dispatch to Formspree endpoint
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

    // 2. Backup to browser local storage
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
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#64748b', '#0f172a']
      });
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
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
          />

          {/* Two-Panel Studio Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200/90 z-10 text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer z-30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Panel: Slate-Tinted iOS Studio Showcase */}
              <div className="md:col-span-5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-5 sm:p-6 md:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden">
                {/* Brand & TestFlight Tag */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <AppleIcon className="w-4 h-4 text-white" />
                    <span className="text-sm font-black text-white tracking-tight">Apple TestFlight</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Private beta access for iPhone and Apple Watch companion devices.
                  </p>
                </div>

                {/* 3D Mascot Studio Presentation */}
                <div className="py-3 sm:py-5 md:py-8 flex flex-col items-center justify-center relative">
                  <div className="absolute w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-32 sm:w-40 md:w-48 drop-shadow-2xl select-none"
                  >
                    <img
                      src="/cute-3d-pets.webp"
                      alt="Pet Horizon 3D Mascot Companions"
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </motion.div>
                </div>

                {/* Platform Capabilities Footer */}
                <div className="relative z-10 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Developer Signed</span>
                    </div>
                    <span>iOS 18 &amp; watchOS</span>
                  </div>
                </div>
              </div>

              {/* Right Panel: Action & Beta Registration Form */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                {!isSubmitted ? (
                  <>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        Join iOS Early Access
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Reserve a spot in our upcoming TestFlight beta wave to test new releases and sync widgets.
                      </p>

                      {/* Professional Benefits List */}
                      <IosWaitlistBenefits />
                    </div>

                    {/* Email Input & Submit Button */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 pt-2 border-t border-slate-100">
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
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] transition-all"
                          />
                        </div>
                        {error && <p className="text-xs text-rose-600 font-semibold mt-1.5">{error}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                            <span>Reserving Invitation...</span>
                          </>
                        ) : (
                          <>
                            <AppleIcon className="w-4 h-4 text-white shrink-0" />
                            <span>Request TestFlight Invite</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-slate-400 text-center font-normal">
                        Your email will only be used to deliver official Apple TestFlight beta links.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#166534] border border-emerald-200 mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      Invitation Reserved
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-4 max-w-sm leading-relaxed">
                      We have added <span className="font-bold text-slate-900">{email}</span> to our priority queue. You will receive an email once the next TestFlight wave opens.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
