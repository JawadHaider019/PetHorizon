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
    <footer className="bg-[#0A160D] text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-emerald-950/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-64 bg-emerald-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

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

      {/* Luxury Editorial Watermark */}
      <div className="w-full text-center mt-8 select-none pointer-events-none overflow-hidden">
        <span className="text-[12vw] sm:text-[10vw] font-black tracking-[0.25em] text-white/[0.03] leading-none uppercase inline-block whitespace-nowrap">
          PET HORIZON
        </span>
      </div>
    </footer>
  );
}
