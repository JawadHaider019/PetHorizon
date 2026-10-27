import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import HeroPulseRings from './hero/HeroPulseRings';
import HeroLiveFloatingCards from './hero/HeroLiveFloatingCards';
import { GooglePlayBadge, AppStoreBadge, QrScanButton } from './AppBadges';
import { PLAY_STORE_URL } from '../config/siteConfig';

interface HeroProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function Hero({ onOpenQrModal, onOpenIosModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#FBF9F5] via-[#FBF9F5] to-[#F5F2EB]"
    >
      {/* Subtle Luxury Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none -z-10" />

      {/* Atmospheric Ambient Light Glows */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-[#125B46]/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#F8C152]/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#125B46]/[0.05] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Eyebrow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#FFF7E1] px-4 py-1.5 shadow-2xs mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-[#E8A020] animate-pulse" />
          <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
            Shared Pet Care &amp; Routine Tracker
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-xs font-semibold text-[#125B46]">Live on Android</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight text-[#111827] leading-[1.1] max-w-4xl mx-auto text-balance"
        >
          <span>Every Paw, Routine &amp; Memory.</span>
          <br />
          <span className="text-[#125B46]">One Family Record.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-balance"
        >
          Feeding times, medication alarms, walk tracking and vet records coordinated in one unified space—so nothing gets missed and nobody in the house has to ask.
        </motion.p>

        {/* CTA Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 pt-5 sm:pt-6"
        >
          <GooglePlayBadge href={PLAY_STORE_URL} className="px-5 py-2.5 rounded-full shadow-md" />
          <AppStoreBadge onClick={onOpenIosModal} className="px-5 py-2.5 rounded-full shadow-md" />
          {onOpenQrModal && (
            <div className="hidden sm:block">
              <QrScanButton onClick={onOpenQrModal} className="px-4 py-2.5 rounded-full shadow-sm" />
            </div>
          )}
        </motion.div>

        {/* Social Proof & Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-3.5 text-xs text-slate-500 font-medium"
        >
          <span className="inline-flex items-center gap-1.5 text-[#125B46] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#125B46]" /> 100% Free to Start
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-semibold text-slate-800">
            <span className="text-amber-500">★★★★★</span> 5.0 Rating (1,200+ Families)
          </span>
          <span>•</span>
          <span>Sync across your household</span>
        </motion.div>

        {/* THE GRAND PHONE STAGE */}
        <div className="relative mx-auto mt-10 sm:mt-14 w-full max-w-[420px] lg:max-w-[860px] flex items-center justify-center">
          {/* Concentric Pulsing Light Rings */}
          <HeroPulseRings />

          {/* 4 Orbiting Live-Status Cards (Desktop & Large Screens) */}
          <HeroLiveFloatingCards />

          {/* Central Mobile Mockup Device */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <PhoneFrame
              src="/screenshots/home-screen.webp"
              alt="Pet Horizon Smart Dashboard Screen"
              frameClassName="w-[260px] sm:w-[285px] lg:w-[305px] xl:w-[320px]"
              priority={true}
            />
          </motion.div>

          {/* 3D Pet Companion Cutout */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-2 sm:-bottom-4 left-[64%] sm:left-[66%] lg:left-[68%] w-36 sm:w-44 lg:w-48 pointer-events-none z-30 select-none drop-shadow-xl"
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
    </section>
  );
}