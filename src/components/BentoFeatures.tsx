import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  QrCode, 
  Pill, 
  Camera, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  Activity,
  Check,
  ShieldCheck,
  Footprints,
  Copy,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function BentoFeatures() {
  const [activeSpecies, setActiveSpecies] = useState<'canine' | 'feline' | 'small' | 'avian'>('canine');
  const [medTaken, setMedTaken] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('PH-8492');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const speciesData = {
    canine: { 
      name: 'Golden Retriever', 
      classification: 'Canine Companion', 
      weight: '28.4 kg', 
      weightStatus: 'Optimal Baseline',
      nutritionTarget: '1,120 kcal / day',
      feedingSchedule: '2x Daily Portions',
      protocol: 'Canine Preventive Care',
      focus: 'Joint health & balanced cardio exercise'
    },
    feline: { 
      name: 'British Shorthair', 
      classification: 'Feline Companion', 
      weight: '4.8 kg', 
      weightStatus: 'Stable Weight',
      nutritionTarget: '240 kcal / day',
      feedingSchedule: '3x Micro Portions',
      protocol: 'Feline Metabolic Care',
      focus: 'Moisture-rich hydration & renal wellness'
    },
    small: { 
      name: 'Holland Lop Rabbit', 
      classification: 'Small Herbivore', 
      weight: '1,650 g', 
      weightStatus: 'Healthy Baseline',
      nutritionTarget: 'Unlimited Timothy Hay',
      feedingSchedule: 'Continuous Grazing',
      protocol: 'Herbivore Motility Protocol',
      focus: 'High-fiber roughage & digestive motility'
    },
    avian: { 
      name: 'Cockatiel', 
      classification: 'Avian Companion', 
      weight: '92 g', 
      weightStatus: 'Target Baseline',
      nutritionTarget: '15 g Seed & Chop',
      feedingSchedule: 'Morning & Midday Chop',
      protocol: 'Avian Wellness Protocol',
      focus: 'Foraging enrichment & feather health'
    }
  };

  return (
    <section id="features-bento" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-200/80">
      {/* Brand ambient glows */}
      <div className="absolute top-12 right-1/4 w-[520px] h-[520px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#1A2B4E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header: Balanced, Warm & Architectural */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 border border-emerald-200/60 mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Connected Care Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Architected for Precision Care. Shared Seamlessly Across Your Household.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed max-w-2xl mx-auto">
              Pet Horizon replaces scattered sticky notes and missed alarms with real-time caretaker synchronization, clinical dosage tracking, and automated record-keeping.
            </p>
          </motion.div>
        </div>

        {/* BENTO GRID: Streamlined, Spacious & High Impact */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-6 sm:gap-7 items-stretch no-scrollbar px-1">
          
          {/* CARD 1: Household QR Sync Hub (Spans 8 Columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="w-[88vw] sm:w-[84vw] md:w-auto shrink-0 snap-center lg:col-span-8 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-600/40 hover:shadow-md transition-all text-left"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Household Care Hub</span>
                </span>
                
                <span className="text-xs text-emerald-800 font-mono font-semibold flex items-center gap-2 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200/80 whitespace-nowrap shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  3 Members Connected
                </span>
              </div>

              {/* Main Content Split: Headline + Family Pass Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                    One Dynamic QR Code Connects Every Household Caregiver
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 font-normal leading-relaxed">
                    Connect your partner, family members, or pet sitters with instant biometric deep-linking. Morning feedings, medication doses, and outdoor walks update across all phones in real time.
                  </p>

                  <div className="mt-5 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-700" />
                      </div>
                      <span className="font-medium text-slate-700">Zero account registration hurdles for invited sitters</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-700" />
                      </div>
                      <span className="font-medium text-slate-700">Instant push notifications when any care event is logged</span>
                    </div>
                  </div>
                </div>

                {/* Right Hero Pass Card */}
                <div className="lg:col-span-5 bg-[#F8FAF9] border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-2xs">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200/80">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-emerald-700" /> Family Pass
                    </span>
                    <span className="text-[11px] text-emerald-800 font-mono font-bold bg-emerald-100/70 px-2 py-0.5 rounded">
                      PH-8492
                    </span>
                  </div>

                  <div className="py-4 flex items-center gap-4">
                    <div className="w-20 h-20 bg-white p-1.5 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 shadow-xs">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&margin=2&data=https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                        alt="Dynamic QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left text-xs">
                      <p className="font-bold text-slate-900 text-sm">Scan to Join</p>
                      <p className="text-slate-500 mt-1 text-[11px] leading-snug">Instant sync for feeding, medication &amp; walk updates</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode ? 'Invitation Code Copied!' : 'Copy Invitation Code'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Streamlined Caregiver Avatars Presence Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                Active Household Circle
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="inline-flex items-center gap-2 bg-[#F8FAF9] border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <strong className="text-slate-900">Sarah</strong>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500">Walk logged (07:45 AM)</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#F8FAF9] border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <strong className="text-slate-900">Michael</strong>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500">Breakfast confirmed</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#F8FAF9] border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <strong className="text-slate-900">Maya</strong>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-amber-700">Pet Sitter</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Clinical Dosage Alarms (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="w-[88vw] sm:w-[84vw] md:w-auto shrink-0 snap-center lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                  Prescription Management
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Pill className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Clinical Dosage Alarms
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Automated medication alarms with verified tap-to-complete logs for preventatives and treatments.
              </p>
            </div>

            {/* Interactive Hero Dose Card */}
            <div className="my-5 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Heartgard Plus</span>
                  <span className="text-[11px] text-slate-500">68 mcg Chewable &bull; Luna</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                  8:00 AM Today
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMedTaken(!medTaken)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                  medTaken
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${medTaken ? 'text-white' : 'text-slate-400'}`} />
                <span>{medTaken ? 'Dose Administered & Verified' : 'Tap to Confirm Dose'}</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Inventory: 5 doses left</span>
                <span className="text-emerald-700 font-semibold font-mono">Refill in 5 mos</span>
              </div>
            </div>

            {/* Upcoming Vaccine Booster Pill */}
            <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-slate-200/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-xs">DHPP Vaccine Booster</span>
                  <span className="text-[11px] text-slate-500">Dr. Henderson Hospital</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#E67E22] bg-amber-100 px-2 py-0.5 rounded">
                Due in 14d
              </span>
            </div>
          </motion.div>

          {/* CARD 3: Species-Specific Metric Engines (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="w-[88vw] sm:w-[84vw] md:w-auto shrink-0 snap-center lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                  Biometric Engine
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Multi-Species Calibrations
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Biometric thresholds and nutrition formulas tailored for canines, felines, small mammals, and avians.
              </p>

              {/* Segmented Selector */}
              <div className="grid grid-cols-4 gap-1 mt-4 bg-slate-100 p-1 rounded-xl relative">
                {(['canine', 'feline', 'small', 'avian'] as const).map((key) => {
                  const labels = {
                    canine: 'Canine',
                    feline: 'Feline',
                    small: 'Small',
                    avian: 'Avian'
                  };
                  const isSelected = activeSpecies === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveSpecies(key)}
                      className={`relative py-1.5 text-[11px] font-bold rounded-lg transition-colors cursor-pointer z-10 ${
                        isSelected 
                          ? 'text-slate-900' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeSpeciesTab"
                          className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      {labels[key]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Species Spec Sheet (Streamlined & Clean) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecies}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-4 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80 space-y-3"
              >
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/70">
                  <div>
                    <span className="font-bold text-slate-900 block">{speciesData[activeSpecies].name}</span>
                    <span className="text-[10px] text-slate-500">{speciesData[activeSpecies].classification}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-emerald-800 text-sm block">{speciesData[activeSpecies].weight}</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">{speciesData[activeSpecies].weightStatus}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px]">Daily Caloric Target</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].nutritionTarget}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px]">Feeding Schedule</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].feedingSchedule}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{speciesData[activeSpecies].focus}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CARD 4: Activity & Health Timeline (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="w-[88vw] sm:w-[84vw] md:w-auto shrink-0 snap-center lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                  Timeline &amp; Activity
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Camera className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Daily Milestone Journal
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Log outdoor walks, route milestones, and attach verified photos to an unalterable activity timeline.
              </p>
            </div>

            {/* Hero Visual Card: Photo + Walk Stats */}
            <div className="my-4 bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
              <div className="relative h-28 w-full bg-slate-100">
                <img 
                  src="/cute-3d-pets.jpg" 
                  alt="Walk memory entry" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Footprints className="w-3 h-3 text-emerald-400" /> Morning Trail Walk
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                  07:45 AM
                </div>
              </div>

              <div className="p-3 bg-[#F8FAF9] flex items-center justify-between text-center">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Distance</span>
                  <span className="text-xs font-black text-emerald-800">2.4 km</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Duration</span>
                  <span className="text-xs font-black text-slate-800">35 min</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Steps</span>
                  <span className="text-xs font-black text-slate-800">4,820</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Logged by Sarah
              </span>
              <span className="text-emerald-700 font-bold text-[10px]">Verified Milestone</span>
            </div>
          </motion.div>

          {/* CARD 5: Expense Budget Tracking (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -3 }}
            className="w-[88vw] sm:w-[84vw] md:w-auto shrink-0 snap-center lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                  Financial Auditing
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Pet Care Expenditure
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Categorize veterinary clinic receipts, dietary formulas, and medication expenses with automated monthly budgeting.
              </p>
            </div>

            {/* Clean Monthly Budget Overview */}
            <div className="my-4 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Monthly Cap: $250.00</span>
                <span className="font-black text-slate-900 text-sm">$184.50 Used</span>
              </div>
              
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-emerald-700" 
                  title="Dietary & Food (50%)" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '30%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="h-full bg-[#1A2B4E]" 
                  title="Veterinary Clinical (30%)" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '20%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="h-full bg-[#E67E22]" 
                  title="Care & Supplies (20%)" 
                />
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold text-center">
                <div className="bg-white py-1.5 rounded-lg border border-slate-200/70">
                  <span className="text-emerald-700 block font-black">$92.25</span>
                  <span className="text-slate-500 font-medium">Dietary</span>
                </div>
                <div className="bg-white py-1.5 rounded-lg border border-slate-200/70">
                  <span className="text-[#1A2B4E] block font-black">$55.35</span>
                  <span className="text-slate-500 font-medium">Clinical</span>
                </div>
                <div className="bg-white py-1.5 rounded-lg border border-slate-200/70">
                  <span className="text-[#E67E22] block font-black">$36.90</span>
                  <span className="text-slate-500 font-medium">Care/Gear</span>
                </div>
              </div>
            </div>

            {/* Single verified recent item banner */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-600">
              <span className="truncate">Remaining buffer: <strong className="text-emerald-700 font-bold">$65.50 (26%)</strong></span>
              <span className="text-slate-400 font-mono text-[10px] shrink-0">Cycle resets in 8d</span>
            </div>
          </motion.div>

        </div>

        {/* Mobile Swipe Hint Bar */}
        <div className="flex md:hidden items-center justify-between mt-3 px-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-bold text-emerald-800 text-[11px] uppercase tracking-wider">
            <span>Swipe features</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse text-emerald-700" />
          </span>
          <span className="text-[11px] font-mono text-slate-400">5 Capabilities &bull; Swipe Left</span>
        </div>

      </div>
    </section>
  );
}
