import { useState, useEffect } from 'react';
import { TOUR_SCREENS } from '../data/tourData';
import TourPhonePreview from './tour/TourPhonePreview';

import { motion } from 'framer-motion';
import { fadeInUp } from '../config/animationVariants';

export default function InteractiveTour() {
  const [selectedScreen, setSelectedScreen] = useState<string>('home');
  const current = TOUR_SCREENS.find((s) => s.id === selectedScreen) || TOUR_SCREENS[0];
  const currentIndex = TOUR_SCREENS.findIndex((s) => s.id === selectedScreen);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= TOUR_SCREENS.length) return;
    setSelectedScreen(TOUR_SCREENS[index].id);
  };

  // Preload all tour screenshots into browser cache on mount/idle so tab switches are instantaneous
  useEffect(() => {
    const preloadScreenshots = () => {
      TOUR_SCREENS.forEach((screen) => {
        const img = new Image();
        img.src = screen.screenshot;
      });
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadScreenshots, { timeout: 1500 });
    } else {
      setTimeout(preloadScreenshots, 200);
    }
  }, []);

  return (
    <section id="tour" className="py-14 sm:py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div id="features" className="absolute -top-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2.5">
            Interactive App Explorer
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Take a Tour of the Pet Horizon Experience
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 font-normal max-w-2xl mx-auto">
            Swipe or use the controls below to preview the mobile app experience in real-time.
          </p>
        </motion.div>

        {/* Active Tour Screen 3D Fanned Phone Mockup & Highlights */}
        <TourPhonePreview
          current={current}
          currentIndex={currentIndex}
          onSelectIndex={scrollToIndex}
          onNext={() => scrollToIndex((currentIndex + 1) % TOUR_SCREENS.length)}
          onPrev={() =>
            scrollToIndex((currentIndex - 1 + TOUR_SCREENS.length) % TOUR_SCREENS.length)
          }
        />
      </div>
    </section>
  );
}
