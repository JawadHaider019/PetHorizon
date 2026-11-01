import { FullBlogArticle } from './types';
import { dogFeedingScheduleArticle } from './dogFeedingSchedule';
import { vaccinationScheduleArticle } from './vaccinationSchedule';
import { petHealthRecordsArticle } from './petHealthRecords';
import { householdCoParentingArticle } from './householdCoParenting';
import { newPuppyChecklistArticle } from './newPuppyChecklist';
import { petTrackersReviewArticle } from './petTrackersReview';
import { monthlyBudgetGuideArticle } from './monthlyBudgetGuide';
import { catKidneyArticle } from './catKidney';
import { emergencyVetArticle, heartwormArticle, petCaloriesArticle } from './remainingArticles';
import { toxicFoodsArticle } from './toxicFoods';
import { pottyTrainingArticle } from './pottyTraining';
import { catFeedingEnrichmentArticle } from './catFeedingEnrichment';
import { bestPetCareAppsArticle } from './bestPetCareApps';
import { dogSeparationAnxietyArticle } from './dogSeparationAnxiety';
import { introducingKittenToCatArticle } from './introducingKittenToCat';
import { dogGroomingAtHomeArticle } from './dogGroomingAtHome';
import { dogDentalCareArticle } from './dogDentalCare';
import { petSitterInstructionsArticle } from './petSitterInstructions';
import { seniorDogCareArticle } from './seniorDogCare';
import { seniorCatCareArticle } from './seniorCatCare';
import { dogWalkingScheduleArticle } from './dogWalkingSchedule';
import { catLitterBoxProblemsArticle } from './catLitterBoxProblems';
import { petTravelChecklistArticle } from './petTravelChecklist';
import { summerPetSafetyArticle } from './summerPetSafety';
import { winterPetCareArticle } from './winterPetCare';
import { multiplePetManagementArticle } from './multiplePetManagement';
import { petFirstAidKitArticle } from './petFirstAidKit';
import { petInsuranceVsSavingsArticle } from './petInsuranceVsSavings';
import {
  nycVaccinationArticle,
  londonCoParentingArticle,
  torontoBudgetArticle,
  sydneyTrackersArticle
} from './localizedCityArticles';
import { rabbitFeedingArticle, parrotCareArticle, rescueDog333Article } from './exoticAndRescueArticles';
import { petDiabetesInsulinArticle, petMicrochipGuideArticle } from './chronicCareAndIdArticles';

export * from './types';

/**
 * Static registry of every full article. Used by build scripts (prerender, llms.txt, seo-check).
 * The browser bundle uses ./loaders.ts instead so each article is code-split.
 */
export const ALL_FULL_ARTICLES: FullBlogArticle[] = [
  dogFeedingScheduleArticle, vaccinationScheduleArticle, petHealthRecordsArticle,
  householdCoParentingArticle, newPuppyChecklistArticle, petTrackersReviewArticle,
  monthlyBudgetGuideArticle, catKidneyArticle, emergencyVetArticle, heartwormArticle,
  petCaloriesArticle, toxicFoodsArticle, pottyTrainingArticle, catFeedingEnrichmentArticle,
  bestPetCareAppsArticle, dogSeparationAnxietyArticle, introducingKittenToCatArticle,
  dogGroomingAtHomeArticle, dogDentalCareArticle, petSitterInstructionsArticle,
  seniorDogCareArticle, seniorCatCareArticle, dogWalkingScheduleArticle,
  catLitterBoxProblemsArticle, petTravelChecklistArticle, summerPetSafetyArticle,
  winterPetCareArticle, multiplePetManagementArticle, petFirstAidKitArticle,
  petInsuranceVsSavingsArticle, nycVaccinationArticle, londonCoParentingArticle,
  torontoBudgetArticle, sydneyTrackersArticle, rabbitFeedingArticle, parrotCareArticle,
  rescueDog333Article, petDiabetesInsulinArticle, petMicrochipGuideArticle
];

const ARTICLES_MAP = new Map(ALL_FULL_ARTICLES.map((a) => [a.slug, a]));

/** Exact-slug lookup only. Unknown slugs return null so callers can render a real 404. */
export function getFullBlogArticle(slug: string): FullBlogArticle | null {
  return ARTICLES_MAP.get(slug) ?? null;
}
