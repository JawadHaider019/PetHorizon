import { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
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

type AppView = 'home' | 'privacy' | 'terms' | 'deletion';

const getDocFromLocation = (): AppView => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

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

  // Update Page Title and Meta description
  useEffect(() => {
    if (currentView === 'privacy') {
      document.title = 'Official Privacy Policy | Pet Horizon';
    } else if (currentView === 'terms') {
      document.title = 'Terms of Service & User Agreement | Pet Horizon';
    } else if (currentView === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | Pet Horizon';
    } else {
      document.title = 'Pet Horizon - Complete Pet Care & Family Companion';
    }
  }, [currentView]);

  const navigateTo = (to: AppView) => {
    if (to === 'home') {
      window.history.pushState({}, '', '/');
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const slug =
        to === 'privacy'
          ? 'privacy-policy'
          : to === 'terms'
          ? 'terms-of-service'
          : 'data-deletion';
      window.history.pushState({}, '', `/${slug}`);
      setCurrentView(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // If in Legal Portal View
  if (currentView !== 'home') {
    return (
      <LegalPortal
        initialDoc={currentView}
        onNavigateHome={() => navigateTo('home')}
        onSelectDoc={(doc) => navigateTo(doc)}
      />
    );
  }

  // Standard Landing Page View
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans select-none selection:bg-emerald-500/20 selection:text-emerald-700 relative overflow-hidden">
      
      {/* Particle Network Backdrop */}
      <BackgroundCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section with Play Store Device Showcase & 3D Pets Mascot */}
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
      
    </div>
  );
}
