import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, CheckCircle2, Clock } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

import { staggerCard } from '../../config/animationVariants';

export default function BentoCareCard() {
  const [scheduleDone, setScheduleDone] = useState(false);

  const handleToggleSchedule = (e: React.MouseEvent) => {
    const next = !scheduleDone;
    setScheduleDone(next);
    if (next) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#10B981', '#059669', '#34D399', '#F59E0B']
      });
    }
  };

  return (
    <motion.div
      {...staggerCard(0, 'left')}
      className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-black/[0.06] shadow-sm hover:shadow-lg hover:border-black/[0.12] flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
    >
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 bg-slate-900/[0.04] px-3 py-1 rounded-full border border-black/[0.06] flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
            01 &bull; Care Routines
          </span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-950/[0.04] border border-emerald-900/10 text-emerald-900 flex items-center justify-center shadow-2xs group-hover:bg-emerald-950/[0.08] transition-colors duration-200 shrink-0">
            <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-[#17191C] tracking-tight leading-snug group-hover:text-emerald-950 transition-colors min-h-[52px] flex items-center">
          Precision Feeding &amp; Daily Alarms
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
          Set cup portions, scheduled meal hours, and walk timers. Tap &ldquo;Done&rdquo; or &ldquo;Skip&rdquo; directly on your today dashboard.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-black/[0.05] text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" /> 1-tap Done &amp; Skip</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" /> Push routine alarms</span>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-black/[0.05] flex flex-col justify-end space-y-2.5 relative z-10">
        <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-black/[0.05] h-[116px] flex flex-col justify-between group-hover:bg-[#F5F2EB]/60 transition-colors duration-200">
          <div className="flex items-center justify-between text-xs">
            <div className="truncate pr-1">
              <span className="font-bold text-slate-900 block text-xs truncate">Breakfast (2 cups Kibble)</span>
              <span className="text-[10px] text-slate-500 truncate block">Zozo Bulldog &bull; Morning Routine</span>
            </div>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 transition-colors ${
              scheduleDone
                ? 'text-emerald-950 bg-emerald-950/10 border-emerald-900/20'
                : 'text-amber-900 bg-amber-500/10 border-amber-500/20'
            }`}>
              {scheduleDone ? 'Done (8:02 AM)' : '8:00 AM Today'}
            </span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-black/[0.06] flex items-center justify-between text-[11px] text-slate-600 shadow-2xs">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap truncate">
              <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" /> Evening Walk (30 mins)
            </span>
            <span className="text-emerald-800 font-bold font-mono text-[10px] whitespace-nowrap shrink-0">Due 6:00 PM</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleSchedule}
          className="w-full h-11 px-4 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
        >
          <CheckCircle2 className={`w-4 h-4 shrink-0 transition-transform duration-200 ${scheduleDone ? 'scale-110 text-emerald-400' : 'text-slate-400'}`} />
          <span className="truncate">{scheduleDone ? '✓ Meal Completed (8:02 AM)' : 'Mark Breakfast as Done'}</span>
        </button>
      </div>
    </motion.div>
  );
}
