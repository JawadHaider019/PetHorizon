import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { PLAY_STORE_REVIEWS } from '../data/playStoreReviews';

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to form a seamless infinite loop from right to left
  const slidingReviews = [...PLAY_STORE_REVIEWS, ...PLAY_STORE_REVIEWS];

  return (
    <section id="reviews" className="py-12 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2 sm:mb-3">
            Google Play & Verified Tester Reviews
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Real Reviews from Pet Parents
          </h2>

          <p className="text-slate-600 text-xs sm:text-base mt-2 font-normal">
            Authentic experiences from pet families tracking feeding, medication, and veterinary logs on Android.
          </p>

          {/* Google Play Rating Strip with Direct Link */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-slate-200 shadow-2xs whitespace-nowrap shrink-0">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-slate-900">5.0 / 5.0</span>
              <span className="text-[11px] text-slate-400 font-medium">Google Play Store</span>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-all shadow-2xs group whitespace-nowrap shrink-0"
            >
              <span>View on Play Store</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW: Clean Touch-Snap Horizontal Carousel (<sm) */}
      <div className="sm:hidden px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 no-scrollbar pb-3">
          {PLAY_STORE_REVIEWS.map((item) => (
            <div
              key={item.id}
              className="w-[85vw] max-w-[320px] h-[230px] bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col shrink-0 snap-center"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold whitespace-nowrap shrink-0">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="mb-2">
                <span className="inline-block text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                  {item.tag}
                </span>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-4 flex-1">
                {item.review}
              </p>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full font-black text-[10px] flex items-center justify-center shrink-0 border ${item.avatarBg}`}>
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{item.petContext}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-1">Swipe to view more verified reviews</p>
      </div>

      {/* DESKTOP VIEW: Continuous Smooth Sliding Marquee (>=sm) */}
      <div 
        className="hidden sm:block relative w-full overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-5 w-max cursor-grab active:cursor-grabbing items-stretch"
          animate={isPaused ? { x: undefined } : { x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50,
              ease: 'linear'
            }
          }}
        >
          {slidingReviews.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[320px] h-[260px] sm:h-[270px] bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col shrink-0 select-text"
            >
              {/* Top Row: Stars + Tag */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold whitespace-nowrap shrink-0">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Feature Tag */}
              <div className="mb-2.5">
                <span className="inline-block text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                  {item.tag}
                </span>
              </div>

              {/* Review Text — clamped to 4 lines so every card is identical height */}
              <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-normal line-clamp-4 flex-1">
                {item.review}
              </p>

              {/* Reviewer Details Footer */}
              <div className="pt-3 mt-auto border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full font-black text-[11px] flex items-center justify-center shrink-0 border ${item.avatarBg}`}>
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded border ${
                      item.petContext.includes('TestMyBuild')
                        ? 'text-amber-800 bg-amber-50 border-amber-200/90'
                        : 'text-slate-600 bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    {item.petContext}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Endorsements Strip */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-5 sm:gap-10 text-xs font-semibold text-slate-500">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Genuine Play Store & Tester Reviews</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Zero Sponsored or Altered Ratings</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>5.0 Star Cumulative Rating</span>
        </div>
      </div>
    </section>
  );
}
