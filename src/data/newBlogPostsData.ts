import { BlogPost } from './blogData';

const EDITORIAL_AUTHOR = {
  name: 'Pet Horizon Editorial Team',
  role: 'Pet Care & Veterinary Research Desk',
  avatar: '/app-icon.png',
  bio: 'Researched by animal care specialists referencing peer-reviewed clinical guidelines from the AVMA, AAHA, and WSAVA.'
};

const CARE_TEAM_AUTHOR = {
  name: 'Pet Horizon Care Team',
  role: 'Household Routine & Tech Specialists',
  avatar: '/app-icon.png',
  bio: 'Dedicated to helping multi-caregiver households coordinate daily pet routines, medications, and preventive care.'
};

export const NEW_BLOG_POSTS: BlogPost[] = [
  // 35. Rabbit Feeding Schedule & GI Stasis Prevention
  {
    id: 'post-rabbit-feeding-gi-stasis',
    slug: 'rabbit-feeding-schedule-hay-diet-gi-stasis-guide',
    title: 'Rabbit Feeding Schedule & Daily Routine: Hay Ratios, Leafy Greens & GI Stasis Guide',
    excerpt:
      'Rabbits require an 85% grass hay diet to keep their hindgut moving and wear down continuously growing teeth. Learn safe leafy green portions, pellet gram limits, and early GI stasis warning signs.',
    category: 'Feeding & Nutrition',
    readTime: '14 min read',
    coverImage:
      'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: [
      'Rabbit Feeding Schedule',
      'Rabbit Hay Diet',
      'GI Stasis Prevention',
      'Small Pet Care',
      'Pet Horizon'
    ],
    seoKeyword: 'rabbit feeding schedule hay diet gi stasis guide',
    searchVolume: '14.2K/mo',
    searchRankBadge: 'Small Pet Pillar',
    keyTakeaways: [
      'Adult rabbits require 80%–85% unlimited Timothy or Orchard grass hay daily to prevent fatal GI stasis and molar spurs.',
      'Fresh leafy greens should be portioned at 1 packed cup per 2 lbs of body weight; fortified pellets must stay under 5%.',
      'Zero fecal output or refusal of greens for 8 to 12 hours is a life-threatening exotic veterinary emergency.',
      'PetHorizon Small Pet profiles let families log daily hay refills, greens, and litter output.'
    ],
    trendingSearches: [
      '#rabbit feeding schedule',
      '#gi stasis rabbit signs',
      '#how much hay for rabbit',
      '#safe leafy greens for rabbits'
    ],
    author: EDITORIAL_AUTHOR,
    publishedAt: 'October 28, 2026',
    metaTitle: 'Rabbit Feeding Schedule, Hay Ratios & GI Stasis Guide | Pet Horizon',
    metaDescription:
      'Complete exotic veterinary rabbit feeding schedule. Learn the 85% hay pyramid, safe daily greens, pellet limits, and how to prevent GI stasis.',
    relatedProductLinks: [
      {
        feature: 'Small Pet & Rabbit Daily Routine Tracker',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Track Rabbit Routine in PetHorizon',
        icon: 'Clock'
      },
      {
        feature: 'Family Hub Multi-Caregiver Sync',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Sync Household Care',
        icon: 'Users'
      }
    ]
  },

  // 36. Companion Bird & Parrot Daily Routine
  {
    id: 'post-parrot-daily-routine',
    slug: 'parrot-bird-daily-routine-chop-diet-sleep-guide',
    title: 'Companion Bird & Parrot Daily Routine: Fresh Chop Diet, UV Hours & 12-Hour Sleep Guide',
    excerpt:
      'All-seed diets and erratic indoor lighting cause avian fatty liver disease and hormonal plucking. Master the morning vegetable chop routine, UV-B exposure, and 12-hour dark sleep schedules.',
    category: 'Feeding & Nutrition',
    readTime: '13 min read',
    coverImage:
      'https://images.unsplash.com/photo-1646291077846-c4ca2ac3d0ce?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: [
      'Parrot Daily Routine',
      'Bird Chop Recipe',
      'Avian Care Schedule',
      'Cockatiel Conure Care',
      'Pet Horizon'
    ],
    seoKeyword: 'parrot bird daily routine chop diet sleep schedule',
    searchVolume: '9.4K/mo',
    searchRankBadge: 'Avian Care Guide',
    keyTakeaways: [
      'Formulated avian pellets should make up 60%–70% of a parrot’s diet alongside 20%–30% fresh morning vegetable chop.',
      'Remove fresh chop bowls within 2 hours to prevent bacterial or fungal crop spoilage at room temperature.',
      'Companion birds require 10 to 12 hours of uninterrupted dark, quiet sleep to regulate photoperiod hormones.',
      'Weigh birds weekly on a digital gram scale in PetHorizon to detect masked illness before symptoms escalate.'
    ],
    trendingSearches: [
      '#parrot chop diet schedule',
      '#how much sleep do parrots need',
      '#bird daily care routine',
      '#avian weight tracking'
    ],
    author: EDITORIAL_AUTHOR,
    publishedAt: 'October 28, 2026',
    metaTitle: 'Parrot & Bird Daily Routine: Chop Diet & Sleep Schedule | Pet Horizon',
    metaDescription:
      'Evidence-based daily care schedule for parrots, cockatiels, budgies, and conures. Learn fresh chop feeding windows, UV needs, and 12-hour sleep rules.',
    relatedProductLinks: [
      {
        feature: 'Avian Routine & Gram Weight Logger',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Log Bird Care in PetHorizon',
        icon: 'Activity'
      }
    ]
  },

  // 37. Rescue Dog 3-3-3 Decompression Rule
  {
    id: 'post-rescue-dog-333-rule',
    slug: 'rescue-dog-3-3-3-rule-decompression-routine-guide',
    title: 'The 3-3-3 Rule for Rescue Dogs: First 3 Days, 3 Weeks & 3 Months Routine Checklist',
    excerpt:
      'Bringing home an adopted shelter dog? Understand the veterinary behavior 3-3-3 decompression timeline and how clockwork feeding and walking routines eliminate post-adoption anxiety.',
    category: 'Dog Care',
    readTime: '15 min read',
    coverImage:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: [
      '3-3-3 Rule Rescue Dog',
      'Adopting Shelter Dog',
      'Dog Decompression Routine',
      'New Rescue Dog Schedule',
      'Pet Horizon'
    ],
    seoKeyword: '3 3 3 rule rescue dog decompression routine',
    searchVolume: '28K/mo',
    searchRankBadge: 'Adoption Essential',
    keyTakeaways: [
      'First 3 Days: Cortisol levels peak; give your rescue dog a quiet sanctuary space with zero visitors or dog parks.',
      'First 3 Weeks: Adrenaline fades, true personality emerges, and consistent meal/walk timestamps teach household boundaries.',
      'First 3 Months: Secure attachment forms and house-training solidifies through predictable daily routines.',
      'PetHorizon Family Hub keeps every household member aligned on exact walk, crate, and meal times.'
    ],
    trendingSearches: [
      '#3 3 3 rule dog adoption',
      '#rescue dog decompression timeline',
      '#first week with adopted dog',
      '#shelter dog routine schedule'
    ],
    author: CARE_TEAM_AUTHOR,
    publishedAt: 'October 29, 2026',
    metaTitle: '3-3-3 Rule for Rescue Dogs: Decompression & Routine Checklist | Pet Horizon',
    metaDescription:
      'Master the 3-3-3 rule for newly adopted rescue dogs. Learn what to expect in the first 3 days, 3 weeks, and 3 months with a structured daily schedule.',
    relatedProductLinks: [
      {
        feature: 'Daily Decompression & Walk Routine Tracker',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Build Rescue Dog Schedule',
        icon: 'Clock'
      },
      {
        feature: 'Family Hub Multi-Caregiver Sync',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Sync Family Caregivers',
        icon: 'Users'
      }
    ]
  },

  // 38. Dog & Cat Diabetes Insulin Schedule
  {
    id: 'post-pet-diabetes-insulin',
    slug: 'dog-cat-diabetes-insulin-feeding-schedule-guide',
    title: 'Dog & Cat Diabetes Insulin Schedule: 12-Hour Meal Timing, Missed Dose Rules & Family Sync',
    excerpt:
      'Managing pet diabetes requires strict 12-hour coordination between weighed meals and insulin injections. Learn the "Feed First, Then Inject" rule, missed dose safety, and how to prevent double-dosing.',
    category: 'Health & Vaccines',
    readTime: '15 min read',
    coverImage:
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: [
      'Dog Diabetes Insulin Schedule',
      'Cat Diabetes Feeding',
      'Pet Medication Alarm',
      'Prevent Double Dosing',
      'Pet Horizon'
    ],
    seoKeyword: 'dog cat diabetes insulin feeding schedule',
    searchVolume: '11.8K/mo',
    searchRankBadge: 'Clinical Protocol',
    keyTakeaways: [
      'Always confirm your dog or cat has eaten at least 50%–75% of their measured meal before injecting insulin.',
      'Space insulin injections strictly 12 hours apart; never re-inject if fur feels wet or a dose is uncertain.',
      'Keep corn syrup or honey accessible to rub on gums immediately if hypoglycemic trembling or weakness occurs.',
      'PetHorizon’s Anti-Collision Care Lock prevents spouses or roommates from accidentally administering a second insulin dose.'
    ],
    trendingSearches: [
      '#dog insulin feeding schedule',
      '#cat diabetes missed insulin dose',
      '#prevent double dosing pet medicine',
      '#12 hour pet medication alarm'
    ],
    author: EDITORIAL_AUTHOR,
    publishedAt: 'October 29, 2026',
    metaTitle: 'Dog & Cat Diabetes Insulin & Feeding Schedule Guide | Pet Horizon',
    metaDescription:
      'AAHA-aligned guide to managing dog and cat diabetes. Master 12-hour meal and insulin timing, missed dose rules, and family double-dose prevention.',
    relatedProductLinks: [
      {
        feature: '12-Hour Medication Alarms & Care Lock',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Set 12-Hour Insulin Alarms',
        icon: 'ShieldCheck'
      }
    ]
  },

  // 39. Pet Microchip Registration & Universal Lookup Guide
  {
    id: 'post-pet-microchip-guide',
    slug: 'pet-microchip-registration-lookup-guide',
    title: 'Pet Microchip Registration & Universal Lookup Guide: ISO Standards & Vet Passport Tracking',
    excerpt:
      'Nearly 40% of microchipped lost pets have unregistered or outdated contact files. Understand 15-digit ISO 11784/11785 standards, the AAHA Universal Microchip Lookup tool, and digital ID storage.',
    category: 'Health & Vaccines',
    readTime: '12 min read',
    coverImage:
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: [
      'Pet Microchip Lookup',
      'ISO 15 Digit Microchip',
      'AAHA Microchip Registry',
      'Digital Pet Health Card',
      'Pet Horizon'
    ],
    seoKeyword: 'pet microchip registration universal lookup guide',
    searchVolume: '16.4K/mo',
    searchRankBadge: 'ID & Travel Standard',
    keyTakeaways: [
      'Implanting a microchip at the vet does not automatically update national databases when you move or change phone numbers.',
      'International travel to the UK, EU, and most countries requires a 15-digit ISO 11784/11785 chip implanted BEFORE the rabies shot.',
      'Use the AAHA Universal Pet Microchip Lookup tool annually to verify which registry holds your active contact record.',
      'Store your pet’s 15-digit microchip code inside PetHorizon’s Clinical Health Card for instant copy and PDF export.'
    ],
    trendingSearches: [
      '#pet microchip lookup',
      '#how to register dog microchip',
      '#iso 15 digit microchip travel',
      '#aaha universal microchip search'
    ],
    author: CARE_TEAM_AUTHOR,
    publishedAt: 'October 30, 2026',
    metaTitle: 'Pet Microchip Registration & Universal Lookup Guide | Pet Horizon',
    metaDescription:
      'Learn how to check and register your dog or cat’s microchip using the AAHA Universal Lookup tool, ISO 15-digit travel rules, and PetHorizon Health Cards.',
    relatedProductLinks: [
      {
        feature: 'Digital Pet Health Card & Microchip Vault',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        ctaText: 'Store Microchip ID in PetHorizon',
        icon: 'ShieldCheck'
      }
    ]
  }
];

