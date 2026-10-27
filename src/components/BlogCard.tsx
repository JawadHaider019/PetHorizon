import { useState } from 'react';
import { Clock, MapPin, Bookmark, Check } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
  compact?: boolean;
}

export default function BlogCard({ post, onClick, compact = false }: BlogCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Feeding & Nutrition':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Health & Vaccines':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Family & Routine':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'Dog Care':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Cat Care':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  if (compact) {
    return (
      <div
        onClick={onClick}
        className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/40 border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer flex items-start gap-3.5 group shadow-2xs"
      >
        <div className="w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100 relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 mb-1">
            <span className="text-emerald-700 font-bold">{post.category}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
          <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h5>
        </div>
      </div>
    );
  }

  return (
    <article
      onClick={onClick}
      className="group flex flex-col rounded-2xl bg-white border border-slate-100 p-3.5 shadow-2xs hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-pointer"
    >
      {/* 16:10 Aspect Ratio Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 block">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {post.featured && (
          <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
            Featured
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col pt-3.5 pb-1">
        {/* Category & Location Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold border ${getCategoryStyles(
              post.category
            )}`}
          >
            <span className="text-[10px] font-bold">●</span>
            {post.category}
          </span>

          {post.targetLocation && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{post.targetLocation}</span>
            </span>
          )}

          <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        {/* Bottom Bar: Author Avatar, Name, Date, Bookmark */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-200 shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">
                {post.author.name}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {post.publishedAt}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBookmark}
            className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
              isBookmarked
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
            }`}
            title={isBookmarked ? 'Saved to bookmarks' : 'Save article'}
            aria-label="Save article"
          >
            {isBookmarked ? (
              <Check className="h-4 w-4" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
