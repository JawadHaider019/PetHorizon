export interface SpeciesDetail {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  capabilities: string[];
  popularBreeds: string;
  statBadge: string;
}

export const SPECIES_LIST: SpeciesDetail[] = [
  {
    id: 'dogs',
    name: 'Dogs & Puppies',
    emoji: '🐕',
    subtitle: 'From puppy potty training to senior joint therapy',
    accentColor: 'from-amber-500/10 to-orange-500/10 border-amber-200/60',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    capabilities: ['Walk GPS & Duration', 'Flea/Tick Reminders', 'Vaccine Certs', 'Potty Logs'],
    popularBreeds: 'Labradors, Goldens, Frenchies, Rescues',
    statBadge: 'Active Trackers #1'
  },
  {
    id: 'cats',
    name: 'Cats & Kittens',
    emoji: '🐈',
    subtitle: 'Litter box habits, hydration, and silent stress indicators',
    accentColor: 'from-emerald-500/10 to-teal-500/10 border-emerald-200/60',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    capabilities: ['Wet/Dry Food Ratios', 'Litter Frequency', 'Weight Trending', 'Deworming Alerts'],
    popularBreeds: 'Domestic Shorthairs, Persians, Maine Coons',
    statBadge: 'Most Monitored'
  },
  {
    id: 'rabbits',
    name: 'Rabbits & Small Pets',
    emoji: '🐇',
    subtitle: 'GI stasis risk alerts, hay intake, and gentle grooming logs',
    accentColor: 'from-rose-500/10 to-pink-500/10 border-rose-200/60',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    capabilities: ['Hay & Pellet Ratios', 'GI Stasis Watch', 'Nail Trims', 'Precision Grams'],
    popularBreeds: 'Holland Lops, Mini Rex, Netherland Dwarfs',
    statBadge: 'Specialty Care'
  },
  {
    id: 'birds',
    name: 'Birds & Parrots',
    emoji: '🦜',
    subtitle: 'UV exposure hours, molt cycles, and specialized avian diets',
    accentColor: 'from-sky-500/10 to-blue-500/10 border-sky-200/60',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800',
    capabilities: ['UV Sun Hours', 'Molt & Beak Logs', 'Fresh Chop Prep', 'Vocal Health'],
    popularBreeds: 'Conures, Budgies, Cockatiels, Macaws',
    statBadge: 'Avian Ready'
  },
  {
    id: 'aquatics',
    name: 'Aquatics & Amphibians',
    emoji: '🐠',
    subtitle: 'Water parameter tracking, filter changes, and feeding schedules',
    accentColor: 'from-cyan-500/10 to-teal-500/10 border-cyan-200/60',
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-800',
    capabilities: ['Water Temp & pH', 'Filter Cycle Due', 'Feed Schedules', 'Tank Chem Logs'],
    popularBreeds: 'Betta, Tropical Community, Axolotls',
    statBadge: 'Param Tracking'
  }
];
