import type { FullBlogArticle } from './types';

type Loader = () => Promise<FullBlogArticle>;

/**
 * Per-article dynamic imports for the browser bundle. Each file becomes its own chunk,
 * so opening one guide no longer downloads all 39 articles.
 * Keep keys in sync with blog slugs; `npm run seo:check` verifies parity.
 */
export const ARTICLE_LOADERS: Record<string, Loader> = {
  'dog-feeding-schedule-by-age-puppy-to-adult': () => import('./dogFeedingSchedule').then((m) => m.dogFeedingScheduleArticle),
  'puppy-kitten-vaccination-schedule-booster-guide-worldwide': () => import('./vaccinationSchedule').then((m) => m.vaccinationScheduleArticle),
  'pet-health-records-medication-schedule-tracker': () => import('./petHealthRecords').then((m) => m.petHealthRecordsArticle),
  'household-pet-coparenting-feeding-routine-sync-worldwide': () => import('./householdCoParenting').then((m) => m.householdCoParentingArticle),
  'new-puppy-checklist-first-year-budget-guide': () => import('./newPuppyChecklist').then((m) => m.newPuppyChecklistArticle),
  'best-pet-gps-trackers-health-wearables-review-worldwide': () => import('./petTrackersReview').then((m) => m.petTrackersReviewArticle),
  'monthly-pet-care-cost-vet-expense-budget-worldwide': () => import('./monthlyBudgetGuide').then((m) => m.monthlyBudgetGuideArticle),
  'puppy-kitten-vaccination-schedule-booster-guide-new-york': () => import('./localizedCityArticles').then((m) => m.nycVaccinationArticle),
  'household-pet-coparenting-feeding-routine-sync-london': () => import('./localizedCityArticles').then((m) => m.londonCoParentingArticle),
  'monthly-pet-care-cost-vet-expense-budget-toronto': () => import('./localizedCityArticles').then((m) => m.torontoBudgetArticle),
  'best-pet-gps-trackers-health-wearables-review-sydney': () => import('./localizedCityArticles').then((m) => m.sydneyTrackersArticle),
  'feline-kidney-disease-dehydration-cornell': () => import('./catKidney').then((m) => m.catKidneyArticle),
  'emergency-vet-symptoms-red-flags-petmd': () => import('./remainingArticles').then((m) => m.emergencyVetArticle),
  'toxic-foods-dogs-cats-poison-checklist': () => import('./toxicFoods').then((m) => m.toxicFoodsArticle),
  'puppy-potty-training-schedule-akc-guide': () => import('./pottyTraining').then((m) => m.pottyTrainingArticle),
  'flea-tick-heartworm-prevention-ahs-protocol': () => import('./remainingArticles').then((m) => m.heartwormArticle),
  'pet-calorie-calculator-feeding-guide-apop': () => import('./remainingArticles').then((m) => m.petCaloriesArticle),
  'cat-feeding-schedule-indoor-enrichment-guide': () => import('./catFeedingEnrichment').then((m) => m.catFeedingEnrichmentArticle),
  'best-pet-care-apps-medication-reminders-family-sync': () => import('./bestPetCareApps').then((m) => m.bestPetCareAppsArticle),
  'dog-separation-anxiety-training-routine-guide': () => import('./dogSeparationAnxiety').then((m) => m.dogSeparationAnxietyArticle),
  'how-to-introduce-kitten-to-older-cat-guide': () => import('./introducingKittenToCat').then((m) => m.introducingKittenToCatArticle),
  'dog-grooming-at-home-beginners-step-by-step-guide': () => import('./dogGroomingAtHome').then((m) => m.dogGroomingAtHomeArticle),
  'dog-dental-care-brushing-teeth-periodontal-guide': () => import('./dogDentalCare').then((m) => m.dogDentalCareArticle),
  'pet-sitter-instructions-handover-checklist-template': () => import('./petSitterInstructions').then((m) => m.petSitterInstructionsArticle),
  'senior-dog-care-mobility-nutrition-routine-guide': () => import('./seniorDogCare').then((m) => m.seniorDogCareArticle),
  'senior-cat-care-health-diet-comfort-guide': () => import('./seniorCatCare').then((m) => m.seniorCatCareArticle),
  'dog-walking-schedule-by-age-breed-exercise-guide': () => import('./dogWalkingSchedule').then((m) => m.dogWalkingScheduleArticle),
  'cat-litter-box-problems-causes-solutions-guide': () => import('./catLitterBoxProblems').then((m) => m.catLitterBoxProblemsArticle),
  'pet-travel-checklist-flying-car-trips-vet-records': () => import('./petTravelChecklist').then((m) => m.petTravelChecklistArticle),
  'summer-pet-safety-heatstroke-prevention-hot-pavement-guide': () => import('./summerPetSafety').then((m) => m.summerPetSafetyArticle),
  'winter-pet-care-cold-weather-paw-safety-guide': () => import('./winterPetCare').then((m) => m.winterPetCareArticle),
  'multiple-pet-management-multi-dog-cat-household-routines': () => import('./multiplePetManagement').then((m) => m.multiplePetManagementArticle),
  'pet-first-aid-kit-checklist-emergency-preparedness-plan': () => import('./petFirstAidKit').then((m) => m.petFirstAidKitArticle),
  'pet-insurance-vs-savings-fund-vet-cost-guide': () => import('./petInsuranceVsSavings').then((m) => m.petInsuranceVsSavingsArticle),
  'rabbit-feeding-schedule-hay-diet-gi-stasis-guide': () => import('./exoticAndRescueArticles').then((m) => m.rabbitFeedingArticle),
  'parrot-bird-daily-routine-chop-diet-sleep-guide': () => import('./exoticAndRescueArticles').then((m) => m.parrotCareArticle),
  'rescue-dog-3-3-3-rule-decompression-routine-guide': () => import('./exoticAndRescueArticles').then((m) => m.rescueDog333Article),
  'dog-cat-diabetes-insulin-feeding-schedule-guide': () => import('./chronicCareAndIdArticles').then((m) => m.petDiabetesInsulinArticle),
  'pet-microchip-registration-lookup-guide': () => import('./chronicCareAndIdArticles').then((m) => m.petMicrochipGuideArticle)
};

export function loadFullBlogArticle(slug: string): Promise<FullBlogArticle | null> {
  const loader = ARTICLE_LOADERS[slug];
  if (!loader) return Promise.resolve(null);
  return loader().catch((err: unknown) => {
    const errorMsg = (err as Error)?.message || '';
    const isChunkError = /dynamically imported module|failed to fetch/i.test(errorMsg);
    if (isChunkError && typeof window !== 'undefined') {
      const hasReloaded = sessionStorage.getItem('chunk_article_reloaded');
      if (!hasReloaded) {
        sessionStorage.setItem('chunk_article_reloaded', 'true');
        window.location.reload();
        return new Promise<FullBlogArticle | null>(() => {});
      }
    }
    throw err;
  });
}

