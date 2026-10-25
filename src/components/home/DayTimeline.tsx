import { Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DAY_TIMELINE_EVENTS } from '../../data/timelineData';

export default function DayTimeline() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>A Day in Pet Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            How One Day of Friction-Free Pet Care Unfolds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Follow a typical day in a multi-caregiver household powered by Pet Horizon&apos;s synchronized care schedules.
          </p>
        </div>

        {/* Mobile View: Vertical Connected Timeline (< 768px) */}
        <div className="md:hidden relative border-l-2 border-emerald-500/30 ml-4 pl-6 space-y-8">
          {DAY_TIMELINE_EVENTS.map((event) => (
            <div key={event.id} className="relative group">
              {/* Timeline Node Icon on the vertical border */}
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-sm shadow-xs select-none">
                {event.avatarIcon}
              </div>

              {/* Event Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {event.time} &bull; {event.period}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {event.status}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {event.description}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="text-emerald-700 font-semibold">{event.metaNote}</span>
                  <span className="text-slate-400">{event.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Horizontal Sequenced Grid (>= 768px) */}
        <div className="hidden md:block relative">
          {/* Subtle horizontal connecting line */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {DAY_TIMELINE_EVENTS.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Icon with sequence badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform select-none">
                      {event.avatarIcon}
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
              </div>
            ))}
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
