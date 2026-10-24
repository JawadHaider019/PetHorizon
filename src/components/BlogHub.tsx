import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  Mail,
  CheckCircle2,
  Calendar,
  ChevronRight,
  ArrowLeft,
  Flame,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '../data/blogData';

interface BlogHubProps {
  onNavigateHome: () => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
  onSelectArticle?: (slug: string) => void;
}

export default function BlogHub({ onNavigateHome, onNavigateLegal, onSelectArticle }: BlogHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);

  // Filter posts based on category and search
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Articles' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.seoKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const trendingKeywords = [
    { label: 'Toxic Foods', query: 'toxic' },
    { label: 'Puppy 3-3-3 Rule', query: '3-3-3' },
    { label: 'Cat Dehydration', query: 'dehydration' },
    { label: 'Emergency Vet', query: 'emergency' },
    { label: 'Flea & Heartworm', query: 'heartworm' },
    { label: 'Calorie Calculator', query: 'calorie' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased pt-24 pb-16 selection:bg-emerald-500/20 selection:text-emerald-800">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-80 right-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb & Navigation */}
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
              Pet Horizon SEO Knowledge Hub
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            Top-Ranked Vet-Reviewed Pet Guides
          </span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto pt-4 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200/80">
              <BookOpen className="w-3.5 h-3.5" />
              Evidence-Based Veterinary Care &amp; Routines
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Real Pet Care Guides &amp; High-Rank Search Answers
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Written by veterinary advisors and certified behavior specialists. Direct answers to high-volume questions on pet poisons, puppy schedules, kidney hydration, and feeding formulas.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search queries: toxic foods, 3-3-3 rule, bloat, flea schedule, calories..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Trending Keyword Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              Trending Queries:
            </span>
            {trendingKeywords.map((item) => (
              <button
                key={item.label}
                onClick={() => setSearchQuery(item.query)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 font-medium text-[11px] border border-slate-200/60 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-700/20 scale-102'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Article Banner */}
        {selectedCategory === 'All Articles' && !searchQuery && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md text-slate-800 grid grid-cols-1 lg:grid-cols-12 border border-emerald-200/90 transition-all"
          >
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300">
                    <Flame className="w-3 h-3 text-amber-600" />
                    {featuredPost.searchRankBadge}
                  </span>
                  <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {featuredPost.searchVolume}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-xs text-slate-900">{featuredPost.author.name}</h4>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <p className="text-[11px] text-slate-500">{featuredPost.author.role}</p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onSelectArticle
                      ? onSelectArticle(featuredPost.slug)
                      : setActiveModalPost(featuredPost)
                  }
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-700/20 transition-colors cursor-pointer"
                >
                  <span>Read Verified Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              onClick={() =>
                onSelectArticle
                  ? onSelectArticle(featuredPost.slug)
                  : setActiveModalPost(featuredPost)
              }
              className="lg:col-span-5 h-64 lg:h-auto relative overflow-hidden bg-slate-100 cursor-pointer"
            >
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{selectedCategory === 'All Articles' ? 'All High-Ranking Guides' : selectedCategory}</span>
              <span className="text-xs font-semibold text-slate-400">
                ({filteredPosts.length})
              </span>
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
                <article
                  key={post.id}
                  onClick={() =>
                    onSelectArticle ? onSelectArticle(post.slug) : setActiveModalPost(post)
                  }
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-300/80 transition-all duration-200 flex flex-col group cursor-pointer"
                >
                  {/* Cover Image Container */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-800 border border-slate-200/60 shadow-2xs">
                      {post.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-700 border border-slate-200/60 shadow-2xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* SEO Search Ranking Badges */}
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-amber-800 mb-2.5">
                        <Flame className="w-3 h-3 text-amber-600" />
                        <span className="bg-amber-50 px-2 py-0.5 rounded border border-amber-200/70">
                          {post.searchVolume}
                        </span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-500 font-medium truncate max-w-[170px]">
                          "{post.seoKeyword}"
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug tracking-tight">
                        {post.title}
                      </h4>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-emerald-200"
                        />
                        <span className="text-xs font-semibold text-slate-700 truncate max-w-[125px]">
                          {post.author.name}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read Guide <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Subscription Card */}
        <div className="bg-white border-2 border-emerald-100/90 rounded-3xl p-8 sm:p-12 text-slate-800 shadow-sm relative overflow-hidden text-center max-w-4xl mx-auto my-12">
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200/80">
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              VIP Pet Parent Weekly Digest
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Never miss a pet health breakthrough or routine guide
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Join over 12,000 pet owners getting research-backed nutrition advice, vaccination schedules, and stress-free caretaking tips in their inbox every Sunday.
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs font-bold text-emerald-800 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Thank you! You have been added to the VIP Pet Care Digest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-2xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm shadow-emerald-700/20 cursor-pointer whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-500 mt-3.5 font-medium">
              Zero spam. Unsubscribe in 1 click anytime. Read our{' '}
              <button
                type="button"
                onClick={() => onNavigateLegal?.('privacy')}
                className="underline hover:text-emerald-700 text-slate-700 font-semibold cursor-pointer"
              >
                Privacy Policy
              </button>
              .
            </p>
          </div>
        </div>

      </div>

      {/* Article Detail Preview Modal */}
      <AnimatePresence>
        {activeModalPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  {activeModalPost.category}
                </span>
                <button
                  onClick={() => setActiveModalPost(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-2">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>{activeModalPost.searchRankBadge} ({activeModalPost.searchVolume})</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {activeModalPost.title}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeModalPost.excerpt}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={activeModalPost.author.avatar}
                    alt={activeModalPost.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-emerald-200"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{activeModalPost.author.name}</h4>
                    <p className="text-[11px] text-slate-500">{activeModalPost.author.role}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const slug = activeModalPost.slug;
                    setActiveModalPost(null);
                    if (onSelectArticle) onSelectArticle(slug);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-800/20 transition-all cursor-pointer"
                >
                  Open Full Guide &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
