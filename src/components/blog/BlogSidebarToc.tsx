import { FullBlogArticle } from '../../data/blogArticles/types';

interface BlogSidebarTocProps {
  fullContent: FullBlogArticle | null;
  activeSectionId: string;
  onScrollToSection: (id: string) => void;
}

export default function BlogSidebarToc({
  fullContent,
  activeSectionId,
  onScrollToSection
}: BlogSidebarTocProps) {
  if (!fullContent || !fullContent.sections || fullContent.sections.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#0d8258] shrink-0" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
          TABLE OF CONTENTS
        </h3>
      </div>

      <nav aria-label="Table of contents">
        <ul className="space-y-4">
          {fullContent.sections.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <li key={sec.id} className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => onScrollToSection(sec.id)}
                  className={`w-full text-left text-[13px] leading-relaxed transition-colors cursor-pointer block ${
                    isActive
                      ? 'text-gray-950 font-bold'
                      : 'text-gray-500 hover:text-gray-900 font-normal'
                  }`}
                >
                  {sec.heading}
                </button>

                {sec.productShowcase && (
                  <button
                    type="button"
                    onClick={() => onScrollToSection(sec.id)}
                    className="pl-4 text-left text-[13px] leading-relaxed text-gray-400 hover:text-gray-800 transition-colors cursor-pointer block"
                  >
                    {sec.productShowcase.title}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
