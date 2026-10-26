import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  MapPin,
  Check,
  Share2,
  TrendingUp,
  Smartphone,
  QrCode,
  ShieldCheck,
  Link2
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { getFullBlogArticle } from '../data/blogArticles';
import BlogReadingProgressBar from './blog/BlogReadingProgressBar';
import BlogArticleBody from './blog/BlogArticleBody';
import BlogCard from './BlogCard';

interface BlogArticleDetailProps {
  article: BlogPost;
  onNavigateBack: () => void;
  onSelectArticle: (slug: string) => void;
  onOpenQrModal?: () => void;
}

export default function BlogArticleDetail({
  article,
  onNavigateBack,
  onSelectArticle,
  onOpenQrModal
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

  const encodedUrl = encodeURIComponent(window.location.href);
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <article className="min-h-screen bg-[#F7F9F8] text-slate-800 antialiased pt-28 sm:pt-36 pb-16 selection:bg-[#126c55]/20 selection:text-[#126c55]">
      <BlogReadingProgressBar />

      {/* Top Header matching Everystore */}
      <header className="bg-white border-b border-slate-100 py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-6">
            <button
              type="button"
              onClick={onNavigateBack}
              className="hover:text-[#126c55] transition cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={onNavigateBack}
              className="hover:text-[#126c55] transition cursor-pointer"
            >
              Blogs
            </button>
            <span>/</span>
            <span className="text-slate-800 font-medium">{article.category}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 rounded-md bg-[#007aff]/10 px-2.5 py-1 text-xs font-semibold text-[#007aff]">
              <span className="text-[10px] font-bold">●</span>
              {article.category}
            </span>

            {article.targetLocation && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200/60">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                <span>{article.targetLocation}</span>
              </span>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
            {article.excerpt}
          </p>

          {/* Author Metadata Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-emerald-100 shrink-0">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{article.author.name}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                </p>
                <p className="text-xs text-slate-500 font-medium">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-slate-400" />
                {article.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-slate-400" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 21:9 Hero Image matching Everystore */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-2 pt-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-slate-100 shadow-md bg-slate-100">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2-Column Content Layout matching Everystore */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Sticky Sidebar on Desktop */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6 sticky top-28">
            {/* Share Widget */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Share Article
              </h3>
              <div className="flex items-center gap-2">
                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                  title="Share on WhatsApp"
                >
                  <Share2 className="h-4 w-4" />
                </a>

                {/* X / Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition-colors"
                  title="Share on X"
                >
                  <span className="text-xs font-bold">𝕏</span>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                  title="Share on Facebook"
                >
                  <span className="text-xs font-bold">f</span>
                </a>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border text-xs font-semibold transition-colors border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
                  title="Copy Link"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Link2 className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Link'}</span>
                </button>
              </div>
            </div>

            {/* Quick App Download Card */}
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>PetHorizon Mobile App</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Organize feeding routines, vaccinations, and family QR codes in one pocket app.
              </p>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.enscyd.pethorizon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#126c55] hover:bg-[#0e5644] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Google Play Download</span>
                </a>
                {onOpenQrModal && (
                  <button
                    type="button"
                    onClick={onOpenQrModal}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-emerald-200 hover:bg-emerald-50 text-emerald-900 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Scan QR to Install</span>
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Right Column: Main Content */}
          <main className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-xs">
            {/* Article Body */}
            <BlogArticleBody
              article={article}
              fullContent={fullContent}
              onOpenQrModal={onOpenQrModal}
            />

            {/* Trending Searches Tag Cloud matching Everystore */}
            {article.trendingSearches && article.trendingSearches.length > 0 && (
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-100/80 p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-[#126c55]" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Trending Searches {article.targetLocation ? `in ${article.targetLocation}` : ''}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Frequently searched by pet parents:
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.trendingSearches.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-lg bg-white border border-emerald-200/60 px-3 py-1 text-xs font-medium text-emerald-900 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Written by Author Bio Box matching Everystore */}
            <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-slate-200 shrink-0">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1">
                  <span>Written by {article.author.name}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {article.author.role}
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {article.author.bio}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Related Stories matching Everystore */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200/80">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Related Stories
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              More pet care guides and clinical timetables you might find helpful
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateBack}
            className="text-xs font-semibold text-[#126c55] hover:underline cursor-pointer"
          >
            View all articles &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => onSelectArticle(post.slug)}
            />
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner matching Everystore */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c1b1a] to-[#123630] p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Ready to Keep Your Pet Healthy &amp; Organized?
          </h3>
          <p className="mt-3 text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Eliminate missed vaccinations, stop double-feeding confusion, and track expenses effortlessly with PetHorizon.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.enscyd.pethorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-[#0c1b1a] hover:bg-slate-100 transition shadow-sm"
            >
              Download on Google Play
            </a>
            {onOpenQrModal && (
              <button
                type="button"
                onClick={onOpenQrModal}
                className="rounded-xl bg-[#126c55] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0e5644] transition shadow-sm cursor-pointer"
              >
                Scan QR Code
              </button>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
