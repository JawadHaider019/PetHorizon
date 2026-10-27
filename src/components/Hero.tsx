import React from 'react';
import { motion } from 'framer-motion';
import HeroCenterpiece from './hero/HeroCenterpiece';
import HeroMarquee from './hero/HeroMarquee';

interface HeroProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function Hero({ onOpenQrModal, onOpenIosModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between overflow-hidden pt-[104px] sm:pt-[110px] lg:pt-[114px] pb-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5F2EB]"
    >
      {/* Subtle Luxury Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#17191C_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none -z-10" />

      {/* Ambient soft glow blooms */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-600/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-amber-400/[0.035] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* =========================================================================
          MAIN CENTERED CONTENT CONTAINER (FITS 100% IN VIEWPORT)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between items-center text-center py-1">
        
        {/* ULTRA-COMPACT TOP HEADER: Pill Badge, Punchy 3-Tone Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center gap-1 sm:gap-1.5 max-w-3xl mx-auto"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-800/15 bg-emerald-50/90 px-3.5 sm:px-4 py-0.5 sm:py-1 shadow-2xs backdrop-blur-xs">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <p className="text-[11px] sm:text-xs font-semibold text-emerald-950">
              Smart Pet Care • <span className="font-extrabold text-[#166534]">Family Hub &amp; Daily Routine Tracker</span>
            </p>
          </div>

          {/* 3-Tone Punchy Headline (Everystore Style) */}
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] xl:text-[46px] font-black tracking-tight leading-[1.12]">
            <span className="text-[#17191C]">Track. </span>
            <span className="text-[#166534]">Coordinate. </span>
            <span className="text-[#E67E22]">Cherish.</span>
          </h1>

          {/* Subtitle paragraph */}
          <p className="text-[11.5px] sm:text-xs lg:text-sm text-slate-600 max-w-md sm:max-w-xl mx-auto leading-relaxed font-normal px-2">
            Feedings, medication alarms, and shared family routines for Luna, Milo, and every companion you love.
          </p>
        </motion.div>

        {/* CENTERPIECE: 40-50% Larger Phone, Animated Radar Rings & Flanking Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className="w-full flex-1 flex items-center justify-center relative my-auto min-h-0"
        >
          <HeroCenterpiece
            onOpenQrModal={onOpenQrModal}
            onOpenIosModal={onOpenIosModal}
          />
        </motion.div>

      </div>

      {/* =========================================================================
          EVERSTORE-STYLE MARQUEE TICKER DOCKED AT BOTTOM EDGE
          ========================================================================= */}
      <HeroMarquee />

    </section>
  );
}