import { useState, useEffect } from 'react';

export type PetType = 'dog' | 'cat';
export type WeightUnit = 'kg' | 'lbs';

export interface LifeStage {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  multiplier: number;
}

export const DOG_STAGES: LifeStage[] = [
  { id: 'adult_neutered', label: 'Adult (Neutered / Spayed)', shortLabel: 'Adult Neutered', description: 'Estimated baseline for standard companion', multiplier: 1.6 },
  { id: 'adult_intact', label: 'Adult (Intact)', shortLabel: 'Adult Intact', description: 'Estimated baseline for higher basal metabolic rate', multiplier: 1.8 },
  { id: 'inactive_weight_loss', label: 'Weight Loss / Inactive', shortLabel: 'Weight Loss', description: 'Estimated caloric deficit for gradual slimming', multiplier: 1.0 },
  { id: 'active_working', label: 'High Activity / Working / Agile', shortLabel: 'Active / Athlete', description: 'Estimated baseline for working/agility breeds', multiplier: 2.2 },
  { id: 'puppy_under_4m', label: 'Young Puppy (< 4 Months)', shortLabel: 'Puppy < 4m', description: 'Estimated baseline for rapid skeletal growth', multiplier: 3.0 },
  { id: 'puppy_over_4m', label: 'Adolescent Puppy (4+ Months)', shortLabel: 'Puppy 4-12m', description: 'Estimated baseline for adolescent energy', multiplier: 2.0 },
  { id: 'senior_dog', label: 'Senior Dog (7+ Years)', shortLabel: 'Senior 7+y', description: 'Estimated baseline with joint-conscious moderation', multiplier: 1.2 }
];

export const CAT_STAGES: LifeStage[] = [
  { id: 'cat_adult_neutered', label: 'Adult (Neutered / Indoor)', shortLabel: 'Indoor Neutered', description: 'Estimated baseline for indoor domestic companion', multiplier: 1.2 },
  { id: 'cat_adult_intact', label: 'Adult (Intact)', shortLabel: 'Adult Intact', description: 'Estimated baseline for intact feline maintenance', multiplier: 1.4 },
  { id: 'cat_weight_loss', label: 'Weight Management / Gentle Slim', shortLabel: 'Weight Loss', description: 'Estimated safe deficit avoiding hepatic lipidosis', multiplier: 0.9 },
  { id: 'cat_active_outdoor', label: 'Active Outdoor / Hunter', shortLabel: 'Outdoor Hunter', description: 'Estimated baseline for outdoor territory roaming', multiplier: 1.6 },
  { id: 'kitten', label: 'Kitten (< 1 Year)', shortLabel: 'Kitten < 1y', description: 'Estimated baseline for high-protein kitten growth', multiplier: 2.5 },
  { id: 'cat_senior', label: 'Senior Cat (10+ Years)', shortLabel: 'Senior 10+y', description: 'Estimated baseline with kidney-conscious hydration', multiplier: 1.1 }
];

export interface CalorieCalculations {
  weightInKg: number;
  rer: number;
  mer: number;
  dailyGrams: number;
  dailyCups: string;
  gramsPerMeal: number;
  cupsPerMeal: string;
  dailyWaterMl: number;
}

export function calculatePetCalories(
  weight: number,
  unit: WeightUnit,
  currentStage: LifeStage,
  mealsPerDay: number,
  foodKcalPerCup: number = 375,
  gramsPerCup: number = 105
): CalorieCalculations {
  const weightInKg = unit === 'kg' ? Math.max(0.5, weight) : Math.max(0.5, weight * 0.453592);
  const rer = Math.round(70 * Math.pow(weightInKg, 0.75));
  const mer = Math.round(rer * currentStage.multiplier);

  const safeGramsPerCup = gramsPerCup > 0 ? gramsPerCup : 105;
  const kcalPerGram = foodKcalPerCup / safeGramsPerCup;
  const dailyGrams = Math.round(mer / kcalPerGram);
  const dailyCups = (mer / foodKcalPerCup).toFixed(2);
  const gramsPerMeal = Math.round(dailyGrams / mealsPerDay);
  const cupsPerMeal = (parseFloat(dailyCups) / mealsPerDay).toFixed(2);
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
}

export function useAnimatedNumber(value: number, duration: number = 350) {
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

      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return displayValue;
}
