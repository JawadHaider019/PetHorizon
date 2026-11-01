import { useEffect } from 'react';
import { ViewState } from './useAppNavigation';
import { BlogPost } from '../data/blogData';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  clampMetaDescription,
  updateMetaTag,
  updateCanonical,
  updateJsonLd,
  buildArticleSchemas,
  buildCalorieToolSchema,
  buildAgeToolSchema
} from './seoHelpers';

export function usePageSeo(viewState: ViewState, currentArticle: BlogPost | null) {
  useEffect(() => {
    const baseUrl = SITE_CONFIG.url;

    if (viewState.view === 'blog-article' && currentArticle) {
      const pageTitle = currentArticle.metaTitle || `${currentArticle.title} | PetHorizon Guides`;
      const pageDesc = clampMetaDescription(currentArticle.metaDescription || currentArticle.excerpt);
      const articleUrl = `${baseUrl}/blogs/${currentArticle.slug}`;
      const absoluteCoverImage = currentArticle.coverImage.startsWith('http')
        ? currentArticle.coverImage
        : `${baseUrl}${currentArticle.coverImage}`;

      document.title = pageTitle;
      updateMetaTag('meta[name="description"]', 'content', pageDesc);
      updateMetaTag('meta[name="keywords"]', 'content', `${currentArticle.tags.join(', ')}, ${currentArticle.seoKeyword}`);
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle);
      updateMetaTag('meta[property="og:description"]', 'content', pageDesc);
      updateMetaTag('meta[property="og:image"]', 'content', absoluteCoverImage);
      updateMetaTag('meta[property="og:type"]', 'content', 'article');
      updateMetaTag('meta[property="og:url"]', 'content', articleUrl);
      updateMetaTag('meta[property="og:site_name"]', 'content', 'Pet Horizon');
      updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDesc);
      updateMetaTag('meta[name="twitter:image"]', 'content', absoluteCoverImage);
      updateCanonical(`/blogs/${currentArticle.slug}`);

      updateJsonLd('seo-schema-article', buildArticleSchemas(currentArticle, baseUrl, pageDesc, articleUrl));
    } else if (viewState.view === 'blog') {
      const blogTitle = 'PetHorizon Blog — Evidence-Based Pet Care & Health Guides';
      const blogDesc = 'Explore veterinary-verified pet care guides for dog and cat owners: daily feeding schedules, vaccination charts, medication alarms, and family routine sync.';

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
      updateMetaTag('meta[name="description"]', 'content', 'Track the latest Pet Horizon app releases, smart medication alarm updates, family QR sync improvements, expense manager features, and version release notes.');
      updateMetaTag('meta[property="og:title"]', 'content', 'Changelog & Version Release Notes | PetHorizon');
      updateCanonical('/changelog');
    } else if (viewState.view === 'privacy') {
      document.title = 'Official Privacy Policy | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'Read the official Pet Horizon privacy policy covering encrypted pet health records, zero third-party data selling, and offline-first household data safety.');
      updateCanonical('/privacy-policy');
    } else if (viewState.view === 'terms') {
      document.title = 'Terms of Service | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'Read the official Pet Horizon terms of service, user license agreement, family hub sharing guidelines, and medical disclaimer for our Android and web app.');
      updateCanonical('/terms-of-service');
    } else if (viewState.view === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'Learn how to request complete account, household hub, and pet health record deletion in Pet Horizon in full compliance with Google Play and GDPR policies.');
      updateCanonical('/data-deletion');
    } else if (viewState.view === 'pet-calorie-calculator') {
      const toolTitle = 'Pet Calorie & Daily Portion Calculator (Dogs & Cats) | PetHorizon';
      const toolDesc = 'Free veterinary pet calorie and daily portion calculator. Calculate RER, MER, daily grams, and cup measurements for dogs and cats using WSAVA standards.';
      const toolUrl = `${baseUrl}/tools/pet-calorie-calculator`;

      document.title = toolTitle;
      updateMetaTag('meta[name="description"]', 'content', toolDesc);
      updateMetaTag('meta[name="keywords"]', 'content', 'pet calorie calculator, dog calorie calculator, cat feeding portion calculator, RER calculator, MER pet calculator, WSAVA dog calories');
      updateMetaTag('meta[property="og:title"]', 'content', toolTitle);
      updateMetaTag('meta[property="og:description"]', 'content', toolDesc);
      updateMetaTag('meta[property="og:type"]', 'content', 'website');
      updateMetaTag('meta[property="og:url"]', 'content', toolUrl);
      updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMetaTag('meta[name="twitter:title"]', 'content', toolTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', toolDesc);
      updateCanonical('/tools/pet-calorie-calculator');

      updateJsonLd('seo-schema-article', buildCalorieToolSchema(toolUrl, toolDesc, baseUrl));
    } else if (viewState.view === 'pet-age-calculator') {
      const toolTitle = '[AAHA Chart] Pet Age Calculator in Human Years: Dog & Cat Converter | PetHorizon';
      const toolDesc = 'Free AAHA pet age calculator in human years. Convert dog and cat chronological age into biological human years with breed weight and life stage charts.';
      const toolUrl = `${baseUrl}/tools/pet-age-calculator`;

      document.title = toolTitle;
      updateMetaTag('meta[name="description"]', 'content', toolDesc);
      updateMetaTag('meta[name="keywords"]', 'content', 'pet age calculator, dog age in human years, cat age calculator, dog age chart by weight, AAHA pet life stages, how old is my dog in human years');
      updateMetaTag('meta[property="og:title"]', 'content', toolTitle);
      updateMetaTag('meta[property="og:description"]', 'content', toolDesc);
      updateMetaTag('meta[property="og:type"]', 'content', 'website');
      updateMetaTag('meta[property="og:url"]', 'content', toolUrl);
      updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMetaTag('meta[name="twitter:title"]', 'content', toolTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', toolDesc);
      updateCanonical('/tools/pet-age-calculator');

      updateJsonLd('seo-schema-article', buildAgeToolSchema(toolUrl, toolDesc, baseUrl));
    } else if (viewState.view === '404') {
      document.title = '404 Page Not Found | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'The page you were looking for could not be found.');
      updateCanonical('/404');
    } else {
      document.title = `${SITE_CONFIG.name} – ${SITE_CONFIG.tagline}`;
      updateMetaTag('meta[name="description"]', 'content', SITE_CONFIG.description);
      updateCanonical('/');
    }

    if (
      viewState.view !== 'blog-article' &&
      viewState.view !== 'blog' &&
      viewState.view !== 'pet-calorie-calculator' &&
      viewState.view !== 'pet-age-calculator'
    ) {
      document.getElementById('seo-schema-article')?.remove();
    }
  }, [viewState, currentArticle]);
}
