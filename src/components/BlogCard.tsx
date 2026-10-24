import { Clock, Flame, ShieldCheck, ChevronRight } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
  compact?: boolean;
}

export default function BlogCard({ post, onClick, compact = false }: BlogCardProps) {
  if (compact) {
    return (
      <div
        onClick={onClick}
        className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-300 transition-all cursor-pointer flex items-start gap-3.5 group"
      >
        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-200">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] text-amber-800 font-bold mb-1">
            <Flame className="w-3 h-3 text-amber-600" />
            <span>{post.searchVolume}</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-500 truncate">{post.sourceName}</span>
          </div>
          <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h5>
          <span className="text-[11px] font-semibold text-emerald-700 mt-1 inline-flex items-center gap-0.5">
            Read Guide &rarr;
          </span>
        </div>
      </div>
    );
  }

  return (
    <article
      onClick={onClick}
      className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Cover Image Container */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-bold text-emerald-800 border border-slate-200/60 shadow-2xs">
          {post.category}
        </div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-bold text-slate-700 border border-slate-200/60 shadow-2xs flex items-center gap-1">
          <Clock className="w-3 h-3 text-emerald-600" />
          {post.readTime}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* SEO Search Ranking Badges & Source */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-900 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-300/70">
              <Flame className="w-3 h-3 text-amber-600" />
              {post.searchVolume}
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[170px]">
              {post.sourceName}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug tracking-tight">
            {post.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </div>

        {/* Author & Read Action */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-emerald-200"
            />
            <div className="truncate max-w-[130px]">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-slate-800 truncate">
                  {post.author.name}
                </span>
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
              </div>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read Guide <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
