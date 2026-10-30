export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    items?: string[];
    paragraph?: string;
  }[];
}

export interface LegalDocument {
  id: 'privacy' | 'terms' | 'deletion';
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  app: string;
  developer: string;
  email: string;
  playStoreUrl: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalDocument = {
  id: 'privacy',
  title: 'Pet Horizon – Official Privacy Policy & User Data Protection',
  subtitle: 'Official Privacy Policy explaining how Pet Horizon collects, uses, stores, processes, and protects your information in compliance with Google Play Developer Policies and user data protection standards.',
  effectiveDate: 'September 17, 2026',
  lastUpdated: 'September 17, 2026',
  app: 'Pet Horizon (Android)',
  developer: 'Pet Horizon Development Team',
  email: 'pethorizon2026@gmail.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction & Overview',
      content: [
        'Pet Horizon ("we", "our", or "us") is dedicated to safeguarding your privacy and ensuring the security of your personal data and pet care records. This Privacy Policy explains how Pet Horizon collects, uses, stores, processes, and protects your information when you use the Pet Horizon mobile application and associated backend services.',
        'By accessing or using Pet Horizon, you acknowledge that you have read, understood, and agreed to the data practices described in this policy.'
      ]
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: [
        'We collect only the information strictly necessary to provide and enhance your pet care management experience:'
      ],
      subsections: [
        {
          subtitle: 'A. User Account & Authentication Information',
          items: [
            'Personal Identification: Full name and email address provided during registration or third-party sign-in.',
            'Authentication Credentials: Encrypted login tokens and unique account identifiers generated via Google Sign-In (OAuth 2.0) or email authentication. We never access or store your private external passwords.'
          ]
        },
        {
          subtitle: 'B. Pet Profiles, Health & Care Records',
          items: [
            'Pet Details: Names, species, breeds, gender, birth dates and Pet picture.',
            'Medical & Health Logs: Vaccination histories, veterinary visit records, medication dosages and schedules.',
            'Routine & Care Tasks: Reminders for feeding, grooming, exercise, and scheduled medication alerts.'
          ]
        },
        {
          subtitle: 'C. User-Generated Media',
          items: [
            'Photographs: Pet pictures and profile avatars that you voluntarily capture using your device camera or select from your photo library.'
          ]
        },
        {
          subtitle: 'D. Technical, Device & Diagnostic Data',
          items: [
            'Notification Identifiers: Device push notification tokens (Firebase Cloud Messaging ) used exclusively to deliver your scheduled reminders and alerts.',
            'System Information: Operating system version, app version, language, and locale settings to ensure layout and regional date formatting compatibility.'
          ]
        },
        {
          subtitle: 'E. Payment & Subscription Information',
          items: [
            'In-app purchases and premium tier subscriptions are processed exclusively and securely through Google Play Billing.',
            'Pet Horizon never receives, handles, or stores your credit card numbers, bank details, or billing credentials.'
          ]
        }
      ]
    },
    {
      id: 'how-we-use-info',
      title: '3. How We Use Your Information',
      content: [
        'We process your data strictly for the following legitimate purposes:'
      ],
      subsections: [
        {
          subtitle: 'Legitimate Purposes',
          items: [
            'Core App Functionality: Storing and displaying your pet profiles, care routines, daily logs, and medical records.',
            'Timely Care Reminders: Delivering local and push notifications for upcoming medication times, vet appointments, and feeding schedules.',
            'Account Administration: Authenticating your identity, managing account preferences, and maintaining account security.',
            'Customer Support: Responding to your inquiries, technical support requests, and data deletion requests.',
            'Continuous App Improvement: Ensuring compatibility, optimizing application performance, and preventing fraudulent activity.'
          ]
        }
      ]
    },
    {
      id: 'device-permissions',
      title: '4. Device Permissions & System Access',
      content: [
        'Pet Horizon only requests device permissions when required for specific user-initiated features:'
      ],
      subsections: [
        {
          subtitle: 'System Access Overview',
          items: [
            'Camera: Required only when you choose to take a photo of your pet or profile directly within the app.',
            'Photo Library / Storage: Required only when you choose to upload an existing pet picture from your device gallery. We do not scan, browse, or access your private photos or media files.',
            'Notifications: Required to send timely alerts for medication schedules, vaccinations, and pet care reminders. You can toggle notifications on or off anytime in your device settings.'
          ]
        }
      ]
    },
    {
      id: 'data-sharing',
      title: '5. Data Sharing and Third-Party Disclosures',
      content: [
        'We maintain a strict policy regarding your personal and pet data:'
      ],
      subsections: [
        {
          subtitle: 'Strict Sharing Guidelines',
          items: [
            'No Sale of Data: We never sell, rent, trade, lease, or monetize your personal information or pet data to third parties, data brokers, or advertising networks.',
            'Google Identity Services (OAuth 2.0) for secure authentication.',
            'Google Play In-App Billing for secure subscription transactions.',
            'Cloud Infrastructure for encrypted database storage and synchronization.'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: '6. Data Security & Encryption',
      content: [
        'We implement robust administrative, physical, and technical safeguards:'
      ],
      subsections: [
        {
          subtitle: 'Security Safeguards',
          items: [
            'In-Transit Encryption: All communication between the Pet Horizon mobile app and our servers is encrypted using Transport Layer Security (TLS 1.2 / TLS 1.3 / HTTPS).',
            'At-Rest Encryption: User account credentials, health records, and stored media are protected using industry-standard AES encryption.',
            'Access Control: Access to backend infrastructure is strictly restricted through secure multi-factor authentication and role-based permissions.'
          ]
        }
      ]
    },
    {
      id: 'data-retention-deletion',
      title: '7. Data Retention & Account Deletion Policy',
      content: [
        'In full compliance with Google Play Developer Policies, GDPR, and CCPA:'
      ],
      subsections: [
        {
          subtitle: 'A. In-App Deletion',
          paragraph: 'You can permanently delete your account and all associated data at any time directly in the app by navigating to: Settings / Profile > Account Settings > Delete Account.'
        },
        {
          subtitle: 'B. Deletion by Email Request',
          paragraph: 'You can also request complete deletion of your account and all associated records by sending an email to: pethorizon2026@gmail.com with the subject line "Data Deletion Request" from your registered email address.'
        },
        {
          subtitle: 'C. Irreversible Data Removal',
          paragraph: 'Upon deletion confirmation, all user account records, registered pet profiles, medical histories, vaccination logs, entries, uploaded photos, and device identifiers are permanently and irreversibly purged from our live databases and cloud storage within 30 days.'
        }
      ]
    },
    {
      id: 'childrens-privacy',
      title: '8. Children\'s Privacy',
      content: [
        'Pet Horizon is designed for general audiences and pet owners and is not directed at children under the age of 13 (or under 16 in certain jurisdictions). We do not knowingly collect or solicit personal data from children. If we discover that a child has provided us with personal information without parental consent, we will immediately delete that information.'
      ]
    },
    {
      id: 'changes-to-policy',
      title: '9. Changes to This Privacy Policy',
      content: [
        'We may periodically update this Privacy Policy to reflect enhancements in our application features, legal requirements, or Google Play policies. Any modifications will be posted directly on this page with an updated "Last Updated" revision date.'
      ]
    },
    {
      id: 'contact-info',
      title: '10. Contact & Support Information',
      content: [
        'If you have any questions, concerns, feedback, or requests regarding this Privacy Policy or your data rights, please contact us:'
      ],
      subsections: [
        {
          subtitle: 'Official Contact Details',
          items: [
            'Developer / Support Team: Pet Horizon Support',
            'Official Email: pethorizon2026@gmail.com',
            'Application: Pet Horizon'
          ]
        }
      ]
    }
  ]
};
