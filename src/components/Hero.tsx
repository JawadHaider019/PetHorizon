import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Camera, 
  CheckCircle2, 
  ShieldCheck, 
  Pill,
  Clock
} from 'lucide-react';
import { GooglePlayBadge, AppStoreBadge, QrScanButton } from './AppBadges';
import PhoneFrame from './PhoneFrame';

interface HeroProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function Hero({ onOpenQrModal, onOpenIosModal }: HeroProps) {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';
  const [activeNotifIndex, setActiveNotifIndex] = useState(0);

  const LIVE_NOTIFICATIONS = [
    {
      title: 'Family Care Sync • Just now',
      message: 'Michael logged Breakfast (2 cups)',
      tag: 'Morning Routine',
      icon: Clock,
      color: 'text-amber-700',
      bg: 'bg-amber-100'
    },
    {
      title: 'Clinical Dosage • 08:00 AM',
      message: 'Heartgard Plus administered to Luna',
      tag: 'Verified',
      icon: Pill,
      color: 'text-emerald-700',
      bg: 'bg-emerald-100'
    },
    {
      title: 'Household Pass • 07:50 AM',
      message: 'Maya R. (Pet Sitter) scanned QR code',
      tag: 'Connected',
      icon: Users,
      color: 'text-emerald-700',
      bg: 'bg-emerald-100'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotifIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [LIVE_NOTIFICATIONS.length]);

  useEffect(() => {
    document.title = 'Pet Horizon – Smart Pet Care, Family Hub & Daily Routine Tracker';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Track pet care schedules, daily feeding routines, medication reminders, shared family caretaking via QR codes, and daily journal logs. Available now on Android.';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-40 sm:pb-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50/40"
    >
      {/* Background ambient light blobs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Authentic Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start gap-4 sm:gap-6"
          >
            {/* Top Badges Row: Live Google Play */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center space-x-2.5 bg-emerald-100/70 border border-emerald-200/80 text-emerald-900 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full w-fit shadow-2xs whitespace-nowrap shrink-0">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Live on Google Play Store
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              The Complete Daily Care &amp;{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Family Hub
              </span>{' '}
              For Your Pets
            </h1>

            {/* Subheadline: detailed and engaging copy with zero dashes */}
            <p className="sm:hidden text-sm text-slate-600 leading-relaxed font-normal max-w-md mx-auto">
              Track daily feedings, walk times, and medication alarms with real time alerts. Invite family members and pet sitters to coordinate care, log photo memories, and keep your companion healthy.
            </p>
            <p className="hidden sm:block text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Organize daily routines, medication alarms, and vet vaccinations. Invite family members and caretakers with QR codes to share care duties, log photo memories on your activity timeline, and keep pet expenses in check.
            </p>

            {/* Core Pillars Bullet Points: Shown on desktop/tablet to eliminate mobile clutter */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { icon: Calendar, text: 'Routine & medicine reminders' },
                { icon: Users, text: 'Family Hub & QR caretaker invites' },
                { icon: Camera, text: 'Daily photo journal & walk tracking' },
                { icon: ShieldCheck, text: 'Dogs, Cats, Birds, Rabbits & more' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons: Compact side-by-side on mobile, centered */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 sm:pt-3">
              <GooglePlayBadge href={playStoreUrl} className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-lg" />
              <AppStoreBadge onClick={onOpenIosModal} className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-lg" />
              {onOpenQrModal && (
                <div className="hidden sm:block">
                  <QrScanButton onClick={onOpenQrModal} className="px-4 py-3 rounded-2xl shadow-sm" />
                </div>
              )}
            </div>

            {/* Free Tier Callout: Shown on desktop/tablet */}
            <div className="hidden sm:flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free to Start
              </span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Sync across your household</span>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Desktop Phone Device Showcase (lg:flex) & Mobile Organic 3D Pets (<lg) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-1 pb-4 lg:py-0"
          >
            {/* MOBILE ONLY ORGANIC 3D PET SHOWCASE (<lg): Seamless borderless cutout with radial glow */}
            <div className="lg:hidden w-full flex flex-col items-center justify-center relative">
              {/* Soft ambient emerald radial glow behind characters */}
              <div className="w-72 h-72 bg-gradient-to-tr from-emerald-500/25 via-emerald-400/15 to-transparent rounded-full blur-3xl pointer-events-none absolute -top-4 -z-10" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex flex-col items-center"
              >
                {/* Transparent 3D Pixar Pet Characters Cutout (No box, no borders) */}
                <img
                  src="/3d-pets-transparent.png"
                  alt="Pet Horizon 3D Companions"
                  className="w-64 sm:w-72 h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
                />

                {/* Floating Live Sync Pill */}
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-emerald-200/90 shadow-md text-xs font-bold text-slate-800 -mt-3 relative z-10 whitespace-nowrap shrink-0">
                  <span className="flex h-2 w-2 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span className="whitespace-nowrap">Luna &amp; Milo • Synced Family Care</span>
                </div>
              </motion.div>
            </div>

            {/* DESKTOP ONLY PHONE DEVICE SHOWCASE (lg:flex) */}
            <div className="hidden lg:block relative">
              {/* Floating Phone Container */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Central Phone Mockup with direct screenshot fitting (Eager loaded for LCP) */}
                <PhoneFrame
                  src="/screenshots/home-screen.png"
                  alt="Pet Horizon Home Dashboard Screen"
                  frameClassName="w-[310px]"
                  priority={true}
                />

                {/* Simulated Live Notification Toast: Cycles through real care actions */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[88%] z-40 pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNotifIndex}
                      initial={{ opacity: 0, y: -14, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.94 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-200/90 flex items-center gap-2.5 text-left"
                    >
                      {(() => {
                        const item = LIVE_NOTIFICATIONS[activeNotifIndex];
                        const IconComponent = item.icon;
                        return (
                          <>
                            <div className={`w-7 h-7 rounded-lg ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">{item.title}</p>
                                <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded shrink-0">{item.tag}</span>
                              </div>
                              <p className="text-[11px] font-bold text-slate-900 truncate leading-snug">{item.message}</p>
                            </div>
                          </>
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* 3D Pet Companions (Clean Transparent Cutout on the bottom side) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 left-[84%] w-48 lg:w-52 pointer-events-none z-20 select-none drop-shadow-md"
              >
                <img
                  src="/3d-pets-transparent.png"
                  alt="Pet Horizon Puppy and Kitten Companions"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Floating Live Card: Daily Routine Task Status */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute right-[92%] bottom-12 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-emerald-100 flex items-center gap-3 w-[240px] text-left z-30"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Daily Routine</p>
                  <p className="text-xs font-bold text-slate-900">Breakfast (2 cups) • Done</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Logged at 11:20 AM</p>
                </div>
              </motion.div>

              {/* Floating Live Card: Luna Medication Reminder */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-14 right-[90%] bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-emerald-100 flex items-center gap-2.5 w-[195px] text-left z-30"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-emerald-800">Medication Taken</p>
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">Luna • Heartgard ✓</p>
                  <p className="text-[9px] text-slate-500 font-medium">Next due in 30 days</p>
                </div>
              </motion.div>

              {/* Floating Live Card: Family Hub Connection */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/4 -translate-y-1/2 left-[90%] bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-emerald-100 flex items-center gap-2.5 w-[210px] text-left z-30"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Family Hub</p>
                  <p className="text-xs font-bold text-slate-900">Care Team Synced</p>
                  <p className="text-[10px] text-slate-500">QR Code Joined</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}