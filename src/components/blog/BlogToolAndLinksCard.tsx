import { Calculator, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { BlogPost } from '../../data/blogData';

interface BlogToolAndLinksCardProps {
  article: BlogPost;
}

export default function BlogToolAndLinksCard({ article }: BlogToolAndLinksCardProps) {
  const isCalorieRelated =
    article.category === 'Feeding & Nutrition' ||
    article.slug.includes('feeding') ||
    article.slug.includes('calorie') ||
    article.slug.includes('diabetes') ||
    article.slug.includes('rabbit') ||
    article.slug.includes('parrot');

  const toolHref = isCalorieRelated
    ? '/tools/pet-calorie-calculator'
    : '/tools/pet-age-calculator';

  const toolTitle = isCalorieRelated
    ? 'Interactive Pet Calorie & Daily Gram Portion Calculator'
    : 'AAHA-Standard Pet Age in Human Years & Life-Stage Calculator';

  const toolDescription = isCalorieRelated
    ? 'Calculate your pet’s exact Resting Energy Requirement (RER = 70 × kg^0.75), Maintenance Energy Requirement (MER), and daily gram portions based on WSAVA veterinary standards.'
    : 'Convert chronological dog or cat age into biological human years with breed-weight scaling, senior transition thresholds, and preventive bloodwork milestones.';

  const toolCta = isCalorieRelated
    ? 'Open Calorie Calculator'
    : 'Open Pet Age Calculator';

  return (
    <div className="not-prose mt-10 space-y-6">
      {/* 1. Interactive Free Veterinary Tool Callout */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              <Calculator className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Free Interactive Veterinary Tool</span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              {toolTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {toolDescription}
            </p>
          </div>

          <a
            href={toolHref}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#126c55] hover:bg-[#0e5644] text-white text-xs font-bold whitespace-nowrap shrink-0 transition-colors shadow-2xs"
          >
            <span>{toolCta}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Article-Specific Related App Feature Links */}
      {article.relatedProductLinks && article.relatedProductLinks.length > 0 && (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3.5">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Recommended Pet Horizon Care Modules</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.relatedProductLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors truncate">
                    {link.feature}
                  </p>
                  <p className="text-[11px] font-semibold text-emerald-700 mt-0.5">
                    {link.ctaText} &rarr;
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 3. Veterinary E-E-A-T Clinical Standards Verification */}
      <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-start sm:items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <strong className="font-bold text-slate-900 block sm:inline">
              Veterinary Consensus &amp; Clinical Review:{' '}
            </strong>
            <span>
              Protocols cross-referenced with published guidelines from the AVMA, AAHA, WSAVA Global Nutrition Committee, and Cornell Feline Health Center.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

