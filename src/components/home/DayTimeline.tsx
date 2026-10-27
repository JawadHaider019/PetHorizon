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

const STEP_THEMES = [
  {
    periodLabel: 'Dawn Awakening',
    periodIcon: UtensilsCrossed,
    bgGradient: 'from-amber-500/[0.08] via-amber-500/[0.02] to-white',
    border: 'border-amber-200/80 hover:border-amber-400/90',
    nodeColor: 'bg-amber-500 ring-amber-200',
    iconBg: 'bg-amber-100/90 text-amber-900',
    badgeStyle: 'text-amber-900 bg-amber-500/10 border-amber-500/20',
    accentText: 'text-amber-900',
  },
  {
    periodLabel: 'Morning Care',
    periodIcon: Pill,
    bgGradient: 'from-emerald-600/[0.08] via-emerald-600/[0.02] to-white',
    border: 'border-emerald-200/80 hover:border-emerald-500/90',
    nodeColor: 'bg-[#166534] ring-emerald-200',
    iconBg: 'bg-emerald-100/90 text-[#166534]',
    badgeStyle: 'text-emerald-950 bg-emerald-900/10 border-emerald-800/20',
    accentText: 'text-[#166534]',
  },
  {
    periodLabel: 'High Noon Trail',
    periodIcon: Footprints,
    bgGradient: 'from-sky-500/[0.08] via-sky-500/[0.02] to-white',
    border: 'border-sky-200/80 hover:border-sky-400/90',
    nodeColor: 'bg-sky-600 ring-sky-200',
    iconBg: 'bg-sky-100/90 text-sky-900',
    badgeStyle: 'text-sky-900 bg-sky-500/10 border-sky-500/20',
    accentText: 'text-sky-800',
  },
  {
    periodLabel: 'Evening Twilight',
    periodIcon: Users,
    bgGradient: 'from-orange-500/[0.08] via-orange-500/[0.02] to-white',
    border: 'border-orange-200/80 hover:border-orange-400/90',
    nodeColor: 'bg-orange-500 ring-orange-200',
    iconBg: 'bg-orange-100/90 text-orange-900',
    badgeStyle: 'text-orange-900 bg-orange-500/10 border-orange-500/20',
    accentText: 'text-orange-900',
  },
  {
    periodLabel: 'Bedtime Journal',
    periodIcon: Camera,
    bgGradient: 'from-indigo-500/[0.08] via-indigo-500/[0.02] to-white',
    border: 'border-indigo-200/80 hover:border-indigo-400/90',
    nodeColor: 'bg-indigo-600 ring-indigo-200',
    iconBg: 'bg-indigo-100/90 text-indigo-950',
    badgeStyle: 'text-indigo-900 bg-indigo-500/10 border-indigo-500/20',
    accentText: 'text-indigo-900',
  }
];

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
    <section 
      id="timeline" 
      className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05] scroll-mt-28"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with generous clearance */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
            <span>A Day in Pet Horizon</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight mb-4">
            How One Day of Friction-Free Pet Care Unfolds
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Follow a typical day in a multi-caregiver household powered by Pet Horizon&apos;s synchronized care routines and anti-collision locks.
          </p>
        </motion.div>

        {/* Chronological Journey Ribbon */}
        <div className="relative">
          {/* Connected timeline rail line for large viewports */}
          <div className="hidden xl:block absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-amber-300 via-emerald-300 via-sky-300 to-indigo-300 rounded-full z-0 pointer-events-none opacity-80" />

          {/* Cards container: Responsive Grid with generous card width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {DAY_TIMELINE_EVENTS.map((event, index) => {
              const theme = STEP_THEMES[index % STEP_THEMES.length];
              const PeriodIcon = theme.periodIcon;
              const dir = index < 2 ? 'left' : index > 2 ? 'right' : 'up';

              return (
                <motion.div
                  key={event.id}
                  {...staggerCard(index, dir)}
                  whileHover={{ y: -6, boxShadow: '0 20px 35px -10px rgba(0,0,0,0.08)' }}
                  className={`rounded-[2rem] p-5 sm:p-6 bg-gradient-to-b ${theme.bgGradient} border ${theme.border} shadow-sm transition-all duration-300 flex flex-col justify-between relative group text-left`}
                >
                  <div>
                    {/* Header: Node Indicator & Time Stamp */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ring-4 ${theme.nodeColor} shrink-0`} />
                        <span className="text-xs font-mono font-bold text-slate-900 bg-white/95 px-2.5 py-0.5 rounded-full border border-black/[0.06] shadow-2xs">
                          {event.time}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-white/80 px-2 py-0.5 rounded-full border border-black/[0.05]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Period Banner with Icon */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                        {renderEventIcon(event.iconType, 'w-4 h-4')}
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${theme.accentText}`}>
                          <PeriodIcon className="w-3 h-3" />
                          {theme.periodLabel}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-black text-slate-900 text-base leading-snug mb-2 group-hover:text-[#166534] transition-colors">
                      {event.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                      {event.description}
                    </p>
                  </div>

                  {/* Bottom Footer: Feature Badge & Category */}
                  <div className="pt-3.5 border-t border-black/[0.06] flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${theme.badgeStyle}`}>
                        {event.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-600">
                        {event.status}
                      </span>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-medium text-slate-800 leading-tight bg-white/90 p-2 rounded-xl border border-black/[0.05] shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{event.metaNote}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Assurance */}
        <div className="mt-12 sm:mt-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium bg-white px-5 py-2.5 rounded-full border border-black/[0.06] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#166534] shrink-0" />
            <span>All actions timestamped with offline queueing support for walks without cellular reception.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
