import { useState, useEffect } from 'react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { getFullBlogArticle } from '../data/blogArticles';
import BlogArticleHeader from './blog/BlogArticleHeader';
import BlogSidebarToc from './blog/BlogSidebarToc';
import BlogShareWidget from './blog/BlogShareWidget';
import BlogArticleBody from './blog/BlogArticleBody';
import BlogConversionBanner from './blog/BlogConversionBanner';
import BlogCard from './BlogCard';

interface BlogArticleDetailProps {
  article: BlogPost;
  onNavigateBack: () => void;
  onNavigateHome?: () => void;
  onSelectArticle: (slug: string) => void;
  onOpenQrModal?: () => void;
}

export default function BlogArticleDetail({
  article,
  onNavigateBack,
  onNavigateHome,
  onSelectArticle,
  onOpenQrModal
}: BlogArticleDetailProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [article.slug]);

  const fullContent = getFullBlogArticle(article.slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== article.slug)
    .map((candidate) => {
      let score = candidate.category === article.category ? 3 : 0;
      const articleTags = new Set(article.tags.map((t) => t.toLowerCase()));
      candidate.tags.forEach((t) => {
        if (articleTags.has(t.toLowerCase())) score += 1;
      });
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.candidate);
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    if (!fullContent?.sections?.length) return;
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 pb-16 bg-[#FDFDFC] text-slate-800 antialiased selection:bg-emerald-500/20 selection:text-emerald-800">
      {/* 1. Header & Metadata */}
      <BlogArticleHeader
        article={article}
        onNavigateBack={onNavigateBack}
        onNavigateHome={onNavigateHome}
      />

      {/* 2. Hero 21:9 Cover */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-2 pt-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-gray-100 shadow-md bg-gray-100">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. 2-Column Content Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10 items-start">
          {/* Left Sticky Sidebar on Desktop */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 space-y-6 sticky top-[116px]">
            <BlogSidebarToc
              fullContent={fullContent}
              activeSectionId={activeSectionId}
              onScrollToSection={scrollToSection}
            />
            <BlogShareWidget title={article.title} url={articleUrl} />
          </aside>

          {/* Right Column: Main Content */}
          <article className="lg:col-span-8 xl:col-span-9 bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 lg:p-12 shadow-xs">
            <BlogArticleBody
              article={article}
              fullContent={fullContent}
              onOpenQrModal={onOpenQrModal}
            />

            {/* Mobile Share Widget */}
            <div className="mt-10 pt-6 border-t border-gray-100 lg:hidden">
              <BlogShareWidget title={article.title} url={articleUrl} isMobile />
            </div>

            {/* Author Bio Card */}
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
                <p className="text-xs text-gray-500 font-medium mt-0.5">{article.author.role}</p>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{article.author.bio}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* 4. Related Stories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-200/80">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Related Stories</h3>
            <p className="text-xs text-gray-500 mt-1">More tips and stories you might enjoy</p>
          </div>
          <a
            href="/blogs"
            onClick={(e) => {
              e.preventDefault();
              onNavigateBack();
            }}
            className="text-xs font-semibold text-[#126c55] hover:underline cursor-pointer"
          >
            View all articles &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((post) => (
            <BlogCard key={post.id} post={post} onClick={() => onSelectArticle(post.slug)} />
          ))}
        </div>
      </section>

      {/* 5. Bottom Conversion Banner */}
      <BlogConversionBanner onOpenQrModal={onOpenQrModal} />
    </div>
  );
}
