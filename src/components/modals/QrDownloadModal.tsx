import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Check, Copy, ShieldCheck, Star } from 'lucide-react';
import QrCodeSvg from '../common/QrCodeSvg';
import { GooglePlayIcon } from '../AppBadges';
import { PLAY_STORE_URL } from '../../config/siteConfig';

interface QrDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QrDownloadModal({ isOpen, onClose }: QrDownloadModalProps) {
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(PLAY_STORE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
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
              {/* Left Panel: 3D Mascot Studio Showcase */}
              <div className="md:col-span-5 bg-[#FAF8F5] p-5 sm:p-6 md:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80 relative overflow-hidden">
                {/* Brand Header */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900 tracking-tight">Pet Horizon</span>
                    <span className="text-[10px] font-bold text-[#166534] bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                      Android Edition
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    Smart companion tracking, feeding routines, and healthcare logs.
                  </p>
                </div>

                {/* 3D Mascot Studio Presentation */}
                <div className="py-3 sm:py-5 md:py-8 flex flex-col items-center justify-center relative">
                  <div className="absolute w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-32 sm:w-40 md:w-48 drop-shadow-xl select-none"
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

                {/* Verified Social Proof Footer */}
                <div className="relative z-10 pt-3 border-t border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-slate-800">5.0</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Google Play Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Action & Precision QR Scanner */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Scan to Install
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Point your smartphone camera at the code below to open the official Google Play listing directly.
                  </p>

                  {/* QR Scanner Display */}
                  <div className="my-5 flex flex-col items-center">
                    <div className="relative w-48 h-48 bg-white rounded-2xl p-3 border border-slate-200 shadow-xs flex items-center justify-center overflow-hidden">
                      {/* Corner Target Accents */}
                      <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#166534] rounded-tl-sm pointer-events-none" />
                      <span className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#166534] rounded-tr-sm pointer-events-none" />
                      <span className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#166534] rounded-bl-sm pointer-events-none" />
                      <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#166534] rounded-br-sm pointer-events-none" />

                      {/* Laser Beam Animation */}
                      <motion.div
                        animate={{
                          top: ['8%', '88%', '8%'],
                          opacity: [0.3, 0.85, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="absolute left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent pointer-events-none shadow-[0_0_8px_1px_rgba(16,185,129,0.7)] z-10"
                      />

                      <QrCodeSvg className="w-full h-full object-contain relative z-0" />
                    </div>

                    <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-semibold text-slate-500">
                      <Smartphone className="w-3.5 h-3.5 text-[#166534]" />
                      <span>Compatible with all modern Android smartphones</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Copy Link & Open in Store */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-left">
                    <span className="text-[11px] text-slate-600 truncate flex-1 font-mono pl-2">
                      {PLAY_STORE_URL.replace('https://', '')}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#166534] hover:border-emerald-300 shadow-2xs transition-all cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <GooglePlayIcon className="w-5 h-5 shrink-0" />
                    <span>Open in Google Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


