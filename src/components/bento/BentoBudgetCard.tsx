import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Check, Plus, CheckCircle2 } from 'lucide-react';
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
        colors: ['#F59E0B', '#D97706', '#166534', '#10B981']
      });
    }
  };

  return (
    <motion.div
      {...staggerCard(3, 'right')}
      className="w-full h-full bg-white rounded-[2.5rem] p-6 sm:p-7 border border-black/[0.08] shadow-sm hover:shadow-xl hover:border-black/[0.14] flex flex-col justify-between relative overflow-hidden group transition-all duration-300 text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/[0.03] rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] px-3 py-1 rounded-full border border-emerald-800/15 flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
            04 &bull; Care Budgeting &amp; Limits
          </span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500/[0.08] border border-amber-600/15 text-amber-900 flex items-center justify-center shadow-2xs group-hover:bg-amber-500/[0.12] transition-colors duration-200 shrink-0">
            <Wallet className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-[#17191C] tracking-tight leading-snug group-hover:text-[#166534] transition-colors min-h-[52px] flex items-center">
          Smart Care Expenses &amp; Limits
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
          Set monthly spending limits, categorize expenses across Food, Vet, and Grooming, and log receipts in real time.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-black/[0.05] text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Monthly spending limit</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Itemized receipt vault</span>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-black/[0.05] flex flex-col justify-end space-y-2.5 relative z-10">
        <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-black/[0.06] flex flex-col justify-between gap-2.5 group-hover:bg-[#F5F2EB]/60 transition-colors duration-200 shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-slate-500" />
                Monthly Spending Limit
              </span>
              <span className="font-mono text-slate-900 font-bold text-xs">
                {expenseLogged ? '$245.00' : '$210.00'} / $350
              </span>
            </div>

            {/* Visual Budget Meter */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: expenseLogged ? '70%' : '60%' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#166534] h-full rounded-full" 
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mt-1.5">
              <span>{expenseLogged ? '70% spent' : '60% spent'}</span>
              <span className="text-[#166534] font-bold">
                {expenseLogged ? '$105 left this month' : '$140 left this month'}
              </span>
            </div>
          </div>

          {/* Itemized Transactions Breakdown */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-black/[0.06] text-[11px] shadow-2xs">
              <div className="min-w-0 flex-1">
                <span className="font-bold text-slate-900 block truncate text-xs">Annual Vet Checkup &amp; Vaccines</span>
                <span className="text-[10px] text-slate-400 block truncate">Veterinary Care &bull; Verified</span>
              </div>
              <span className="font-mono font-bold text-slate-900 text-xs shrink-0">$110.00</span>
            </div>

            {expenseLogged && (
              <motion.div 
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between gap-2 bg-emerald-50/80 px-2.5 py-1.5 rounded-xl border border-emerald-200 text-[11px] shadow-2xs"
              >
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-emerald-950 block truncate text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#166534]" />
                    Spa Grooming &amp; Deshedding
                  </span>
                  <span className="text-[10px] text-emerald-800 block truncate">Grooming &bull; Just Logged</span>
                </div>
                <span className="font-mono font-bold text-emerald-950 text-xs shrink-0">+$35.00</span>
              </motion.div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleExpense}
          className="w-full h-11 px-4 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
        >
          <Plus className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{expenseLogged ? '✓ Grooming Logged ($35) · Tap to Reset' : '+ Quick-Log Expense ($35 Grooming)'}</span>
        </button>
      </div>
    </motion.div>
  );
}
