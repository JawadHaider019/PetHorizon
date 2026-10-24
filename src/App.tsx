import { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar, { NavView } from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BentoFeatures from './components/BentoFeatures';
import AppFeatures from './components/AppFeatures';
import FamilyHubSection from './components/FamilyHubSection';
import DailyJournalSection from './components/DailyJournalSection';
import InteractiveTour from './components/InteractiveTour';
import TestimonialsSection from './components/TestimonialsSection';
import Comparison from './components/Comparison';
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
    return { view: 'privacy', articleSlug: null };
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
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);

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

  // Update Page Title and SEO Meta Tags dynamically
  useEffect(() => {
    const updateMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propName = selector.match(/property="([^"]+)"/)?.[1];
          if (propName) el.setAttribute('property', propName);
        } else if (selector.includes('name=')) {
          const nameValue = selector.match(/name="([^"]+)"/)?.[1];
          if (nameValue) el.setAttribute('name', nameValue);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (viewState.view === 'blog-article' && currentArticle) {
      document.title = `${currentArticle.title} | Pet Horizon Vet Guides`;
      updateMetaTag('meta[name="description"]', 'content', currentArticle.excerpt);
      updateMetaTag('meta[name="keywords"]', 'content', `${currentArticle.tags.join(', ')}, ${currentArticle.seoKeyword}`);
      updateMetaTag('meta[property="og:title"]', 'content', currentArticle.title);
      updateMetaTag('meta[property="og:description"]', 'content', currentArticle.excerpt);
      updateMetaTag('meta[property="og:image"]', 'content', currentArticle.coverImage);
      updateMetaTag('meta[property="og:type"]', 'content', 'article');
    } else if (viewState.view === 'blog') {
      document.title = 'Top-Ranked Pet Care & Vet Guides | Pet Horizon Knowledge Hub';
      updateMetaTag('meta[name="description"]', 'content', 'Evidence-based veterinary guides, poison checklists, puppy potty training schedules, and pet nutrition formulas.');
      updateMetaTag('meta[property="og:title"]', 'content', 'Top-Ranked Pet Care & Vet Guides | Pet Horizon');
    } else if (viewState.view === 'privacy') {
      document.title = 'Official Privacy Policy | Pet Horizon';
    } else if (viewState.view === 'terms') {
      document.title = 'Terms of Service & User Agreement | Pet Horizon';
    } else if (viewState.view === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | Pet Horizon';
    } else {
      document.title = 'Pet Horizon – Smart Pet Care, Family Hub & Daily Routine Tracker';
      updateMetaTag('meta[name="description"]', 'content', 'Pet Horizon is the all-in-one family pet care app. Synchronize feeding, track vet appointments, set medication reminders, and log daily milestones.');
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
          : to === 'privacy' || (to as string) === 'terms'
          ? 'privacy-policy'
          : 'data-deletion';
      window.history.pushState({}, '', `/${slug}`);
      setViewState({ view: to === 'terms' ? 'privacy' : to, articleSlug: null });
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

      {/* Navigation Bar (Shows standard Navbar on main site & blog; Legal views use dedicated single LegalNavbar) */}
      {!['privacy', 'deletion'].includes(viewState.view) && (
        <Navbar
          currentView={navbarActiveView}
          onNavigate={(view, hash) => navigateTo(view, hash)}
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />
      )}

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

      {/* 3. Legal Portal Page View (Privacy, Deletion) */}
      {['privacy', 'deletion'].includes(viewState.view) && (
        <LegalPortal
          initialDoc={viewState.view as 'privacy' | 'deletion'}
          onNavigateHome={() => navigateTo('home')}
          onSelectDoc={(doc) => navigateTo(doc)}
        />
      )}

      {/* 4. Main Landing Page View */}
      {viewState.view === 'home' && (
        <>
          <Hero 
            onOpenQrModal={() => setIsQrModalOpen(true)}
            onOpenIosModal={() => setIsIosModalOpen(true)}
          />
          <Partners />
          <BentoFeatures />
          <AppFeatures />
          <FamilyHubSection />
          <DailyJournalSection />
          <InteractiveTour />
          <TestimonialsSection />
          <Comparison />
          <PricingSection />
          <FAQSection />
          <HomeBlogSection
            onNavigateBlog={() => navigateTo('blog')}
            onSelectArticle={(slug) => navigateToArticle(slug)}
          />
          <ContactUs />
          <DownloadCTA 
            onOpenQrModal={() => setIsQrModalOpen(true)}
            onOpenIosModal={() => setIsIosModalOpen(true)}
          />
          <Footer onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {/* Modals for Desktop-to-Mobile & iOS Waitlist */}
      <QrDownloadModal 
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
      <IosWaitlistModal
        isOpen={isIosModalOpen}
        onClose={() => setIsIosModalOpen(false)}
      />
    </div>
  );
}
