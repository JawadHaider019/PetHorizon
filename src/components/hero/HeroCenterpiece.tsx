import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Pill, Users } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';

export default function HeroCenterpiece() {
  return (
    <div className="relative w-full flex items-center justify-center select-none py-1">
      
      {/* =========================================================================
          EVERSTORE-STYLE CONCENTRIC RADAR RIPPLE RINGS & AMBIENT BREATHING GLOW
          ========================================================================= */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[560px] xl:h-[560px] overflow-visible -z-10"
        aria-hidden="true"
      >
        {/* Soft emerald breathing center aura */}
        <div className="animate-hero-ambient-breathe absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.32)_0%,rgba(167,243,208,0.18)_42%,rgba(250,248,245,0)_72%)]" />

        {/* Concentric pulsing radar waves with staggered delays */}
        <div
          className="animate-hero-radius-pulse absolute inset-0 rounded-full border-2 border-emerald-500/50 shadow-[0_0_26px_rgba(52,211,153,0.25)]"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="animate-hero-radius-pulse absolute inset-0 rounded-full border-2 border-emerald-400/40 shadow-[0_0_24px_rgba(52,211,153,0.2)]"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="animate-hero-radius-pulse absolute inset-0 rounded-full border-2 border-teal-400/35 shadow-[0_0_24px_rgba(45,212,191,0.2)]"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="animate-hero-radius-pulse absolute inset-0 rounded-full border-2 border-emerald-400/30 shadow-[0_0_24px_rgba(52,211,153,0.15)]"
          style={{ animationDelay: '4.5s' }}
        />
      </div>

      {/* =========================================================================
          DESKTOP FLOATING FEATURE CARDS AROUND BIG PHONE
          ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block z-20">
        
        {/* CARD 1: TOP LEFT - Routine & Feeding Log */}
        <div className="absolute -left-16 xl:-left-20 top-[8%] pointer-events-auto">
          <div className="animate-hero-card-float" style={{ animationDelay: '0s' }}>
            <div className="w-[195px] xl:w-[215px] rounded-[20px] bg-white/95 backdrop-blur-md p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-black/[0.06] text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Daily Routine
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#166534] bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>
              <p className="text-[11.5px] font-extrabold text-[#17191C] leading-snug">
                Michael fed Luna
              </p>
              <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                <Clock className="w-2.5 h-2.5 text-emerald-700 shrink-0" />
                <span>Breakfast • 2 cups kibble</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: TOP RIGHT - Clinical Medication Reminder */}
        <div className="absolute -right-12 xl:-right-16 top-[12%] pointer-events-auto">
          <div className="animate-hero-card-float" style={{ animationDelay: '1.25s' }}>
            <div className="w-[195px] xl:w-[215px] rounded-[20px] bg-white/95 backdrop-blur-md p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-black/[0.06] text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Medication Due
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#166534] bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#166534]" />
                  Verified
                </span>
              </div>
              <p className="text-[11.5px] font-extrabold text-[#17191C] leading-snug">
                Heartgard Plus Chew
              </p>
              <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                <Pill className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                <span>Luna • 08:00 AM Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: BOTTOM LEFT - Household QR Pass */}
        <div className="absolute -left-12 xl:-left-16 bottom-[14%] pointer-events-auto">
          <div className="animate-hero-card-float" style={{ animationDelay: '0.65s' }}>
            <div className="w-[195px] xl:w-[215px] rounded-[20px] bg-white/95 backdrop-blur-md p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-black/[0.06] text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Caretaker Pass
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  QR Synced
                </span>
              </div>
              <p className="text-[11.5px] font-extrabold text-[#17191C] leading-snug">
                Maya R. (Pet Sitter)
              </p>
              <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                <Users className="w-2.5 h-2.5 text-[#166534] shrink-0" />
                <span>Full Access • Household Hub</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          BIG PHONE MOCKUP (HEROIC, VISIBLE & CLEAN)
          ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Subtle ground shadow under the phone */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-44 sm:w-56 lg:w-64 h-5 bg-emerald-950/15 blur-xl rounded-full pointer-events-none -z-10" />

        {/* Prominent, readable PhoneFrame */}
        <div className="transition-transform duration-300 hover:scale-[1.015]">
          <PhoneFrame
            src="/screenshots/home-screen.webp"
            alt="Pet Horizon Mobile App Interface"
            frameClassName="w-[195px] sm:w-[220px] lg:w-[265px] xl:w-[285px]"
            priority={true}
          />
        </div>

        {/* Mobile-Only Micro Badges attached to phone sides */}
        <div className="lg:hidden pointer-events-none absolute inset-0 z-30">
          {/* Top Left Micro Pill */}
          <div className="absolute -left-4 sm:-left-8 top-8 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-200 shadow-md flex items-center gap-1.5 text-[10px] font-bold text-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Luna fed 🐾</span>
          </div>

          {/* Bottom Left Micro Pill */}
          <div className="absolute -left-3 sm:-left-6 bottom-12 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-200 shadow-md flex items-center gap-1.5 text-[10px] font-bold text-slate-800">
            <CheckCircle2 className="w-3 h-3 text-[#166534]" />
            <span>Meds 08:00 AM</span>
          </div>
        </div>

        {/* 3D Pet Companions (Puppy and Kitten playfully peeking from bottom-right) */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-2 -right-8 sm:-right-12 lg:-right-14 xl:-right-16 w-26 sm:w-30 lg:w-36 xl:w-40 pointer-events-none z-30 select-none drop-shadow-xl"
        >
          <img
            src="/3d-pets-transparent.webp"
            alt="Pet Horizon Puppy and Kitten Companions"
            width={1024}
            height={1024}
            loading="eager"
            decoding="async"
            // @ts-ignore
            fetchPriority="high"
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>

    </div>
  );
}
