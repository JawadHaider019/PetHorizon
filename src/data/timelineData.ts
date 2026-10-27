export interface DayTimelineEvent {
  id: string;
  time: string;
  period: 'Morning' | 'Noon' | 'Evening' | 'Night';
  title: string;
  description: string;
  iconType: 'nutrition' | 'medication' | 'exercise' | 'family' | 'journal';
  category: 'Nutrition' | 'Medication' | 'Exercise' | 'Family' | 'Journal';
  status: 'Completed' | 'Logged' | 'Synced';
  metaNote: string;
}

export const DAY_TIMELINE_EVENTS: DayTimelineEvent[] = [
  {
    id: 't-breakfast',
    time: '6:30 AM',
    period: 'Morning',
    title: 'Breakfast & Fresh Water Sync',
    description: 'Mom checks off the morning kibble with bone broth topping. All 3 family devices instantly mark breakfast as done.',
    iconType: 'nutrition',
    category: 'Nutrition',
    status: 'Completed',
    metaNote: 'Zero accidental double-feeding'
  },
  {
    id: 't-meds',
    time: '8:00 AM',
    period: 'Morning',
    title: 'Thyroid Medication Logged',
    description: 'Smart high-priority notification chimes on dad’s phone. Dose confirmed with 1 tap.',
    iconType: 'medication',
    category: 'Medication',
    status: 'Completed',
    metaNote: 'Logged with photo verification'
  },
  {
    id: 't-walk',
    time: '12:30 PM',
    period: 'Noon',
    title: 'Mid-Day Trail Walk & Potty Check',
    description: 'Son takes Luna for a 25-minute brisk walk. GPS distance and bathroom stop recorded to the shared pet card.',
    iconType: 'exercise',
    category: 'Exercise',
    status: 'Logged',
    metaNote: '1.4 miles logged · Hydration verified'
  },
  {
    id: 't-dinner',
    time: '6:00 PM',
    period: 'Evening',
    title: 'Dinner & Joint Supplement',
    description: 'Glucosamine chew given with evening dinner. Shared family feed syncs live to avoid confusion.',
    iconType: 'family',
    category: 'Family',
    status: 'Synced',
    metaNote: '4 family members in sync'
  },
  {
    id: 't-journal',
    time: '9:30 PM',
    period: 'Night',
    title: 'Photo Memory & Health Notes',
    description: 'Snap a bedtime cuddle photo with weight note into the encrypted lifetime health journal.',
    iconType: 'journal',
    category: 'Journal',
    status: 'Completed',
    metaNote: 'Backed up to private cloud'
  }
];
