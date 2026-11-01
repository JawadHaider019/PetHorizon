import { BlogPost } from './authors';
import { CORE_POSTS } from './corePosts';
import { LOCAL_CITY_POSTS } from './localCityPosts';

export { CORE_POSTS, LOCAL_CITY_POSTS };

export const CORE_AND_LOCAL_POSTS: BlogPost[] = [
  ...CORE_POSTS,
  ...LOCAL_CITY_POSTS
];
