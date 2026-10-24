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
  ShieldCheck
} from 'lucide-react';

export default function BentoFeatures() {
  const [activeSpecies, setActiveSpecies] = useState<'canine' | 'feline' | 'small' | 'avian'>('canine');
  const [medTaken, setMedTaken] = useState(true);

  const speciesData = {
    canine: { 
      name: 'Golden Retriever', 
      classification: 'Canine Companion', 
      weight: '28.4 kg', 
      weightStatus: 'Optimal • ±0.2%',
      nutritionTarget: '1,120 kcal / day',
      regimen: '2x 40-Min Walks + 2 Cups Balanced Kibble', 
      protocol: 'Canine Preventive Care'
    },
    feline: { 
      name: 'British Shorthair', 
      classification: 'Feline Companion', 
      weight: '4.8 kg', 
      weightStatus: 'Stable • Normal Range',
      nutritionTarget: '240 kcal / day',
      regimen: 'Renal Moisture Formula + Insulin Monitoring', 
      protocol: 'Feline Metabolic Care'
    },
    small: { 
      name: 'Holland Lop Rabbit', 
      classification: 'Small Herbivore', 
      weight: '1,650 g', 
      weightStatus: 'Healthy Adult Weight',
      nutritionTarget: 'Unlimited Fiber + Greens',
      regimen: 'Timothy Hay Ad-Libitum + Daily Fiber Check', 
      protocol: 'Small Animal Digestive Care'
    },
    avian: { 
      name: 'Cockatiel', 
      classification: 'Avian Companion', 
      weight: '92 g', 
      weightStatus: 'Target Baseline',
      nutritionTarget: '15 g Seed & Pellet Ratio',
      regimen: 'Pellet Nutrition + Daily Enclosure Misting', 
      protocol: 'Avian Wellness Protocol'
    }
  };

  return (
    <section id="features-bento" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-200/80">
      {/* Brand ambient glows: Strict Forest Emerald and Navy palette */}
      <div className="absolute top-12 right-1/4 w-[520px] h-[520px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#1A2B4E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header: Mature, Confident, Architectural */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
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
            className="lg:col-span-8 bg-gradient-to-br from-[#101C33] via-[#0D182E] to-[#144917] text-white rounded-3xl p-7 sm:p-10 border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Radial Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Household Care Hub</span>
                </span>
                
                <span className="text-xs text-emerald-300/90 font-mono font-medium flex items-center gap-2 bg-black/25 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  3 Members Synchronized
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                One Dynamic QR Code Connects Every Household Caretaker
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-xl font-normal leading-relaxed">
                Connect your partner, family members, or pet sitters with instant biometric deep-linking. When morning feedings or evening medications are logged, every connected device updates synchronously.
              </p>
            </div>

            {/* Live Care Activity Feed (Clean, Clinical, Brand Palette) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3.5 text-xs text-slate-300 font-semibold">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Live Care Log Feed</span>
                <span className="text-[11px] text-emerald-300 font-mono">Sync Latency: &lt; 180ms</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Member 1: Sarah */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:bg-white/[0.12]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-white">Sarah M.</span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Owner</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">35-Min Trail Walk Completed</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> 07:45 AM
                  </p>
                </div>

                {/* Member 2: Michael */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:bg-white/[0.12]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-white">Michael D.</span>
                    <span className="text-[10px] font-semibold text-slate-300 bg-white/10 px-2 py-0.5 rounded">Family</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">Morning Meal Confirmed (2 Cups)</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> 08:15 AM
                  </p>
                </div>

                {/* Member 3: Maya */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:bg-white/[0.12]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-white">Maya R.</span>
                    <span className="text-[10px] font-semibold text-amber-200 bg-[#E67E22]/30 px-2 py-0.5 rounded">Pet Sitter</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">Connected via QR Invite</p>
                  <p className="text-[10px] text-amber-300 font-mono mt-1.5 flex items-center gap-1">
                    <QrCode className="w-3 h-3 text-amber-300" /> Active Session
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
              <div className="flex items-center justify-between mb-4">
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
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Automated reminders for heartworm preventatives, insulin administration, and DHPP vaccination intervals.
              </p>
            </div>

            {/* Interactive Clinical Pill Card */}
            <div className="mt-6 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-900">Heartgard Plus (Monthly)</span>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  8:00 AM
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">Dose: 68 mcg Chewable &bull; Luna</p>

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

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                <span>Inventory: 5 Doses Remaining</span>
                <span className="text-emerald-700 font-semibold">Refill: In 5 Months</span>
              </div>
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
              <div className="flex items-center justify-between mb-4">
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
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Dedicated biometric units and nutrition formulas tailored specifically for canines, felines, small mammals, and avians.
              </p>

              {/* Minimalist Segmented Selector (No emojis) */}
              <div className="grid grid-cols-4 gap-1 mt-5 bg-slate-100 p-1 rounded-xl">
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

            {/* Active Species Spec Sheet with Animated Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecies}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-6 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <div>
                    <span className="font-bold text-slate-900 block">{speciesData[activeSpecies].name}</span>
                    <span className="text-[10px] text-slate-500">{speciesData[activeSpecies].classification}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-emerald-800 text-sm block">{speciesData[activeSpecies].weight}</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">{speciesData[activeSpecies].weightStatus}</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/70 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Target Intake:</span>
                    <span className="font-bold text-slate-800">{speciesData[activeSpecies].nutritionTarget}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 pt-0.5 truncate">
                    Protocol: {speciesData[activeSpecies].protocol}
                  </p>
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
              <div className="flex items-center justify-between mb-4">
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
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Chronicle outdoor walks, route milestones, and attach high-resolution memory logs to an unalterable activity timeline.
              </p>
            </div>

            <div className="mt-6 bg-[#F5F6F8] p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 border border-emerald-200/80 shadow-2xs">
                <img src="/3d-pets-species.jpg" alt="Walk memory" className="w-full h-full object-cover" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">Morning Trail Walk</p>
                <div className="flex items-center gap-2 text-[11px] text-slate-600 mt-1 font-medium">
                  <span className="font-semibold text-emerald-800">2.4 km</span>
                  <span className="text-slate-300">&bull;</span>
                  <span>35 mins</span>
                  <span className="text-slate-300">&bull;</span>
                  <span>Bella</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">Recorded Oct 24, 2026</p>
              </div>
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
              <div className="flex items-center justify-between mb-4">
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
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Categorize veterinary clinic receipts, dietary formulas, and medication expenses with automated monthly budgeting.
              </p>
            </div>

            {/* Spending Distribution Bar (Strictly: Forest Green, Navy & Warm Amber) */}
            <div className="mt-6 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-700">Monthly Allocation</span>
                <span className="font-black text-slate-900 text-sm">$184.50</span>
              </div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <div className="h-full bg-emerald-700 w-[50%]" title="Dietary & Food (50%)" />
                <div className="h-full bg-[#1A2B4E] w-[30%]" title="Veterinary Clinical (30%)" />
                <div className="h-full bg-[#E67E22] w-[20%]" title="Care & Supplies (20%)" />
              </div>
              <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-600 mt-3 font-bold text-center">
                <div className="bg-white py-1 rounded-md border border-slate-200/80">
                  <span className="text-emerald-700 block font-black">50%</span>
                  <span className="text-slate-500 font-medium">Dietary</span>
                </div>
                <div className="bg-white py-1 rounded-md border border-slate-200/80">
                  <span className="text-[#1A2B4E] block font-black">30%</span>
                  <span className="text-slate-500 font-medium">Vet Clinical</span>
                </div>
                <div className="bg-white py-1 rounded-md border border-slate-200/80">
                  <span className="text-[#E67E22] block font-black">20%</span>
                  <span className="text-slate-500 font-medium">Care/Supplies</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
