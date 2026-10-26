import { FullBlogArticle } from './types';
import { toxicFoodsArticle } from './toxicFoods';
import { pottyTrainingArticle } from './pottyTraining';
import { catKidneyArticle } from './catKidney';
import {
  emergencyVetArticle,
  heartwormArticle,
  petCaloriesArticle
} from './remainingArticles';

export * from './types';

const ARTICLES_MAP: Record<string, FullBlogArticle> = {
  [toxicFoodsArticle.slug]: toxicFoodsArticle,
  [pottyTrainingArticle.slug]: pottyTrainingArticle,
  [catKidneyArticle.slug]: catKidneyArticle,
  [emergencyVetArticle.slug]: emergencyVetArticle,
  [heartwormArticle.slug]: heartwormArticle,
  [petCaloriesArticle.slug]: petCaloriesArticle
};

export function getFullBlogArticle(slug: string): FullBlogArticle | null {
  return ARTICLES_MAP[slug] || null;
}
