import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import {
  Calendar,
  Sparkles,
  HeartPulse,
  Activity,
  ShieldCheck,
  Download,
  QrCode,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Clock,
  HelpCircle,
  ChevronDown,
  Info,
  Stethoscope,
  Smile,
  Award
} from 'lucide-react';
import { fadeInUp } from '../../config/animationVariants';

type PetType = 'dog' | 'cat';
type DogBreedSize = 'small' | 'medium' | 'large' | 'giant';

interface BreedSizeInfo {
  id: DogBreedSize;
  label: string;
  weightRange: string;
  examples: string;
  yearMultiplier: number;
}

const DOG_SIZES: BreedSizeInfo[] = [
  {
    id: 'small',
    label: 'Small Breed',
    weightRange: '< 20 lbs (under 9 kg)',
    examples: 'Chihuahua, Yorkie, Frenchie, Dachshund',
    yearMultiplier: 4
  },
  {
    id: 'medium',
    label: 'Medium Breed',
    weightRange: '21 – 50 lbs (9.5 – 23 kg)',
    examples: 'Beagle, Australian Shepherd, Border Collie',
    yearMultiplier: 5
  },
  {
    id: 'large',
    label: 'Large Breed',
    weightRange: '51 – 90 lbs (23 – 41 kg)',
    examples: 'Labrador, Golden Retriever, German Shepherd',
    yearMultiplier: 6.5
  },
  {
    id: 'giant',
    label: 'Giant Breed',
    weightRange: '90+ lbs (41+ kg)',
    examples: 'Great Dane, Mastiff, Saint Bernard, Cane Corso',
    yearMultiplier: 8
  }
];

