import { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar, { NavView } from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BentoFeatures from './components/BentoFeatures';
import FamilyHubSection from './components/FamilyHubSection';
import DailyJournalSection from './components/DailyJournalSection';
import InteractiveTour from './components/InteractiveTour';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import HomeBlogSection from './components/HomeBlogSection';
import ContactUs from './components/ContactUs';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import LegalPortal from './components/LegalPortal';
import BlogHub from './components/BlogHub';
import BlogArticleDetail from './components/BlogArticleDetail';
import QrDownloadModal from './components/modals/QrDownloadModal';
import IosWaitlistModal from './components/modals/IosWaitlistModal';
import { BLOG_POSTS } from './data/blogData';
import { useAppNavigation, ExtendedAppView } from './hooks/useAppNavigation';
import { usePageSeo } from './hooks/usePageSeo';

export type { ExtendedAppView };

export default function App() {
  const { viewState, navigateTo, navigateToArticle } = useAppNavigation();
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);

  const currentArticle =
    viewState.view === 'blog-article' && viewState.articleSlug
      ? BLOG_POSTS.find((p) => p.slug === viewState.articleSlug) || null
      : null;

  usePageSeo(viewState, currentArticle);

  const navbarActiveView: NavView =
    viewState.view === 'blog-article' ? 'blog' : (viewState.view as NavView);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-emerald-500/20 selection:text-emerald-700 relative overflow-hidden">
      <BackgroundCanvas />

      <Navbar
        currentView={navbarActiveView}
        onNavigate={(view, hash) => navigateTo(view, hash)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {viewState.view === 'blog-article' && currentArticle && (
        <>
          <BlogArticleDetail
            article={currentArticle}
            onNavigateBack={() => navigateTo('blog')}
            onSelectArticle={(slug) => navigateToArticle(slug)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
          <Footer onNavigate={(to, hash) => navigateTo(to, hash)} onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {viewState.view === 'blog' && (
        <>
          <BlogHub
            onNavigateHome={() => navigateTo('home')}
            onNavigateLegal={(doc) => navigateTo(doc)}
            onSelectArticle={(slug) => navigateToArticle(slug)}
          />
          <Footer onNavigate={(to, hash) => navigateTo(to, hash)} onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {['privacy', 'deletion'].includes(viewState.view) && (
        <>
          <LegalPortal
            initialDoc={viewState.view as 'privacy' | 'deletion'}
            onNavigateHome={() => navigateTo('home')}
            onSelectDoc={(doc) => navigateTo(doc)}
          />
          <Footer onNavigate={(to, hash) => navigateTo(to, hash)} onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {viewState.view === 'home' && (
        <>
          <Hero
            onOpenQrModal={() => setIsQrModalOpen(true)}
            onOpenIosModal={() => setIsIosModalOpen(true)}
          />
          <Partners />
          <BentoFeatures />
          <FamilyHubSection />
          <DailyJournalSection />
          <InteractiveTour />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <div className="hidden md:block">
            <HomeBlogSection
              onNavigateBlog={() => navigateTo('blog')}
              onSelectArticle={(slug) => navigateToArticle(slug)}
            />
          </div>
          <ContactUs />
          <DownloadCTA
            onOpenQrModal={() => setIsQrModalOpen(true)}
            onOpenIosModal={() => setIsIosModalOpen(true)}
          />
          <Footer onNavigate={(to, hash) => navigateTo(to, hash)} onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      <QrDownloadModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
      <IosWaitlistModal isOpen={isIosModalOpen} onClose={() => setIsIosModalOpen(false)} />
    </div>
  );
}
