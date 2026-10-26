import { Search, X } from 'lucide-react';

interface BlogFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

export const BLOG_CATEGORIES = [
  'All Stories',
  'Customer Guide',
  'Product Reviews',
  'Shopping Tips',
  'Local Vet & Supplies'
];

export default function BlogFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}: BlogFilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200/80 pb-6 mb-8">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
        {BLOG_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isSelected
                  ? 'bg-[#126c55] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search Input Box */}
      <div className="relative w-full sm:w-72 shrink-0">
        <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles & guides..."
          className="w-full rounded-full border border-slate-200 bg-white pl-9 pr-8 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#126c55] focus:outline-none focus:ring-1 focus:ring-[#126c55] transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
            title="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
