import {
  Calendar,
  Users,
  BookOpen,
  PawPrint,
  Wallet,
  LucideIcon
} from 'lucide-react';

export interface FeatureTab {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  screenshot: string;
  screenshotAlt: string;
  points: { title: string; desc: string }[];
  tag: string;
}

export const FEATURES_DATA: FeatureTab[] = [
  {
    id: 'schedules',
    badge: 'Daily Routine',
    title: 'Precision Care Schedules & Medication Alarms',
    subtitle: 'Never miss a meal, medication dose, or vaccination deadline.',
    description: 'Set structured daily feeding routines, medical prescriptions, and vaccination schedules. With customizable notifications and category filters, caring for your companion becomes effortless and stress-free.',
    icon: Calendar,
    screenshot: '/screenshots/schedule-screen.png',
    screenshotAlt: 'Pet Horizon Care Schedules and Daily Routine App Screen',
    points: [
      { title: 'Custom Meal Times', desc: 'Log exact cup portions, feeding hours, and dietary preferences.' },
      { title: 'Medication Tracking', desc: 'Schedule doses, antibiotics, and antiemetic treatments on precise timetables.' },
      { title: 'Vaccine Reminders', desc: 'Get proactive alerts 1 day before DHPP, rabies, and preventive shots.' },
      { title: 'Smart Push Notifications', desc: 'Reliable reminders delivered directly to your device and family members.' }
    ],
    tag: 'Care Schedules'
  },
  {
    id: 'family',
    badge: 'Family Sharing',
    title: 'Family Hub: Co-Manage Pets with Caretakers',
    subtitle: 'Share responsibilities with your partner, family, or pet sitter seamlessly.',
    description: 'Pet care is teamwork. Pet Horizon lets you invite caretakers and family members using instant invitation codes or built-in QR code scanning. View your care team, assign roles, and make sure everyone is updated.',
    icon: Users,
    screenshot: '/screenshots/family-screen.png',
    screenshotAlt: 'Pet Horizon Family Hub Screen with QR Code Invites and Care Team',
    points: [
      { title: 'Instant QR Code Invites', desc: 'Pet sitters and family scan to join your pet’s care team in seconds.' },
      { title: 'Role Permissions', desc: 'Keep pet profiles safe with Admin and Member access privileges.' },
      { title: 'Real-Time Sync', desc: 'When someone feeds your pet or completes a walk, everyone sees it immediately.' },
      { title: 'Join Multiple Families', desc: 'Caretakers can co-manage pets across different households from one account.' }
    ],
    tag: 'Family Hub'
  },
  {
    id: 'journal',
    badge: 'Activity Journal',
    title: 'Daily Journal & Visual Activity Timeline',
    subtitle: 'Keep a comprehensive history of events, walks, and cherished photos.',
    description: 'An interactive daily log organized by calendar date. Filter by walks, nutrition, medicine, and grooming. Upload daily photos to build a lifelong memory timeline of your furry, feathered, or scaled friend.',
    icon: BookOpen,
    screenshot: '/screenshots/journal-screen.png',
    screenshotAlt: 'Pet Horizon Pet Daily Journal Activity Timeline and Photos',
    points: [
      { title: 'Interactive Calendar', desc: 'Browse past dates and review historical care adherence effortlessly.' },
      { title: 'Walk & Activity Tracking', desc: 'Log completed outdoor walks with exact durations and completion timestamps.' },
      { title: 'Category Filters', desc: 'Quickly filter the timeline by Food, Walks, Medicine, and Grooming.' },
      { title: 'Daily Photo Memories', desc: 'Snap and store cute daily milestones right within your pet’s log.' }
    ],
    tag: 'Pet Journal'
  },
  {
    id: 'expenses',
    badge: 'Budgeting & Spending',
    title: 'Smart Pet Expense Tracker & Category Budgets',
    subtitle: 'Track veterinary bills, food purchases, grooming, and medicine in one tap.',
    description: 'Pet parenting comes with expenses. Pet Horizon helps you keep your budget healthy with a monthly limit calculator, category-based spending breakdown, and instant transaction logs so you always know where your money goes.',
    icon: Wallet,
    screenshot: '/screenshots/expenses-screen.png',
    screenshotAlt: 'Pet Horizon Smart Pet Expense Tracker and Monthly Budget Screen',
    points: [
      { title: 'Monthly Spending Limits', desc: 'Set monthly budget limits with dynamic percentage-spent progress bars.' },
      { title: 'Category Breakdown', desc: 'Sort costs cleanly by Food, Vet visits, Grooming, and Medication.' },
      { title: 'Fast Transaction Logging', desc: 'Quickly record amounts with automatic timestamping and note tags.' },
      { title: 'Financial Clarity', desc: 'Keep track of pet insurance, routine care, and emergency funds transparently.' }
    ],
    tag: 'Expense Tracker'
  },
  {
    id: 'profiles',
    badge: 'Companion Profile',
    title: 'Tailored Profiles for Multiple Species',
    subtitle: 'Dogs, Cats, Birds, Rabbits, Hamsters, and more with species-specific care.',
    description: 'Each pet is unique. Pet Horizon provides specialized profile management with breed databases, weight unit toggle (KG / LBS), birthdate and auto-calculated age, and quick pet switching.',
    icon: PawPrint,
    screenshot: '/screenshots/pet-profile-screen.png',
    screenshotAlt: 'Pet Horizon Edit Pet Profile Screen with Species and Breed Options',
    points: [
      { title: 'Multi-Species Support', desc: 'Native support for Dogs, Cats, Birds, Rabbits, Hamsters, and exotics.' },
      { title: 'Growth & Weight Metrics', desc: 'Log weight in KG or LBS to monitor your pet’s healthy development.' },
      { title: 'Breed & Birthday Tracking', desc: 'Never forget an anniversary with automated pet birthday celebration alerts.' },
      { title: 'Quick Pet Switcher', desc: 'Switch between companion profiles seamlessly in the bottom sheet.' }
    ],
    tag: 'Pet Profiles'
  }
];
