import {
  HelpCircle,
  Sparkles,
  Layers,
  Bug,
  Crown,
  ShieldCheck
} from 'lucide-react';

export const DISPLAY_SUPPORT_EMAIL = 'pethorizon2026@gmail.com';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnppnazk';

export interface TopicOption {
  id: string;
  label: string;
  icon: any;
  subjectTag: string;
}

export const SUPPORT_TOPICS: TopicOption[] = [
  { id: 'general', label: 'General Inquiry', icon: HelpCircle, subjectTag: 'General Support' },
  { id: 'routine', label: 'Routines & Alerts', icon: Sparkles, subjectTag: 'Routine Setup' },
  { id: 'family', label: 'Family Hub Sync', icon: Layers, subjectTag: 'Family Hub' },
  { id: 'bug', label: 'Bug Report', icon: Bug, subjectTag: 'Bug Report' },
  { id: 'billing', label: 'Premium & Billing', icon: Crown, subjectTag: 'Billing' },
  { id: 'account', label: 'Account & Privacy', icon: ShieldCheck, subjectTag: 'Account & Data' }
];

export interface TicketData {
  ticketId: string;
  name: string;
  email: string;
  topic: TopicOption;
  priority: 'normal' | 'urgent';
  message: string;
  submittedAt: string;
}

export interface ToastNotification {
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
  ticketId?: string;
}
