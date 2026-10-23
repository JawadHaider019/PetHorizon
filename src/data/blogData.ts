export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  checklist?: string[];
  vetTip?: {
    title: string;
    text: string;
  };
  quote?: {
    text: string;
    author: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: 'Health & Vet' | 'Daily Routines' | 'Family Care' | 'Nutrition' | 'Training';
  readTime: string;
  publishDate: string;
  author: BlogAuthor;
  coverImage: string;
  featured?: boolean;
  tags: string[];
  keyTakeaways: string[];
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'puppy-kitten-vaccination-schedule-guide',
    title: 'The Essential Puppy & Kitten Vaccination Schedule (2026 Vet Guide)',
    subtitle: 'Core vs. non-core inoculations, critical timing intervals, booster milestones, and practical record-keeping to safeguard your puppy or kitten.',
    excerpt: 'Core vs. non-core vaccines, critical timing intervals, booster schedules, and how to track inoculation dates so your furry friend stays protected from day one.',
    category: 'Health & Vet',
    readTime: '6 min read',
    publishDate: 'October 18, 2026',
    author: {
      name: 'Dr. Sarah Mitchell, DVM',
      role: 'Veterinary Advisory Board',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
      bio: 'Dr. Sarah Mitchell has 14 years of companion animal practice experience, specializing in preventative pediatric immunology and senior feline care.'
    },
    coverImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Vaccinations', 'Puppy Care', 'Vet Schedules', 'Preventative Care'],
    keyTakeaways: [
      'Maternal antibodies fade between weeks 6 and 16, creating a critical vulnerability window.',
      'Core vaccines (DHPP for puppies, FVRCP for kittens) must be administered in structured 3 to 4 week intervals.',
      'Rabies is legally mandated in nearly all jurisdictions, typically administered between 12 and 16 weeks of age.',
      'Maintain digital timestamps of lot numbers and clinic dates in your Pet Horizon record keeper for instant vet boarding compliance.'
    ],
    sections: [
      {
        id: 'maternal-immunity',
        heading: '1. Why Timing is Everything: The Maternal Antibody Window',
        paragraphs: [
          'When newborn puppies and kittens nurse during their first 24 to 36 hours of life, they absorb colostrum—milk rich in maternal antibodies. These antibodies provide crucial passive immunity against infectious agents.',
          'However, maternal antibodies also neutralize vaccines if given too early. As these maternal defenses gradually decline between 6 and 16 weeks of age, veterinarians must administer a series of boosters every 3 to 4 weeks until your young pet develops their own active immunity.',
          'Missing an appointment by more than 2 to 3 weeks can leave your pet completely unprotected or require restarting the initial series.'
        ],
        vetTip: {
          title: 'Veterinary Advisory Note',
          text: 'Never expose a puppy or kitten to dog parks, public sidewalks, or unfamiliar animals until 10–14 days following their final 16-week booster.'
        }
      },
      {
        id: 'core-vaccines',
        heading: '2. Core Vaccinations: Non-Negotiable Protection',
        paragraphs: [
          'Core vaccines are considered vital for all dogs and cats regardless of lifestyle, indoor status, or geographic location due to the severity and high transmissibility of the diseases.',
          'For puppies, the core combination vaccine (often called DHPP or DA2PP) protects against Canine Distemper, Infectious Hepatitis, Parvovirus, and Parainfluenza. Parvovirus in particular can survive in soil for months and is notoriously lethal to unvaccinated juveniles.',
          'For kittens, the core FVRCP combination protects against Feline Viral Rhinotracheitis (herpesvirus-1), Calicivirus, and Panleukopenia (feline distemper).'
        ],
        checklist: [
          'Week 6–8: First DHPP (puppies) or FVRCP (kittens) + comprehensive fecal deworming.',
          'Week 10–12: Second DHPP / FVRCP booster + lifestyle risk evaluation (Bordetella / FeLV).',
          'Week 14–16: Final core booster + initial Rabies vaccination (single dose).',
          '1 Year Booster: Revaccination and transition to 1-year or 3-year adult protocol.'
        ]
      },
      {
        id: 'non-core-lifestyle',
        heading: '3. Non-Core Vaccines: Assessing Your Pet’s Lifestyle Risk',
        paragraphs: [
          'Non-core vaccines are determined through a personalized risk assessment conducted with your veterinarian based on where you live and your pet’s routine activities.',
          'For active dogs who visit daycare, boarding facilities, or training classes, Bordetella (kennel cough) and Canine Influenza are almost universally required. Dogs exposed to standing wetlands, woods, or rodents also benefit from Leptospirosis and Lyme vaccines.',
          'For cats, Feline Leukemia Virus (FeLV) is strongly recommended for all kittens and essential for any cat with outdoor access or cohabitating with outdoor felines.'
        ],
        quote: {
          text: 'Preventative pediatric vaccination is the single highest return on investment in veterinary medicine. What costs a few tens of dollars saves thousands in emergency intensive care.',
          author: 'Dr. Sarah Mitchell, DVM'
        }
      },
      {
        id: 'digital-tracking',
        heading: '4. Logging Vaccination Records Digitally in Pet Horizon',
        paragraphs: [
          'Paper vaccination certificates frequently get lost during emergency vet visits, cross-state travel, or boarding reservations. Pet Horizon allows you to capture photos of clinic invoices, auto-calculate 1-year and 3-year booster reminders, and share records with dog sitters in one tap.',
          'You can set automated notifications 30 days and 7 days prior to vaccine expiration, giving you ample time to book an appointment with your preferred clinic before protection lapses.'
        ]
      }
    ],
    relatedSlugs: [
      'mastering-daily-pet-medication-schedules',
      'shared-family-caretaking-prevents-double-feeding',
      '5-subtle-signs-of-feline-dehydration'
    ]
  },
  {
    id: 'post-2',
    slug: 'shared-family-caretaking-prevents-double-feeding',
    title: 'How Shared Family Caretaking Eliminates the "Did Anyone Feed the Dog?" Mystery',
    subtitle: 'Preventing accidental double-feeding, missed medications, and chaotic household routines through real-time multi-caretaker synchronization.',
    excerpt: 'Double-feeding causes accidental pet obesity, while missed meals cause anxiety. Learn how real-time caretaker sync in Pet Horizon keeps the whole household on the same page.',
    category: 'Family Care',
    readTime: '4 min read',
    publishDate: 'October 14, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Pet Behavior & Routine Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Marcus is a canine behavioral consultant helping multi-member families build calm, cooperative environments through consistent daily rhythms.'
    },
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&auto=format&fit=crop&q=80',
    tags: ['Family Hub', 'Feeding Routines', 'Household Sync', 'Dog Care'],
    keyTakeaways: [
      'Over 40% of household pets receive duplicate meals due to miscommunication between family members.',
      'Unpredictable feeding times increase canine anxiety and trigger attention-seeking food begging.',
      'Centralized family dashboards allow parents, kids, and dog walkers to see who completed each task in real time.',
      'Shared accountability transforms pet chores into rewarding teamwork while maintaining strict caloric control.'
    ],
    sections: [
      {
        id: 'the-double-feeding-trap',
        heading: '1. The Anatomy of the Double-Feeding Trap',
        paragraphs: [
          'It is a classic household dilemma: One family member leaves for work at 7:00 AM after filling the dog food bowl. Thirty minutes later, another household member walks into the kitchen. The family dog, a consummate actor, sits by the empty bowl with soulful eyes, acting as if they have not eaten in days.',
          'Without real-time communication, a second scoop of kibble is promptly served. Over months, this extra 200–400 daily calories leads to insidious weight gain, joint stress, and metabolic strain.'
        ],
        vetTip: {
          title: 'Weight Management Fact',
          text: 'Just 10 extra kibbles per day can cause a small dog to gain up to 1 pound of fat per year—equivalent to a human gaining 15 pounds.'
        }
      },
      {
        id: 'behavioral-impact',
        heading: '2. The Psychological Impact of Irregular Schedules',
        paragraphs: [
          'Dogs and cats do not tell time with clocks; their internal rhythms are governed by circadian cycles and environmental cues. When feeding and walking routines vary by hours every day depending on who is home, animals experience anticipatory distress.',
          'Predictability provides a profound sense of safety. When pets know exactly when to expect breakfast, outdoor bathroom relief, and bedtime settling, behavioral issues such as pacing, barking, and destructive chewing dramatically decline.'
        ],
        checklist: [
          'Establish morning and evening feeding windows (e.g. 7:30 AM & 6:00 PM).',
          'Assign designated family roles while preserving universal visibility.',
          'Designate a single measuring cup calibrated to your pet’s exact vet-recommended gram intake.',
          'Check off the task immediately upon completion so other members see the live checkmark.'
        ]
      },
      {
        id: 'family-hub-solution',
        heading: '3. Connecting the Entire Family with Pet Horizon',
        paragraphs: [
          'Pet Horizon’s Family Care Hub replaces confusing sticky notes on the refrigerator with a single synchronized digital dashboard. Whenever a parent, teenager, or external pet sitter completes a morning walk or feeds the cat, a quick tap updates all family devices in real time.',
          'If someone attempts to log a meal that was already checked off 20 minutes earlier, the app gently alerts them that "Marcus already served breakfast at 7:15 AM".'
        ],
        quote: {
          text: 'Harmony in pet parenting begins when the entire household shares one source of truth. It protects your pet’s health and saves family arguments.',
          author: 'Marcus Vance'
        }
      }
    ],
    relatedSlugs: [
      'puppy-kitten-vaccination-schedule-guide',
      'mastering-daily-pet-medication-schedules',
      'creating-stress-free-daily-routine-dogs'
    ]
  },
  {
    id: 'post-3',
    slug: 'mastering-daily-pet-medication-schedules',
    title: 'Never Miss a Dose: Best Practices for Complex Pet Medication Schedules',
    subtitle: 'From thyroid pills and antibiotics to monthly heartworm chewables, here is how structured reminders make prescription administration foolproof.',
    excerpt: 'From antibiotics and thyroid drops to monthly heartworm chewables, managing multi-pet medicine requires precision. Here is how structured alerts make administration stress-free.',
    category: 'Daily Routines',
    readTime: '5 min read',
    publishDate: 'October 10, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Certified Veterinary Technician',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      bio: 'Elena is a veterinary technician with extensive emergency and ICU experience, focusing on client education and chronic medical compliance.'
    },
    coverImage: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=900&auto=format&fit=crop&q=80',
    tags: ['Medications', 'Health Reminders', 'Senior Pets', 'Dosage Tracking'],
    keyTakeaways: [
      'Completing the full course of antibiotics is essential to prevent bacterial resistance, even if your pet seems fully recovered.',
      'Timing intervals matter: "Twice daily" usually requires a strict 12-hour spacing for steady therapeutic blood concentrations.',
      'Always confirm whether medication requires food or must be taken on an empty stomach to prevent gastric irritation.',
      'Set persistent alarm notifications in Pet Horizon that require active acknowledgment before dismissing.'
    ],
    sections: [
      {
        id: 'timing-and-spacing',
        heading: '1. Why "Twice a Day" Doesn’t Just Mean Breakfast and Dinner',
        paragraphs: [
          'When a prescription label states "give 1 tablet every 12 hours" or "twice daily", timing is not merely a suggestion. Pharmaceuticals such as anti-seizure drugs (Phenobarbital, Keppra), heart medications (Pimobendan), and insulin require steady blood plasma levels.',
          'Administering doses 8 hours apart in the morning and evening leaves a dangerous 16-hour trough overnight where medication levels drop below the therapeutic window.',
          'For optimal outcomes, establish two anchor times that fit your workday—such as 7:00 AM and 7:00 PM—and adhere to them within a 30-minute tolerance window.'
        ],
        vetTip: {
          title: 'Critical Veterinary Advice',
          text: 'If you accidentally miss a dose, never double up on the next dose without consulting your veterinarian. Overdosing can cause severe organ toxicity.'
        }
      },
      {
        id: 'administration-tricks',
        heading: '2. Stress-Free Administration Without Traumatizing Your Pet',
        paragraphs: [
          'Coaxing a reluctant pet to swallow pills does not have to be an ordeal. For dogs, low-sodium cheese, peanut butter (strictly xylitol-free), or specialized pill paste treats can work wonders when introduced using the "three-treat method" (one blank treat, one medicated treat, immediately followed by another blank treat).',
          'For felines, pill crushers can be used only if the medication is not enteric-coated or extended-release. Always ask your vet or compounding pharmacist if liquid suspensions or transdermal ear gels are available for stubborn cats.'
        ],
        checklist: [
          'Verify pill label: Check medication name, dosage strength, and expiration date.',
          'Review food requirements: Clarify if the pill needs a meal or empty stomach.',
          'Inspect behavior 30 minutes post-dose for vomiting, lethargy, or adverse reactions.',
          'Log administration timestamp immediately in Pet Horizon.'
        ]
      },
      {
        id: 'tracking-chronic-rx',
        heading: '3. Managing Monthly Preventatives & Refills',
        paragraphs: [
          'Monthly preventatives (heartworm chewables, flea/tick topicals) are notoriously easy to forget because 30 days is just long enough to slip one’s memory.',
          'Pet Horizon enables you to set recurring monthly alerts that repeat on the 1st of every month, complete with photo verification of the box and remaining refill count reminders.'
        ]
      }
    ],
    relatedSlugs: [
      'puppy-kitten-vaccination-schedule-guide',
      '5-subtle-signs-of-feline-dehydration',
      'why-pet-activity-journal-improves-longevity'
    ]
  },
  {
    id: 'post-4',
    slug: '5-subtle-signs-of-feline-dehydration',
    title: '5 Subtle Signs Your Cat Might Be Dehydrated or Stressed',
    subtitle: 'Feline hydration is notoriously tricky to detect. Discover skin turgor testing, subtle litter box indicators, and how keeping an activity diary helps catch kidney issues early.',
    excerpt: 'Feline hydration is notoriously tricky to detect. Discover skin turgor testing, subtle litter box indicators, and how keeping an activity diary helps catch kidney issues early.',
    category: 'Health & Vet',
    readTime: '5 min read',
    publishDate: 'October 05, 2026',
    author: {
      name: 'Dr. Sarah Mitchell, DVM',
      role: 'Veterinary Advisory Board',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
      bio: 'Dr. Sarah Mitchell has 14 years of companion animal practice experience, specializing in preventative pediatric immunology and senior feline care.'
    },
    coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=80',
    tags: ['Cat Care', 'Hydration', 'Preventative Health', 'Feline Wellness'],
    keyTakeaways: [
      'Cats naturally have a low thirst drive due to their desert ancestors, obtaining moisture primarily from prey.',
      'The skin tent test (scruff elasticity) is an easy at-home test to gauge moderate to severe dehydration.',
      'Sticky, pale gums and dry, hard feces in the litter box are strong indicators of poor fluid balance.',
      'Switching to moisture-rich wet food and circulating water fountains significantly reduces chronic feline kidney disease risk.'
    ],
    sections: [
      {
        id: 'evolutionary-origins',
        heading: '1. Why Cats Are Chronically Prone to Subclinical Dehydration',
        paragraphs: [
          'Domestic cats evolved from the African wildcat (Felis lybica), a desert predator that obtained up to 70% of its moisture directly from fresh prey. Consequently, modern felines have a notoriously muted thirst sensation and will rarely drink enough water from a static bowl to offset an all-dry kibble diet.',
          'Over years, chronic subclinical dehydration places sustained micro-stress on delicate feline nephrons, significantly accelerating the onset of Chronic Kidney Disease (CKD) and feline lower urinary tract disease (FLUTD).'
        ],
        vetTip: {
          title: 'Veterinarian Pro Tip',
          text: 'Dry kibble contains only 8–10% moisture, while wet canned food contains 75–82%. Introducing even one meal of wet food per day can double a cat’s daily hydration.'
        }
      },
      {
        id: 'five-warning-signs',
        heading: '2. The 5 Clinical Warning Signs of Feline Dehydration',
        paragraphs: [
          'Because cats are masters at masking discomfort, pet parents must watch for these physical signs:'
        ],
        checklist: [
          'Loss of Skin Elasticity (Skin Tent Test): Gently pull up the loose skin over your cat’s shoulders and release. In a well-hydrated cat, it snaps back instantly. If it retracts slowly or remains tented, dehydration is present.',
          'Tacky, Dry Gums: Touch your cat’s upper gums. They should feel slick and wet like your own mouth. If they feel sticky or dry, fluid deficit is underway.',
          'Sunken Eyes: Dehydration reduces fat pad volume behind the eye sockets, causing eyes to appear dull or slightly recessed.',
          'Litter Box Changes: Very small, rock-hard feces or decreased urine clumping indicates the kidneys are over-concentrating waste to conserve water.',
          'Lethargy & Vocalization by Water Bowls: Sitting hunch-backed near water dishes or suddenly drinking from faucets.'
        ]
      },
      {
        id: 'practical-remedies',
        heading: '3. Actionable Ways to Boost Your Cat’s Daily Water Intake',
        paragraphs: [
          'Never place water bowls directly beside the litter box or food dish; cats instinctively avoid drinking near waste or kill sites. Instead, place wide ceramic or stainless steel bowls in multiple quiet rooms.',
          'Invest in a circulating stainless steel water fountain. Cats are attracted to running water because flowing water signifies cleanliness in nature.',
          'In Pet Horizon, log your cat’s weekly weight and litter box patterns in the Daily Activity Journal to detect early warning signs before they escalate into emergencies.'
        ]
      }
    ],
    relatedSlugs: [
      'puppy-kitten-vaccination-schedule-guide',
      'mastering-daily-pet-medication-schedules',
      'why-pet-activity-journal-improves-longevity'
    ]
  },
  {
    id: 'post-5',
    slug: 'creating-stress-free-daily-routine-dogs',
    title: 'Building a Calming Daily Routine for High-Energy & Anxious Dogs',
    subtitle: 'How pairing mental enrichment, morning walks, structured feeding, and quiet decompression time transforms reactive behavior.',
    excerpt: 'Dogs thrive on predictability. How pairing mental enrichment, morning walks, structured feeding, and quiet times helps reduce separation anxiety and unwanted barking.',
    category: 'Training',
    readTime: '7 min read',
    publishDate: 'September 28, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Pet Behavior & Routine Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Marcus is a canine behavioral consultant helping multi-member families build calm, cooperative environments through consistent daily rhythms.'
    },
    coverImage: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=900&auto=format&fit=crop&q=80',
    tags: ['Training', 'Mental Enrichment', 'Anxiety Relief', 'Dog Walking'],
    keyTakeaways: [
      'Physical exercise alone cannot fix canine anxiety; mental stimulation burns twice as much mental energy.',
      'Structured "decompression walks" on a long line allow sniffing, which actively lowers canine heart rates.',
      'Create designated calm zones in your home where dogs are never disturbed by loud noises or children.',
      'Use Pet Horizon to schedule balanced intervals of activity, mental puzzles, and deep restorative sleep.'
    ],
    sections: [
      {
        id: 'the-exhaustion-myth',
        heading: '1. The Exhaustion Myth: Why "A Tired Dog" Isn’t Always a Happy Dog',
        paragraphs: [
          'Many owners believe that if an anxious dog is bouncing off the walls, running them for two hours at the park will solve the problem. In reality, intense cardiovascular exercise merely builds an athletic endurance dog who requires increasingly intense stimulation to tire out, often keeping cortisol levels chronically elevated.',
          'True calmness is a skill that must be taught. Mental work—such as scent games, lick mats, and snuffle mats—engages olfactory receptors that stimulate the release of dopamine and serotonin, naturally decompressing an overstimulated canine brain.'
        ],
        vetTip: {
          title: 'Behaviorist Insight',
          text: 'Just 15 minutes of dedicated scent-work or nose games provides mental fatigue comparable to a 60-minute brisk sidewalk walk.'
        }
      },
      {
        id: 'ideal-daily-rhythm',
        heading: '2. The Blueprint for a Balanced Daily Rhythm',
        paragraphs: [
          'Adult dogs require 12 to 14 hours of sleep per day, while puppies need 18 to 20 hours. When dogs miss daytime naps due to household commotion, they exhibit overtired crankiness, mouthing, and frantic pacing.'
        ],
        checklist: [
          '7:00 AM – Morning Potty & Sniff Walk: 25–35 minutes at a relaxed pace where the dog chooses what to sniff.',
          '8:00 AM – Breakfast in a Puzzle Feeder: Discard the regular food bowl; feed kibble in a puzzle or scatter in grass.',
          '9:00 AM–12:30 PM – Morning Rest Window: Quiet room, white noise, and no human disturbance.',
          '1:00 PM – Midday Mental Break: 10 minutes of positive reinforcement trick training + potty relief.',
          '6:00 PM – Dinner & Frozen Lick Mat: Licking releases calming endorphins, settling the dog for family evening time.'
        ]
      },
      {
        id: 'tracking-triggers',
        heading: '3. Pinpointing Triggers with the Activity Journal',
        paragraphs: [
          'When behavior issues flare up, owners often feel helpless. Logging sudden reactivity episodes in Pet Horizon’s Daily Journal allows you to cross-reference sleep deficits, missed meals, or weather changes with behavioral spikes, giving your certified trainer actionable data.'
        ]
      }
    ],
    relatedSlugs: [
      'shared-family-caretaking-prevents-double-feeding',
      'why-pet-activity-journal-improves-longevity',
      'mastering-daily-pet-medication-schedules'
    ]
  },
  {
    id: 'post-6',
    slug: 'why-pet-activity-journal-improves-longevity',
    title: 'The Science of Pet Memory Logs: Why Daily Activity Journals Extend Longevity',
    subtitle: 'Tracking subtle changes in appetite, energy, and mobility over months gives your veterinarian a longitudinal view that a single 15-minute exam can never reveal.',
    excerpt: 'Tracking subtle changes in appetite, energy, and mobility over months gives your veterinarian a longitudinal view that a single 15-minute exam can never reveal.',
    category: 'Daily Routines',
    readTime: '4 min read',
    publishDate: 'September 20, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Certified Veterinary Technician',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      bio: 'Elena is a veterinary technician with extensive emergency and ICU experience, focusing on client education and chronic medical compliance.'
    },
    coverImage: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&auto=format&fit=crop&q=80',
    tags: ['Pet Journal', 'Longevity', 'Medical History', 'Health Records'],
    keyTakeaways: [
      'Pets age 5 to 7 times faster than humans, compressing significant physiological changes into a few short months.',
      'Subtle trends like taking 5 seconds longer to stand up or drinking 20% more water are early signs of treatable arthritis or renal disease.',
      'Veterinarians rely heavily on owner observations; accurate logs transform guessing into evidence-based treatment plans.',
      'Keeping milestone photo memories creates an irreplaceable chronicle of your pet’s lifelong journey.'
    ],
    sections: [
      {
        id: 'longitudinal-advantage',
        heading: '1. The Longitudinal Advantage: Beyond the 15-Minute Vet Exam',
        paragraphs: [
          'During an annual veterinary wellness exam, pets are frequently adrenaline-surged. Cats freeze in terror, and dogs may mask pain due to adrenaline spikes. A dog with severe early hip osteoarthritis can appear completely sound in the exam room, only to limp agonizingly at home when rising from sleep.',
          'A digital activity log bridges this diagnostic gap. When you show your veterinarian a 60-day trend line showing that your dog has gradually declined from 40-minute walks to 15-minute walks, the clinical decision becomes clear.'
        ],
        vetTip: {
          title: 'Clinical Diagnostic Reality',
          text: 'Veterinary medicine is 80% history and 20% physical exam. Comprehensive owner logs provide the highest diagnostic yield in chronic disease management.'
        }
      },
      {
        id: 'what-to-track',
        heading: '2. Four Crucial Metrics to Record Weekly',
        paragraphs: [
          'You don’t need to spend hours each day journaling. Tracking these four key parameters in Pet Horizon once or twice weekly is sufficient to capture early disease progression:'
        ],
        checklist: [
          'Appetite Speed & Water Intake: Did they finish meals with enthusiasm, or leave kibble behind? Notice any bowl refills?',
          'Mobility & Rising Speed: Notice any stiffness in the back legs after waking up or reluctance to jump into the car?',
          'Stool Quality & Consistency: Normal firm logs vs. soft, mucous-covered, or irregular movements.',
          'Mood & Engagement: Eagerness to greet family members at the door and enthusiasm for familiar toys.'
        ]
      },
      {
        id: 'memory-preservation',
        heading: '3. A Lifelong Memory Archive for Your Family',
        paragraphs: [
          'Beyond clinical utility, daily journals preserve the joyous micro-moments that define life with pets—their goofy sleeping positions, the day they learned to swim, or their celebration on their adoption day.',
          'Pet Horizon securely archives your pet’s journey with photos and notes, giving you a treasured timeline to look back upon for years to come.'
        ]
      }
    ],
    relatedSlugs: [
      'puppy-kitten-vaccination-schedule-guide',
      'mastering-daily-pet-medication-schedules',
      'creating-stress-free-daily-routine-dogs'
    ]
  }
];

export const BLOG_CATEGORIES = [
  'All Articles',
  'Health & Vet',
  'Daily Routines',
  'Family Care',
  'Training'
] as const;
