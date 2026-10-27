import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import BlogCard from './BlogCard';
import BlogFilterBar from './BlogFilterBar';
import BlogNewsletter from './BlogNewsletter';
import BlogPagination from './blog/BlogPagination';

interface BlogHubProps {
  onNavigateHome: () => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
  onSelectArticle?: (slug: string) => void;
}

const POSTS_PER_PAGE = 9;

export default function BlogHub({ onNavigateHome, onSelectArticle }: BlogHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Stories');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const postTags = post.tags.map((t) => t.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All Stories' ||
      selectedCategory === 'All Articles' ||
      post.category === selectedCategory ||
      (selectedCategory === 'Puppies & Kittens' &&
        postTags.some((t) => t.includes('puppy') || t.includes('kitten'))) ||
      (selectedCategory === 'Safety & Emergencies' &&
        postTags.some((t) =>
          ['emergency', 'poison', 'toxic', 'first aid', 'safety', 'hypothermia', 'heatstroke', 'bloat'].some((k) =>
            t.includes(k)
          )
        )) ||
      (selectedCategory === 'Training & Behavior' &&
        postTags.some((t) =>
          ['training', 'behavior', 'anxiety', 'potty', 'crate', 'litter box'].some((k) => t.includes(k))
        )) ||
      (selectedCategory === 'Pet Tech & Apps' &&
        postTags.some((t) =>
          ['app', 'tech', 'tracker', 'gps', 'wearable'].some((k) => t.includes(k))
        ));

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.seoKeyword.toLowerCase().includes(q) ||
      post.targetLocation.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCardClick = (post: BlogPost) => {
    if (onSelectArticle) {
      onSelectArticle(post.slug);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-28 sm:pt-36 pb-16 selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb (Identical styling to Privacy Policy page) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <button
              onClick={onNavigateHome}
              className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 whitespace-nowrap">Resources &amp; Guides</span>
            <span className="text-slate-300">/</span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 whitespace-nowrap shrink-0">
              Blog &amp; Knowledge Hub
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs w-fit whitespace-nowrap shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Expert Pet Insights
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium whitespace-nowrap shrink-0 bg-slate-100 px-2.5 py-1 rounded-full">
              Updated Weekly
            </span>
          </div>
        </div>

        {/* Hero Banner (Identical layout & typography to Privacy Policy) */}
        <div className="text-center max-w-3xl mx-auto pt-2 pb-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">
              Official Pet Care &amp; Routine Guides
            </p>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pet Horizon Blog &amp; Guides
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Guides and tips for pet health, veterinary schedules, household co-parenting, and smart budgeting: track vaccines, prevent double-feeding, and care for your pets with PetHorizon.
            </p>
          </motion.div>
        </div>

        {/* Key Knowledge Guarantees Pill Grid (Identical to Privacy Policy) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10 pt-6 border-t border-slate-100">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Veterinary Backed Insights</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Practical health, vaccination timelines, and toxicity alerts researched for dog and cat safety.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Family Co-Parenting Tips</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Tested routines and multi-caregiver coordination guides to prevent missed meds and double feedings.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Budget &amp; Nutrition Trackers</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Actionable guides on calorie calculations, vet cost budgeting, and optimal breed-specific diets.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <BlogFilterBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Scroll Anchor for Pagination */}
        <div ref={gridTopRef} className="scroll-mt-32" />

        {/* Articles Grid & Pagination */}
        <div className="mt-8 mb-16">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-800">No matching articles found</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Try searching for a different keyword (e.g. "vaccines", "co-parenting", "budget", or city names like "New York").
              </p>
              <button
                type="button"
                onClick={() => {
                  handleCategoryChange('All Stories');
                  handleSearchChange('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={() => handleCardClick(post)}
                  />
                ))}
              </div>

              {/* Numbered Pagination Controls */}
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredPosts.length}
                pageSize={POSTS_PER_PAGE}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>

        {/* Community Newsletter Footer */}
        <BlogNewsletter />
      </div>
    </div>
  );
}
