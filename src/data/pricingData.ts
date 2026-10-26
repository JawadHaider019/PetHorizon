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
    description: 'Essential daily tracking for one beloved companion.',
    badge: {
      monthly: 'Free Forever',
      yearly: 'Free Forever'
    },
    badgeStyle: {
      monthly: 'text-slate-600 bg-slate-100',
      yearly: 'text-slate-600 bg-slate-100'
    },
    price: {
      monthly: '$0',
      yearly: '$0'
    },
    period: {
      monthly: '/ forever',
      yearly: '/ forever'
    },
    subnote: {
      monthly: 'No credit card or setup fee',
      yearly: 'No credit card or setup fee'
    },
    features: [
      'Single pet profile (1 companion)',
      'Daily feeding & care schedule',
      'Medication & vaccine reminders',
      '1 photo upload daily in journal',
      'Expense logging & cost tracker',
      'Basic family caretaker sync'
    ],
    buttonText: 'Download Free App',
    featuredIn: 'both'
  },
  {
    id: 'monthly',
    name: 'Pet Horizon Pro',
    description: 'Perfect for active multi-pet homes and busy families.',
    badge: {
      monthly: 'Most Popular',
      yearly: 'Flexible Monthly'
    },
    badgeStyle: {
      monthly: 'text-emerald-800 bg-emerald-100 border border-emerald-200',
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
      yearly: 'Month-to-month flexibility'
    },
    features: [
      'Unlimited pet profiles',
      'Smart family task delegation',
      'Anti-collision medication locks',
      'Flexible time-window reminders',
      'QR code multi-caretaker sync',
      'Up to 5 photo uploads daily',
      'Household walking & activity goals'
    ],
    buttonText: 'Get Pro Monthly',
    featuredIn: 'monthly'
  },
  {
    id: 'yearly',
    name: 'Annual Care Pass',
    description: 'Maximum savings with complete uninterrupted peace of mind.',
    badge: {
      monthly: 'Save 17%',
      yearly: 'Best Value • Save 17%'
    },
    badgeStyle: {
      monthly: 'text-emerald-800 bg-emerald-100 border border-emerald-200',
      yearly: 'text-emerald-800 bg-emerald-100 border border-emerald-200'
    },
    price: {
      monthly: '$4.16',
      yearly: '$4.16'
    },
    period: {
      monthly: '/ mo (billed $49.99/yr)',
      yearly: '/ mo (billed $49.99/yr)'
    },
    subnote: {
      monthly: 'Includes 2 months free',
      yearly: 'Includes 2 months free'
    },
    features: [
      'Everything in Pro included',
      'Save 17% (equivalent to 2 months free)',
      'Priority VIP customer support',
      'Cloud backup & instant device restore',
      'Exportable health & expense records',
      'Early access to new feature releases'
    ],
    buttonText: 'Subscribe Annually',
    featuredIn: 'yearly'
  }
];
