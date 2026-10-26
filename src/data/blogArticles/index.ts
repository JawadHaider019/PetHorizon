import { FullBlogArticle } from './types';
import { vaccinationScheduleArticle } from './vaccinationSchedule';
import { householdCoParentingArticle } from './householdCoParenting';
import { petTrackersReviewArticle } from './petTrackersReview';
import { monthlyBudgetGuideArticle } from './monthlyBudgetGuide';

export * from './types';

const ARTICLES_MAP: Record<string, FullBlogArticle> = {
  [vaccinationScheduleArticle.slug]: vaccinationScheduleArticle,
  [householdCoParentingArticle.slug]: householdCoParentingArticle,
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

  // Handle localized pSEO slug resolution
  if (slug.includes('vaccination-schedule') || slug.includes('booster-guide')) {
    return { ...vaccinationScheduleArticle, slug };
  }
  if (slug.includes('coparenting') || slug.includes('feeding-routine')) {
    return { ...householdCoParentingArticle, slug };
  }
  if (slug.includes('trackers') || slug.includes('wearables')) {
    return { ...petTrackersReviewArticle, slug };
  }
  if (slug.includes('cost') || slug.includes('budget') || slug.includes('expense')) {
    return { ...monthlyBudgetGuideArticle, slug };
  }

  return null;
}
