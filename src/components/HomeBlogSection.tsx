import { motion } from 'framer-motion';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Flame,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

interface HomeBlogSectionProps {
  onNavigateBlog: () => void;
  onSelectArticle: (slug: string) => void;
}

export default function HomeBlogSection({
  onNavigateBlog,
  onSelectArticle
}: HomeBlogSectionProps) {
  // Grab top 3 featured/trending articles for the main showcase
  const topArticles = BLOG_POSTS.slice(0, 3);
  const secondaryArticles = BLOG_POSTS.slice(3, 6);

  return (
    <section id="guides" className="py-20 sm:py-28 bg-[#FBFBFA] relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200/80 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5" />
              Evidence-Based Veterinary Care &amp; Routines
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Trending Pet Care Guides &amp; <span className="text-emerald-700">Vet-Reviewed</span> Answers
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct, authoritative answers to the most searched pet health queries on Google—from emergency toxic food checklists to puppy schedules and kidney hydration.
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
          {topArticles.map((article: BlogPost, idx: number) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onSelectArticle(article.slug)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Cover Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-bold text-emerald-800 border border-slate-200/60 shadow-2xs">
                  {article.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-bold text-slate-700 border border-slate-200/60 shadow-2xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  {article.readTime}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* SEO Search Ranking Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-900 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-300/70">
                      <Flame className="w-3 h-3 text-amber-600" />
                      {article.searchVolume}
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                      "{article.seoKeyword}"
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug tracking-tight">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author & Read Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-emerald-200"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-800 truncate max-w-[120px]">
                          {article.author.name}
                        </span>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-400 block">Verified Author</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Guide <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
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
              <div
                key={article.id}
                onClick={() => onSelectArticle(article.slug)}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-300 transition-all cursor-pointer flex items-start gap-3.5 group"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-800 font-bold mb-1">
                    <Flame className="w-3 h-3 text-amber-600" />
                    <span>{article.searchVolume}</span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h5>
                  <span className="text-[11px] font-semibold text-emerald-700 mt-1 inline-flex items-center gap-0.5">
                    Read &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 text-slate-700 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            All articles include Google Rich FAQ Schema
          </span>
          <span className="hidden sm:inline text-slate-300">&bull;</span>
          <span>Updated monthly with the latest veterinary science protocols</span>
        </div>

      </div>
    </section>
  );
}
