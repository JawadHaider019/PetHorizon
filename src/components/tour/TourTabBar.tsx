import { TOUR_SCREENS } from '../../data/tourData';

interface TourTabBarProps {
  selectedScreen: string;
  onSelectScreen: (id: string, index: number) => void;
}

export default function TourTabBar({ selectedScreen, onSelectScreen }: TourTabBarProps) {
  return (
    <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-2 sm:pb-0 mb-6 sm:mb-12 px-1">
      {TOUR_SCREENS.map((sc, idx) => {
        const Icon = sc.icon;
        const isSelected = selectedScreen === sc.id;
        return (
          <button
            key={sc.id}
            onClick={() => onSelectScreen(sc.id, idx)}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
              isSelected
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-102'
                : 'bg-[#F5F6F8] text-slate-600 hover:text-slate-900 hover:bg-emerald-50/60 border border-slate-200/80'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
            <span>{sc.name}</span>
          </button>
        );
      })}
    </div>
  );
}
