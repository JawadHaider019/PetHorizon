import { motion } from 'framer-motion';
import { Clock, Pill, Users } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';
import HeroLiveNotifications from './HeroLiveNotifications';

export default function HeroDesktopDevice() {
  return (
    <div className="hidden lg:block relative">
      {/* Floating Phone Container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <PhoneFrame
          src="/screenshots/home-screen.png"
          alt="Pet Horizon Home Dashboard Screen"
          frameClassName="w-[280px] lg:w-[295px] xl:w-[310px]"
          priority={true}
        />
        <HeroLiveNotifications />
      </motion.div>

      {/* 3D Pet Companions Cutout */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 xl:-bottom-8 left-[82%] xl:left-[84%] w-44 lg:w-48 xl:w-52 pointer-events-none z-20 select-none drop-shadow-md"
      >
        <img
          src="/3d-pets-transparent.png"
          alt="Pet Horizon Puppy and Kitten Companions"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Floating Live Card: Daily Routine Task Status */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute right-[90%] xl:right-[92%] bottom-10 xl:bottom-12 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-emerald-100 flex items-center gap-2.5 sm:gap-3 w-[220px] sm:w-[235px] xl:w-[240px] text-left z-30"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
          <Clock className="w-4 h-4 text-amber-700" />
        </div>
        <div className="truncate">
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Daily Routine</p>
          <p className="text-xs font-bold text-slate-900 truncate">Breakfast (2 cups) • Done</p>
          <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 whitespace-nowrap">Logged at 11:20 AM</p>
        </div>
      </motion.div>

      {/* Floating Live Card: Luna Medication Reminder */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-12 xl:top-14 right-[88%] xl:right-[90%] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-emerald-100 flex items-center gap-2 sm:gap-2.5 w-[185px] xl:w-[195px] text-left z-30"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
          <Pill className="w-4 h-4" />
        </div>
        <div className="truncate">
          <p className="text-[9px] font-black uppercase tracking-wider text-emerald-800 whitespace-nowrap">Medication Taken</p>
          <p className="text-[11px] font-bold text-slate-900 leading-tight truncate">Luna • Heartgard ✓</p>
          <p className="text-[9px] text-slate-500 font-medium whitespace-nowrap">Next due in 30 days</p>
        </div>
      </motion.div>

      {/* Floating Live Card: Family Hub Connection */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/4 -translate-y-1/2 left-[88%] xl:left-[90%] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-emerald-100 flex items-center gap-2 sm:gap-2.5 w-[195px] xl:w-[210px] text-left z-30"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
          <Users className="w-4 h-4" />
        </div>
        <div className="truncate">
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Family Hub</p>
          <p className="text-xs font-bold text-slate-900 truncate">Care Team Synced</p>
          <p className="text-[10px] text-slate-500 whitespace-nowrap">QR Code Joined</p>
        </div>
      </motion.div>
    </div>
  );
}
