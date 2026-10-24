import { ExternalLink, ShieldCheck } from 'lucide-react';
import { BlogPost } from '../../data/blogData';

interface BlogCitationCardProps {
  article: BlogPost;
}

export default function BlogCitationCard({ article }: BlogCitationCardProps) {
  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Accredited Clinical Source &amp; Research Archive
          </div>
          <h4 className="text-base sm:text-lg font-black text-slate-900">
            Original Publication by {article.sourceName}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Pet Horizon summarizes evidence-based protocols to help you care for your pet daily. For deep peer-reviewed clinical archives and specialized veterinary studies, consult the original source.
          </p>
        </div>

        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-xs sm:text-sm border border-slate-200 hover:border-emerald-300 shadow-2xs transition-all shrink-0 cursor-pointer"
        >
          <span>Visit {article.sourceName}</span>
          <ExternalLink className="w-4 h-4 text-emerald-600" />
        </a>
      </div>
    </div>
  );
}
