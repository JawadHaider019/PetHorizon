import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  BookOpen,
  PawPrint,
  Wallet,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import PhoneFrame from './PhoneFrame';

interface FeatureTab {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  screenshot: string;
  screenshotAlt: string;
  points: { title: string; desc: string }[];
  tag: string;
}

const FEATURES_DATA: FeatureTab[] = [
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

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState<string>('schedules');
  const activeFeature = FEATURES_DATA.find(f => f.id === activeTab) || FEATURES_DATA[0];

  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            <PawPrint className="w-3.5 h-3.5 text-emerald-600" />
            <span>Built From The Ground Up For Real Pet Parents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Designed to Make Daily Pet Care Feel Effortless
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            Every feature on this website is genuinely inside the Pet Horizon mobile app. Discover how our modules keep your pets healthy and your household aligned.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {FEATURES_DATA.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer ${isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-[1.02]'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                <span>{tab.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-3xl sm:rounded-[2.5rem] border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Feature Copy & Points (7 Cols - Slides in from Left) */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 text-left flex flex-col gap-5"
              >
                <div className="inline-flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full w-fit">
                  <span>{activeFeature.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                  {activeFeature.title}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* 2x2 Feature Details Grid with Staggered Left/Right Slide and Hover Elevation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  {activeFeature.points.map((pt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-1.5 hover:border-emerald-400 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-slate-900 text-sm">{pt.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal pl-6">
                        {pt.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm group"
                  >
                    <span>Download Pet Horizon to use {activeFeature.tag}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Feature Phone Device Frame (5 Cols - Slides in from Right) */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex justify-center items-center relative"
              >
                <div className="relative">
                  <PhoneFrame
                    src={activeFeature.screenshot}
                    alt={activeFeature.screenshotAlt}
                    frameClassName="w-[260px] sm:w-[290px]"
                  />

                  {/* Ambient Decorative Badge (Positioned outside) */}
                  <div className="hidden sm:block absolute -bottom-4 -right-6 lg:-right-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-100 shadow-lg text-xs font-bold text-slate-800 z-20">
                    ✨ Real App Interface
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
