import { BlogPost } from './authors';
import { CLINICAL_POSTS } from './clinicalPosts';
import { NUTRITION_AND_ROUTINE_POSTS } from './nutritionAndRoutinePosts';

export { CLINICAL_POSTS } from './clinicalPosts';
export { NUTRITION_AND_ROUTINE_POSTS } from './nutritionAndRoutinePosts';

export const CLINICAL_AND_NUTRITION_POSTS: BlogPost[] = [
  ...CLINICAL_POSTS,
  ...NUTRITION_AND_ROUTINE_POSTS
];
