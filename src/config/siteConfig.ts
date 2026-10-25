/**
 * Pet Horizon Web - Centralized Configuration & Constants
 * Single source of truth across all components and pages.
 */

export const SITE_CONFIG = {
  name: 'Pet Horizon',
  tagline: 'Smart Pet Care, Family Hub & Daily Routine Tracker',
  description:
    'Pet Horizon is the all-in-one family pet care app. Synchronize feeding, track vet appointments, set medication reminders, and log daily milestones.',
  url: 'https://pethorizon.app',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
  formspreeEndpoint: 'https://formspree.io/f/mnppnazk',
  supportEmail: 'pethorizon2026@gmail.com',
  author: {
    name: 'Aqib Mansoor',
    url: 'https://aqibfolio.vercel.app/'
  },
  themeColor: '#047857'
} as const;

export const PLAY_STORE_URL = SITE_CONFIG.playStoreUrl;
export const FORMSPREE_ENDPOINT = SITE_CONFIG.formspreeEndpoint;
export const SUPPORT_EMAIL = SITE_CONFIG.supportEmail;
