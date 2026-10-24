export interface PricingPlan {
  id: string;
  badge: string;
  badgeStyle: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    badge: 'Free Forever',
    badgeStyle: 'text-slate-500 bg-slate-100',
    name: 'Standard Plan',
    description: 'Everything you need to give one beloved companion full care.',
    price: '$0',
    period: '/ forever',
    features: [
      'Single pet profile support (1 pet)',
      'Complete daily care & feeding schedule',
      'Medication alerts & vaccination tracking',
      '1 daily photo upload in activity journal',
      'Basic family caretaker connection',
      'Expense logging and cost tracking'
    ],
    buttonText: 'Download Free App'
  },
  {
    id: 'monthly',
    badge: 'Monthly Premium',
    badgeStyle: 'text-emerald-800 bg-emerald-100',
    name: 'Pet Horizon Pro',
    description: 'Ideal for multi-pet families and collaborative households.',
    price: '$4.99',
    period: '/ month',
    featured: true,
    features: [
      'Unlimited pet profile registrations',
      'Multi-caretaker family hub with QR code sync',
      'Admin & Member access control permissions',
      'Up to 5 daily photo uploads in journal',
      'Smart custom push notifications & reminders',
      'Unlimited schedule alarms & vaccination tracking'
    ],
    buttonText: 'Get Premium on Google Play'
  },
  {
    id: 'yearly',
    badge: 'Best Value',
    badgeStyle: 'text-amber-800 bg-amber-100',
    name: 'Annual Plan',
    description: 'Get 2 months free with complete uninterrupted peace of mind.',
    price: '$49.99',
    period: '/ year',
    features: [
      'All Monthly Premium benefits included',
      'Equivalent of 2 months free (Save 17%)',
      'Unlimited pets & shared family hubs',
      'Up to 5 daily photo uploads in journal',
      'Dedicated Priority Customer Support agent',
      'Restore anytime on new devices'
    ],
    buttonText: 'Subscribe Annually'
  }
];
