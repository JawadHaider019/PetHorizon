import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import {
  PetType,
  DogBreedSize,
  calculatePetAge,
  useAnimatedNumber
} from './age/ageCalculatorData';
import AgeEducationalGuides from './age/AgeEducationalGuides';
import AgePhonePreview from './age/AgePhonePreview';
import AgeMatrixTable from './age/AgeMatrixTable';
import AgeFaqSection from './age/AgeFaqSection';

interface PetAgeCalculatorProps {
  onNavigateHome: () => void;
  onOpenQrModal: () => void;
}

export default function PetAgeCalculator({
  onNavigateHome,
  onOpenQrModal
}: PetAgeCalculatorProps) {
  const [petType, setPetType] = useState<PetType>('dog');
  const [dogSize, setDogSize] = useState<DogBreedSize>('medium');
  const [years, setYears] = useState<number>(3);
  const [months, setMonths] = useState<number>(0);
  const [petName, setPetName] = useState<string>('Luna');
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePetTypeChange = (type: PetType) => {
    setPetType(type);
    if (type === 'dog') {
      if (petName === 'Mochi' || !petName) setPetName('Luna');
    } else {
      if (petName === 'Luna' || !petName) setPetName('Mochi');
    }
  };

  const { humanAge, stageDetails } = useMemo(
    () => calculatePetAge(petType, dogSize, years, months),
    [petType, dogSize, years, months]
  );

  const animatedHumanAge = useAnimatedNumber(humanAge);

  const handleConfettiSync = () => {
    try {
      confetti({
        particleCount: 50,
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

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-16 sm:pt-20 pb-20 relative overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-800">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-emerald-200/30 via-teal-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors py-1 px-3 rounded-full hover:bg-black/[0.04] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Pet Horizon Home</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile-Only Header */}
        <div className="lg:hidden text-center max-w-xl mx-auto mb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.06] border border-emerald-800/15">
            <Calendar className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>AAHA Veterinary Standards</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight leading-tight">
            Pet Age in Human Years Calculator
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            Convert calendar age to biological human years. Adjust breed size and age below to view health milestones.
          </p>
        </div>

        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <AgeEducationalGuides onOpenQrModal={onOpenQrModal} />
          <AgePhonePreview
            petType={petType}
            onPetTypeChange={handlePetTypeChange}
            dogSize={dogSize}
            setDogSize={setDogSize}
            petName={petName}
            setPetName={setPetName}
            displayName={displayName}
            years={years}
            setYears={setYears}
            months={months}
            setMonths={setMonths}
            humanAge={humanAge}
            animatedHumanAge={animatedHumanAge}
            stageDetails={stageDetails}
            hasCelebrated={hasCelebrated}
            onSync={handleConfettiSync}
          />
        </div>

        {/* AAHA Comparative Conversion Matrix */}
        <AgeMatrixTable />

        {/* Veterinary Science Explained FAQ */}
        <AgeFaqSection />
      </div>
    </div>
  );
}