interface LifeStageDetails {
  stage: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  lifePercentage: number;
  milestones: { title: string; desc: string }[];
  vetAdvice: string;
}

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Scientific Age Calculation based on AAHA / AVMA guidelines
  const { humanAge, stageDetails } = useMemo(() => {
    const totalYears = years + months / 12;
    let calculatedHumanAge = 0;

    if (petType === 'cat') {
      if (totalYears <= 0.08) {
        // ~1 month
        calculatedHumanAge = 1;
      } else if (totalYears <= 0.25) {
        // ~3 months
        calculatedHumanAge = 4;
      } else if (totalYears <= 0.5) {
        // ~6 months
        calculatedHumanAge = 10;
      } else if (totalYears <= 1) {
        // Year 1
        calculatedHumanAge = Math.round(10 + (totalYears - 0.5) * 10);
      } else if (totalYears <= 2) {
        // Year 2 adds 9 years (total 24)
        calculatedHumanAge = Math.round(15 + (totalYears - 1) * 9);
      } else {
        // Each subsequent cat year is roughly 4 human years
        calculatedHumanAge = Math.round(24 + (totalYears - 2) * 4);
      }
    } else {
      // Dogs: Year 1 = 15 human years for all sizes
      if (totalYears <= 0.25) {
        calculatedHumanAge = Math.round(totalYears * 20); // ~5 human years at 3m
      } else if (totalYears <= 0.5) {
        calculatedHumanAge = Math.round(5 + (totalYears - 0.25) * 20); // ~10 human years at 6m
      } else if (totalYears <= 1) {
        calculatedHumanAge = Math.round(10 + (totalYears - 0.5) * 10); // 15 human years at 1y
      } else if (totalYears <= 2) {
        // Year 2 adds 9 human years (Total 24 human years at 2y)
        calculatedHumanAge = Math.round(15 + (totalYears - 1) * 9);
      } else {
        // Year 3+ depends on breed size
        const currentSize = DOG_SIZES.find((s) => s.id === dogSize) || DOG_SIZES[1];
        calculatedHumanAge = Math.round(24 + (totalYears - 2) * currentSize.yearMultiplier);
      }
    }

    // Determine Life Stage and Milestones
    let stage: string;
    let badgeColor: string;
    let borderColor: string;
    let description: string;
    let lifePercentage: number;
    let milestones: { title: string; desc: string }[] = [];
    let vetAdvice: string;

    if (petType === 'cat') {
      if (totalYears < 1) {
        stage = 'Kitten';
        badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
        borderColor = 'border-amber-200';
        description = 'High-growth pediatric stage. Rapid brain, motor, and immune system development.';
        lifePercentage = Math.min(15, Math.round((totalYears / 16) * 100));
        milestones = [
          { title: 'Core FVRCP Immunization', desc: 'Series at 8, 12, and 16 weeks to prevent feline viral rhinotracheitis and panleukopenia.' },
          { title: 'Rabies & Microchipping', desc: 'Permanent lifetime registration and rabies immunization around 12–16 weeks.' },
          { title: 'Spay / Neuter Window', desc: 'Veterinary consensus recommends surgical sterilization around 5–6 months before first heat cycle.' }
        ];
        vetAdvice = 'Feed calorie-dense kitten formula and begin routine indoor dental handling and nail trimming early.';
      } else if (totalYears <= 6) {
        stage = 'Young Adult';
        badgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
        borderColor = 'border-emerald-200';
        description = 'Peak physical vitality, metabolic stability, and prime agility.';
        lifePercentage = Math.round((totalYears / 16) * 100);
        milestones = [
          { title: 'Annual Wellness Exam & Boosters', desc: 'Routine preventative checkups and 1-yr / 3-yr core booster rotation.' },
          { title: 'Dental Plaque Monitoring', desc: 'Over 70% of cats show early periodontal disease by age 3. Daily brushing or dental kibble.' },
          { title: 'Weight & Hydration Management', desc: 'Introduce wet food fountains to protect against urinary crystal formation and kidney stress.' }
        ];
        vetAdvice = 'Monitor daily hydration and caloric intake closely after spay/neuter to prevent insidious adult weight gain.';
      } else if (totalYears <= 10) {
        stage = 'Mature Adult';
        badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
        borderColor = 'border-blue-200';
        description = 'Equates to human middle-age (48–56 years). Subtler activity shifts and baseline metabolic changes.';
        lifePercentage = Math.round((totalYears / 16) * 100);
        milestones = [
          { title: 'Baseline Geriatric Blood Screen', desc: 'Establish healthy baseline values for liver enzymes, creatinine, and thyroid (T4).' },
          { title: 'Joint Agility Observation', desc: 'Watch for subtle hesitancy before jumping onto counters or beds.' },
          { title: 'Kidney Health Screening', desc: 'Annual urinalysis to detect microalbuminuria or early feline chronic kidney disease.' }
        ];
        vetAdvice = 'Cats are masters at hiding chronic discomfort. Keep annual vet checks consistent even if they seem completely healthy.';
      } else if (totalYears <= 14) {
        stage = 'Senior';
        badgeColor = 'bg-purple-100 text-purple-900 border-purple-300';
        borderColor = 'border-purple-200';
        description = 'Senior golden years (human 60–72). Requires proactive renal, thyroid, and blood pressure surveillance.';
        lifePercentage = Math.min(95, Math.round((totalYears / 16) * 100));
        milestones = [
          { title: 'Bi-Annual Geriatric Vet Visits', desc: 'Every 6 months to detect hypertension, arthritis, and dental disease early.' },
          { title: 'Complete Blood & SDMA Renal Panel', desc: 'SDMA can identify renal decline up to 48 months earlier than traditional creatinine.' },
          { title: 'Orthopedic Home Adjustments', desc: 'Provide low-sided litter boxes, ramp cushions, and orthopedic heated pads.' }
        ];
        vetAdvice = 'Any uncharacteristic vocalization, sudden weight drop, or increased thirst warrants prompt veterinary evaluation.';
      } else {
        stage = 'Super Senior / Geriatric';
        badgeColor = 'bg-rose-100 text-rose-900 border-rose-300';
        borderColor = 'border-rose-200';
        description = 'Distinguished golden age (76+ human years). Focused on quality of life, comfort, and cognitive support.';
        lifePercentage = 98;
        milestones = [
          { title: 'Palliative & Comfort Care', desc: 'Environmental accessibility with multiple water bowls and non-slip floor rugs.' },
          { title: 'Cognitive Dysfunction Support', desc: 'Keep routines predictable and consult your vet on omega-3 fatty acids and antioxidants.' },
          { title: 'High-Palatability Senior Nutrition', desc: 'Warm wet meals with enhanced aromatics for aging feline olfactory senses.' }
        ];
        vetAdvice = 'Prioritize pain management, hydration, and warmth to make every day of their senior twilight calm and joyful.';
      }
    } else {
      // Dog life stages depending on breed size
      const maxExpectedYears = dogSize === 'giant' ? 9 : dogSize === 'large' ? 12 : dogSize === 'medium' ? 14 : 16;
      lifePercentage = Math.min(98, Math.round((totalYears / maxExpectedYears) * 100));

      if (totalYears < 0.75) {
        stage = 'Young Puppy';
        badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
        borderColor = 'border-amber-200';
        description = 'Rapid pediatric growth, socialization window, and immune development.';
        milestones = [
          { title: 'Core Puppy Vaccine Series', desc: 'DHPP / DA2PP boosters at 8, 12, and 16 weeks to protect against canine parvovirus.' },
          { title: 'Socialization Window (3–14 Weeks)', desc: 'Safe exposure to sounds, textures, friendly dogs, and diverse domestic environments.' },
          { title: 'Parasite & Deworming Protocol', desc: 'Broad-spectrum deworming and monthly heartworm/flea prevention initiation.' }
        ];
        vetAdvice = 'High-protein puppy growth nutrition is crucial. Never switch to adult food until skeletal growth plates close.';
      } else if (totalYears < 2) {
        stage = 'Adolescent & Junior';
        badgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
        borderColor = 'border-emerald-200';
        description = 'Sexual maturity, boundary testing, and adult muscle transition (human 15–24 years).';
        milestones = [
          { title: 'Veterinary Spay/Neuter Consultation', desc: 'Timing depends on breed size (larger breeds often wait until 12–18 months for joint health).' },
          { title: 'Adult Dental & Teething Transition', desc: 'Confirm all 42 permanent adult teeth have cleanly erupted without retained deciduous teeth.' },
          { title: 'Consistent Training & Mental Enrichment', desc: 'Adolescent dogs require daily structured scentwork, agility, or obedience routines.' }
        ];
        vetAdvice = 'Reinforce boundaries with positive reinforcement. Adolescent dogs experience temporary secondary fear periods.';
      } else if (totalYears <= (dogSize === 'giant' ? 4 : dogSize === 'large' ? 5 : 6)) {
        stage = 'Adult';
        badgeColor = 'bg-teal-100 text-teal-900 border-teal-300';
        borderColor = 'border-teal-200';
        description = 'Peak physical endurance, prime cognitive stability, and prime life activity.';
        milestones = [
          { title: 'Annual Preventative Exam', desc: 'Heartworm antigen blood test, comprehensive physical exam, and vaccine booster rotation.' },
          { title: 'Professional Dental Cleaning', desc: 'Tartar scaling and polishing under veterinary supervision to preserve gums and heart health.' },
          { title: 'Weight & Body Condition Score (BCS)', desc: 'Maintain ideal BCS 4–5/9. Overweight dogs have a statistically reduced lifespan by 1.8 years.' }
        ];
        vetAdvice = 'Keep daily exercise structured and weigh your dog monthly to catch slow weight creep before it strains joints.';
      } else if (totalYears <= (dogSize === 'giant' ? 6 : dogSize === 'large' ? 8 : 10)) {
        stage = 'Mature Adult';
        badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
        borderColor = 'border-blue-200';
        description = 'Middle-aged companion (human 45–60). Metabolism begins gradual slowing; early joint changes emerge.';
        milestones = [
          { title: 'Senior Baseline Blood & Chemistry Panel', desc: 'Screen liver, kidney function, and electrolytes before symptoms appear.' },
          { title: 'Joint Mobility & Glucosamine Support', desc: 'Introduce vet-approved omega-3 EPA/DHA and chondroitin for cartilage maintenance.' },
          { title: 'Ocular & Ear Examination', desc: 'Check for lenticular sclerosis (normal clouding) vs cataracts and chronic ear canal health.' }
        ];
        vetAdvice = 'Watch for stiffness upon waking up or reluctance to jump into cars. Subtle mobility slowing is manageable with early care.';
      } else {
        stage = 'Senior / Geriatric';
        badgeColor = 'bg-purple-100 text-purple-900 border-purple-300';
        borderColor = 'border-purple-200';
        description = 'Cherished senior twilight. Requires proactive comfort, joint relief, and bi-annual geriatric health monitoring.';
        milestones = [
          { title: 'Bi-Annual Geriatric Checkups', desc: 'Every 6 months allows timely intervention for arthritis, kidney disease, or cardiac murmurs.' },
          { title: 'Orthopedic Bedding & Floor Grips', desc: 'Support achy joints with memory foam beds and yoga runner mats on hardwood floors.' },
          { title: 'Cognitive & Senses Routine', desc: 'Gentle sniff walks and predictable meal/sleep routines support aging canine cognitive health.' }
        ];
        vetAdvice = 'Celebrate their senior years with patience, extra warmth, and regular communication with your veterinarian.';
      }
    }

    return {
      humanAge: calculatedHumanAge,
      stageDetails: {
        stage,
        badgeColor,
        borderColor,
        description,
        lifePercentage,
        milestones,
        vetAdvice
      }
    };
  }, [petType, dogSize, years, months]);

  // Trigger celebration confetti when clicking "Calculate" or changing age
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback if confetti blocked
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Is 1 dog year really equal to 7 human years?',
      a: 'No. The traditional "multiply by 7" rule is a popular myth that does not match biological science. Puppies mature roughly 15 times faster than humans during their very first year, reaching the human equivalent of a 15-year-old by age one and 24 by age two. After age two, aging speed diverges dramatically based on breed weight: small dogs age roughly 4 human years per calendar year, while giant breeds can age 8 to 9 human years annually.'
    },
    {
      q: 'Why do giant and large dogs age faster than small dogs?',
      a: 'Scientific research from the American Kennel Club (AKC) and veterinary gerontologists indicates large dogs experience an accelerated growth rate during puppyhood and have higher cellular turnover and free-radical metabolic wear. While a Chihuahua or Dachshund frequently lives 15–18 years (human 76–88), a Great Dane or Mastiff enters senior status at just 6 years old.'
    },
    {
      q: 'How do cats age compared to humans?',
      a: 'Cats follow a rapid early maturation curve similar to dogs. At 1 calendar year, an indoor cat is biologically equivalent to a 15-year-old human. At 2 years, they reach the equivalent of a 24-year-old human adult. Thereafter, each cat year corresponds to roughly 4 human years. A 10-year-old cat is roughly 56 in human years, and a 15-year-old senior cat is 76.'
    },
    {
      q: 'When is a dog or cat officially considered a "senior"?',
      a: 'According to AAHA and AAFP guidelines, cats are classified as "mature" between ages 7–10, and enter true "senior" status at age 11. For dogs, senior timing depends directly on body size: Giant breeds (90+ lbs) reach senior status around age 6; large breeds (50–90 lbs) around age 7–8; medium dogs around age 8–9; and small breeds (under 20 lbs) around age 10–11.'
    },
    {
      q: 'How does the PetHorizon app help track aging milestones?',
      a: 'PetHorizon automatically calculates your pet\'s exact biological life stage from their birthdate and schedules reminders for preventative care milestones: bi-annual geriatric wellness panels, dental cleanings, vaccine booster rotations, and weight management. You can also log daily medication routines and share care records with family members or pet sitters.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 sm:pt-32 pb-20 text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-900">
      {/* Top Header & Breadcrumbs */}
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

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-tight">
          [AAHA Chart] Pet Age Calculator in Human Years
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Convert your dog or cat’s age into exact human years using the official veterinary life stage guidelines. Accounts for breed weight scaling, biological maturation curves, and preventative health milestones.
        </p>
      </div>

      {/* Main Interactive Calculator Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden mb-12">
          
          {/* Pet Species Selector */}
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-linear-to-b from-slate-50/70 to-white">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
              Step 1: Select Pet Species
            </label>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
              <button
                type="button"
                onClick={() => {
                  setPetType('dog');
                  triggerConfetti();
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
                  triggerConfetti();
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

            {/* If Dog: Breed Size Selector */}
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
                        <span className="text-sm font-extrabold text-slate-900">
                          {size.label}
                        </span>
                        {dogSize === size.id && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <div className="text-[11px] font-bold text-emerald-800 mb-1">
                        {size.weightRange}
                      </div>
                      <div className="text-[10px] text-slate-500 leading-tight">
                        {size.examples}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Age Input Controls: Years & Months */}
            <div className="border-t border-slate-100 pt-6">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-4">
                Step {petType === 'dog' ? '3' : '2'}: Enter Chronological Age
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Years Selector */}
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

                {/* Months Selector */}
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

            {/* Calculated Result Display Card */}
            <motion.div
              layout
              className={`rounded-3xl p-6 sm:p-8 border-2 transition-all shadow-lg ${stageDetails.borderColor} bg-linear-to-br from-white via-slate-50/50 to-emerald-50/20`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${stageDetails.badgeColor}`}>
                      {stageDetails.stage} Stage
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      • {petType === 'dog' ? `${DOG_SIZES.find(s => s.id === dogSize)?.label}` : 'Domestic Feline'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {petName.trim() ? `${petName}’s Biological Age` : `${petType === 'dog' ? 'Your Dog' : 'Your Cat'}’s Human Equivalent`}
                  </h2>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Human Years Equivalent
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-800 tracking-tight flex items-baseline sm:justify-end gap-1.5">
                    <span>{humanAge}</span>
                    <span className="text-lg font-bold text-slate-600">Years Old</span>
                  </div>
                </div>
              </div>

              {/* Biological Progress Gauge */}
              <div className="py-6 border-b border-slate-200/60">
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                  <span>Relative Lifespan Spectrum</span>
                  <span className="text-emerald-800 font-extrabold">{stageDetails.lifePercentage}% Life Stage</span>
                </div>
                <div className="h-3 w-full bg-slate-200/80 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-linear-to-r from-emerald-500 via-teal-500 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${stageDetails.lifePercentage}%` }}
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stageDetails.description}
                </p>
              </div>

              {/* Personalized Life-Stage Milestones Checklist */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    Recommended Health Milestones for {stageDetails.stage}s
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  {stageDetails.milestones.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-start gap-2 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-extrabold text-slate-900 leading-tight">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Veterinary Tip Callout */}
                <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-4 flex items-start gap-3 mb-6">
                  <HeartPulse className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-950 leading-relaxed">
                    <span className="font-extrabold text-emerald-900">Veterinary Clinical Advice: </span>
                    {stageDetails.vetAdvice}
                  </div>
                </div>

                {/* Action Buttons: App Sync & Share */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenQrModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-2xl shadow-md shadow-emerald-700/20 transition-all cursor-pointer text-sm"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Sync Milestones to PetHorizon App</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareResult}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold px-5 py-3.5 rounded-2xl border border-slate-200 transition-all cursor-pointer text-sm shadow-2xs"
                  >
                    <Share2 className="w-4 h-4 text-slate-500" />
                    <span>{copied ? 'Copied to Clipboard! 🎉' : 'Share Milestone Card'}</span>
                  </button>
                </div>

              </div>

            </motion.div>

          </div>
        </div>

        {/* Clinical AAHA Reference Conversion Tables */}
        <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex items-center gap-2.5 mb-2">
            <Calendar className="w-5 h-5 text-emerald-700" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Veterinary Life Stage Conversion Matrix (AAHA Reference)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            The American Animal Hospital Association (AAHA) and American Veterinary Medical Association (AVMA) define canine life stages by body weight category:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-3.5">Calendar Age</th>
                  <th className="py-3 px-3.5">Small Breed (&lt;20 lbs)</th>
                  <th className="py-3 px-3.5">Medium (21-50 lbs)</th>
                  <th className="py-3 px-3.5">Large (51-90 lbs)</th>
                  <th className="py-3 px-3.5">Giant (90+ lbs)</th>
                  <th className="py-3 px-3.5 bg-emerald-50 text-emerald-900">Domestic Cat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">1 Year</td>
                  <td className="py-2.5 px-3.5">15 Human Yrs</td>
                  <td className="py-2.5 px-3.5">15 Human Yrs</td>
                  <td className="py-2.5 px-3.5">15 Human Yrs</td>
                  <td className="py-2.5 px-3.5">15 Human Yrs</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">15 Human Yrs</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">2 Years</td>
                  <td className="py-2.5 px-3.5">24 Human Yrs</td>
                  <td className="py-2.5 px-3.5">24 Human Yrs</td>
                  <td className="py-2.5 px-3.5">24 Human Yrs</td>
                  <td className="py-2.5 px-3.5">24 Human Yrs</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">24 Human Yrs</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">3 Years</td>
                  <td className="py-2.5 px-3.5">28 Human Yrs</td>
                  <td className="py-2.5 px-3.5">29 Human Yrs</td>
                  <td className="py-2.5 px-3.5">30 Human Yrs</td>
                  <td className="py-2.5 px-3.5">32 Human Yrs</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">28 Human Yrs</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">5 Years</td>
                  <td className="py-2.5 px-3.5">36 Human Yrs</td>
                  <td className="py-2.5 px-3.5">39 Human Yrs</td>
                  <td className="py-2.5 px-3.5">42 Human Yrs</td>
                  <td className="py-2.5 px-3.5">48 Human Yrs</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">36 Human Yrs</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">8 Years (Senior)</td>
                  <td className="py-2.5 px-3.5">48 Human Yrs</td>
                  <td className="py-2.5 px-3.5">54 Human Yrs</td>
                  <td className="py-2.5 px-3.5">60 Human Yrs</td>
                  <td className="py-2.5 px-3.5 font-bold text-rose-700">72 Human Yrs</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">48 Human Yrs</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">12 Years</td>
                  <td className="py-2.5 px-3.5">64 Human Yrs</td>
                  <td className="py-2.5 px-3.5">74 Human Yrs</td>
                  <td className="py-2.5 px-3.5 font-bold text-rose-700">84 Human Yrs</td>
                  <td className="py-2.5 px-3.5 font-bold text-rose-700">104 Human Yrs</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">64 Human Yrs</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-900">15 Years</td>
                  <td className="py-2.5 px-3.5">76 Human Yrs</td>
                  <td className="py-2.5 px-3.5 font-bold text-rose-700">89 Human Yrs</td>
                  <td className="py-2.5 px-3.5 font-bold text-rose-700">102 Human Yrs</td>
                  <td className="py-2.5 px-3.5 text-slate-400">—</td>
                  <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">76 Human Yrs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* On-Page Frequently Asked Questions & Rich Snippets */}
        <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex items-center gap-2.5 mb-2">
            <HelpCircle className="w-5 h-5 text-emerald-700" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions: Pet Age &amp; Lifespans
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Clinical facts debunking common pet aging myths and guidelines for preventative veterinary care.
          </p>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer text-sm sm:text-base gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom App Promo Banner */}
        <div className="bg-linear-to-br from-emerald-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Never Miss a Life-Stage Screening</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Automate Your Pet’s Care Routine in PetHorizon
            </h3>
            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-6">
              Track vaccinations, dental cleanings, medication timers, and weight progress with family-synced alerts. Completely free on Google Play.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenQrModal}
                className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-slate-900 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4 text-emerald-700" />
                <span>Get PetHorizon Free App</span>
              </button>
              <button
                type="button"
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-2xl border border-white/20 transition-all cursor-pointer text-sm"
              >
                <span>Explore App Features</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
