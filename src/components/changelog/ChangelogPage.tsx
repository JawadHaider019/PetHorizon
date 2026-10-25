import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  Calendar,
  Layers,
  Search,
  X,
  ShieldCheck,
  Tag,
  GitCommit
} from 'lucide-react';
import { CHANGELOG_RELEASES, ChangelogRelease } from '../../data/changelogData';
import { PLAY_STORE_URL } from '../../config/siteConfig';

interface ChangelogPageProps {
  onNavigateHome: () => void;
}

type FilterTag = 'All' | 'Major Release' | 'Feature Update' | 'Patch';

export default function ChangelogPage({ onNavigateHome }: ChangelogPageProps) {
  const [selectedTag, setSelectedTag] = useState<FilterTag>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter releases by selected tag and search query
  const filteredReleases = useMemo(() => {
    return CHANGELOG_RELEASES.filter((rel) => {
      const matchesTag =
        selectedTag === 'All'
          ? true
          : selectedTag === 'Major Release'
          ? rel.tag === 'Major Release' || rel.tag === 'Latest'
          : rel.tag === selectedTag;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        rel.version.toLowerCase().includes(q) ||
        rel.headline.toLowerCase().includes(q) ||
        rel.summary.toLowerCase().includes(q) ||
        rel.highlights.some((h) => h.toLowerCase().includes(q)) ||
        (rel.bugFixes && rel.bugFixes.some((f) => f.toLowerCase().includes(q)));

      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  const tagCounts = useMemo(() => {
    return {
      All: CHANGELOG_RELEASES.length,
      'Major Release': CHANGELOG_RELEASES.filter(
        (r) => r.tag === 'Major Release' || r.tag === 'Latest'
      ).length,
      'Feature Update': CHANGELOG_RELEASES.filter((r) => r.tag === 'Feature Update').length,
      Patch: CHANGELOG_RELEASES.filter((r) => r.tag === 'Patch' || r.tag === 'Enhancement').length
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-28 sm:pt-36 pb-20 selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between gap-3 mb-8 sm:mb-10 flex-wrap">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 border border-slate-200/90 transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600 group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <span>Back to Home</span>
          </button>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all group"
          >
            <span>Get on Google Play</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* Hero Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Product Release Notes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Pet Horizon Changelog
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive history of updates, caregiver coordination tools, and system optimizations shipped to pet families worldwide.
          </p>
        </div>

        {/* Filter Chips & Search Bar Row */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-xs mb-10 sm:mb-14 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Tag Chips */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {(['All', 'Major Release', 'Feature Update', 'Patch'] as FilterTag[]).map((tag) => {
              const count = tagCounts[tag];
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  <span>{tag === 'All' ? 'All Releases' : tag}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                      isSelected ? 'bg-emerald-700/80 text-white' : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Keyword Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search release notes..."
              className="w-full pl-9 pr-8 py-1.5 sm:py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State when filters yield no results */}
        {filteredReleases.length === 0 && (
          <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-slate-200/80 my-8 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              No matching releases found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-5">
              We couldn&apos;t find any releases matching &quot;{searchQuery}&quot;. Try adjusting your search query or reset the filter.
            </p>
            <button
              onClick={() => {
                setSelectedTag('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Connected Timeline Rail (Dedicated Columns to Guarantee Zero Overlap) */}
        <div className="space-y-6 sm:space-y-8">
          {filteredReleases.map((rel: ChangelogRelease, index: number) => {
            const isLatest = rel.tag === 'Latest' || index === 0;

            return (
              <div
                key={rel.version}
                className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-6 group"
              >
                {/* 1. Date & Build Column (Desktop Only: sits comfortably to the left of the spine) */}
                <div className="hidden lg:flex w-40 shrink-0 flex-col items-end pt-5 text-right pr-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{rel.releaseDate}</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 mt-1">
                    Build {rel.buildNumber}
                  </span>
                </div>

                {/* 2. Timeline Spine & Node Column (Desktop Only: dedicated column, never overlaps content) */}
                <div className="hidden lg:flex flex-col items-center shrink-0 w-8">
                  {/* Node */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-xs z-10 transition-transform group-hover:scale-110 mt-4.5 ${
                      isLatest
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 shadow-emerald-600/20'
                        : 'bg-white text-slate-600 border-2 border-slate-300 ring-4 ring-[#FDFDFC]'
                    }`}
                  >
                    <GitCommit className="w-4 h-4" />
                  </div>
                  {/* Vertical connecting line */}
                  {index !== filteredReleases.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                  )}
                </div>

                {/* 3. Release Card Column (Takes full width on mobile, remaining width on desktop) */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`bg-white rounded-3xl p-5 sm:p-7 border transition-all ${
                      isLatest
                        ? 'border-emerald-300/90 shadow-md ring-1 ring-emerald-500/20'
                        : 'border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Header Row: Version, Tag, and (Mobile & Tablet) Date & Build */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2.5 flex-wrap">
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

                      {/* Date & Build Info in Card Header */}
                      <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{rel.releaseDate}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">
                          Build {rel.buildNumber}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug tracking-tight">
                      {rel.headline}
                    </h2>

                    {/* Summary narrative */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {rel.summary}
                    </p>

                    {/* Semantic Category Block 1: New Features & Highlights */}
                    <div className="mb-6 bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200/80">
                          <Tag className="w-3 h-3 text-emerald-700" />
                          <span>Features &amp; Highlights</span>
                        </span>
                        <span className="text-[11px] text-slate-400 font-semibold">
                          ({rel.highlights.length} updates)
                        </span>
                      </div>

                      <ul className="space-y-2.5">
                        {rel.highlights.map((item: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Semantic Category Block 2: Fixes & Stability (if present) */}
                    {rel.bugFixes && rel.bugFixes.length > 0 && (
                      <div className="bg-amber-50/40 rounded-2xl p-4 sm:p-5 border border-amber-200/50">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200/90">
                            <Wrench className="w-3 h-3 text-amber-800" />
                            <span>Fixes &amp; Stability</span>
                          </span>
                          <span className="text-[11px] text-slate-400 font-semibold">
                            ({rel.bugFixes.length} resolved)
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {rel.bugFixes.map((fix: string, fIdx: number) => (
                            <li
                              key={fIdx}
                              className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                              <span>{fix}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Support Box */}
        <div className="mt-14 sm:mt-18 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                Have a feature suggestion or found a bug?
              </h4>
              <p className="text-xs text-slate-500">
                Our core development team reviews community requests weekly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href="mailto:pethorizon2026@gmail.com"
              className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors cursor-pointer"
            >
              Contact Support
            </a>
            <button
              onClick={onNavigateHome}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
