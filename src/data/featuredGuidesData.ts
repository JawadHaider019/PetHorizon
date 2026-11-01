import { BLOG_POSTS, BlogPost } from './blogData';

export const TOTAL_BLOG_GUIDES_COUNT = BLOG_POSTS.length;

const FEATURED_SLUGS = [
  'dog-feeding-schedule-by-age-puppy-to-adult',
  'puppy-kitten-vaccination-schedule-booster-guide-worldwide',
  'new-puppy-checklist-first-year-budget-guide',
  'cat-feeding-schedule-indoor-enrichment-guide',
  'best-pet-care-apps-medication-reminders-family-sync',
  'pet-insurance-vs-savings-fund-vet-cost-guide'
];

export const FEATURED_BLOG_GUIDES: BlogPost[] = FEATURED_SLUGS
  .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
  .filter((post): post is BlogPost => Boolean(post));
