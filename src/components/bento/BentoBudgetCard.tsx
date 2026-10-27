import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Check, Plus } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

import { staggerCard } from '../../config/animationVariants';

export default function BentoBudgetCard() {
  const [expenseLogged, setExpenseLogged] = useState(false);

  const handleToggleExpense = (e: React.MouseEvent) => {
    const next = !expenseLogged;
    setExpenseLogged(next);
    if (next) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#F59E0B', '#D97706', '#10B981', '#3B82F6']
      });
    }
  };

  return (
    <motion.div
      {...staggerCard(3, 'right')}
      className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-black/[0.06] shadow-sm hover:shadow-lg hover:border-black/[0.12] flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
    >
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 bg-slate-900/[0.04] px-3 py-1 rounded-full border border-black/[0.06] flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
            04 &bull; Budgeting
          </span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-950/[0.04] border border-emerald-900/10 text-emerald-900 flex items-center justify-center shadow-2xs group-hover:bg-emerald-950/[0.08] transition-colors duration-200 shrink-0">
            <Wallet className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-[#17191C] tracking-tight leading-snug group-hover:text-emerald-950 transition-colors min-h-[52px] flex items-center">
          Smart Care Expenses &amp; Limits
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
          Set monthly spending limits, categorize expenses across Food, Vet, Grooming, and Medicine, and log costs on the go.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-black/[0.05] text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" /> Monthly spending limit</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" /> Food, Vet &amp; Med tags</span>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-black/[0.05] flex flex-col justify-end space-y-2.5 relative z-10">
        <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-black/[0.05] flex flex-col justify-between gap-2.5 group-hover:bg-[#F5F2EB]/60 transition-colors duration-200">
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-slate-800">Monthly Budget</span>
              <span className="font-mono text-slate-800 font-bold text-[11px]">
                {expenseLogged ? '$245.00' : '$210.00'} / $350
              </span>
            </div>

            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: expenseLogged ? '70%' : '60%' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-emerald-700 h-full rounded-full" 
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mt-1">
              <span>{expenseLogged ? '70% spent' : '60% spent'}</span>
              <span className="text-emerald-800 font-bold">
                {expenseLogged ? '$105 left' : '$140 left'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-black/[0.06] text-[11px] shadow-2xs">
            <div className="min-w-0 flex-1">
              <span className="font-bold text-slate-900 block truncate text-xs">Annual Vet Checkup</span>
              <span className="text-[9px] text-slate-400 block truncate">Vaccines &amp; wellness</span>
            </div>
            <span className="font-mono font-bold text-slate-800 text-xs shrink-0">$110.00</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleExpense}
          className="w-full h-11 px-4 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
        >
          <Plus className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{expenseLogged ? '✓ Added to Budget ($35)' : '+ Quick-Log Expense ($35)'}</span>
        </button>
      </div>
    </motion.div>
  );
}
