import { FullBlogArticle } from './types';

export const petSitterInstructionsArticle: FullBlogArticle = {
  slug: 'pet-sitter-instructions-handover-checklist-template',
  readTime: '15 min read',
  overviewSummary:
    'Leaving your dog or cat in the care of a pet sitter, friend, or family member while you travel requires clear, thorough documentation. Miscommunications over feeding measurements, medication dosages, emergency vet authorizations, and alarm codes account for the majority of vacation emergencies. This guide provides a complete handover checklist, emergency veterinary proxy authorization template, and shows how PetHorizon’s instant QR caregiver sync eliminates paper confusion.',
  sections: [
    {
      id: 'essential-handover-checklist',
      heading: 'The Master Pet Sitter Handover Checklist: 5 Crucial Categories',
      intro:
        'A thorough handover document covers far more than just "two scoops in the morning." Every sitter needs immediate answers across five operational domains.',
      paragraphs: [
        'Feeding & Nutrition: Document the exact food brand, precise gram measurements (or level measuring cups), meal times, and treat limits. Specify whether kibble should be soaked in warm water or topped with canned food.',
        'Medication & Supplements: Record medication names, exact milligram dosages, delivery techniques (e.g., hidden in cheese vs. oral syringe), and what to do if the pet spits out a pill. Never leave loose pills unlabeled on the kitchen counter.',
        'Exercise & Bathroom Routine: Note walk schedules, favorite routes, leash-reactivity warnings (e.g., "barks at rollerblades—cross the street"), and typical bathroom frequency.',
        'Household & Security Logistics: Document Wi-Fi passwords, security alarm codes, circuit breakers, trash collection days, and who has spare physical house keys.',
        'Emergency Veterinary Contacts: List your primary clinic, 24-hour emergency animal hospital address, pet insurance policy number, and written financial spending limits.'
      ],
      table: {
        headers: ['Category', 'What to Include', 'Common Costly Oversight'],
        rows: [
          ['Daily Nutrition', 'Exact gram weight, bowl location, fresh water protocol', 'Assuming "1 scoop" means the same thing to everyone (often 50% overfed)'],
          ['Prescription Meds', 'Drug name, frequency, pill-pocket instructions, missed dose rule', 'Failing to specify whether to administer with or without food'],
          ['Behavior & Triggers', 'Fear of thunder, door-darting habits, leash reactivity', 'Sitter accidentally dropping leash when a dog lunges at a bicycle'],
          ['Emergency Vet Authorization', 'Primary vet, 24/7 ER clinic, payment guarantee letter', 'Clinic refusing treatment while waiting for overseas card authorization']
        ]
      },
      warningBox: {
        title: 'Sign an Emergency Veterinary Authorization Letter',
        text: 'Most veterinary emergency hospitals will not perform life-saving surgery or extensive diagnostics without pre-authorized payment. Leave a signed proxy form stating: "I authorize [Sitter Name] to approve emergency medical treatment for my pet up to $[Amount] in my absence."'
      }
    },
    {
      id: 'emergency-proxy-template',
      heading: 'Veterinary Emergency Treatment Proxy Form Template',
      intro:
        'Print or digitally share this legal proxy template with your pet sitter and email a copy to your regular and 24/7 emergency veterinary clinics prior to departure.',
      bulletPoints: [
        { label: 'Pet Information', text: 'Pet Name, Species, Breed, Age, Weight, Microchip Number, Spayed/Neutered status.' },
        { label: 'Owner Details', text: 'Full Name, Mobile Phone (with international country code), Email, Hotel / Flight details.' },
        { label: 'Authorized Caregiver', text: 'Pet Sitter Name, Sitter Phone Number, Government ID Number.' },
        { label: 'Medical History', text: 'Known drug allergies, pre-existing conditions (e.g., epilepsy, diabetes, heart murmur), current medications.' },
        { label: 'Financial Cap', text: 'Maximum pre-authorized emergency medical expenditure (e.g., up to $2,000 without prior phone consultation).' }
      ],
      routineTip: {
        title: 'Share Instant Sitter Access with PetHorizon Family Hub',
        text: 'Instead of handwriting pages of notes, generate a temporary Caregiver QR code in PetHorizon. Your sitter gets real-time access to feeding schedules, medical records, and one-tap emergency vet contacts directly on their smartphone.',
        actionLabel: 'Generate Sitter QR Code in PetHorizon'
      }
    },
    {
      id: 'pre-departure-orientation',
      heading: 'The 48-Hour Pre-Departure Orientation Walkthrough',
      intro:
        'Never hand over keys on the morning of your flight. Schedule a 30-minute in-person trial run 24 to 48 hours beforehand.',
      paragraphs: [
        'Have the sitter walk through the feeding routine, show them where extra food bags and enzymatic carpet cleaners are stored, and demonstrate how to administer oral medications.',
        'Take a 10-minute joint neighborhood walk. This allows your dog to see the sitter as a trusted family friend and gives you the opportunity to point out neighborhood triggers like barking yard dogs or construction zones.',
        'Verify that all collar ID tags are clearly legible and ensure microchip registry details are up-to-date with your active travel cell phone number.'
      ]
    }
  ]
};
