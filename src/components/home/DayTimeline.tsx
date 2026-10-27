import {
  Clock,
  CheckCircle2,
  ShieldCheck,
  UtensilsCrossed,
  Pill,
  Footprints,
  Users,
  Camera
} from 'lucide-react';
import { motion } from 'framer-motion';
import { DAY_TIMELINE_EVENTS, DayTimelineEvent } from '../../data/timelineData';
import { fadeInUp, staggerCard } from '../../config/animationVariants';

const renderEventIcon = (type: DayTimelineEvent['iconType'], className = 'w-4 h-4') => {
  switch (type) {
    case 'nutrition':
      return <UtensilsCrossed className={className} />;
    case 'medication':
      return <Pill className={className} />;
    case 'exercise':
      return <Footprints className={className} />;
    case 'family':
      return <Users className={className} />;
    case 'journal':
      return <Camera className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};

export default function DayTimeline() {
  return (
    <section className="hidden md:block py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/[0.04] border border-emerald-900/10 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>A Day in Pet Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17191C] tracking-tight leading-tight mb-4">
            How One Day of Friction-Free Pet Care Unfolds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Follow a typical day in a multi-caregiver household powered by Pet Horizon&apos;s synchronized care schedules.
          </p>
        </motion.div>

        {/* Horizontal Connected Chronological Ribbon */}
        <div className="relative">
          {/* Connected timeline rail line */}
          <div className="absolute top-6 left-8 right-8 h-1 bg-gradient-to-r from-amber-200 via-emerald-300 to-teal-300 rounded-full z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {DAY_TIMELINE_EVENTS.map((event, index) => {
              const dir = index < 2 ? 'left' : index > 2 ? 'right' : 'up';
              // Differentiated time-of-day tints
              const tint =
                index < 2
                  ? 'bg-gradient-to-b from-amber-50/40 via-white to-white border-amber-900/10 hover:border-amber-500/30'
                  : index === 2
                  ? 'bg-gradient-to-b from-emerald-50/50 via-white to-white border-emerald-900/10 hover:border-emerald-600/30'
                  : 'bg-gradient-to-b from-teal-50/40 via-white to-white border-teal-900/10 hover:border-teal-600/30';

              const nodeColor =
                index < 2
                  ? 'bg-amber-500 ring-amber-200'
                  : index === 2
                  ? 'bg-[#166534] ring-emerald-200'
                  : 'bg-teal-600 ring-teal-200';

              return (
                <motion.div
                  key={event.id}
                  {...staggerCard(index, dir)}
                  whileHover={{ y: -8, boxShadow: '0 20px 30px -10px rgba(0,0,0,0.08)' }}
                  className={`rounded-3xl p-5 border shadow-sm transition-all flex flex-col justify-between relative group text-left ${tint}`}
                >
                  <div>
                    {/* Top Node Indicator on the ribbon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ring-4 ${nodeColor} shrink-0`} />
                        <span className="text-[11px] font-mono font-bold text-slate-800 bg-white/90 px-2 py-0.5 rounded-full border border-black/[0.06] shadow-2xs">
                          {event.time}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/80 px-2 py-0.5 rounded-full border border-black/[0.05]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-center text-[#166534] mb-3 group-hover:scale-105 transition-transform">
                      {renderEventIcon(event.iconType, 'w-5 h-5 text-[#166534]')}
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-slate-900 text-sm leading-snug mb-1.5 group-hover:text-[#166534] transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Bottom Card Footer */}
                  <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#166534] truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                      <span className="truncate">{event.metaNote}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-white px-1.5 py-0.5 rounded border border-black/[0.06] shrink-0">
                      {event.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust assurance */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-600 font-medium bg-white px-4 py-2 rounded-full border border-black/[0.06] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>All actions timestamped with offline queueing support for walks without cell reception.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
