import { LegalDocument } from './privacyPolicyData';

export const TERMS_OF_SERVICE: LegalDocument = {
  id: 'terms',
  title: 'Pet Horizon – Official Terms of Service & User License Agreement',
  subtitle:
    'Official Terms of Service governing your access to and use of the Pet Horizon mobile application, web calculators, and household synchronization platform.',
  effectiveDate: 'September 17, 2026',
  lastUpdated: 'October 26, 2026',
  app: 'Pet Horizon (Android & Web Portal)',
  developer: 'Pet Horizon Development Team',
  email: 'pethorizon2026@gmail.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
  sections: [
    {
      id: 'acceptance-of-terms',
      title: '1. Acceptance of Terms & License Scope',
      content: [
        'By downloading, accessing, or using the Pet Horizon mobile application or web platform ("Service"), you agree to be bound by these Terms of Service. Pet Horizon grants you a personal, non-exclusive, non-transferable, revocable license to use the Service for managing household pet care routines, health records, and expense logs.',
        'If you do not agree to these Terms, please discontinue use of the application and web portal immediately.'
      ]
    },
    {
      id: 'veterinary-medical-disclaimer',
      title: '2. Veterinary & Medical Disclaimer (Not Clinical Advice)',
      content: [
        'Pet Horizon is a digital organization, routine tracking, and informational companion tool. Neither the Pet Horizon mobile application, its calorie and age calculators, nor its editorial blog guides constitute veterinary medical diagnosis, clinical prescription, or emergency triage advice.',
        'Always consult a licensed veterinarian regarding your pet’s medical conditions, medication dosages, vaccination schedules, or dietary changes. In the event of an acute medical emergency, contact an accredited 24-hour emergency veterinary hospital immediately.'
      ]
    },
    {
      id: 'household-coparenting-responsibility',
      title: '3. Family Hub & Multi-Caregiver Co-Parenting',
      content: [
        'When you generate or share a Household QR Code or 6-character join pass, you authorize invited family members, roommates, or pet sitters to view and update shared pet schedules, feeding logs, and medication statuses.',
        'Account administrators remain responsible for managing household member permissions and verifying that time-sensitive medications are physically administered.'
      ]
    },
    {
      id: 'subscriptions-and-free-tier',
      title: '4. Free Standard Plan & Premium Subscriptions',
      content: [
        'Pet Horizon offers a permanent Free Standard tier alongside optional Premium upgrades managed via Google Play Billing. Subscriptions automatically renew unless canceled at least 24 hours prior to the end of the current billing cycle through your Google Play Store account settings.'
      ]
    },
    {
      id: 'data-ownership-and-termination',
      title: '5. User Data Ownership & Account Termination',
      content: [
        'You retain full ownership of all pet profiles, photos, receipts, and clinical records uploaded to Pet Horizon. You may export your records or permanently delete your account and associated cloud data at any time via the in-app settings or our Data Deletion portal.'
      ]
    }
  ]
};
