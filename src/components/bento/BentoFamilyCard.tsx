import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Check, Copy } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

export default function BentoFamilyCard() {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    navigator.clipboard?.writeText('A8K2P9');
    setCopiedCode(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#0D9488', '#14B8A6', '#10B981', '#F59E0B']
    });
    setTimeout(() => setCopiedCode(false), 2400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: 0.08 }}
      className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
    >
      <div className="relative z-10 flex flex-col flex-1">
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

        <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-600 shrink-0" /> Chore delegation &amp; swap</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-600 shrink-0" /> Anti-collision lock</span>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
        <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 min-h-[124px] flex flex-col justify-between group-hover:bg-teal-50/20 group-hover:border-teal-200/60 transition-colors duration-200">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              Delegation &amp; Lock
            </span>
            <span className="text-amber-800 font-mono font-semibold text-[10px] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60 shadow-2xs whitespace-nowrap">
              In-Progress Lock
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] mt-1.5">
            <div className="flex items-center justify-between bg-white px-2 py-1 rounded-xl border border-amber-200/70 shadow-2xs">
              <div className="flex items-center gap-1.5 truncate">
                <div className="w-4.5 h-4.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[9px] flex items-center justify-center shrink-0">
                  S
                </div>
                <span className="font-bold text-slate-900 text-xs">Sarah</span>
                <span className="text-[9px] text-amber-800 bg-amber-50 px-1 py-0.2 rounded font-medium">Feeding Now</span>
              </div>
              <span className="text-[10px] text-amber-700 font-semibold whitespace-nowrap">Locked (2m ago)</span>
            </div>

            <div className="flex items-center justify-between bg-white px-2 py-1 rounded-xl border border-slate-200/70 shadow-2xs">
              <div className="flex items-center gap-1.5 truncate">
                <div className="w-4.5 h-4.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[9px] flex items-center justify-center shrink-0">
                  M
                </div>
                <span className="font-bold text-slate-900 text-xs">Michael</span>
                <span className="text-[9px] text-blue-800 bg-blue-50 px-1 py-0.2 rounded font-medium">Lunch Walk</span>
              </div>
              <span className="text-[10px] text-teal-700 font-medium whitespace-nowrap">11:30 – 2:00 PM</span>
            </div>
          </div>
        </div>

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
  );
}
