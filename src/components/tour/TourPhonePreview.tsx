import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';
import { ScreenTab, TOUR_SCREENS } from '../../data/tourData';

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

  // Card transform variants based on relative distance from center (all visible cards are solid 100% opaque)
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
        opacity: 1,
        filter: 'brightness(0.97)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === 1) {
      return {
        x: '78%',
        scale: 0.88,
        zIndex: 20,
        opacity: 1,
        filter: 'brightness(0.97)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === -2) {
      return {
        x: '-148%',
        scale: 0.76,
        zIndex: 10,
        opacity: 1,
        filter: 'brightness(0.94)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    if (diff === 2) {
      return {
        x: '148%',
        scale: 0.76,
        zIndex: 10,
        opacity: 1,
        filter: 'brightness(0.94)',
        cursor: 'pointer',
        pointerEvents: 'auto' as const
      };
    }
    return {
      x: diff > 0 ? '200%' : '-200%',
      scale: 0.6,
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.9)',
      cursor: 'default',
      pointerEvents: 'none' as const
    };
  };

  const CurrentIcon = current.icon;

  return (
    <div className="bg-gradient-to-b from-[#FAF7F2]/80 via-[#F6F4EE]/90 to-[#EDF2EE] border border-slate-200/90 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
      {/* Ambient background soft light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Active Screen Badge Centered Directly Above the Center Phone */}
      <div className="flex items-center justify-center pt-1 pb-3 relative z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-slate-900 text-xs sm:text-sm font-black tracking-tight"
          >
            <CurrentIcon className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{current.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {currentIndex + 1}/{TOUR_SCREENS.length}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3D Multi-Device Fan Showcase Stage */}
      <motion.div
        className="relative h-[490px] sm:h-[570px] lg:h-[630px] flex items-center justify-center w-full overflow-hidden select-none"
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
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Short & Clean Screen Summary (No Heavy Box Card) */}
      <div className="max-w-2xl mx-auto text-center px-4 mt-2 pb-2 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="space-y-2.5"
          >
            {/* Screen Title */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {current.title}
            </h3>

            {/* Concise 1-sentence description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              {current.description}
            </p>

            {/* Compact inline capability chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1.5">
              {current.highlights.slice(0, 3).map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-emerald-900 text-[11px] sm:text-xs font-semibold border border-emerald-200/60 shadow-2xs"
                >
                  <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
