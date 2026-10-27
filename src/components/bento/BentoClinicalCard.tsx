import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, QrCode, FileText, Check } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

import { staggerCard } from '../../config/animationVariants';

export default function BentoClinicalCard() {
  const [medTaken, setMedTaken] = useState(true);
  const [showVetMode, setShowVetMode] = useState(false);

  const handleToggleMed = (e: React.MouseEvent) => {
    e.stopPropagation();
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
        colors: ['#166534', '#10B981', '#34D399', '#F59E0B']
      });
    }
  };

  return (
    <motion.div
      {...staggerCard(2, 'up')}
      transition={{ duration: 0.4, delay: 0.12 }}
      className="w-full h-full bg-white rounded-[2.5rem] p-6 sm:p-7 border border-black/[0.08] shadow-sm hover:shadow-xl hover:border-black/[0.14] flex flex-col justify-between relative overflow-hidden group transition-all duration-300 text-left"
    >
      {/* Background seal watermark */}
      <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-emerald-700/[0.03] border-4 border-emerald-800/[0.04] flex items-center justify-center pointer-events-none -z-0">
        <ShieldCheck className="w-24 h-24 text-emerald-900/[0.06]" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] px-3 py-1 rounded-full border border-emerald-800/15 flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
            03 &bull; Digital Health Card &amp; Passport
          </span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-950/[0.04] border border-emerald-900/10 text-[#166534] flex items-center justify-center shadow-2xs group-hover:bg-emerald-950/[0.08] transition-colors duration-200 shrink-0">
            <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-[#17191C] tracking-tight leading-snug group-hover:text-[#166534] transition-colors min-h-[52px] flex items-center">
          Official Pet Health Card &amp; Vet Passport
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal min-h-[40px] line-clamp-2">
          Vaccine vault, microchip registration, allergy alerts, and an instant 1-tap &ldquo;Show to Vet&rdquo; mode for clinics and boarding.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-black/[0.05] text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Official Vaccine Vault</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#166534] shrink-0" /> Emergency Vet Mode</span>
        </div>
      </div>

      {/* Realistic Veterinary Passport Widget */}
      <div className="mt-4 pt-3.5 border-t border-black/[0.05] flex flex-col justify-end space-y-2.5 relative z-10">
        <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-black/[0.06] flex flex-col gap-2.5 group-hover:bg-[#F5F2EB]/60 transition-colors duration-200 shadow-2xs">
          <div className="flex items-center justify-between border-b border-black/[0.05] pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#166534]" />
              <div>
                <span className="font-bold text-slate-900 block text-xs leading-none">Luna &bull; Golden Retriever</span>
                <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">Microchip #985141002941</span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#166534] bg-emerald-900/[0.06] px-2 py-0.5 rounded-full border border-emerald-800/15">
              Verified Passport
            </span>
          </div>

          {/* Clinical Records List */}
          <div className="space-y-1.5 text-[11px]">
            {/* Record 1: DHPP Vaccine */}
            <div className="flex items-center justify-between gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-black/[0.06] shadow-2xs">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                <span className="font-bold text-slate-900 text-xs">DHPP &amp; Rabies</span>
              </div>
              <span className="text-[10px] text-emerald-800 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Valid til Nov 2026
              </span>
            </div>

            {/* Record 2: Heartgard Chewable */}
            <div className="flex items-center justify-between gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-black/[0.06] shadow-2xs">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="font-bold text-slate-900 text-xs">Heartgard Plus</span>
                <span className="text-[10px] text-slate-400">Monthly Chewable</span>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                medTaken 
                  ? 'text-emerald-800 bg-emerald-50 border-emerald-200' 
                  : 'text-amber-800 bg-amber-50 border-amber-200'
              }`}>
                {medTaken ? 'Given (8 AM)' : 'Due Today'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleToggleMed}
            className="h-10 px-3 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] whitespace-nowrap"
          >
            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${medTaken ? 'text-emerald-400' : 'text-slate-400'}`} />
            <span className="truncate">{medTaken ? 'Dose Logged' : 'Log Dose'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowVetMode(!showVetMode)}
            className="h-10 px-3 rounded-full bg-emerald-900/[0.08] hover:bg-emerald-900/[0.14] text-[#166534] font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer border border-emerald-800/15 active:scale-[0.97] whitespace-nowrap"
          >
            <QrCode className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{showVetMode ? '✓ Vet Mode Active' : 'Show to Vet Mode'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
