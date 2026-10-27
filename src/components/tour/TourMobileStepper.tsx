import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOUR_SCREENS, ScreenTab } from '../../data/tourData';

interface TourMobileStepperProps {
  current: ScreenTab;
  currentIndex: number;
  selectedScreen: string;
  tabsRef: React.RefObject<HTMLDivElement | null>;
  onScrollToIndex: (index: number) => void;
}

export default function TourMobileStepper({
  current,
  currentIndex,
  selectedScreen,
  tabsRef,
  onScrollToIndex
}: TourMobileStepperProps) {
  return (
    <div className="sm:hidden mb-4">
      {/* Top Quick-Stepper Header */}
      <div className="flex items-center justify-between bg-[#F5F6F8] border border-slate-200/90 rounded-2xl p-2 mb-2 shadow-2xs">
        <button
          onClick={() => onScrollToIndex(currentIndex - 1)}
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
          <span className="text-xs font-black text-slate-900 whitespace-nowrap">
            {current.name}
          </span>
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
            {currentIndex + 1}/7
          </span>
        </div>

        <button
          onClick={() => onScrollToIndex(currentIndex + 1)}
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
      <div ref={tabsRef} className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 px-0.5">
        {TOUR_SCREENS.map((sc, idx) => {
          const Icon = sc.icon;
          const isSelected = selectedScreen === sc.id;
          return (
            <button
              key={sc.id}
              data-tab-id={sc.id}
              onClick={() => onScrollToIndex(idx)}
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
  );
}
