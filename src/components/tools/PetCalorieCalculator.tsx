import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
// @ts-expect-error canvas-confetti has no types
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Utensils, 
  Droplets, 
  Flame, 
  ShieldCheck, 
  Download, 
  QrCode,
  ArrowLeft,
  CheckCircle2,
  Plus,
  Minus,
  Scale,
  Clock,
  Wifi,
  BatteryMedium,
  Activity,
  HeartPulse,
  BookOpen
} from 'lucide-react';
import { fadeInUp } from '../../config/animationVariants';

type PetType = 'dog' | 'cat';
type WeightUnit = 'kg' | 'lbs';

interface LifeStage {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  multiplier: number;
}

const DOG_STAGES: LifeStage[] = [
  { id: 'adult_neutered', label: 'Adult (Neutered / Spayed)', shortLabel: 'Adult Neutered', description: 'Standard indoor/outdoor companion', multiplier: 1.6 },
  { id: 'adult_intact', label: 'Adult (Intact)', shortLabel: 'Adult Intact', description: 'Higher basal metabolic energy', multiplier: 1.8 },
  { id: 'inactive_weight_loss', label: 'Weight Loss / Inactive', shortLabel: 'Weight Loss', description: 'Safe caloric deficit for gradual slimming', multiplier: 1.0 },
  { id: 'active_working', label: 'High Activity / Working / Agile', shortLabel: 'Active / Athlete', description: 'Daily agility, long runs, working breeds', multiplier: 2.2 },
  { id: 'puppy_under_4m', label: 'Young Puppy (< 4 Months)', shortLabel: 'Puppy < 4m', description: 'Rapid growth and bone skeletal phase', multiplier: 3.0 },
  { id: 'puppy_over_4m', label: 'Adolescent Puppy (4+ Months)', shortLabel: 'Puppy 4-12m', description: 'Sustained adolescent energy', multiplier: 2.0 },
  { id: 'senior_dog', label: 'Senior Dog (7+ Years)', shortLabel: 'Senior 7+y', description: 'Gentle routine with metabolic joint-care', multiplier: 1.2 }
];

const CAT_STAGES: LifeStage[] = [
  { id: 'cat_adult_neutered', label: 'Adult (Neutered / Indoor)', shortLabel: 'Indoor Neutered', description: 'Standard indoor domestic companion', multiplier: 1.2 },
  { id: 'cat_adult_intact', label: 'Adult (Intact)', shortLabel: 'Adult Intact', description: 'Intact feline maintenance profile', multiplier: 1.4 },
  { id: 'cat_weight_loss', label: 'Weight Management / Gentle Slim', shortLabel: 'Weight Loss', description: 'Safe deficit avoiding feline hepatic lipidosis', multiplier: 0.9 },
  { id: 'cat_active_outdoor', label: 'Active Outdoor / Hunter', shortLabel: 'Outdoor Hunter', description: 'Regular hunting, territory roaming, climbing', multiplier: 1.6 },
  { id: 'kitten', label: 'Kitten (< 1 Year)', shortLabel: 'Kitten < 1y', description: 'High-protein growth phase for young kittens', multiplier: 2.5 },
  { id: 'cat_senior', label: 'Senior Cat (10+ Years)', shortLabel: 'Senior 10+y', description: 'Gentle digestion with kidney-conscious hydration', multiplier: 1.1 }
];

interface PetCalorieCalculatorProps {
  onNavigateHome: () => void;
  onOpenQrModal: () => void;
}

// Animated Number Counter Hook for smooth transitions
function useAnimatedNumber(value: number, duration: number = 350) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTime: number | null = null;
    const startVal = displayValue;
    const diff = value - startVal;

    if (diff === 0) return;

    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(startVal + diff * ease));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return displayValue;
}

