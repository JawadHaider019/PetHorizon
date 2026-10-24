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
  Receipt,
  HeartPulse,
  Copy
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
      weightStatus: 'Optimal • ±0.2%',
      nutritionTarget: '1,120 kcal / day',
      feedingSchedule: '2x Daily Portions',
      hydrationTarget: '1,400 ml / day',
      lifeStage: 'Adult (4 Years Old)',
      protocol: 'Canine Preventive Routine',
      checks: [
        'Morning balanced meal logged',
        'Heartworm preventative verified',
        '2x Outdoor exercise sessions'
      ]
    },
    feline: { 
      name: 'British Shorthair', 
      classification: 'Feline Companion', 
      weight: '4.8 kg', 
      weightStatus: 'Stable • Normal Range',
      nutritionTarget: '240 kcal / day',
      feedingSchedule: '3x Micro Portions',
      hydrationTarget: '250 ml / day',
      lifeStage: 'Senior (8 Years Old)',
      protocol: 'Feline Metabolic Care',
      checks: [
        'Renal moisture diet administered',
        'Glucose & insulin check logged',
        'Fresh water fountain refilled'
      ]
    },
    small: { 
      name: 'Holland Lop Rabbit', 
      classification: 'Small Herbivore', 
      weight: '1,650 g', 
      weightStatus: 'Healthy Adult Baseline',
      nutritionTarget: 'Ad-Libitum Timothy Hay',
      feedingSchedule: 'Continuous Grazing',
      hydrationTarget: '160 ml / day',
      lifeStage: 'Young Adult (2 Years Old)',
      protocol: 'Herbivore Digestive Protocol',
      checks: [
        'Unlimited fresh hay replenished',
        'Daily leafy green salad portion',
        'Digestive motility monitoring'
      ]
    },
    avian: { 
      name: 'Cockatiel', 
      classification: 'Avian Companion', 
      weight: '92 g', 
      weightStatus: 'Target Baseline',
      nutritionTarget: '15 g Seed & Pellet Ratio',
      feedingSchedule: 'Morning & Midday Chop',
      hydrationTarget: '15 ml / day',
      lifeStage: 'Adult (3 Years Old)',
      protocol: 'Avian Wellness Protocol',
      checks: [
        'Formulated pellet mix refreshed',
        'Fresh vegetable chop served',
        'Enclosure misting & preening check'
      ]
    }
  };

  return (
    <section id="features-bento" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-200/80">
      {/* Brand ambient glows: Strict Forest Emerald and Navy palette */}
      <div className="absolute top-12 right-1/4 w-[520px] h-[520px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#1A2B4E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header: Mature & Architectural */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800 mb-3">
              Ecosystem Architecture
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Architected for Precision Care. Shared Across Your Household.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed">
              Pet Horizon replaces scattered sticky notes and missed alarms with real-time caretaker synchronization, clinical dosage tracking, and automated record-keeping.
            </p>
          </motion.div>
        </div>

        {/* BENTO GRID (12 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* CARD 1: Household QR Sync Hub (Spans 8 Columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-8 bg-gradient-to-br from-[#101C33] via-[#0D182E] to-[#144917] text-white rounded-3xl p-7 sm:p-9 border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Household Care Hub</span>
                </span>
                
                <span className="text-xs text-emerald-300/90 font-mono font-medium flex items-center gap-2 bg-black/25 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  3 Members Synchronized
                </span>
              </div>

              {/* Main Content Split: Headline + QR Pass Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                    One Dynamic QR Code Connects Every Household Caregiver
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 font-normal leading-relaxed">
                    Connect your partner, family members, or pet sitters with instant biometric deep-linking. Morning feedings, medication doses, and outdoor walks update across all phones in real-time.
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>Zero account registration hurdles for invited sitters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>Push alert dispatched when any care event is confirmed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>Granular permissions: Primary Owner, Family Member, Caregiver</span>
                    </div>
                  </div>
                </div>

                {/* Right Mini Widget: Dynamic Household Pass */}
                <div className="lg:col-span-5 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-emerald-400" /> Family Pass
                    </span>
                    <span className="text-[10px] text-emerald-300 font-mono">Pass Code: PH-8492</span>
                  </div>

                  <div className="py-3 flex items-center gap-3">
                    <div className="w-16 h-16 bg-white p-1 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&margin=2&data=https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                        alt="Dynamic QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left text-xs">
                      <p className="font-bold text-white">Scan with Camera</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">Instant access to Luna's feeding and medical schedule</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedCode ? 'Code Copied!' : 'Copy Invitation Code'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section: Live Care Log Feed (Completely fills the lower card) */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-300 font-semibold">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Live Care Log Feed</span>
                <span className="text-[11px] text-emerald-300 font-mono">Sync Latency: &lt; 180ms</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Member 1: Sarah */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:bg-white/[0.12]">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">Sarah M.</span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Owner</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">35-Min Trail Walk Completed</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> 07:45 AM &bull; 2.4 km logged
                  </p>
                </div>

                {/* Member 2: Michael */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:bg-white/[0.12]">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">Michael D.</span>
                    <span className="text-[10px] font-semibold text-slate-300 bg-white/10 px-2 py-0.5 rounded">Family</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">Morning Meal Confirmed (2 Cups)</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> 08:15 AM &bull; Kibble + Broth
                  </p>
                </div>

                {/* Member 3: Maya */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:bg-white/[0.12]">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white">Maya R.</span>
                    <span className="text-[10px] font-semibold text-amber-200 bg-[#E67E22]/30 px-2 py-0.5 rounded">Pet Sitter</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">Connected via QR Invite</p>
                  <p className="text-[10px] text-amber-300 font-mono mt-1.5 flex items-center gap-1">
                    <QrCode className="w-3 h-3 text-amber-300" /> Active Session &bull; Verified
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Clinical Dosage & Vaccine Alarms (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
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
                Automated reminders for heartworm preventatives, insulin administration, and DHPP vaccination intervals.
              </p>
            </div>

            {/* Block 1: Active Interactive Dose Widget */}
            <div className="my-4 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-slate-900">Heartgard Plus (Monthly)</span>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  8:00 AM Today
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2.5">Dose: 68 mcg Chewable &bull; Luna</p>

              <button
                type="button"
                onClick={() => setMedTaken(!medTaken)}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                  medTaken
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${medTaken ? 'text-white' : 'text-slate-400'}`} />
                <span>{medTaken ? 'Dose Administered & Verified' : 'Mark Dose Administered'}</span>
              </button>

              <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                <span>Inventory: 5 Doses Remaining</span>
                <span className="text-emerald-700 font-semibold">Refill: In 5 Months</span>
              </div>
            </div>

            {/* Block 2: Upcoming Booster Countdown (Fills previous empty gap) */}
            <div className="bg-[#101C33] text-white p-3.5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> DHPP Booster Vaccine
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">
                  Due in 14 Days
                </span>
              </div>
              <p className="text-[11px] text-slate-300">Dr. Henderson Veterinary Hospital &bull; Clinic ID: #4829</p>
              
              <div className="mt-2 w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5 text-right font-mono">Immunization coverage: 85% valid</p>
            </div>
          </motion.div>

          {/* CARD 3: Species-Specific Metric Engines (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
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
                Dedicated biometric units and nutrition formulas tailored specifically for canines, felines, small mammals, and avians.
              </p>

              {/* Minimalist Segmented Selector */}
              <div className="grid grid-cols-4 gap-1 mt-4 bg-slate-100 p-1 rounded-xl">
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
                      className={`py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-white text-slate-900 shadow-xs' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {labels[key]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Species Spec Sheet (Rich, Dense, No Empty Void) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecies}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-4 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80 space-y-3"
              >
                {/* Header row with Weight and Status */}
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

                {/* 2x2 Metric Grid */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px]">Daily Caloric Target</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].nutritionTarget}</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px]">Feeding Schedule</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].feedingSchedule}</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px]">Hydration Goal</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].hydrationTarget}</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px]">Life Stage</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].lifeStage}</span>
                  </div>
                </div>

                {/* Protocol Checklist items */}
                <div className="pt-2 border-t border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    {speciesData[activeSpecies].protocol}
                  </span>
                  {speciesData[activeSpecies].checks.map((chk, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{chk}</span>
                    </div>
                  ))}
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
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
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
                Chronicle outdoor walks, route milestones, and attach high-resolution memory logs to an unalterable activity timeline.
              </p>
            </div>

            {/* Block 1: Exercise Route Metrics Card */}
            <div className="mt-4 bg-[#F5F6F8] p-3.5 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Footprints className="w-3.5 h-3.5 text-emerald-700" /> Morning Trail Route
                </span>
                <span className="text-[10px] text-slate-500 font-mono">07:45 AM &bull; Bella</span>
              </div>

              {/* 3 Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 block font-medium">Distance</span>
                  <span className="text-xs font-black text-emerald-800">2.4 km</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 block font-medium">Duration</span>
                  <span className="text-xs font-black text-slate-800">35 min</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 block font-medium">Step Count</span>
                  <span className="text-xs font-black text-slate-800">4,820</span>
                </div>
              </div>
            </div>

            {/* Block 2: Memory Photo Entry (Fills previous empty gap) */}
            <div className="mt-3 bg-white p-3 rounded-2xl border border-slate-200/80 flex items-center gap-3 shadow-2xs">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-emerald-200 shadow-xs">
                <img src="/3d-pets-species.jpg" alt="Walk memory" className="w-full h-full object-cover" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-900 truncate">Pine Trail Photo Entry</p>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">2 Photos</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Hydration: 750ml &bull; Regular Bowel</p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-mono">Logged by Sarah &bull; Verified</p>
              </div>
            </div>

            {/* Block 3: Timeline Check-in Status */}
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-emerald-600" /> Vital Signs &amp; Mood: High Energy
              </span>
              <span className="text-emerald-700 font-bold text-[10px]">100% Complete</span>
            </div>
          </motion.div>

          {/* CARD 5: Expense Budget Tracking (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left transition-all hover:border-emerald-600/40 hover:shadow-md"
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

            {/* Block 1: Monthly Budget Overview */}
            <div className="mt-4 bg-[#F5F6F8] p-3.5 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-700">Monthly Budget Cap: $250.00</span>
                <span className="font-black text-slate-900 text-sm">$184.50 Used</span>
              </div>
              
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <div className="h-full bg-emerald-700 w-[50%]" title="Dietary & Food (50%)" />
                <div className="h-full bg-[#1A2B4E] w-[30%]" title="Veterinary Clinical (30%)" />
                <div className="h-full bg-[#E67E22] w-[20%]" title="Care & Supplies (20%)" />
              </div>

              <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-600 mt-2.5 font-bold text-center">
                <div className="bg-white py-1 rounded-md border border-slate-200/80">
                  <span className="text-emerald-700 block font-black">$92.25 (50%)</span>
                  <span className="text-slate-500 font-medium">Dietary</span>
                </div>
                <div className="bg-white py-1 rounded-md border border-slate-200/80">
                  <span className="text-[#1A2B4E] block font-black">$55.35 (30%)</span>
                  <span className="text-slate-500 font-medium">Vet Clinical</span>
                </div>
                <div className="bg-white py-1 rounded-md border border-slate-200/80">
                  <span className="text-[#E67E22] block font-black">$36.90 (20%)</span>
                  <span className="text-slate-500 font-medium">Care/Gear</span>
                </div>
              </div>
            </div>

            {/* Block 2: Recent Ledger Audit Items (Fills previous empty gap) */}
            <div className="mt-3 bg-white p-3 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-slate-100">
                <div className="flex items-center gap-1.5 truncate">
                  <Receipt className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-800 truncate">Purina Pro Sensitive 15kg</span>
                </div>
                <span className="font-bold text-slate-900 ml-2">$64.99</span>
              </div>
              <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-slate-100">
                <div className="flex items-center gap-1.5 truncate">
                  <Receipt className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-800 truncate">Annual Heartworm Test</span>
                </div>
                <span className="font-bold text-slate-900 ml-2">$85.00</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 truncate">
                  <Receipt className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-800 truncate">Dental Chews &amp; Harness</span>
                </div>
                <span className="font-bold text-slate-900 ml-2">$34.51</span>
              </div>
            </div>

            {/* Remaining Balance status */}
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-600">
              <span>Remaining this cycle:</span>
              <span className="text-emerald-700 font-bold">$65.50 (26% buffer)</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
