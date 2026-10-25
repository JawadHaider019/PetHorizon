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
  badgeText?: string;
  badgeStyle?: string;
  badgeIconColor?: string;
}

export const PLAY_STORE_REVIEWS: PlayStoreReview[] = [
  {
    id: '1',
    name: 'Liam Bennett',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Golden Retriever & Cat',
    tag: 'Clean Interface & Sync',
    review:
      'Really useful and user-friendly app for pet lovers. The interface is clean, easy to navigate, and makes managing pet schedules simple. Everything is smooth and organized. Highly recommended! 🐾❤️',
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    avatarText: 'LB'
  },
  {
    id: 'tmb-1',
    name: 'Jan',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'TestMyBuild Reviewer',
    tag: 'UI & Onboarding',
    review:
      'Pet Horizon has a really clean, intuitive UI and a well-designed onboarding experience that clearly explains the app’s core features. Adding a pet and setting up its profile is quick and straightforward, and the overall experience feels polished and easy to navigate. The app has a strong concept, and its family-sharing features offer real potential for making pet care more organized.',
    avatarBg: 'bg-violet-100 text-violet-800 border-violet-200',
    avatarText: 'JN',
    badgeText: 'TestMyBuild',
    badgeStyle: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    badgeIconColor: 'text-indigo-600'
  },
  {
    id: '2',
    name: 'Shaik',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Rescue Dog Parent',
    tag: 'Feeding & Vaccines',
    review:
      'Very useful app for everyday pet care. I use it regularly to track feeding routines and vaccine reminders. The interface is clean and works smoothly without lag. Highly recommended.',
    avatarBg: 'bg-teal-100 text-teal-800 border-teal-200',
    avatarText: 'SK'
  },
  {
    id: '3',
    name: 'Abdullah',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Snow Cat Parent',
    tag: 'Multi-Pet & Premium',
    review:
      'Nice app, very useful for my snow cat. I like the routine tracking a lot. Upgrading to the premium version so I can add and manage all my pets in one unified place.',
    avatarBg: 'bg-sky-100 text-sky-800 border-sky-200',
    avatarText: 'AB'
  },
  {
    id: 'tmb-2',
    name: 'Eithan',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'TestMyBuild Reviewer',
    tag: 'Pet Management',
    review:
      'Pet Horizon stands out with its professional presentation, clear onboarding, and thoughtful pet management experience. The app looks great on the Play Store, and adding pets or updating their details works really well. I think the idea behind the app is genuinely good, with strong potential to help pet owners stay organized and manage their pets’ daily care more effectively.',
    avatarBg: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    avatarText: 'ET',
    badgeText: 'TestMyBuild',
    badgeStyle: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    badgeIconColor: 'text-indigo-600'
  },
  {
    id: '4',
    name: 'Ali Raza',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Companion Care',
    tag: 'Thoughtful Features',
    review:
      'Pet Horizon is a wonderful and user-friendly app for every pet lover ❤️ I truly appreciate the amazing experience, thoughtful features, and dedication to making pet care simpler and stress-free.',
    avatarBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    avatarText: 'AR'
  },
  {
    id: '5',
    name: 'Ethan Miller',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Daily Routine Tracker',
    tag: 'Simple & Intuitive',
    review:
      'Simple and user-friendly app for pet parents. The interface is easy to navigate, and it provides a reliable way to organize feeding, health notes, and daily activity logs.',
    avatarBg: 'bg-amber-100 text-amber-800 border-amber-200',
    avatarText: 'EM'
  },
  {
    id: '6',
    name: 'Bilal Amjad',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Multi-Pet Household',
    tag: 'Reliable Routines',
    review:
      'Amazing experience so far. The schedule alarms are timely, the UI is polished, and sharing pet care responsibilities with the household works effortlessly.',
    avatarBg: 'bg-blue-100 text-blue-800 border-blue-200',
    avatarText: 'BA'
  },
  {
    id: '7',
    name: 'Marcus Gallagher',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'German Shepherd',
    tag: 'Dog Daily Care',
    review:
      'The app is great and helped me tremendously regarding daily medication and walk routines for my dog. Clean layout, zero clutter, and easy to set up.',
    avatarBg: 'bg-rose-100 text-rose-800 border-rose-200',
    avatarText: 'MG'
  },
  {
    id: '8',
    name: 'Fahad Sohail',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Two-Pet Family',
    tag: 'Top App Experience',
    review:
      'Amazing application ❤️ Everything is right where it needs to be. Quick logging, clear timelines, and beautiful interface. Best pet organizer on Google Play.',
    avatarBg: 'bg-purple-100 text-purple-800 border-purple-200',
    avatarText: 'FS'
  },
  {
    id: '9',
    name: 'MD ALIM',
    date: 'Oct 2026',
    rating: 5,
    petContext: 'Cat & Dog Care',
    tag: 'Helpful Health Care',
    review:
      'Great app, very useful 👍👍❤️ I got helpful pet care guidance and reminder alerts that ensure my pets never miss their scheduled meals or vet visits.',
    avatarBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    avatarText: 'MA'
  }
];
