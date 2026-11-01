import { AUTHORS, BlogPost } from './authors';

export const ROUTINE_POSTS: BlogPost[] = [
  // 24. Pet Sitter Instructions & Handover Checklist
  {
    id: 'post-pet-sitter-checklist',
    slug: 'pet-sitter-instructions-handover-checklist-template',
    title: 'Pet Sitter Instructions & Printable Handover Checklist: Complete Caregiver Guide',
    excerpt: 'Traveling soon? Leave zero room for confusion with our comprehensive 5-part pet sitter handover template, emergency veterinary proxy authorization, and PetHorizon instant QR sync.',
    category: 'Family & Routine',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Sitter Checklist', 'Dog Sitter Instructions', 'Vacation Pet Care', 'Emergency Vet Proxy', 'Pet Horizon'],
    seoKeyword: 'pet sitter instructions handover checklist template',
    searchVolume: '5.2K/mo',
    searchRankBadge: 'Caregiver Hub',
    keyTakeaways: [
      'Specify exact gram food portions and medication dosages; never assume measuring scoops are standardized.',
      'Always leave a signed emergency medical treatment proxy form authorizing treatment up to a pre-set spending cap.',
      'Share a temporary Caregiver QR code in PetHorizon so sitters have 1-tap access to routines and emergency contacts.'
    ],
    trendingSearches: ['#pet sitter instructions', '#what to leave for dog sitter', '#emergency vet authorization form', '#pet care handover checklist'],
    author: AUTHORS.careTeam,
    sourceName: 'National Association of Professional Pet Sitters (NAPPS)',
    sourceUrl: 'https://petsitters.org/page/PetCareLibrary',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Pet Sitter Instructions & Handover Checklist | Pet Horizon',
    metaDescription: 'Complete pet sitter instructions template and emergency vet proxy letter. Coordinate feeding, walks, and medications with PetHorizon QR sync.',
    relatedProductLinks: [
      { feature: 'Family Hub Caregiver QR Pairing', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Generate Sitter QR Code', icon: 'Users' }
    ]
  },

  // 25. Senior Dog Care
  {
    id: 'post-senior-dog-care',
    slug: 'senior-dog-care-mobility-nutrition-routine-guide',
    title: 'Senior Dog Care: Mobility, Joint Supplements, Nutrition & Daily Routine Guide',
    excerpt: 'Caring for an aging dog requires compassionate adaptation. Learn how to manage canine osteoarthritis with multimodal therapies, home rug modifications, senior nutrition, and DISHA dementia indicators.',
    category: 'Dog Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Senior Dog Care', 'Dog Arthritis', 'Canine Cognitive Dysfunction', 'Joint Supplements', 'Pet Horizon'],
    seoKeyword: 'senior dog care mobility nutrition guide',
    searchVolume: '8.9K/mo',
    searchRankBadge: 'Senior Wellness',
    keyTakeaways: [
      'Dogs age at different rates depending on size: giant breeds are senior at 5, while small dogs enter senior years at 10.',
      'Multimodal osteoarthritis therapy combines anti-NGF monoclonal antibodies (Librela), NSAIDs, and omega-3 EPA/DHA.',
      'Non-slip rug runners and elevated food bowls prevent joint strain and severe slip-and-fall injuries.'
    ],
    trendingSearches: ['#senior dog care', '#dog arthritis supplements', '#canine dementia symptoms', '#caring for an old dog'],
    author: AUTHORS.editorial,
    sourceName: 'American Animal Hospital Association (AAHA)',
    sourceUrl: 'https://www.aaha.org/aaha-guidelines/senior-care/senior-care-home/',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Senior Dog Care: Mobility & Routine Guide | Pet Horizon',
    metaDescription: 'Comprehensive guide to caring for an aging dog. Manage arthritis, cognitive health, nutrition, and track senior vitals in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Senior Dog Routine & Vitals Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Senior Health in PetHorizon', icon: 'Clock' }
    ]
  },

  // 26. Senior Cat Care
  {
    id: 'post-senior-cat-care',
    slug: 'senior-cat-care-health-diet-comfort-guide',
    title: 'Senior Cat Care: Managing Arthritis, Appetite Changes & Cognitive Health',
    excerpt: 'Cats are masters at hiding pain. Discover subtle signs of feline osteoarthritis, high-moisture senior diets to safeguard kidney nephrons, and low-entry litter box adaptations for older cats.',
    category: 'Cat Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1513360309081-36f20ca4e829?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Senior Cat Care', 'Feline Arthritis', 'Senior Cat Diet', 'Cornell Feline Health', 'Pet Horizon'],
    seoKeyword: 'senior cat care health diet guide',
    searchVolume: '6.4K/mo',
    searchRankBadge: 'Senior Cat Care',
    keyTakeaways: [
      'Over 90% of cats over age 12 have arthritis; hesitation before jumping and unkempt fur along the spine are primary signs.',
      'Geriatric cats need easily digestible, high-biological-value protein to prevent muscle wasting (sarcopenia).',
      'Weigh your senior cat monthly: a loss of 8 ounces is equivalent to a human losing 7.5 pounds unexpectedly.'
    ],
    trendingSearches: ['#senior cat care', '#cat arthritis signs', '#senior cat losing weight', '#best food for older cats'],
    author: AUTHORS.editorial,
    sourceName: 'American Association of Feline Practitioners (AAFP)',
    sourceUrl: 'https://catvets.com/guidelines/practice-guidelines/feline-senior-care',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Senior Cat Care: Health & Diet Guide | Pet Horizon',
    metaDescription: 'Recognize subtle health changes in older cats. Manage feline arthritis, kidney moisture, appetite, and log senior vitals in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Senior Cat Routine & Weight Curve Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Monitor Senior Cat Vitals', icon: 'ShieldCheck' }
    ]
  },

  // 27. Dog Walking Schedule by Age & Breed
  {
    id: 'post-dog-walking-schedule',
    slug: 'dog-walking-schedule-by-age-breed-exercise-guide',
    title: 'Dog Walking Schedule by Age, Breed & Weather: Complete Exercise & Safety Guide',
    excerpt: 'How often should you walk your dog? Learn the puppy 5-minute rule to protect developing growth plates, breed-specific cardiovascular needs, extreme weather limits, and the power of "sniffaris."',
    category: 'Dog Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Dog Walking Schedule', 'Puppy Exercise Limits', 'Dog Activity Tracker', 'Breed Exercise', 'Pet Horizon'],
    seoKeyword: 'dog walking schedule by age and breed',
    searchVolume: '9.6K/mo',
    searchRankBadge: 'Exercise Matrix',
    keyTakeaways: [
      'Protect puppy growth plates by following the 5-minute rule: 5 minutes of walking per month of age up to twice daily.',
      'Sniffari walks burn equal mental energy to continuous running by activating 300 million canine olfactory receptors.',
      'Always perform the 7-second bare-hand test before walking on hot summer asphalt.'
    ],
    trendingSearches: ['#dog walking schedule', '#how often should you walk a dog', '#puppy walking limits', '#how much exercise does dog need'],
    author: AUTHORS.careTeam,
    sourceName: 'American Kennel Club (AKC)',
    sourceUrl: 'https://www.akc.org/expert-advice/health/how-often-should-you-walk-your-dog/',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Dog Walking Schedule by Age & Breed | Pet Horizon',
    metaDescription: 'Optimize your dog’s walking routine. Learn life-stage exercise limits, breed energy requirements, weather precautions, and track walks in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Activity Tracker & Walk Duration Log', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Log Daily Walks in PetHorizon', icon: 'Activity' }
    ]
  },

  // 28. Cat Litter Box Problems
  {
    id: 'post-cat-litter-box-problems',
    slug: 'cat-litter-box-problems-causes-solutions-guide',
    title: 'Cat Litter Box Problems: Why Cats Stop Using the Box & How to Solve It',
    excerpt: 'Inappropriate elimination is an urgent distress signal, not spite. Review clinical urinary emergencies like Feline Idiopathic Cystitis, the 5 rules of litter box design, and enzymatic odor removal.',
    category: 'Cat Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.35&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Cat Litter Box Problems', 'Feline Idiopathic Cystitis', 'Cat Urinating Outside Box', 'Enzymatic Cleaner', 'Pet Horizon'],
    seoKeyword: 'cat litter box problems causes solutions',
    searchVolume: '13.5K/mo',
    searchRankBadge: 'Feline Behavior',
    keyTakeaways: [
      'Rule out medical causes first: Feline Idiopathic Cystitis and urinary crystals cause painful urination that cats associate with the box.',
      'Male cats straining with zero urine output are facing a life-threatening urethral blockage requiring emergency ER care.',
      'Follow the 5 golden box rules: 1.5x cat length, uncovered, fine unscented clumping clay, N + 1 boxes, and daily scooping.'
    ],
    trendingSearches: ['#why is cat peeing outside litter box', '#cat litter box aversion', '#male cat straining litter box', '#best cat litter setup'],
    author: AUTHORS.editorial,
    sourceName: 'Cornell Feline Health Center',
    sourceUrl: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-house-soiling',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Cat Litter Box Problems: Causes & Solutions | Pet Horizon',
    metaDescription: 'Solve feline litter box issues. Rule out urinary tract emergencies, implement veterinary box setups, and track litter hygiene in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Cat Routine & Health History Log', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Cat Routine in PetHorizon', icon: 'Clock' }
    ]
  }
];
