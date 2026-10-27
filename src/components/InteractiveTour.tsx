import { useState, useRef, useEffect } from 'react';
import { TOUR_SCREENS } from '../data/tourData';
import TourMobileStepper from './tour/TourMobileStepper';
import TourTabBar from './tour/TourTabBar';
import TourPhonePreview from './tour/TourPhonePreview';

export default function InteractiveTour() {
  const [selectedScreen, setSelectedScreen] = useState<string>('home');
  const current = TOUR_SCREENS.find((s) => s.id === selectedScreen) || TOUR_SCREENS[0];
  const currentIndex = TOUR_SCREENS.findIndex((s) => s.id === selectedScreen);

  const tabsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>(
        `[data-tab-id="${selectedScreen}"]`
      );
      if (activeBtn) {
        const container = tabsRef.current;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const containerWidth = container.offsetWidth;
        container.scrollTo({
          left: btnLeft - containerWidth / 2 + btnWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedScreen]);

  return (
    <section id="tour" className="py-14 sm:py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div id="features" className="absolute -top-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2.5">
            Interactive App Explorer
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Take a Tour of the Pet Horizon Experience
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 font-normal max-w-2xl mx-auto">
            Swipe or select a screen below to preview the exact user experience waiting for you on the mobile app.
          </p>
        </div>

        {/* Mobile View Screen Switcher Bar (<sm) */}
        <TourMobileStepper
          current={current}
          currentIndex={currentIndex}
          selectedScreen={selectedScreen}
          tabsRef={tabsRef}
          onScrollToIndex={scrollToIndex}
        />

        {/* Desktop / Tablet Tab Navigation Buttons (>=sm) */}
        <TourTabBar
          selectedScreen={selectedScreen}
          onSelectScreen={(_id, idx) => scrollToIndex(idx)}
        />

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
