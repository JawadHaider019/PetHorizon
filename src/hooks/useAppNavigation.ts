import { useState, useEffect, useCallback } from 'react';
import { NavView } from '../components/Navbar';
import { BLOG_POSTS } from '../data/blogData';

export type ExtendedAppView = NavView | 'blog-article' | 'changelog' | '404' | 'pet-calorie-calculator' | 'pet-age-calculator';

export interface ViewState {
  view: ExtendedAppView;
  articleSlug: string | null;
}

export const getViewStateFromLocation = (): ViewState => {
  const path = window.location.pathname;
  const lowerPath = path.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // Match /tools/pet-age-calculator or /pet-age-calculator
  if (
    lowerPath === '/tools/pet-age-calculator' ||
    lowerPath === '/tools/pet-age-calculator/' ||
    lowerPath === '/pet-age-calculator' ||
    lowerPath === '/pet-age-calculator/' ||
    lowerPath === '/tools/dog-cat-age-calculator' ||
    hash.includes('age-calculator')
  ) {
    return { view: 'pet-age-calculator', articleSlug: null };
  }

  // Match /tools/pet-calorie-calculator or /pet-calorie-calculator
  if (
    lowerPath === '/tools/pet-calorie-calculator' ||
    lowerPath === '/tools/pet-calorie-calculator/' ||
    lowerPath === '/pet-calorie-calculator' ||
    lowerPath === '/pet-calorie-calculator/' ||
    lowerPath === '/tools/calorie-calculator' ||
    hash.includes('calorie-calculator')
  ) {
    return { view: 'pet-calorie-calculator', articleSlug: null };
  }

  // Match /blogs/:slug or /blog/:slug
  const slugMatch = path.match(/^\/blogs?\/([a-zA-Z0-9-]+)/i);
  if (slugMatch) {
    const slug = slugMatch[1].toLowerCase();
    const exists = BLOG_POSTS.some((p) => p.slug === slug);
    if (exists || slug.length > 3) {
      return { view: 'blog-article', articleSlug: slug };
    }
  }

  if (lowerPath === '/changelog' || lowerPath === '/changelog/' || hash.includes('changelog')) {
    return { view: 'changelog', articleSlug: null };
  }
  if (
    lowerPath === '/blogs' ||
    lowerPath === '/blogs/' ||
    lowerPath === '/blog' ||
    lowerPath === '/blog/' ||
    hash.includes('blogs') ||
    hash.includes('blog')
  ) {
    return { view: 'blog', articleSlug: null };
  }
  if (lowerPath.includes('privacy') || hash.includes('privacy')) {
    return { view: 'privacy', articleSlug: null };
  }
  if (lowerPath.includes('terms') || hash.includes('terms')) {
    return { view: 'terms', articleSlug: null };
  }
  if (
    lowerPath.includes('deletion') ||
    hash.includes('deletion') ||
    lowerPath.includes('delete') ||
    hash.includes('delete')
  ) {
    return { view: 'deletion', articleSlug: null };
  }

  // Root or home
  if (lowerPath === '/' || lowerPath === '') {
    return { view: 'home', articleSlug: null };
  }

  // Unknown route
  return { view: '404', articleSlug: null };
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

  const navigateTo = useCallback((to: ExtendedAppView | 'terms', hash?: string) => {
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
    } else if (to === 'changelog') {
      window.history.pushState({}, '', '/changelog');
      setViewState({ view: 'changelog', articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (to === '404') {
      window.history.pushState({}, '', '/404');
      setViewState({ view: '404', articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (to === 'pet-calorie-calculator') {
      window.history.pushState({}, '', '/tools/pet-calorie-calculator');
      setViewState({ view: 'pet-calorie-calculator', articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (to === 'pet-age-calculator') {
      window.history.pushState({}, '', '/tools/pet-age-calculator');
      setViewState({ view: 'pet-age-calculator', articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const slug =
        to === 'blog'
          ? 'blogs'
          : to === 'privacy'
          ? 'privacy-policy'
          : to === 'terms'
          ? 'terms-of-service'
          : 'data-deletion';
      window.history.pushState({}, '', `/${slug}`);
      setViewState({ view: to as ExtendedAppView, articleSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToArticle = useCallback((slug: string) => {
    window.history.pushState({}, '', `/blogs/${slug}`);
    setViewState({ view: 'blog-article', articleSlug: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { viewState, navigateTo, navigateToArticle };
}
