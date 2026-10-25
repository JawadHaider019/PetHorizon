import { useEffect } from 'react';
import { ViewState } from './useAppNavigation';
import { BlogPost } from '../data/blogData';
import { SITE_CONFIG } from '../config/siteConfig';

export function usePageSeo(viewState: ViewState, currentArticle: BlogPost | null) {
  useEffect(() => {
    const updateMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propName = selector.match(/property="([^"]+)"/)?.[1];
          if (propName) el.setAttribute('property', propName);
        } else if (selector.includes('name=')) {
          const nameValue = selector.match(/name="([^"]+)"/)?.[1];
          if (nameValue) el.setAttribute('name', nameValue);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const updateCanonical = (path: string) => {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', `${SITE_CONFIG.url}${path}`);
    };

    if (viewState.view === 'blog-article' && currentArticle) {
      document.title = `${currentArticle.title} | Pet Horizon Vet Guides`;
      updateMetaTag('meta[name="description"]', 'content', currentArticle.excerpt);
      updateMetaTag('meta[name="keywords"]', 'content', `${currentArticle.tags.join(', ')}, ${currentArticle.seoKeyword}`);
      updateMetaTag('meta[property="og:title"]', 'content', currentArticle.title);
      updateMetaTag('meta[property="og:description"]', 'content', currentArticle.excerpt);
      updateMetaTag('meta[property="og:image"]', 'content', currentArticle.coverImage);
      updateMetaTag('meta[property="og:type"]', 'content', 'article');
      updateCanonical(`/blog/${currentArticle.slug}`);
    } else if (viewState.view === 'blog') {
      document.title = 'Top-Ranked Pet Care & Vet Guides | Pet Horizon Knowledge Hub';
      updateMetaTag('meta[name="description"]', 'content', 'Evidence-based veterinary guides, poison checklists, puppy potty training schedules, and pet nutrition formulas.');
      updateMetaTag('meta[property="og:title"]', 'content', 'Top-Ranked Pet Care & Vet Guides | Pet Horizon');
      updateCanonical('/blog');
    } else if (viewState.view === 'changelog') {
      document.title = 'Changelog & Version Release Notes | Pet Horizon';
      updateMetaTag('meta[name="description"]', 'content', 'Discover the latest releases, features, expense tracking, and improvements across every Pet Horizon app build.');
      updateMetaTag('meta[property="og:title"]', 'content', 'Changelog & Version Release Notes | Pet Horizon');
      updateCanonical('/changelog');
    } else if (viewState.view === 'privacy') {
      document.title = 'Official Privacy Policy | Pet Horizon';
      updateMetaTag('meta[name="description"]', 'content', 'Read the official Pet Horizon privacy policy regarding zero data monetization and encrypted pet records.');
      updateCanonical('/privacy-policy');
    } else if (viewState.view === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | Pet Horizon';
      updateMetaTag('meta[name="description"]', 'content', 'How to request complete data and account deletion in Pet Horizon.');
      updateCanonical('/data-deletion');
    } else if (viewState.view === '404') {
      document.title = '404 Page Not Found | Pet Horizon';
      updateMetaTag('meta[name="description"]', 'content', 'The page you were looking for could not be found.');
      updateCanonical('/404');
    } else {
      document.title = `${SITE_CONFIG.name} – ${SITE_CONFIG.tagline}`;
      updateMetaTag('meta[name="description"]', 'content', SITE_CONFIG.description);
      updateCanonical('');
    }
  }, [viewState, currentArticle]);
}
