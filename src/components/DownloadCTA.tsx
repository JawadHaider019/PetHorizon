import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { GooglePlayBadge, AppStoreBadge, QrScanButton } from './AppBadges';
import { PLAY_STORE_URL } from '../config/siteConfig';

interface DownloadCTAProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function DownloadCTA({ onOpenQrModal, onOpenIosModal }: DownloadCTAProps) {
  const playStoreUrl = PLAY_STORE_URL;

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
              
              <p className="text-xs font-black uppercase tracking-widest text-emerald-200">
                Start Today For Free
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Give Your Companion the Organized Care They Deserve
              </h2>

              <p className="text-emerald-50/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Download Pet Horizon today. Track feedings, manage medications, and co-ordinate your family care team effortlessly.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GooglePlayBadge href={playStoreUrl} className="px-5 py-3 rounded-2xl shadow-xl" />
                <AppStoreBadge onClick={onOpenIosModal} className="px-5 py-3 rounded-2xl shadow-xl" />
                {onOpenQrModal && (
                  <QrScanButton onClick={onOpenQrModal} className="px-4 py-3 rounded-2xl shadow-md bg-white text-slate-900 hover:bg-emerald-50 hover:text-emerald-800" />
                )}
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

            {/* Visual Mascot Showcase (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative">
                {/* 3D Cute Pets Showcase Card with gentle float */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-64 sm:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/40 bg-white relative group"
                >
                  <img
                    src="/cute-3d-pets.jpg"
                    alt="Pet Horizon 3D Mascot Companions - Golden Retriever Puppy and Fluffy Kitten"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                  <div className="p-3.5 bg-gradient-to-r from-emerald-950 via-[#144917] to-emerald-900 text-white text-center">
                    <p className="text-xs font-bold text-emerald-200">
                      Co-manage all your pets in harmony
                    </p>
                    <p className="text-[10px] text-emerald-300/80 font-medium mt-0.5">
                      Dogs &bull; Cats &bull; Birds &bull; Small Pets
                    </p>
                  </div>
                </motion.div>

                {/* Floating app rating pill */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute -bottom-4 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 z-20"
                >
                  <img src="/app-icon.png" alt="Pet Horizon Logo" className="w-10 h-10 rounded-xl object-contain shadow-xs" />
                  <div className="text-left pr-2">
                    <p className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">Pet Horizon</p>
                    <p className="text-xs font-bold text-slate-900">Rated 5.0 on Google Play</p>
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
