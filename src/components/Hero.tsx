import { motion } from 'framer-motion';
import { Calendar, Users, Camera, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GooglePlayBadge, AppStoreBadge, QrScanButton } from './AppBadges';
import { PLAY_STORE_URL } from '../config/siteConfig';
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
      className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between overflow-hidden pt-[116px] sm:pt-[120px] lg:pt-[106px] pb-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5F2EB]"
    >
      {/* Subtle Luxury Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#17191C_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none -z-10" />

      {/* Ambient soft glow blooms */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-600/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-amber-400/[0.035] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Unified Responsive Container (Single DOM tree for Mobile-First SEO & LCP) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 sm:gap-2 lg:gap-6 xl:gap-10 items-center max-w-md lg:max-w-none mx-auto w-full">
          {/* LEFT / TOP COLUMN: Headline, Subtitle, Checkpoints & Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-1.5 sm:gap-2 lg:gap-3 xl:gap-3.5 lg:pr-2"
          >
            {/* Live Pill Badge with Explicit Brand Name */}
            <div className="inline-flex items-center gap-1.5 lg:gap-2 rounded-full border border-emerald-800/15 bg-emerald-50/90 px-3 lg:px-3.5 py-0.5 lg:py-1 shadow-2xs backdrop-blur-xs">
              <span className="flex h-1.5 w-1.5 lg:h-2 lg:w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 lg:h-2 lg:w-2 bg-emerald-600"></span>
              </span>
              <p className="text-[10px] lg:text-xs font-semibold text-emerald-950">
                <span className="font-extrabold text-[#166534]">Pet Horizon</span> • Smart Pet Care &amp;{' '}
                <span className="font-extrabold text-[#166534]">Family Hub</span>
              </p>
            </div>

            {/* Single Always-Visible Semantic H1 for Mobile-First & Desktop Crawlers */}
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[46px] font-black tracking-tight leading-[1.12]">
              <span className="sr-only">Pet Horizon – Smart Pet Care, Family Hub &amp; Daily Routine Tracker: </span>
              <span className="text-[#17191C]">Track. </span>
              <span className="text-[#166534]">Coordinate. </span>
              <span className="text-[#E67E22]">Cherish.</span>
            </h1>

            {/* Brand-Rich Subtitle */}
            <p className="text-[11px] sm:text-xs lg:text-sm xl:text-base text-slate-600 leading-snug lg:leading-relaxed px-2 lg:px-0 font-normal max-w-xl line-clamp-2 lg:line-clamp-none">
              <strong className="font-semibold text-slate-800">Pet Horizon</strong> is the complete daily routine tracker, medication alarm, and shared family care hub for dogs, cats, and every companion you love.
            </p>

            {/* Core Feature Quick Checkpoints (Desktop) */}
            <div className="hidden lg:grid grid-cols-2 gap-2 w-full max-w-lg pt-0.5">
              {[
                { icon: Calendar, text: 'Routine & medicine alarms' },
                { icon: Users, text: 'Family Hub & QR sharing' },
                { icon: Camera, text: 'Daily photo memories journal' },
                { icon: ShieldCheck, text: 'Dogs, Cats, Birds & Rabbits' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/80 border border-black/[0.05] rounded-xl px-2.5 py-1.5 shadow-2xs text-slate-700 font-semibold text-xs"
                >
                  <div className="w-4 h-4 rounded-full bg-emerald-800/10 text-[#166534] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#166534]" />
                  </div>
                  <span className="truncate">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA & Download Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-2.5 pt-0.5 lg:pt-1.5 pb-0.5 lg:pb-0">
              <GooglePlayBadge
                href={PLAY_STORE_URL}
                className="!px-3 !py-1 lg:!px-4 lg:!py-2 !rounded-full shadow-xs lg:shadow-sm !gap-1.5 lg:!gap-2.5 !h-8 lg:!h-auto text-[10px] lg:text-xs"
              />
              <AppStoreBadge
                onClick={onOpenIosModal}
                className="!px-3 !py-1 lg:!px-4 lg:!py-2 !rounded-full shadow-xs lg:shadow-sm !gap-1.5 lg:!gap-2.5 !h-8 lg:!h-auto text-[10px] lg:text-xs"
              />
              {onOpenQrModal && (
                <QrScanButton
                  onClick={onOpenQrModal}
                  className="hidden lg:inline-flex px-3.5 py-2 rounded-full shadow-2xs text-xs"
                />
              )}
            </div>

            {/* Social Proof Rating */}
            <div className="hidden lg:flex items-center gap-2.5 text-xs text-slate-500 font-medium pt-0.5">
              <span className="inline-flex items-center gap-1 text-[#166534] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Free to Start
              </span>
              <span>•</span>
              <span className="text-amber-500 font-bold">★★★★★ 5.0</span>
              <span>•</span>
              <span>1,200+ Pet Families</span>
            </div>
          </motion.div>

          {/* RIGHT / BOTTOM COLUMN: Single Mounted Phone Mockup Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center pt-1 lg:pt-0 w-full"
          >
            <HeroCenterpiece />
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker Docked at Bottom Edge */}
      <HeroMarquee />
    </section>
  );
}
