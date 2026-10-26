import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import BlogCard from './BlogCard';
import BlogFilterBar from './BlogFilterBar';
import BlogNewsletter from './BlogNewsletter';

interface BlogHubProps {
  onNavigateHome: () => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
  onSelectArticle?: (slug: string) => void;
}

export default function BlogHub({ onSelectArticle }: BlogHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Stories');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Stories' ||
      selectedCategory === 'All Articles' ||
      post.category === selectedCategory;

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
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Articles Grid */}
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
                  setSelectedCategory('All Stories');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => handleCardClick(post)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Community Newsletter Footer */}
        <BlogNewsletter />
      </div>
    </div>
  );
}
