import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  QrCode, 
  Pill, 
  Camera, 
  DollarSign, 
  CheckCircle2 
} from 'lucide-react';

export default function BentoFeatures() {
  const [activeSpecies, setActiveSpecies] = useState<'dog' | 'cat' | 'rabbit' | 'bird'>('dog');
  const [medTaken, setMedTaken] = useState(true);

  const speciesData = {
    dog: { name: 'Golden Retriever', weight: '28.4 kg', routine: '2x Walks + Kibble', badge: 'Canine Care' },
    cat: { name: 'British Shorthair', weight: '4.8 kg', routine: 'Renal Diet + Insulin', badge: 'Feline Health' },
    rabbit: { name: 'Holland Lop', weight: '1,650 g', routine: 'Timothy Hay + Veggies', badge: 'Small Animal' },
    bird: { name: 'Cockatiel', weight: '92 g', routine: 'Pellet + Seed Diet', badge: 'Avian Care' }
  };

  return (
    <section id="features-bento" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 right-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">
            All-In-One Pet Companion
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Every Routine, Dose &amp; Milestone in One Place
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            No fragmented apps or lost sticky notes. Pet Horizon synchronizes schedules, medical records, and expenses into one harmonious hub.
          </p>
        </div>

        {/* BENTO GRID (12 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* CARD 1: Family Hub & QR Caretaker Pairing (8 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <Users className="w-3.5 h-3.5" />
                  <span>Real-Time Household Sync</span>
                </span>
                <span className="text-xs text-emerald-400/90 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync Active
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                One QR Code Unites Your Whole Care Team
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
                Add your spouse, roommate, or professional pet sitter in seconds. When someone feeds breakfast or dispenses medicine, everyone’s screen updates instantly.
              </p>
            </div>

            {/* Simulated Live UI Interaction */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center font-black text-xs shrink-0">
                  SJ
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">Sarah (Mom)</p>
                  <p className="text-[10px] text-emerald-300">Checked Walk 🐾</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center font-black text-xs shrink-0">
                  MJ
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">Michael (Dad)</p>
                  <p className="text-[10px] text-blue-300">Logged Meal 🥩</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center font-black text-xs shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">Pet Sitter Maya</p>
                  <p className="text-[10px] text-purple-300">Joined via QR Code</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Smart Medication Alarms (4 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 bg-[#F5F6F8] rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 shadow-2xs">
                <Pill className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                Prescriptions &amp; Vaccines
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Smart Medical Alarms
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Critical dose alerts, inventory depletion warnings, and DHPP vaccination history in one touch.
              </p>
            </div>

            {/* Interactive Dose Toggle */}
            <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-800">Heartgard Plus (Monthly)</span>
                <span className="text-[10px] font-bold text-emerald-700">8:00 AM</span>
              </div>
              <button
                type="button"
                onClick={() => setMedTaken(!medTaken)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  medTaken
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{medTaken ? 'Dose Logged & Sync Complete' : 'Click to Mark Dose Taken'}</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 3: Universal Species Support (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                  Multi-Species
                </span>
                <span className="text-xs text-slate-400 font-bold">15+ Breeds</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Dogs, Cats &amp; Exotics
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Dedicated metric systems for dogs, cats, small mammals, and birds with custom units.
              </p>

              {/* Species switcher tabs */}
              <div className="flex items-center gap-1.5 mt-5 bg-slate-100 p-1 rounded-xl">
                {(['dog', 'cat', 'rabbit', 'bird'] as const).map((sp) => (
                  <button
                    key={sp}
                    onClick={() => setActiveSpecies(sp)}
                    className={`flex-1 py-1 text-xs font-bold rounded-lg capitalize transition-all cursor-pointer ${
                      activeSpecies === sp ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {sp === 'dog' ? '🐶' : sp === 'cat' ? '🐱' : sp === 'rabbit' ? '🐰' : '🦜'}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Species Card */}
            <div className="mt-6 bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">{speciesData[activeSpecies].name}</span>
                <span className="font-black text-emerald-700">{speciesData[activeSpecies].weight}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                {speciesData[activeSpecies].routine}
              </p>
            </div>
          </motion.div>

          {/* CARD 4: Daily Photo Journal & Walk Log (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-emerald-200/80 shadow-xs flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 shadow-2xs">
                <Camera className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                Memories &amp; Fitness
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Daily Photo Journal
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Log walks, distance, bathroom health, and upload daily milestone photos to a private timeline.
              </p>
            </div>

            <div className="mt-6 bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-2xs flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 overflow-hidden shrink-0 border border-emerald-200">
                <img src="/3d-pets-species.jpg" alt="Walk memory" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Morning Trail Walk</p>
                <p className="text-[10px] text-slate-500">35 mins • 2.4 km • Bella</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: Expense Budget Tracking (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5 shadow-2xs">
                <DollarSign className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                Financial Audit
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Pet Budget &amp; Expenses
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Audit feed costs, veterinarian visits, and supplies with automated monthly categorization.
              </p>
            </div>

            <div className="mt-6 bg-[#F5F6F8] p-3.5 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-700">Monthly Spending</span>
                <span className="font-black text-slate-900">$184.50</span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-500 w-[50%]" title="Food (50%)" />
                <div className="h-full bg-blue-500 w-[30%]" title="Vet (30%)" />
                <div className="h-full bg-amber-400 w-[20%]" title="Supplies (20%)" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-semibold">
                <span>Food 50%</span>
                <span>Vet 30%</span>
                <span>Supplies 20%</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
