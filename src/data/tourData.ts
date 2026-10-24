import { 
  Home,
  Calendar, 
  Users, 
  UserCheck, 
  PawPrint, 
  BookOpen, 
  Wallet
} from 'lucide-react';

export interface ScreenTab {
  id: string;
  name: string;
  icon: any;
  title: string;
  badge: string;
  description: string;
  screenshot: string;
  highlights: string[];
}

export const TOUR_SCREENS: ScreenTab[] = [
  {
    id: 'home',
    name: 'Home Dashboard',
    icon: Home,
    title: 'Daily Command Center & Quick Actions',
    badge: 'Daily Overview',
    description: 'A morning-to-evening dashboard greeting you with today’s active pet status, 1-tap quick action shortcuts, scheduled feedings with Skip/Done controls, and real-time activity timelines.',
    screenshot: '/screenshots/home-screen.png',
    highlights: [
      'Personalized greeting and current pet status badge (Zozo Bulldog, 15 KG)',
      '1-tap quick action shortcuts: Food, Walk, Meds, and Grooming',
      'Today’s Schedule with instant "Done" and "Skip" action buttons',
      'Live activity feed showing walk duration and completion timestamp'
    ]
  },
  {
    id: 'schedule',
    name: 'Care Schedules',
    icon: Calendar,
    title: 'Daily Care & Medical Routine',
    badge: 'Core Routine Engine',
    description: 'Keep your pet on a reliable routine with precise morning, afternoon, and evening tasks. Includes notifications that remind you before every scheduled event.',
    screenshot: '/screenshots/schedule-screen.png',
    highlights: [
      'Multi-category task views (Food, Walks, Medicine, Grooming, Vaccines)',
      '1-day-before vaccination alerts for DHPP and rabies shots',
      'One-tap completion logging to track pet daily adherence',
      'Floating quick-add button for instant schedule creation'
    ]
  },
  {
    id: 'family',
    name: 'Family Hub',
    icon: Users,
    title: 'Shared Caretaking & QR Codes',
    badge: 'Co-Parenting System',
    description: 'Connect family members, spouses, roommates, or pet sitters into a unified care team. Everyone receives shared alerts and updates in real-time.',
    screenshot: '/screenshots/family-screen.png',
    highlights: [
      'Generate sharable 6-digit invitation codes instantly',
      'Scan QR codes to co-manage pets in seconds without manual entry',
      'Granular roles: Admin (household lead) and Member (caretaker)',
      'Support for joining multiple pet households from one account'
    ]
  },
  {
    id: 'journal',
    name: 'Daily Journal',
    icon: BookOpen,
    title: 'Activity Log & Memory Timeline',
    badge: 'Life History',
    description: 'A comprehensive history of every action taken for your pet. Browse through past calendar dates to verify care, review walk durations, and view attached daily photos.',
    screenshot: '/screenshots/journal-screen.png',
    highlights: [
      'Interactive date carousel with active daily indicators',
      'Walk tracking summaries with exact minutes and completion status',
      'Medical administration history for your vet visits',
      'Photo memory uploads to capture everyday cute moments'
    ]
  },
  {
    id: 'expenses',
    name: 'Expense Tracker',
    icon: Wallet,
    title: 'Monthly Budgeting & Care Spending',
    badge: 'Budget Management',
    description: 'Keep pet care costs transparent and organized. Set monthly spending limits, categorize expenses by Food, Vet, Grooming, and Medicine, and track remaining balance in real time.',
    screenshot: '/screenshots/expenses-screen.png',
    highlights: [
      'Visual balance card showing remaining available budget & % spent',
      'Instant category filtering for Food, Vet, Grooming, and Medicine',
      'Detailed transaction history with dates, amounts, and tags',
      'Quick-add floating action button to log expenses on the go'
    ]
  },
  {
    id: 'pet-profile',
    name: 'Pet Profiles',
    icon: PawPrint,
    title: 'Species, Breed & Growth Records',
    badge: 'Pet Identity',
    description: 'Customize profiles for Dogs, Cats, Birds, Rabbits, Hamsters, and other animal companions. Record weight history in KG or LBS and calculate exact pet age.',
    screenshot: '/screenshots/pet-profile-screen.png',
    highlights: [
      'Native species selector (Dog, Cat, Bird, Rabbit, Hamster)',
      'Comprehensive breed selector and profile picture uploading',
      'Birthday calendar picker with auto-computed age in years and months',
      'Weight tracking with dynamic KG / LBS unit toggle'
    ]
  },
  {
    id: 'profile',
    name: 'User & Premium',
    icon: UserCheck,
    title: 'Account Settings & Premium Subscriptions',
    badge: 'Customization & Plans',
    description: 'Manage your owner profile, localization units, security preferences, and subscription status. Upgrade to unlock unlimited pets and priority support.',
    screenshot: '/screenshots/profile-screen.png',
    highlights: [
      'Pet Parent profile customization with avatar upload',
      'Upgrade banner to unlock Unlimited Pets and Family Sharing',
      'Localization settings for currency and regional units',
      'In-app billing, invoice history, and subscription controls'
     ]
  }
];
