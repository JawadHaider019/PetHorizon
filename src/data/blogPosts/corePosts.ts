import { AUTHORS, BlogPost } from './authors';

export const CORE_POSTS: BlogPost[] = [
  // 1. Pillar: Dog Feeding Schedule by Age
  {
    id: 'post-dog-feeding',
    slug: 'dog-feeding-schedule-by-age-puppy-to-adult',
    title: 'Dog Feeding Schedule by Age: Complete Puppy to Adult Portion & Routine Guide',
    excerpt: 'How often should you feed your dog? Discover veterinary-backed daily feeding schedules, Resting Energy Requirement (RER) calculations, bloat prevention tips, and in-app routine tracking.',
    category: 'Feeding & Nutrition',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&h=750&crop=focalpoint&fp-y=0.5&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['Dog Feeding Schedule', 'Puppy Nutrition', 'RER Formula', 'Kibble Transition', 'Pet Horizon'],
    seoKeyword: 'dog feeding schedule',
    searchVolume: '32K/mo',
    searchRankBadge: '#1 Nutrition Query',
    keyTakeaways: [
      'Puppies aged 8–12 weeks require 4 meals daily; 3–6 months require 3 meals; adult dogs thrive on 2 structured daily meals.',
      'Volumetric measuring cups introduce up to 25% portion variance; weighing food with a kitchen scale prevents obesity.',
      'Treats and table scraps must remain strictly under 10% of total daily calories to prevent nutritional dilution.',
      'PetHorizon lets caregivers log daily gram allocations and mark meals done to prevent accidental double-feeding.'
    ],
    trendingSearches: ['#dog feeding schedule', '#puppy feeding chart', '#how often to feed adult dog', '#dog calorie calculator', '#prevent double feeding'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'Dog Feeding Schedule by Age | Pet Horizon Portion Guide',
    metaDescription: 'Complete feeding schedule from puppyhood to adult. Learn meal frequencies, RER portion calculations, and track daily meals in Pet Horizon.',
    sourceName: 'WSAVA Global Nutrition Committee',
    sourceUrl: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
    relatedProductLinks: [
      { feature: 'Daily Feeding Routine & Portion Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Feeding in PetHorizon', icon: 'Clock' },
      { feature: 'Family QR Sync to Prevent Double-Feeding', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Sync Household Meal Times', icon: 'Users' }
    ]
  },

  // 2. Pillar: Puppy & Kitten Vaccination Schedule
  {
    id: 'post-vax-global',
    slug: 'puppy-kitten-vaccination-schedule-booster-guide-worldwide',
    title: 'Puppy & Kitten Vaccination Schedule: Core Booster Timetable & In-App Milestones',
    excerpt: 'Complete veterinary-verified vaccination guide for puppies and kittens. Learn exact timing for DHPP, FVRCP, Rabies, and how to digitize your pet’s health passport with PetHorizon.',
    category: 'Health & Vaccines',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['Kittens Timetable', 'Puppy Vaccination', 'Cat Health', 'FVRCP Schedule', 'Rabies Booster', 'Vet Schedule', 'Pet Horizon'],
    seoKeyword: 'kittens timetable puppy vaccination schedule',
    searchVolume: '42K/mo',
    searchRankBadge: 'High Clinical Intent',
    keyTakeaways: [
      'Maternal antibodies decline between 6 to 16 weeks of age, leaving puppies and kittens vulnerable to fatal viral pathogens.',
      'Core kitten vaccines (FVRCP) and puppy vaccines (DHPP) must be administered every 3-4 weeks until at least 16 weeks old.',
      'Universal veterinary standards established by the AVMA, WSAVA, and RCVS dictate mandatory rabies immunizations.',
      'PetHorizon automatically syncs upcoming booster due dates and lets you export a digital vaccination certificate for boarding.'
    ],
    trendingSearches: ['#kittens timetable', '#kitten vaccination schedule', '#puppy vaccination schedule', '#rabies shot timeline', '#digital pet health card'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'Kitten & Puppy Vaccination Timetable: Core Booster Schedule',
    metaDescription: 'Complete kitten timetable and puppy vaccination schedule. Check exact weeks for FVRCP, DHPP, and Rabies boosters with PetHorizon digital tracker.',
    sourceName: 'AAHA Canine Vaccination Guidelines',
    sourceUrl: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/vaccination-canine/',
    relatedProductLinks: [
      { feature: 'Clinical Health Card & Milestone Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Vaccines on PetHorizon', icon: 'ShieldCheck' },
      { feature: 'Family QR Record Sharing', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Share Passport with Vet', icon: 'QrCode' }
    ]
  },

  // 3. Pillar: Pet Health Records & Medication Schedule
  {
    id: 'post-health-records',
    slug: 'pet-health-records-medication-schedule-tracker',
    title: 'Pet Health Records: What Every Pet Owner Should Track & How to Manage Medication Schedules',
    excerpt: 'Never scramble for vet papers again. Learn the 5 vital health records every pet parent must maintain, missed medication protocols, and how to store complete medical histories in PetHorizon.',
    category: 'Health & Vaccines',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Health Records', 'Medication Tracker', 'Missed Dose Protocol', 'Vet Medical History', 'Pet Horizon'],
    seoKeyword: 'pet health records',
    searchVolume: '8.4K/mo',
    searchRankBadge: 'Preventive Care',
    keyTakeaways: [
      'Maintain 5 digital health records: vaccine certificates, active prescriptions with dosages, microchip ID, diagnostics, and weight history.',
      'Never double-dose medication after a missed pill; administer immediately unless near the next dose, then follow veterinary instructions.',
      'Paper files degrade and get misplaced; an offline digital health passport ensures emergency vet clinics have immediate vitals.'
    ],
    trendingSearches: ['#pet health records', '#dog medication schedule', '#what to do if missed dog medication', '#digital pet passport', '#pet vaccination records'],
    author: AUTHORS.editorial,
    publishedAt: 'October 25, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'Pet Health Records & Medication Tracking Guide | Pet Horizon',
    metaDescription: 'Organize pet medical history, vaccination certificates, and missed medication protocols in one offline-first digital card with Pet Horizon.',
    sourceName: 'AVMA Veterinary Medical Records Guidance',
    sourceUrl: 'https://www.avma.org/resources-tools/pet-owners/petcare/pet-health-records',
    relatedProductLinks: [
      { feature: 'Emergency Vet Mode & Health Passport', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Setup Free Health Card', icon: 'ShieldCheck' },
      { feature: 'Recurring Medication Alarms', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Set Dosage Reminders', icon: 'Bell' }
    ]
  },

  // 4. Pillar: Household Pet Co-Parenting & Feeding Routine Sync
  {
    id: 'post-coparent-global',
    slug: 'household-pet-coparenting-feeding-routine-sync-worldwide',
    title: 'Managing Household Pet Routines: How to Coordinate Feeding & Avoid Double-Feeding',
    excerpt: 'Tired of asking "Did you feed the dog?" Learn how couples, families, and roommates coordinate pet schedules, avoid dangerous double-feeding, and sync routines in PetHorizon.',
    category: 'Family & Routine',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['Did You Feed the Dog', 'Family Pet Care', 'Prevent Double-Feeding', 'Shared Pet Routine', 'Pet Horizon'],
    seoKeyword: 'did you feed the dog shared routine tracker',
    searchVolume: '18K/mo',
    searchRankBadge: '#1 Household Query',
    keyTakeaways: [
      'Over 54% of multi-person households accidentally double-feed pets at least once per week, driving canine and feline obesity.',
      'Manual whiteboards and group texts fail because they require active messaging; cloud-synced checklists update passively.',
      'PetHorizon Anti-Collision Care Lock visually locks a chore while one caregiver performs it, preventing conflicting dosing or feeding.'
    ],
    trendingSearches: ['#did you feed the dog', '#family pet care app', '#shared dog walking schedule', '#stop double feeding dog', '#pet routine tracker for couples'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 25, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'Family Pet Routine & Feeding Sync Guide | Pet Horizon',
    metaDescription: 'Eliminate double-feeding and missed walks. Learn how modern families, couples, and roommates sync pet care in real time with Pet Horizon.',
    sourceName: 'Association for Pet Obesity Prevention (APOP)',
    sourceUrl: 'https://www.petobesityprevention.org/',
    relatedProductLinks: [
      { feature: 'Family Hub QR Pairing', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Invite Family Members', icon: 'QrCode' },
      { feature: 'Live Anti-Collision Care Lock', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Try Anti-Collision Lock', icon: 'CheckCircle' }
    ]
  },

  // 5. Pillar: New Puppy Checklist & First-Year Budget
  {
    id: 'post-puppy-checklist',
    slug: 'new-puppy-checklist-first-year-budget-guide',
    title: 'New Puppy Checklist: Essential Supplies, First-Week Setup & True First-Year Costs',
    excerpt: 'Bringing home a new puppy? Prepare for day one with our 48-hour survival kit, puppy-proofing checklist, transparent first-year cost ledger, and PetHorizon routine organizer.',
    category: 'Dog Care',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1623945514418-15427b33a34c?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['New Puppy Checklist', 'Puppy Supplies', 'First Year Dog Budget', 'Puppy Proofing', 'Pet Horizon'],
    seoKeyword: 'new puppy checklist',
    searchVolume: '6.5K/mo',
    searchRankBadge: 'New Pet Guide',
    keyTakeaways: [
      'Prioritize a 48-hour survival kit: crate with divider, enzymatic cleaner, single-ingredient food, chew toys, and martingale collar.',
      'Puppy proofing requires crawling on hands and knees to identify electrical cords, toxic houseplants, and small choking hazards.',
      'First-year puppy ownership costs between $1,800 to $3,800 including core vaccinations, neuter/spay, preventive medications, and nutrition.',
      'Log recurring booster due dates, microchip registrations, and feeding times in PetHorizon from day one.'
    ],
    trendingSearches: ['#new puppy checklist', '#first time puppy owner guide', '#puppy supply essentials', '#first year dog cost', '#puppy schedule tracker'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'New Puppy Checklist & First-Year Budget | Pet Horizon',
    metaDescription: 'Essential new puppy checklist and transparent first-year expense guide. Get prepared with supply lists, puppy proofing, and budget tracking.',
    sourceName: 'American Kennel Club (AKC) Puppy Care Guide',
    sourceUrl: 'https://www.akc.org/expert-advice/dog-care/',
    relatedProductLinks: [
      { feature: 'New Puppy Routine Starter Pack', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Start Puppy Routine in PetHorizon', icon: 'Calendar' },
      { feature: 'Wallet & Expense Manager', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track First-Year Budget', icon: 'DollarSign' }
    ]
  },

  // 6. Best Pet GPS Trackers & Smart Pet Wearables Review
  {
    id: 'post-pet-trackers-review',
    slug: 'best-pet-gps-trackers-health-wearables-review-worldwide',
    title: 'Best Pet GPS Trackers & Smart Pet Wearables: In-Depth 2026 Testing & Buying Guide',
    excerpt: 'Comprehensive hands-on review of top pet GPS trackers, smart collars, and biometrics. Compare cellular range, battery life, waterproofing, and PetHorizon sync.',
    category: 'Dog Care',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Best Pet GPS Trackers', 'Smart Pet Wearables', 'GPS Dog Collar', 'Pet Health Tracker', 'Pet Horizon'],
    seoKeyword: 'best pet gps trackers smart pet wearables',
    searchVolume: '14K/mo',
    searchRankBadge: 'Hardware Guide',
    keyTakeaways: [
      'Dedicated LTE/GPS pet trackers work across unlimited range in open parks, unlike Bluetooth AirTags which require nearby crowd devices.',
      'Two-way audio LTE smart collars allow remote owner check-ins and live map telemetry during outdoor off-leash activities.',
      'Pairing daily sleep and scratching telemetry with PetHorizon helps identify early signs of osteoarthritis or dermatological allergies.'
    ],
    trendingSearches: ['#best dog gps tracker', '#smart pet wearables live voice gps', '#smart pet collar', '#activity tracker for dogs'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 24, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'Best Pet GPS Trackers & Smart Pet Wearables (2026 Review)',
    metaDescription: 'Compare the best pet GPS trackers, smart pet wearables with live voice check-ins, and health trackers. Honest battery & range testing.',
    sourceName: 'AVMA Wearable Technologies & Telehealth Standards',
    sourceUrl: 'https://www.avma.org/resources-tools/practice-management/telehealth-telemedicine-veterinary-practice',
    relatedProductLinks: [
      { feature: 'Activity & Routine Timeline', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Daily Pet Activity', icon: 'Activity' },
      { feature: 'Weight Growth & Vitals Chart', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Monitor Weight with PetHorizon', icon: 'TrendingUp' }
    ]
  },

  // 7. Monthly Pet Care Cost & Vet Expense Budget
  {
    id: 'post-budget-global',
    slug: 'monthly-pet-care-cost-vet-expense-budget-worldwide',
    title: 'Cost of Pet Care: Real Monthly Expenses, Vet Bills for Dogs & Budget Guide',
    excerpt: 'How much do vet bills and pet care actually cost? Get a transparent breakdown of routine veterinary visits, emergency costs, dental cleanings, and monthly food budgets.',
    category: 'Dog Care',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Vet Bills for Dogs', 'Cost of Pet Care', 'Monthly Pet Budget', 'Dog Expenses', 'Expense Tracker', 'Pet Horizon'],
    seoKeyword: 'vet bills for dogs cost of pet care',
    searchVolume: '22K/mo',
    searchRankBadge: 'Financial Guide',
    keyTakeaways: [
      'First-year puppy and kitten expenses average 2 to 3 times the recurring cost of an adult pet due to initial vaccines, spay/neuter, and supplies.',
      'Routine preventive veterinary care (vaccines, parasite prevention, annual bloodwork) saves thousands in avoided emergency procedures.',
      'PetHorizon Budget & Expense Manager lets you categorize recurring pet costs and set monthly threshold alerts.'
    ],
    trendingSearches: ['#vet bills for dogs', '#cost of pet care', '#monthly pet budget', '#dog vet expense breakdown', '#affordable pet care'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 23, 2026',
    updatedAt: 'November 1, 2026',
    metaTitle: 'Vet Bills for Dogs & Cost of Pet Care: Real Monthly Budget',
    metaDescription: 'Transparent breakdown of vet bills for dogs, preventive clinics, and the true cost of pet care. Learn smart budgeting and track expenses in Pet Horizon.',
    sourceName: 'APPA National Pet Owners Survey & Veterinary Benchmarks',
    sourceUrl: 'https://www.americanpetproducts.org/',
    relatedProductLinks: [
      { feature: 'Expense & Budget Manager', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Pet Expenses in PetHorizon', icon: 'DollarSign' },
      { feature: 'Preventive Care Scheduler', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Schedule Routine Vet Care', icon: 'Calendar' }
    ]
  }
];

