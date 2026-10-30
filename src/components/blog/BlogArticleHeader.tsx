import { ArrowLeft, BookOpen, Calendar, Clock, ShieldCheck } from 'lucide-react';
import { BlogPost } from '../../data/blogData';

interface BlogArticleHeaderProps {
  article: BlogPost;
  onNavigateBack: () => void;
}

export default function BlogArticleHeader({ article, onNavigateBack }: BlogArticleHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-100 pt-28 sm:pt-36 pb-10 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <button
              type="button"
              onClick={onNavigateBack}
              className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </button>
            <span className="text-slate-300">/</span>
            <button
              type="button"
              onClick={onNavigateBack}
              className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer transition-colors whitespace-nowrap"
            >
              Blogs
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 whitespace-nowrap shrink-0">
              {article.category}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs w-fit whitespace-nowrap shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Expert Verified
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium whitespace-nowrap shrink-0 bg-slate-100 px-2.5 py-1 rounded-full">
              {article.publishedAt}
            </span>
          </div>
        </div>

        {/* Eyebrow Category */}
        <div className="mb-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
            {article.category} • {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-5xl">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl font-normal">
          {article.excerpt}
        </p>

        {/* Author Metadata Bar */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-emerald-100 shrink-0">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 flex items-center gap-1">
                <span>{article.author.name}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </p>
              <p className="text-xs text-gray-500">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-gray-400" />
              {article.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-gray-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
