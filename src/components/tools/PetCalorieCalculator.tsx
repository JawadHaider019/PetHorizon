import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Sparkles, 
  Utensils, 
  Droplets, 
  Flame, 
  Info, 
  ShieldCheck, 
  RotateCcw, 
  Download, 
  QrCode,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  ChevronDown,
  Plus,
  Minus,
  Scale,
  Clock,
  Wifi,
  BatteryMedium
} from 'lucide-react';
import { fadeInUp, staggerCard } from '../../config/animationVariants';

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
  { id: 'inactive_weight_loss', label: 'Weight Management / Inactive', shortLabel: 'Weight Loss', description: 'Restricted energy for gradual safe slimming', multiplier: 1.0 },
  { id: 'active_working', label: 'High Activity / Working / Agile', shortLabel: 'Active / Athlete', description: 'Daily agility, long runs, working breeds', multiplier: 2.2 },
  { id: 'puppy_under_4m', label: 'Young Puppy (< 4 Months)', shortLabel: 'Puppy < 4m', description: 'Rapid growth and bone skeletal phase', multiplier: 3.0 },
  { id: 'puppy_over_4m', label: 'Adolescent Puppy (4+ Months)', shortLabel: 'Puppy 4-12m', description: 'Sustained adolescent energy', multiplier: 2.0 },
  { id: 'senior_dog', label: 'Senior Dog (7+ Years)', shortLabel: 'Senior 7+y', description: 'Gentle routine with metabolic joint-care', multiplier: 1.2 }
];

const CAT_STAGES: LifeStage[] = [
  { id: 'cat_adult_neutered', label: 'Adult (Neutered / Indoor)', shortLabel: 'Indoor Neutered', description: 'Standard indoor domestic companion', multiplier: 1.2 },
  { id: 'cat_adult_intact', label: 'Adult (Intact)', shortLabel: 'Adult Intact', description: 'Intact feline maintenance profile', multiplier: 1.4 },
  { id: 'cat_weight_loss', label: 'Weight Management / Gentle Slim', shortLabel: 'Weight Loss', description: 'Safe caloric deficit preventing hepatic issues', multiplier: 0.9 },
  { id: 'cat_active_outdoor', label: 'Active Outdoor / Territory Hunter', shortLabel: 'Outdoor Hunter', description: 'Regular hunting, territory roaming, climbing', multiplier: 1.6 },
  { id: 'kitten', label: 'Kitten (< 1 Year)', shortLabel: 'Kitten < 1y', description: 'High-protein growth phase for young kittens', multiplier: 2.5 },
  { id: 'cat_senior', label: 'Senior Cat (10+ Years)', shortLabel: 'Senior 10+y', description: 'Gentle digestion with kidney-conscious hydration', multiplier: 1.1 }
];

interface PetCalorieCalculatorProps {
  onNavigateHome: () => void;
  onOpenQrModal: () => void;
}

