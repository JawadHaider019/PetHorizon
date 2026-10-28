import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  Utensils, 
  Droplets, 
  Flame, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  RotateCcw, 
  Download, 
  QrCode,
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { fadeInUp, staggerCard } from '../../config/animationVariants';

type PetType = 'dog' | 'cat';
type WeightUnit = 'kg' | 'lbs';

interface LifeStage {
  id: string;
  label: string;
  description: string;
  multiplier: number;
}

const DOG_STAGES: LifeStage[] = [
  { id: 'adult_neutered', label: 'Adult (Neutered / Spayed)', description: 'Average indoor activity, healthy body condition', multiplier: 1.6 },
  { id: 'adult_intact', label: 'Adult (Intact)', description: 'Higher basal metabolic energy requirement', multiplier: 1.8 },
  { id: 'inactive_weight_loss', label: 'Weight Loss / Low Activity', description: 'Restricted energy for weight reduction or senior calm', multiplier: 1.0 },
  { id: 'active_working', label: 'High Activity / Working / Agile', description: 'Daily agility, long runs, working breeds', multiplier: 2.2 },
  { id: 'puppy_under_4m', label: 'Young Puppy (< 4 Months)', description: 'Rapid growth and bone development stage', multiplier: 3.0 },
  { id: 'puppy_over_4m', label: 'Older Puppy (4+ Months)', description: 'Sustained adolescent growth', multiplier: 2.0 },
  { id: 'senior_dog', label: 'Senior Dog (7+ Years)', description: 'Reduced activity, joint-care lifestyle', multiplier: 1.2 }
];

const CAT_STAGES: LifeStage[] = [
  { id: 'cat_adult_neutered', label: 'Adult (Neutered / Indoor)', description: 'Standard indoor domestic companion', multiplier: 1.2 },
  { id: 'cat_adult_intact', label: 'Adult (Intact)', description: 'Intact feline maintenance profile', multiplier: 1.4 },
  { id: 'cat_weight_loss', label: 'Weight Management / Inactive', description: 'Safe controlled weight reduction for indoor cats', multiplier: 0.9 },
  { id: 'cat_active_outdoor', label: 'Active / Outdoor Access', description: 'Regular hunting, territory roaming, climbing', multiplier: 1.6 },
  { id: 'kitten', label: 'Kitten (< 1 Year)', description: 'High-protein growth phase for young kittens', multiplier: 2.5 },
  { id: 'cat_senior', label: 'Senior Cat (10+ Years)', description: 'Gentle routine with metabolic monitoring', multiplier: 1.1 }
];

interface PetCalorieCalculatorProps {
  onNavigateHome: () => void;
  onOpenQrModal: () => void;
}

