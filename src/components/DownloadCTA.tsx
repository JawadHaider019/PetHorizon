import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { GooglePlayIcon, AppleIcon } from './AppBadges';

export default function DownloadCTA() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-emerald-500/40">
          
          {/* Ambient decorative lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Copy & CTAs (7 Cols) */}
            <div className="lg:col-span-7 text-left flex flex-col gap-5">
              
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit">
                <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
                <span>Start Today For Free</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Give Your Companion the Organized Care They Deserve
              </h2>

              <p className="text-emerald-50/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Download Pet Horizon today. Track feedings, manage medications, and co-ordinate your family care team effortlessly.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl transition-all"
                >
                  <GooglePlayIcon className="w-7 h-7 shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 leading-none tracking-wider">Get it on</span>
                    <span className="text-sm sm:text-base font-black text-slate-900 leading-tight">Google Play</span>
                  </div>
                </motion.a>

                <div className="bg-white/15 border border-white/20 text-white px-5 sm:px-6 py-3.5 rounded-2xl flex items-center gap-3.5 select-none backdrop-blur-sm">
                  <AppleIcon className="w-7 h-7 text-white shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-emerald-200 leading-none tracking-wider">Download on</span>
                    <span className="text-sm sm:text-base font-bold text-white leading-tight">App Store</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 text-white border border-white/30 px-2.5 py-0.5 rounded-full ml-1">
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Reassurances */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-emerald-100/90 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" /> Free to download
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" /> No ads
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" /> Secure cloud synchronization
                </span>
              </div>

            </div>

            {/* Visual Mascot & QR Code Showcase (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative">
                {/* 3D Mascot preview */}
                <div className="w-56 sm:w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-white">
                  <img
                    src="/3d-pets-species.jpg"
                    alt="Pet Horizon 3D Mascot Companions"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-emerald-900 text-white text-center">
                    <p className="text-[11px] font-bold text-emerald-200">
                      Co-manage all pets in harmony
                    </p>
                  </div>
                </div>

                {/* Floating app icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-6 bg-white p-2 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2"
                >
                  <img src="/app-icon.png" alt="Pet Horizon Logo" className="w-10 h-10 rounded-xl object-contain" />
                  <div className="text-left pr-2">
                    <p className="text-[10px] font-black uppercase text-emerald-700">Pet Horizon</p>
                    <p className="text-xs font-bold text-slate-900">Rated 4.8+ Stars</p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
