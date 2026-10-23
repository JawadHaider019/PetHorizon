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

type AppView = NavView;

const getDocFromLocation = (): AppView => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path.includes('blog') || hash.includes('blog')) return 'blog';
  if (path.includes('privacy') || hash.includes('privacy')) return 'privacy';
  if (path.includes('terms') || hash.includes('terms')) return 'terms';
  if (
    path.includes('deletion') ||
    hash.includes('deletion') ||
    path.includes('delete') ||
    hash.includes('delete')
  ) {
    return 'deletion';
  }
  return 'home';
};

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(getDocFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getDocFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Update Page Title
  useEffect(() => {
    if (currentView === 'blog') {
      document.title = 'Pet Care Blog & Family Pet Guides | Pet Horizon';
    } else if (currentView === 'privacy') {
      document.title = 'Official Privacy Policy | Pet Horizon';
    } else if (currentView === 'terms') {
      document.title = 'Terms of Service & User Agreement | Pet Horizon';
    } else if (currentView === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | Pet Horizon';
    } else {
      document.title = 'Pet Horizon – Smart Pet Care, Family Hub & Daily Routine Tracker';
    }
  }, [currentView]);

  const navigateTo = (to: AppView, hash?: string) => {
    if (to === 'home') {
      window.history.pushState({}, '', hash ? `/${hash}` : '/');
      setCurrentView('home');
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
      setCurrentView(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans select-none selection:bg-emerald-500/20 selection:text-emerald-700 relative overflow-hidden">
      
      {/* Particle Network Backdrop */}
      <BackgroundCanvas />

      {/* Persistent Unified Navigation Bar Across All Pages */}
      <Navbar
        currentView={currentView}
        onNavigate={(view, hash) => navigateTo(view, hash)}
      />

      {/* 1. Blog Hub Page View */}
      {currentView === 'blog' && (
        <>
          <BlogHub
            onNavigateHome={() => navigateTo('home')}
            onNavigateLegal={(doc) => navigateTo(doc)}
          />
          <Footer onNavigateLegal={(doc) => navigateTo(doc)} />
        </>
      )}

      {/* 2. Legal Portal Page View (Privacy, Terms, Deletion) */}
      {['privacy', 'terms', 'deletion'].includes(currentView) && (
        <LegalPortal
          initialDoc={currentView as 'privacy' | 'terms' | 'deletion'}
          onNavigateHome={() => navigateTo('home')}
          onSelectDoc={(doc) => navigateTo(doc)}
        />
      )}

      {/* 3. Main Landing Page View */}
      {currentView === 'home' && (
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
