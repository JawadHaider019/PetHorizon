import {
  Layers,
  Users,
  Camera,
  Smartphone,
  CreditCard,
  HelpCircle,
  ShieldCheck,
  Trash2
} from 'lucide-react';
import { NavView } from './Navbar';

export interface ProductLink {
  title: string;
  desc: string;
  icon: any;
  hash: string;
  color: string;
}

export interface LegalLink {
  title: string;
  desc: string;
  icon: any;
  view: NavView;
  color: string;
}

export const PRODUCT_LINKS: ProductLink[] = [
  {
    title: 'How It Works',
    desc: '4 real app modules: routines, family sync, meds & budget',
    icon: Layers,
    hash: '#how-it-works',
    color: 'text-emerald-700 bg-emerald-100/80'
  },
  {
    title: 'Interactive App Tour',
    desc: 'Explore all 7 native mobile screens, routines & tools',
    icon: Smartphone,
    hash: '#tour',
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Family Hub',
    desc: 'Collaborative pet caregiving & household sync',
    icon: Users,
    hash: '#family-hub',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    title: 'Daily Journal',
    desc: 'Timeline milestones, photo memories & activity logs',
    icon: Camera,
    hash: '#daily-journal',
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Pricing & Plans',
    desc: 'Transparent Free vs Premium feature comparison',
    icon: CreditCard,
    hash: '#pricing',
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Support FAQ',
    desc: 'Common questions on synchronization, offline mode & data',
    icon: HelpCircle,
    hash: '#faq',
    color: 'text-teal-600 bg-teal-50'
  }
];

export const LEGAL_LINKS: LegalLink[] = [
  {
    title: 'Privacy Policy',
    desc: 'Google Play verified data protection & user privacy commitments',
    icon: ShieldCheck,
    view: 'privacy',
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Data & Account Deletion',
    desc: 'Official 30-day data purging guide & self-service in-app deletion',
    icon: Trash2,
    view: 'deletion',
    color: 'text-rose-600 bg-rose-50'
  }
];
