import { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar, { NavView } from './components/Navbar';
import Hero from './components/Hero';
import AppFeatures from './components/AppFeatures';
import FamilyHubSection from './components/FamilyHubSection';
import DailyJournalSection from './components/DailyJournalSection';
import InteractiveTour from './components/InteractiveTour';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import LegalPortal from './components/LegalPortal';
import BlogHub from './components/BlogHub';
import BlogArticleDetail from './components/BlogArticleDetail';
import { BLOG_POSTS, BlogPost } from './data/blogData';

export type ExtendedAppView = NavView | 'blog-article';

interface ViewState {
  view: ExtendedAppView;
  articleSlug: string | null;
}

const getViewStateFromLocation = (): ViewState => {
  const path = window.location.pathname;
  const lowerPath = path.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // Check for /blog/:slug
  const slugMatch = path.match(/^\/blog\/([a-zA-Z0-9-]+)/);
  if (slugMatch) {
    const slug = slugMatch[1];
    const exists = BLOG_POSTS.some((p) => p.slug === slug);
    if (exists) {
      return { view: 'blog-article', articleSlug: slug };
    }
  }

  if (lowerPath === '/blog' || lowerPath === '/blog/' || hash.includes('blog')) {
    return { view: 'blog', articleSlug: null };
  }
  if (lowerPath.includes('privacy') || hash.includes('privacy')) {
    return { view: 'privacy', articleSlug: null };
  }
  if (lowerPath.includes('terms') || hash.includes('terms')) {
    return { view: 'terms', articleSlug: null };
  }
  if (
    lowerPath.includes('deletion') ||
    hash.includes('deletion') ||
    lowerPath.includes('delete') ||
    hash.includes('delete')
  ) {
    return { view: 'deletion', articleSlug: null };
  }
  return { view: 'home', articleSlug: null };
};

export default function App() {
  const [viewState, setViewState] = useState<ViewState>(getViewStateFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      setViewState(getViewStateFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const currentArticle =
    viewState.view === 'blog-article' && viewState.articleSlug
      ? BLOG_POSTS.find((p) => p.slug === viewState.articleSlug) || null
      : null;

  // Update Page Title dynamically
  useEffect(() => {
    if (viewState.view === 'blog-article' && currentArticle) {
      document.title = `${currentArticle.title} | Pet Horizon Guides`;
    } else if (viewState.view === 'blog') {
      document.title = 'Pet Care Blog & Family Pet Guides | Pet Horizon';
    } else if (viewState.view === 'privacy') {
      document.title = 'Official Privacy Policy | Pet Horizon';
    } else if (viewState.view === 'terms') {
      document.title = 'Terms of Service & User Agreement | Pet Horizon';
    } else if (viewState.view === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | Pet Horizon';
    } else {
      document.title = 'Pet Horizon – Smart Pet Care, Family Hub & Daily Routine Tracker';
    }
  }, [viewState, currentArticle]);

  const navigateTo = (to: NavView, hash?: string) => {
    if (to === 'home') {
      window.history.pushState({}, '', hash ? `/${hash}` : '/');
      setViewState({ view: 'home', articleSlug: null });
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const slug =
        to === 'blog'
          ? 'blog'
          : to === 'privacy'
          ? 'privacy-policy'
          : to === 'terms'
          ? 'terms-of-service'
          : 'data-deletion';
      window.history.pushState({}, '', `/${slug}`);
      setViewState({ view: to, articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToArticle = (slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    setViewState({ view: 'blog-article', articleSlug: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // NavView to show as active in Navbar
  const navbarActiveView: NavView =
    viewState.view === 'blog-article' ? 'blog' : (viewState.view as NavView);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans select-none selection:bg-emerald-500/20 selection:text-emerald-700 relative overflow-hidden">
      
      {/* Particle Network Backdrop */}
      <BackgroundCanvas />

      {/* Persistent Unified Navigation Bar Across All Pages */}
      <Navbar
        currentView={navbarActiveView}
        onNavigate={(view, hash) => navigateTo(view, hash)}
      />

      {/* 1. Dedicated Blog Article Detail View */}
      {viewState.view === 'blog-article' && currentArticle && (
        <>
          <BlogArticleDetail
            article={currentArticle}
            onNavigateBack={() => navigateTo('blog')}
            onSelectArticle={(slug) => navigateToArticle(slug)}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
          <Footer onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {/* 2. Blog Hub Page View */}
      {viewState.view === 'blog' && (
        <>
          <BlogHub
            onNavigateHome={() => navigateTo('home')}
            onNavigateLegal={(doc) => navigateTo(doc)}
            onSelectArticle={(slug) => navigateToArticle(slug)}
          />
          <Footer onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {/* 3. Legal Portal Page View (Privacy, Terms, Deletion) */}
      {['privacy', 'terms', 'deletion'].includes(viewState.view) && (
        <LegalPortal
          initialDoc={viewState.view as 'privacy' | 'terms' | 'deletion'}
          onNavigateHome={() => navigateTo('home')}
          onSelectDoc={(doc) => navigateTo(doc)}
        />
      )}

      {/* 4. Main Landing Page View */}
      {viewState.view === 'home' && (
        <>
          {/* Hero Section with Play Store Device Showcase & Mascot */}
          <Hero />

          {/* 4 Core Pillars: Schedules, Family Hub, Daily Journal, Pet Profile */}
          <AppFeatures />

          {/* Deep Dive: Family Hub & Caretaker Collaboration */}
          <FamilyHubSection />

          {/* Deep Dive: Daily Journal & Activity Timeline */}
          <DailyJournalSection />

          {/* Interactive App Screen Tour (5 Real Mobile Tabs) */}
          <InteractiveTour />

          {/* Transparent Free vs Premium Pricing Matrix */}
          <PricingSection />

          {/* Frequently Asked Questions */}
          <FAQSection />

          {/* Contact & Support Form */}
          <ContactUs />

          {/* High-Impact Download Banner */}
          <DownloadCTA />

          {/* Modern Footer with Legal Routing */}
          <Footer onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}
      
    </div>
  );
}
