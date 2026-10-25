import { useState, useEffect, useCallback } from 'react';
import { NavView } from '../components/Navbar';
import { BLOG_POSTS } from '../data/blogData';

export type ExtendedAppView = NavView | 'blog-article';

export interface ViewState {
  view: ExtendedAppView;
  articleSlug: string | null;
}

export const getViewStateFromLocation = (): ViewState => {
  const path = window.location.pathname;
  const lowerPath = path.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  const slugMatch = path.match(/^\/blog\/([a-zA-Z0-9-]+)/);
  if (slugMatch) {
    const slug = slugMatch[1];
    const exists = BLOG_POSTS.some((p) => p.slug === slug);
    if (exists) {
      return { view: 'blog-article', articleSlug: slug };
    }
  }

  if (lowerPath === '/blog' || lowerPath === '/blog/' || hash.includes('blog')) {
    return { view: 'blog', articleSlug: null };
  }
  if (lowerPath.includes('privacy') || hash.includes('privacy')) {
    return { view: 'privacy', articleSlug: null };
  }
  if (lowerPath.includes('terms') || hash.includes('terms')) {
    return { view: 'privacy', articleSlug: null };
  }
  if (
    lowerPath.includes('deletion') ||
    hash.includes('deletion') ||
    lowerPath.includes('delete') ||
    hash.includes('delete')
  ) {
    return { view: 'deletion', articleSlug: null };
  }
  return { view: 'home', articleSlug: null };
};

export function useAppNavigation() {
  const [viewState, setViewState] = useState<ViewState>(getViewStateFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      setViewState(getViewStateFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = useCallback((to: NavView, hash?: string) => {
    if (to === 'home') {
      window.history.pushState({}, '', hash ? `/${hash}` : '/');
      setViewState({ view: 'home', articleSlug: null });
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const slug =
        to === 'blog'
          ? 'blog'
          : to === 'privacy' || (to as string) === 'terms'
          ? 'privacy-policy'
          : 'data-deletion';
      window.history.pushState({}, '', `/${slug}`);
      setViewState({ view: to === 'terms' ? 'privacy' : to, articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToArticle = useCallback((slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    setViewState({ view: 'blog-article', articleSlug: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { viewState, navigateTo, navigateToArticle };
}
