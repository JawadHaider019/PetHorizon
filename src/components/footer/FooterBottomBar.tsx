import { SITE_CONFIG } from '../../config/siteConfig';

interface FooterBottomBarProps {
  onLegalClick: (e: React.MouseEvent, doc: 'privacy' | 'terms' | 'deletion') => void;
  onBlogClick: (e: React.MouseEvent) => void;
  onChangelogClick?: (e: React.MouseEvent) => void;
  onToolClick?: (e: React.MouseEvent) => void;
  onAgeToolClick?: (e: React.MouseEvent) => void;
}

export default function FooterBottomBar({
  onLegalClick,
  onBlogClick,
  onChangelogClick,
  onToolClick,
  onAgeToolClick
}: FooterBottomBarProps) {
  return (
    <div className="pt-4 sm:pt-5 border-t border-emerald-950/[0.08] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 font-medium">
        <a
          href="/blogs"
          onClick={onBlogClick}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Veterinary Guides
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a
          href="/tools/pet-age-calculator"
          onClick={onAgeToolClick}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Pet Age Calculator
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a
          href="/tools/pet-calorie-calculator"
          onClick={onToolClick}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Calorie Calculator
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a
          href="/changelog"
          onClick={onChangelogClick}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Changelog
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a
          href="/privacy-policy"
          onClick={(e) => onLegalClick(e, 'privacy')}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Privacy Protocol
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a
          href="/terms-of-service"
          onClick={(e) => onLegalClick(e, 'terms')}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors cursor-pointer whitespace-nowrap"
        >
          Terms of Service
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a
          href="/data-deletion"
          onClick={(e) => onLegalClick(e, 'deletion')}
          className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap"
        >
          Data Deletion
        </a>
        <span className="text-emerald-950/20" aria-hidden="true">&bull;</span>
        <a href="#contact" className="min-h-[44px] py-2 px-1 inline-flex items-center hover:text-[#166534] transition-colors whitespace-nowrap">
          Engineering Support
        </a>
      </div>

      <p className="font-normal text-center md:text-right text-[11px] sm:text-xs text-slate-600">
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
