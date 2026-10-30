import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { BlogContentSection } from '../../data/blogArticles';

interface BlogKeyTakeawaysProps {
  takeaways?: string[];
  overviewSummary?: string;
}

export function BlogArticleIntroSummary({ takeaways, overviewSummary }: BlogKeyTakeawaysProps) {
  return (
    <div className="not-prose mb-10 space-y-6">
      {takeaways && takeaways.length > 0 && (
        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Key Clinical Takeaways &amp; Summary</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-800">
            {takeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {overviewSummary && (
        <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed border-l-4 border-emerald-600 pl-4 py-1">
          {overviewSummary}
        </p>
      )}
    </div>
  );
}

interface BlogSectionExtrasProps {
  section: BlogContentSection;
}

export default function BlogSectionExtras({ section }: BlogSectionExtrasProps) {
  return (
    <>
      {/* Structured Bullet Points */}
      {section.bulletPoints && section.bulletPoints.length > 0 && (
        <ul className="my-5 space-y-2.5 pl-5 list-disc text-base text-gray-700">
          {section.bulletPoints.map((bp, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong className="font-bold text-gray-900">{bp.label}: </strong>
              <span>{bp.text}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Clinical Warning / Safety Alert Box */}
      {section.warningBox && (
        <aside className="not-prose my-6 rounded-2xl bg-rose-50/80 border border-rose-200 p-5 text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-800 mb-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{section.warningBox.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-rose-900/90 leading-relaxed font-normal">
            {section.warningBox.text}
          </p>
        </aside>
      )}

      {/* Pros & Cons Block */}
      {section.prosAndCons && (
        <div className="my-6 space-y-4">
          <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Core Strengths &amp; Clinical Advantages</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              {section.prosAndCons.pros.map((pro, pIdx) => (
                <li key={pIdx} className="leading-relaxed">
                  {pro}
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-800 mt-5 mb-3 flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">✕</span>
              <span>Considerations &amp; Practical Caveats</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              {section.prosAndCons.cons.map((con, cIdx) => (
                <li key={cIdx} className="leading-relaxed">
                  {con}
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-gray-200/70 text-xs sm:text-sm text-gray-600 space-y-2">
              <p>
                <strong className="text-gray-900 font-semibold">Who should use: </strong>
                {section.prosAndCons.whoShouldUse}
              </p>
              <p>
                <strong className="text-gray-900 font-semibold">Who can skip: </strong>
                {section.prosAndCons.whoShouldSkip}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Step-by-Step Walkthrough */}
      {section.stepByStep && (
        <div className="my-6 space-y-3">
          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
            {section.stepByStep.title}
          </h4>
          <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base text-gray-700">
            {section.stepByStep.steps.map((step) => (
              <li key={step.number} className="leading-relaxed">
                <strong className="text-gray-900 font-semibold">{step.title}: </strong>
                {step.description}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Evaluation Scorecard */}
      {section.scorecard && (
        <div className="not-prose my-6 rounded-2xl bg-slate-50 border border-slate-200/80 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/70">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Clinical Evaluation Scorecard
            </span>
            <span className="text-sm font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              {section.scorecard.overallScore} / {section.scorecard.maxScore} — {section.scorecard.verdict}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {section.scorecard.metrics.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs bg-white px-3 py-2 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">{m.label}</span>
                <span className="font-bold text-emerald-700">{m.score}/10</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Routine Tip Callout */}
      {section.routineTip && (
        <blockquote className="not-prose border-l-4 border-[#126c55] bg-emerald-50/50 rounded-r-2xl p-4 sm:p-5 my-6 text-sm sm:text-base text-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <strong className="text-gray-900 block font-bold mb-1">
              {section.routineTip.title}
            </strong>
            <span className="text-xs sm:text-sm text-gray-700 leading-relaxed block">
              {section.routineTip.text}
            </span>
          </div>
          {section.routineTip.actionLabel && (
            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#126c55] hover:bg-[#0e5644] text-white text-xs font-bold whitespace-nowrap shrink-0 transition-colors"
            >
              {section.routineTip.actionLabel}
            </a>
          )}
        </blockquote>
      )}
    </>
  );
}
