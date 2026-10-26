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

export * from './types';
export {
  dogFeedingScheduleArticle,
  vaccinationScheduleArticle,
  petHealthRecordsArticle,
  householdCoParentingArticle,
  newPuppyChecklistArticle,
  petTrackersReviewArticle,
  monthlyBudgetGuideArticle,
  catKidneyArticle,
  emergencyVetArticle,
  heartwormArticle,
  petCaloriesArticle,
  toxicFoodsArticle,
  pottyTrainingArticle,
  catFeedingEnrichmentArticle,
  bestPetCareAppsArticle
};

const ARTICLES_MAP: Record<string, FullBlogArticle> = {
  [dogFeedingScheduleArticle.slug]: dogFeedingScheduleArticle,
  [vaccinationScheduleArticle.slug]: vaccinationScheduleArticle,
  [petHealthRecordsArticle.slug]: petHealthRecordsArticle,
  [householdCoParentingArticle.slug]: householdCoParentingArticle,
  [newPuppyChecklistArticle.slug]: newPuppyChecklistArticle,
  [petTrackersReviewArticle.slug]: petTrackersReviewArticle,
  [monthlyBudgetGuideArticle.slug]: monthlyBudgetGuideArticle,
  [catKidneyArticle.slug]: catKidneyArticle,
  [emergencyVetArticle.slug]: emergencyVetArticle,
  [heartwormArticle.slug]: heartwormArticle,
  [petCaloriesArticle.slug]: petCaloriesArticle,
  [toxicFoodsArticle.slug]: toxicFoodsArticle,
  [pottyTrainingArticle.slug]: pottyTrainingArticle,
  [catFeedingEnrichmentArticle.slug]: catFeedingEnrichmentArticle,
  [bestPetCareAppsArticle.slug]: bestPetCareAppsArticle
};

/**
 * Resolves full structured article data by slug, with dynamic fallback for localized pSEO variations
 */
export function getFullBlogArticle(slug: string): FullBlogArticle | null {
  if (ARTICLES_MAP[slug]) {
    return ARTICLES_MAP[slug];
  }

  // Handle fallback / localized slug resolution
  if (slug.includes('feeding-schedule') || slug.includes('dog-feeding')) {
    return { ...dogFeedingScheduleArticle, slug };
  }
  if (slug.includes('vaccination-schedule') || slug.includes('booster-guide') || slug.includes('vaccine')) {
    return { ...vaccinationScheduleArticle, slug };
  }
  if (slug.includes('health-record') || slug.includes('medication-schedule') || slug.includes('medicine')) {
    return { ...petHealthRecordsArticle, slug };
  }
  if (slug.includes('coparenting') || slug.includes('routine-sync')) {
    return { ...householdCoParentingArticle, slug };
  }
  if (slug.includes('puppy-checklist') || slug.includes('budget-guide')) {
    return { ...newPuppyChecklistArticle, slug };
  }
  if (slug.includes('trackers') || slug.includes('wearables')) {
    return { ...petTrackersReviewArticle, slug };
  }
  if (slug.includes('cost') || slug.includes('budget') || slug.includes('expense')) {
    return { ...monthlyBudgetGuideArticle, slug };
  }
  if (slug.includes('cat-kidney') || slug.includes('feline-kidney') || slug.includes('dehydration')) {
    return { ...catKidneyArticle, slug };
  }
  if (slug.includes('emergency') || slug.includes('red-flags')) {
    return { ...emergencyVetArticle, slug };
  }
  if (slug.includes('heartworm') || slug.includes('flea-tick')) {
    return { ...heartwormArticle, slug };
  }
  if (slug.includes('calorie') || slug.includes('rer')) {
    return { ...petCaloriesArticle, slug };
  }
  if (slug.includes('toxic') || slug.includes('poison')) {
    return { ...toxicFoodsArticle, slug };
  }
  if (slug.includes('potty') || slug.includes('house-training')) {
    return { ...pottyTrainingArticle, slug };
  }
  if (slug.includes('cat-feeding') || slug.includes('enrichment')) {
    return { ...catFeedingEnrichmentArticle, slug };
  }
  if (slug.includes('best-pet-care-apps') || slug.includes('pet-apps')) {
    return { ...bestPetCareAppsArticle, slug };
  }

  return null;
}
