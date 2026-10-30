export type BlogCategory =
  | 'Dog Care'
  | 'Cat Care'
  | 'Feeding & Nutrition'
  | 'Health & Vaccines'
  | 'Family & Routine';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  targetLocation: string;
  tags: string[];
  seoKeyword: string;
  searchVolume: string;
  searchRankBadge: string;
  keyTakeaways: string[];
  trendingSearches: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  relatedProductLinks?: {
    feature: string;
    url: string;
    ctaText: string;
    icon?: string;
  }[];
}

export const AUTHORS = {
  editorial: {
    name: 'Pet Horizon Editorial Team',
    role: 'Pet Care & Veterinary Research Desk',
    avatar: '/app-icon.png',
    bio: 'Researched by animal care specialists referencing peer-reviewed clinical guidelines from the AVMA, AAHA, and WSAVA.'
  },
  careTeam: {
    name: 'Pet Horizon Care Team',
    role: 'Household Routine & Tech Specialists',
    avatar: '/app-icon.png',
    bio: 'Dedicated to helping multi-caregiver households coordinate daily pet routines, medications, and preventive care.'
  }
};