export default function PetCalorieCalculator({ onNavigateHome, onOpenQrModal }: PetCalorieCalculatorProps) {
  const [petType, setPetType] = useState<PetType>('dog');
  const [petName, setPetName] = useState<string>('Luna');
  const [weight, setWeight] = useState<number>(12);
  const [unit, setUnit] = useState<WeightUnit>('kg');
  const [selectedStageId, setSelectedStageId] = useState<string>('adult_neutered');
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);
  const [activeBcsTab, setActiveBcsTab] = useState<'under' | 'ideal' | 'over'>('ideal');

  // Standard kibble caloric density: 375 kcal / cup (approx 105g / cup)
  const foodKcalPerCup = 375;

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

  // Mathematical Calculation according to WSAVA Global Guidelines
  // RER = 70 * (body weight in kg) ^ 0.75
  const calculations = useMemo(() => {
    const weightInKg = unit === 'kg' ? Math.max(0.5, weight) : Math.max(0.5, weight * 0.453592);
    
    // RER (Resting Energy Requirement)
    const rer = Math.round(70 * Math.pow(weightInKg, 0.75));
    
    // MER (Maintenance Energy Requirement)
    const mer = Math.round(rer * currentStage.multiplier);

    // Food portions in grams and cups
    const kcalPerGram = (foodKcalPerCup / 105);
    const dailyGrams = Math.round(mer / kcalPerGram);
    const dailyCups = (mer / foodKcalPerCup).toFixed(2);
    
    // Per-meal portions
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

  // Smooth animated odometer numbers
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
      
      {/* Decorative ambient background glows */}
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
        
        {/* Mobile-Only Header: Compact & Clean on Smartphones */}
        <div className="lg:hidden text-center max-w-xl mx-auto mb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.06] border border-emerald-800/15">
            <Calculator className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>WSAVA Veterinary Standards</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight leading-tight">
            Pet Calorie & Portion Calculator
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            Calculate resting (RER) and maintenance (MER) calories. Adjust weight below to see exact grams per meal.
          </p>
        </div>

        {/* =========================================================================
            SPLIT HERO: Rich Content on the Left + Resized Compact Phone Frame on the Right
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 Cols on LG, Order 2 on Mobile): Rich Educational Guides & Value Content */}
          <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            
            {/* Desktop-Only Header Badge & Title */}
            <div className="hidden lg:block space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.06] border border-emerald-800/15">
                <Calculator className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>WSAVA Veterinary Nutritional Standards</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#17191C] tracking-tight leading-[1.15]">
                Precision Pet Calorie & Daily Portion Calculator
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Calculate exact resting metabolic energy (RER) and maintenance calories (MER) for dogs and cats. Use veterinary gram measurements to prevent obesity, malnutrition, and accidental double-feeding.
              </p>
            </div>

            {/* Core Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Anti-Collision Lock</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Family sync prevents pets getting fed twice when you aren't home.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                  <Scale className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Gram Precision</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Weighing food in grams eliminates the 25% error margin of cups.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-2">
                  <Droplets className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Hydration Target</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Auto-calculated fresh water goals protect companion renal health.
                </p>
              </div>
            </div>

            {/* Rich Module 1: Interactive Body Condition Score (BCS 1-9) Guide */}
            <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Body Condition Score (BCS) Guidance
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-slate-400">Clinical Scale</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveBcsTab('under')}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    activeBcsTab === 'under'
                      ? 'border-amber-500 bg-amber-50/70 text-amber-950 font-bold shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block">BCS 1–3</span>
                  <span className="text-[10px] text-slate-500">Underweight</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveBcsTab('ideal')}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    activeBcsTab === 'ideal'
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block">BCS 4–5</span>
                  <span className="text-[10px] text-emerald-700">Ideal Body Shape</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveBcsTab('over')}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    activeBcsTab === 'over'
                      ? 'border-rose-500 bg-rose-50/70 text-rose-950 font-bold shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block">BCS 6–9</span>
                  <span className="text-[10px] text-slate-500">Overweight</span>
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                {activeBcsTab === 'under' && (
                  <p>
                    <strong className="text-amber-800">Underweight:</strong> Ribs, spine, and pelvic bones are easily visible without palpable fat. Recommend selecting the <em>"Active"</em> multiplier to gradually rebuild healthy muscle mass with veterinary guidance.
                  </p>
                )}
                {activeBcsTab === 'ideal' && (
                  <p>
                    <strong className="text-emerald-800">Ideal Body Condition:</strong> Ribs are easily palpable with a slight fat cover. Well-proportioned waist is visible behind the ribs from above. Maintain your current calculated daily portions.
                  </p>
                )}
                {activeBcsTab === 'over' && (
                  <p>
                    <strong className="text-rose-800">Overweight:</strong> Heavy fat cover over ribs, absence of visible waistline, and distended abdomen. Recommend switching the calculator multiplier to <em>"Weight Loss"</em> (1.0x RER for dogs, 0.9x RER for cats) to ensure a safe, steady caloric deficit.
                  </p>
                )}
              </div>
            </div>

            {/* Rich Module 2: The 90/10 Veterinary Golden Rule */}
            <div className="p-4 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-emerald-300 flex items-center justify-center shrink-0">
                <Utensils className="w-6 h-6" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xs sm:text-sm font-bold text-white">The 90/10 Calorie Allocation Rule</h4>
                <p className="text-xs text-emerald-100/80 mt-1 leading-snug">
                  Veterinary nutritionists advise that training treats and dental sticks should never exceed <strong>10%</strong> of daily calories. The remaining <strong>90%</strong> must come from nutritionally complete meals.
                </p>
              </div>
            </div>

            {/* App Action Download Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-sm shadow-md shadow-emerald-900/15 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Get Pet Horizon on Google Play</span>
              </a>

              <button
                type="button"
                onClick={onOpenQrModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-xs"
              >
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>Scan QR Code</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Evidence-based clinical formulas verified against WSAVA & AAHA guidelines.</span>
            </div>
          </motion.div>

          {/* Right Column (5 Cols on LG, Order 1 on Mobile): Compact Resized Phone Frame (Visible on Phone & Web) */}
          <div className="lg:col-span-5 flex justify-center items-start lg:sticky lg:top-24 order-1 lg:order-2">
            
            {/* Ambient Back Glow */}
            <div className="absolute w-[280px] sm:w-[320px] h-[520px] bg-gradient-to-br from-emerald-500/15 via-teal-400/10 to-amber-300/10 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* RESIZED COMPACT PHONE FRAME (Matches PhoneFrame.tsx width w-[295px] sm:w-[315px]) */}
            <div className="w-[300px] sm:w-[315px] rounded-[2.8rem] sm:rounded-[3.2rem] p-2.5 bg-[#0F1115] shadow-[0_22px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-slate-800/80 relative select-none transition-all">
              
              {/* Authentic Side Hardware Buttons */}
              <div className="absolute -left-[3.5px] top-[54px] w-[3.5px] h-[20px] bg-[#2A2E35] rounded-l-sm" />
              <div className="absolute -left-[3.5px] top-[88px] w-[3.5px] h-[36px] bg-[#2A2E35] rounded-l-sm" />
              <div className="absolute -left-[3.5px] top-[134px] w-[3.5px] h-[36px] bg-[#2A2E35] rounded-l-sm" />
              <div className="absolute -right-[3.5px] top-[90px] w-[3.5px] h-[48px] bg-[#2A2E35] rounded-r-sm" />

              {/* Phone Screen Display */}
              <div className="bg-[#FAF8F5] rounded-[2.3rem] sm:rounded-[2.5rem] overflow-hidden border border-black/[0.08] shadow-inner flex flex-col max-h-[580px] sm:max-h-[620px]">
                
                {/* Simulated Phone Status Bar */}
                <div className="px-5 pt-2.5 pb-1 flex items-center justify-between text-[10px] font-bold text-slate-800 select-none bg-white/70">
                  <span>9:41</span>
                  {/* Camera Punch Hole / Dynamic Island */}
                  <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto" />
                  <div className="flex items-center gap-1 text-slate-700">
                    <Wifi className="w-2.5 h-2.5" />
                    <BatteryMedium className="w-3 h-3" />
                  </div>
                </div>

                {/* In-Phone App Navigation Header */}
                <div className="px-4 py-2 border-b border-black/[0.05] bg-white/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xs shadow-xs">
                      {petType === 'dog' ? '🐶' : '🐱'}
                    </div>
                    <div>
                      <h3 className="text-[11px] font-black text-slate-900 leading-tight">Diet & Portion Lab</h3>
                      <p className="text-[9px] font-semibold text-emerald-700">WSAVA RER/MER Engine</p>
                    </div>
                  </div>

                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Active
                  </span>
                </div>

                {/* Phone Scrollable App Body */}
                <div className="p-3.5 space-y-3 flex-1 overflow-y-auto">
                  
                  {/* Species Switcher (Dog / Cat) */}
                  <div className="bg-slate-200/80 p-0.5 rounded-xl flex relative">
                    <button
                      type="button"
                      onClick={() => handlePetTypeChange('dog')}
                      className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 relative z-10 ${
                        petType === 'dog' ? 'text-emerald-950 font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>🐶</span>
                      <span>Dog</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handlePetTypeChange('cat')}
                      className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 relative z-10 ${
                        petType === 'cat' ? 'text-emerald-950 font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>🐱</span>
                      <span>Cat</span>
                    </button>

                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className={`absolute top-0.5 bottom-0.5 rounded-lg bg-white shadow-xs ${
                        petType === 'dog' ? 'left-0.5 w-[calc(50%-2px)]' : 'left-[50%] w-[calc(50%-2px)]'
                      }`}
                    />
                  </div>

                  {/* =================================================================
                      TOP-TO-BOTTOM FLOW: LIVE RESULT CARD AT THE TOP FOR INSTANT VIEW
                     ================================================================= */}
                  <motion.div 
                    layout
                    className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-950 text-white shadow-sm relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-white/10">
                      <span className="font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" />
                        Target Caloric Plan
                      </span>
                      <span className="font-bold px-1.5 py-0.5 rounded-md bg-white/15 text-white">
                        {displayName}
                      </span>
                    </div>

                    {/* Animated Odometer Number Counter */}
                    <div className="my-2 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-black text-white tracking-tight">
                          {animatedMer}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-300 uppercase">
                          kcal / day
                        </span>
                      </div>
                      <p className="text-[9px] text-emerald-200/80">
                        {calculations.rer} kcal basal + {currentStage.multiplier}x activity
                      </p>
                    </div>

                    {/* Portion Breakdown Grid */}
                    <div className="grid grid-cols-2 gap-1.5 pt-1 pb-2">
                      <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-center">
                        <span className="text-[9px] font-semibold text-emerald-200 block uppercase">
                          Per Meal ({mealsPerDay}x)
                        </span>
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-lg font-black text-white">{animatedGrams}</span>
                          <span className="text-[10px] font-bold text-emerald-300">g</span>
                        </div>
                        <span className="text-[9px] text-white/70 block">
                          ≈ {calculations.cupsPerMeal} cups
                        </span>
                      </div>

                      <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-center">
                        <span className="text-[9px] font-semibold text-emerald-200 block uppercase">
                          Daily Total
                        </span>
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-lg font-black text-white">{calculations.dailyGrams}</span>
                          <span className="text-[10px] font-bold text-emerald-300">g</span>
                        </div>
                        <span className="text-[9px] text-white/70 block">
                          ≈ {calculations.dailyCups} cups
                        </span>
                      </div>
                    </div>

                    {/* Hydration Bar */}
                    <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1 text-blue-200">
                        <Droplets className="w-3 h-3 text-blue-300 shrink-0" />
                        <span>Daily Water:</span>
                      </div>
                      <span className="font-bold text-white">
                        ~{animatedWater} ml/day
                      </span>
                    </div>
                  </motion.div>

                  {/* Weight Stepper & Slider Card */}
                  <div className="bg-white p-3 rounded-2xl border border-black/[0.06] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="Pet Name"
                        className="text-xs font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-600 focus:outline-none transition-colors w-24 px-1"
                      />

                      {/* KG / LBS Unit Switcher */}
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

                    {/* Weight Adjuster Buttons */}
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
                          <span className="text-2xl font-black text-slate-900">
                            {weight}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 uppercase">
                            {unit}
                          </span>
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

                    {/* Range Slider */}
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

                  {/* Meal Frequency (1x, 2x, 3x) */}
                  <div className="bg-white p-2.5 rounded-2xl border border-black/[0.06] shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Daily Meals</span>
                      <span className="text-[9px] text-slate-500 font-normal">Split portions</span>
                    </div>

                    <div className="inline-flex rounded-lg bg-slate-100 p-0.5 gap-1">
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setMealsPerDay(num)}
                          className={`w-6 h-6 rounded text-[10px] font-bold transition-all ${
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

                  {/* Save Feeding Routine Button */}
                  <button
                    type="button"
                    onClick={handleConfettiSync}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                  >
                    {hasCelebrated ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        <span>Routine Saved & Sync Ready!</span>
                      </>
                    ) : (
                      <>
                        <HeartPulse className="w-3.5 h-3.5 text-white" />
                        <span>Save {displayName}'s Feeding Routine</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated Phone Bottom Bar */}
                <div className="p-2 border-t border-black/[0.05] bg-white flex items-center justify-around text-slate-400">
                  <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EDUCATIONAL & VETERINARY FAQ SECTION (Search Engine Magnet & Guidance)
           ========================================================================= */}
        <section className="mt-16 pt-14 border-t border-slate-200">
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Veterinary Science Explained
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight mt-3">
              How Pet Caloric Formulas Work
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2">
              Everything dog and cat parents need to know about RER, MER, and kitchen scale accuracy.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-700" />
                What is the WSAVA formula for Resting Energy Requirement (RER)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                RER represents the calories an animal expends at rest in a comfortable room. The World Small Animal Veterinary Association (WSAVA) standard scientific equation is:
                <br />
                <code className="inline-block my-2 px-2.5 py-1 bg-slate-100 rounded text-emerald-900 font-mono text-xs">
                  RER = 70 × (Body Weight in Kilograms)^0.75
                </code>
                <br />
                This exponential curve reflects that smaller animals have faster surface-area-to-mass metabolic rates than larger dogs.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-700" />
                Why should I measure in grams rather than measuring cups?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Studies show volumetric measuring cups can have an error margin of up to 25% depending on kibble shape, settled density, and scooper bias. Over months, an extra 20 kibbles per meal leads to insidious canine and feline obesity. Weighing in grams on an inexpensive digital kitchen scale eliminates all guesswork.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-700" />
                How should treats be accounted for in daily calories?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Treats, dental chews, and table scraps should never exceed <strong>10% of total daily calories (MER)</strong>. The remaining 90% must come from a complete, AAFCO or FEDIAF-balanced kibble or wet food formula.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-emerald-700" />
                Why does Pet Horizon calculate daily water intake?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Hydration is the single most critical preventative metric against feline chronic kidney disease (CKD) and canine urinary stones. Dogs and cats need roughly 50 to 60 ml of fresh water per kilogram of body weight each day.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
