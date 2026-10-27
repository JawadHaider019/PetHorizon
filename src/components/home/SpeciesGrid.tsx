import { Layers, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SPECIES_LIST } from '../../data/speciesData';
import { fadeInUp, staggerCard } from '../../config/animationVariants';

export default function SpeciesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle emerald ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Multi-Species Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
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
            return (
              <motion.div
                key={spec.id}
                {...staggerCard(idx, dir)}
                className="bg-white/95 rounded-3xl p-5 sm:p-6 border border-slate-200/80 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-950/5 transition-all flex flex-col justify-between group"
              >
              <div>
                {/* 3D Mascot Avatar */}
                <div className="mb-4 group-hover:scale-105 transition-transform origin-left">
                  <img
                    src={spec.mascotImage}
                    alt={`${spec.name} 3D Mascot`}
                    className="w-16 h-16 object-contain"
                    style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.10))' }}
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5 group-hover:text-emerald-700 transition-colors">
                  {spec.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-normal">
                  {spec.subtitle}
                </p>

                {/* Capabilities checklist */}
                <div className="space-y-2 mb-5">
                  {spec.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs text-slate-700 font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom breeds note */}
              <div className="pt-3 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-medium leading-tight">
                  <span className="font-bold text-slate-500">Popular: </span>
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
