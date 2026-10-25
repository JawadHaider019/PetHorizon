import { Sparkles, Check } from 'lucide-react';
import { SPECIES_LIST } from '../../data/speciesData';

export default function SpeciesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Multi-Species Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Tailored Care for Every Companion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Not all pets are the same. Pet Horizon configures custom tracking fields, reminders,
            and nutritional benchmarks for each species.
          </p>
        </div>

        {/* Species Grid: 2-col on mobile, 3-col on tablet, 5-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {SPECIES_LIST.map((spec) => (
            <div
              key={spec.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/70 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Emoji & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform select-none">
                    {spec.emoji}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${spec.badgeBg} ${spec.badgeText}`}>
                    {spec.statBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-emerald-700 transition-colors">
                  {spec.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-snug">
                  {spec.subtitle}
                </p>

                {/* Capabilities pills */}
                <div className="space-y-1.5 mb-4">
                  {spec.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs text-slate-700 font-medium"
                    >
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom breeds note */}
              <div className="pt-3 border-t border-slate-200/60">
                <p className="text-[10px] text-slate-400 font-medium leading-tight">
                  <span className="font-bold text-slate-500">Popular: </span>
                  {spec.popularBreeds}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
