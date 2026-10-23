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

export default function App() {
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

      {/* Modern Footer */}
      <Footer />
      
    </div>
  );
}
