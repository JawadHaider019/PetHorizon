import { Layers, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SPECIES_LIST } from '../../data/speciesData';
import { fadeInUp, staggerCard } from '../../config/animationVariants';

export default function SpeciesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      {/* Subtle emerald ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-700/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/[0.04] border border-emerald-900/10 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Multi-Species Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17191C] tracking-tight leading-tight mb-3">
            Tailored Care for Every Companion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Not all pets are the same. Pet Horizon configures species-specific tracking benchmarks,
            preventative schedules, and nutrition fields.
          </p>
        </motion.div>

        {/* Species Grid: 1-col mobile, 2-col tablet, 5-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {SPECIES_LIST.map((spec, idx) => {
            const dir = idx < 2 ? 'left' : idx > 2 ? 'right' : 'up';

            // Distinctive Species Capsule Palettes
            const speciesStyles = [
              { bg: 'bg-[#FDF9F3] border-amber-900/10 hover:border-amber-500/30', tag: 'Canines', tagBg: 'bg-amber-100/70 text-amber-900', ring: 'ring-amber-200/50' },
              { bg: 'bg-[#F4F9F5] border-emerald-900/10 hover:border-emerald-600/30', tag: 'Felines', tagBg: 'bg-emerald-100/70 text-emerald-900', ring: 'ring-emerald-200/50' },
              { bg: 'bg-[#F3F8FC] border-sky-900/10 hover:border-sky-500/30', tag: 'Avians', tagBg: 'bg-sky-100/70 text-sky-900', ring: 'ring-sky-200/50' },
              { bg: 'bg-[#FAF5F4] border-rose-900/10 hover:border-rose-500/30', tag: 'Small Pets', tagBg: 'bg-rose-100/70 text-rose-900', ring: 'ring-rose-200/50' },
              { bg: 'bg-[#F7F7F6] border-slate-900/10 hover:border-slate-500/30', tag: 'Exotics', tagBg: 'bg-slate-200/70 text-slate-800', ring: 'ring-slate-300/50' }
            ][idx % 5];

            return (
              <motion.div
                key={spec.id}
                {...staggerCard(idx, dir)}
                whileHover={{ y: -8, boxShadow: '0 20px 30px -10px rgba(0,0,0,0.08)' }}
                className={`rounded-[2rem] p-5 sm:p-6 border shadow-sm transition-all flex flex-col justify-between group text-center relative overflow-hidden ${speciesStyles.bg}`}
              >
                <div>
                  {/* Top Category Pill */}
                  <div className="flex justify-center mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${speciesStyles.tagBg}`}>
                      {speciesStyles.tag}
                    </span>
                  </div>

                  {/* 3D Mascot in Raised Circular Pedestal */}
                  <div className={`w-20 h-20 rounded-full bg-white shadow-sm ring-4 ${speciesStyles.ring} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <img
                      src={spec.mascotImage}
                      alt={`${spec.name} 3D Mascot`}
                      className="w-14 h-14 object-contain"
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-black text-slate-900 text-lg mb-1 group-hover:text-[#166534] transition-colors">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed font-normal">
                    {spec.subtitle}
                  </p>

                  {/* Capabilities checklist chips */}
                  <div className="space-y-1.5 mb-5 text-left">
                    {spec.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[11px] text-slate-700 font-semibold bg-white/80 border border-black/[0.04] rounded-xl px-2.5 py-1.5 shadow-2xs"
                      >
                        <Check className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom breeds note */}
                <div className="pt-3 border-t border-black/[0.05] text-left">
                  <p className="text-[10px] text-slate-400 font-medium leading-tight">
                    <span className="font-bold text-slate-600">Popular: </span>
                    {spec.popularBreeds}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
