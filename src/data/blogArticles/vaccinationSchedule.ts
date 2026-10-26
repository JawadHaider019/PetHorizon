import { FullBlogArticle } from './types';

export const vaccinationScheduleArticle: FullBlogArticle = {
  slug: 'puppy-kitten-vaccination-schedule-booster-guide-worldwide',
  overviewSummary:
    'Navigating puppy and kitten immunizations is one of the most critical responsibilities for any pet parent. Between 6 and 16 weeks of age, maternal antibodies naturally recede, exposing puppies and kittens to life-threatening viral infections like Canine Parvovirus, Distemper, and Feline Panleukopenia. This comprehensive veterinary timetable outlines core booster timelines, lifestyle inoculations, and how PetHorizon helps you maintain flawless medical compliance.',
  sections: [
    {
      id: 'immunity-gap',
      heading: 'The Critical Maternal Immunity Gap: Why Timing Dictates Survival',
      intro:
        'When puppies and kittens nurse during their first 24 to 72 hours of life, they ingest colostrum—a nutrient-dense milk loaded with maternal antibodies that shield them from environmental pathogens.',
      paragraphs: [
        'However, maternal antibodies gradually wane over the first 6 to 16 weeks of life. During this transitional window, maternal antibodies are simultaneously too low to guarantee disease immunity, yet still concentrated enough to neutralize conventional vaccines if given too early.',
        'To overcome this biological obstacle, veterinary consensus protocols from the American Veterinary Medical Association (AVMA) and World Small Animal Veterinary Association (WSAVA) dictate administering booster doses every 3 to 4 weeks until the pet reaches at least 16 weeks of age.'
      ],
      warningBox: {
        title: 'Emergency Caution: Incomplete Puppy Vaccination',
        text: 'Never introduce an incompletely vaccinated puppy to public dog parks, sidewalk grass where unknown dogs defecate, or communal grooming facilities until 14 days after their final 16-week core booster.'
      }
    },
    {
      id: 'timetable',
      heading: 'Official Canine Vaccination Schedule (Birth to 16 Months)',
      intro:
        'Below is the gold-standard protocol adopted by leading small animal veterinary hospitals worldwide:',
      table: {
        headers: ['Age Interval', 'Vaccine Type', 'Target Pathogens', 'Mandatory vs. Optional'],
        rows: [
          ['6 – 8 Weeks', 'DHPP Dose 1 + Deworming', 'Distemper, Hepatitis, Parvovirus, Parainfluenza', 'Core (Mandatory)'],
          ['10 – 12 Weeks', 'DHPP Dose 2 + Leptospirosis 1', 'Parvovirus, Adenovirus, Lepto serovars', 'Core + Lifestyle'],
          ['14 – 16 Weeks', 'DHPP Dose 3 + Rabies 1-Year', 'Complete Core Immunity & Rabies Virus', 'Core (Mandated by Law)'],
          ['12 – 16 Months', 'DHPP Adult Booster + Rabies 3-Yr', 'Sustained adult protective titers', 'Core Maintenance']
        ]
      },
      routineTip: {
        title: 'Deworming Co-Protocol',
        text: 'Routine fecal checks and broad-spectrum dewormers should accompany every vaccine appointment to treat common parasites like roundworms and hookworms.',
        actionLabel: 'Set Deworming Alert'
      }
    },
    {
      id: 'core-vs-non-core',
      heading: 'Core vs. Non-Core Vaccines: Evaluating Risk Factors',
      intro:
        'Not all dogs and cats require identical vaccination cocktails. While core shots are universal, non-core vaccines depend on your geographic climate, outdoor lifestyle, and boarding frequency:',
      bulletPoints: [
        {
          label: 'Bordetella (Kennel Cough):',
          text: 'Crucial for dogs entering boarding kennels, agility classes, dog daycares, or frequent grooming appointments.'
        },
        {
          label: 'Leptospirosis:',
          text: 'Bacterial infection spread via wildlife urine and stagnant rainwater puddles. Strongly advised for suburban and urban dogs alike.'
        },
        {
          label: 'Lyme & Canine Influenza:',
          text: 'Recommended for pets active in high-tick wilderness corridors or dense metropolitan boarding communities.'
        }
      ],
      featureCta: {
        module: 'clinical',
        badge: 'PetHorizon Clinical Module',
        title: 'Never Miss a Critical Booster with PetHorizon',
        description:
          'Paper vet cards get lost. PetHorizon logs your pet’s exact vaccination history, calculates upcoming due dates automatically, and generates an instant QR passport for boarding facilities and emergency clinics.',
        buttonText: 'Get PetHorizon on Google Play',
        actionType: 'playStore'
      }
    },
    {
      id: 'pethorizon-health-card',
      heading: 'Digitizing Your Pet’s Health Card: Instant QR Vet Sharing',
      intro:
        'When an emergency occurs after-hours or you drop your dog at a boarding kennel, locating up-to-date proof of rabies and DHPP vaccination can be frantic and stressful.',
      paragraphs: [
        'PetHorizon replaces fragile paper booklets with a centralized Clinical Health Card. You can log vaccine manufacturer serial numbers, administering clinics, and weight changes.',
        'With PetHorizon’s instant QR sharing, any vet technician or kennel attendant can scan your phone screen to verify immunizations in seconds—without needing an account or app installation.'
      ]
    }
  ]
};
