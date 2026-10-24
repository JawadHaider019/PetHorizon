export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  badge: {
    monthly: string;
    yearly: string;
  };
  badgeStyle: {
    monthly: string;
    yearly: string;
  };
  price: {
    monthly: string;
    yearly: string;
  };
  period: {
    monthly: string;
    yearly: string;
  };
  subnote?: {
    monthly?: string;
    yearly?: string;
  };
  features: string[];
  buttonText: string;
  featuredIn: 'monthly' | 'yearly' | 'both';
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Standard Plan',
    description: 'Everything you need to give one beloved companion full care.',
    badge: {
      monthly: 'Free Forever',
      yearly: 'Free Forever'
    },
    badgeStyle: {
      monthly: 'text-slate-500 bg-slate-100',
      yearly: 'text-slate-500 bg-slate-100'
    },
    price: {
      monthly: '$0',
      yearly: '$0'
    },
    period: {
      monthly: '/ forever',
      yearly: '/ forever'
    },
    features: [
      'Single pet profile support (1 pet)',
      'Complete daily care & feeding schedule',
      'Medication alerts & vaccination tracking',
      '1 daily photo upload in activity journal',
      'Basic family caretaker connection',
      'Expense logging and cost tracking'
    ],
    buttonText: 'Download Free App',
    featuredIn: 'both'
  },
  {
    id: 'monthly',
    name: 'Pet Horizon Pro',
    description: 'Ideal for multi-pet families and collaborative households.',
    badge: {
      monthly: 'Most Popular',
      yearly: 'Flexible Monthly'
    },
    badgeStyle: {
      monthly: 'text-emerald-800 bg-emerald-100',
      yearly: 'text-slate-600 bg-slate-100'
    },
    price: {
      monthly: '$4.99',
      yearly: '$4.99'
    },
    period: {
      monthly: '/ month',
      yearly: '/ month'
    },
    subnote: {
      monthly: 'Billed monthly, cancel anytime',
      yearly: 'Pay month-to-month'
    },
    features: [
      'Unlimited pet profile registrations',
      'Multi-caretaker family hub with QR code sync',
      'Admin & Member access control permissions',
      'Up to 5 daily photo uploads in journal',
      'Smart custom push notifications & reminders',
      'Unlimited schedule alarms & vaccination tracking'
    ],
    buttonText: 'Get Pro on Google Play',
    featuredIn: 'monthly'
  },
  {
    id: 'yearly',
    name: 'Annual Care Pass',
    description: 'Best overall value for complete uninterrupted peace of mind.',
    badge: {
      monthly: 'Save 17%',
      yearly: 'Best Value • Save 17%'
    },
    badgeStyle: {
      monthly: 'text-amber-800 bg-amber-100',
      yearly: 'text-amber-800 bg-amber-100'
    },
    price: {
      monthly: '$4.16',
      yearly: '$4.16'
    },
    period: {
      monthly: '/ month ($49.99/yr)',
      yearly: '/ month ($49.99/yr)'
    },
    subnote: {
      monthly: '$49.99 billed annually (2 months free)',
      yearly: '$49.99 billed annually (2 months free)'
    },
    features: [
      'All Monthly Pro benefits included',
      'Equivalent of 2 months free (Save 17%)',
      'Unlimited pets & shared family hubs',
      'Up to 5 daily photo uploads in journal',
      'Dedicated Priority Customer Support agent',
      'Restore anytime on new devices'
    ],
    buttonText: 'Subscribe Annually',
    featuredIn: 'yearly'
  }
];
