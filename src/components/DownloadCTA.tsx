import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { GooglePlayBadge, AppStoreBadge, QrScanButton } from './AppBadges';
import { PLAY_STORE_URL } from '../config/siteConfig';
import { fadeInLeft, fadeInRight } from '../config/animationVariants';

interface DownloadCTAProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function DownloadCTA({ onOpenQrModal, onOpenIosModal }: DownloadCTAProps) {
  const playStoreUrl = PLAY_STORE_URL;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="bg-white text-slate-900 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-xl shadow-emerald-950/[0.03] relative overflow-hidden border border-black/[0.08]">
          
          {/* Subtle Ambient Decorative Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/[0.04] rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Copy & CTAs (7 Cols) */}
            <motion.div {...fadeInLeft} className="lg:col-span-7 text-left flex flex-col gap-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
                <span>Start Today For Free</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
                Give Your Companion the Organized Care They Deserve
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Download Pet Horizon today. Track feedings, manage medications, and coordinate your family care team effortlessly.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <GooglePlayBadge href={playStoreUrl} className="px-5 py-3 rounded-full shadow-md" />
                <AppStoreBadge onClick={onOpenIosModal} className="px-5 py-3 rounded-full shadow-md" />
                {onOpenQrModal && (
                  <QrScanButton onClick={onOpenQrModal} className="px-4 py-3 rounded-full shadow-sm bg-[#FAF8F5] text-slate-800 hover:bg-slate-100 border border-black/[0.08]" />
                )}
              </div>

              {/* Reassurances */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" /> Free to download
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" /> No intrusive ads
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" /> Secure household cloud sync
                </span>
              </div>

            </motion.div>

            {/* Visual Mascot Showcase (5 Cols) */}
            <motion.div {...fadeInRight} className="lg:col-span-5 flex justify-center items-center">
              <div className="relative">
                {/* 3D Cute Pets Showcase Card with gentle float */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-64 sm:w-72 rounded-3xl overflow-hidden shadow-lg border border-black/[0.08] bg-[#FAF8F5] p-3 relative group"
                >
                  <div className="rounded-2xl overflow-hidden bg-white">
                    <img
                      src="/cute-3d-pets.webp"
                      alt="Pet Horizon 3D Mascot Companions - Golden Retriever Puppy and Fluffy Kitten"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                  <div className="pt-3 pb-1 text-center">
                    <p className="text-xs font-bold text-slate-800">
                      Co-manage all your pets in harmony
                    </p>
                    <div className="flex items-center justify-center gap-1.5 mt-1.5 text-[11px] font-semibold text-slate-600">
                      <span className="text-amber-500">★★★★★</span>
                      <span className="font-bold text-slate-900">Rated 5.0 on Google Play</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
