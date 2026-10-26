import {
  HeartPulse,
  AlertCircle,
  Calendar,
  CheckCircle2,
  XCircle,
  Smartphone,
  Star,
  Award,
  ShieldCheck,
  Check
} from 'lucide-react';
import { BlogPost } from '../../data/blogData';
import { FullBlogArticle } from '../../data/blogArticles';

interface BlogArticleBodyProps {
  article: BlogPost;
  fullContent: FullBlogArticle | null;
  onOpenQrModal?: () => void;
}

export default function BlogArticleBody({
  article,
  fullContent,
  onOpenQrModal
}: BlogArticleBodyProps) {
  return (
    <div className="space-y-10 my-8">
      {/* 1. Essential Clinical Takeaways Card */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/90 space-y-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-emerald-950">
              Essential Pet Care Takeaways
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-white/80 p-3.5 rounded-xl border border-emerald-100/80 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 2. Detailed On-Page Content Sections */}
      {fullContent && (
        <div className="space-y-10">
          {/* Overview Summary */}
          {fullContent.overviewSummary && (
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-slate-50/80 p-6 rounded-2xl border-l-4 border-emerald-600">
              {fullContent.overviewSummary}
            </div>
          )}

          {fullContent.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 pt-2 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {section.heading}
              </h2>

              {section.intro && (
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {section.intro}
                </p>
              )}

              {/* Multi-Paragraphs */}
              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="space-y-4 pt-1">
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base text-slate-700 leading-relaxed font-normal"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Section Figure / Image with Centered Italic Caption (Matching Everystore) */}
              {section.figure && (
                <figure className="my-6 max-w-full">
                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 flex items-center justify-center max-h-[460px] overflow-hidden shadow-2xs">
                    <img
                      src={section.figure.imageUrl}
                      alt={section.figure.altText || section.figure.caption}
                      className="max-w-full max-h-[420px] w-auto h-auto object-cover rounded-xl block mx-auto shadow-xs"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-center text-xs text-slate-500 mt-2.5 italic">
                    {section.figure.caption}
                  </figcaption>
                </figure>
              )}

              {/* Data / Reference Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs my-5">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                      {section.table.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-4 py-3 ${
                                cIdx === 0 ? 'font-bold text-slate-900' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* In-Article Product Showcase Card (Exact Everystore Style) */}
              {section.productShowcase && (
                <div
                  className="product-showcase-card my-8 p-5 sm:p-6 rounded-2xl border-2 border-emerald-300 shadow-md"
                  style={{
                    background:
                      'linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #f0fdfa 100%)'
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {/* 130x130 Square Image Box */}
                    <div className="w-[130px] h-[130px] min-w-[130px] max-w-[130px] shrink-0 bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-center overflow-hidden">
                      <img
                        src={section.productShowcase.image}
                        alt={section.productShowcase.title}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>

                    {/* Details Column */}
                    <div className="flex-1 min-w-[220px] text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                        <span>{section.productShowcase.badge}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {section.productShowcase.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4">
                        {section.productShowcase.provider}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-emerald-100/60">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                            Availability
                          </span>
                          <span className="text-lg sm:text-xl font-black text-emerald-700">
                            {section.productShowcase.price}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={section.productShowcase.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>{section.productShowcase.actionText}</span>
                          </a>

                          {onOpenQrModal && (
                            <button
                              type="button"
                              onClick={onOpenQrModal}
                              className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-white border border-emerald-200 hover:bg-emerald-50 text-emerald-900 font-semibold text-xs transition-colors cursor-pointer"
                              title="Scan QR Code to install"
                            >
                              Scan QR
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Warning Alert Box */}
              {section.warningBox && (
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200/90 flex items-start gap-3 my-4">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-rose-950">
                      {section.warningBox.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-rose-800 leading-relaxed font-normal mt-0.5">
                      {section.warningBox.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Customer Sentiment, Pros & Cons Box (Matching Everystore Structure) */}
              {section.prosAndCons && (
                <div className="my-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>The Unbiased Breakdown: Strengths &amp; Trade-offs</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pros */}
                    <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Core Strengths (Pros)</span>
                      </div>
                      <ul className="space-y-2.5">
                        {section.prosAndCons.pros.map((pro, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/60"
                          >
                            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-amber-600" />
                        <span>Considerations &amp; Trade-offs (Cons)</span>
                      </div>
                      <ul className="space-y-2.5">
                        {section.prosAndCons.cons.map((con, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-amber-50/40 p-2.5 rounded-xl border border-amber-100/60"
                          >
                            <span className="text-amber-600 font-bold mt-0.5">✕</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Who Should Use vs Skip */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-1">
                        Who Should Use This:
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {section.prosAndCons.whoShouldUse}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        Who Can Skip This:
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {section.prosAndCons.whoShouldSkip}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step-by-Step Walkthrough Card */}
              {section.stepByStep && (
                <div className="my-8 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {section.stepByStep.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.stepByStep.steps.map((step) => (
                      <div
                        key={step.number}
                        className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2 relative"
                      >
                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                          {step.number}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Editorial Scorecard Box (Final Verdict) */}
              {section.scorecard && (
                <div className="my-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span>Editorial Board Verdict</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {section.scorecard.verdict}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-slate-700/60 shrink-0">
                      <div className="text-right">
                        <span className="text-2xl font-black text-emerald-400 leading-none">
                          {section.scorecard.overallScore.toFixed(1)}
                        </span>
                        <span className="text-xs text-slate-400"> / {section.scorecard.maxScore.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sub-Metric Progress Bars */}
                  <div className="space-y-3.5">
                    {section.scorecard.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium text-slate-300">
                          <span>{metric.label}</span>
                          <span className="font-bold text-emerald-400">{metric.score}%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${metric.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Routine Tip Box */}
              {section.routineTip && (
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200/90 shadow-2xs space-y-2 my-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Pet Horizon Routine Setup
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {section.routineTip.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {section.routineTip.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
