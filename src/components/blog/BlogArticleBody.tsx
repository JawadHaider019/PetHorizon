import { HeartPulse, AlertCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../../data/blogData';
import { FullBlogArticle } from '../../data/blogArticles';

interface BlogArticleBodyProps {
  article: BlogPost;
  fullContent: FullBlogArticle | null;
}

export default function BlogArticleBody({ article, fullContent }: BlogArticleBodyProps) {
  return (
    <div className="space-y-10 my-8">
      {/* 1. Essential Clinical Takeaways Card */}
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
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-white/70 p-3 rounded-xl border border-emerald-100/80"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Detailed On-Page Content Sections (50%-70% Comprehensive Guide) */}
      {fullContent && (
        <div className="space-y-10">
          {/* Overview Summary */}
          {fullContent.overviewSummary && (
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-slate-50/80 p-6 rounded-2xl border-l-4 border-emerald-600">
              {fullContent.overviewSummary}
            </div>
          )}

          {fullContent.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {section.heading}
              </h2>

              {section.intro && (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {section.intro}
                </p>
              )}

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="space-y-3 pt-1">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <div
                      key={bpIdx}
                      className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        {bp.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-4">
                        {bp.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Data / Reference Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs my-4">
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
                        <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
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

              {/* Pet Horizon App Routine Tip Box */}
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
