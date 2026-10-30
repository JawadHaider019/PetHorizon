import { FullBlogArticle } from './types';

export const petDiabetesInsulinArticle: FullBlogArticle = {
  slug: 'dog-cat-diabetes-insulin-feeding-schedule-guide',
  readTime: '15 min read',
  overviewSummary:
    'Managing diabetes mellitus in dogs and cats hinges on strict 12-hour synchronization between measured meals and subcutaneous insulin injections. Administering insulin on an empty stomach—or accidentally administering a double dose between uncoordinated family members—can trigger fatal hypoglycemic seizures within minutes. Review AAHA diabetes management protocols, missed dose rules, and multi-caregiver lock safeguards.',
  sections: [
    {
      id: 'twelve-hour-insulin-meal-rule',
      heading: 'The Strict 12-Hour Meal & Insulin Synchronization Protocol',
      intro:
        'Canine diabetes is typically insulin-dependent (resembling human Type 1 diabetes), whereas feline diabetes frequently resembles Type 2 insulin resistance and can achieve clinical remission when treated early with low-carbohydrate wet diets and glargine/protamine zinc insulin.',
      paragraphs: [
        'Regardless of species, the golden veterinary rule is "Feed First, Confirm Appetite, Then Inject." Your pet must consume at least 50% to 75% of their measured meal before the morning or evening insulin injection is administered. This guarantees that exogenous insulin peaks alongside intestinal glucose absorption.',
        'Space injections strictly 12 hours apart (for example, 7:00 AM and 7:00 PM). Consistent gram portions weighed on a digital scale ensure the glycaemic curve remains predictable from day to day.'
      ],
      table: {
        headers: ['Clinical Scenario', 'Appetite / Dosing Status', 'AAHA Veterinary Action Protocol'],
        rows: [
          ['Normal Meal Window', 'Pet eats 100% of measured meal', 'Administer full prescribed insulin dose immediately after eating'],
          ['Refuses Food / Vomits', 'Pet eats 0% of meal or vomits', 'DO NOT administer full insulin; call your vet (often 0% to 50% dose advised)'],
          ['Partial / Uncertainty Leak', 'Fur feels wet after injection', 'NEVER re-inject a second dose; wait until the next 12-hour scheduled window'],
          ['Missed Window (> 2–3 hrs late)', 'Caregiver forgot on-time dose', 'Skip or contact vet; never double the next scheduled dose']
        ]
      },
      warningBox: {
        title: 'Emergency Hypoglycemia (Low Blood Sugar) Protocol',
        text: 'Hyperglycemia (high blood sugar) damages organs slowly over months, but Hypoglycemia kills within minutes. If your diabetic pet appears drunken, glassy-eyed, trembling, or seizing, rub corn syrup (Karo) or honey directly onto their gums and drive to a 24/7 veterinary ER immediately.'
      }
    },
    {
      id: 'preventing-household-double-dosing',
      heading: 'Eliminating Accidental Double-Dosing in Multi-Person Homes',
      intro:
        'Veterinary emergency toxicologists report that accidental double-dosing by well-meaning spouses or roommates is one of the most common causes of iatrogenic insulin overdose.',
      bulletPoints: [
        { label: 'Active Care Lock', text: 'Use PetHorizon’s Anti-Collision Care Lock so the moment one partner draws up the syringe, every family phone displays an active lock.' },
        { label: 'Insulin Storage Integrity', text: 'Store vials upright in the refrigerator (never the door shelf); roll suspension insulins gently between palms rather than shaking vigorously.' }
      ],
      routineTip: {
        title: 'Protect 12-Hour Insulin Windows with PetHorizon',
        text: 'Set locked 12-hour insulin and feeding alarms in PetHorizon so every family caregiver sees real-time administration timestamps.',
        actionLabel: 'Set Up Insulin Alarms'
      }
    }
  ]
};

export const petMicrochipGuideArticle: FullBlogArticle = {
  slug: 'pet-microchip-registration-lookup-guide',
  readTime: '12 min read',
  overviewSummary:
    'A pet microchip is a grain-of-rice-sized RFID transponder implanted beneath the skin between the shoulder blades, yet veterinary shelter studies reveal that nearly 40% of microchipped lost pets have outdated or unregistered contact records. Learn ISO 11784/11785 15-digit standards, how to use the AAHA Universal Pet Microchip Lookup tool, and why storing your chip ID in a digital health card is vital.',
  sections: [
    {
      id: 'how-microchip-registries-work',
      heading: 'How Pet Microchips & The AAHA Universal Lookup Tool Work',
      intro:
        'Contrary to popular belief, a microchip does not contain a GPS battery or real-time satellite transmitter—and implanting the chip at your vet clinic does not automatically register your phone number in every national database.',
      paragraphs: [
        'When an animal shelter or veterinary clinic scans a lost dog or cat with a universal RFID scanner, the screen displays a unique 9-, 10-, or 15-digit alphanumeric identification code. Staff then enter that number into the AAHA Universal Pet Microchip Lookup tool (or EuroPetNet / UK DEFRA-approved registries), which queries participating manufacturers (HomeAgain, AKC Reunite, 24PetWatch, Found Animals, PetLink) to find the registry holding the owner’s latest contact file.',
        'If you moved apartments, changed mobile numbers, or adopted a pre-chipped rescue pet without completing the registry transfer, the scanner returns a dead end.'
      ],
      table: {
        headers: ['Microchip Standard', 'Digit Length & Frequency', 'Global & Travel Compatibility'],
        rows: [
          ['ISO Standard 11784/11785', '15 Digits (134.2 kHz)', 'Universal global standard; mandatory for EU, UK & international pet travel'],
          ['Legacy Encrypted (FECAVA)', '10 Digits (125 kHz)', 'Read by modern multi-frequency US scanners; requires ISO chip or scanner for EU travel'],
          ['Legacy AVID Encrypted', '9 Digits (125 kHz)', 'Legacy US domestic format; upgrade to 15-digit ISO prior to international flights']
        ]
      },
      warningBox: {
        title: 'International Travel Rule: Implant ISO Microchip BEFORE Rabies Vaccine',
        text: 'For USDA APHIS and EU/UK Animal Health Certificates, your pet’s 15-digit ISO microchip MUST be implanted and scanned on or before the date their rabies vaccination is administered. Any rabies shot given before microchipping is legally invalid for international border entry.'
      }
    },
    {
      id: 'keeping-microchip-id-accessible',
      heading: 'Storing Your Pet’s 15-Digit Microchip ID in PetHorizon',
      intro:
        'During an emergency evacuation, international flight check-in, or lost-pet alert, most owners cannot locate the paper sticker given to them years ago.',
      bulletPoints: [
        { label: 'Annual Scan Verification', text: 'Ask your veterinarian to scan your pet’s shoulders during every annual wellness exam to confirm the transponder has not migrated.' },
        { label: 'Digital Health Passport', text: 'Record the exact 15-digit code, registry brand, and primary clinic phone inside PetHorizon’s Clinical Health Card for 1-tap copy and PDF export.' }
      ],
      routineTip: {
        title: 'Save Your Pet’s Microchip & Rabies Passport',
        text: 'Keep your pet’s 15-digit microchip number, vaccine lot numbers, and emergency contacts in PetHorizon.',
        actionLabel: 'Save Microchip in PetHorizon'
      }
    }
  ]
};

