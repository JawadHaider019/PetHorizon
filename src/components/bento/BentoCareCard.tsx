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
      className="w-full bg-white rounded-[2.5rem] p-6 sm:p-8 border border-black/[0.08] shadow-sm hover:shadow-xl hover:border-black/[0.14] transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden group"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/[0.03] rounded-full blur-2xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 flex-1">
        {/* Left Column: Descriptive Content & Feature Tags (7 Cols) */}
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] px-3 py-1 rounded-full border border-emerald-800/15 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
                01 &bull; Core Care Routines
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#17191C] tracking-tight leading-snug mb-2">
              Precision Feeding &amp; Daily Alarms
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-5 max-w-md">
              Configure cup portions, scheduled meal hours, and walk timers. Tap &ldquo;Done&rdquo; or &ldquo;Skip&rdquo; directly on your today dashboard—synced immediately to every family phone.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-black/[0.04]">
                <Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> 1-Tap Done &amp; Skip
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-black/[0.04]">
                <Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Push Routine Chimes
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-black/[0.04]">
                <Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Cup Portions (KG/LBS)
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-black/[0.04]">
                <Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Multi-Pet Switcher
              </span>
            </div>
          </div>

          <div className="pt-5 mt-4 border-t border-black/[0.05]">
            <button
              type="button"
              onClick={handleToggleSchedule}
              className="w-full sm:w-auto h-11 px-6 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-[0.97]"
            >
              <CheckCircle2 className={`w-4 h-4 shrink-0 transition-transform duration-200 ${scheduleDone ? 'scale-110 text-emerald-400' : 'text-slate-400'}`} />
              <span>{scheduleDone ? '✓ Breakfast Marked as Done (8:02 AM)' : 'Mark Breakfast as Done'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Realistic Interactive App Schedule Widget (5 Cols) */}
        <div className="md:col-span-5 bg-[#FAF8F5] rounded-3xl p-4 sm:p-5 border border-black/[0.06] shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-2.5">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today&apos;s Schedule</p>
              <p className="text-xs font-bold text-slate-900">Zozo &bull; Bulldog (1 yr)</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-[#166534]/10 text-[#166534] px-2 py-0.5 rounded-full border border-[#166534]/20">
              {scheduleDone ? '3 of 3 (100%)' : '2 of 3 (67%)'}
            </span>
          </div>

          {/* Schedule Item 1: Breakfast */}
          <div className={`p-3 rounded-2xl border transition-all ${
            scheduleDone ? 'bg-emerald-50/70 border-emerald-200/80' : 'bg-white border-black/[0.06] shadow-2xs'
          }`}>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="font-bold text-slate-900 block text-xs">Breakfast (2 cups)</span>
                <span className="text-[10px] text-slate-500 block">Balanced Kibble Portion</span>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                scheduleDone
                  ? 'bg-[#166534] text-white border-[#166534]'
                  : 'text-amber-900 bg-amber-100 border-amber-200'
              }`}>
                {scheduleDone ? 'Done' : '8:00 AM'}
              </span>
            </div>
          </div>

          {/* Schedule Item 2: Evening Walk */}
          <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-xs truncate">Evening Walk (30 mins)</span>
                <span className="text-[10px] text-slate-500 block">Park Loop &bull; Maya R.</span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
              6:00 PM
            </span>
          </div>

          {/* Schedule Item 3: Clinical Antiemetic */}
          <div className="p-2.5 rounded-2xl bg-white/70 border border-black/[0.05] flex items-center justify-between text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Antiemetic (1 tablet)
            </span>
            <span className="text-[10px] font-mono text-emerald-800 font-bold">11:25 AM</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
