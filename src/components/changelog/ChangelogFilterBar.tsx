import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

export type FilterTag = 'All' | 'Major Release' | 'Feature Update' | 'Patch';

interface ChangelogFilterBarProps {
  selectedTag: FilterTag;
  setSelectedTag: (tag: FilterTag) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  tagCounts: Record<FilterTag, number>;
}

export default function ChangelogFilterBar({
  selectedTag,
  setSelectedTag,
  searchQuery,
  setSearchQuery,
  tagCounts
}: ChangelogFilterBarProps) {
  const filterOptions: FilterTag[] = ['All', 'Major Release', 'Feature Update', 'Patch'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-xs mb-8 sm:mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4"
    >
      {/* Tag Chips */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {filterOptions.map((tag) => {
          const count = tagCounts[tag];
          const isSelected = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <span>{tag === 'All' ? 'All Releases' : tag}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
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
          className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 placeholder-slate-400 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-600 cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
