import { motion } from 'framer-motion';
import BentoCareCard from './bento/BentoCareCard';
import BentoFamilyCard from './bento/BentoFamilyCard';
import BentoClinicalCard from './bento/BentoClinicalCard';
import BentoBudgetCard from './bento/BentoBudgetCard';

import { fadeInUp } from '../config/animationVariants';

export default function BentoFeatures() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      <div id="why-pet-horizon" className="absolute -top-20 pointer-events-none" />
      <div id="features-bento" className="absolute -top-20 pointer-events-none" />

      {/* Subtle Static Background Ambience */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-emerald-700/[0.03] rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#EADECE]/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
              <span>How Pet Horizon Works</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
              4 Native Care Modules. Zero Guesswork.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2.5 font-normal leading-relaxed max-w-2xl mx-auto">
              Every feature below is built genuinely into the Pet Horizon mobile app. From daily feeding schedules to household QR sync and budget tracking, see how our system keeps your pets thriving.
            </p>
          </motion.div>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Wide Signature Routine Module (7 columns on desktop) */}
          <div className="lg:col-span-7 flex">
            <BentoCareCard />
          </div>

          {/* Card 2: Household Pass & Lock Module (5 columns on desktop) */}
          <div className="lg:col-span-5 flex">
            <BentoFamilyCard />
          </div>

          {/* Card 3: Clinical Care & Health Card (6 columns on desktop) */}
          <div className="lg:col-span-6 flex">
            <BentoClinicalCard />
          </div>

          {/* Card 4: Smart Budget & Expenses (6 columns on desktop) */}
          <div className="lg:col-span-6 flex">
            <BentoBudgetCard />
          </div>
        </div>
      </div>
    </section>
  );
}
