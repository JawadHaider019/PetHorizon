import { ArrowLeft, Sparkles, Check, Wrench, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { CHANGELOG_RELEASES } from '../../data/changelogData';

interface ChangelogPageProps {
  onNavigateHome: () => void;
}

export default function ChangelogPage({ onNavigateHome }: ChangelogPageProps) {
  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-28 sm:pt-36 pb-20 selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Back to Home</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Product Updates</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Pet Horizon Changelog
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            A comprehensive history of new features, bug fixes, and design enhancements shipped to pet families worldwide.
          </p>
        </div>

        {/* Releases List */}
        <div className="space-y-8 sm:space-y-10 relative">
          {CHANGELOG_RELEASES.map((rel, index) => (
            <div
              key={rel.version}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all ${
                index === 0
                  ? 'border-emerald-300 shadow-md ring-1 ring-emerald-500/20'
                  : 'border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Header: Version, Date, Build, Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {rel.version}
                  </span>
                  <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${rel.tagColor}`}>
                    {rel.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    Build {rel.buildNumber}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{rel.releaseDate}</span>
                </div>
              </div>

              {/* Headline & Summary */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                {rel.headline}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {rel.summary}
              </p>

              {/* Key Highlights */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Tag className="w-3 h-3 text-emerald-600" />
                  <span>What&apos;s New</span>
                </h3>
                <ul className="space-y-2">
                  {rel.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bug Fixes & Improvements (if any) */}
              {rel.bugFixes && rel.bugFixes.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-slate-400" />
                    <span>Fixes &amp; Stability</span>
                  </h3>
                  <ul className="space-y-1.5">
                    {rel.bugFixes.map((fix, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-500 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                        <span>{fix}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer info box */}
        <div className="mt-12 bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex items-center justify-between flex-wrap gap-4 text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-medium">
              Want to request a feature or report a bug? Reach out to our engineering team at support@pethorizon.app
            </span>
          </div>
          <button
            onClick={onNavigateHome}
            className="font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
