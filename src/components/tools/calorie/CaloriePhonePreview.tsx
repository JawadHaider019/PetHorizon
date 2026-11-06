import { Wifi, BatteryMedium, Minus, Plus, CheckCircle2, HeartPulse, Scale } from 'lucide-react';
import {
  PetType,
  WeightUnit,
  LifeStage,
  CalorieCalculations
} from './calorieCalculatorData';
import CalorieMetricsDisplay from './CalorieMetricsDisplay';

interface CaloriePhonePreviewProps {
  petType: PetType;
  onPetTypeChange: (type: PetType) => void;
  petName: string;
  setPetName: (name: string) => void;
  displayName: string;
  weight: number;
  setWeight: (w: number) => void;
  adjustWeight: (delta: number) => void;
  unit: WeightUnit;
  setUnit: (unit: WeightUnit) => void;
  selectedStageId: string;
  setSelectedStageId: (id: string) => void;
  currentStages: LifeStage[];
  currentStage: LifeStage;
  mealsPerDay: number;
  setMealsPerDay: (n: number) => void;
  calculations: CalorieCalculations;
  animatedMer: number;
  animatedGrams: number;
  animatedWater: number;
  hasCelebrated: boolean;
  onSync: () => void;
  gramsPerCup: number;
  setGramsPerCup: (g: number) => void;
}

export default function CaloriePhonePreview({
  petType,
  onPetTypeChange,
  petName,
  setPetName,
  displayName,
  weight,
  setWeight,
  adjustWeight,
  unit,
  setUnit,
  selectedStageId,
  setSelectedStageId,
  currentStages,
  currentStage,
  mealsPerDay,
  setMealsPerDay,
  calculations,
  animatedMer,
  animatedGrams,
  animatedWater,
  hasCelebrated,
  onSync,
  gramsPerCup,
  setGramsPerCup
}: CaloriePhonePreviewProps) {
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

        {/* Inner Phone Screen */}
        <div className="w-full bg-[#FAF8F5] rounded-[2.3rem] sm:rounded-[2.7rem] overflow-hidden flex flex-col border border-white/5 shadow-inner">
          {/* Top Status Bar */}
          <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-800 tracking-tight">
            <span>09:41</span>
            <div className="w-20 h-4 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1.5 text-slate-700">
              <Wifi className="w-3 h-3" />
              <BatteryMedium className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Interactive Calculator Body */}
          <div className="p-3.5 space-y-2.5 max-h-[580px] overflow-y-auto no-scrollbar">
            {/* Species Selector Tabs */}
            <div className="grid grid-cols-2 gap-1 p-1 bg-slate-200/70 rounded-xl">
              <button
                type="button"
                onClick={() => onPetTypeChange('dog')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  petType === 'dog'
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dog Routine
              </button>
              <button
                type="button"
                onClick={() => onPetTypeChange('cat')}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  petType === 'cat'
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cat Routine
              </button>
            </div>

            {/* Daily Calorie Target Display */}
            <CalorieMetricsDisplay
              displayName={displayName}
              calculations={calculations}
              animatedMer={animatedMer}
              animatedGrams={animatedGrams}
              animatedWater={animatedWater}
            />

            {/* Weight Stepper & Slider */}
            <div className="bg-white p-3 rounded-2xl border border-black/[0.06] shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="Pet Name"
                  className="text-xs font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-600 focus:outline-none transition-colors w-24 px-1"
                />

                <div className="inline-flex rounded-md border border-slate-200 p-0.5 bg-slate-100 text-[9px] font-bold">
                  <button
                    type="button"
                    onClick={() => setUnit('kg')}
                    className={`px-1.5 py-0.5 rounded transition-all ${
                      unit === 'kg' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    KG
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('lbs')}
                    className={`px-1.5 py-0.5 rounded transition-all ${
                      unit === 'lbs' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    LBS
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-0.5">
                <button
                  type="button"
                  onClick={() => adjustWeight(-0.5)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold transition-all active:scale-95"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-2xl font-black text-slate-900">{weight}</span>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">{unit}</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium block">
                    ≈ {unit === 'kg' ? (weight * 2.20462).toFixed(1) + ' lbs' : (weight * 0.453592).toFixed(1) + ' kg'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => adjustWeight(0.5)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold transition-all active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <input
                type="range"
                min={1}
                max={petType === 'dog' ? 60 : 15}
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            {/* Life Stage Grid */}
            <div className="bg-white p-3 rounded-2xl border border-black/[0.06] shadow-xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-700">Stage / Activity</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {currentStage.multiplier}x RER
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {currentStages.map((stage) => {
                  const isSelected = stage.id === selectedStageId;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setSelectedStageId(stage.id)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 text-[10px]'
                      }`}
                    >
                      <span className="text-[10px] font-bold block leading-tight">{stage.shortLabel}</span>
                      <span className="text-[9px] text-slate-400 font-normal block mt-0.5">
                        {stage.multiplier}x basal
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Kibble Density & Meals Row */}
            <div className="grid grid-cols-2 gap-2">
              {/* Kibble Density Input */}
              <div className="bg-white p-2.5 rounded-2xl border border-black/[0.06] shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-800 block">Density (g/cup)</span>
                  <Scale className="w-3 h-3 text-slate-400" />
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <input
                    type="number"
                    min={60}
                    max={160}
                    value={gramsPerCup}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setGramsPerCup(isNaN(val) ? 105 : val);
                    }}
                    className="w-12 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 focus:border-emerald-600 focus:outline-none"
                  />
                  <span className="text-[9px] text-slate-500 font-medium">default 105g</span>
                </div>
              </div>

              {/* Meal Frequency */}
              <div className="bg-white p-2.5 rounded-2xl border border-black/[0.06] shadow-xs">
                <span className="text-[10px] font-bold text-slate-800 block">Daily Meals</span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 gap-1 mt-1">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setMealsPerDay(num)}
                      className={`w-6 h-5 rounded text-[10px] font-bold transition-all ${
                        mealsPerDay === num
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sync Button */}
            <button
              type="button"
              onClick={onSync}
              className="w-full py-2.5 px-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm cursor-pointer"
            >
              {hasCelebrated ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Routine Saved &amp; Sync Ready!</span>
                </>
              ) : (
                <>
                  <HeartPulse className="w-3.5 h-3.5 text-white" />
                  <span>Save {displayName}&apos;s Feeding Routine</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Bottom Notch */}
          <div className="p-2 border-t border-black/[0.05] bg-white flex items-center justify-around text-slate-400">
            <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
