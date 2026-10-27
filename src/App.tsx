import { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CookieBanner from './components/global/CookieBanner';
import Navbar, { NavView } from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BentoFeatures from './components/BentoFeatures';
import FamilyHubSection from './components/FamilyHubSection';
import DailyJournalSection from './components/DailyJournalSection';
import InteractiveTour from './components/InteractiveTour';
import TestimonialsSection from './components/TestimonialsSection';
import SpeciesGrid from './components/home/SpeciesGrid';
import DayTimeline from './components/home/DayTimeline';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import LegalPortal from './components/LegalPortal';
import BlogHub from './components/BlogHub';
import BlogArticleDetail from './components/BlogArticleDetail';
import ChangelogPage from './components/changelog/ChangelogPage';
import NotFoundPage from './components/errors/NotFoundPage';
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
      ? BLOG_POSTS.find((p) => p.slug === viewState.articleSlug) ||
        BLOG_POSTS.find((p) => viewState.articleSlug && p.slug.includes(viewState.articleSlug)) ||
        // Dynamic fallback for localized or partial slug variations
        BLOG_POSTS.find((p) => {
          const s = viewState.articleSlug || '';
          if (s.includes('cat-feeding')) return p.slug.includes('cat-feeding');
          if (s.includes('feeding')) return p.slug.includes('feeding');
          if (s.includes('kidney') || s.includes('hydration')) return p.slug.includes('kidney');
          if (s.includes('emergency') || s.includes('red-flag')) return p.slug.includes('emergency');
          if (s.includes('toxic') || s.includes('poison')) return p.slug.includes('toxic');
          if (s.includes('potty')) return p.slug.includes('potty');
          if (s.includes('heartworm') || s.includes('flea')) return p.slug.includes('heartworm');
          if (s.includes('calorie') || s.includes('rer')) return p.slug.includes('calorie');
          if (s.includes('vaccin')) return p.slug.includes('vaccin');
          if (s.includes('pet-apps') || s.includes('care-apps')) return p.slug.includes('best-pet-care-apps');
          if (s.includes('medication') || s.includes('record')) return p.slug.includes('record');
          if (s.includes('coparent')) return p.slug.includes('coparent');
          if (s.includes('checklist')) return p.slug.includes('checklist');
          if (s.includes('tracker')) return p.slug.includes('tracker');
          if (s.includes('cost') || s.includes('budget')) return p.slug.includes('budget');
          return false;
        }) || null
      : null;

  usePageSeo(viewState, currentArticle);

  const navbarActiveView: NavView =
    viewState.view === 'blog-article'
      ? 'blog'
      : ['home', 'privacy', 'terms', 'deletion', 'blog'].includes(viewState.view)
      ? (viewState.view as NavView)
      : 'home';

  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-[#17191C] antialiased font-sans selection:bg-emerald-500/20 selection:text-emerald-800 relative ${
      viewState.view === 'blog-article' || viewState.view === 'blog' ? '' : 'overflow-x-clip'
    }`}>
      <BackgroundCanvas />

      {/* Navigation Bar with Integrated Announcement Banner */}
      <Navbar
        currentView={navbarActiveView}
        onNavigate={(view, hash) => navigateTo(view, hash)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Blog Article View */}
      {viewState.view === 'blog-article' && currentArticle && (
        <>
          <BlogArticleDetail
            article={currentArticle}
            onNavigateBack={() => navigateTo('blog')}
            onSelectArticle={(slug) => navigateToArticle(slug)}
            onOpenQrModal={() => setIsQrModalOpen(true)}
          />
          <Footer
            onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
        </>
      )}

      {/* Blog Hub View */}
      {viewState.view === 'blog' && (
        <>
          <BlogHub
            onNavigateHome={() => navigateTo('home')}
            onNavigateLegal={(doc) => navigateTo(doc)}
            onSelectArticle={(slug) => navigateToArticle(slug)}
          />
          <Footer
            onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
        </>
      )}

      {/* Legal Portals (Privacy & Deletion) */}
      {['privacy', 'deletion'].includes(viewState.view) && (
        <>
          <LegalPortal
            initialDoc={viewState.view as 'privacy' | 'deletion'}
            onNavigateHome={() => navigateTo('home')}
            onSelectDoc={(doc) => navigateTo(doc)}
          />
          <Footer
            onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
        </>
      )}

      {/* Changelog View */}
      {viewState.view === 'changelog' && (
        <>
          <ChangelogPage onNavigateHome={() => navigateTo('home')} />
          <Footer
            onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
        </>
      )}

      {/* 404 Not Found View */}
      {viewState.view === '404' && (
        <>
          <NotFoundPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateBlog={() => navigateTo('blog')}
          />
          <Footer
            onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
        </>
      )}

      {/* Home View */}
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
          <SpeciesGrid />
          <DayTimeline />
          <PricingSection />
          <FAQSection />
          <ContactUs />
          <DownloadCTA
            onOpenQrModal={() => setIsQrModalOpen(true)}
            onOpenIosModal={() => setIsIosModalOpen(true)}
          />
          <Footer
            onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
        </>
      )}

      {/* Global Modals & Overlays */}
      <CookieBanner onNavigateLegal={(doc) => navigateTo(doc)} />
      <QrDownloadModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
      <IosWaitlistModal isOpen={isIosModalOpen} onClose={() => setIsIosModalOpen(false)} />
    </div>
  );
}
