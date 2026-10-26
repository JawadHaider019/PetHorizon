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
  if (!fullContent) {
    return (
      <div className="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
        <p>{article.excerpt}</p>
      </div>
    );
  }

  return (
    <div className="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      {fullContent.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-32">
          {/* Section Heading matching Everystore H2 */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug mt-10 mb-5">
            {section.heading}
          </h2>

          {/* Section Intro */}
          {section.intro && (
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 font-normal">
              {section.intro}
            </p>
          )}

          {/* Flowing Narrative Paragraphs */}
          {section.paragraphs && section.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 font-normal">
              {para}
            </p>
          ))}

          {/* Authentic Section Figure matching Everystore Figure & Caption */}
          {section.figure && (
            <figure className="my-8 max-w-full not-prose">
              <div className="bg-[#f9fafb] border border-gray-200/90 rounded-2xl p-4 flex items-center justify-center max-h-[460px] overflow-hidden shadow-2xs">
                <img
                  src={section.figure.imageUrl}
                  alt={section.figure.altText || section.figure.caption}
                  className="max-w-full max-h-[420px] w-auto h-auto object-contain rounded-xl block mx-auto shadow-xs"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-center text-xs text-gray-500 mt-2.5 italic">
                {section.figure.caption}
              </figcaption>
            </figure>
          )}

          {/* Clinical & Specs Timetable (Everystore Table Format) */}
          {section.table && (
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-2xs my-7 not-prose">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-50 text-gray-800 font-bold border-b border-gray-200">
                  <tr>
                    {section.table.headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-normal text-gray-700">
                  {section.table.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'}
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-4 py-3.5 ${
                            cIdx === 0
                              ? 'font-bold text-gray-900 whitespace-nowrap'
                              : ''
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

          {/* Signature Product Showcase Card matching Everystore Exactly */}
          {section.productShowcase && (
            <div className="product-showcase-card not-prose my-8 p-5 rounded-2xl border-2 border-emerald-200/90 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5">
                <div className="w-[130px] h-[130px] min-w-[130px] max-w-[130px] shrink-0 bg-white p-2 rounded-xl border border-gray-200/80 shadow-2xs flex items-center justify-center overflow-hidden">
                  <img
                    src={section.productShowcase.image}
                    alt={section.productShowcase.title}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                      <span>Featured Module</span> &bull; <span>{section.productShowcase.badge}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {section.productShowcase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {section.productShowcase.provider}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-100/80 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-gray-500 uppercase tracking-wider block font-medium">
                        Access Status
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-emerald-700">
                        {section.productShowcase.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={section.productShowcase.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#126c55] hover:bg-[#0e5644] text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        {section.productShowcase.actionText}
                      </a>
                      {onOpenQrModal && (
                        <button
                          type="button"
                          onClick={onOpenQrModal}
                          className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold transition-colors cursor-pointer"
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

          {/* Pros & Cons Formatted into Natural Editorial Text */}
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

          {/* Step-by-Step Walkthrough as Natural Editorial Steps */}
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

          {/* Routine Tip as Subtle Editorial Callout */}
          {section.routineTip && (
            <blockquote className="border-l-4 border-[#126c55] bg-emerald-50/40 rounded-r-2xl p-4 my-6 text-sm sm:text-base text-gray-700">
              <strong className="text-gray-900 block font-semibold mb-1">
                {section.routineTip.title}
              </strong>
              <span>{section.routineTip.text}</span>
            </blockquote>
          )}
        </section>
      ))}
    </div>
  );
}
