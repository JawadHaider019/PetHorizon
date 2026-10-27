import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, Check, CheckCircle2, Clock } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

import { staggerCard } from '../../config/animationVariants';

export default function BentoClinicalCard() {
  const [medTaken, setMedTaken] = useState(true);

  const handleToggleMed = (e: React.MouseEvent) => {
    const nextState = !medTaken;
    setMedTaken(nextState);
    if (nextState) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#8B5CF6', '#A78BFA', '#10B981', '#3B82F6']
      });
    }
  };

  return (
    <motion.div
      {...staggerCard(2, 'up')}
      transition={{ duration: 0.4, delay: 0.12 }}
      className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
    >
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2.5 sm:px-3 py-1 rounded-full border border-purple-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
            03 &bull; Clinical Care
          </span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shadow-2xs group-hover:bg-purple-100/80 transition-colors duration-200 shrink-0">
            <Pill className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-purple-900 transition-colors min-h-[52px] flex items-center">
          Never Double-Dose or Miss a Med
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
          Smart prescription schedules, tap-to-verify confirmations, and automated refill tracking so nobody ever guesses.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Dose confirmations</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Low-stock refill alerts</span>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
        <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 h-[116px] flex flex-col justify-between group-hover:bg-purple-50/20 group-hover:border-purple-200/60 transition-colors duration-200">
          <div className="flex items-center justify-between text-xs">
            <div className="truncate pr-1">
              <span className="font-bold text-slate-900 block text-xs truncate">Heartgard Plus (Monthly)</span>
              <span className="text-[10px] text-slate-500 truncate block">1 Chewable &bull; Luna &bull; With meal</span>
            </div>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 transition-colors ${
              medTaken
                ? 'text-emerald-800 bg-emerald-100/90 border-emerald-300'
                : 'text-purple-800 bg-purple-50 border-purple-200'
            }`}>
              {medTaken ? 'Verified (8 AM)' : '8:00 AM Today'}
            </span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200/70 flex items-center justify-between text-[11px] text-slate-600 shadow-2xs">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap truncate">
              <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Stock: 5 doses left
            </span>
            <span className="text-purple-700 font-bold font-mono text-[10px] whitespace-nowrap shrink-0">Due in 5 mos</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleMed}
          className="w-full h-11 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
        >
          <CheckCircle2 className={`w-4 h-4 shrink-0 transition-transform duration-200 ${medTaken ? 'scale-110' : 'text-purple-300'}`} />
          <span className="truncate">{medTaken ? '✓ Dose Administered' : 'Confirm Dose Administered'}</span>
        </button>
      </div>
    </motion.div>
  );
}
