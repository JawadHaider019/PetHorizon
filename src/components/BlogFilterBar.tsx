import { Search, Flame } from 'lucide-react';
import { BLOG_CATEGORIES } from '../data/blogData';

interface BlogFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

const TRENDING_QUERIES = [
  { label: 'Toxic Foods', query: 'toxic' },
  { label: 'Puppy Potty', query: 'potty' },
  { label: 'Cat Dehydration', query: 'kidney' },
  { label: 'Emergency Red Flags', query: 'emergency' },
  { label: 'Heartworm Protocol', query: 'heartworm' },
  { label: 'Calorie Calculator', query: 'calorie' }
];

export default function BlogFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}: BlogFilterBarProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by keywords: toxic foods, potty training, emergency..."
          className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Quick Trending Keyword Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs">
        <span className="text-slate-400 font-semibold flex items-center gap-1 text-[11px] whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          Trending:
        </span>
        {TRENDING_QUERIES.map((item) => (
          <button
            key={item.label}
            onClick={() => onSearchChange(item.query)}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 font-medium text-[11px] border border-slate-200/60 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Category Pills */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
        {BLOG_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-700/20 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