export default function PetCalorieCalculator({ onNavigateHome, onOpenQrModal }: PetCalorieCalculatorProps) {
  const [petType, setPetType] = useState<PetType>('dog');
  const [petName, setPetName] = useState<string>('');
  const [weight, setWeight] = useState<number>(12);
  const [unit, setUnit] = useState<WeightUnit>('kg');
  const [selectedStageId, setSelectedStageId] = useState<string>('adult_neutered');
  const [foodKcalPerCup, setFoodKcalPerCup] = useState<number>(375);
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Switch default stage when changing pet type
  const handlePetTypeChange = (type: PetType) => {
    setPetType(type);
    if (type === 'dog') {
      setSelectedStageId('adult_neutered');
      if (unit === 'kg' && weight === 4) setWeight(12);
    } else {
      setSelectedStageId('cat_adult_neutered');
      if (unit === 'kg' && weight === 12) setWeight(4.5);
    }
  };

  const currentStages = petType === 'dog' ? DOG_STAGES : CAT_STAGES;
  const currentStage = currentStages.find((s) => s.id === selectedStageId) || currentStages[0];

  // Mathematical Calculation according to WSAVA Global Guidelines
  // RER = 70 * (body weight in kg) ^ 0.75
  const calculations = useMemo(() => {
    const weightInKg = unit === 'kg' ? Math.max(0.2, weight) : Math.max(0.2, weight * 0.453592);
    
    // RER (Resting Energy Requirement)
    const rer = Math.round(70 * Math.pow(weightInKg, 0.75));
    
    // MER (Maintenance Energy Requirement)
    const mer = Math.round(rer * currentStage.multiplier);

    // Food portions
    // Dry kibble average is ~375 kcal / cup (approx 100-110 grams per cup, ~3.6 kcal/gram)
    const kcalPerGram = (foodKcalPerCup / 105);
    const dailyGrams = Math.round(mer / kcalPerGram);
    const dailyCups = (mer / foodKcalPerCup).toFixed(2);
    
    // Per meal portions
    const gramsPerMeal = Math.round(dailyGrams / mealsPerDay);
    const cupsPerMeal = (parseFloat(dailyCups) / mealsPerDay).toFixed(2);

    // Estimated daily hydration target (~55ml per kg)
    const dailyWaterMl = Math.round(weightInKg * 55);

    return {
      weightInKg,
      rer,
      mer,
      dailyGrams,
      dailyCups,
      gramsPerMeal,
      cupsPerMeal,
      dailyWaterMl
    };
  }, [weight, unit, currentStage, foodKcalPerCup, mealsPerDay]);

  const displayName = petName.trim() ? petName.trim() : petType === 'dog' ? 'Your Dog' : 'Your Cat';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      {/* Top Breadcrumb & Return Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors py-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Pet Horizon Home</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Hero Header */}
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 mb-4">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            Veterinary Nutritional Tool • WSAVA Standards
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
            Pet Calorie & Daily Portion Calculator
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg mt-3 font-normal leading-relaxed">
            Calculate your companion's exact daily caloric target (RER/MER) and precise feeding portions in grams and cups to prevent malnutrition or accidental obesity.
          </p>
        </motion.div>

        {/* Main Grid: Calculator Inputs (Left) & Results Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Inputs (7 Cols) */}
          <motion.div 
            {...staggerCard(0, 'left', 0.1)} 
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-sm space-y-6"
          >
            {/* Step 1: Species Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                1. Select Companion Species
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handlePetTypeChange('dog')}
                  className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border-2 font-bold text-sm transition-all ${
                    petType === 'dog'
                      ? 'border-emerald-600 bg-emerald-50/60 text-emerald-950 shadow-xs'
                      : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xl">🐶</span>
                  <span>Canine / Dog</span>
                </button>

                <button
                  type="button"
                  onClick={() => handlePetTypeChange('cat')}
                  className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border-2 font-bold text-sm transition-all ${
                    petType === 'cat'
                      ? 'border-emerald-600 bg-emerald-50/60 text-emerald-950 shadow-xs'
                      : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xl">🐱</span>
                  <span>Feline / Cat</span>
                </button>
              </div>
            </div>

            {/* Step 2: Name & Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Pet Name <span className="font-normal text-slate-400 lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder={petType === 'dog' ? 'e.g. Luna' : 'e.g. Oliver'}
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Current Weight
                  </label>
                  {/* Unit Toggle */}
                  <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100/70 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setUnit('kg')}
                      className={`px-2 py-0.5 rounded-md transition-all ${
                        unit === 'kg' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      KG
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit('lbs')}
                      className={`px-2 py-0.5 rounded-md transition-all ${
                        unit === 'lbs' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      LBS
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0.2"
                    max="120"
                    value={weight || ''}
                    onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all pr-12"
                  />
                  <span className="absolute right-3.5 top-3 text-xs font-bold text-slate-400 uppercase">
                    {unit}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3: Life Stage & Activity Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                2. Life Stage & Activity Level
              </label>
              <div className="space-y-2">
                {currentStages.map((stage) => {
                  const isSelected = stage.id === selectedStageId;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => setSelectedStageId(stage.id)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-600/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="mt-0.5">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-600'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${isSelected ? 'text-emerald-950' : 'text-slate-800'}`}>
                            {stage.label}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {stage.multiplier}x RER
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Daily Meal Frequency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Daily Meal Frequency
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setMealsPerDay(num)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      mealsPerDay === num
                        ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {num} {num === 1 ? 'Meal/Day' : 'Meals/Day'}
                    {num === 2 && <span className="block text-[10px] font-normal opacity-85">Recommended</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Food Energy Settings (Collapsible) */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-700 transition-colors py-1"
              >
                <span>{showAdvanced ? '− Hide' : '+ Customize'} Food Caloric Density (kcal/cup)</span>
              </button>

              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3 space-y-3"
                  >
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Kibble Calorie Density (kcal per cup)
                      </label>
                      <p className="text-[11px] text-slate-500 mb-2">
                        Look at the back of your food bag for "Metabolizable Energy (ME)". Typical dry kibble ranges between 350 to 400 kcal/cup.
                      </p>
                      <input
                        type="number"
                        min="200"
                        max="600"
                        value={foodKcalPerCup}
                        onChange={(e) => setFoodKcalPerCup(parseInt(e.target.value) || 375)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-bold focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Calculated Results & Funnel Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              {...staggerCard(1, 'right', 0.1)}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-600/30 shadow-xl shadow-emerald-950/5 relative overflow-hidden"
            >
              {/* Highlight badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Recommended Daily Plan
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900">
                  {displayName}
                </span>
              </div>

              {/* Primary Metric: Total Daily Calories */}
              <div className="my-6 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Total Daily Caloric Target
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#17191C] tracking-tight">
                    {calculations.mer}
                  </span>
                  <span className="text-base font-bold text-emerald-700">kcal / day</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Includes {calculations.rer} kcal basal resting energy + {currentStage.label.toLowerCase()} activity
                </p>
              </div>

              {/* Portion Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.05] text-center">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-2">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                    Daily Portion
                  </span>
                  <span className="text-xl font-black text-slate-900 block mt-0.5">
                    {calculations.dailyGrams} <span className="text-xs font-bold text-slate-500">g</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 block">
                    ≈ {calculations.dailyCups} cups total
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.05] text-center">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2">
                    <Flame className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                    Per Meal ({mealsPerDay}x/day)
                  </span>
                  <span className="text-xl font-black text-slate-900 block mt-0.5">
                    {calculations.gramsPerMeal} <span className="text-xs font-bold text-slate-500">g</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 block">
                    ≈ {calculations.cupsPerMeal} cups / meal
                  </span>
                </div>
              </div>

              {/* Hydration Guideline Bar */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-center gap-3 mb-6">
                <Droplets className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-blue-950">Daily Fresh Water Goal: </span>
                  <span className="font-semibold text-blue-800">~{calculations.dailyWaterMl} ml/day</span>
                  <p className="text-[11px] text-blue-700 font-normal">
                    Keep clean water refreshed near their feeding bowl.
                  </p>
                </div>
              </div>

              {/* App Bridge / Conversion Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold tracking-wide uppercase text-emerald-300">
                    Pet Horizon Family Routine
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  Prevent accidental double-feeding with Anti-Collision Care Locks
                </h4>
                <p className="text-xs text-emerald-100/80 mt-1.5 leading-relaxed font-normal">
                  Log {displayName}'s {calculations.gramsPerMeal}g meals and share synchronized timestamps with family members in real-time.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Get on Google Play</span>
                  </a>

                  <button
                    type="button"
                    onClick={onOpenQrModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all border border-white/15"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>QR Code</span>
                  </button>
                </div>
              </div>

              {/* Veterinary Disclaimer */}
              <p className="text-[11px] text-slate-400 text-center mt-4 leading-relaxed">
                *WSAVA guidelines provide clinical benchmarks. Adjust for metabolic changes, medical conditions, or post-operative advice from your licensed veterinarian.
              </p>
            </motion.div>

            {/* Quick Educational Fact Box */}
            <div className="p-5 bg-white rounded-2xl border border-black/[0.06] text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Why Weight (Grams) Beats Measuring Cups</span>
              </div>
              <p className="leading-relaxed">
                Measuring cups vary by up to 25% depending on how tightly kibble settles. Using a kitchen scale with grams ensures your pet maintains their target body condition score without gradual weight creep.
              </p>
            </div>
          </div>
        </div>

        {/* Extended Educational FAQ Section for Search Engines & Readers */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight">
              Frequently Asked Pet Calorie Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2">
              Learn the science behind RER, portion adjustments, and multi-pet management.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                What is RER and how is it calculated?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Resting Energy Requirement (RER) is the basal energy consumed by an animal at rest in a thermo-neutral environment. The World Small Animal Veterinary Association (WSAVA) standard equation is: <strong>RER = 70 × (Body Weight in kg)<sup>0.75</sup></strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                How often should I recalculate my pet's daily portions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                For growing puppies and kittens, adjust weight and recalculate every 2 to 4 weeks. For adult companions, check weight monthly. You can record daily weight checks in Pet Horizon to track visual body condition trends.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                How should treats be counted toward total daily calories?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Veterinary nutritionists recommend that training treats and chews make up no more than <strong>10% of total daily calories</strong>. The remaining 90% must come from a complete and balanced nutritional diet.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
