import { BlogPost } from './authors';
import { ROUTINE_POSTS } from './routinePosts';
import { SAFETY_POSTS } from './safetyPosts';

export { ROUTINE_POSTS } from './routinePosts';
export { SAFETY_POSTS } from './safetyPosts';

export const ROUTINE_AND_SAFETY_POSTS: BlogPost[] = [
  ...ROUTINE_POSTS,
  ...SAFETY_POSTS
];
