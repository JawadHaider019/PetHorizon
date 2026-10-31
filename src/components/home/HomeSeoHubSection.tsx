import { ArrowRight, BookOpen, Calculator, Clock, Scale } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blogData';
import BlogCard from '../BlogCard';
import { ExtendedAppView } from '../../hooks/useAppNavigation';

interface HomeSeoHubSectionProps {
  onNavigate: (view: ExtendedAppView) => void;
  onSelectArticle: (slug: string) => void;
}

export default function HomeSeoHubSection({
  onNavigate,
  onSelectArticle
}: HomeSeoHubSectionProps) {
  const featuredGuides = BLOG_POSTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section
      id="resources-hub"
      aria-labelledby="resources-hub-heading"
      className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-emerald-950/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Veterinary Tools &amp; Evidence-Based Guides</span>
            </div>
            <h2
              id="resources-hub-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Free Veterinary Calculators &amp; Care Guides
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Calculate exact WSAVA daily gram portions, convert pet age to biological human years, and explore 39 veterinary-referenced care routines.
            </p>
          </div>

          <a
            href="/blogs"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('blog');
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#166534] hover:text-emerald-900 bg-white hover:bg-emerald-50/70 px-4 py-2.5 rounded-xl border border-slate-200/90 shadow-2xs transition-all w-fit shrink-0"
          >
            <span>Explore All {BLOG_POSTS.length} Guides</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 1. Interactive Veterinary Calculators Row (Click Depth = 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <a
            href="/tools/pet-calorie-calculator"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('pet-calorie-calculator');
            }}
            className="group rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0 text-[#166534] group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  WSAVA RER / MER Formula
                </span>
                <span className="text-[11px] font-semibold text-slate-400">Free Interactive Tool</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#166534] transition-colors">
                Pet Calorie &amp; Daily Gram Portion Calculator
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calculate Resting Energy Requirements (70 &times; kg<sup>0.75</sup>), daily maintenance calories, and exact kitchen-scale gram portions for dogs and cats.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#166534]">
                Launch Calorie Calculator <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </a>

          <a
            href="/tools/pet-age-calculator"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('pet-age-calculator');
            }}
            className="group rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-amber-700 group-hover:scale-105 transition-transform">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  AAHA Life-Stage Matrix
                </span>
                <span className="text-[11px] font-semibold text-slate-400">Free Interactive Tool</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#166534] transition-colors">
                Pet Age in Human Years Converter (Dogs &amp; Cats)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Convert dog and cat chronological age to biological human years with breed-weight scaling, senior health thresholds, and preventive checkup milestones.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#166534]">
                Launch Pet Age Calculator <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </a>
        </div>

        {/* 2. Featured Pillar Blog Guides Grid (Click Depth = 1) */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Most-Read Veterinary &amp; Routine Pillar Guides</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGuides.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              compact
              onClick={() => onSelectArticle(post.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
