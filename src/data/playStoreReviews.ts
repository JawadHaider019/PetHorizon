export interface PlayStoreReview {
  id: string;
  name: string;
  date: string;
  rating: number;
  petContext: string;
  tag: string;
  review: string;
  avatarBg: string;
  avatarText: string;
}

export const PLAY_STORE_REVIEWS: PlayStoreReview[] = [
  {
    id: '1',
    name: 'Liam Bennett',
    date: 'October 2026',
    rating: 5,
    petContext: 'Golden Retriever & Cat',
    tag: 'Clean Interface & Sync',
    review:
      'Pet Horizon is a really useful and user-friendly app for pet lovers. The interface is clean, easy to navigate, and makes managing pet-related information simple and convenient. I especially liked how smoothly the app works and how everything is organized. Overall, a great app for anyone who wants an easier way to manage and care for their pets. Highly recommended! 🐾❤️',
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    avatarText: 'LB'
  },
  {
    id: '2',
    name: 'Shaik',
    date: 'October 2026',
    rating: 5,
    petContext: 'Vaccine Reminders',
    tag: 'Feeding & Vaccine Schedules',
    review:
      'Very useful app for pet care. I use it to track feeding and vaccine reminders. The interface is clean and works smoothly. Highly recommended.',
    avatarBg: 'bg-teal-100 text-teal-800 border-teal-200',
    avatarText: 'SK'
  },
  {
    id: '3',
    name: 'Abdullah',
    date: 'October 2026',
    rating: 5,
    petContext: 'Snow Cat Parent',
    tag: 'Multi-Pet & Premium',
    review:
      'Nice app, very useful for my snow cat. I like it, I will buy the premium version of the app so that I can add as many pets as I have.',
    avatarBg: 'bg-sky-100 text-sky-800 border-sky-200',
    avatarText: 'AB'
  },
  {
    id: '4',
    name: 'Ali Raza',
    date: 'October 2026',
    rating: 5,
    petContext: 'Companion Care',
    tag: 'Thoughtful Features',
    review:
      'Pet Horizon is a wonderful and user-friendly app for every pet lover ❤️ I truly appreciate the amazing experience, thoughtful features, and dedication to making pet care easier and more enjoyable.',
    avatarBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    avatarText: 'AR'
  },
  {
    id: '5',
    name: 'Ethan Miller',
    date: 'October 2026',
    rating: 5,
    petContext: 'Daily Routine Tracker',
    tag: 'Simple & Enjoyable',
    review:
      'Pet Horizon is a simple and user-friendly app for pet lovers. The interface is easy to navigate, and the app provides a convenient way to explore pet-related features and information.',
    avatarBg: 'bg-amber-100 text-amber-800 border-amber-200',
    avatarText: 'EM'
  },
  {
    id: '6',
    name: 'Bilal Amjad',
    date: 'October 2026',
    rating: 5,
    petContext: 'Daily Schedules',
    tag: 'Reliable Experience',
    review:
      'Amazing experience so far. Smooth interface, fast sync, and reliable daily care routines.',
    avatarBg: 'bg-blue-100 text-blue-800 border-blue-200',
    avatarText: 'BA'
  },
  {
    id: '7',
    name: 'Marcus Gallagher',
    date: 'October 2026',
    rating: 5,
    petContext: 'Rescue Dog Parent',
    tag: 'Dog Routine Care',
    review:
      'The app is good. Helped me a lot regarding the daily care for my dog.',
    avatarBg: 'bg-rose-100 text-rose-800 border-rose-200',
    avatarText: 'MG'
  },
  {
    id: '8',
    name: 'Fahad Sohail',
    date: 'October 2026',
    rating: 5,
    petContext: 'Pet Parent',
    tag: 'Top App Experience',
    review:
      'Amazing application ❤️ Everything is right where it needs to be.',
    avatarBg: 'bg-purple-100 text-purple-800 border-purple-200',
    avatarText: 'FS'
  },
  {
    id: '9',
    name: 'MD ALIM',
    date: 'October 2026',
    rating: 5,
    petContext: 'Pet Care Tips',
    tag: 'Helpful Information',
    review:
      'Great app, very useful 👍👍❤️ I got helpful information about pet care.',
    avatarBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    avatarText: 'MA'
  }
];
