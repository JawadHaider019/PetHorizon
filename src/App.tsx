import { useState, lazy, Suspense } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CookieBanner from './components/global/CookieBanner';
import Navbar, { NavView } from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import FamilyHubSection from './components/FamilyHubSection';
import DailyJournalSection from './components/DailyJournalSection';
import InteractiveTour from './components/InteractiveTour';
import TestimonialsSection from './components/TestimonialsSection';
import SpeciesGrid from './components/home/SpeciesGrid';
import DayTimeline from './components/home/DayTimeline';
import HomeSeoHubSection from './components/home/HomeSeoHubSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import { BLOG_POSTS } from './data/blogData';
import { useAppNavigation, ExtendedAppView } from './hooks/useAppNavigation';
import { usePageSeo } from './hooks/usePageSeo';

// Dynamic code-splitting for non-homepage views & modals to optimize initial bundle size & LCP
const LegalPortal = lazy(() => import('./components/LegalPortal'));
const BlogHub = lazy(() => import('./components/BlogHub'));
const BlogArticleDetail = lazy(() => import('./components/BlogArticleDetail'));
const ChangelogPage = lazy(() => import('./components/changelog/ChangelogPage'));
const NotFoundPage = lazy(() => import('./components/errors/NotFoundPage'));
const PetCalorieCalculator = lazy(() => import('./components/tools/PetCalorieCalculator'));
const PetAgeCalculator = lazy(() => import('./components/tools/PetAgeCalculator'));
const QrDownloadModal = lazy(() => import('./components/modals/QrDownloadModal'));
const IosWaitlistModal = lazy(() => import('./components/modals/IosWaitlistModal'));

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

      {/* Accessible Skip Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-800 focus:text-white focus:rounded-lg focus:shadow-lg focus:font-bold focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Navigation Bar with Integrated Announcement Banner */}
      <Navbar
        currentView={navbarActiveView}
        onNavigate={(view, hash) => navigateTo(view, hash)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Primary Main Content Landmark for Screen Readers & Accessibility */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center" />}>
          {/* Blog Article View */}
          {viewState.view === 'blog-article' && currentArticle && (
            <BlogArticleDetail
              article={currentArticle}
              onNavigateBack={() => navigateTo('blog')}
              onNavigateHome={() => navigateTo('home')}
              onSelectArticle={(slug) => navigateToArticle(slug)}
              onOpenQrModal={() => setIsQrModalOpen(true)}
            />
          )}

          {/* Blog Hub View */}
          {viewState.view === 'blog' && (
            <BlogHub
              onNavigateHome={() => navigateTo('home')}
              onNavigateLegal={(doc) => navigateTo(doc)}
              onSelectArticle={(slug) => navigateToArticle(slug)}
            />
          )}

          {/* Legal Portals (Privacy, Terms & Deletion) */}
          {['privacy', 'terms', 'deletion'].includes(viewState.view) && (
            <LegalPortal
              initialDoc={viewState.view as 'privacy' | 'terms' | 'deletion'}
              onNavigateHome={() => navigateTo('home')}
              onSelectDoc={(doc) => navigateTo(doc)}
            />
          )}

          {/* Changelog View */}
          {viewState.view === 'changelog' && (
            <ChangelogPage onNavigateHome={() => navigateTo('home')} />
          )}

          {/* Pet Calorie & Daily Portion Calculator Tool */}
          {viewState.view === 'pet-calorie-calculator' && (
            <PetCalorieCalculator
              onNavigateHome={() => navigateTo('home')}
              onOpenQrModal={() => setIsQrModalOpen(true)}
            />
          )}

          {/* Pet Age in Human Years Calculator Tool */}
          {viewState.view === 'pet-age-calculator' && (
            <PetAgeCalculator
              onNavigateHome={() => navigateTo('home')}
              onOpenQrModal={() => setIsQrModalOpen(true)}
            />
          )}

          {/* 404 Not Found View */}
          {viewState.view === '404' && (
            <NotFoundPage
              onNavigateHome={() => navigateTo('home')}
              onNavigateBlog={() => navigateTo('blog')}
            />
          )}
        </Suspense>

        {/* Home View */}
        {viewState.view === 'home' && (
          <>
            <Hero
              onOpenQrModal={() => setIsQrModalOpen(true)}
              onOpenIosModal={() => setIsIosModalOpen(true)}
            />
            <BentoFeatures />
            <FamilyHubSection />
            <DailyJournalSection />
            <InteractiveTour />
            <TestimonialsSection />
            <SpeciesGrid />
            <DayTimeline />
            <PricingSection />
            <HomeSeoHubSection
              onNavigate={(view) => navigateTo(view)}
              onSelectArticle={(slug) => navigateToArticle(slug)}
            />
            <FAQSection />
            <ContactUs />
            <DownloadCTA
              onOpenQrModal={() => setIsQrModalOpen(true)}
              onOpenIosModal={() => setIsIosModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Global Semantic Footer */}
      <Footer
        onNavigate={(to, hash) => navigateTo(to as ExtendedAppView, hash)}
        onNavigateLegal={(doc) => navigateTo(doc)}
      />

      {/* Global Modals & Overlays */}
      <CookieBanner onNavigateLegal={(doc) => navigateTo(doc)} />
      <Suspense fallback={null}>
        <QrDownloadModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
        <IosWaitlistModal isOpen={isIosModalOpen} onClose={() => setIsIosModalOpen(false)} />
      </Suspense>
    </div>
  );
}
