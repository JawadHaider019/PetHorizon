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
      const absoluteCoverImage = currentArticle.coverImage.startsWith('http')
        ? currentArticle.coverImage
        : `${baseUrl}${currentArticle.coverImage}`;

      document.title = pageTitle;
      updateMetaTag('meta[name="description"]', 'content', pageDesc);
      updateMetaTag('meta[name="keywords"]', 'content', `${currentArticle.tags.join(', ')}, ${currentArticle.seoKeyword}`);
      
      // OpenGraph
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle);
      updateMetaTag('meta[property="og:description"]', 'content', pageDesc);
      updateMetaTag('meta[property="og:image"]', 'content', absoluteCoverImage);
      updateMetaTag('meta[property="og:type"]', 'content', 'article');
      updateMetaTag('meta[property="og:url"]', 'content', articleUrl);
      updateMetaTag('meta[property="og:site_name"]', 'content', 'Pet Horizon');

      // Twitter Cards
      updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDesc);
      updateMetaTag('meta[name="twitter:image"]', 'content', absoluteCoverImage);

      updateCanonical(`/blogs/${currentArticle.slug}`);

      // Generate high-CTR FAQPage schema from article keyTakeaways
      const articleFaqSchema = currentArticle.keyTakeaways && currentArticle.keyTakeaways.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: currentArticle.keyTakeaways.map((takeaway, idx) => {
          const colonIdx = takeaway.indexOf(':');
          const question = colonIdx > 5 && colonIdx < 80 
            ? takeaway.substring(0, colonIdx).trim()
            : idx === 0 
            ? `What is the key takeaway for ${currentArticle.seoKeyword || currentArticle.title}?`
            : idx === 1 
            ? `How often should you follow this routine?`
            : `What is the recommended veterinary guideline for ${currentArticle.category}?`;
          return {
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: takeaway
            }
          };
        })
      } : null;

      // Google E-E-A-T Structured Data Schema (BlogPosting + BreadcrumbList + FAQPage)
      const schemas: object[] = [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: currentArticle.title,
          description: pageDesc,
          image: [currentArticle.coverImage],
          datePublished: currentArticle.publishedAt,
          dateModified: currentArticle.publishedAt,
          author: {
            '@type': currentArticle.author.name.includes('Team') ? 'Organization' : 'Person',
            name: currentArticle.author.name,
            jobTitle: currentArticle.author.role,
            image: currentArticle.author.avatar.startsWith('/')
              ? `${baseUrl}${currentArticle.author.avatar}`
              : currentArticle.author.avatar,
            description: currentArticle.author.bio
          },
          publisher: {
            '@type': 'Organization',
            name: 'Pet Horizon',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/app-icon.png`
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
      ];

      if (articleFaqSchema) {
        schemas.push(articleFaqSchema);
      }

      updateJsonLd('seo-schema-article', schemas);
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
    } else if (viewState.view === 'terms') {
      document.title = 'Terms of Service | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'Read the official terms of service and license agreement for Pet Horizon mobile application and web portal.');
      updateCanonical('/terms-of-service');
    } else if (viewState.view === 'deletion') {
      document.title = 'Data & Account Deletion Instructions | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'How to request complete data and account deletion in PetHorizon.');
      updateCanonical('/data-deletion');
    } else if (viewState.view === 'pet-calorie-calculator') {
      const toolTitle = 'Pet Calorie & Daily Portion Calculator (Dogs & Cats) | PetHorizon';
      const toolDesc = 'Free veterinary-standard pet calorie and daily food portion calculator. Calculate RER, MER, daily grams, and cup measurements for dogs and cats based on WSAVA guidelines.';
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

      updateJsonLd('seo-schema-article', [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'PetHorizon Calorie & Portion Calculator',
          url: toolUrl,
          description: toolDesc,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: toolUrl },
            { '@type': 'ListItem', position: 3, name: 'Pet Calorie Calculator', item: toolUrl }
          ]
        }
      ]);
    } else if (viewState.view === 'pet-age-calculator') {
      const toolTitle = '[AAHA Chart] Pet Age Calculator in Human Years: Dog & Cat Converter | PetHorizon';
      const toolDesc = 'Free veterinary AAHA-standard pet age calculator in human years. Convert dog and cat chronological age to exact biological human years with breed weight scaling, life stage gauges, and health milestones.';
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

      updateJsonLd('seo-schema-article', [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'PetHorizon Pet Age in Human Years Calculator',
          url: toolUrl,
          description: toolDesc,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: toolUrl },
            { '@type': 'ListItem', position: 3, name: 'Pet Age Calculator', item: toolUrl }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is 1 dog year really equal to 7 human years?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. The traditional "multiply by 7" rule is a popular myth that does not match biological science. Puppies reach the human equivalent of a 15-year-old by age one and 24 by age two. After age two, aging speed diverges based on breed size: small dogs age roughly 4 human years per calendar year, while giant breeds can age 8 to 9 human years annually.'
              }
            },
            {
              '@type': 'Question',
              name: 'Why do giant and large dogs age faster than small dogs?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Veterinary research indicates large dogs experience an accelerated growth rate during puppyhood with higher cellular turnover. While small dogs frequently live 15-18 years (human 76-88), giant breeds enter senior status at just 6 years old.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do cats age compared to humans?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'At 1 calendar year, an indoor cat is biologically equivalent to a 15-year-old human. At 2 years, they reach 24 human years. Thereafter, each cat year corresponds to roughly 4 human years.'
              }
            },
            {
              '@type': 'Question',
              name: 'When is a dog or cat officially considered a senior?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cats enter senior status at age 11. For dogs, giant breeds reach senior status around age 6, large breeds around age 7-8, medium dogs around age 8-9, and small breeds around age 10-11.'
              }
            }
          ]
        }
      ]);
    } else if (viewState.view === '404') {
      document.title = '404 Page Not Found | PetHorizon';
      updateMetaTag('meta[name="description"]', 'content', 'The page you were looking for could not be found.');
      updateCanonical('/404');
    } else {
      document.title = `${SITE_CONFIG.name} – ${SITE_CONFIG.tagline}`;
      updateMetaTag('meta[name="description"]', 'content', SITE_CONFIG.description);
      updateCanonical('');
    }

    // Clean up dynamic schema when visiting standard pages without custom JSON-LD
    if (
      viewState.view !== 'blog-article' &&
      viewState.view !== 'blog' &&
      viewState.view !== 'pet-calorie-calculator' &&
      viewState.view !== 'pet-age-calculator'
    ) {
      const dynamicArticleSchema = document.getElementById('seo-schema-article');
      if (dynamicArticleSchema) {
        dynamicArticleSchema.remove();
      }
    }
  }, [viewState, currentArticle]);
}
