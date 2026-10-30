import {
  Wifi,
  BatteryMedium,
  HeartPulse,
  Minus,
  Plus,
  Share2,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import {
  PetType,
  DogBreedSize,
  DOG_SIZES,
  LifeStageDetails
} from './ageCalculatorData';

interface AgePhonePreviewProps {
  petType: PetType;
  onPetTypeChange: (type: PetType) => void;
  dogSize: DogBreedSize;
  setDogSize: (size: DogBreedSize) => void;
  petName: string;
  setPetName: (name: string) => void;
  displayName: string;
  years: number;
  setYears: (fn: (prev: number) => number) => void;
  months: number;
  setMonths: (fn: (prev: number) => number) => void;
  humanAge: number;
  animatedHumanAge: number;
  stageDetails: LifeStageDetails;
  hasCelebrated: boolean;
  onSync: () => void;
}

export default function AgePhonePreview({
  petType,
  onPetTypeChange,
  dogSize,
  setDogSize,
  petName,
  setPetName,
  displayName,
  years,
  setYears,
  months,
  setMonths,
  animatedHumanAge,
  stageDetails,
  hasCelebrated,
  onSync
}: AgePhonePreviewProps) {
  const currentSizeObj = DOG_SIZES.find((s) => s.id === dogSize) || DOG_SIZES[1];

  return (
    <div className="lg:col-span-5 flex justify-center items-start lg:sticky lg:top-24 order-1 lg:order-2">
      {/* Ambient Back Glow */}
      <div className="absolute w-[280px] sm:w-[320px] h-[520px] bg-gradient-to-br from-emerald-500/15 via-teal-400/10 to-amber-300/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Phone Shell */}
      <div className="w-[300px] sm:w-[315px] rounded-[2.8rem] sm:rounded-[3.2rem] p-2.5 bg-[#0F1115] shadow-[0_22px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-slate-800/80 relative select-none transition-all">
        {/* Hardware Buttons */}
        <div className="absolute -left-[3.5px] top-[54px] w-[3.5px] h-[20px] bg-[#2A2E35] rounded-l-sm" />
        <div className="absolute -left-[3.5px] top-[88px] w-[3.5px] h-[36px] bg-[#2A2E35] rounded-l-sm" />
        <div className="absolute -left-[3.5px] top-[134px] w-[3.5px] h-[36px] bg-[#2A2E35] rounded-l-sm" />
        <div className="absolute -right-[3.5px] top-[90px] w-[3.5px] h-[48px] bg-[#2A2E35] rounded-r-sm" />

        {/* Screen */}
        <div className="bg-[#FAF8F5] rounded-[2.3rem] sm:rounded-[2.5rem] overflow-hidden border border-black/[0.08] shadow-inner flex flex-col max-h-[580px] sm:max-h-[620px]">
          {/* Status Bar */}
          <div className="px-5 pt-2.5 pb-1 flex items-center justify-between text-[10px] font-bold text-slate-800 select-none bg-white/70">
            <span>9:41</span>
            <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto" />
            <div className="flex items-center gap-1 text-slate-700">
              <Wifi className="w-2.5 h-2.5" />
              <BatteryMedium className="w-3 h-3" />
            </div>
          </div>

          {/* Header */}
          <div className="px-4 py-2 border-b border-black/[0.05] bg-white/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xs shadow-xs">
                {petType === 'dog' ? '🐶' : '🐱'}
              </div>
              <div>
                <h3 className="text-[11px] font-black text-slate-900 leading-tight">Biological Age Lab</h3>
                <p className="text-[9px] text-slate-500 font-medium">AAHA Life Stage Calculator</p>
              </div>
            </div>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Live Sync
            </span>
          </div>

          {/* Scrollable Form Body */}
          <div className="p-3.5 space-y-3 overflow-y-auto no-scrollbar flex-1">
            {/* Species Selector Tabs */}
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-200/60 rounded-xl">
              <button
                type="button"
                onClick={() => onPetTypeChange('dog')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  petType === 'dog'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🐶</span>
                <span>Dog</span>
              </button>
              <button
                type="button"
                onClick={() => onPetTypeChange('cat')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  petType === 'cat'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🐱</span>
                <span>Cat</span>
              </button>
            </div>

            {/* Pet Name Input */}
            <div className="bg-white rounded-xl p-2.5 border border-black/[0.05] shadow-2xs">
              <label htmlFor="phone-pet-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Companion Name
              </label>
              <input
                id="phone-pet-name"
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder={petType === 'dog' ? 'Luna' : 'Mochi'}
                className="w-full text-xs font-bold text-slate-900 placeholder:text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Dog Breed Size Selector (When Dog Selected) */}
            {petType === 'dog' && (
              <div className="bg-white rounded-xl p-2.5 border border-black/[0.05] shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Breed Adult Size
                  </label>
                  <span className="text-[9px] font-medium text-emerald-800">
                    {currentSizeObj.weightRange}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {DOG_SIZES.map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setDogSize(sz.id)}
                      className={`py-1 px-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer truncate ${
                        dogSize === sz.id
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {sz.label.replace(' Breed', '')}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Age Years & Months Controls */}
            <div className="bg-white rounded-xl p-2.5 border border-black/[0.05] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Calendar Age
                </label>
                <span className="text-xs font-black text-slate-900 font-mono">
                  {years}y {months}m
                </span>
              </div>

              {/* Years Stepper */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-slate-600">Years:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setYears((prev) => Math.max(0, prev - 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold cursor-pointer transition-colors active:scale-95"
                    aria-label="Decrease years"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-7 text-center font-black text-xs text-slate-900 font-mono">
                    {years}
                  </span>
                  <button
                    type="button"
                    onClick={() => setYears((prev) => Math.min(25, prev + 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold cursor-pointer transition-colors active:scale-95"
                    aria-label="Increase years"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <input
                type="range"
                min={0}
                max={20}
                step={1}
                value={years}
                onChange={(e) => setYears(() => Number(e.target.value))}
                className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                aria-label="Adjust pet age in years"
              />

              {/* Months Stepper */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-600">Additional Months:</span>
                <div className="flex items-center gap-1">
                  {[0, 3, 6, 9].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMonths(() => m)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                        months === m
                          ? 'bg-emerald-700 text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      +{m}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-time Heroic Results Card inside Phone Screen */}
            <div className={`p-3 rounded-2xl border ${stageDetails.borderColor} bg-gradient-to-br from-white to-emerald-50/40 shadow-xs space-y-2`}>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                  Human Equivalent
                </span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${stageDetails.badgeColor}`}>
                  {stageDetails.stage}
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-emerald-800 tracking-tight font-mono">
                  {animatedHumanAge}
                </span>
                <span className="text-xs font-bold text-slate-700">Human Years</span>
              </div>

              <p className="text-[10px] text-slate-600 leading-snug">
                {displayName} is in the <strong>{stageDetails.stage}</strong> phase ({stageDetails.description.slice(0, 75)}...).
              </p>

              {/* Expected Life Journey Progress */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[9px] text-slate-500 font-semibold">
                  <span>Life Stage Journey</span>
                  <span>{stageDetails.lifePercentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                    style={{ width: `${stageDetails.lifePercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Sync & Share Action */}
            <button
              type="button"
              onClick={onSync}
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer ${
                hasCelebrated
                  ? 'bg-emerald-800 text-white scale-[0.98]'
                  : 'bg-slate-900 hover:bg-black text-white hover:scale-[1.01]'
              }`}
            >
              {hasCelebrated ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Result Synced! 🎉</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sync {displayName}&apos;s Milestones</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

