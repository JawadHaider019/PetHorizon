export interface CaretakerStory {
  id: string;
  name: string;
  role: string;
  location: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Rabbit' | 'Bird';
  petBreed: string;
  avatar: string;
  petAvatar: string;
  headline: string;
  story: string;
  highlightTag: string;
  stats: string;
}

export const CARETAKER_STORIES: CaretakerStory[] = [
  {
    id: 'luna-insulin',
    name: 'Sarah & David Jenkins',
    role: 'Multi-member Family',
    location: 'Austin, TX',
    petName: 'Luna',
    petType: 'Cat',
    petBreed: 'Domestic Shorthair (12 yrs)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    petAvatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
    headline: 'Synchronized insulin doses across 4 family phones',
    story: 'Luna was diagnosed with feline diabetes. Her strict 12-hour insulin schedule was missed twice before Pet Horizon. Now our whole household gets synced alerts with zero double-dosing.',
    highlightTag: 'Critical Health Tracking',
    stats: '100% on-time doses for 6 months'
  },
  {
    id: 'max-golden',
    name: 'Marcus Vance',
    role: 'Active Dog Dad & Co-parent',
    location: 'Denver, CO',
    petName: 'Max',
    petType: 'Dog',
    petBreed: 'Golden Retriever (3 yrs)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    petAvatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80',
    headline: 'Shared walk logs that stop "did you walk him yet?" texts',
    story: 'My partner and I work conflicting shifts. Pet Horizon instantly pushes a push note when Max finishes his 45-minute trail walk or when flea meds are due. It saves our sanity.',
    highlightTag: 'Live Family Activity Feed',
    stats: '380+ shared activity logs'
  },
  {
    id: 'mochi-diet',
    name: 'Elena Rostova',
    role: 'Specialized Small Pet Foster',
    location: 'Seattle, WA',
    petName: 'Mochi',
    petType: 'Rabbit',
    petBreed: 'Holland Lop (2 yrs)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    petAvatar: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=300&q=80',
    headline: 'Precision weight curves and GI stasis monitoring',
    story: 'Rabbits hide illness until it is dangerous. Tracking Mochi’s daily hay intake and weekly gram weigh-ins with Pet Horizon alerted us to early GI stasis before it turned critical.',
    highlightTag: 'Preventative Wellness',
    stats: 'Weekly weight logs verified'
  },
  {
    id: 'rio-parrot',
    name: 'Liam Chen',
    role: 'Avian Enthusiast',
    location: 'Portland, OR',
    petName: 'Rio',
    petType: 'Bird',
    petBreed: 'Sun Conure (4 yrs)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    petAvatar: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=300&q=80',
    headline: 'Enrichment routines & UV exposure logs',
    story: 'Most pet apps completely ignore birds. Pet Horizon handles Rio’s exact seed-to-pellet ratio, UV light exposure hours, and monthly beak health inspections effortlessly.',
    highlightTag: 'Species-Specific Care',
    stats: 'Daily enrichment logged'
  }
];
