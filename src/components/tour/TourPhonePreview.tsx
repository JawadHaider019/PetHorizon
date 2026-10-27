import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';
import { ScreenTab, TOUR_SCREENS } from '../../data/tourData';
import { PLAY_STORE_URL } from '../../config/siteConfig';

interface TourPhonePreviewProps {
  current: ScreenTab;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function TourPhonePreview({
  current,
  currentIndex,
  onSelectIndex,
  onNext,
  onPrev
}: TourPhonePreviewProps) {
  // Compute cyclic offset between -3 and 3
  const getOffset = (idx: number) => {
    let diff = idx - currentIndex;
    const len = TOUR_SCREENS.length;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  // Card transform variants based on relative distance from center
  const getCardStyle = (diff: number) => {
    if (diff === 0) {
      return {
        x: '0%',
        scale: 1,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        cursor: 'default',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === -1) {
      return {
        x: '-78%',
        scale: 0.88,
        zIndex: 20,
        opacity: 0.8,
        filter: 'brightness(0.92)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === 1) {
      return {
        x: '78%',
        scale: 0.88,
        zIndex: 20,
        opacity: 0.8,
        filter: 'brightness(0.92)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === -2) {
      return {
        x: '-148%',
        scale: 0.76,
        zIndex: 10,
        opacity: 0.5,
        filter: 'brightness(0.85)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === 2) {
      return {
        x: '148%',
        scale: 0.76,
        zIndex: 10,
        opacity: 0.5,
        filter: 'brightness(0.85)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    return {
      x: diff > 0 ? '200%' : '-200%',
      scale: 0.6,
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.75)',
      cursor: 'default',
      pointerEvents: 'none' as const
    };
  };

  return (
    <div className="bg-gradient-to-b from-[#FAF7F2]/80 via-[#F6F4EE]/90 to-[#EDF2EE] border border-slate-200/90 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
      {/* Ambient background soft light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* 3D Multi-Device Fan Showcase Stage */}
      <motion.div
        className="relative h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center w-full overflow-hidden select-none"
        onPanEnd={(_e, info: PanInfo) => {
          if (info.offset.x < -45) onNext();
          if (info.offset.x > 45) onPrev();
        }}
      >
        {TOUR_SCREENS.map((screen, idx) => {
          const diff = getOffset(idx);
          const isCurrent = diff === 0;
          const isOuterMobileHidden = Math.abs(diff) === 2;

          return (
            <motion.div
              key={screen.id}
              initial={false}
              animate={getCardStyle(diff)}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 26,
                mass: 0.8
              }}
              onClick={() => {
                if (!isCurrent) onSelectIndex(idx);
              }}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isOuterMobileHidden ? 'hidden sm:block' : ''
              }`}
              style={{
                transformOrigin: 'center center'
              }}
              title={!isCurrent ? `Click to view ${screen.name}` : undefined}
            >
              <div className="relative group">
                <PhoneFrame
                  src={screen.screenshot}
                  alt={`Pet Horizon ${screen.name} Screen`}
                  frameClassName="w-[220px] sm:w-[260px] lg:w-[285px]"
                  priority={Math.abs(diff) <= 1}
                />

                {/* Interactive Dim Overlay for flanking non-active devices */}
                {!isCurrent && (
                  <div className="absolute inset-0 rounded-[2.8rem] sm:rounded-[3.2rem] bg-slate-900/15 group-hover:bg-transparent transition-colors z-30 cursor-pointer" />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Controls Bar (Previous, Progress Dots, Next) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-2 mb-6 sm:mb-8 relative z-20">
        <div className="flex items-center gap-3">
          {/* Previous Screen Button */}
          <button
            onClick={onPrev}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/90 shadow-xs hover:shadow-sm transition-all font-bold text-xs sm:text-sm active:scale-95 cursor-pointer"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-full border border-slate-200/90 shadow-2xs">
            {TOUR_SCREENS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => onSelectIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentIndex
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-emerald-600'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to ${s.name}`}
              />
            ))}
          </div>

          {/* Next Screen Button */}
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-700/25 hover:shadow-lg hover:shadow-emerald-700/30 transition-all font-bold text-xs sm:text-sm active:scale-95 cursor-pointer"
            aria-label="Next screen"
          >
            <span>Next Screen</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Spotlight Feature Details Card */}
      <div className="max-w-3xl mx-auto relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xs"
          >
            {/* Header: Badge & Screen Index */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{current.badge}</span>
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Screen {currentIndex + 1} of {TOUR_SCREENS.length}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {current.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 font-normal">
              {current.description}
            </p>

            {/* Key Capabilities Grid */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Key In-App Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-5 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-400 text-center sm:text-left">
                Click any phone screen or use Next / Previous to explore
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Experience on Android</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