// Animated Number Counter Hook for smooth transitions
function useAnimatedNumber(value: number, duration: number = 400) {
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
      const ease = 1 - Math.pow(1 - progress, 3); // Ease out cubic
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
  const [foodKcalPerCup, setFoodKcalPerCup] = useState<number>(375);
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);

  // Switch default stage when changing pet type
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

    // Food portions
    // Dry kibble average is ~375 kcal / cup (approx 105g/cup, ~3.57 kcal/g)
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

  // Smooth animated odometer numbers
  const animatedMer = useAnimatedNumber(calculations.mer);
  const animatedGrams = useAnimatedNumber(calculations.gramsPerMeal);
  const animatedWater = useAnimatedNumber(calculations.dailyWaterMl);

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

  // Quick weight adjuster
  const adjustWeight = (delta: number) => {
    setWeight((prev) => Math.max(0.5, Math.round((prev + delta) * 10) / 10));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 pb-24 relative overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-800">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-emerald-200/35 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors py-1.5 px-3 rounded-full hover:bg-black/[0.04]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Pet Horizon Home</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* =========================================================================
            SPLIT HERO LAYOUT: Value Proposition (Left) + Interactive Phone View (Right)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols on LG): Editorial Value & App Bridge */}
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>WSAVA Veterinary Nutritional Standards</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-[1.12]">
              Precision Pet Calorie & Portion Calculator
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
              Calculate exact resting energy (RER) and daily active maintenance (MER) tailored to your companion’s age, weight, and activity. Prevent accidental overfeeding and track meals in real time.
            </p>

            {/* Feature Check List */}
            <div className="pt-2 space-y-3.5 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Anti-Collision Care Lock</h4>
                  <p className="text-xs text-slate-500">Live timestamp updates across family phones so pets never get fed twice.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Gram-Accurate Portioning</h4>
                  <p className="text-xs text-slate-500">Kitchen scale gram precision prevents the 25% error margin of measuring cups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Hydration Target Alerts</h4>
                  <p className="text-xs text-slate-500">Auto-calculated daily fresh water requirements to safeguard kidney health.</p>
                </div>
              </div>
            </div>

            {/* App Download Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-sm shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Get Pet Horizon on Google Play</span>
              </a>

              <button
                type="button"
                onClick={onOpenQrModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-xs"
              >
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>Scan QR</span>
              </button>
            </div>

            {/* Trust Quote / E-E-A-T note */}
            <div className="pt-3 text-[11px] text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Evidence-based clinical formulas verified against WSAVA & AAHA guidelines.</span>
            </div>
          </motion.div>

          {/* Right Column (7 Cols on LG): Authentic Interactive Phone View Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* Ambient phone back-glow */}
            <div className="absolute w-[340px] sm:w-[420px] h-[640px] bg-gradient-to-br from-emerald-500/20 via-teal-400/10 to-amber-300/10 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Phone Container: Native edge-to-edge on mobile, Authentic Hardware Phone Frame on Desktop */}
            <div className="w-full max-w-[420px] sm:max-w-[430px] sm:rounded-[3.2rem] sm:p-3 sm:bg-[#0F1115] sm:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] sm:ring-1 sm:ring-slate-800 relative transition-all">
              
              {/* Hardware buttons visible only on desktop / tablet wrapper */}
              <div className="hidden sm:block">
                <div className="absolute -left-[4px] top-[70px] w-[4px] h-[22px] bg-[#2A2E35] rounded-l-sm" />
                <div className="absolute -left-[4px] top-[108px] w-[4px] h-[40px] bg-[#2A2E35] rounded-l-sm" />
                <div className="absolute -left-[4px] top-[160px] w-[4px] h-[40px] bg-[#2A2E35] rounded-l-sm" />
                <div className="absolute -right-[4px] top-[110px] w-[4px] h-[56px] bg-[#2A2E35] rounded-r-sm" />
              </div>

              {/* Phone Inner Screen */}
              <div className="bg-[#FAF8F5] sm:rounded-[2.6rem] overflow-hidden border border-black/[0.08] sm:border-0 shadow-lg sm:shadow-inner flex flex-col min-h-[680px]">
                
                {/* Simulated Phone Status Bar */}
                <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-bold text-slate-800 select-none">
                  <span>9:41</span>
                  {/* Dynamic Island / Camera Notch */}
                  <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Wifi className="w-3 h-3" />
                    <BatteryMedium className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* In-Phone App Navigation Header */}
                <div className="px-5 py-3 border-b border-black/[0.05] bg-white/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-sm shadow-xs">
                      {petType === 'dog' ? '🐶' : '🐱'}
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-slate-900 leading-tight">Pet Horizon Diet Lab</h3>
                      <p className="text-[10px] font-semibold text-emerald-700">RER/MER Live Engine</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    WSAVA
                  </span>
                </div>

                {/* Phone Scrollable App Body */}
                <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">
                  
                  {/* Species Switcher (Spring Pill Animation) */}
                  <div className="bg-slate-200/80 p-1 rounded-2xl flex relative">
                    <button
                      type="button"
                      onClick={() => handlePetTypeChange('dog')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 relative z-10 ${
                        petType === 'dog' ? 'text-emerald-950 font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>🐶</span>
                      <span>Dog / Canine</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handlePetTypeChange('cat')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 relative z-10 ${
                        petType === 'cat' ? 'text-emerald-950 font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>🐱</span>
                      <span>Cat / Feline</span>
                    </button>

                    {/* Sliding background indicator */}
                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className={`absolute top-1 bottom-1 rounded-xl bg-white shadow-sm ${
                        petType === 'dog' ? 'left-1 w-[calc(50%-4px)]' : 'left-[50%] w-[calc(50%-4px)]'
                      }`}
                    />
                  </div>

                  {/* Pet Name & Interactive Weight Card */}
                  <div className="bg-white p-4 rounded-2xl border border-black/[0.06] shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="Pet's Name"
                        className="text-sm font-black text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-600 focus:outline-none transition-colors w-32 px-1"
                      />

                      {/* KG / LBS Unit Switcher */}
                      <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-[10px] font-bold">
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

                    {/* Weight Stepper & Display */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => adjustWeight(-0.5)}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold transition-all active:scale-95"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <div className="text-center">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-3xl font-black text-slate-900 tracking-tight">
                            {weight}
                          </span>
                          <span className="text-xs font-bold text-emerald-700 uppercase">
                            {unit}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold block">
                          ≈ {unit === 'kg' ? (weight * 2.20462).toFixed(1) + ' lbs' : (weight * 0.453592).toFixed(1) + ' kg'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => adjustWeight(0.5)}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold transition-all active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Fluid Slider */}
                    <input
                      type="range"
                      min={petType === 'dog' ? 1 : 1}
                      max={petType === 'dog' ? 60 : 15}
                      step="0.5"
                      value={weight}
                      onChange={(e) => setWeight(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  {/* Life Stage & Activity Selector */}
                  <div className="bg-white p-4 rounded-2xl border border-black/[0.06] shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">Life Stage & Activity</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {currentStage.multiplier}x RER
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {currentStages.map((stage) => {
                        const isSelected = stage.id === selectedStageId;
                        return (
                          <button
                            key={stage.id}
                            type="button"
                            onClick={() => setSelectedStageId(stage.id)}
                            className={`p-2.5 rounded-xl border text-left transition-all ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs'
                                : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 text-xs'
                            }`}
                          >
                            <span className="text-xs font-bold block leading-tight">{stage.shortLabel}</span>
                            <span className="text-[10px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                              {stage.multiplier}x basal
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Meal Frequency Toggle (1x, 2x, 3x) */}
                  <div className="bg-white p-3.5 rounded-2xl border border-black/[0.06] shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Daily Meals</span>
                      <span className="text-[10px] text-slate-500 font-normal">Split portions</span>
                    </div>

                    <div className="inline-flex rounded-xl bg-slate-100 p-1 gap-1">
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setMealsPerDay(num)}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
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

                  {/* =======================================================
                      REAL-TIME ANIMATED RESULT CARD (Inside Phone Screen)
                     ======================================================= */}
                  <motion.div 
                    layout
                    className="p-4 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-950 text-white shadow-md relative overflow-hidden"
                  >
                    {/* Top Result Header */}
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                      <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        Daily Target
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-white">
                        {displayName}
                      </span>
                    </div>

                    {/* Animated Primary Calorie Number Counter */}
                    <div className="my-3 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-black text-white tracking-tight">
                          {animatedMer}
                        </span>
                        <span className="text-xs font-bold text-emerald-300 uppercase">
                          kcal / day
                        </span>
                      </div>
                      <p className="text-[10px] text-emerald-200/80 mt-0.5">
                        {calculations.rer} kcal basal resting + {currentStage.multiplier}x lifestyle
                      </p>
                    </div>

                    {/* Portion Breakdown Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1 pb-3">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
                        <span className="text-[10px] font-semibold text-emerald-200 block uppercase">
                          Per Meal ({mealsPerDay}x)
                        </span>
                        <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
                          <span className="text-xl font-black text-white">{animatedGrams}</span>
                          <span className="text-xs font-bold text-emerald-300">g</span>
                        </div>
                        <span className="text-[10px] text-white/70 block">
                          ≈ {calculations.cupsPerMeal} cups
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
                        <span className="text-[10px] font-semibold text-emerald-200 block uppercase">
                          Daily Total
                        </span>
                        <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
                          <span className="text-xl font-black text-white">{calculations.dailyGrams}</span>
                          <span className="text-xs font-bold text-emerald-300">g</span>
                        </div>
                        <span className="text-[10px] text-white/70 block">
                          ≈ {calculations.dailyCups} cups
                        </span>
                      </div>
                    </div>

                    {/* Hydration Bar */}
                    <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-400/25 flex items-center justify-between text-xs mb-3">
                      <div className="flex items-center gap-1.5 text-blue-200">
                        <Droplets className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                        <span className="text-[11px] font-medium">Daily Water Target</span>
                      </div>
                      <span className="text-xs font-bold text-white">
                        ~{animatedWater} ml/day
                      </span>
                    </div>

                    {/* Interactive "Sync & Save Meal Routine" Button */}
                    <button
                      type="button"
                      onClick={handleConfettiSync}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                    >
                      {hasCelebrated ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                          <span>Calculated & Ready to Sync!</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-slate-950" />
                          <span>Save {displayName}'s Feeding Routine</span>
                        </>
                      )}
                    </button>
                  </motion.div>

                  {/* Anti-collision family reminder banner */}
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-2 text-left">
                    <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-amber-900 leading-snug">
                      <strong>Family Anti-Collision Lock:</strong> Once {displayName}'s {calculations.gramsPerMeal}g breakfast is served, your partner gets an alert immediately.
                    </p>
                  </div>
                </div>

                {/* Simulated Phone Bottom Bar */}
                <div className="p-3 border-t border-black/[0.05] bg-white flex items-center justify-around text-slate-400 text-xs">
                  <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EDUCATIONAL & VETERINARY FAQ SECTION (Search Engine Magnet & Guidance)
           ========================================================================= */}
        <section className="mt-20 pt-16 border-t border-slate-200">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
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

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
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

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-700" />
                Why should I measure in grams rather than measuring cups?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Studies show volumetric measuring cups can have an error margin of up to 25% depending on kibble shape, settled density, and scooper bias. Over months, an extra 20 kibbles per meal leads to insidious canine and feline obesity. Weighing in grams on an inexpensive digital kitchen scale eliminates all guesswork.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-700" />
                How should treats be accounted for in daily calories?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Treats, dental chews, and table scraps should never exceed <strong>10% of total daily calories (MER)</strong>. The remaining 90% must come from a complete, AAFCO or FEDIAF-balanced kibble or wet food formula.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
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
