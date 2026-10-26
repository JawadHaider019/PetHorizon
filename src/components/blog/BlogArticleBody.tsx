import { HeartPulse, AlertCircle, Calendar, CheckCircle2, Smartphone, Download, ArrowRight, ShieldCheck, Users, TrendingUp, DollarSign } from 'lucide-react';
import { BlogPost } from '../../data/blogData';
import { FullBlogArticle } from '../../data/blogArticles';

interface BlogArticleBodyProps {
  article: BlogPost;
  fullContent: FullBlogArticle | null;
  onOpenQrModal?: () => void;
}

export default function BlogArticleBody({ article, fullContent, onOpenQrModal }: BlogArticleBodyProps) {
  const getModuleIcon = (mod?: string) => {
    switch (mod) {
      case 'clinical':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'family':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'budget':
        return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case 'routine':
      default:
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
    }
  };

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
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-white/70 p-3.5 rounded-xl border border-emerald-100/80 shadow-2xs"
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
            <section key={section.id} id={section.id} className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {section.heading}
              </h2>

              {section.intro && (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {section.intro}
                </p>
              )}

              {/* Multi-Paragraphs */}
              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="space-y-3 pt-1">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}
                </div>
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

              {/* In-Content Contextual PetHorizon Feature Card */}
              {section.featureCta && (
                <div className="my-8 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-950 p-6 sm:p-8 text-white shadow-lg relative overflow-hidden border border-emerald-800/40">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-lg">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-800/60 text-emerald-300 border border-emerald-700/50">
                        {getModuleIcon(section.featureCta.module)}
                        <span>{section.featureCta.badge}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                        {section.featureCta.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                        {section.featureCta.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col sm:flex-row gap-2.5">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.enscyd.pethorizon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs sm:text-sm shadow-md transition-transform hover:scale-102 cursor-pointer whitespace-nowrap"
                      >
                        <Smartphone className="w-4 h-4 text-emerald-700" />
                        <span>{section.featureCta.buttonText}</span>
                      </a>
                      {onOpenQrModal && (
                        <button
                          type="button"
                          onClick={onOpenQrModal}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-emerald-800/50 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>Scan QR Code</span>
                        </button>
                      )}
                    </div>
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
