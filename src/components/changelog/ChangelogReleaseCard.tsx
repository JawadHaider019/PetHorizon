import { motion } from 'framer-motion';
import { Calendar, GitCommit, CheckCircle2, Wrench, ShieldCheck, Tag } from 'lucide-react';
import { ChangelogRelease } from '../../data/changelogData';

interface ChangelogReleaseCardProps {
  rel: ChangelogRelease;
  index: number;
  isLatest: boolean;
  isLast: boolean;
}

export default function ChangelogReleaseCard({
  rel,
  isLatest,
  isLast
}: ChangelogReleaseCardProps) {
  return (
    <motion.div
      key={rel.version}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-6 group"
    >
      {/* Date & Build Column (Desktop) */}
      <div className="hidden lg:flex w-40 shrink-0 flex-col items-end pt-5 text-right pr-2 select-none">
        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{rel.releaseDate}</span>
        </span>
        <span className="text-[11px] font-semibold text-slate-400 mt-1">
          Build {rel.buildNumber}
        </span>
      </div>

      {/* Desktop Timeline Node */}
      <div className="hidden lg:flex flex-col items-center shrink-0 w-8 select-none pt-4.5 relative">
        {!isLast && (
          <div className="w-0.5 absolute top-8 -bottom-[64px] bg-slate-200 pointer-events-none z-0" />
        )}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-xs z-10 transition-transform duration-200 group-hover:scale-110 ${
            isLatest
              ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 shadow-emerald-600/20'
              : 'bg-white text-slate-600 border-2 border-slate-300 ring-4 ring-slate-50'
          }`}
        >
          <GitCommit className="w-4 h-4" />
        </div>
      </div>

      {/* Release Card */}
      <div className="flex-1 min-w-0 flex items-start gap-3 sm:gap-4 lg:gap-0">
        {/* Mobile Timeline Node */}
        <div className="lg:hidden flex flex-col items-center shrink-0 w-8 select-none pt-4 relative">
          {!isLast && (
            <div className="w-0.5 absolute top-7 -bottom-[56px] bg-slate-200 pointer-events-none z-0" />
          )}
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-xs z-10 ${
              isLatest
                ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 shadow-emerald-600/20'
                : 'bg-white text-slate-600 border-2 border-slate-300 ring-4 ring-slate-50'
            }`}
          >
            <GitCommit className="w-3.5 h-3.5" />
          </div>
        </div>

        <div
          className={`flex-1 min-w-0 bg-white rounded-3xl p-4 sm:p-6 lg:p-7 border transition-all duration-200 hover:shadow-md ${
            isLatest
              ? 'border-emerald-300/90 shadow-sm ring-1 ring-emerald-500/20'
              : 'border-slate-200/80 shadow-xs hover:border-slate-300'
          }`}
        >
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5 flex-wrap">
              {isLatest && (
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
              )}

              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {rel.version}
              </span>

              <span
                className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  rel.tag === 'Latest'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : rel.tag === 'Major Release'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300/80'
                    : rel.tag === 'Feature Update'
                    ? 'bg-teal-100 text-teal-800 border border-teal-300/80'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {rel.tag}
              </span>
            </div>

            {/* Mobile Date */}
            <div className="lg:hidden flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{rel.releaseDate}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-400 font-mono text-[11px]">Build {rel.buildNumber}</span>
            </div>
          </div>

          {/* Headline & Summary */}
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 tracking-tight mb-2">
            {rel.headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
            {rel.summary}
          </p>

          {/* Key Features & Highlights */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Key Features &amp; Enhancements</span>
            </h3>
            <ul className="space-y-2.5">
              {rel.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bug Fixes & Refinements */}
          {rel.bugFixes && rel.bugFixes.length > 0 && (
            <div className="pt-4 border-t border-slate-100 mb-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Fixes &amp; Stability</span>
              </h3>
              <ul className="space-y-2">
                {rel.bugFixes.map((fix, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>{fix}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metadata Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Google Play Verified Rollout</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px]">
                <Tag className="w-3 h-3 text-slate-400" />
                v{rel.version}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
