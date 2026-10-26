import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Share2,
  Check,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { getFullBlogArticle } from '../data/blogArticles';
import BlogReadingProgressBar from './blog/BlogReadingProgressBar';
import BlogArticleBody from './blog/BlogArticleBody';
import BlogCitationCard from './blog/BlogCitationCard';
import BlogRelatedPosts from './blog/BlogRelatedPosts';

interface BlogArticleDetailProps {
  article: BlogPost;
  onNavigateBack: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function BlogArticleDetail({
  article,
  onNavigateBack,
  onSelectArticle,
  onNavigateLegal
}: BlogArticleDetailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.slug]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fullContent = getFullBlogArticle(article.slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== article.slug).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-24 pb-16 selection:bg-emerald-500/20 selection:text-emerald-800">
      <BlogReadingProgressBar />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-2 pb-4 sm:pb-6 border-b border-slate-100 mb-8">
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="hidden sm:inline">Back to Pet Care Hub</span>
            <span className="sm:hidden">Pet Care Hub</span>
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 border border-slate-200/80 cursor-pointer whitespace-nowrap shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Share2 className="w-3.5 h-3.5 shrink-0" />}
            <span>{copied ? 'Copied' : 'Share Guide'}</span>
          </button>
        </div>

        {/* High-Intent SEO Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-900 text-[11px] font-black px-3 py-1 rounded-full border border-amber-300/80 whitespace-nowrap shrink-0">
            <Flame className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            {article.searchRankBadge} ({article.searchVolume} searches)
          </span>
          <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 whitespace-nowrap shrink-0">
            {article.category}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
            Curated from: {article.sourceName}
          </span>
        </div>

        {/* Title & Excerpt */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
          {article.excerpt}
        </p>

        {/* Author / Source Meta Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 pb-6 border-y border-slate-100 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-emerald-200"
            />
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-bold text-sm text-slate-900">{article.author.name}</h4>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="text-xs text-slate-500">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-xs border border-slate-200/90 mb-8 max-h-[440px] bg-slate-100">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Comprehensive 50%-70% On-Page Written Content Body */}
        <BlogArticleBody article={article} fullContent={fullContent} />

        {/* Official Source Publication Citation Card */}
        <BlogCitationCard article={article} />

        {/* Related Guides & Legal Disclaimers */}
        <BlogRelatedPosts
          related={related}
          onSelectArticle={onSelectArticle}
          onNavigateLegal={onNavigateLegal}
        />
      </div>
    </article>
  );
}
