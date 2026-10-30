import { AUTHORS, BlogPost } from './authors';

export const CORE_AND_LOCAL_POSTS: BlogPost[] = [
  // 1. Pillar: Dog Feeding Schedule by Age
  {
    id: 'post-dog-feeding',
    slug: 'dog-feeding-schedule-by-age-puppy-to-adult',
    title: 'Dog Feeding Schedule by Age: Complete Puppy to Adult Portion & Routine Guide',
    excerpt: 'How often should you feed your dog? Discover veterinary-backed daily feeding schedules, Resting Energy Requirement (RER) calculations, bloat prevention tips, and in-app routine tracking.',
    category: 'Feeding & Nutrition',
    readTime: '15 min read',
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
    metaTitle: 'Dog Feeding Schedule by Age | Pet Horizon Portion Guide',
    metaDescription: 'Complete feeding schedule from puppyhood to adult. Learn meal frequencies, RER portion calculations, and track daily meals in Pet Horizon.',
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
    readTime: '16 min read',
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
    metaTitle: 'Kitten & Puppy Vaccination Timetable: Core Booster Schedule',
    metaDescription: 'Complete kitten timetable and puppy vaccination schedule. Check exact weeks for FVRCP, DHPP, and Rabies boosters with PetHorizon digital tracker.',
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
    readTime: '15 min read',
    coverImage: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Health Records', 'Medication Tracker', 'Missed Dose Protocol', 'Vet Medical History', 'Pet Horizon'],
    seoKeyword: 'pet health records',
    searchVolume: '1.8K/mo',
    searchRankBadge: 'Clinical Essential',
    keyTakeaways: [
      'Tracking monthly weight curves is the earliest clinical detector of feline renal failure and canine cardiac decline.',
      'Never double up on missed pet medications; consult your vet or adhere to the 2-hour therapeutic window rule.',
      'Human painkillers like acetaminophen and ibuprofen are acutely toxic and fatal to dogs and cats.',
      'PetHorizon unifies prescriptions, dosages, and vaccine records with 1-tap mobile access for emergency clinics.'
    ],
    trendingSearches: ['#pet health records', '#pet medication reminder', '#missed pet medicine', '#dog medical binder', '#digital pet health passport'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Pet Health Records & Medication Tracker | Pet Horizon',
    metaDescription: 'Learn what medical records every pet parent must keep. Manage medication schedules safely and store complete clinical records in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Medication Schedule & Dosage Reminders', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Set Medication Reminders', icon: 'Clock' },
      { feature: 'Clinical Health Card & Document Vault', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Store Records in PetHorizon', icon: 'ShieldCheck' }
    ]
  },

  // 4. Pillar: Shared Family Pet Care & Household Coordination
  {
    id: 'post-coparent-global',
    slug: 'household-pet-coparenting-feeding-routine-sync-worldwide',
    title: 'Household Pet Co-Parenting: How to Prevent Double-Feeding and Missed Meds',
    excerpt: 'Living in a busy household often leads to pets being fed twice or missing their medications. Discover how to coordinate feeding routines, walks, and care handoffs seamlessly with PetHorizon.',
    category: 'Family & Routine',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Routine', 'Family Pet Care', 'Feeding Schedule', 'Medicine Tracker', 'Pet Horizon'],
    seoKeyword: 'shared pet care checklist',
    searchVolume: '3.5K/mo',
    searchRankBadge: 'Family Routine',
    keyTakeaways: [
      'Overfeeding caused by miscommunication between household members is a leading contributor to canine obesity.',
      'Delayed or missed medications can cause therapeutic failure for pets managing diabetes, thyroid disorders, or epilepsy.',
      'Modern hybrid work schedules make real-time routine synchronization indispensable.',
      'PetHorizon Family Hub lets multiple caregivers log feedings, walks, and medications with instant live status updates.'
    ],
    trendingSearches: ['#did you feed the dog', '#multi owner pet app', '#pet medicine reminder', '#shared pet calendar', '#pet family hub'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 25, 2026',
    metaTitle: 'Household Pet Co-Parenting Guide | Pet Horizon',
    metaDescription: 'Stop asking "did you feed the dog?" Coordinate daily pet tasks across partners, roommates, and family members with PetHorizon’s instant QR household sync.',
    relatedProductLinks: [
      { feature: 'Family Hub & Instant QR Code Sync', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Sync Your Family on PetHorizon', icon: 'Users' },
      { feature: 'Daily Routine Timeline', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'View Routine Tracker', icon: 'Clock' }
    ]
  },

  // 5. Pillar: New Puppy Checklist & First-Year Budget
  {
    id: 'post-puppy-checklist',
    slug: 'new-puppy-checklist-first-year-budget-guide',
    title: 'New Puppy Checklist: Essential Supplies, First-Week Setup & True First-Year Costs',
    excerpt: 'Bringing home a new puppy? Prepare for day one with our 48-hour survival kit, puppy-proofing checklist, transparent first-year cost ledger, and PetHorizon routine organizer.',
    category: 'Dog Care',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1623945514418-15427b33a34c?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['New Puppy Checklist', 'Puppy Supplies', 'Cost of Owning Dog', 'Puppy Proofing', 'Pet Horizon'],
    seoKeyword: 'new puppy checklist',
    searchVolume: '6.5K/mo',
    searchRankBadge: 'New Pet Guide',
    keyTakeaways: [
      'Day-one essentials include a divider-panel crate, enzymatic cleaner, stainless steel bowls, and a flat leash.',
      'Puppy-proofing requires locking away human medications, electrical cords, and pantry items like Xylitol and chocolate.',
      'First-year dog ownership averages $1,800 to $4,200 including initial vaccines, spay/neuter, gear, and nutrition.',
      'PetHorizon Expense & Budget Manager tracks category spending and warns you before exceeding monthly limits.'
    ],
    trendingSearches: ['#new puppy checklist', '#puppy supplies list', '#first year puppy cost', '#puppy proofing house', '#first time dog owner'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    metaTitle: 'New Puppy Checklist & First-Year Budget | Pet Horizon',
    metaDescription: 'Essential new puppy checklist and transparent first-year expense guide. Get prepared with supply lists, puppy proofing, and budget tracking.',
    relatedProductLinks: [
      { feature: 'Pet Expense & Budget Manager', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Puppy Budget in PetHorizon', icon: 'DollarSign' },
      { feature: 'Daily Milestone & Routine Timeline', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Set Daily Puppy Routines', icon: 'Clock' }
    ]
  },

  // 6. Best Pet GPS Trackers & Wearables Review
  {
    id: 'post-trackers-global',
    slug: 'best-pet-gps-trackers-health-wearables-review-worldwide',
    title: 'Best Pet GPS Trackers & Health Wearables: Comprehensive Hands-On Review',
    excerpt: 'Detailed review of the top GPS dog trackers and health wearables. Compare cellular battery longevity, waterproof ratings, escape alerts, and how to pair wearable data with PetHorizon health records.',
    category: 'Dog Care',
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1516139008210-96e45dccd83b?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.45&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Tech', 'GPS Tracker', 'Dog Wearable', 'Smart Collar', 'Product Review'],
    seoKeyword: 'best pet gps tracker review',
    searchVolume: '12K/mo',
    searchRankBadge: 'Top Tech Guide',
    keyTakeaways: [
      'Dedicated LTE/GPS pet trackers drastically outperform Bluetooth tags (like AirTags) in open parks and suburban areas.',
      'Battery longevity ranges from 4 days to 4 weeks depending on refresh intervals and cellular power draw.',
      'Wearable activity data is most valuable when paired with PetHorizon to spot subtle lethargy or health declines early.'
    ],
    trendingSearches: ['#best dog gps tracker', '#pet health wearable review', '#airtag vs dog tracker', '#smart pet collar', '#activity tracker for dogs'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 24, 2026',
    metaTitle: 'Best Pet GPS Trackers & Wearables | Pet Horizon Tech Review',
    metaDescription: 'Discover the top-rated pet GPS trackers and health wearables. Honest testing of battery, accuracy, and seamless integration with PetHorizon medical records.',
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
    readTime: '16 min read',
    coverImage: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
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
    metaTitle: 'Vet Bills for Dogs & Cost of Pet Care: Real Monthly Budget',
    metaDescription: 'Transparent breakdown of vet bills for dogs, preventive clinics, and the true cost of pet care. Learn smart budgeting and track expenses in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Expense & Budget Manager', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Pet Expenses in PetHorizon', icon: 'DollarSign' },
      { feature: 'Preventive Care Scheduler', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Schedule Routine Vet Care', icon: 'Calendar' }
    ]
  },

  // 8. Localized Guide: New York
  {
    id: 'post-vax-nyc',
    slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
    title: 'Puppy & Kitten Vaccination Schedule in New York: Vet Booster Timetable',
    excerpt: 'Essential veterinary vaccine requirements for NYC puppies and kittens. Learn rabies mandates for apartment buildings, leptospirosis risks in city parks, and in-app milestone tracking.',
    category: 'Health & Vaccines',
    readTime: '8 min read',
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
    metaTitle: 'Puppy & Kitten Vaccination Schedule in New York | Pet Horizon',
    metaDescription: 'Complete NYC puppy vaccination timetable. Understand local rabies and lepto rules, and organize your pet’s records in PetHorizon.',
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
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
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
    metaTitle: 'London Household Pet Routine Coordination | Pet Horizon',
    metaDescription: 'Eliminate double-feeding in London homes. Coordinate dog walks, meals, and vet appointments across partners and flatmates.',
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
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    targetLocation: 'Toronto',
    tags: ['Toronto Pets', 'Pet Budget Toronto', 'Ontario Vet Costs', 'Pet Horizon'],
    seoKeyword: 'cost of owning a dog in toronto',
    searchVolume: '2.8K/mo',
    searchRankBadge: 'Local Guide',
    keyTakeaways: [
      'Toronto ravine walks require consistent 9-to-12-month tick prevention to guard against Lyme disease.',
      'Salt-treated winter sidewalks require budget allocations for protective boots or paw balms.',
      'PetHorizon Expense Manager tracks receipts in CAD and warns you before exceeding monthly targets.'
    ],
    trendingSearches: ['#toronto pet expenses', '#cost of vet toronto', '#toronto dog budget', '#ontario pet care'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 24, 2026',
    metaTitle: 'Cost of Owning a Pet in Toronto | Pet Horizon Expense Guide',
    metaDescription: 'Breakdown of monthly dog and cat costs in Toronto. Track nutrition, tick preventives, and vet bills in PetHorizon.',
    relatedProductLinks: [
      { feature: 'Budget & Expense Manager', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Set Toronto Pet Budget', icon: 'DollarSign' }
    ]
  },

  // 11. Localized Guide: Sydney
  {
    id: 'post-trackers-sydney',
    slug: 'best-pet-gps-trackers-health-wearables-review-sydney',
    title: 'Best Pet GPS Trackers & Health Wearables in Sydney: Beach & Bushwalk Testing',
    excerpt: 'Hands-on evaluation of dog GPS trackers for Sydney pet owners. We test coastal saltwater resistance, paralysis tick monitoring, and PetHorizon activity logs.',
    category: 'Dog Care',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.35&q=85',
    targetLocation: 'Sydney',
    tags: ['Sydney Dogs', 'GPS Tracker Australia', 'Pet Health Wearable', 'Pet Horizon'],
    seoKeyword: 'best dog gps tracker australia',
    searchVolume: '3.4K/mo',
    searchRankBadge: 'Local Guide',
    keyTakeaways: [
      'Subtropical humidity and coastal beach runs demand IP68 waterproof ratings for any dog tracker.',
      'Pairing daily activity data with PetHorizon helps Australian pet parents spot early lethargy caused by paralysis ticks.',
      '4G Telstra/Optus LTE-M coverage provides reliable escape tracking across suburban bushland.'
    ],
    trendingSearches: ['#dog tracker australia', '#sydney pet tech', '#waterproof dog tracker', '#paralysis tick dog alert'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 23, 2026',
    metaTitle: 'Best Pet GPS Trackers in Sydney | Pet Horizon Tech Review',
    metaDescription: 'Top dog GPS trackers reviewed for Sydney conditions. Waterproofing, bushwalk safety, and PetHorizon activity record integration.',
    relatedProductLinks: [
      { feature: 'Activity Timeline', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Log Sydney Beach Walks', icon: 'Activity' }
    ]
  }
];
