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

    const updateJsonLd = (id: string, data: object | object[]) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    const baseUrl = SITE_CONFIG.url;

    if (viewState.view === 'blog-article' && currentArticle) {
      const pageTitle = currentArticle.metaTitle || `${currentArticle.title} | PetHorizon Guides`;
      const pageDesc = currentArticle.metaDescription || currentArticle.excerpt;
      const articleUrl = `${baseUrl}/blogs/${currentArticle.slug}`;

      document.title = pageTitle;
      updateMetaTag('meta[name="description"]', 'content', pageDesc);
      updateMetaTag('meta[name="keywords"]', 'content', `${currentArticle.tags.join(', ')}, ${currentArticle.seoKeyword}`);
      
      // OpenGraph
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle);
      updateMetaTag('meta[property="og:description"]', 'content', pageDesc);
      updateMetaTag('meta[property="og:image"]', 'content', currentArticle.coverImage);
      updateMetaTag('meta[property="og:type"]', 'content', 'article');
      updateMetaTag('meta[property="og:url"]', 'content', articleUrl);
      updateMetaTag('meta[property="og:site_name"]', 'content', 'PetHorizon');

      // Twitter Cards
      updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDesc);
      updateMetaTag('meta[name="twitter:image"]', 'content', currentArticle.coverImage);

      updateCanonical(`/blogs/${currentArticle.slug}`);

      // Google E-E-A-T Structured Data Schema (BlogPosting + BreadcrumbList)
      updateJsonLd('seo-schema-article', [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: currentArticle.title,
          description: pageDesc,
          image: [currentArticle.coverImage],
          datePublished: currentArticle.publishedAt,
          dateModified: currentArticle.publishedAt,
          author: {
            '@type': 'Person',
            name: currentArticle.author.name,
            jobTitle: currentArticle.author.role,
            image: currentArticle.author.avatar,
            description: currentArticle.author.bio
          },
          publisher: {
            '@type': 'Organization',
            name: 'PetHorizon',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/favicon.ico`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${baseUrl}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blogs',
              item: `${baseUrl}/blogs`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: currentArticle.category,
              item: `${baseUrl}/blogs?category=${encodeURIComponent(currentArticle.category)}`
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: currentArticle.title,
              item: articleUrl
            }
          ]
        }
      ]);
    } else if (viewState.view === 'blog') {
      const blogTitle = 'PetHorizon Blog — Evidence-Based Pet Care & Health Guides';
      const blogDesc = 'Guides and tips for pet health, veterinary schedules, household co-parenting, and smart budgeting: track vaccines, prevent double-feeding, and care for your pets with PetHorizon.';

      document.title = blogTitle;
      updateMetaTag('meta[name="description"]', 'content', blogDesc);
      updateMetaTag('meta[property="og:title"]', 'content', blogTitle);
      updateMetaTag('meta[property="og:description"]', 'content', blogDesc);
      updateMetaTag('meta[property="og:type"]', 'content', 'website');
      updateMetaTag('meta[property="og:url"]', 'content', `${baseUrl}/blogs`);
      updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMetaTag('meta[name="twitter:title"]', 'content', blogTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', blogDesc);
      updateCanonical('/blogs');

      updateJsonLd('seo-schema-article', [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'PetHorizon Blog',
          url: `${baseUrl}/blogs`,
          description: blogDesc
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${baseUrl}/blogs` }
          ]
        }
      ]);
    } else if (viewState.view === 'changelog') {
      document.title = 'Changelog & Version Release Notes | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'Discover the latest releases, features, expense tracking, and improvements across every PetHorizon app build.');
      updateMetaTag('meta[property="og:title"]', 'content', 'Changelog & Version Release Notes | PetHorizon');
      updateCanonical('/changelog');
    } else if (viewState.view === 'privacy') {
      document.title = 'Official Privacy Policy | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'Read the official PetHorizon privacy policy regarding zero data monetization and encrypted pet records.');
      updateCanonical('/privacy-policy');
    } else if (viewState.view === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'How to request complete data and account deletion in PetHorizon.');
      updateCanonical('/data-deletion');
    } else if (viewState.view === '404') {
      document.title = '404 Page Not Found | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'The page you were looking for could not be found.');
      updateCanonical('/404');
    } else {
      document.title = `${SITE_CONFIG.name} – ${SITE_CONFIG.tagline}`;
      updateMetaTag('meta[name="description"]', 'content', SITE_CONFIG.description);
      updateCanonical('');
    }
  }, [viewState, currentArticle]);
}
