export interface ChangelogRelease {
  version: string;
  releaseDate: string;
  buildNumber: number;
  tag: 'Latest' | 'Major Release' | 'Feature Update' | 'Enhancement' | 'Patch' | 'Initial';
  tagColor: string;
  headline: string;
  summary: string;
  highlights: string[];
  bugFixes?: string[];
}

export const CHANGELOG_RELEASES: ChangelogRelease[] = [
  {
    version: 'v1.0.10',
    releaseDate: 'October 6, 2026',
    buildNumber: 35,
    tag: 'Latest',
    tagColor: 'bg-emerald-600 text-white',
    headline: 'Expense Tracking, Multi-Pet Analytics & Play Store Production Release',
    summary: 'Our biggest release yet! Complete pet finance overview, itemized veterinary invoice attachments, and lightning-fast cloud sync for multi-pet households.',
    highlights: [
      'Comprehensive Pet Budget & Expense Tracker with recurring costs',
      'Veterinary receipt and invoice image storage with exportable PDFs',
      'Unified multi-pet dashboard toggle for quick care overview',
      'Official Google Play Store public production availability'
    ],
    bugFixes: [
      'Resolved background notification delay on Android 14 power-saving modes',
      'Fixed currency symbol formatting in European locales'
    ]
  },
  {
    version: 'v1.0.9',
    releaseDate: 'September 30, 2026',
    buildNumber: 34,
    tag: 'Feature Update',
    tagColor: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    headline: 'Expense Analytics Visualizer & Receipt Vault Preview',
    summary: 'Introduced monthly spending charts broken down by food, medical, toys, and grooming to keep family pet budgets transparent.',
    highlights: [
      'Interactive monthly spending graphs with category breakdown',
      'Exportable end-of-year veterinary care summaries for pet insurance claims',
      'Optimized image caching for high-resolution medical records'
    ]
  },
  {
    version: 'v1.0.8',
    releaseDate: 'September 22, 2026',
    buildNumber: 33,
    tag: 'Enhancement',
    tagColor: 'bg-teal-100 text-teal-800 border border-teal-300',
    headline: 'Smart Reminder Audio & Unified Multi-Pet Calendar View',
    summary: 'Added friendly chime tones tailored for pets and a bird’s-eye monthly calendar view showing every upcoming vet appointment and medication cycle.',
    highlights: [
      'Custom reminder audio tones and gentle alert vibrations',
      'Monthly calendar heat-map of feeding and medication consistency',
      'Fast-switch selector for households managing 3 or more pets'
    ]
  },
  {
    version: 'v1.0.7',
    releaseDate: 'September 16, 2026',
    buildNumber: 31,
    tag: 'Major Release',
    tagColor: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    headline: 'Daily Photo Journal & Intelligent Medication Engine',
    summary: 'Document your companion’s journey with captioned milestone memories and precision medication scheduling featuring dose verification.',
    highlights: [
      'Daily Photo Journal with tags for weight, mood, and milestones',
      'Smart recurring medication scheduler with critical dosage alerts',
      'Rabies, DHPP, and core vaccine certificate repository'
    ],
    bugFixes: [
      'Fixed timezone conversion glitch when traveling across states'
    ]
  },
  {
    version: 'v1.0.4',
    releaseDate: 'September 5, 2026',
    buildNumber: 27,
    tag: 'Major Release',
    tagColor: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    headline: 'Shared Family Hub & Synchronized Care Feeds',
    summary: 'Multiple caregivers, one unified pet truth. Invite family members, dog-sitters, and partners to collaborate with zero accidental double-dosings.',
    highlights: [
      'Multi-user family synchronization with instant push activity updates',
      'Real-time activity feed showing who walked, fed, or medicated the pet',
      'Role-based permissions for primary pet owners vs temporary pet-sitters'
    ]
  },
  {
    version: 'v1.0.2',
    releaseDate: 'August 25, 2026',
    buildNumber: 21,
    tag: 'Patch',
    tagColor: 'bg-slate-100 text-slate-800 border border-slate-300',
    headline: 'User Interface Polish & Navigation Speed Enhancements',
    summary: 'Refined UI transitions, smoothed layout jumping on mobile keyboards, and enhanced notification delivery guarantees.',
    highlights: [
      'Instant screen switching with pre-cached pet avatars',
      'Refined contrast on outdoor high-brightness screens',
      'Polished modal interactions and quick-action shortcuts'
    ]
  },
  {
    version: 'v1.0.1',
    releaseDate: 'August 25, 2026',
    buildNumber: 14,
    tag: 'Patch',
    tagColor: 'bg-slate-100 text-slate-800 border border-slate-300',
    headline: 'Launch Week Hotfixes & Smooth Onboarding UX',
    summary: 'Addressed early tester feedback, simplified the 3-step pet setup questionnaire, and fixed edge-case notification scheduling.',
    highlights: [
      'Streamlined species selection flow with custom breed suggestions',
      'Corrected notification permissions flow on Android 13+',
      'Memory footprint reduced by 22% on entry-level devices'
    ]
  },
  {
    version: 'v1.0.0',
    releaseDate: 'August 12, 2026',
    buildNumber: 12,
    tag: 'Initial',
    tagColor: 'bg-slate-900 text-white',
    headline: 'Pet Horizon Foundation — The Modern Pet Care Companion',
    summary: 'The inaugural release of Pet Horizon. Built from the ground up for conscientious pet parents wanting organized care routines.',
    highlights: [
      'Pet profile management (Dogs, Cats, Rabbits, Birds, Aquatics)',
      'Custom feeding schedules with measurement tracking',
      'Basic health record logging and vet contact storage',
      'Secure, privacy-first local-first cloud architecture'
    ]
  }
];
