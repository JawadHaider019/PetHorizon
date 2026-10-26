import { FullBlogArticle } from './types';
import { dogFeedingScheduleArticle } from './dogFeedingSchedule';
import { vaccinationScheduleArticle } from './vaccinationSchedule';
import { petHealthRecordsArticle } from './petHealthRecords';
import { householdCoParentingArticle } from './householdCoParenting';
import { newPuppyChecklistArticle } from './newPuppyChecklist';
import { petTrackersReviewArticle } from './petTrackersReview';
import { monthlyBudgetGuideArticle } from './monthlyBudgetGuide';

export * from './types';
export {
  dogFeedingScheduleArticle,
  vaccinationScheduleArticle,
  petHealthRecordsArticle,
  householdCoParentingArticle,
  newPuppyChecklistArticle,
  petTrackersReviewArticle,
  monthlyBudgetGuideArticle
};

const ARTICLES_MAP: Record<string, FullBlogArticle> = {
  [dogFeedingScheduleArticle.slug]: dogFeedingScheduleArticle,
  [vaccinationScheduleArticle.slug]: vaccinationScheduleArticle,
  [petHealthRecordsArticle.slug]: petHealthRecordsArticle,
  [householdCoParentingArticle.slug]: householdCoParentingArticle,
  [newPuppyChecklistArticle.slug]: newPuppyChecklistArticle,
  [petTrackersReviewArticle.slug]: petTrackersReviewArticle,
  [monthlyBudgetGuideArticle.slug]: monthlyBudgetGuideArticle
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

  return null;
}
