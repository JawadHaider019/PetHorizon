import { BlogCategory, BlogPost } from './blogPosts/authors';
import { CORE_AND_LOCAL_POSTS } from './blogPosts/coreAndLocalPosts';
import { CLINICAL_AND_NUTRITION_POSTS } from './blogPosts/clinicalAndNutritionPosts';
import { ROUTINE_AND_SAFETY_POSTS } from './blogPosts/routineAndSafetyPosts';
import { NEW_BLOG_POSTS } from './newBlogPostsData';

export type { BlogCategory, BlogPost };

export const BLOG_POSTS: BlogPost[] = [
  ...CORE_AND_LOCAL_POSTS,
  ...CLINICAL_AND_NUTRITION_POSTS,
  ...ROUTINE_AND_SAFETY_POSTS,
  ...NEW_BLOG_POSTS
];
