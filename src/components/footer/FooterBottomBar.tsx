import { SITE_CONFIG } from '../../config/siteConfig';

interface FooterBottomBarProps {
  onLegalClick: (e: React.MouseEvent, doc: 'privacy' | 'deletion') => void;
  onBlogClick: (e: React.MouseEvent) => void;
  onChangelogClick?: (e: React.MouseEvent) => void;
}

export default function FooterBottomBar({
  onLegalClick,
  onBlogClick,
  onChangelogClick
}: FooterBottomBarProps) {
  return (
    <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 font-medium">
        <button
          onClick={onBlogClick}
          className="hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Veterinary Guides
        </button>
        <span className="text-slate-300">&bull;</span>
        <button
          onClick={onChangelogClick}
          className="hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Changelog
        </button>
        <span className="text-slate-300">&bull;</span>
        <button
          onClick={(e) => onLegalClick(e, 'privacy')}
          className="hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Privacy Protocol
        </button>
        <span className="text-slate-300">&bull;</span>
        <button
          onClick={(e) => onLegalClick(e, 'deletion')}
          className="hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap"
        >
          Data Deletion
        </button>
        <span className="text-slate-300">&bull;</span>
        <a href="#contact" className="hover:text-[#166534] transition-colors whitespace-nowrap">
          Engineering Support
        </a>
      </div>

      <p className="font-normal text-center md:text-right text-[11px] sm:text-xs text-slate-500">
        Pet Horizon &copy; {new Date().getFullYear()} &bull; Built with care by{' '}
        <a
          href={SITE_CONFIG.author.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-800 font-bold hover:text-[#166534] transition-colors underline decoration-slate-300 hover:decoration-[#166534]"
        >
          {SITE_CONFIG.author.name}
        </a>
      </p>
    </div>
  );
}
