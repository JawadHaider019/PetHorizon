import { useState, useRef } from 'react';
import { BookOpen } from 'lucide-react';
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

export default function BlogHub({ onSelectArticle }: BlogHubProps) {
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
    <div className="min-h-screen bg-[#F7F9F8] text-slate-800 antialiased pt-28 sm:pt-36 pb-16 selection:bg-[#126c55]/20 selection:text-[#126c55]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero matching Everystore's Clean Typography */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#231e3d] tracking-tight">
            Blogs
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            Guides and tips for pet health, veterinary schedules, household co-parenting, and smart budgeting: track vaccines, prevent double-feeding, and care for your pets with PetHorizon.
          </p>
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
