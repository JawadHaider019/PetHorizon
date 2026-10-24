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
  const [activeSpecies, setActiveSpecies] = useState<'dog' | 'cat' | 'rabbit' | 'bird'>('dog');
  const [medTaken, setMedTaken] = useState(true);

  const speciesData = {
    dog: { 
      name: 'Golden Retriever', 
      breed: 'Canine Companion', 
      weight: '28.4 kg', 
      routine: '2x Walks (45 min) + 2 Cups Kibble', 
      tag: 'Canine Protocol',
      icon: '🐶'
    },
    cat: { 
      name: 'British Shorthair', 
      breed: 'Feline Companion', 
      weight: '4.8 kg', 
      routine: 'Renal Diet Portion + Insulin Check', 
      tag: 'Feline Protocol',
      icon: '🐱'
    },
    rabbit: { 
      name: 'Holland Lop', 
      breed: 'Small Animal', 
      weight: '1,650 g', 
      routine: 'Unlimited Timothy Hay + Fresh Greens', 
      tag: 'Herbivore Care',
      icon: '🐰'
    },
    bird: { 
      name: 'Cockatiel', 
      breed: 'Avian Companion', 
      weight: '92 g', 
      routine: 'Pellet & Seed Blend + Cage Misting', 
      tag: 'Avian Protocol',
      icon: '🦜'
    }
  };

  return (
    <section id="features-bento" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-200/80">
      {/* Brand ambient glows: Strict Forest Emerald and Navy palette */}
      <div className="absolute top-12 right-1/4 w-[520px] h-[520px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#1A2B4E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header: Mature & Typographic */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-3">
              Pet Horizon Core System
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Every Routine, Dose &amp; Caretaker in One Harmonious Hub
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed">
              No fragmented notes or missed responsibilities. Pet Horizon coordinates daily care schedules, critical medication alarms, and household sync in real time.
            </p>
          </motion.div>
        </div>

        {/* BENTO GRID (12 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* CARD 1: Family Hub & QR Caretaker Pairing (8 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-8 bg-gradient-to-br from-[#1A2B4E] via-[#101F3B] to-[#144917] text-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle radial sheen */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  <Users className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Household Synchronization</span>
                </span>
                
                <span className="text-xs text-emerald-300/90 font-semibold flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync Active
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                One Family QR Code Connects Every Caregiver
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-xl font-normal leading-relaxed">
                Invite your partner, roommate, or trusted pet sitter in seconds. When someone feeds breakfast or checks off an evening walk, everyone's app updates in real-time.
              </p>
            </div>

            {/* Live Care Team Activity Strip (Brand Palette: Emerald, Navy, Warm Amber) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-300 font-semibold">
                <span>Care Team Status</span>
                <span className="text-[11px] text-emerald-400 font-mono">Last activity 4m ago</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Mom */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 transition-transform hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    SM
                  </div>
                  <div className="truncate text-left">
                    <p className="text-xs font-bold text-white truncate">Sarah (Mom)</p>
                    <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" /> Morning Walk Logged
                    </p>
                  </div>
                </div>

                {/* Dad */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 transition-transform hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800 text-emerald-100 flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    MD
                  </div>
                  <div className="truncate text-left">
                    <p className="text-xs font-bold text-white truncate">Michael (Dad)</p>
                    <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" /> Breakfast Confirmed
                    </p>
                  </div>
                </div>

                {/* Pet Sitter via QR */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 transition-transform hover:scale-[1.02]">
                  <div className="w-9 h-9 rounded-xl bg-[#E67E22] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    <QrCode className="w-4 h-4 text-white" />
                  </div>
                  <div className="truncate text-left">
                    <p className="text-xs font-bold text-white truncate">Maya (Pet Sitter)</p>
                    <p className="text-[11px] text-amber-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-amber-300" /> Joined via QR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Smart Medication Alarms (4 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between text-left transition-all hover:border-emerald-500/40"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 shadow-2xs">
                <Pill className="w-5 h-5" />
              </div>

              <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                Prescriptions &amp; Vaccines
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Smart Medical Alarms
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Critical dose schedules, inventory depletion alerts, and vaccination booster countdowns in one view.
              </p>
            </div>

            {/* Interactive Dose Toggle with Animated Confirmation */}
            <div className="mt-6 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-800">Heartgard Plus (Monthly)</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  8:00 AM Daily
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMedTaken(!medTaken)}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                  medTaken
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${medTaken ? 'text-white' : 'text-slate-400'}`} />
                <span>{medTaken ? 'Dose Logged & Synced ✓' : 'Tap to Mark Dose Taken'}</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 3: Universal Species Support (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between text-left transition-all hover:border-emerald-500/40"
          >
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                Multi-Species Engine
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Dogs, Cats &amp; Companions
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Dedicated metric units for canines, felines, small mammals, and avians with tailored routine calculations.
              </p>

              {/* Species switcher tabs */}
              <div className="flex items-center gap-1.5 mt-5 bg-slate-100 p-1 rounded-xl">
                {(['dog', 'cat', 'rabbit', 'bird'] as const).map((sp) => (
                  <button
                    key={sp}
                    type="button"
                    onClick={() => setActiveSpecies(sp)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      activeSpecies === sp 
                        ? 'bg-white text-slate-900 shadow-xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span className="mr-1">{speciesData[sp].icon}</span>
                    <span className="capitalize hidden sm:inline">{sp}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Species Profile Card with Animated Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecies}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-6 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80"
              >
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{speciesData[activeSpecies].name}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{speciesData[activeSpecies].breed}</span>
                  </div>
                  <span className="font-black text-emerald-800 text-sm">{speciesData[activeSpecies].weight}</span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-200/70 text-[11px] text-slate-600 font-medium flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{speciesData[activeSpecies].routine}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CARD 4: Daily Photo Journal & Fitness (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between text-left transition-all hover:border-emerald-500/40"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 shadow-2xs">
                <Camera className="w-5 h-5" />
              </div>

              <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                Memories &amp; Fitness
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Daily Photo Journal
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Log outdoor walks, distance milestones, and attach daily high-res companion memories to a private timeline.
              </p>
            </div>

            <div className="mt-6 bg-[#F5F6F8] p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-emerald-200/80 shadow-2xs">
                <img src="/3d-pets-species.jpg" alt="Walk memory" className="w-full h-full object-cover" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">Morning Trail Walk</p>
                <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3 h-3 text-emerald-700" />
                  <span>35 mins &bull; 2.4 km &bull; Bella</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: Expense Budget Tracking (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between text-left transition-all hover:border-emerald-500/40"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 shadow-2xs">
                <DollarSign className="w-5 h-5" />
              </div>

              <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                Financial Tracking
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Pet Budget &amp; Expenses
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Categorize veterinary clinic receipts, premium food orders, and supplies with monthly totals.
              </p>
            </div>

            {/* Spending Distribution Bar (Using Brand Green, Navy & Amber) */}
            <div className="mt-6 bg-[#F5F6F8] p-3.5 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-700">Monthly Expenses</span>
                <span className="font-black text-slate-900 text-sm">$184.50</span>
              </div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-700 w-[50%]" title="Food (50%)" />
                <div className="h-full bg-[#1A2B4E] w-[30%]" title="Veterinary (30%)" />
                <div className="h-full bg-[#E67E22] w-[20%]" title="Supplies (20%)" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-bold">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-700" /> Food 50%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#1A2B4E]" /> Vet 30%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#E67E22]" /> Care 20%
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
