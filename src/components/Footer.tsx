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
    <footer className="bg-[#F2F8F5] text-slate-800 pt-8 sm:pt-10 pb-5 sm:pb-6 border-t border-emerald-950/[0.08] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Desktop Layout: Brand on left, Navigation columns on right */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 pb-6 sm:pb-8 items-start">
          <div className="lg:col-span-4 xl:col-span-4">
            <FooterBrandHeader />
          </div>
          <div className="lg:col-span-8 xl:col-span-8">
            <FooterDesktopColumns
              onLegalClick={handleLegalClick}
              onBlogClick={handleBlogClick}
              onChangelogClick={handleChangelogClick}
            />
          </div>
        </div>

        {/* Mobile / Tablet Accordion Layout */}
        <div className="lg:hidden pb-2">
          <FooterBrandHeader />
          <FooterMobileAccordion
            onLegalClick={handleLegalClick}
            onBlogClick={handleBlogClick}
            onChangelogClick={handleChangelogClick}
          />
        </div>

        {/* Streamlined Bottom Bar */}
        <FooterBottomBar
          onLegalClick={handleLegalClick}
          onBlogClick={handleBlogClick}
          onChangelogClick={handleChangelogClick}
        />
      </div>
    </footer>
  );
}
