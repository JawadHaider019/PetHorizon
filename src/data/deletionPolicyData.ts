import { LegalDocument } from './privacyPolicyData';

export const DATA_DELETION_GUIDE: LegalDocument = {
  id: 'deletion',
  title: 'Data & Account Deletion Instructions',
  subtitle: 'Official guide on how to request the permanent and irreversible deletion of your Pet Horizon account, pet records, and stored data in compliance with Google Play Data Safety policies.',
  effectiveDate: 'September 17, 2026',
  lastUpdated: 'September 17, 2026',
  app: 'Pet Horizon (Android)',
  developer: 'Pet Horizon Development Team',
  email: 'pethorizon2026@gmail.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
  sections: [
    {
      id: 'commitment',
      title: '1. Our Data Privacy & Safety Commitment',
      content: [
        'In strict accordance with Google Play Developer Policies on User Data and account deletion requirements, Pet Horizon provides users with complete, straightforward mechanisms to delete their account and associated data both within the mobile app and through a direct web-based request.'
      ]
    },
    {
      id: 'in-app-steps',
      title: '2. Method 1: Instant In-App Account Deletion',
      content: [
        'You can permanently delete your Pet Horizon account at any moment directly on your Android phone without needing to email support:'
      ],
      subsections: [
        {
          subtitle: 'Step-by-Step Instructions',
          items: [
            'Step 1: Open the Pet Horizon mobile app on your Android device.',
            'Step 2: Tap on the Profile / Settings icon in the bottom navigation bar.',
            'Step 3: Scroll down and select "Account Settings".',
            'Step 4: Tap "Delete Account" (highlighted in red).',
            'Step 5: Review the deletion confirmation prompt and tap "Confirm Permanent Deletion".',
            'Step 6: You will be logged out immediately and your account will be marked for permanent removal.'
          ]
        }
      ]
    },
    {
      id: 'email-request',
      title: '3. Method 2: Web / Email Deletion Request (No App Required)',
      content: [
        'If you have uninstalled the application or cannot access your device, you can request account deletion via email:'
      ],
      subsections: [
        {
          subtitle: 'Email Deletion Request Instructions',
          items: [
            'Send an email to: pethorizon2026@gmail.com',
            'Subject Line: "Data Deletion Request - Pet Horizon"',
            'Include in Email: Your registered Google or email address used in Pet Horizon.',
            'Optional: Mention any registered pet names to help verify account ownership.',
            'Confirmation: Our support team will confirm receipt and finalize the deletion within 2 to 3 business days.'
          ]
        }
      ]
    },
    {
      id: 'what-is-deleted',
      title: '4. What Data is Permanently Purged',
      content: [
        'When an account deletion request is processed, all associated data is permanently and irreversibly purged from our active databases and cloud storage:'
      ],
      subsections: [
        {
          subtitle: 'Purged Data Types',
          items: [
            'Account profile: Full name, registered email address, and authentication tokens.',
            'Pet profiles: All registered pets, species, breeds, birthdays, and profile pictures.',
            'Medical records: Vaccination history, vet visits, medications, dosage logs, and weight graphs.',
            'Care schedules: Daily feeding routines, medication reminders, and recurring tasks.',
            'Daily journal: Daily photos, captions, milestones, and diary logs.',
            'Push notification tokens: Firebase Cloud Messaging tokens permanently unregistered.'
          ]
        }
      ]
    },
    {
      id: 'timeframe',
      title: '5. Retention & Purge Timeframe',
      content: [
        'Account credentials and active database records are disabled immediately upon request.',
        'All database records and file storage backups are permanently and irreversibly removed within 30 days of the request, strictly in compliance with Google Play Data Safety requirements and global privacy regulations (GDPR & CCPA).'
      ]
    },
    {
      id: 'support-contact',
      title: '6. Support Assistance',
      content: [
        'If you need assistance with data deletion, account issues, or have questions about data security, please reach out to pethorizon2026@gmail.com.'
      ]
    }
  ]
};
