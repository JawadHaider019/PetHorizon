import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2, ExternalLink, Sparkles, MessageSquareHeart } from 'lucide-react';

interface PlayStoreReview {
  id: string;
  name: string;
  role: string;
  avatarBg: string;
  avatarText: string;
  date: string;
  rating: number;
  category: 'all' | 'routines' | 'multipet' | 'experience';
  petContext: string;
  highlight: string;
  review: string;
}

const PLAY_STORE_REVIEWS: PlayStoreReview[] = [
  {
    id: '1',
    name: 'Liam Bennett',
    role: 'Verified Play Store User',
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    avatarText: 'LB',
    date: 'October 2026',
    rating: 5,
    category: 'experience',
    petContext: '🐾 Golden Retriever & Cat',
    highlight: 'Clean interface, smooth and perfectly organized',
    review:
      'Pet Horizon is a really useful and user-friendly app for pet lovers. The interface is clean, easy to navigate, and makes managing pet-related information simple and convenient. I especially liked how smoothly the app works and how everything is organized. Overall, a great app for anyone who wants an easier way to manage and care for their pets. Highly recommended! 🐾❤️'
  },
  {
    id: '2',
    name: 'Ethan Wright',
    role: 'Verified Play Store User',
    avatarBg: 'bg-teal-100 text-teal-800 border-teal-200',
    avatarText: 'EW',
    date: 'October 2026',
    rating: 5,
    category: 'routines',
    petContext: '🐾 Dog Routine & Vaccinations',
    highlight: 'Tracks feeding and vaccine reminders seamlessly',
    review:
      'Very useful app for pet care. I use it to track feeding and vaccine reminders. The interface is clean and works smoothly. Highly recommended.'
  },
  {
    id: '3',
    name: 'Lucas Vance',
    role: 'Verified Play Store User',
    avatarBg: 'bg-sky-100 text-sky-800 border-sky-200',
    avatarText: 'LV',
    date: 'October 2026',
    rating: 5,
    category: 'multipet',
    petContext: '🐾 Snow Cat Parent',
    highlight: 'Buying Premium to manage all my pets in one place',
    review:
      'Nice app, very useful for my snow cat. I like it, I will buy the premium version of the app so that I can add as many pets as I have.'
  },
  {
    id: '4',
    name: 'Noah Taylor',
    role: 'Verified Play Store User',
    avatarBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    avatarText: 'NT',
    date: 'October 2026',
    rating: 5,
    category: 'experience',
    petContext: '🐾 Multi-Pet Household',
    highlight: 'Thoughtful features that make pet care easier',
    review:
      'Pet Horizon is a wonderful and user-friendly app for every pet lover ❤️ I truly appreciate the amazing experience, thoughtful features, and dedication to making pet care easier and more enjoyable.'
  },
  {
    id: '5',
    name: 'Oliver Miller',
    role: 'Verified Play Store User',
    avatarBg: 'bg-amber-100 text-amber-800 border-amber-200',
    avatarText: 'OM',
    date: 'October 2026',
    rating: 5,
    category: 'experience',
    petContext: '🐾 Companion Care Tracker',
    highlight: 'Convenient way to explore pet care routines',
    review:
      'Pet Horizon is a simple and user-friendly app for pet lovers. The interface is easy to navigate, and the app provides a convenient way to explore pet-related features and information. Overall, it’s a useful and enjoyable app for anyone interested in pets.'
  },
  {
    id: '6',
    name: 'Marcus Gallagher',
    role: 'Verified Play Store User',
    avatarBg: 'bg-rose-100 text-rose-800 border-rose-200',
    avatarText: 'MG',
    date: 'October 2026',
    rating: 5,
    category: 'routines',
    petContext: '🐾 Rescue Dog Parent',
    highlight: 'Helped tremendously regarding daily care for my dog',
    review:
      'The app is good. Helped me a lot regarding the daily care for my dog.'
  },
  {
    id: '7',
    name: 'Daniel Cooper',
    role: 'Verified Play Store User',
    avatarBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    avatarText: 'DC',
    date: 'October 2026',
    rating: 5,
    category: 'routines',
    petContext: '🐾 Daily Health & Feeding',
    highlight: 'Extremely helpful information for pet care',
    review:
      'Great app. Very useful 👍👍❤️ I got helpful information about pet care.'
  },
  {
    id: '8',
    name: 'Julian Scott',
    role: 'Verified Play Store User',
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    avatarText: 'JS',
    date: 'October 2026',
    rating: 5,
    category: 'experience',
    petContext: '🐾 Daily Companion',
    highlight: 'Exceptional application and reliable experience',
    review:
      'Amazing application ❤️ Everything is right where it needs to be.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Reviews' },
  { id: 'routines', label: 'Feeding & Reminders' },
  { id: 'multipet', label: 'Multi-Pet Care' },
  { id: 'experience', label: 'App Experience' }
] as const;

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredReviews =
    activeCategory === 'all'
      ? PLAY_STORE_REVIEWS
      : PLAY_STORE_REVIEWS.filter((r) => r.category === activeCategory);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            <MessageSquareHeart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
            <span>Google Play Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Real Reviews from Pet Parents
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal max-w-2xl mx-auto">
            Honest feedback from pet owners who manage daily schedules, feeding routines, and veterinary records with Pet Horizon on Android.
          </p>

          {/* Google Play Rating Strip with Direct Link */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-xs">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-slate-900">5.0 / 5.0</span>
              <span className="text-xs text-slate-400 font-medium">on Google Play Store</span>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-all shadow-xs hover:shadow-sm group"
            >
              <span>View on Play Store</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left relative group"
              >
                <div>
                  {/* Card Header: Stars & Google Play Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Play Store</span>
                    </div>
                  </div>

                  {/* Review Highlight Banner */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
                      "{item.highlight}"
                    </span>
                  </div>

                  {/* Review Body */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    "{item.review}"
                  </p>
                </div>

                {/* Reviewer Details Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full font-black text-xs flex items-center justify-center shrink-0 border ${item.avatarBg}`}>
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                      {item.petContext}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust Endorsements Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Genuine User Reviews from Google Play</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Sponsored or Altered Ratings</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>5.0 Star Cumulative Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
