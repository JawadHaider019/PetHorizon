import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Layers, Search } from 'lucide-react';
import { CHANGELOG_RELEASES, ChangelogRelease } from '../../data/changelogData';
import { PLAY_STORE_URL } from '../../config/siteConfig';
import ChangelogFilterBar, { FilterTag } from './ChangelogFilterBar';
import ChangelogReleaseCard from './ChangelogReleaseCard';

interface ChangelogPageProps {
  onNavigateHome: () => void;
}

export default function ChangelogPage({ onNavigateHome }: ChangelogPageProps) {
  const [selectedTag, setSelectedTag] = useState<FilterTag>('All');
  const [searchQuery, setSearchQuery] = useState('');

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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between gap-3 mb-8 sm:mb-10 flex-wrap"
        >
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 border border-slate-200/90 transition-all cursor-pointer shadow-2xs group active:scale-98"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600 group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <span>Back to Home</span>
          </button>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all group"
          >
            <span>Get on Google Play</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Product Release Notes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Pet Horizon Changelog
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive history of updates, caregiver coordination tools, and system optimizations shipped to pet families worldwide.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <ChangelogFilterBar
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          tagCounts={tagCounts}
        />

        {/* Empty State */}
        <AnimatePresence>
          {filteredReleases.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-slate-200/80 my-8 shadow-xs"
            >
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
                className="px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer active:scale-95"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timeline Rail List */}
        <div className="relative">
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {filteredReleases.map((rel: ChangelogRelease, index: number) => (
              <ChangelogReleaseCard
                key={rel.version}
                rel={rel}
                index={index}
                isLatest={rel.tag === 'Latest' || index === 0}
                isLast={index === filteredReleases.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
