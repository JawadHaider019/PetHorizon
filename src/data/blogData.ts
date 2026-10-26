export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Customer Guide' | 'Product Reviews' | 'Pet Care Tips' | 'Local Vet & Supplies' | 'Shopping Tips';
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

const AUTHORS = {
  sarah: {
    name: 'Dr. Sarah Jenkins, DVM',
    role: 'Chief Veterinary Reviewer',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&auto=format&fit=crop&q=80',
    bio: 'Licensed small animal veterinarian with 12+ years in emergency and preventive medicine. Former AVMA Clinical Fellow.'
  },
  alex: {
    name: 'Alex Mercer',
    role: 'Pet Care & Technology Editor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    bio: 'Investigative writer and animal behavior technologist focused on simplifying daily pet routines and household coordination systems.'
  }
};

export const BLOG_POSTS: BlogPost[] = [
  // 1. Flagship Vaccination Guide (Global)
  {
    id: 'post-vax-global',
    slug: 'puppy-kitten-vaccination-schedule-booster-guide-worldwide',
    title: 'Puppy & Kitten Vaccination Schedule: Core Booster Timetable & In-App Milestones',
    excerpt: 'Complete veterinary-verified vaccination guide for puppies and kittens. Learn exact timing for DHPP, Rabies, Leptospirosis, and how to digitize your pet’s health passport with PetHorizon.',
    category: 'Customer Guide',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&auto=format&fit=crop&q=80',
    featured: true,
    targetLocation: 'Global',
    tags: ['Puppy Vaccination', 'Cat Health', 'Rabies Booster', 'Vet Schedule', 'Pet Horizon'],
    seoKeyword: 'puppy vaccination schedule',
    searchVolume: '185K/mo',
    searchRankBadge: '🔥 #1 Search Query',
    keyTakeaways: [
      'Maternal antibodies decline between 6 to 16 weeks of age, leaving puppies vulnerable to parvovirus and distemper.',
      'Core puppy vaccines (DHPP/DA2PP) must be administered every 3-4 weeks until at least 16 weeks old.',
      'Universal veterinary standards established by the AVMA, WSAVA, and RCVS dictate mandatory rabies immunizations.',
      'PetHorizon automatically syncs upcoming booster due dates and lets you export a digital vaccination certificate for boarding.'
    ],
    trendingSearches: ['#puppy vaccination schedule', '#rabies shot timeline', '#core puppy boosters', '#pet vaccination global', '#digital pet health card'],
    author: AUTHORS.sarah,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Puppy & Kitten Vaccination Schedule | PetHorizon Vet Guide',
    metaDescription: 'Essential puppy and kitten vaccine timetable. Understand core vs. non-core boosters, clinic protocols, and track all shots automatically in the PetHorizon app.',
    relatedProductLinks: [
      { feature: 'Clinical Health Card & Milestone Tracker', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Track Vaccines on PetHorizon', icon: 'ShieldCheck' },
      { feature: 'Family QR Record Sharing', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Share Passport with Vet', icon: 'QrCode' }
    ]
  },

  // 2. Flagship Household Co-Parenting (Global)
  {
    id: 'post-coparent-global',
    slug: 'household-pet-coparenting-feeding-routine-sync-worldwide',
    title: 'Household Pet Co-Parenting: How to Prevent Double-Feeding and Missed Meds',
    excerpt: 'Living in a busy household often leads to pets being fed twice or missing their medications. Discover how to coordinate feeding routines, walks, and care handoffs seamlessly with PetHorizon.',
    category: 'Customer Guide',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1200&auto=format&fit=crop&q=80',
    featured: true,
    targetLocation: 'Global',
    tags: ['Pet Routine', 'Family Pet Care', 'Feeding Schedule', 'Medicine Tracker', 'Pet Horizon'],
    seoKeyword: 'did you feed the dog app',
    searchVolume: '92K/mo',
    searchRankBadge: '⭐ Trending Routine',
    keyTakeaways: [
      'Overfeeding caused by miscommunication between household members is a leading contributor to canine obesity.',
      'Delayed or missed medications can cause therapeutic failure for pets managing diabetes, thyroid disorders, or epilepsy.',
      'Modern hybrid work schedules make real-time routine synchronization indispensable.',
      'PetHorizon Family Hub lets multiple caregivers log feedings, walks, and medications with instant live status updates.'
    ],
    trendingSearches: ['#did you feed the dog', '#multi owner pet app', '#pet medicine reminder', '#shared pet calendar', '#pet family hub'],
    author: AUTHORS.alex,
    publishedAt: 'October 25, 2026',
    metaTitle: 'Household Pet Co-Parenting Guide | PetHorizon',
    metaDescription: 'Stop asking "did you feed the dog?" Coordinate daily pet tasks across partners, roommates, and family members with PetHorizon’s instant QR household sync.',
    relatedProductLinks: [
      { feature: 'Family Hub & Instant QR Code Sync', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Sync Your Family on PetHorizon', icon: 'Users' },
      { feature: 'Daily Routine Timeline', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'View Routine Tracker', icon: 'Clock' }
    ]
  },

  // 3. Flagship Pet Trackers & Wearables Review (Global)
  {
    id: 'post-trackers-global',
    slug: 'best-pet-gps-trackers-health-wearables-review-worldwide',
    title: 'Best Pet GPS Trackers & Health Wearables: Comprehensive Hands-On Review',
    excerpt: 'Detailed review of the top GPS dog trackers and health wearables. Compare cellular battery longevity, waterproof ratings, escape alerts, and how to pair wearable data with PetHorizon health records.',
    category: 'Product Reviews',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200&auto=format&fit=crop&q=80',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Tech', 'GPS Tracker', 'Dog Wearable', 'Smart Collar', 'Product Review'],
    seoKeyword: 'best pet gps tracker review',
    searchVolume: '110K/mo',
    searchRankBadge: '⚡ Top Tech Guide',
    keyTakeaways: [
      'Dedicated LTE/GPS pet trackers drastically outperform Bluetooth tags (like AirTags) in open parks and suburban areas.',
      'Battery longevity ranges from 4 days to 4 weeks depending on refresh intervals and cellular power draw.',
      'Wearable activity data is most valuable when paired with PetHorizon to spot subtle lethargy or health declines early.'
    ],
    trendingSearches: ['#best dog gps tracker', '#pet health wearable review', '#airtag vs dog tracker', '#smart pet collar', '#activity tracker for dogs'],
    author: AUTHORS.alex,
    publishedAt: 'October 24, 2026',
    metaTitle: 'Best Pet GPS Trackers & Wearables | PetHorizon Tech Review',
    metaDescription: 'Discover the top-rated pet GPS trackers and health wearables. Honest testing of battery, accuracy, and seamless integration with PetHorizon medical records.',
    relatedProductLinks: [
      { feature: 'Activity & Routine Timeline', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Track Daily Pet Activity', icon: 'Activity' },
      { feature: 'Weight Growth & Vitals Chart', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Monitor Weight with PetHorizon', icon: 'TrendingUp' }
    ]
  },

  // 4. Flagship Monthly Pet Cost & Budget (Global)
  {
    id: 'post-budget-global',
    slug: 'monthly-pet-care-cost-vet-expense-budget-worldwide',
    title: 'The Real Cost of Owning a Dog or Cat: Monthly Expenses & Vet Cost Guide',
    excerpt: 'How much does pet ownership actually cost? Get a transparent breakdown of premium nutrition, routine veterinary checkups, dental cleanings, and emergency reserves.',
    category: 'Shopping Tips',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=1200&auto=format&fit=crop&q=80',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Budget', 'Vet Costs', 'Pet Insurance', 'Dog Expenses', 'Expense Tracker'],
    seoKeyword: 'monthly cost of owning a dog',
    searchVolume: '140K/mo',
    searchRankBadge: '💰 Financial Guide',
    keyTakeaways: [
      'First-year puppy and kitten expenses average 2 to 3 times the recurring cost of an adult pet due to initial vaccines, spay/neuter, and supplies.',
      'Routine preventive veterinary care (vaccines, parasite prevention, annual bloodwork) saves thousands in avoided emergency procedures.',
      'PetHorizon Budget & Expense Manager lets you categorize recurring pet costs and set monthly threshold alerts.'
    ],
    trendingSearches: ['#cost of owning a dog', '#monthly pet budget', '#vet bill cost breakdown', '#pet expense tracker app', '#affordable pet care'],
    author: AUTHORS.sarah,
    publishedAt: 'October 23, 2026',
    metaTitle: 'Real Cost of Pet Ownership | PetHorizon Budget Guide',
    metaDescription: 'Discover true monthly and annual pet expenses for dogs and cats. Learn how to budget food, preventive veterinary care, and track spending in the PetHorizon app.',
    relatedProductLinks: [
      { feature: 'Expense & Budget Manager', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Track Pet Expenses in PetHorizon', icon: 'DollarSign' },
      { feature: 'Preventive Care Scheduler', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Schedule Routine Vet Care', icon: 'Calendar' }
    ]
  },

  // 5. Localized pSEO: New York
  {
    id: 'post-vax-nyc',
    slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
    title: 'Puppy & Kitten Vaccination Schedule in New York: Vet Booster Timetable',
    excerpt: 'Essential veterinary vaccine requirements for NYC puppies and kittens. Learn rabies mandates for apartment buildings, leptospirosis risks in city parks, and in-app milestone tracking.',
    category: 'Local Vet & Supplies',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&auto=format&fit=crop&q=80',
    targetLocation: 'New York',
    tags: ['NYC Pets', 'Puppy Vaccination', 'Rabies Mandate', 'Central Park Dogs', 'Pet Horizon'],
    seoKeyword: 'puppy vaccine schedule nyc',
    searchVolume: '32K/mo',
    searchRankBadge: '📍 Local High Rank',
    keyTakeaways: [
      'NYC Health Code mandates proof of up-to-date rabies vaccination for all dog licensing and residential co-op leases.',
      'Urban rat populations make Leptospirosis vaccination essential for any dog walking city sidewalks and puddle areas.',
      'PetHorizon generates instant digital certificates accepted by NYC boarding kennels and doggy daycares.'
    ],
    trendingSearches: ['#nyc puppy vaccines', '#dog license rabies nyc', '#leptospirosis dog nyc', '#manhattan vet clinics'],
    author: AUTHORS.sarah,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Puppy & Kitten Vaccination Schedule in New York | PetHorizon',
    metaDescription: 'Complete NYC puppy vaccination timetable. Understand local rabies and lepto rules, and organize your pet’s records in PetHorizon.',
    relatedProductLinks: [
      { feature: 'Clinical Health Card', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Store NYC Vet Records', icon: 'ShieldCheck' }
    ]
  },

  // 6. Localized pSEO: London
  {
    id: 'post-coparent-london',
    slug: 'household-pet-coparenting-feeding-routine-sync-london',
    title: 'Managing Household Pet Routines in London: Eliminating Double-Feeding with PetHorizon',
    excerpt: 'Balancing the London Underground commute and hybrid work weeks? Discover how multi-caregiver London households manage feeding, walking handoffs, and medications with PetHorizon.',
    category: 'Customer Guide',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop&q=80',
    targetLocation: 'London',
    tags: ['London Dogs', 'Pet Routine', 'Tube Commute', 'RCVS Vet', 'Pet Horizon'],
    seoKeyword: 'shared pet care app london',
    searchVolume: '28K/mo',
    searchRankBadge: '📍 Local High Rank',
    keyTakeaways: [
      'Staggered commuter schedules in London make manual feeding whiteboards prone to human error.',
      'PetHorizon Family Hub lets partners and flatmates check off tasks with instant push updates across iOS and Android.',
      'Export verified vaccination and microchip passports conforming to UK RCVS veterinary standards.'
    ],
    trendingSearches: ['#london dog co-parenting', '#shared pet calendar uk', '#did you feed the dog app uk', '#london pet routine'],
    author: AUTHORS.alex,
    publishedAt: 'October 25, 2026',
    metaTitle: 'London Household Pet Routine Coordination | PetHorizon',
    metaDescription: 'Eliminate double-feeding in London homes. Coordinate dog walks, meals, and vet appointments across partners and flatmates.',
    relatedProductLinks: [
      { feature: 'Family Hub QR Sync', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Sync London Family Hub', icon: 'Users' }
    ]
  },

  // 7. Localized pSEO: Toronto
  {
    id: 'post-budget-toronto',
    slug: 'monthly-pet-care-cost-vet-expense-budget-toronto',
    title: 'The Real Cost of Owning a Dog or Cat in Toronto: Monthly Expense Breakdown',
    excerpt: 'Detailed financial guide for Toronto pet owners. Learn seasonal tick preventative costs, winter paw care expenses, and how to manage vet budgets with PetHorizon.',
    category: 'Shopping Tips',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?w=1200&auto=format&fit=crop&q=80',
    targetLocation: 'Toronto',
    tags: ['Toronto Pets', 'Pet Budget Toronto', 'Ontario Vet Costs', 'Pet Horizon'],
    seoKeyword: 'cost of owning a dog in toronto',
    searchVolume: '22K/mo',
    searchRankBadge: '📍 Local High Rank',
    keyTakeaways: [
      'Toronto ravine walks require consistent 9-to-12-month tick prevention to guard against Lyme disease.',
      'Salt-treated winter sidewalks require budget allocations for protective boots or paw balms.',
      'PetHorizon Expense Manager tracks receipts in CAD and warns you before exceeding monthly targets.'
    ],
    trendingSearches: ['#toronto pet expenses', '#cost of vet toronto', '#toronto dog budget', '#ontario pet care'],
    author: AUTHORS.sarah,
    publishedAt: 'October 24, 2026',
    metaTitle: 'Cost of Owning a Pet in Toronto | PetHorizon Expense Guide',
    metaDescription: 'Breakdown of monthly dog and cat costs in Toronto. Track nutrition, tick preventives, and vet bills in PetHorizon.',
    relatedProductLinks: [
      { feature: 'Budget & Expense Manager', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Set Toronto Pet Budget', icon: 'DollarSign' }
    ]
  },

  // 8. Localized pSEO: Sydney
  {
    id: 'post-trackers-sydney',
    slug: 'best-pet-gps-trackers-health-wearables-review-sydney',
    title: 'Best Pet GPS Trackers & Health Wearables in Sydney: Beach & Bushwalk Testing',
    excerpt: 'Hands-on evaluation of dog GPS trackers for Sydney pet owners. We test coastal saltwater resistance, paralysis tick monitoring, and PetHorizon activity logs.',
    category: 'Product Reviews',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&auto=format&fit=crop&q=80',
    targetLocation: 'Sydney',
    tags: ['Sydney Dogs', 'GPS Tracker Australia', 'Pet Health Wearable', 'Pet Horizon'],
    seoKeyword: 'best dog gps tracker australia',
    searchVolume: '26K/mo',
    searchRankBadge: '📍 Local High Rank',
    keyTakeaways: [
      'Subtropical humidity and coastal beach runs demand IP68 waterproof ratings for any dog tracker.',
      'Pairing daily activity data with PetHorizon helps Australian pet parents spot early lethargy caused by paralysis ticks.',
      '4G Telstra/Optus LTE-M coverage provides reliable escape tracking across suburban bushland.'
    ],
    trendingSearches: ['#dog tracker australia', '#sydney pet tech', '#waterproof dog tracker', '#paralysis tick dog alert'],
    author: AUTHORS.alex,
    publishedAt: 'October 23, 2026',
    metaTitle: 'Best Pet GPS Trackers in Sydney | PetHorizon Tech Review',
    metaDescription: 'Top dog GPS trackers reviewed for Sydney conditions. Waterproofing, bushwalk safety, and PetHorizon activity record integration.',
    relatedProductLinks: [
      { feature: 'Activity Timeline', url: 'https://play.google.com/store/apps/details?id=com.enscyd.pethorizon', ctaText: 'Log Sydney Beach Walks', icon: 'Activity' }
    ]
  }
];
