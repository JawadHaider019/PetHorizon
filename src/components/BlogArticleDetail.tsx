import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Stethoscope,
  Quote,
  Sparkles,
  Smartphone
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
  const [readPercent, setReadPercent] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>(
    article.sections[0]?.id || ''
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll reading progress percentage
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setReadPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (article.sections.length > 0) {
      setActiveSectionId(article.sections[0].id);
    }
  }, [article.slug]);

  // Active section spy for Table of Contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionElements = article.sections.map((sec) => ({
        id: sec.id,
        el: document.getElementById(sec.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop - 180;
          if (scrollY >= top) {
            setActiveSectionId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.sections]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  // Find related articles
  const relatedArticles = article.relatedSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-[64px] sm:pt-[70px] selection:bg-emerald-500/20 selection:text-emerald-800 relative">
      
      {/* Sticky Single-Row Sub-Bar (Height ~52px) */}
      <header className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-13 flex items-center justify-between gap-3">
          
          {/* Left: Back to Guides & Breadcrumb */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onNavigateBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200/80 transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-600" />
              <span>Back to Guides</span>
            </button>

            <span className="text-slate-300 hidden md:inline">&bull;</span>

            <span className="text-xs font-semibold text-slate-500 hidden md:inline truncate max-w-[240px]">
              {article.title}
            </span>
          </div>

          {/* Center: Reading Progress Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/60 text-[11px] font-bold text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>{readPercent}% read</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-emerald-700">{article.readTime}</span>
          </div>

          {/* Right: Share Link & App Download Link */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy Article Link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/80 transition-all cursor-pointer shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-xs shadow-emerald-800/10"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Get App</span>
            </a>
          </div>
        </div>

        {/* Ultra-thin Flush Reading Progress Bar */}
        <motion.div
          className="h-[2.5px] bg-emerald-600 origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Article Header Meta */}
        <div className="max-w-4xl mx-auto text-left mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-200">
              {article.category}
            </span>
            <span className="text-slate-300">&bull;</span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.publishDate}
            </span>
            <span className="text-slate-300">&bull;</span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.18] mb-4">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-6">
              {article.subtitle}
            </p>
          )}

          {/* Author Badge */}
          <div className="flex items-center gap-3.5 pt-4 pb-2 border-t border-slate-200/80">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 shadow-2xs"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm text-slate-900">{article.author.name}</h3>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="text-xs text-slate-500 font-medium">{article.author.role}</p>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto mb-10 rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 max-h-[460px] bg-slate-100">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two-Column Editorial Grid (Sticky TOC on Left, Deep Content on Right) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Desktop Left Sidebar: Table of Contents & Author Bio (lg:col-span-4) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Table of Contents Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Article Contents
                </span>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {readPercent}% Read
                </span>
              </div>
              <nav className="space-y-1">
                {article.sections.map((section) => {
                  const isCurrent = activeSectionId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                        isCurrent
                          ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200/80 shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate pr-2">{section.heading}</span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Author Profile Card */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                About the Author
              </span>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{article.author.name}</h4>
                  <p className="text-[11px] text-slate-500">{article.author.role}</p>
                </div>
              </div>
              {article.author.bio && (
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {article.author.bio}
                </p>
              )}
            </div>

            {/* Quick App Prompt */}
            <div className="bg-emerald-50/80 rounded-2xl border border-emerald-200/80 p-5 text-emerald-950">
              <div className="flex items-center gap-2 mb-2 font-bold text-xs text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Track Care with Pet Horizon
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                Put these vet guidelines into practice with automatic feeding schedules and medication logs.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                Download for Android
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </aside>

          {/* Main Article Body (lg:col-span-8) */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Key Takeaways Box (Light themed, high contrast) */}
            <div className="bg-emerald-50/90 rounded-2xl border border-emerald-200/90 p-6 text-left shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Bookmark className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-emerald-950">
                  Key Takeaways for Pet Parents
                </h3>
              </div>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured Sections */}
            {article.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 space-y-4 text-left border-b border-slate-100 pb-8 last:border-b-0"
              >
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Veterinary Tip Callout Box */}
                {section.vetTip && (
                  <div className="my-5 p-5 rounded-2xl bg-teal-50/90 border border-teal-200/90 flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-teal-950 uppercase tracking-wider mb-1">
                        {section.vetTip.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-teal-900 font-medium leading-relaxed">
                        {section.vetTip.text}
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Checklist */}
                {section.checklist && (
                  <div className="my-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Recommended Action Checklist
                    </span>
                    <ul className="space-y-2.5">
                      {section.checklist.map((item, cIdx) => (
                        <li
                          key={cIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium"
                        >
                          <div className="w-4 h-4 rounded-md border border-emerald-400 bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quote Block */}
                {section.quote && (
                  <figure className="my-6 p-6 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 space-y-2">
                    <Quote className="w-6 h-6 text-emerald-600 mb-1 opacity-70" />
                    <blockquote className="text-sm sm:text-base font-semibold italic text-slate-800 leading-relaxed">
                      "{section.quote.text}"
                    </blockquote>
                    <figcaption className="text-xs font-bold text-slate-500 pt-1">
                      — {section.quote.author}
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}

            {/* In-Article Helpdesk & Legal Link Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div>
                <span className="font-bold text-slate-800 block">Medical Disclaimer</span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  This guide is for informational purposes only and does not replace individualized clinical veterinary diagnosis.
                </p>
              </div>
              {onNavigateLegal && (
                <button
                  onClick={() => onNavigateLegal('privacy')}
                  className="shrink-0 text-emerald-700 font-bold hover:underline cursor-pointer"
                >
                  View Privacy Policy &rarr;
                </button>
              )}
            </div>

            {/* Bottom App Promo CTA */}
            <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200 text-center relative overflow-hidden">
              <div className="max-w-lg mx-auto space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  Free Download on Android
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Organize Your Pet’s Care Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Join hundreds of loving pet families who never miss a meal, medication, or veterinary milestone with Pet Horizon.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-800/20 transition-all cursor-pointer text-center"
                  >
                    Install Pet Horizon Free
                  </a>
                  <button
                    onClick={onNavigateBack}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-300/80 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Explore More Guides
                  </button>
                </div>
              </div>
            </div>

          </article>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Keep Reading
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Related Pet Health &amp; Routine Guides
                </h3>
              </div>
              <button
                onClick={onNavigateBack}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                All Guides <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.slug)}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col group"
                >
                  <div className="h-36 overflow-hidden bg-slate-100 relative">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-800 border border-slate-200/60 shadow-2xs">
                      {rel.category}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold block mb-1">
                        {rel.readTime}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 mt-4 inline-flex items-center gap-1">
                      Read Guide <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
