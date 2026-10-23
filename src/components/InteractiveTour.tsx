import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  Calendar, 
  Users, 
  UserCheck, 
  PawPrint, 
  BookOpen, 
  Smartphone, 
  ArrowRight,
  Check,
  Wallet
} from 'lucide-react';
import PhoneFrame from './PhoneFrame';

interface ScreenTab {
  id: string;
  name: string;
  icon: any;
  title: string;
  badge: string;
  description: string;
  screenshot: string;
  highlights: string[];
}

const SCREENS: ScreenTab[] = [
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

export default function InteractiveTour() {
  const [selectedScreen, setSelectedScreen] = useState<string>('home');
  const current = SCREENS.find(s => s.id === selectedScreen) || SCREENS[0];

  return (
    <section id="tour" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive App Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Take a Tour of the Pet Horizon Experience
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Click through the primary screens below to preview the exact user experience waiting for you on the mobile app.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SCREENS.map((sc) => {
            const Icon = sc.icon;
            const isSelected = selectedScreen === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedScreen(sc.id)}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{sc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Canvas */}
        <div className="bg-slate-900 text-white rounded-3xl sm:rounded-[2.8rem] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle green ambient lighting */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-700/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Phone Display (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhoneFrame
                    src={current.screenshot}
                    alt={current.title}
                    frameClassName="w-[260px] sm:w-[290px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Details (7 Cols) */}
            <div className="lg:col-span-7 text-left flex flex-col gap-5 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full w-fit">
                    {current.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 pt-2">
                    {current.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-200 font-medium leading-relaxed">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg transition-all text-sm"
                    >
                      <span>Install App From Google Play</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
