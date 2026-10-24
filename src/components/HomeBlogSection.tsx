import { BookOpen, ArrowRight, Stethoscope, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import BlogCard from './BlogCard';

interface HomeBlogSectionProps {
  onNavigateBlog: () => void;
  onSelectArticle: (slug: string) => void;
}

export default function HomeBlogSection({
  onNavigateBlog,
  onSelectArticle
}: HomeBlogSectionProps) {
  const topArticles = BLOG_POSTS.slice(0, 3);
  const secondaryArticles = BLOG_POSTS.slice(3, 6);

  return (
    <section id="guides" className="py-20 sm:py-28 bg-[#FBFBFA] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">
              Veterinary Guides &amp; Routines
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Trending Pet Care Guides &amp; <span className="text-emerald-700">Vet-Reviewed</span> Answers
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct, authoritative answers to the most searched pet health queries on Google from verified veterinary organizations.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onNavigateBlog}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
            >
              <span>Explore All Guides ({BLOG_POSTS.length})</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Top 3 Featured Real Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {topArticles.map((article: BlogPost) => (
            <BlogCard
              key={article.id}
              post={article}
              onClick={() => onSelectArticle(article.slug)}
            />
          ))}
        </div>

        {/* Secondary Quick Guides Bar */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-emerald-600" />
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
                More High-Intent Search Topics
              </h4>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Reviewed by Veterinary Advisory Board
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {secondaryArticles.map((article) => (
              <BlogCard
                key={article.id}
                post={article}
                onClick={() => onSelectArticle(article.slug)}
                compact
              />
            ))}
          </div>
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5 text-slate-700 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            All guides curated from accredited veterinary institutions
          </span>
          <span className="hidden sm:inline text-slate-300">&bull;</span>
          <span>Updated monthly with the latest clinical protocols</span>
        </div>
      </div>
    </section>
  );
}
