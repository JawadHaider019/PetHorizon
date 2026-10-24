import {
  Calendar,
  Users,
  Camera,
  Smartphone,
  Sparkles,
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
    title: 'Care Schedules',
    desc: 'Smart feeding routines, medicine alarms & vaccine alerts',
    icon: Calendar,
    hash: '#features',
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
    title: 'Interactive App Tour',
    desc: 'Explore the 5 native mobile screens & design',
    icon: Smartphone,
    hash: '#tour',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    title: 'Pricing & Plans',
    desc: 'Transparent Free vs Premium feature comparison',
    icon: Sparkles,
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
