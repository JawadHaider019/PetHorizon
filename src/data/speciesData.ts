export interface SpeciesDetail {
  id: string;
  name: string;
  mascotImage: string;
  subtitle: string;
  capabilities: string[];
  popularBreeds: string;
}

export const SPECIES_LIST: SpeciesDetail[] = [
  {
    id: 'dogs',
    name: 'Dogs & Puppies',
    mascotImage: '/mascots/dog.webp',
    subtitle: 'From puppy potty training to senior joint therapy',
    capabilities: ['Walk GPS & Duration', 'Flea/Tick Reminders', 'Vaccine Certs', 'Potty Logs'],
    popularBreeds: 'Labradors, Goldens, Frenchies, Rescues'
  },
  {
    id: 'cats',
    name: 'Cats & Kittens',
    mascotImage: '/mascots/cat.webp',
    subtitle: 'Litter box habits, hydration, and silent stress indicators',
    capabilities: ['Wet/Dry Food Ratios', 'Litter Frequency', 'Weight Trending', 'Deworming Alerts'],
    popularBreeds: 'Domestic Shorthairs, Persians, Maine Coons'
  },
  {
    id: 'rabbits',
    name: 'Rabbits & Small Pets',
    mascotImage: '/mascots/rabbit.webp',
    subtitle: 'GI stasis risk alerts, hay intake, and gentle grooming logs',
    capabilities: ['Hay & Pellet Ratios', 'GI Stasis Watch', 'Nail Trims', 'Precision Grams'],
    popularBreeds: 'Holland Lops, Mini Rex, Netherland Dwarfs'
  },
  {
    id: 'birds',
    name: 'Birds & Parrots',
    mascotImage: '/mascots/bird.webp',
    subtitle: 'UV exposure hours, molt cycles, and specialized avian diets',
    capabilities: ['UV Sun Hours', 'Molt & Beak Logs', 'Fresh Chop Prep', 'Vocal Health'],
    popularBreeds: 'Conures, Budgies, Cockatiels, Macaws'
  },
  {
    id: 'aquatics',
    name: 'Aquatics & Amphibians',
    mascotImage: '/mascots/fish.webp',
    subtitle: 'Water parameter tracking, filter changes, and feeding schedules',
    capabilities: ['Water Temp & pH', 'Filter Cycle Due', 'Feed Schedules', 'Tank Chem Logs'],
    popularBreeds: 'Betta, Tropical Community, Axolotls'
  }
];
