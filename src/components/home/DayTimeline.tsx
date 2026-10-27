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
    <section className="hidden md:block py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>A Day in Pet Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            How One Day of Friction-Free Pet Care Unfolds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Follow a typical day in a multi-caregiver household powered by Pet Horizon&apos;s synchronized care schedules.
          </p>
        </motion.div>

        {/* Horizontal Sequenced Grid (Tablet & Desktop) */}
        <div className="relative">
          {/* Subtle horizontal connecting line */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {DAY_TIMELINE_EVENTS.map((event, index) => {
              const dir = index < 2 ? 'left' : index > 2 ? 'right' : 'up';
              return (
                <motion.div
                  key={event.id}
                  {...staggerCard(index, dir)}
                  className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                <div>
                  {/* Step Icon with sequence badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-xs group-hover:scale-105 transition-transform">
                      {renderEventIcon(event.iconType, 'w-5 h-5 text-emerald-600')}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>

                  {/* Time & Title */}
                  <div className="mb-2">
                    <span className="text-xs font-black text-emerald-700 block mb-1">
                      {event.time}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                      {event.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 mb-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{event.metaNote}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
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
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200/60">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>All actions timestamped with offline queueing support for walks without cell reception.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
