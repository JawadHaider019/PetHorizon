import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ExternalLink, ShieldCheck, Check, HeartPulse } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogPreviewModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogPreviewModal({ post, onClose }: BlogPreviewModalProps) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative text-left"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 whitespace-nowrap shrink-0">
                {post.category}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                Source: {post.sourceName}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Search Rank & Title */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>{post.searchRankBadge} ({post.searchVolume} searches)</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {post.title}
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Key Vet Takeaways Callout Box */}
          <div className="my-6 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
            <div className="flex items-center gap-2 mb-3">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                Key Veterinary Takeaways
              </h4>
            </div>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[9px]">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Author & External Direct Link */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-emerald-200"
              />
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-xs text-slate-900">{post.author.name}</h4>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-[11px] text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-800/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Read Full Guide on {post.sourceName.split(' ')[0]}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
