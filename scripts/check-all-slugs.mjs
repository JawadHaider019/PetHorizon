import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const vite = await createServer({
  root: rootDir,
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
  logLevel: 'silent'
});

const { BLOG_POSTS } = await vite.ssrLoadModule('./src/data/blogData.ts');
const { getFullBlogArticle } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');
await vite.close();

console.log('Total BLOG_POSTS:', BLOG_POSTS.length);
BLOG_POSTS.forEach((post, i) => {
  const full = getFullBlogArticle(post.slug);
  console.log(`[#${i + 1}] ID: ${post.id} | Slug: ${post.slug} | FullArticle: ${full ? 'YES' : 'MISSING'}`);
});
