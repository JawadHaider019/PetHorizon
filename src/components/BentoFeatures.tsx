import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Users, 
  Pill, 
  Wallet,
  CheckCircle2, 
  Copy, 
  Clock, 
  ArrowRight, 
  Check,
  Plus
} from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

export default function BentoFeatures() {
  const [scheduleDone, setScheduleDone] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [medTaken, setMedTaken] = useState(true);
  const [expenseLogged, setExpenseLogged] = useState(false);

  // Confetti trigger helper
  const triggerConfetti = (e: React.MouseEvent, colors: string[]) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors
    });
  };

  const handleToggleSchedule = (e: React.MouseEvent) => {
    const next = !scheduleDone;
    setScheduleDone(next);
    if (next) {
      triggerConfetti(e, ['#10B981', '#059669', '#34D399', '#F59E0B']);
    }
  };

  const handleCopyCode = (e: React.MouseEvent) => {
    navigator.clipboard?.writeText('A8K2P9');
    setCopiedCode(true);
    triggerConfetti(e, ['#0D9488', '#14B8A6', '#10B981', '#F59E0B']);
    setTimeout(() => setCopiedCode(false), 2400);
  };

  const handleToggleMed = (e: React.MouseEvent) => {
    const nextState = !medTaken;
    setMedTaken(nextState);
    if (nextState) {
      triggerConfetti(e, ['#8B5CF6', '#A78BFA', '#10B981', '#3B82F6']);
    }
  };

  const handleToggleExpense = (e: React.MouseEvent) => {
    const next = !expenseLogged;
    setExpenseLogged(next);
    if (next) {
      triggerConfetti(e, ['#F59E0B', '#D97706', '#10B981', '#3B82F6']);
    }
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-200/80">
      {/* Anchor for backwards compatibility with any existing #why-pet-horizon and #features-bento links */}
      <div id="why-pet-horizon" className="absolute -top-20 pointer-events-none" />
      <div id="features-bento" className="absolute -top-20 pointer-events-none" />

      {/* Subtle Static Background Ambience */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-400/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header with shimmering badge */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-white border border-emerald-200/80 mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>How Pet Horizon Works</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              4 Native Care Modules. Zero Guesswork.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2.5 font-normal leading-relaxed max-w-2xl mx-auto">
              Every feature below is built genuinely into the Pet Horizon mobile app. From daily feeding schedules to household QR sync and budget tracking, see how our system keeps your pets thriving.
            </p>
          </motion.div>
        </div>

        {/* 4-COLUMN HORIZONTAL DECK */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4 sm:gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5 items-stretch no-scrollbar px-1">
          
          {/* ========================================================
              PILLAR 1: Care Schedules & 1-Tap Done Logging
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10 flex flex-col flex-1">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  01 &bull; Care Routines
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shadow-2xs group-hover:bg-emerald-100/80 transition-colors duration-200 shrink-0">
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-900 transition-colors min-h-[52px] flex items-center">
                Precision Feeding &amp; Daily Alarms
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
                Set cup portions, scheduled meal hours, and walk timers. Tap &ldquo;Done&rdquo; or &ldquo;Skip&rdquo; directly on your today dashboard.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 1-tap Done &amp; Skip</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Push routine alarms</span>
              </div>
            </div>

            {/* Dynamic Micro-Widget: Unified Height Container + Bottom Button */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 h-[116px] flex flex-col justify-between group-hover:bg-emerald-50/20 group-hover:border-emerald-200/60 transition-colors duration-200">
                <div className="flex items-center justify-between text-xs">
                  <div className="truncate pr-1">
                    <span className="font-bold text-slate-900 block text-xs truncate">Breakfast (2 cups Kibble)</span>
                    <span className="text-[10px] text-slate-500 truncate block">Zozo Bulldog &bull; Morning Routine</span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 transition-colors ${
                    scheduleDone
                      ? 'text-emerald-800 bg-emerald-100/90 border-emerald-300'
                      : 'text-amber-800 bg-amber-50 border-amber-200'
                  }`}>
                    {scheduleDone ? 'Done (8:02 AM)' : '8:00 AM Today'}
                  </span>
                </div>

                <div className="bg-white p-2 rounded-xl border border-slate-200/70 flex items-center justify-between text-[11px] text-slate-600 shadow-2xs">
                  <span className="flex items-center gap-1.5 font-medium whitespace-nowrap truncate">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Evening Walk (30 mins)
                  </span>
                  <span className="text-emerald-700 font-bold font-mono text-[10px] whitespace-nowrap shrink-0">Due 6:00 PM</span>
                </div>
              </div>

              {/* Standardized Bottom Action Button */}
              <button
                type="button"
                onClick={handleToggleSchedule}
                className="w-full h-11 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
              >
                <CheckCircle2 className={`w-4 h-4 shrink-0 transition-transform duration-200 ${scheduleDone ? 'scale-110' : 'text-emerald-300'}`} />
                <span className="truncate">{scheduleDone ? '✓ Meal Completed (8:02 AM)' : 'Mark Breakfast as Done'}</span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              PILLAR 2: Family Hub (Household Sync & QR Code)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10 flex flex-col flex-1">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 sm:px-3 py-1 rounded-full border border-teal-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  02 &bull; Co-Parenting
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shadow-2xs group-hover:bg-teal-100/80 transition-colors duration-200 shrink-0">
                  <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-teal-900 transition-colors min-h-[52px] flex items-center">
                One QR Code Connects Everyone
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
                Invite partners, roommates, or sitters in 1 tap. Every meal, medication, and outdoor walk updates instantly across all devices.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-600 shrink-0" /> 6-digit code or QR</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-600 shrink-0" /> Admin &amp; Member roles</span>
              </div>
            </div>

            {/* Dynamic Micro-Widget: Unified Height Container + Bottom Button */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 h-[116px] flex flex-col justify-between group-hover:bg-teal-50/20 group-hover:border-teal-200/60 transition-colors duration-200">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                    </span>
                    Live Care Circle
                  </span>
                  <span className="text-teal-700 font-mono font-semibold text-[10px] bg-white px-2 py-0.5 rounded-full border border-teal-200/60 shadow-2xs whitespace-nowrap">
                    Instant sync
                  </span>
                </div>

                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center justify-between bg-white px-2 py-1 rounded-xl border border-slate-200/70 shadow-2xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[9px] flex items-center justify-center shrink-0">
                        S
                      </div>
                      <span className="font-bold text-slate-900 text-xs">Sarah</span>
                      <span className="text-[9px] text-emerald-800 bg-emerald-50 px-1 py-0.2 rounded font-medium">Admin</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-medium whitespace-nowrap">Walk (35m) logged</span>
                  </div>

                  <div className="flex items-center justify-between bg-white px-2 py-1 rounded-xl border border-slate-200/70 shadow-2xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <div className="w-4.5 h-4.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[9px] flex items-center justify-center shrink-0">
                        M
                      </div>
                      <span className="font-bold text-slate-900 text-xs">Michael</span>
                      <span className="text-[9px] text-slate-600 bg-slate-100 px-1 py-0.2 rounded font-medium">Member</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Breakfast fed</span>
                  </div>
                </div>
              </div>

              {/* Standardized Bottom Action Button */}
              <button
                type="button"
                onClick={handleCopyCode}
                className="w-full h-11 px-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
              >
                <Copy className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{copiedCode ? '✓ Code A8K2P9 Copied!' : 'Copy Code (A8K2P9)'}</span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              PILLAR 3: Clinical Dose Precision & Refill Tracking
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10 flex flex-col flex-1">
              {/* Pillar Number & Icon */}
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

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Dose confirmations</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Low-stock refill alerts</span>
              </div>
            </div>

            {/* Dynamic Micro-Widget: Unified Height Container + Bottom Button */}
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

              {/* Standardized Bottom Action Button */}
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

          {/* ========================================================
              PILLAR 4: Expense Tracker & Monthly Budget Management
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10 flex flex-col flex-1">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 sm:px-3 py-1 rounded-full border border-amber-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  04 &bull; Budgeting
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center shadow-2xs group-hover:bg-amber-100/80 transition-colors duration-200 shrink-0">
                  <Wallet className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors min-h-[52px] flex items-center">
                Smart Care Expenses &amp; Limits
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
                Set monthly spending limits, categorize expenses across Food, Vet, Grooming, and Medicine, and log costs on the go.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Monthly spending limit</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Food, Vet &amp; Med tags</span>
              </div>
            </div>

            {/* Dynamic Micro-Widget: Unified Height Container + Bottom Button */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 h-[116px] flex flex-col justify-between group-hover:bg-amber-50/20 group-hover:border-amber-200/60 transition-colors duration-200">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-slate-800">Monthly Budget</span>
                    <span className="font-mono text-slate-700 font-bold text-[11px]">
                      {expenseLogged ? '$245.00' : '$210.00'} / $350
                    </span>
                  </div>

                  {/* Dynamic Budget Progress Bar */}
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={false}
                      animate={{ width: expenseLogged ? '70%' : '60%' }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-amber-500 h-full rounded-full" 
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mt-1">
                    <span>{expenseLogged ? '70% spent' : '60% spent'}</span>
                    <span className="text-emerald-700 font-bold">
                      {expenseLogged ? '$105 left' : '$140 left'}
                    </span>
                  </div>
                </div>

                {/* Sample Logged Items */}
                <div className="flex items-center justify-between bg-white px-2 py-1 rounded-xl border border-slate-200/70 text-[11px] shadow-2xs">
                  <div className="truncate pr-1">
                    <span className="font-bold text-slate-900 block truncate text-xs">Annual Vet Checkup</span>
                    <span className="text-[9px] text-slate-400">Vaccines &amp; wellness</span>
                  </div>
                  <span className="font-mono font-bold text-slate-800 text-xs shrink-0">$110.00</span>
                </div>
              </div>

              {/* Standardized Bottom Action Button */}
              <button
                type="button"
                onClick={handleToggleExpense}
                className="w-full h-11 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
              >
                <Plus className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{expenseLogged ? '✓ Added to Budget ($35)' : '+ Quick-Log Expense ($35)'}</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Mobile Swipe Hint Bar */}
        <div className="flex md:hidden items-center justify-between mt-3 px-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-bold text-emerald-800 text-[11px] uppercase tracking-wider">
            <span>Swipe 4 modules</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse text-emerald-700" />
          </span>
          <span className="text-[11px] font-mono text-slate-400">4 Modules &bull; Swipe Left</span>
        </div>

      </div>
    </section>
  );
}
