import { AUTHORS, BlogPost } from './authors';

export const CLINICAL_POSTS: BlogPost[] = [
  // 12. Feline Kidney Disease & Cornell Dehydration Protocol
  {
    id: 'post-cat-kidney',
    slug: 'feline-kidney-disease-dehydration-cornell',
    title: 'Feline Chronic Kidney Disease (CKD): Early Warning Signs & Cornell Hydration Protocol',
    excerpt: 'Over 30% of senior cats experience renal decline. Learn early warning signs like litter clump expansion, the scruff tent test, and the Cornell feline moisture protocol to preserve kidney nephrons.',
    category: 'Cat Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Cat Care', 'Feline Kidney Disease', 'Cat Hydration', 'Cornell Protocol', 'Senior Cat Health'],
    seoKeyword: 'feline kidney disease hydration protocol',
    searchVolume: '8.5K/mo',
    searchRankBadge: 'Senior Cat Health',
    keyTakeaways: [
      'Early CKD diminishes urine concentrating ability, causing abnormally large litter box clumps before overt weight loss begins.',
      'Wet food and filtered pet fountains increase moisture intake by up to 40% compared to still water bowls.',
      'Regular weight monitoring in PetHorizon detects subtle, early-stage renal muscle wasting months before bloodwork abnormalities.'
    ],
    trendingSearches: ['#cat kidney disease signs', '#feline dehydration test', '#wet food for cat kidneys', '#senior cat care'],
    author: AUTHORS.editorial,
    sourceName: 'Cornell Feline Health Center',
    sourceUrl: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Feline Kidney Disease & Dehydration Guide | Pet Horizon',
    metaDescription: 'Recognize early signs of chronic feline kidney disease. Learn the Cornell hydration protocol, wet food strategies, and monitor senior cat health in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Senior Cat Routine & Water Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Hydration in PetHorizon', icon: 'Clock' },
      { feature: 'Clinical Health Card & Lab History', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Store Cat Vet Records', icon: 'ShieldCheck' }
    ]
  },

  // 13. Emergency Vet Symptoms & Red Flags Triage
  {
    id: 'post-emergency-vet',
    slug: 'emergency-vet-symptoms-red-flags-petmd',
    title: 'Emergency Vet Red Flags: When to Go to the Animal ER Immediately',
    excerpt: 'Know when minutes count. Review the 5 critical veterinary triage red flags—including GDV bloat, male cat urinary blockage, and dyspnea—plus safe transit protocols.',
    category: 'Health & Vaccines',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Emergency Vet', 'Pet First Aid', 'Dog Bloat GDV', 'Cat Blockage', 'Pet Horizon'],
    seoKeyword: 'emergency vet symptoms red flags',
    searchVolume: '9.2K/mo',
    searchRankBadge: 'Critical Triage',
    keyTakeaways: [
      'Unproductive retching and abdominal distension in large dogs indicates life-threatening GDV bloat requiring immediate surgery.',
      'Male cats straining in the litter box without urine output face fatal hyperkalemic cardiac arrest within 24 to 48 hours without relief.',
      'Always call the emergency veterinary hospital en route so staff can prepare an oxygen cage and IV supplies prior to arrival.'
    ],
    trendingSearches: ['#when to go to emergency vet', '#dog bloat symptoms', '#cat urinary blockage emergency', '#pet first aid triage'],
    author: AUTHORS.editorial,
    sourceName: 'American Animal Hospital Association (AAHA)',
    sourceUrl: 'https://www.aaha.org/your-pet/pet-owner-education/ask-aaha/emergency-care-for-pets/',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Emergency Vet Symptoms & Red Flags Guide | Pet Horizon',
    metaDescription: 'Learn the critical emergency vet symptoms that require immediate care: GDV bloat, urinary blockages, respiratory distress, and how to safely transport pets.',
    relatedProductLinks: [
      { feature: 'Emergency Vet Contacts & One-Tap Call', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Setup Emergency Contacts', icon: 'Phone' },
      { feature: 'Clinical Health Card for ER Triage', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Access Records Instantly', icon: 'ShieldCheck' }
    ]
  },

  // 14. Household Toxic Foods & Poison Checklist
  {
    id: 'post-toxic-foods',
    slug: 'toxic-foods-dogs-cats-poison-checklist',
    title: 'Toxic Foods for Dogs & Cats: Dangerous Dosages & Emergency Action Protocol',
    excerpt: 'Accidental ingestion of household toxins requires swift veterinary action. Review dangerous threshold dosages for xylitol, chocolate, grapes, and lilies, plus what NOT to do.',
    category: 'Feeding & Nutrition',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Toxic Foods', 'Pet Poison Control', 'Xylitol Toxicity', 'Chocolate Danger', 'Pet Horizon'],
    seoKeyword: 'toxic foods for dogs and cats',
    searchVolume: '18K/mo',
    searchRankBadge: 'Poison Safety',
    keyTakeaways: [
      'Xylitol (birch bark sweetener) triggers severe hypoglycemia and liver failure in dogs at doses as low as 0.05 grams per pound.',
      'Never induce vomiting with salt or hydrogen peroxide without explicit veterinary instruction due to aspiration pneumonia risks.',
      'Save the toxin wrapper or ingredient list to present immediately to the treating veterinarian.'
    ],
    trendingSearches: ['#dog ate chocolate what to do', '#xylitol toxicity dog', '#grapes toxic to dogs', '#emergency pet poison hotlines'],
    author: AUTHORS.editorial,
    sourceName: 'ASPCA Animal Poison Control Center',
    sourceUrl: 'https://www.aspca.org/pet-care/animal-poison-control',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Toxic Foods for Dogs & Cats Poison Guide | Pet Horizon',
    metaDescription: 'Accredited veterinary guide to toxic foods for pets: chocolate, xylitol, grapes, and lilies. Understand toxic thresholds and emergency triage protocols.',
    relatedProductLinks: [
      { feature: 'Pet Emergency Health Vault', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Store Emergency Info in PetHorizon', icon: 'ShieldCheck' }
    ]
  },

  // 15. Puppy Potty Training Schedule
  {
    id: 'post-potty-training',
    slug: 'puppy-potty-training-schedule-akc-guide',
    title: 'Puppy Potty Training Schedule: Hour-by-Hour Routine to Stop Accidents',
    excerpt: 'House-training success relies on biology rather than punishment. Learn the anatomical bladder formula, the AKC hour-by-hour master schedule, crate sizing rules, and routine sync in PetHorizon.',
    category: 'Dog Care',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Puppy Potty Training', 'House Training Routine', 'Crate Training', 'Puppy Schedule', 'Pet Horizon'],
    seoKeyword: 'puppy potty training schedule',
    searchVolume: '22K/mo',
    searchRankBadge: 'Training Masterclass',
    keyTakeaways: [
      'Puppy bladder capacity formula: Age in months + 1 = maximum hours of retention while awake.',
      'Take puppies out within 10 minutes of waking and 15 minutes after eating or drinking.',
      'Crate size should only permit standing, turning around, and lying down—excess space invites accidents in corners.'
    ],
    trendingSearches: ['#puppy potty training chart', '#how often to take puppy out', '#crate training puppy at night', '#stop dog accidents inside'],
    author: AUTHORS.editorial,
    sourceName: 'American Kennel Club (AKC)',
    sourceUrl: 'https://www.akc.org/expert-advice/training/how-to-potty-train-a-puppy/',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Puppy Potty Training Schedule & AKC Routine | Pet Horizon',
    metaDescription: 'Hour-by-hour puppy potty training routine based on biological retention limits. Crate conditioning tips and family sync in the Pet Horizon app.',
    relatedProductLinks: [
      { feature: 'Puppy Potty & Walk Routine Timeline', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Build Puppy Schedule in PetHorizon', icon: 'Clock' },
      { feature: 'Multi-User Family Routine Sync', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Sync Potty Duty with Family', icon: 'Users' }
    ]
  },

  // 16. Flea, Tick & Heartworm Prevention Protocol
  {
    id: 'post-heartworm',
    slug: 'flea-tick-heartworm-prevention-ahs-protocol',
    title: 'Flea, Tick & Heartworm Prevention: American Heartworm Society 12-Month Protocol',
    excerpt: 'Why 12-month parasite prevention is essential even for indoor pets. Discover mosquito microclimates, missed preventative dose protocols, and in-app medication schedule alerts.',
    category: 'Health & Vaccines',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Heartworm Prevention', 'Flea and Tick', 'AHS Guidelines', 'Pet Medication Schedule', 'Pet Horizon'],
    seoKeyword: 'flea tick heartworm prevention protocol',
    searchVolume: '7.8K/mo',
    searchRankBadge: 'Preventive Care',
    keyTakeaways: [
      'Over 25% of heartworm-positive cats are classified as strictly indoor pets due to mosquitoes infiltrating residential homes.',
      'Monthly chewable preventatives work retroactively, neutralizing microfilariae transmitted in the prior 30 days.',
      'PetHorizon recurring medication alarms guarantee you never miss a monthly chewable or topical application date.'
    ],
    trendingSearches: ['#heartworm medicine schedule', '#flea and tick indoor cats', '#missed heartworm pill protocol', '#preventative vet care'],
    author: AUTHORS.editorial,
    sourceName: 'American Heartworm Society (AHS)',
    sourceUrl: 'https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Flea, Tick & Heartworm Prevention Guide | Pet Horizon',
    metaDescription: 'Understand the American Heartworm Society 12-month parasite protocol. Never miss monthly preventative doses with Pet Horizon medication alarms.',
    relatedProductLinks: [
      { feature: 'Recurring Medication Reminders', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Set Monthly Dose Reminders', icon: 'Clock' },
      { feature: 'Clinical Vaccine & Parasite Vault', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Log Preventatives in PetHorizon', icon: 'ShieldCheck' }
    ]
  },

  // 17. Pet Calorie Calculator & RER Formula
  {
    id: 'post-pet-calories',
    slug: 'pet-calorie-calculator-feeding-guide-apop',
    title: 'Pet Calorie Calculator: How to Calculate Resting Energy Requirements (RER)',
    excerpt: 'Over 56% of dogs and 60% of cats suffer from excess weight. Use accredited veterinary RER formulas to calculate exact daily caloric needs and avoid measuring cup inaccuracies.',
    category: 'Feeding & Nutrition',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Pet Calorie Calculator', 'RER Formula', 'Dog Weight Loss', 'Cat Calorie Count', 'Pet Horizon'],
    seoKeyword: 'pet calorie calculator rer feeding guide',
    searchVolume: '11K/mo',
    searchRankBadge: 'Nutrition Science',
    keyTakeaways: [
      'Resting Energy Requirement (RER) = 70 × (Body Weight in kg)^0.75 is the veterinary gold standard for baseline caloric expenditure.',
      'Standard volumetric measuring cups can overestimate dry food portions by up to 25%; digital kitchen scales provide true accuracy.',
      'Treats must never surpass 10% of total daily calories to prevent nutritional imbalance and weight creep.'
    ],
    trendingSearches: ['#dog calorie calculator', '#how many calories should cat eat', '#rer pet nutrition formula', '#prevent canine obesity'],
    author: AUTHORS.editorial,
    sourceName: 'Association for Pet Obesity Prevention (APOP)',
    sourceUrl: 'https://www.petobesityprevention.org/pet-caloric-needs',
    publishedAt: 'October 26, 2026',
    updatedAt: 'October 28, 2026',
    metaTitle: 'Pet Calorie Calculator & RER Formula Guide | Pet Horizon',
    metaDescription: 'Calculate your pet’s exact daily calories using clinical RER veterinary formulas. Prevent obesity with precise gram portions in the Pet Horizon app.',
    relatedProductLinks: [
      { feature: 'Daily Feeding & Gram Portion Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Food Grams in PetHorizon', icon: 'Clock' },
      { feature: 'Pet Weight & Vitals Growth Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Monitor Pet Weight Trends', icon: 'TrendingUp' }
    ]
  }
];
