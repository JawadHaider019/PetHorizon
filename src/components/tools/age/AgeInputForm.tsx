import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PetType, DogBreedSize, DOG_SIZES } from './ageCalculatorData';

interface AgeInputFormProps {
  petType: PetType;
  setPetType: (type: PetType) => void;
  dogSize: DogBreedSize;
  setDogSize: (size: DogBreedSize) => void;
  petName: string;
  setPetName: (name: string) => void;
  years: number;
  setYears: (years: number) => void;
  months: number;
  setMonths: (months: number) => void;
  onSpeciesChange?: () => void;
}

export default function AgeInputForm({
  petType,
  setPetType,
  dogSize,
  setDogSize,
  petName,
  setPetName,
  years,
  setYears,
  months,
  setMonths,
  onSpeciesChange
}: AgeInputFormProps) {
  return (
    <>
      {/* Step 1: Species Selector */}
      <div className="p-6 sm:p-8 border-b border-slate-100 bg-linear-to-b from-slate-50/70 to-white">
        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
          Step 1: Select Pet Species
        </label>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
          <button
            type="button"
            onClick={() => {
              setPetType('dog');
              onSpeciesChange?.();
            }}
            className={`flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer border ${
              petType === 'dog'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
            }`}
          >
            <span className="text-2xl">🐶</span>
            <span>Dog / Canine</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setPetType('cat');
              onSpeciesChange?.();
            }}
            className={`flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer border ${
              petType === 'cat'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
            }`}
          >
            <span className="text-2xl">🐱</span>
            <span>Cat / Feline</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Optional Pet Name */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Pet Name (Optional for Custom Milestone Card)
            </label>
            <span className="text-[11px] text-slate-500 font-medium">Personalizes your results</span>
          </div>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            placeholder={petType === 'dog' ? 'e.g., Cooper, Bella, Max' : 'e.g., Luna, Oliver, Milo'}
            maxLength={30}
            className="w-full max-w-md px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-slate-800 text-sm font-semibold placeholder:text-slate-400 bg-slate-50/50"
          />
        </div>

        {/* Dog Breed Size Selector */}
        {petType === 'dog' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
              Step 2: Dog Breed Size / Weight Category
            </label>
            <p className="text-xs text-slate-500 mb-3">
              Large and giant dogs age up to twice as fast as small toy breeds in their adult years.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {DOG_SIZES.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setDogSize(size.id)}
                  className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                    dogSize === size.id
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/30'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-extrabold text-slate-900">{size.label}</span>
                    {dogSize === size.id && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <div className="text-[11px] font-bold text-emerald-800 mb-1">{size.weightRange}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{size.examples}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Age Sliders */}
        <div className="border-t border-slate-100 pt-6">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-4">
            Step {petType === 'dog' ? '3' : '2'}: Enter Chronological Age
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-slate-700">Years</span>
                <span className="text-lg font-black text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-lg">
                  {years} {years === 1 ? 'Year' : 'Years'}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={22}
                step={1}
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none my-3"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>0 (Puppy/Kitten)</span>
                <span>10y (Senior)</span>
                <span>22y</span>
              </div>
            </div>

            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-slate-700">Months (Precision)</span>
                <span className="text-lg font-black text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-lg">
                  {months} {months === 1 ? 'Month' : 'Months'}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={11}
                step={1}
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none my-3"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>0m</span>
                <span>6m</span>
                <span>11m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
