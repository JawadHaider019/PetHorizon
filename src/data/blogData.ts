export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Health & Vet' | 'Daily Routines' | 'Family Care' | 'Nutrition' | 'Training';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'puppy-kitten-vaccination-schedule-guide',
    title: 'The Essential Puppy & Kitten Vaccination Schedule (2026 Vet Guide)',
    excerpt: 'Core vs. non-core vaccines, critical timing intervals, booster schedules, and how to track inoculation dates so your furry friend stays protected from day one.',
    category: 'Health & Vet',
    readTime: '6 min read',
    publishDate: 'October 18, 2026',
    author: {
      name: 'Dr. Sarah Mitchell, DVM',
      role: 'Veterinary Advisory Board',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Vaccinations', 'Puppy Care', 'Vet Schedules', 'Preventative Care']
  },
  {
    id: 'post-2',
    slug: 'shared-family-caretaking-prevents-double-feeding',
    title: 'How Shared Family Caretaking Eliminates the "Did Anyone Feed the Dog?" Mystery',
    excerpt: 'Double-feeding causes accidental pet obesity, while missed meals cause anxiety. Learn how real-time caretaker sync in Pet Horizon keeps the whole household on the same page.',
    category: 'Family Care',
    readTime: '4 min read',
    publishDate: 'October 14, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Pet Behavior & Routine Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&auto=format&fit=crop&q=80',
    tags: ['Family Hub', 'Feeding Routines', 'Household Sync', 'Dog Care']
  },
  {
    id: 'post-3',
    slug: 'mastering-daily-pet-medication-schedules',
    title: 'Never Miss a Dose: Best Practices for Complex Pet Medication Schedules',
    excerpt: 'From antibiotics and thyroid drops to monthly heartworm chewables, managing multi-pet medicine requires precision. Here is how structured alerts make administration stress-free.',
    category: 'Daily Routines',
    readTime: '5 min read',
    publishDate: 'October 10, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Certified Veterinary Technician',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=900&auto=format&fit=crop&q=80',
    tags: ['Medications', 'Health Reminders', 'Senior Pets', 'Dosage Tracking']
  },
  {
    id: 'post-4',
    slug: '5-subtle-signs-of-feline-dehydration',
    title: '5 Subtle Signs Your Cat Might Be Dehydrated or Stressed',
    excerpt: 'Feline hydration is notoriously tricky to detect. Discover skin turgor testing, subtle litter box indicators, and how keeping an activity diary helps catch kidney issues early.',
    category: 'Health & Vet',
    readTime: '5 min read',
    publishDate: 'October 05, 2026',
    author: {
      name: 'Dr. Sarah Mitchell, DVM',
      role: 'Veterinary Advisory Board',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=80',
    tags: ['Cat Care', 'Hydration', 'Preventative Health', 'Feline Wellness']
  },
  {
    id: 'post-5',
    slug: 'creating-stress-free-daily-routine-dogs',
    title: 'Building a Calming Daily Routine for High-Energy & Anxious Dogs',
    excerpt: 'Dogs thrive on predictability. How pairing mental enrichment, morning walks, structured feeding, and quiet times helps reduce separation anxiety and unwanted barking.',
    category: 'Training',
    readTime: '7 min read',
    publishDate: 'September 28, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Pet Behavior & Routine Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=900&auto=format&fit=crop&q=80',
    tags: ['Training', 'Mental Enrichment', 'Anxiety Relief', 'Dog Walking']
  },
  {
    id: 'post-6',
    slug: 'why-pet-activity-journal-improves-longevity',
    title: 'The Science of Pet Memory Logs: Why Daily Activity Journals Extend Longevity',
    excerpt: 'Tracking subtle changes in appetite, energy, and mobility over months gives your veterinarian a longitudinal view that a single 15-minute exam can never reveal.',
    category: 'Daily Routines',
    readTime: '4 min read',
    publishDate: 'September 20, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Certified Veterinary Technician',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&auto=format&fit=crop&q=80',
    tags: ['Pet Journal', 'Longevity', 'Medical History', 'Health Records']
  }
];

export const BLOG_CATEGORIES = [
  'All Articles',
  'Health & Vet',
  'Daily Routines',
  'Family Care',
  'Training'
] as const;
