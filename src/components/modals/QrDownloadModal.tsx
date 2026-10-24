import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Check, Copy, ExternalLink, Star } from 'lucide-react';
import { useState } from 'react';

interface QrDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QrDownloadModal({ isOpen, onClose }: QrDownloadModalProps) {
  const [copied, setCopied] = useState(false);
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

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
    navigator.clipboard.writeText(playStoreUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe online QR generator with graceful local fallback
  const qrImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(playStoreUrl)}`;

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
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* App Icon & Rating Pill */}
            <div className="flex flex-col items-center gap-2 mb-4 mt-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 p-2 shadow-sm flex items-center justify-center">
                <img src="/ph-logo-mark.png" alt="Pet Horizon" className="w-full h-full object-contain" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Rated 4.9 • Official Google Play App</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Scan with Your Phone Camera
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 mb-5 max-w-xs mx-auto">
              Open your smartphone camera or QR scanner to open Pet Horizon directly on the Google Play Store.
            </p>

            {/* QR Code Canvas Frame */}
            <div className="relative inline-block p-4 bg-gradient-to-b from-slate-50 to-white rounded-2xl border-2 border-emerald-500/20 shadow-inner mb-5">
              <div className="w-52 h-52 sm:w-56 sm:h-56 bg-white rounded-xl p-2 flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
                <img
                  src={qrImageSrc}
                  alt="Pet Horizon Google Play QR Code"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to local image if offline
                    (e.target as HTMLImageElement).src = '/dog_qr_icon.png';
                  }}
                />
              </div>

              {/* Scan indicator badge */}
              <div className="mt-2 text-[11px] font-bold text-slate-500 flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Works with any Android smartphone camera</span>
              </div>
            </div>

            {/* Direct Link Actions */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-left">
                <span className="text-xs text-slate-500 truncate flex-1 font-mono pl-2">
                  {playStoreUrl}
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-xs transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
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
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Open Google Play Directly in Browser</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
