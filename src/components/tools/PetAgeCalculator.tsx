import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import { PetType, DogBreedSize, calculatePetAge } from './age/ageCalculatorData';
import AgeInputForm from './age/AgeInputForm';
import AgeResultCard from './age/AgeResultCard';
import AgeMatrixAndFaq from './age/AgeMatrixAndFaq';

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
  const [petName, setPetName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { humanAge, stageDetails } = useMemo(
    () => calculatePetAge(petType, dogSize, years, months),
    [petType, dogSize, years, months]
  );

  const triggerConfetti = () => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // safe fallback
    }
  };

  const handleShareResult = async () => {
    const displayName = petName.trim() || (petType === 'dog' ? 'My Dog' : 'My Cat');
    const shareText = `🐾 ${displayName} is ${years} yr${years !== 1 ? 's' : ''} ${months > 0 ? `${months} mo ` : ''}old (${stageDetails.stage}) = ${humanAge} Human Years!\nCalculated with the free AAHA-standard PetHorizon Pet Age Calculator: https://pethorizon.jawumitech.com/tools/pet-age-calculator`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${displayName}'s Human Age Result`,
          text: shareText,
          url: 'https://pethorizon.jawumitech.com/tools/pet-age-calculator'
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 sm:pt-32 pb-20 text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-900">
      {/* Header & Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 px-3.5 py-1.5 rounded-full transition-all cursor-pointer mb-6 border border-emerald-200/60 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to PetHorizon Home</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3 tracking-wide uppercase">
          <span>Free Veterinary Tools</span>
          <span>•</span>
          <span className="text-emerald-800">AAHA Guidelines</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          [AAHA Chart] Pet Age Calculator in Human Years
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Convert your dog or cat’s age into exact human years using the official veterinary life stage guidelines. Accounts for breed weight scaling, biological maturation curves, and preventative health milestones.
        </p>
      </div>

      {/* Main Interactive Calculator Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden mb-12">
          <AgeInputForm
            petType={petType}
            setPetType={setPetType}
            dogSize={dogSize}
            setDogSize={setDogSize}
            petName={petName}
            setPetName={setPetName}
            years={years}
            setYears={setYears}
            months={months}
            setMonths={setMonths}
            onSpeciesChange={triggerConfetti}
          />

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <AgeResultCard
              petType={petType}
              dogSize={dogSize}
              petName={petName}
              humanAge={humanAge}
              stageDetails={stageDetails}
              copied={copied}
              onOpenQrModal={onOpenQrModal}
              onShareResult={handleShareResult}
            />
          </div>
        </div>

        {/* Matrix & FAQs */}
        <AgeMatrixAndFaq onOpenQrModal={onOpenQrModal} onNavigateHome={onNavigateHome} />
      </div>
    </div>
  );
}
