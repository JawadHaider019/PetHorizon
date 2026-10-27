import { 
  Calendar, 
  Pill, 
  Syringe, 
  QrCode, 
  Users, 
  Camera, 
  Footprints, 
  DollarSign 
} from 'lucide-react';

const ECOSYSTEM_MODULES = [
  { name: 'Daily Feeding Routines', icon: Calendar },
  { name: 'Smart Medication Alarms', icon: Pill },
  { name: 'Vaccination Schedules', icon: Syringe },
  { name: 'QR Caretaker Sharing', icon: QrCode },
  { name: 'Multi-Pet Household Sync', icon: Users },
  { name: 'Daily Photo Journal', icon: Camera },
  { name: 'Walk & Activity Logs', icon: Footprints },
  { name: 'Expense & Feed Audits', icon: DollarSign }
];

import { motion } from 'framer-motion';
import { fadeInUp } from '../config/animationVariants';

export default function Partners() {
  // Duplicate the list to ensure seamless looping scroll coverage
  const marqueeList = [...ECOSYSTEM_MODULES, ...ECOSYSTEM_MODULES, ...ECOSYSTEM_MODULES];

  return (
    <section className="py-7 bg-white/90 backdrop-blur-xs border-y border-slate-200/80 overflow-hidden relative select-none">
      
      {/* Dynamic isolated CSS Keyframe animation injection */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll 26s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Horizontal mask overlay to fade bounds */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6 mb-2.5 text-center">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black inline-flex items-center gap-2">
          <span>Complete Companion Care Modules Built-In</span>
        </span>
      </motion.div>

      <div className="relative w-full overflow-hidden mt-1">
        <div className="marquee-container">
          {marqueeList.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 mx-6 text-slate-600 hover:text-emerald-700 font-bold uppercase tracking-wider text-xs transition-colors duration-200 cursor-default whitespace-nowrap shrink-0"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                </div>
                <span className="whitespace-nowrap">{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
