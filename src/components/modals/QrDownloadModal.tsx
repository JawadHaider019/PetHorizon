import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Check, Copy, ExternalLink, Star, ShieldCheck, QrCode } from 'lucide-react';

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

  const qrImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=${encodeURIComponent(playStoreUrl)}`;

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
            className="relative w-full max-w-[420px] bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 z-10 text-center overflow-hidden"
          >
            {/* Top Emerald Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* App Identity Banner */}
            <div className="flex items-center gap-3.5 text-left mb-5 pt-1">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/90 p-2 shadow-2xs flex items-center justify-center shrink-0">
                <img src="/ph-logo-mark.png" alt="Pet Horizon" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-black text-slate-900 leading-tight">Pet Horizon</h3>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Pet Care &amp; Routine Tracker</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black text-slate-800">5.0 ★</span>
                  <span className="text-[10px] text-slate-400">Google Play</span>
                </div>
              </div>
            </div>

            {/* QR Scanner Target Box */}
            <div className="relative bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 mb-5 text-center">
              <div className="relative mx-auto w-48 h-48 sm:w-52 sm:h-52 bg-white rounded-xl p-2.5 shadow-xs border border-slate-200/90 flex items-center justify-center">
                {/* Visual Corner Target Accents */}
                <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-emerald-500 rounded-tl-sm pointer-events-none" />
                <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-emerald-500 rounded-tr-sm pointer-events-none" />
                <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-emerald-500 rounded-bl-sm pointer-events-none" />
                <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-emerald-500 rounded-br-sm pointer-events-none" />

                <img
                  src={qrImageSrc}
                  alt="Pet Horizon Google Play QR Code"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/ph-logo-mark.png';
                  }}
                />
              </div>

              <div className="flex items-center justify-center gap-2 mt-3 text-slate-600 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Scan with your phone camera to install</span>
              </div>
            </div>

            {/* Action Bar & Direct Link */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 bg-slate-100/70 border border-slate-200 rounded-xl p-1.5 text-left">
                <span className="text-[11px] text-slate-500 truncate flex-1 font-mono pl-2">
                  play.google.com/store/apps/details?id=com.anonymous.PetHorizon
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-2xs transition-all cursor-pointer shrink-0"
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
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Open in Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
