/**
 * Pet Horizon Web - Centralized Configuration & Constants
 * Single source of truth across all components and pages.
 */

export const SITE_CONFIG = {
  name: 'Pet Horizon',
  tagline: 'Smart Pet Care, Family Hub & Daily Routine Tracker',
  description:
    'Pet Horizon is the all-in-one family pet care app. Synchronize feeding, track vet appointments, set medication reminders, and log daily milestones.',
  url: 'https://pethorizon.jawumitech.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
  formspreeEndpoint: 'https://formspree.io/f/mnppnazk',
  supportEmail: 'pethorizon2026@gmail.com',
  author: {
    name: 'Aqib Mansoor',
    url: 'https://aqibfolio.vercel.app/'
  },
  themeColor: '#047857',
  /**
   * Search Console & Webmaster Verification
   * Replace with your production Google Search Console verification HTML tag content:
   * e.g. 'google-site-verification-code-here'
   */
  googleSiteVerification: 'MyQf9lnl3Ehgb9nukwNGGtBxo2QSTifZoSO5w4K50PU',
  /**
   * Google Analytics 4 (GA4) Measurement ID
   * Replace with your active stream ID: e.g. 'G-XXXXXXXXXX'
   */
  gaMeasurementId: 'G-FHBNRZ7X6T',
  /**
   * Bing Webmaster Tools & IndexNow Key
   */
  indexNowKey: 'c987a26f34e142b9a76d8b9e5c1204d8'
} as const;

export const PLAY_STORE_URL = SITE_CONFIG.playStoreUrl;
export const FORMSPREE_ENDPOINT = SITE_CONFIG.formspreeEndpoint;
export const SUPPORT_EMAIL = SITE_CONFIG.supportEmail;
export const GOOGLE_SITE_VERIFICATION = SITE_CONFIG.googleSiteVerification;
export const GA_MEASUREMENT_ID = SITE_CONFIG.gaMeasurementId;

