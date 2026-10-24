import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2, ExternalLink, MessageSquareHeart } from 'lucide-react';
import { PLAY_STORE_REVIEWS } from '../data/playStoreReviews';

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to form a seamless infinite loop from right to left
  const slidingReviews = [...PLAY_STORE_REVIEWS, ...PLAY_STORE_REVIEWS];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            <MessageSquareHeart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
            <span>Google Play Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Real Reviews from Pet Parents
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal max-w-2xl mx-auto">
            Honest feedback from pet owners who manage daily schedules, feeding routines, and veterinary records with Pet Horizon on Android.
          </p>

          {/* Google Play Rating Strip with Direct Link */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-xs">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-slate-900">5.0 / 5.0</span>
              <span className="text-xs text-slate-400 font-medium">on Google Play Store</span>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-all shadow-xs hover:shadow-sm group"
            >
              <span>View on Play Store</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Sliding Reviews Reel (Moves continuously Right to Left) */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Gradient Fades for Smooth Infinite Illusion */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={isPaused ? { x: undefined } : { x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 45,
              ease: 'linear'
            }
          }}
        >
          {slidingReviews.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[380px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between shrink-0 select-text"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Play Store</span>
                  </div>
                </div>

                {/* Feature Tag */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-bold text-slate-800 bg-slate-100/80 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                {/* Review Text without quotes */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {item.review}
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full font-black text-xs flex items-center justify-center shrink-0 border ${item.avatarBg}`}>
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                    {item.petContext}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Endorsements Strip */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>100% Genuine User Reviews from Google Play</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Zero Sponsored or Altered Ratings</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>5.0 Star Cumulative Rating</span>
        </div>
      </div>
    </section>
  );
}
