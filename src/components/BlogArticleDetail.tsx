import { useState, useEffect } from 'react';
import {
  Clock,
  Calendar,
  Check,
  ShieldCheck,
  Link2,
  ArrowLeft,
  BookOpen
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { getFullBlogArticle } from '../data/blogArticles';
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
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [article.slug]);

  const fullContent = getFullBlogArticle(article.slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== article.slug).slice(0, 3);

  const encodedUrl = encodeURIComponent(window.location.href);
  const encodedTitle = encodeURIComponent(article.title);

  // Active heading spy as user scrolls
  useEffect(() => {
    if (!fullContent || !fullContent.sections || fullContent.sections.length === 0) return;

    setActiveSectionId(fullContent.sections[0].id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      let current = fullContent.sections[0].id;
      for (const section of fullContent.sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSectionId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fullContent]);

  // Smooth scroll offset to never hide behind navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // 120px clearance below navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex-1 pb-16 bg-[#FDFDFC] text-slate-800 antialiased selection:bg-emerald-500/20 selection:text-emerald-800">
      {/* 1. Header (Matching Privacy Policy & Legal Layout) */}
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

      {/* 2. 21:9 Hero Image (Matching Everystore) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-2 pt-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-gray-100 shadow-md bg-gray-100">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. 2-Column Content Layout (Matching Everystore) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10 items-start">
          {/* Left Sticky Sidebar on Desktop - styled exactly like Everystore screenshot */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 space-y-6 sticky top-[116px]">
            {/* Card 1: TABLE OF CONTENTS */}
            {fullContent && fullContent.sections && fullContent.sections.length > 0 && (
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0d8258] shrink-0" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    TABLE OF CONTENTS
                  </h3>
                </div>

                <nav aria-label="Table of contents">
                  <ul className="space-y-4">
                    {fullContent.sections.map((sec) => {
                      const isActive = activeSectionId === sec.id;
                      return (
                        <li key={sec.id} className="space-y-2.5">
                          <button
                            type="button"
                            onClick={() => scrollToSection(sec.id)}
                            className={`w-full text-left text-[13px] leading-relaxed transition-colors cursor-pointer block ${
                              isActive
                                ? 'text-gray-950 font-bold'
                                : 'text-gray-500 hover:text-gray-900 font-normal'
                            }`}
                          >
                            {sec.heading}
                          </button>

                          {/* Sub-item (Featured Product/Module Showcase) matching Everystore */}
                          {sec.productShowcase && (
                            <button
                              type="button"
                              onClick={() => scrollToSection(sec.id)}
                              className="pl-4 text-left text-[13px] leading-relaxed text-gray-400 hover:text-gray-800 transition-colors cursor-pointer block"
                            >
                              {sec.productShowcase.title}
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            )}

            {/* Card 2: SHARE ARTICLE */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
                SHARE ARTICLE
              </h3>
              <div className="grid grid-cols-4 gap-2.5">
                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 mx-auto rounded-full bg-[#e7f9ef] text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-2xs hover:scale-105"
                  title="Share on WhatsApp"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 shadow-2xs hover:scale-105"
                  title="Share on X (Twitter)"
                  aria-label="Share on X"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 mx-auto rounded-full bg-[#e8f2fe] text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-200 shadow-2xs hover:scale-105"
                  title="Share on Facebook"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white'
                  }`}
                  title={copied ? 'Link Copied!' : 'Copy Link'}
                  aria-label={copied ? 'Link Copied!' : 'Copy Link'}
                >
                  {copied ? <Check className="h-4 w-4 text-white" /> : <Link2 className="h-4 w-4" />}
                </button>
              </div>

              {/* Toast/Feedback when copied */}
              {copied && (
                <div className="mt-3 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 py-1.5 px-3 rounded-full border border-emerald-200 flex items-center justify-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Link copied to clipboard!</span>
                </div>
              )}
            </div>
          </aside>

          {/* Right Column: Main Article Content Container (Expanded width) */}
          <article className="lg:col-span-8 xl:col-span-9 bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 lg:p-12 shadow-xs">
            <BlogArticleBody
              article={article}
              fullContent={fullContent}
              onOpenQrModal={onOpenQrModal}
            />

            {/* Mobile Share Widget (Visible only on lg:hidden) */}
            <div className="mt-10 pt-6 border-t border-gray-100 lg:hidden">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                  Share Article
                </h3>
                <div className="flex items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#e7f9ef] text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-2xs shrink-0"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 shadow-2xs shrink-0"
                    title="Share on X"
                    aria-label="Share on X"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#e8f2fe] text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-200 shadow-2xs shrink-0"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Copy Link */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer shrink-0 ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white'
                    }`}
                    title={copied ? 'Link Copied!' : 'Copy Link'}
                    aria-label={copied ? 'Link Copied!' : 'Copy Link'}
                  >
                    {copied ? <Check className="h-4 w-4 text-white" /> : <Link2 className="h-4 w-4" />}
                  </button>
                </div>

                {copied && (
                  <div className="mt-3 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 py-1.5 px-3 rounded-full border border-emerald-200 flex items-center justify-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Link copied to clipboard!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Written by Author Bio Box (Matching Everystore) */}
            <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-100 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200 shrink-0">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 flex items-center justify-center sm:justify-start gap-1">
                  <span>Written by {article.author.name}</span>
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  {article.author.role}
                </p>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {article.author.bio}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* 4. Related Stories (Matching Everystore) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-200/80">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
              Related Stories
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              More tips and stories you might enjoy
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

      {/* 5. Bottom Conversion Banner (Matching Everystore) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c1b1a] to-[#123630] p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Ready to Keep Your Pet Healthy &amp; Organized?
          </h3>
          <p className="mt-3 text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Eliminate missed vaccinations, stop double-feeding confusion, and track expenses effortlessly with PetHorizon.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-[#0c1b1a] hover:bg-gray-100 transition shadow-sm"
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
    </main>
  );
}
