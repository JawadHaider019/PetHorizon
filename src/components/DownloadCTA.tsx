import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import googlePlayImg from '../assets/google-play.svg';
import appStoreImg from '../assets/app-store.svg';

export default function DownloadCTA() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-emerald-800/40">
          
          {/* Ambient decorative lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Copy & CTAs (7 Cols) */}
            <div className="lg:col-span-7 text-left flex flex-col gap-5">
              
              <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-700/80 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Start Today For Free</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Give Your Companion the Organized Care They Deserve
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Download Pet Horizon today. Track feedings, manage medications, and co-ordinate your family care team effortlessly.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl transition-all"
                >
                  <img src={googlePlayImg} alt="Google Play" className="h-6 w-auto" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 leading-none">Get it on</span>
                    <span className="text-sm font-black text-slate-900 leading-tight">Google Play</span>
                  </div>
                </motion.a>

                <div className="bg-slate-800/60 border border-slate-700 text-slate-400 px-5 py-3 rounded-2xl flex items-center gap-3">
                  <img src={appStoreImg} alt="App Store" className="h-6 w-auto grayscale opacity-50" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 leading-none">iOS Version</span>
                    <span className="text-xs font-bold text-slate-300 leading-tight">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Reassurances */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-emerald-200/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free to download
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No ads
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Secure cloud synchronization
                </span>
              </div>

            </div>

            {/* Visual Mascot & QR Code Showcase (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative">
                {/* 3D Mascot preview */}
                <div className="w-56 sm:w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
                  <img
                    src="/3d-pets-species.jpg"
                    alt="Pet Horizon 3D Mascot Companions"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-white text-center">
                    <p className="text-[11px] font-bold text-emerald-300">
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
