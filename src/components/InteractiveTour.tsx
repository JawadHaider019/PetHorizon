import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { TOUR_SCREENS } from '../data/tourData';

export default function InteractiveTour() {
  const [selectedScreen, setSelectedScreen] = useState<string>('home');
  const current = TOUR_SCREENS.find(s => s.id === selectedScreen) || TOUR_SCREENS[0];
  const currentIndex = TOUR_SCREENS.findIndex(s => s.id === selectedScreen);

  const carouselRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Synchronize carousel scroll to index
  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= TOUR_SCREENS.length) return;
    setSelectedScreen(TOUR_SCREENS[index].id);

    if (carouselRef.current) {
      isProgrammaticScroll.current = true;
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400);
    }
  };

  // Scroll listener for mobile touch-swipe carousel
  const handleCarouselScroll = () => {
    if (isProgrammaticScroll.current || !carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const slideWidth = carouselRef.current.clientWidth;
    if (slideWidth <= 0) return;

    const newIndex = Math.round(scrollLeft / slideWidth);
    if (newIndex >= 0 && newIndex < TOUR_SCREENS.length) {
      const targetScreen = TOUR_SCREENS[newIndex];
      if (targetScreen.id !== selectedScreen) {
        setSelectedScreen(targetScreen.id);
      }
    }
  };

  // Keep active tab visible in horizontal tab bar
  useEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>(`[data-tab-id="${selectedScreen}"]`);
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
      {/* Anchor for nav links to #features */}
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
        <div className="sm:hidden mb-4">
          {/* Top Quick-Stepper Header */}
          <div className="flex items-center justify-between bg-[#F5F6F8] border border-slate-200/90 rounded-2xl p-2 mb-2 shadow-2xs">
            <button
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              className={`p-1.5 rounded-xl border flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'border-transparent text-slate-300'
                  : 'border-slate-200 bg-white text-slate-700 shadow-2xs active:scale-95'
              }`}
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-slate-900">
                {current.name}
              </span>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                {currentIndex + 1}/7
              </span>
            </div>

            <button
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex === TOUR_SCREENS.length - 1}
              className={`p-1.5 rounded-xl border flex items-center justify-center transition-all ${
                currentIndex === TOUR_SCREENS.length - 1
                  ? 'border-transparent text-slate-300'
                  : 'border-slate-200 bg-white text-slate-700 shadow-2xs active:scale-95'
              }`}
              aria-label="Next screen"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Segmented Short-Name Icon Strip */}
          <div 
            ref={tabsRef}
            className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 px-0.5"
          >
            {TOUR_SCREENS.map((sc, idx) => {
              const Icon = sc.icon;
              const isSelected = selectedScreen === sc.id;
              return (
                <button
                  key={sc.id}
                  data-tab-id={sc.id}
                  onClick={() => scrollToIndex(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all duration-200 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/20'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                  <span>{sc.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop / Tablet Tab Navigation Buttons (>=sm) */}
        <div 
          className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-2 sm:pb-0 mb-6 sm:mb-12 px-1"
        >
          {TOUR_SCREENS.map((sc, idx) => {
            const Icon = sc.icon;
            const isSelected = selectedScreen === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => scrollToIndex(idx)}
                className={`relative flex items-center gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-700/25 scale-[1.02]'
                    : 'bg-[#F5F6F8] text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{sc.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeTourTabPill"
                    className="absolute inset-0 rounded-2xl bg-emerald-700 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Synchronized Single-Card Swipe Carousel (<md) */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          <div className="bg-[#F8FAF9] border border-slate-200/90 rounded-3xl p-4 sm:p-6 shadow-sm relative overflow-hidden">
            {/* Subtle green ambient lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Horizontal Snap Slides Container */}
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth relative z-10"
            >
              {TOUR_SCREENS.map((sc) => {
                const isCurrent = selectedScreen === sc.id;
                return (
                  <div
                    key={sc.id}
                    className={`w-full shrink-0 snap-center flex flex-col items-center px-1 transition-all duration-300 ${
                      isCurrent ? 'opacity-100 scale-100' : 'opacity-65 scale-[0.97]'
                    }`}
                  >
                  {/* Phone Mockup with Active Screen Badge */}
                  <div className="relative pt-4 pb-2">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1.5 text-[10px] font-extrabold text-slate-800 shrink-0 whitespace-nowrap">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                      </span>
                      <span>{sc.name}</span>
                    </div>

                    <PhoneFrame
                      src={sc.screenshot}
                      alt={sc.title}
                      frameClassName="w-[195px] sm:w-[220px]"
                    />
                  </div>

                  {/* Unified Content Card Directly Below Phone */}
                  <div className="w-full max-w-[340px] bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs mt-3 text-left flex flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full w-fit">
                        {sc.badge}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        {currentIndex + 1} of {TOUR_SCREENS.length}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                      {sc.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-2">
                      {sc.description}
                    </p>

                    {/* 2 Concise Bullet Highlights */}
                    <div className="space-y-1.5 pt-0.5">
                      {sc.highlights.slice(0, 2).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs text-slate-700 font-medium leading-tight">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Google Play Action */}
                    <div className="pt-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-sm transition-all text-xs cursor-pointer"
                      >
                        <span>Install Pet Horizon</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Pagination Controls & Dots */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-200/70 relative z-10 px-2">
              <button
                onClick={() => scrollToIndex(currentIndex - 1)}
                disabled={currentIndex === 0}
                className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                  currentIndex === 0
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 bg-white hover:bg-emerald-50 hover:border-emerald-300 cursor-pointer shadow-xs'
                }`}
                aria-label="Previous tour screen"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Synchronized Dots */}
              <div className="flex items-center gap-1.5">
                {TOUR_SCREENS.map((sc, dIdx) => (
                  <button
                    key={sc.id}
                    onClick={() => scrollToIndex(dIdx)}
                    className={`transition-all duration-300 cursor-pointer ${
                      selectedScreen === sc.id
                        ? 'w-6 h-2 bg-emerald-700 rounded-full'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full'
                    }`}
                    aria-label={`Jump to screen ${dIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollToIndex(currentIndex + 1)}
                disabled={currentIndex === TOUR_SCREENS.length - 1}
                className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                  currentIndex === TOUR_SCREENS.length - 1
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 bg-white hover:bg-emerald-50 hover:border-emerald-300 cursor-pointer shadow-xs'
                }`}
                aria-label="Next tour screen"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[11px] text-slate-400 font-medium mt-2">
              Swipe left or right to explore all 7 screens
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: Side-by-Side Showcase (>=md)                */}
        {/* ======================================================== */}
        <div className="hidden md:block bg-[#F8FAF9] border border-slate-200/90 rounded-[2.8rem] p-10 lg:p-14 shadow-sm relative overflow-hidden">
          {/* Subtle green ambient lighting */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Phone Display (5 Cols) */}
            <div className="col-span-5 flex justify-center relative">
              {/* Floating Pulse Marker Tag */}
              <div className="absolute -top-3 left-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 px-3 py-1 rounded-full shadow-md flex items-center gap-2 text-[11px] font-extrabold text-slate-800">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>Active Screen Preview</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PhoneFrame
                    src={current.screenshot}
                    alt={current.title}
                    frameClassName="w-[260px] lg:w-[290px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Details (7 Cols) */}
            <div className="col-span-7 text-left flex flex-col gap-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-3 py-0.5 rounded-full w-fit">
                    {current.badge}
                  </span>

                  <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-1">
                    {current.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium leading-relaxed">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-2xl flex items-center gap-2 shadow-md shadow-emerald-700/20 transition-all text-sm cursor-pointer"
                    >
                      <span>Install App From Google Play</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
