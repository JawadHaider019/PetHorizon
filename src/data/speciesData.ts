export interface SpeciesDetail {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
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
    badgeBg: 'bg-emerald-50 border border-emerald-200/80',
    badgeText: 'text-emerald-800',
    capabilities: ['Walk GPS & Duration', 'Flea/Tick Reminders', 'Vaccine Certs', 'Potty Logs'],
    popularBreeds: 'Labradors, Goldens, Frenchies, Rescues',
    statBadge: 'Active Trackers #1'
  },
  {
    id: 'cats',
    name: 'Cats & Kittens',
    emoji: '🐈',
    subtitle: 'Litter box habits, hydration, and silent stress indicators',
    badgeBg: 'bg-emerald-100/80 border border-emerald-300/70',
    badgeText: 'text-emerald-900',
    capabilities: ['Wet/Dry Food Ratios', 'Litter Frequency', 'Weight Trending', 'Deworming Alerts'],
    popularBreeds: 'Domestic Shorthairs, Persians, Maine Coons',
    statBadge: 'Most Monitored'
  },
  {
    id: 'rabbits',
    name: 'Rabbits & Small Pets',
    emoji: '🐇',
    subtitle: 'GI stasis risk alerts, hay intake, and gentle grooming logs',
    badgeBg: 'bg-teal-50 border border-teal-200/80',
    badgeText: 'text-teal-800',
    capabilities: ['Hay & Pellet Ratios', 'GI Stasis Watch', 'Nail Trims', 'Precision Grams'],
    popularBreeds: 'Holland Lops, Mini Rex, Netherland Dwarfs',
    statBadge: 'Specialty Care'
  },
  {
    id: 'birds',
    name: 'Birds & Parrots',
    emoji: '🦜',
    subtitle: 'UV exposure hours, molt cycles, and specialized avian diets',
    badgeBg: 'bg-emerald-50 border border-emerald-200/80',
    badgeText: 'text-emerald-800',
    capabilities: ['UV Sun Hours', 'Molt & Beak Logs', 'Fresh Chop Prep', 'Vocal Health'],
    popularBreeds: 'Conures, Budgies, Cockatiels, Macaws',
    statBadge: 'Avian Ready'
  },
  {
    id: 'aquatics',
    name: 'Aquatics & Amphibians',
    emoji: '🐠',
    subtitle: 'Water parameter tracking, filter changes, and feeding schedules',
    badgeBg: 'bg-teal-50 border border-teal-200/80',
    badgeText: 'text-teal-800',
    capabilities: ['Water Temp & pH', 'Filter Cycle Due', 'Feed Schedules', 'Tank Chem Logs'],
    popularBreeds: 'Betta, Tropical Community, Axolotls',
    statBadge: 'Param Tracking'
  }
];
