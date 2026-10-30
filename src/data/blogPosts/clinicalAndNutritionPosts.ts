import { AUTHORS, BlogPost } from './authors';

export const CLINICAL_AND_NUTRITION_POSTS: BlogPost[] = [
  // 12. Feline Kidney Disease & Cornell Dehydration Protocol
  {
    id: 'post-cat-kidney',
    slug: 'feline-kidney-disease-dehydration-cornell',
    title: 'Feline Chronic Kidney Disease (CKD): Early Warning Signs & Cornell Hydration Protocol',
    excerpt: 'Over 30% of senior cats experience renal decline. Learn early warning signs like litter clump expansion, the scruff tent test, and the Cornell feline moisture protocol to preserve kidney nephrons.',
    category: 'Cat Care',
    readTime: '14 min read',
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
    trendingSearches: ['#cat kidney disease signs', '#feline dehydration test', '#wet food for cat kidneys', '#senior cat care', '#cat water fountain benefits'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
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
    readTime: '13 min read',
    coverImage: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
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
    publishedAt: 'October 26, 2026',
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
    readTime: '15 min read',
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
    publishedAt: 'October 26, 2026',
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
    readTime: '14 min read',
    coverImage: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
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
    publishedAt: 'October 26, 2026',
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
    readTime: '12 min read',
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
    publishedAt: 'October 26, 2026',
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
    readTime: '13 min read',
    coverImage: 'https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.45&q=85',
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
    publishedAt: 'October 26, 2026',
    metaTitle: 'Pet Calorie Calculator & RER Formula Guide | Pet Horizon',
    metaDescription: 'Calculate your pet’s exact daily calories using clinical RER veterinary formulas. Prevent obesity with precise gram portions in the Pet Horizon app.',
    relatedProductLinks: [
      { feature: 'Daily Feeding & Gram Portion Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Food Grams in PetHorizon', icon: 'Clock' },
      { feature: 'Pet Weight & Vitals Growth Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Monitor Pet Weight Trends', icon: 'TrendingUp' }
    ]
  },

  // 18. Cat Feeding Schedule & Indoor Enrichment Guide
  {
    id: 'post-cat-feeding-enrichment',
    slug: 'cat-feeding-schedule-indoor-enrichment-guide',
    title: 'Cat Feeding Schedule & Indoor Enrichment Guide: Portions, Hydration & Activity by Age',
    excerpt: 'Obligate carnivores require moisture-dense diets and mental stimulation. Discover veterinary feeding schedules for kittens to seniors, wet food strategies for urinary health, and indoor hunting games.',
    category: 'Cat Care',
    readTime: '14 min read',
    coverImage: 'https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.45&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['Cat Feeding Schedule', 'Indoor Cat Enrichment', 'FLUTD Prevention', 'Kitten Care', 'Pet Horizon'],
    seoKeyword: 'cat feeding schedule indoor enrichment guide',
    searchVolume: '14.5K/mo',
    searchRankBadge: 'Cat Care Pillar',
    keyTakeaways: [
      'Small, frequent wet-food meals align with feline physiology and provide critical dietary moisture to prevent urinary crystals.',
      'Indoor enrichment via puzzle feeders, vertical territory, and wand play stimulates the predatory hunting cycle and reduces anxiety.',
      'PetHorizon allows multi-caregiver households to log meals and prevent overfeeding in indoor cats.'
    ],
    trendingSearches: ['#cat feeding schedule', '#how often to feed cat wet food', '#indoor cat enrichment ideas', '#puzzle feeder for cats'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Cat Feeding Schedule & Indoor Enrichment Guide | Pet Horizon',
    metaDescription: 'Veterinary guide to feline nutrition and indoor enrichment. Learn daily meal schedules by age, wet food hydration tips, and track feeding in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Feline Feeding & Hydration Tracker', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Schedule Cat Meals in PetHorizon', icon: 'Clock' },
      { feature: 'Family QR Household Sync', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Sync Cat Care with Family', icon: 'Users' }
    ]
  },

  // 19. Best Pet Care Apps & Digital Organization
  {
    id: 'post-best-pet-apps',
    slug: 'best-pet-care-apps-medication-reminders-family-sync',
    title: 'Best Pet Care Apps for 2026: Medication Reminders, Family Coordination & Health Logs',
    excerpt: 'Tired of asking "Did you feed the dog?" Compare the top pet care apps of 2026 for medication alarms, vaccination passport storage, and seamless multi-caregiver household sync.',
    category: 'Family & Routine',
    readTime: '15 min read',
    coverImage: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.35&q=85',
    featured: true,
    targetLocation: 'Global',
    tags: ['Best Pet Care Apps', 'Pet Medication Reminder App', 'Shared Pet Care', 'Pet Health Log', 'Pet Horizon'],
    seoKeyword: 'best pet care apps medication reminders family sync',
    searchVolume: '5.6K/mo',
    searchRankBadge: 'App Category Leader',
    keyTakeaways: [
      'Dedicated pet apps eliminate medication double-dosing and meal confusion across busy partners and family members.',
      'Digital Health Cards enable 1-tap PDF and QR sharing with boarding kennels, groomers, and emergency veterinary hospitals.',
      'PetHorizon is 100% free on Android with zero banner advertisements and complete multi-caretaker family synchronization.'
    ],
    trendingSearches: ['#best pet care app', '#pet medication reminder app', '#shared dog walking app', '#pet health record organizer'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Best Pet Care Apps for 2026 | Pet Horizon Software Guide',
    metaDescription: 'Discover the top pet care apps of 2026 for medication alerts, vaccination records, and shared family routines. Compare features and download Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Pet Horizon App on Google Play', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Download Pet Horizon Free', icon: 'Download' },
      { feature: 'Family Hub QR Pairing', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Explore Family Hub Sync', icon: 'Users' }
    ]
  },

  // 20. Dog Separation Anxiety
  {
    id: 'post-dog-separation-anxiety',
    slug: 'dog-separation-anxiety-training-routine-guide',
    title: 'Dog Separation Anxiety: Proven Calming Routines, Desensitization Schedule & Training Guide',
    excerpt: 'Is your dog barking, pacing, or chewing door frames when left alone? Discover clinical desensitization schedules, departure cue fading protocols, and how routine tracking restores calm independence.',
    category: 'Dog Care',
    readTime: '15 min read',
    coverImage: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.45&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Dog Separation Anxiety', 'Separation Anxiety Dog Training', 'Alone Time Training', 'Canine Panic', 'Desensitization', 'Pet Horizon'],
    seoKeyword: 'dog separation anxiety training',
    searchVolume: '38K/mo',
    searchRankBadge: 'Behavioral Pillar',
    keyTakeaways: [
      'True separation anxiety is an acute panic disorder occurring within 15 minutes of owner departure, distinct from midday boredom.',
      'Systematic desensitization by uncoupling departure cues and practicing micro-absences rewires canine fear responses.',
      'Never use punishment collars or aversive methods, which increase panic and trigger fear aggression.'
    ],
    trendingSearches: ['#dog separation anxiety training', '#separation anxiety dog training', '#how to cure separation anxiety in dogs', '#leaving dog alone training', '#calming anxious dog'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Dog Separation Anxiety Training: Calming Routine & Steps',
    metaDescription: 'Step-by-step dog separation anxiety training guide. Veterinary desensitization schedule, departure cue fading, and daily routine tracking.',
    relatedProductLinks: [
      { feature: 'Daily Routine Timeline & Calming Logs', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Track Alone Time in PetHorizon', icon: 'Clock' },
      { feature: 'Family Hub Caregiver Sync', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Sync Household Routines', icon: 'Users' }
    ]
  },

  // 21. Introducing a Kitten to an Older Cat
  {
    id: 'post-introduce-kitten',
    slug: 'how-to-introduce-kitten-to-older-cat-guide',
    title: 'How to Introduce a Kitten to an Older Cat: Step-by-Step Timeline & Protocol',
    excerpt: 'Prevent feline territorial aggression and stress spraying. Follow our 4-phase introduction timetable from sanctuary room isolation and scent swapping to supervised harmonious coexistence.',
    category: 'Cat Care',
    readTime: '14 min read',
    coverImage: 'https://images.unsplash.com/photo-1658575988522-1e142a581888?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.45&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['How to Introduce Kitten to Older Cat', 'Introducing Kitten to Older Cat', 'Kitten Timetable', 'Cat Introduction', 'Multi-Cat Household', 'Pet Horizon'],
    seoKeyword: 'how to introduce kitten to older cat timetable',
    searchVolume: '18K/mo',
    searchRankBadge: 'Cat Harmony',
    keyTakeaways: [
      'Territorial cats require gradual scent desensitization over 10 to 21 days before physical contact ever occurs.',
      'Never allow cats to "fight it out"—traumatic fights permanently destroy inter-cat trust.',
      'Provide N + 1 resources: 2 cats require 3 litter boxes, 3 water bowls, and separate feeding stations.'
    ],
    trendingSearches: ['#how to introduce kitten to older cat', '#introducing kitten to older cat', '#older cat hissing at kitten', '#kitten timetable schedule'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    metaTitle: 'How to Introduce Kitten to Older Cat: Step-by-Step Timetable',
    metaDescription: 'Complete timetable to introduce a kitten to an older cat. 4-phase scent swapping protocol, barrier feeding schedule, and veterinary calming steps.',
    relatedProductLinks: [
      { feature: 'Multi-Cat Profiles & Feeding Logs', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Manage Multi-Cat Profiles', icon: 'Users' }
    ]
  },

  // 22. Dog Grooming at Home
  {
    id: 'post-dog-grooming-home',
    slug: 'dog-grooming-at-home-beginners-step-by-step-guide',
    title: 'Dog Grooming at Home: Complete Beginner Guide to Nail Trimming, Teeth Brushing & Coat Care',
    excerpt: 'Save hundreds in grooming fees while safeguarding your dog’s coat and skin. Master safe nail trimming without cutting the quick, line brushing double coats, ear flush protocols, and home baths.',
    category: 'Dog Care',
    readTime: '15 min read',
    coverImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Dog Grooming', 'Nail Trimming', 'Double Coat Brushing', 'Ear Cleaning', 'Pet Horizon'],
    seoKeyword: 'dog grooming at home beginners guide',
    searchVolume: '14.5K/mo',
    searchRankBadge: 'Home Hygiene',
    keyTakeaways: [
      'Look for the dark central dot when trimming black dog nails to stop immediately before cutting the living quick.',
      'Line brushing parts the double coat to the skin line, preventing dense pelt-like mats and hot spots.',
      'Never insert cotton swabs into canine ear canals; use squishing ear flushes and wipe the outer flap.'
    ],
    trendingSearches: ['#dog grooming at home', '#how to trim dog nails without bleeding', '#line brushing dog', '#cleaning dog ears'],
    author: AUTHORS.careTeam,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Dog Grooming at Home: Beginner Step-by-Step Guide | Pet Horizon',
    metaDescription: 'Learn how to groom your dog at home. Master nail trimming without bleeding, line brushing double coats, ear cleaning, and routine bath schedules.',
    relatedProductLinks: [
      { feature: 'Grooming Schedule & Task Reminders', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Schedule Grooming in PetHorizon', icon: 'Clock' }
    ]
  },

  // 23. Dog Dental Care
  {
    id: 'post-dog-dental-care',
    slug: 'dog-dental-care-brushing-teeth-periodontal-guide',
    title: 'Dog Dental Care: How to Brush Teeth, Prevent Periodontal Disease & Veterinary Cleaning Guide',
    excerpt: 'Over 80% of dogs over age three suffer from active periodontal disease. Discover how daily enzymatic brushing adds 2 to 4 years to your dog’s life, VOHC chew seals, and anesthesia truths.',
    category: 'Health & Vaccines',
    readTime: '14 min read',
    coverImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
    featured: false,
    targetLocation: 'Global',
    tags: ['Dog Dental Care', 'Brushing Dog Teeth', 'Periodontal Disease', 'VOHC Chews', 'Pet Horizon'],
    seoKeyword: 'dog dental care brushing teeth guide',
    searchVolume: '11K/mo',
    searchRankBadge: 'Dental Health',
    keyTakeaways: [
      'Bacteria from untreated dental disease enters the bloodstream, damaging heart valves, kidneys, and liver.',
      'Human toothpaste contains toxic Xylitol and foaming agents; always use poultry or beef enzymatic pet paste.',
      'Look for the official Veterinary Oral Health Council (VOHC) seal on chews for proven clinical plaque reduction.'
    ],
    trendingSearches: ['#dog dental care', '#how to brush dog teeth', '#signs of periodontal disease dog', '#enzymatic dog toothpaste'],
    author: AUTHORS.editorial,
    publishedAt: 'October 26, 2026',
    metaTitle: 'Dog Dental Care & Teeth Brushing Guide | Pet Horizon',
    metaDescription: 'Protect your dog against periodontal disease. Step-by-step tooth brushing habituation, VOHC dental chews, and oral health tracking in Pet Horizon.',
    relatedProductLinks: [
      { feature: 'Dental Routine & Milestone Log', url: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon', ctaText: 'Log Dental Care in PetHorizon', icon: 'ShieldCheck' }
    ]
  }
];
