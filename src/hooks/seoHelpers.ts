import { BlogPost } from '../data/blogData';
import { SITE_CONFIG } from '../config/siteConfig';

export function updateMetaTag(selector: string, attr: string, value: string): void {
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
}

export function updateCanonical(path: string): void {
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', `${SITE_CONFIG.url}${path}`);
}

export function updateJsonLd(id: string, data: object | object[]): void {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function buildArticleSchemas(article: BlogPost, baseUrl: string, pageDesc: string, articleUrl: string): object[] {
  const isoPublished = !Number.isNaN(Date.parse(article.publishedAt))
    ? new Date(article.publishedAt).toISOString()
    : '2026-10-26T00:00:00.000Z';
  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: pageDesc,
      image: [article.coverImage],
      datePublished: isoPublished,
      dateModified: isoPublished,
      author: {
        '@type': article.author.name.includes('Team') ? 'Organization' : 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
        image: article.author.avatar.startsWith('/')
          ? `${baseUrl}${article.author.avatar}`
          : article.author.avatar,
        description: article.author.bio
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pet Horizon',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/favicon-512x512.png`,
          width: 512,
          height: 512
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleUrl
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '#main-content p']
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${baseUrl}/blogs` },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.category,
          item: `${baseUrl}/blogs?category=${encodeURIComponent(article.category)}`
        },
        { '@type': 'ListItem', position: 4, name: article.title, item: articleUrl }
      ]
    }
  ];

  if (article.keyTakeaways && article.keyTakeaways.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${article.title} — Clinical Checklist & Key Steps`,
      itemListElement: article.keyTakeaways.map((takeaway, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: takeaway
      }))
    });

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.keyTakeaways.map((takeaway, idx) => {
        const colonIdx = takeaway.indexOf(':');
        const question =
          colonIdx > 5 && colonIdx < 80
            ? takeaway.substring(0, colonIdx).trim()
            : idx === 0
            ? `What is the key takeaway for ${article.seoKeyword || article.title}?`
            : idx === 1
            ? 'How often should you follow this routine?'
            : `What is the recommended veterinary guideline for ${article.category}?`;
        return {
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: takeaway }
        };
      })
    });
  }

  return schemas;
}

export function buildCalorieToolSchema(toolUrl: string, toolDesc: string, baseUrl: string): object[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'PetHorizon Calorie & Portion Calculator',
      url: toolUrl,
      description: toolDesc,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
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
  ];
}

export function buildAgeToolSchema(toolUrl: string, toolDesc: string, baseUrl: string): object[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'PetHorizon Pet Age in Human Years Calculator',
      url: toolUrl,
      description: toolDesc,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
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
            text: 'No. Puppies reach the human equivalent of a 15-year-old by age one and 24 by age two. After age two, aging speed diverges based on breed size.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why do giant and large dogs age faster than small dogs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Large dogs experience an accelerated growth rate during puppyhood with higher cellular turnover.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do cats age compared to humans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At 1 calendar year, an indoor cat is biologically equivalent to 15 human years. At 2 years, they reach 24 human years. Thereafter, each cat year corresponds to roughly 4 human years.'
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
  ];
}
