import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Pill, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  FileText,
  Share2,
  Clock,
  ArrowRight,
  Check
} from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';

export default function BentoFeatures() {
  const [activeSpecies, setActiveSpecies] = useState<'canine' | 'feline' | 'small' | 'avian'>('canine');
  const [medTaken, setMedTaken] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportedPass, setExportedPass] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    navigator.clipboard?.writeText('PH-8492');
    setCopiedCode(true);
    
    // Confetti burst from button position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { x, y },
      colors: ['#10B981', '#059669', '#34D399', '#F59E0B']
    });

    setTimeout(() => setCopiedCode(false), 2400);
  };

  const handleToggleMed = (e: React.MouseEvent) => {
    const nextState = !medTaken;
    setMedTaken(nextState);

    if (nextState) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { x, y },
        colors: ['#10B981', '#059669', '#6EE7B7', '#3B82F6']
      });
    }
  };

  const handleExportPass = (e: React.MouseEvent) => {
    if (isExporting || exportedPass) return;
    setIsExporting(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    setTimeout(() => {
      setIsExporting(false);
      setExportedPass(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#0284C7', '#38BDF8', '#10B981', '#F59E0B']
      });

      setTimeout(() => setExportedPass(false), 3000);
    }, 700);
  };

  const speciesData = {
    canine: { 
      name: 'Golden Retriever', 
      breed: 'Luna • 4 Yrs Old',
      weight: '28.4 kg', 
      calories: '1,120 kcal',
      gaugeWidth: '82%',
      feeding: '2x Daily Portions',
      focus: 'Joint support & cardio walks',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200/80',
      tag: 'Canine Companion'
    },
    feline: { 
      name: 'British Shorthair', 
      breed: 'Milo • Senior 8 Yrs',
      weight: '4.8 kg', 
      calories: '240 kcal',
      gaugeWidth: '45%',
      feeding: '3x Micro Portions',
      focus: 'Hydration & renal health',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200/80',
      tag: 'Feline Companion'
    },
    small: { 
      name: 'Holland Lop Rabbit', 
      breed: 'Boba • 2 Yrs Old',
      weight: '1.6 kg', 
      calories: 'Timothy Hay (Free)',
      gaugeWidth: '65%',
      feeding: 'Continuous Grazing',
      focus: 'Digestive motility roughage',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
      tag: 'Small Herbivore'
    },
    avian: { 
      name: 'Cockatiel Companion', 
      breed: 'Pip • 3 Yrs Old',
      weight: '92 g', 
      calories: '15 g Seed & Chop',
      gaugeWidth: '35%',
      feeding: 'Morning & Midday Chop',
      focus: 'Foraging enrichment & feathers',
      badgeColor: 'text-cyan-700 bg-cyan-50 border-cyan-200/80',
      tag: 'Avian Companion'
    }
  };

  return (
    <section id="why-pet-horizon" className="py-12 sm:py-20 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-200/80">
      {/* Anchor for backwards compatibility with any existing #features-bento links */}
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
            {/* Shimmering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-white/90 border border-emerald-200/80 mb-3 shadow-2xs backdrop-blur-xs relative overflow-hidden group">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow shrink-0" />
              <span>Why Pet Horizon</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Built for How Modern Families Actually Care for Pets
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2.5 font-normal leading-relaxed max-w-2xl mx-auto">
              From multi-caregiver households to clinical medication routines, see why thousands of pet parents choose Pet Horizon over scattered notes and chat threads.
            </p>
          </motion.div>
        </div>

        {/* 4-COLUMN HORIZONTAL DECK */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4 sm:gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5 items-stretch no-scrollbar px-1">
          
          {/* ========================================================
              PILLAR 1: Zero-Friction Co-Parenting (Household Sync)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3.5 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  01 &bull; Co-Parenting
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shadow-2xs group-hover:bg-emerald-100/80 transition-colors duration-200 shrink-0">
                  <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-900 transition-colors">
                One QR Code Connects Everyone
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                Invite partners, roommates, or sitters in 1 tap. Every meal, medication, and outdoor walk updates instantly across all devices.
              </p>

              {/* Feature Highlights: Eliminates empty space */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Instant QR link</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Live circle sync</span>
              </div>
            </div>

            {/* Dynamic Micro-Widget: Live Family Radar & Pass */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 space-y-2 group-hover:bg-emerald-50/20 group-hover:border-emerald-200/60 transition-colors duration-200">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Live Family Circle
                  </span>
                  <span className="text-emerald-700 font-mono font-semibold text-[10px] bg-white px-2 py-0.5 rounded-full border border-emerald-200/60 shadow-2xs whitespace-nowrap">
                    &lt;180ms sync
                  </span>
                </div>

                <div className="space-y-1 pt-0.5 text-[11px]">
                  <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition-colors shadow-2xs">
                    <div className="flex items-center gap-2 truncate">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                        S
                      </div>
                      <span className="font-bold text-slate-900">Sarah</span>
                      <span className="text-[9px] text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded font-medium">Owner</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-medium whitespace-nowrap">Walk logged</span>
                  </div>

                  <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition-colors shadow-2xs">
                    <div className="flex items-center gap-2 truncate">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                        M
                      </div>
                      <span className="font-bold text-slate-900">Michael</span>
                      <span className="text-[9px] text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded font-medium">Family</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Meal fed</span>
                  </div>
                </div>
              </div>

              {/* Action Button with Confetti */}
              <button
                type="button"
                onClick={handleCopyCode}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-emerald-600/30 active:scale-[0.97]"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCode ? 'Invitation Code Copied!' : 'Share Household Pass'}</span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              PILLAR 2: Clinical Dose Precision
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3.5 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2.5 sm:px-3 py-1 rounded-full border border-purple-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  02 &bull; Clinical Care
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shadow-2xs group-hover:bg-purple-100/80 transition-colors duration-200 shrink-0">
                  <Pill className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-purple-900 transition-colors">
                Never Double-Dose or Miss a Med
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                Smart prescription schedules, tap-to-verify confirmations, and automated refill tracking so nobody ever guesses.
              </p>

              {/* Feature Highlights: Eliminates empty space */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Custom dosages</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Refill tracking</span>
              </div>
            </div>

            {/* Micro-Preview: Interactive Dose Button with Confetti & Toggle */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 space-y-2 group-hover:bg-purple-50/20 group-hover:border-purple-200/60 transition-colors duration-200">
                <div className="flex items-center justify-between text-xs">
                  <div className="truncate pr-1">
                    <span className="font-bold text-slate-900 block text-xs truncate">Heartgard Plus (Monthly)</span>
                    <span className="text-[10px] text-slate-500 truncate block">68 mcg Chewable &bull; Luna</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200/60 whitespace-nowrap shrink-0">
                    8:00 AM Today
                  </span>
                </div>

                {/* Interactive Dose Toggle Button */}
                <button
                  type="button"
                  onClick={handleToggleMed}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.97] ${
                    medTaken
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 transition-transform duration-200 ${medTaken ? 'text-white scale-110' : 'text-slate-400'}`} />
                  <span>{medTaken ? 'Administered & Verified' : 'Tap to Confirm Dose'}</span>
                </button>
              </div>

              {/* Refill Status Bar */}
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600 shadow-2xs">
                <span className="flex items-center gap-1.5 font-medium whitespace-nowrap truncate">
                  <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Refill: 5 doses left
                </span>
                <span className="text-emerald-700 font-bold font-mono text-[10px] whitespace-nowrap shrink-0">Due in 5 mos</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              PILLAR 3: Multi-Species Intelligence
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3.5 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 sm:px-3 py-1 rounded-full border border-amber-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  03 &bull; Multi-Species
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center shadow-2xs group-hover:bg-amber-100/80 transition-colors duration-200 shrink-0">
                  <Activity className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors">
                Tailored for Every Companion
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                Dogs, cats, rabbits, or birds—each profile adapts nutritional guidelines, weight baselines, and care protocols.
              </p>

              {/* Feature Highlights: Eliminates empty space */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Multi-pet profiles</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Caloric baselines</span>
              </div>
            </div>

            {/* Micro-Preview: Interactive Species Switcher Tabs */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              {/* 4 Interactive Species Tabs */}
              <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl relative">
                {(['canine', 'feline', 'small', 'avian'] as const).map((key) => {
                  const labels = { canine: 'Dog', feline: 'Cat', small: 'Rabbit', avian: 'Bird' };
                  const isSelected = activeSpecies === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveSpecies(key)}
                      className={`relative py-1.5 text-[11px] font-bold rounded-lg transition-colors cursor-pointer z-10 ${
                        isSelected ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="whySpeciesTabGlow"
                          className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      {labels[key]}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Animated Pet Profile Snapshot (Cleaned and balanced metrics) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecies}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 text-xs space-y-2 group-hover:bg-amber-50/20 group-hover:border-amber-200/60 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/70">
                    <div className="truncate pr-1">
                      <span className="font-bold text-slate-900 block text-xs truncate">{speciesData[activeSpecies].name}</span>
                      <span className="text-[10px] text-slate-500 truncate block">{speciesData[activeSpecies].breed}</span>
                    </div>
                    <span className="font-mono text-emerald-800 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 whitespace-nowrap shrink-0">
                      {speciesData[activeSpecies].weight}
                    </span>
                  </div>

                  {/* Progress Gauge */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mb-1">
                      <span>Daily Plan: <strong className="text-slate-800">{speciesData[activeSpecies].calories}</strong></span>
                      <span className="text-amber-700 font-bold">{speciesData[activeSpecies].feeding}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: speciesData[activeSpecies].gaugeWidth }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-amber-500 h-full rounded-full" 
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-600 font-medium pt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{speciesData[activeSpecies].focus}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ========================================================
              PILLAR 4: Vet-Ready Medical Records (Clinical Export)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 flex flex-col justify-between relative overflow-hidden group transition-all duration-200 text-left cursor-default"
          >
            <div className="relative z-10">
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-3.5 gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 sm:px-3 py-1 rounded-full border border-sky-200/80 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  04 &bull; Vet-Ready
                </span>
                
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center shadow-2xs group-hover:bg-sky-100/80 transition-colors duration-200 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-sky-900 transition-colors">
                1-Tap Vet Reports &amp; Records
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                Vaccine certificates, weight records, and allergy alerts formatted and exportable for any clinic or emergency ER.
              </p>

              {/* Feature Highlights: Eliminates empty space */}
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100/90 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600 shrink-0" /> 1-tap PDF pass</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600 shrink-0" /> Emergency ER ready</span>
              </div>
            </div>

            {/* Micro-Preview: Verified Digital Clinic Pass */}
            <div className="mt-4 pt-3.5 border-t border-slate-100/90 flex flex-col justify-end space-y-2.5 relative z-10">
              <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 space-y-2 group-hover:bg-sky-50/20 group-hover:border-sky-200/60 transition-colors duration-200 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 truncate">
                    <FileText className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span>DHPP Booster Pass</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200/60 whitespace-nowrap shrink-0">
                    100% Valid
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                  <span className="truncate">Dr. Henderson Hospital</span>
                  <span className="font-mono text-slate-600 font-bold whitespace-nowrap shrink-0">#4829</span>
                </div>
              </div>

              {/* Export Pass Action Button */}
              <button
                type="button"
                onClick={handleExportPass}
                disabled={isExporting}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-slate-800/25 active:scale-[0.97]"
              >
                {isExporting ? (
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Share2 className="w-3.5 h-3.5 text-sky-400" />
                )}
                <span>{isExporting ? 'Generating PDF...' : exportedPass ? 'Clinical Summary Ready!' : 'Export Clinical Summary'}</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Mobile Swipe Hint Bar */}
        <div className="flex md:hidden items-center justify-between mt-3 px-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-bold text-emerald-800 text-[11px] uppercase tracking-wider">
            <span>Swipe 4 reasons</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse text-emerald-700" />
          </span>
          <span className="text-[11px] font-mono text-slate-400">4 Pillars &bull; Swipe Left</span>
        </div>

      </div>
    </section>
  );
}
