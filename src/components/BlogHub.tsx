import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import BlogCard from './BlogCard';
import BlogFilterBar from './BlogFilterBar';
import BlogPreviewModal from './BlogPreviewModal';
import BlogNewsletter from './BlogNewsletter';

interface BlogHubProps {
  onNavigateHome: () => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
  onSelectArticle?: (slug: string) => void;
}

export default function BlogHub({ onNavigateHome, onNavigateLegal, onSelectArticle }: BlogHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Articles' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.seoKeyword.toLowerCase().includes(q) ||
      post.sourceName.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (post: BlogPost) => {
    if (onSelectArticle) {
      onSelectArticle(post.slug);
    } else {
      setActiveModalPost(post);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-24 pb-16 selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </button>
            <span>/</span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
              Pet Care &amp; Health Hub
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Curated Veterinary Care Guides
          </span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto pt-4 pb-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">
              Evidence-Based Veterinary Care
            </p>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Real Pet Care Guides &amp; High-Rank Search Answers
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct answers to high-volume Google queries on pet poisons, puppy schedules, kidney hydration, and feeding formulas from verified institutions.
            </p>
          </motion.div>

          {/* Modular Filter & Search Bar */}
          <div className="mt-8">
            <BlogFilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{selectedCategory === 'All Articles' ? 'All Verified Guides' : selectedCategory}</span>
              <span className="text-xs font-semibold text-slate-400">({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-800">No matching articles found</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Try searching for another keyword or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Articles');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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

        {/* Modular Newsletter Card */}
        <BlogNewsletter onNavigateLegal={onNavigateLegal} />
      </div>

      {/* Modular Preview Modal */}
      <BlogPreviewModal
        post={activeModalPost}
        onClose={() => setActiveModalPost(null)}
      />
    </div>
  );
}
