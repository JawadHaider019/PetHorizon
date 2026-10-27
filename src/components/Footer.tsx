import FooterBrandHeader from './footer/FooterBrandHeader';
import FooterDesktopColumns from './footer/FooterDesktopColumns';
import FooterMobileAccordion from './footer/FooterMobileAccordion';
import FooterBottomBar from './footer/FooterBottomBar';

interface FooterProps {
  onNavigate?: (view: 'home' | 'blog' | 'privacy' | 'terms' | 'deletion' | 'changelog', hash?: string) => void;
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function Footer({ onNavigate, onNavigateLegal }: FooterProps) {
  const handleLegalClick = (e: React.MouseEvent, doc: 'privacy' | 'deletion') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(doc);
    } else if (onNavigateLegal) {
      onNavigateLegal(doc);
    } else {
      window.location.href = `/${doc === 'privacy' ? 'privacy-policy' : 'data-deletion'}`;
    }
  };

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('blog');
    } else {
      window.location.href = '/blog';
    }
  };

  const handleChangelogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('changelog');
    } else {
      window.location.href = '/changelog';
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-slate-800 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-black/[0.06] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-700/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#EADECE]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <FooterBrandHeader />
        <FooterMobileAccordion
          onLegalClick={handleLegalClick}
          onBlogClick={handleBlogClick}
          onChangelogClick={handleChangelogClick}
        />
        <FooterDesktopColumns
          onLegalClick={handleLegalClick}
          onBlogClick={handleBlogClick}
          onChangelogClick={handleChangelogClick}
        />
        <FooterBottomBar
          onLegalClick={handleLegalClick}
          onBlogClick={handleBlogClick}
          onChangelogClick={handleChangelogClick}
        />
      </div>

      {/* Editorial Watermark */}
      <div className="w-full text-center mt-8 select-none pointer-events-none overflow-hidden">
        <span className="text-[12vw] sm:text-[10vw] font-black tracking-[0.25em] text-black/[0.025] leading-none uppercase inline-block whitespace-nowrap">
          PET HORIZON
        </span>
      </div>
    </footer>
  );
}
