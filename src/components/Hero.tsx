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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50/40"
    >
      {/* Background ambient light blobs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Authentic Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left flex flex-col gap-6"
          >
            {/* Top Badges Row: Live Google Play */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2.5 bg-emerald-100/70 border border-emerald-200/80 text-emerald-900 px-4 py-1.5 rounded-full w-fit shadow-2xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Live on Google Play Store
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              The Complete Daily Care &amp;{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Family Hub
              </span>{' '}
              For Your Pets
            </h1>

            {/* Subheadline accurately describing real app features */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Organize daily routines, medication alarms, and vet vaccinations. Invite family members and caretakers with QR codes to share care duties, log photo memories on your activity timeline, and keep pet expenses in check.
            </p>

            {/* Core Pillars Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
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

            {/* CTA Buttons with Desktop QR and iOS modal trigger */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <GooglePlayBadge href={playStoreUrl} className="px-5 py-3 rounded-2xl shadow-lg" />
              <AppStoreBadge onClick={onOpenIosModal} className="px-5 py-3 rounded-2xl shadow-lg" />
              {onOpenQrModal && (
                <QrScanButton onClick={onOpenQrModal} className="px-4 py-3 rounded-2xl shadow-sm" />
              )}
            </div>

            {/* Free Tier Callout */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free to Start
              </span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Sync across your household</span>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Realistic App Device Frame & 3D Pet Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-8 pb-10 lg:py-0"
          >
            <div className="relative">
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
                  frameClassName="w-[280px] sm:w-[310px]"
                  priority={true}
                />

                {/* Simulated Live Notification Toast: Cycles through real care actions */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[86%] sm:w-[88%] z-40 pointer-events-none">
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
                className="hidden sm:block absolute -bottom-8 left-[80%] lg:left-[84%] w-40 sm:w-48 lg:w-52 pointer-events-none z-20 select-none drop-shadow-md"
              >
                <img
                  src="/3d-pets-transparent.png"
                  alt="Pet Horizon Puppy and Kitten Companions"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Floating Live Card: Daily Routine Task Status (Positioned completely outside on left, shown on tablet/desktop to keep mobile view clean) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="hidden sm:flex absolute right-[88%] lg:right-[92%] bottom-12 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-emerald-100 items-center gap-3 w-[220px] sm:w-[240px] text-left z-30"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">Daily Routine</p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900">Breakfast (2 cups) • Done</p>
                  <p className="text-[9px] sm:text-[10px] text-emerald-600 font-semibold mt-0.5">Logged at 11:20 AM</p>
                </div>
              </motion.div>

              {/* Floating Live Card: Luna Medication Reminder (Positioned safely to the left of the phone, clear of Navbar and screen toast) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="hidden md:flex absolute top-12 sm:top-14 sm:right-[86%] lg:right-[90%] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-emerald-100 items-center gap-2.5 w-[195px] text-left z-30"
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

              {/* Floating Live Card: Family Hub Connection (Positioned completely outside on upper right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute top-1/4 -translate-y-1/2 left-[86%] lg:left-[90%] bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-emerald-100 items-center gap-2.5 w-[200px] sm:w-[210px] text-left z-30"
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