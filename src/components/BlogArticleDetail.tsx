import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Share2,
  Check,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Flame,
  ChevronRight
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';

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

  const related = BLOG_POSTS.filter((p) => p.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-24 pb-16 selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-600" />
            <span>Back to Knowledge Hub</span>
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 border border-slate-200/80 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* SEO Search Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-900 text-[11px] font-black px-3 py-1 rounded-full border border-amber-300/80">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            {article.searchRankBadge} ({article.searchVolume} searches)
          </span>
          <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            {article.category}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            Source: {article.sourceName}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
          {article.excerpt}
        </p>

        {/* Author / Source Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 pb-6 border-y border-slate-100 mb-8">
          <div className="flex items-center gap-3">
            <img src={article.author.avatar} alt={article.author.name} className="w-11 h-11 rounded-full object-cover border border-emerald-200" />
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

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-xs border border-slate-200/90 mb-10 max-h-[440px] bg-slate-100">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Key Veterinary Takeaways Card */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/90 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-emerald-950">
              Essential Pet Care Takeaways
            </h3>
          </div>
          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                  ✓
                </div>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Official Authoritative Guide Action Card */}
        <div className="my-10 p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
            Official Source Publication
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Read the complete guide on {article.sourceName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            This article is curated from accredited veterinary research by {article.sourceName}. View full clinical citations and protocols on their official website.
          </p>
          <div className="pt-2">
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-800/20 transition-all cursor-pointer"
            >
              <span>Open Full Article on {article.sourceName}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <h3 className="text-xl font-black text-slate-900 mb-6">Related High-Ranking Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectArticle(item.slug)}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-800 block mb-1">{item.searchVolume}</span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2">{item.title}</h4>
                </div>
                <span className="text-xs font-bold text-emerald-600 mt-4 inline-flex items-center gap-1">
                  Read <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Curated for educational purposes. Always consult an accredited veterinarian in emergencies.
          {onNavigateLegal && (
            <span className="block mt-1">
              Read our{' '}
              <button
                onClick={() => onNavigateLegal('privacy')}
                className="text-emerald-700 underline font-semibold cursor-pointer"
              >
                Privacy Policy
              </button>
              .
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
