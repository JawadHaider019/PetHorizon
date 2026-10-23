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
  title: 'Official Privacy Policy & User Data Protection',
  subtitle: 'Comprehensive overview of how Pet Horizon collects, manages, and safeguards your personal data and pet care records in compliance with Google Play Developer Policies and global data protection standards.',
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
        'By accessing or using Pet Horizon, you acknowledge that you have read, understood, and agreed to the data practices described in this policy. If you do not agree with any aspect of this Privacy Policy, please discontinue use of the application.'
      ]
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: [
        'We collect only the information strictly necessary to provide and enhance your pet care management experience. Data collected is grouped into the following categories:'
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
            'Pet Details: Names, species, breeds, gender, birth dates, adoption dates, and pet avatar photos.',
            'Medical & Health Logs: Vaccination histories, veterinary visit records, medication dosages, prescribed schedules, and weight logs.',
            'Routine & Care Tasks: Reminders for daily feeding, grooming routines, outdoor exercise, and scheduled medication alerts.'
          ]
        },
        {
          subtitle: 'C. User-Generated Media',
          items: [
            'Photographs: Pet pictures and profile avatars that you voluntarily capture using your device camera or select from your photo library to personalize your pet profiles and journal timeline.'
          ]
        },
        {
          subtitle: 'D. Technical, Device & Diagnostic Data',
          items: [
            'Notification Identifiers: Device push notification tokens (Firebase Cloud Messaging) used exclusively to deliver your scheduled care reminders, vaccine alerts, and task notifications.',
            'System Information: Operating system version, app version, language, and locale settings to ensure layout and regional date formatting compatibility.'
          ]
        },
        {
          subtitle: 'E. Payment & Subscription Information',
          items: [
            'In-app purchases and premium tier subscriptions are processed exclusively and securely through Google Play Billing.',
            'Pet Horizon never receives, handles, or stores your credit card numbers, bank details, or billing credentials. All financial transactions are managed by Google.'
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
          subtitle: 'Legitimate Operational Uses',
          items: [
            'Core App Functionality: Storing and displaying your pet profiles, care routines, daily journal logs, and medical records across your authorized devices.',
            'Timely Care Reminders: Delivering local and push notifications for upcoming medication times, vet appointments, and feeding schedules so you never miss a pet care task.',
            'Account Administration: Authenticating your identity, managing account preferences, syncing shared family caretaker access, and maintaining account security.',
            'Customer Support: Responding to your inquiries, diagnosing technical support requests, and fulfilling data deletion requests.',
            'Continuous App Improvement: Ensuring device compatibility, optimizing application performance, and preventing fraudulent or unauthorized activity.'
          ]
        }
      ]
    },
    {
      id: 'device-permissions',
      title: '4. Device Permissions & System Access',
      content: [
        'Pet Horizon only requests device permissions when required for specific user-initiated features. We do not access sensitive hardware or background sensors without your explicit permission:'
      ],
      subsections: [
        {
          subtitle: 'Requested Android Permissions',
          items: [
            'Camera (CAMERA): Required only when you choose to take a photo of your pet or profile directly within the app.',
            'Photo Library / Storage (READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE): Required only when you choose to upload an existing pet picture from your device gallery. We do not scan, browse, or access your private photos or unrelated media files.',
            'Notifications (POST_NOTIFICATIONS): Required to send timely alerts for medication schedules, vaccinations, and pet care reminders. You can toggle notifications on or off anytime in your device settings.'
          ]
        }
      ]
    },
    {
      id: 'data-sharing',
      title: '5. Data Sharing and Third-Party Disclosures',
      content: [
        'We maintain a strict and unambiguous policy regarding your personal and pet data:'
      ],
      subsections: [
        {
          subtitle: 'Zero Data Monetization Guarantee',
          paragraph: 'No Sale of Data: We never sell, rent, trade, lease, or monetize your personal information or pet data to third parties, data brokers, or advertising networks. Your information is never used for behavioral ad tracking.'
        },
        {
          subtitle: 'Trusted Infrastructure Partners',
          items: [
            'Google Identity Services (OAuth 2.0): For secure authentication and account sign-in.',
            'Google Play In-App Billing: For secure subscription transactions and purchase verification.',
            'Cloud Infrastructure (Firebase / Supabase): For encrypted database storage, real-time sync, and notification dispatch.'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: '6. Data Security & Encryption',
      content: [
        'We implement industry-grade administrative, physical, and technical safeguards to keep your data secure against unauthorized access, loss, or alteration:'
      ],
      subsections: [
        {
          subtitle: 'Security Safeguards',
          items: [
            'In-Transit Encryption: All communication between the Pet Horizon mobile app and our backend servers is encrypted using modern Transport Layer Security (TLS 1.2 / TLS 1.3 / HTTPS).',
            'At-Rest Encryption: User account credentials, health records, and stored pet photos are protected using industry-standard Advanced Encryption Standard (AES-256).',
            'Strict Access Control: Access to backend infrastructure is strictly restricted through secure multi-factor authentication (MFA) and least-privilege role-based permissions.'
          ]
        }
      ]
    },
    {
      id: 'data-retention-deletion',
      title: '7. Data Retention & Account Deletion Policy',
      content: [
        'In full compliance with Google Play Developer Policies, GDPR, and CCPA, you retain complete ownership and control over your personal information and pet data:'
      ],
      subsections: [
        {
          subtitle: 'A. Direct In-App Deletion',
          paragraph: 'You can permanently delete your account and all associated data at any time directly inside the app by navigating to: Settings / Profile > Account Settings > Delete Account.'
        },
        {
          subtitle: 'B. Deletion by Email Request',
          paragraph: 'You can also request complete deletion of your account and all associated records by sending an email to pethorizon2026@gmail.com with the subject line "Data Deletion Request" from your registered account email.'
        },
        {
          subtitle: 'C. Irreversible Data Removal',
          paragraph: 'Upon deletion confirmation, all user account records, registered pet profiles, medical histories, vaccination logs, journal entries, uploaded photos, and device identifiers are permanently and irreversibly purged from our live databases and cloud storage within 30 days.'
        }
      ]
    },
    {
      id: 'childrens-privacy',
      title: '8. Children\'s Privacy',
      content: [
        'Pet Horizon is designed for general audiences and pet owners and is not directed at children under the age of 13 (or under 16 in certain jurisdictions). We do not knowingly collect or solicit personal data from children.',
        'If we discover that a child has provided us with personal information without verifiable parental consent, we will immediately delete that information. If you believe a minor has registered an account, please contact us immediately at pethorizon2026@gmail.com.'
      ]
    },
    {
      id: 'changes-to-policy',
      title: '9. Changes to This Privacy Policy',
      content: [
        'We may periodically update this Privacy Policy to reflect enhancements in our application features, legal requirements, or Google Play policies. Any modifications will be posted directly on this page with an updated "Last Updated" revision date.',
        'Significant changes will also be accompanied by a notification within the Pet Horizon mobile application or delivered via email where applicable.'
      ]
    },
    {
      id: 'contact-info',
      title: '10. Contact & Support Information',
      content: [
        'If you have any questions, concerns, feedback, or requests regarding this Privacy Policy or your data rights, please contact our team directly:'
      ],
      subsections: [
        {
          subtitle: 'Official Contact Details',
          items: [
            'Developer / Support Team: Pet Horizon Support',
            'Official Support Email: pethorizon2026@gmail.com',
            'Application Name: Pet Horizon (Android)',
            'Package Identifier: com.anonymous.PetHorizon'
          ]
        }
      ]
    }
  ]
};

export const TERMS_OF_SERVICE: LegalDocument = {
  id: 'terms',
  title: 'Terms of Service & User Agreement',
  subtitle: 'The terms and conditions governing your use of the Pet Horizon mobile application, subscription services, and pet care tracking platform.',
  effectiveDate: 'September 17, 2026',
  lastUpdated: 'September 17, 2026',
  app: 'Pet Horizon (Android)',
  developer: 'Pet Horizon Development Team',
  email: 'pethorizon2026@gmail.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
  sections: [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: [
        'By downloading, installing, accessing, or using the Pet Horizon mobile application, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use Pet Horizon.'
      ]
    },
    {
      id: 'vet-disclaimer',
      title: '2. Veterinary Health & Medical Information Disclaimer',
      content: [
        'Pet Horizon is designed exclusively as an organizational companion tool to assist pet owners in logging feeding schedules, medication schedules, vaccination dates, and daily activities.',
        'IMPORTANT: Pet Horizon DOES NOT provide certified veterinary medical advice, diagnosis, or clinical treatment recommendations. The application is not a substitute for professional veterinary consultations, examinations, or emergency clinical care.',
        'Always consult a licensed veterinarian for medical concerns, sudden behavioral changes, drug dosages, or illness concerning your pet. Never delay seeking professional veterinary medical advice because of information recorded or viewed in the app.'
      ]
    },
    {
      id: 'user-accounts',
      title: '3. User Accounts & Responsibilities',
      content: [
        'To access cloud synchronization, multi-pet tracking, and shared family hub features, you must create an account using Google Sign-In or a verified email address.',
        'You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access at pethorizon2026@gmail.com.'
      ]
    },
    {
      id: 'subscriptions-billing',
      title: '4. In-App Purchases & Subscriptions',
      content: [
        'Pet Horizon offers free core features as well as optional premium subscription tiers (PetHorizon Gold / Family Pack).',
        'All purchases, auto-renewing subscriptions, and payment methods are processed exclusively through Google Play Billing in adherence with Google Play Developer Distribution agreements.',
        'Subscriptions automatically renew unless canceled at least 24 hours prior to the end of the current billing cycle. You may manage, modify, or cancel your active subscriptions anytime via the Google Play Store app under "Payments & Subscriptions".'
      ]
    },
    {
      id: 'acceptable-use',
      title: '5. Acceptable Use & User Content',
      content: [
        'You retain ownership of any photos, notes, and records you upload to Pet Horizon. By uploading content, you grant Pet Horizon a non-exclusive license solely to host, display, and synchronize this content to provide our services to you and your authorized family caretakers.',
        'You agree not to upload harmful, abusive, illegal, or infringing content, nor attempt to reverse engineer, decompile, or compromise the security of the application or backend systems.'
      ]
    },
    {
      id: 'intellectual-property',
      title: '6. Intellectual Property Rights',
      content: [
        'The Pet Horizon name, logo, application design, graphics, UI components, code, and features are the exclusive intellectual property of the Pet Horizon Development Team and are protected by applicable copyright, trademark, and intellectual property laws.'
      ]
    },
    {
      id: 'limitation-of-liability',
      title: '7. Limitation of Liability',
      content: [
        'To the fullest extent permitted by applicable law, Pet Horizon and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of pet health data, resulting from your use of or inability to use the service.',
        'Pet Horizon is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.'
      ]
    },
    {
      id: 'termination',
      title: '8. Termination & Account Deletion',
      content: [
        'You may terminate your agreement with Pet Horizon at any time by deleting your account via in-app settings or emailing pethorizon2026@gmail.com. Upon termination, your data will be permanently purged in accordance with our 30-day retention policy.'
      ]
    },
    {
      id: 'contact-terms',
      title: '9. Contact Us',
      content: [
        'For inquiries regarding these Terms of Service, contact the Pet Horizon team at pethorizon2026@gmail.com.'
      ]
    }
  ]
};

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
