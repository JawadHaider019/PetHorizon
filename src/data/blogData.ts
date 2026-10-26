export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Health & Vet' | 'Daily Routines' | 'Nutrition' | 'Training';
  readTime: string;
  sourceName: string;
  sourceUrl: string;
  coverImage: string;
  featured?: boolean;
  tags: string[];
  seoKeyword: string;
  searchVolume: string;
  searchRankBadge: string;
  keyTakeaways: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'toxic-foods-dogs-cats-poison-checklist',
    title: 'Toxic Foods for Dogs & Cats: Official Veterinary Poison Checklist',
    excerpt: 'Detailed emergency toxicity guide from ASPCA Poison Control on chocolate, xylitol, grapes, and alliums, including the critical 15-minute emergency decontamination protocol.',
    category: 'Health & Vet',
    readTime: '6 min read',
    sourceName: 'ASPCA Animal Poison Control',
    sourceUrl: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets',
    coverImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Toxic Foods', 'Pet Poison', 'Emergency Vet', 'Dog Health'],
    seoKeyword: 'toxic foods for dogs and cats',
    searchVolume: '165K/mo',
    searchRankBadge: '🔥 #1 Search Query',
    keyTakeaways: [
      'Xylitol triggers severe hypoglycemia and acute liver failure in dogs within 30 minutes.',
      'Even a single grape or raisin can cause acute anuric kidney failure in canines.',
      'True lilies cause fatal renal necrosis in cats from microscopic pollen contact.',
      'Never induce vomiting with hydrogen peroxide without direct emergency vet guidance.'
    ],
    author: {
      name: 'Dr. Tina Wismer, DVM',
      role: 'Senior Director, ASPCA Animal Poison Control',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'post-2',
    slug: 'puppy-potty-training-schedule-akc-guide',
    title: 'Puppy Potty Training: Hour-by-Hour Vet & AKC Routine Guide',
    excerpt: 'The American Kennel Club standard house-training timetable, crate conditioning methods, and biological bladder equations for fast accident-free results.',
    category: 'Training',
    readTime: '5 min read',
    sourceName: 'American Kennel Club (AKC)',
    sourceUrl: 'https://www.akc.org/expert-advice/training/how-to-potty-train-a-puppy/',
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&auto=format&fit=crop&q=80',
    tags: ['Puppy Training', 'Potty Routine', 'Crate Training', 'AKC Guide'],
    seoKeyword: 'puppy potty training schedule',
    searchVolume: '110K/mo',
    searchRankBadge: '⭐ High-Rank Evergreen',
    keyTakeaways: [
      'Bladder formula: Age in months equals maximum daytime retention in hours.',
      'Always take puppies out within 10 minutes of waking and 15 minutes post-meals.',
      'Reward outdoor elimination with a high-value treat within 2 seconds of completion.',
      'Crate train using positive associations rather than isolation or discipline.'
    ],
    author: {
      name: 'Jan Reisen',
      role: 'AKC Canine Training Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'post-3',
    slug: 'feline-kidney-disease-dehydration-cornell',
    title: 'Feline Kidney Disease & Dehydration: 5 Early Signs Pet Parents Miss',
    excerpt: 'Comprehensive clinical insights from Cornell University Feline Health Center on early CKD detection, scruff elasticity tests, and moisture diets.',
    category: 'Health & Vet',
    readTime: '5 min read',
    sourceName: 'Cornell Feline Health Center',
    sourceUrl: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease',
    coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=80',
    tags: ['Cat Care', 'Kidney Disease', 'Hydration', 'Senior Cats'],
    seoKeyword: 'signs of dehydrated cat kidney disease',
    searchVolume: '75K/mo',
    searchRankBadge: '🩺 High-Intent Vet Topic',
    keyTakeaways: [
      'Over 30% of cats over age 10 suffer from chronic renal disease.',
      'The skin tent test and tacky gum feel are reliable at-home hydration checks.',
      'Expanding urine clump volume in the litter box indicates loss of kidney concentrating ability.',
      'Switching to moisture-rich wet food and running fountains preserves nephron health.'
    ],
    author: {
      name: 'Cornell Veterinary Faculty',
      role: 'Cornell College of Veterinary Medicine',
      avatar: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'post-4',
    slug: 'emergency-vet-symptoms-red-flags-petmd',
    title: 'Emergency Vet Red Flags: 6 Critical Symptoms You Must Never Ignore',
    excerpt: 'PetMD emergency triage guide on GDV bloat, male feline urethral blockages, sudden hind-leg weakness, and when every minute counts.',
    category: 'Health & Vet',
    readTime: '6 min read',
    sourceName: 'PetMD / Chewy Health',
    sourceUrl: 'https://www.petmd.com/dog/emergency/common-emergencies/emergency-vet-symptoms',
    coverImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&auto=format&fit=crop&q=80',
    tags: ['Emergency Vet', 'Critical Care', 'First Aid', 'Pet Safety'],
    seoKeyword: 'emergency vet symptoms dogs cats',
    searchVolume: '92K/mo',
    searchRankBadge: '🚨 Critical Search Query',
    keyTakeaways: [
      'Unproductive retching in deep-chested dogs indicates GDV bloat—a life emergency.',
      'A male cat straining in the litter box requires urgent relief within 24h to prevent cardiac arrest.',
      'Pale, blue, or muddy gums signal severe shock or internal bleeding.',
      'Always phone the ER clinic ahead of arrival so triage teams prepare oxygen cages.'
    ],
    author: {
      name: 'Dr. Sandra Mitchell, DVM, DABVP',
      role: 'Veterinary Advisory Board, PetMD',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'post-5',
    slug: 'flea-tick-heartworm-prevention-ahs-protocol',
    title: 'Heartworm & Parasite Prevention: Official Year-Round Protocol',
    excerpt: 'The American Heartworm Society standard guidelines on mosquito-borne transmission, oral isoxazolines, and what to do if you miss a monthly dose.',
    category: 'Daily Routines',
    readTime: '5 min read',
    sourceName: 'American Heartworm Society (AHS)',
    sourceUrl: 'https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics',
    coverImage: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=900&auto=format&fit=crop&q=80',
    tags: ['Heartworm', 'Flea & Tick', 'Preventative Care', 'Vet Protocols'],
    seoKeyword: 'flea and tick prevention schedule dogs',
    searchVolume: '84K/mo',
    searchRankBadge: '🛡️ Preventative Care Standard',
    keyTakeaways: [
      'Indoor pets are not exempt: over 25% of heartworm-positive cats are indoor-only.',
      'Skipping winter doses is unsafe as micro-climates sustain fleas and ticks year-round.',
      'If a dose is missed by >30 days, give immediately and re-test in 6 months.',
      'Monthly prevention costs dollars; surgical/melarsomine treatment costs thousands.'
    ],
    author: {
      name: 'American Heartworm Society',
      role: 'Veterinary Scientific Committee',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'post-6',
    slug: 'pet-calorie-calculator-feeding-guide-apop',
    title: 'Pet Calorie Calculator: How Much Food Does Your Dog or Cat Really Need?',
    excerpt: 'Association for Pet Obesity Prevention guidelines on Resting Energy Requirements (RER), Body Condition Scoring (BCS 1–9), and gram-scale feeding.',
    category: 'Nutrition',
    readTime: '5 min read',
    sourceName: 'Pet Obesity Prevention (APOP)',
    sourceUrl: 'https://www.petobesityprevention.org/pet-weight-calculator',
    coverImage: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&auto=format&fit=crop&q=80',
    tags: ['Nutrition', 'Calorie Calculator', 'Weight Management', 'Feeding Guide'],
    seoKeyword: 'how much should I feed my dog calorie calculator',
    searchVolume: '125K/mo',
    searchRankBadge: '🔥 #1 Nutrition Query',
    keyTakeaways: [
      'Over 59% of dogs and 61% of cats are clinically overweight, reducing lifespan by 2+ years.',
      'Resting Energy formula: RER (kcal/day) = 70 × (Body Weight in kg)^0.75.',
      'Treats must never exceed 10% of total daily caloric intake.',
      'Standard volume measuring cups introduce up to 25% error versus kitchen gram scales.'
    ],
    author: {
      name: 'Dr. Ernie Ward, DVM',
      role: 'Founder, Association for Pet Obesity Prevention',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    }
  }
];

export const BLOG_CATEGORIES = [
  'All Articles',
  'Health & Vet',
  'Daily Routines',
  'Nutrition',
  'Training'
] as const;
