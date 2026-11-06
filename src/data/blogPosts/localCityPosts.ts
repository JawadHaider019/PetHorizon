import { AUTHORS, BlogPost } from './authors';

export const LOCAL_CITY_POSTS: BlogPost[] = [
  // 8. Localized Guide: New York
  {
    id: 'post-vax-nyc',
    slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
    title: 'Puppy & Kitten Vaccination Schedule in New York: Vet Booster Timetable',
    excerpt: 'Essential veterinary vaccine requirements for NYC puppies and kittens. Learn rabies mandates for apartment buildings, leptospirosis risks in city parks, and in-app milestone tracking.',
    category: 'Health & Vaccines',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.35&q=85',
    targetLocation: 'New York',
    tags: ['NYC Pets', 'Puppy Vaccination', 'Rabies Mandate', 'Central Park Dogs', 'Pet Horizon'],
    seoKeyword: 'puppy vaccine schedule nyc',
    searchVolume: '4.2K/mo',
    searchRankBadge: 'Local Guide',
    keyTakeaways: [
      'NYC Health Code mandates proof of up-to-date rabies vaccination for all dog licensing and residential co-op leases.',
      'Urban rat populations make Leptospirosis vaccination essential for any dog walking city sidewalks and puddle areas.',
      'PetHorizon generates instant digital certificates accepted by NYC boarding kennels and doggy daycares.'
    ],
    trendingSearches: ['#nyc puppy vaccines', '#dog license rabies nyc', '#leptospirosis dog nyc', '#manhattan vet clinics'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    updatedAt: 'November 6, 2026',
    metaTitle: 'Puppy & Kitten Vaccination Schedule in New York | Pet Horizon',
    metaDescription: 'Complete NYC puppy and kitten vaccination schedule. Learn city rabies mandates, park leptospirosis risks, and track vet booster due dates in Pet Horizon.',
    sourceName: 'NYC Department of Health & Mental Hygiene (Article 161)',
    sourceUrl: 'https://www.nyc.gov/site/doh/health/health-topics/dog-licenses.page',
    relatedProductLinks: [
      { feature: 'Clinical Health Card', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Store NYC Vet Records', icon: 'ShieldCheck' }
    ]
  },

  // 9. Localized Guide: London
  {
    id: 'post-coparent-london',
    slug: 'household-pet-coparenting-feeding-routine-sync-london',
    title: 'Managing Household Pet Routines in London: Eliminating Double-Feeding with PetHorizon',
    excerpt: 'Balancing the London Underground commute and hybrid work weeks? Discover how multi-caregiver London households manage feeding, walking handoffs, and medications with PetHorizon.',
    category: 'Family & Routine',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&h=750&q=85',
    targetLocation: 'London',
    tags: ['London Dogs', 'Pet Routine', 'Tube Commute', 'RCVS Vet', 'Pet Horizon'],
    seoKeyword: 'shared pet care app london',
    searchVolume: '3.1K/mo',
    searchRankBadge: 'Local Guide',
    keyTakeaways: [
      'Staggered commuter schedules in London make manual feeding whiteboards prone to human error.',
      'PetHorizon Family Hub lets partners and flatmates check off tasks with instant push updates across iOS and Android.',
      'Export verified vaccination and microchip passports conforming to UK RCVS veterinary standards.'
    ],
    trendingSearches: ['#london dog co-parenting', '#shared pet calendar uk', '#did you feed the dog app uk', '#london pet routine'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 25, 2026',
    updatedAt: 'November 6, 2026',
    metaTitle: 'London Household Pet Routine Coordination | Pet Horizon',
    metaDescription: 'Coordinate pet care across busy London households. Synchronize dog walks, feeding times, and vet meds between partners and flatmates with Pet Horizon.',
    sourceName: 'UK PDSA Animal Wellbeing (PAW) Report & RCVS Code',
    sourceUrl: 'https://www.pdsa.org.uk/what-we-do/pdsa-animal-wellbeing-report',
    relatedProductLinks: [
      { feature: 'Family Hub QR Sync', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Sync London Family Hub', icon: 'Users' }
    ]
  },

  // 10. Localized Guide: Toronto
  {
    id: 'post-budget-toronto',
    slug: 'monthly-pet-care-cost-vet-expense-budget-toronto',
    title: 'The Real Cost of Owning a Dog or Cat in Toronto: Monthly Expense Breakdown',
    excerpt: 'Detailed financial guide for Toronto pet owners. Learn seasonal tick preventative costs, winter paw care expenses, and how to manage vet budgets with PetHorizon.',
    category: 'Dog Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    targetLocation: 'Toronto',
    tags: ['Toronto Pets', 'Pet Budget Toronto', 'Ontario Vet Costs', 'Pet Horizon'],
    seoKeyword: 'cost of owning a dog in toronto',
    searchVolume: '2.8K/mo',
    searchRankBadge: 'Local Guide',
    keyTakeaways: [
      'Toronto ravine walks require vigilant tick prevention; veterinarians recommend tailored seasonal or year-round coverage based on local exposure.',
      'Salt-treated winter sidewalks require budget allocations for protective boots or paw balms.',
      'PetHorizon Expense Manager tracks receipts in CAD and warns you before exceeding monthly targets.'
    ],
    trendingSearches: ['#toronto pet expenses', '#cost of vet toronto', '#toronto dog budget', '#ontario pet care'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 24, 2026',
    updatedAt: 'November 6, 2026',
    metaTitle: 'Cost of Owning a Pet in Toronto | Pet Horizon Expense Guide',
    metaDescription: 'Realistic monthly dog and cat expense breakdown for Toronto owners. Track food, winter paw care, tick prevention, and OVMA clinic fees in Pet Horizon.',
    sourceName: 'Ontario Veterinary Medical Association (OVMA) Fee Guide',
    sourceUrl: 'https://www.ovma.org/pet-owners/basic-pet-care/',
    relatedProductLinks: [
      { feature: 'Budget & Expense Manager', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Set Toronto Pet Budget', icon: 'DollarSign' }
    ]
  },

  // 11. Localized Guide: Sydney
  {
    id: 'post-trackers-sydney',
    slug: 'best-pet-gps-trackers-health-wearables-review-sydney',
    title: 'Best Pet GPS Trackers & Health Wearables in Sydney: Beach & Bushwalk Testing',
    excerpt: 'Comparative evaluation of dog GPS trackers for Sydney pet owners. Review coastal saltwater resistance, 4G LTE-M coverage, and PetHorizon activity logs.',
    category: 'Dog Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    targetLocation: 'Sydney',
    tags: ['Sydney Dogs', 'GPS Tracker Australia', 'Pet Health Wearable', 'Pet Horizon'],
    seoKeyword: 'best dog gps tracker australia',
    searchVolume: '3.4K/mo',
    searchRankBadge: 'Local Guide',
    keyTakeaways: [
      'Subtropical humidity and coastal beach runs demand IP68 waterproof ratings for any dog tracker.',
      'Wearables cannot replace manual daily paralysis tick searches; year-round veterinary preventatives remain vital across NSW.',
      '4G Telstra/Optus LTE-M coverage provides reliable escape tracking across suburban bushland.'
    ],
    trendingSearches: ['#dog tracker australia', '#sydney pet tech', '#waterproof dog tracker', '#paralysis tick dog alert'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 23, 2026',
    updatedAt: 'November 6, 2026',
    metaTitle: 'Best Pet GPS Trackers in Sydney | Pet Horizon Tech Review',
    metaDescription: 'Review of top pet GPS trackers for Sydney dogs. Tested for coastal saltwater resistance, bushwalk safety, LTE-M coverage, and Pet Horizon activity sync.',
    sourceName: 'Australian Veterinary Association (AVA) Electronic ID Standards',
    sourceUrl: 'https://www.ava.com.au/policy-advocacy/policies/companion-animals-health/microchipping-of-companion-animals/',
    relatedProductLinks: [
      { feature: 'Activity Timeline', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Log Sydney Beach Walks', icon: 'Activity' }
    ]
  }
];
