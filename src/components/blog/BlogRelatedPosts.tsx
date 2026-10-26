import { ChevronRight } from 'lucide-react';
import { BlogPost } from '../../data/blogData';

interface BlogRelatedPostsProps {
  related: BlogPost[];
  onSelectArticle: (slug: string) => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function BlogRelatedPosts({
  related,
  onSelectArticle,
  onNavigateLegal
}: BlogRelatedPostsProps) {
  return (
    <div className="mt-14 pt-10 border-t border-slate-200">
      <h3 className="text-xl font-black text-slate-900 mb-6">Related High-Ranking Guides</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {related.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectArticle(item.slug)}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold text-amber-800 block mb-1">
                {item.searchVolume}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                {item.title}
              </h4>
            </div>
            <span className="text-xs font-bold text-emerald-600 mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Guide <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        ))}
      </div>

      {/* Medical & Legal Disclaimer */}
      <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
        Curated for educational pet care routines. In life-threatening emergencies, immediately bring your pet to an accredited 24-hour veterinary emergency center.
        {onNavigateLegal && (
          <span className="block mt-1">
            Review our{' '}
            <button
              onClick={() => onNavigateLegal('privacy')}
              className="text-emerald-700 underline font-semibold cursor-pointer"
            >
              Privacy Policy
            </button>
            .
          </span>
        )}
      </div>
    </div>
  );
}
