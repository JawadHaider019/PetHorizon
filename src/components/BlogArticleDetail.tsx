import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Quote,
  Sparkles,
  Smartphone,
  Flame,
  Search,
  HelpCircle,
  ChevronDown,
  AlertTriangle,
  PhoneCall
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
    setOpenFaqIndex(0);
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

  // Inject Google JSON-LD Schema (Article + FAQPage) for SEO Rich Snippets
  useEffect(() => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.seoMetaDescription,
      image: article.coverImage,
      datePublished: '2026-10-01',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pet Horizon',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pethorizon.app/logo.png'
        }
      },
      keywords: article.tags.join(', ')
    };

    const faqSchema =
      article.faqs && article.faqs.length > 0
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: article.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }
        : null;

    const scriptArticle = document.createElement('script');
    scriptArticle.type = 'application/ld+json';
    scriptArticle.id = 'seo-article-schema';
    scriptArticle.text = JSON.stringify(articleSchema);
    document.head.appendChild(scriptArticle);

    let scriptFaq: HTMLScriptElement | null = null;
    if (faqSchema) {
      scriptFaq = document.createElement('script');
      scriptFaq.type = 'application/ld+json';
      scriptFaq.id = 'seo-faq-schema';
      scriptFaq.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptFaq);
    }

    return () => {
      const existingArticle = document.getElementById('seo-article-schema');
      if (existingArticle) existingArticle.remove();
      const existingFaq = document.getElementById('seo-faq-schema');
      if (existingFaq) existingFaq.remove();
    };
  }, [article]);

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

  const isEmergencyArticle =
    article.slug.includes('toxic') || article.slug.includes('emergency');

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
          
          {/* SEO Search Ranking Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-900 text-[11px] font-black px-3 py-1 rounded-full border border-amber-300/80 shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              {article.searchRankBadge}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
              <Search className="w-3 h-3 text-slate-400" />
              Search Vol: <strong className="text-emerald-700">{article.searchVolume}</strong>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/80">
              Target Keyword: <span className="font-semibold text-slate-700">"{article.seoKeyword}"</span>
            </span>
          </div>

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

          {/* Author Badge & Verified Credentials */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-2 border-t border-slate-200/80">
            <div className="flex items-center gap-3.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 shadow-2xs"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-slate-900">{article.author.name}</h3>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-500 font-medium">{article.author.role}</p>
                {article.author.credentials && (
                  <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 mt-0.5">
                    {article.author.credentials}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold">
              <Stethoscope className="w-4 h-4 text-emerald-700" />
              <span>Veterinary Medical Board Reviewed</span>
            </div>
          </div>
        </div>

        {/* Emergency Hotline Alert Card if Emergency / Poison article */}
        {isEmergencyArticle && (
          <div className="max-w-4xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-950">
                  Critical Pet Poison &amp; ER Hotlines
                </h4>
                <p className="text-xs text-amber-900 mt-0.5">
                  If your pet is currently in distress, do not wait: Call ASPCA Poison Control at{' '}
                  <strong className="underline">(888) 426-4435</strong> or your nearest 24/7 animal hospital.
                </p>
              </div>
            </div>
            <a
              href="tel:8884264435"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-black transition-colors shadow-2xs cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Poison Control</span>
            </a>
          </div>
        )}

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
                {article.sections.map((sec, idx) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200/80 shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-2">{sec.heading}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive
                            ? 'text-emerald-700 translate-x-0.5'
                            : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />
                    </button>
                  );
                })}

                {article.faqs && article.faqs.length > 0 && (
                  <button
                    onClick={() => scrollToSection('frequently-asked-questions')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-between cursor-pointer"
                  >
                    <span>Frequently Asked Questions</span>
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                )}
              </nav>
            </div>

            {/* Key SEO Summary Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-2xl border border-emerald-200/80 p-5 shadow-2xs space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-900 block">
                SEO Search Insights
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ranked in the <strong>top 1% of veterinary queries</strong> nationwide. Written to address real questions asked by pet owners on Google.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-emerald-200/60 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">Query Volume:</span>
                  <span className="font-bold text-emerald-800">{article.searchVolume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Medical Review:</span>
                  <span className="font-bold text-slate-700">Verified DVM</span>
                </div>
              </div>
            </div>

            {/* Author Profile Bio Box */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                About the Author
              </span>
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-200"
                />
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{article.author.name}</h4>
                  <p className="text-[11px] text-slate-500">{article.author.role}</p>
                </div>
              </div>
              {article.author.bio && (
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {article.author.bio}
                </p>
              )}
            </div>

          </aside>

          {/* Editorial Content (lg:col-span-8) */}
          <article className="lg:col-span-8 space-y-10">
            
            {/* Key Takeaways Callout Box */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="bg-emerald-50/70 rounded-3xl border border-emerald-200/90 p-6 sm:p-7 shadow-2xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-2xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-emerald-950">
                    Key Takeaways &amp; Summary
                  </h3>
                </div>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        ✓
                      </div>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections Content */}
            {article.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 space-y-4 pt-2"
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

            {/* Interactive Google FAQ Schema Accordion */}
            {article.faqs && article.faqs.length > 0 && (
              <section id="frequently-asked-questions" className="scroll-mt-28 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-2xs">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions (FAQ)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Common questions answered by veterinary specialists to help you safeguard your pet.
                </p>

                <div className="space-y-3">
                  {article.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-emerald-600' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

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
                  Join loving pet families who never miss a meal, medication, or veterinary milestone with Pet Horizon.
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
                  Related High-Ranking Pet Guides
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
                      <div className="flex items-center gap-1 text-[10px] text-amber-800 font-bold mb-1">
                        <Flame className="w-3 h-3 text-amber-600" />
                        <span>{rel.searchVolume}</span>
                      </div>
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
