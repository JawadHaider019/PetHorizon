import { Heart, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { CARETAKER_STORIES } from '../../data/caretakerData';

export default function CaretakerStories() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>Caretaker Stories &amp; Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Built for Real Households with Busy Schedules
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From critical medication synchronization to multi-caregiver walk updates,
            see how Pet Horizon eliminates daily confusion.
          </p>
        </div>

        {/* Stories Grid: 1 col on mobile, 2 col on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CARETAKER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top: Pet Profile & Parent Info */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      <img
                        src={story.petAvatar}
                        alt={story.petName}
                        className="w-13 h-13 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-xs"
                      />
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-6 h-6 rounded-full object-cover border-2 border-white absolute -bottom-1 -right-1 shadow-xs"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-slate-900 text-base truncate">{story.petName}</h4>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                          {story.petBreed}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 flex items-center gap-1 truncate">
                        <span>{story.name}</span>
                        <span>&bull;</span>
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{story.location}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 shrink-0 hidden sm:inline-block">
                    {story.highlightTag}
                  </span>
                </div>

                {/* Headline with quote icon */}
                <div className="mb-3">
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-emerald-700 transition-colors flex items-start gap-1.5">
                    <Quote className="w-4 h-4 text-emerald-500 shrink-0 rotate-180 mt-1" />
                    <span>{story.headline}</span>
                  </h3>
                </div>

                {/* Story narrative */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  &ldquo;{story.story}&rdquo;
                </p>
              </div>

              {/* Bottom footer badge */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{story.stats}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {story.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
