import { useState, useMemo } from 'react';
import { ArrowLeft, Calculator } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import {
  PetType,
  WeightUnit,
  DOG_STAGES,
  CAT_STAGES,
  calculatePetCalories,
  useAnimatedNumber
} from './calorie/calorieCalculatorData';
import CalorieEducationalGuides from './calorie/CalorieEducationalGuides';
import CaloriePhonePreview from './calorie/CaloriePhonePreview';
import CalorieFaqSection from './calorie/CalorieFaqSection';

interface PetCalorieCalculatorProps {
  onNavigateHome: () => void;
  onOpenQrModal: () => void;
}

export default function PetCalorieCalculator({
  onNavigateHome,
  onOpenQrModal
}: PetCalorieCalculatorProps) {
  const [petType, setPetType] = useState<PetType>('dog');
  const [petName, setPetName] = useState<string>('Luna');
  const [weight, setWeight] = useState<number>(12);
  const [unit, setUnit] = useState<WeightUnit>('kg');
  const [selectedStageId, setSelectedStageId] = useState<string>('adult_neutered');
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);

  const handlePetTypeChange = (type: PetType) => {
    setPetType(type);
    if (type === 'dog') {
      setSelectedStageId('adult_neutered');
      if (unit === 'kg' && weight < 5) setWeight(14);
      if (petName === 'Mochi' || !petName) setPetName('Luna');
    } else {
      setSelectedStageId('cat_adult_neutered');
      if (unit === 'kg' && weight > 9) setWeight(4.5);
      if (petName === 'Luna' || !petName) setPetName('Mochi');
    }
  };

  const currentStages = petType === 'dog' ? DOG_STAGES : CAT_STAGES;
  const currentStage = currentStages.find((s) => s.id === selectedStageId) || currentStages[0];

  const calculations = useMemo(
    () => calculatePetCalories(weight, unit, currentStage, mealsPerDay),
    [weight, unit, currentStage, mealsPerDay]
  );

  const animatedMer = useAnimatedNumber(calculations.mer);
  const animatedGrams = useAnimatedNumber(calculations.gramsPerMeal);
  const animatedWater = useAnimatedNumber(calculations.dailyWaterMl);

  const handleConfettiSync = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#047857', '#10b981', '#34d399', '#f59e0b']
      });
    } catch {
      // safe fallback
    }
    setHasCelebrated(true);
    setTimeout(() => setHasCelebrated(false), 2400);
  };

  const displayName = petName.trim() ? petName.trim() : petType === 'dog' ? 'Your Dog' : 'Your Cat';

  const adjustWeight = (delta: number) => {
    setWeight((prev) => Math.max(0.5, Math.round((prev + delta) * 10) / 10));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-16 sm:pt-20 pb-20 relative overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-emerald-200/30 via-teal-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors py-1 px-3 rounded-full hover:bg-black/[0.04]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Pet Horizon Home</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile-Only Header */}
        <div className="lg:hidden text-center max-w-xl mx-auto mb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.06] border border-emerald-800/15">
            <Calculator className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>WSAVA Veterinary Standards</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight leading-tight">
            Pet Calorie &amp; Portion Calculator
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            Calculate resting (RER) and maintenance (MER) calories. Adjust weight below to see exact grams per meal.
          </p>
        </div>

        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <CalorieEducationalGuides onOpenQrModal={onOpenQrModal} />
          <CaloriePhonePreview
            petType={petType}
            onPetTypeChange={handlePetTypeChange}
            petName={petName}
            setPetName={setPetName}
            displayName={displayName}
            weight={weight}
            setWeight={setWeight}
            adjustWeight={adjustWeight}
            unit={unit}
            setUnit={setUnit}
            selectedStageId={selectedStageId}
            setSelectedStageId={setSelectedStageId}
            currentStages={currentStages}
            currentStage={currentStage}
            mealsPerDay={mealsPerDay}
            setMealsPerDay={setMealsPerDay}
            calculations={calculations}
            animatedMer={animatedMer}
            animatedGrams={animatedGrams}
            animatedWater={animatedWater}
            hasCelebrated={hasCelebrated}
            onSync={handleConfettiSync}
          />
        </div>

        {/* Veterinary Science Explained FAQ */}
        <CalorieFaqSection />
      </div>
    </div>
  );
}
