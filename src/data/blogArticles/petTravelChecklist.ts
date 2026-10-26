import { FullBlogArticle } from './types';

export const petTravelChecklistArticle: FullBlogArticle = {
  slug: 'pet-travel-checklist-flying-car-trips-vet-records',
  readTime: '16 min read',
  overviewSummary:
    'Traveling with a dog or cat—whether embarking on a 10-hour interstate road trip or an international flight across borders—requires meticulous logistical, medical, and behavioral preparation. Strict airline carrier dimensions, government health certificates (APHIS Form 7001 / EU Pet Passport), motion sickness management, and emergency veterinary documentation can overwhelm even seasoned travelers. This comprehensive guide provides airline crate specifications, car safety crash-test ratings, pre-travel desensitization timelines, and digital health record organization.',
  sections: [
    {
      id: 'flying-in-cabin-vs-cargo',
      heading: 'Air Travel Realities: In-Cabin Regulations vs. Cargo Hold Safety',
      intro:
        'Airlines enforce rigid policies governing pet travel to ensure passenger safety and animal welfare. Understanding airline differences is essential before booking your flight.',
      paragraphs: [
        'In-Cabin Travel: Permitted for cats and small dogs whose combined weight with their soft-sided carrier does not exceed airline limits (typically 15 to 20 lbs / 7 to 9 kg). The carrier must fit completely under the seat in front of you without compressing your pet.',
        'Brachycephalic Restrictions: Snub-nosed breeds (French Bulldogs, Pugs, Persian cats) are prohibited from flying in cargo by almost all major commercial carriers due to high mortality rates from respiratory distress and poor thermoregulation at high altitudes.',
        'Cargo Hold Considerations: If a large dog must fly manifest cargo or excess baggage, choose direct non-stop flights during temperate seasons (early morning or late evening in summer; midday in winter) to prevent tarmac temperature extremes.'
      ],
      table: {
        headers: ['Airline / Governing Body', 'In-Cabin Pet Fee (One-Way)', 'Carrier Dimensions (Max Soft-Sided)', 'Health Certificate Mandate'],
        rows: [
          ['Delta Air Lines', '$95 – $125', '18" L x 11" W x 11" H', 'Required for international / state dependent'],
          ['United Airlines', '$125 – $150', '18" L x 11" W x 11" H', 'Required within 10 days of travel'],
          ['American Airlines', '$150', '19" L x 13" W x 9" H', 'Required for cargo; state dependent for cabin'],
          ['European Union (EU Pet Passport)', '€50 – €120 (Standard)', 'Varies by carrier (e.g. Lufthansa, KLM)', 'Mandatory ISO microchip, rabies titer test & passport']
        ]
      },
      warningBox: {
        title: 'USDA APHIS Health Certificate Timing',
        text: 'Most international destinations and domestic airlines require a Certificate of Veterinary Inspection (CVI) signed by an accredited USDA veterinarian within 10 days of departure. Missing this narrow 10-day window will result in denied airline boarding at check-in.'
      }
    },
    {
      id: 'road-trip-car-safety',
      heading: 'Car Road Trips: Crash-Tested Restraints vs. Dangerous Loose Pets',
      intro:
        'A 10-pound unrestrained dog in a 30 mph car crash exerts roughly 300 pounds of projectile impact force, endangering both the pet and front-seat passengers.',
      paragraphs: [
        'Never let pets ride on your lap or with their heads hanging out the window: airborne road gravel causes severe corneal ulcers, and deploying front-seat airbags are fatal to small animals.',
        'Look for harnesses and crates certified by the Center for Pet Safety (CPS)—an independent non-profit that conducts dynamic crash tests using instrumented canine crash-test dummies.',
        'Plan road stops every 2 to 3 hours for bathroom breaks, water hydration, and short leash walks. Never leave pets inside a parked vehicle, even with windows cracked: cabin temperatures climb from 70°F to 100°F within 20 minutes.'
      ],
      stepByStep: {
        title: 'Pre-Travel Desensitization Timeline (3 Weeks Out)',
        steps: [
          { number: 1, title: 'Week 1: Crate Positive Conditioning', description: 'Place travel crate in living room with door open; feed all daily meals and treats inside.' },
          { number: 2, title: 'Week 2: Short 10-Minute Engine Drives', description: 'Take short 5-to-10 minute car rides ending at a pleasant park to counter motion sickness and vehicle anxiety.' },
          { number: 3, title: 'Week 3: Veterinary Travel Exam & Certificate', description: 'Complete USDA health certificate, refill prescription medications, and obtain veterinary anti-nausea meds (Cerenia).' },
          { number: 4, title: 'Day of Travel: Fasting & Packing', description: 'Feed a light meal 4 to 6 hours before departure to prevent motion sickness; pack 48 hours of food in carry-on bag.' }
        ]
      },
      routineTip: {
        title: 'Store Digital Travel Passports in PetHorizon',
        text: 'Save vaccination certificates, rabies tag IDs, microchip registration numbers, and vet contacts directly in PetHorizon. Access full clinical records offline even at 35,000 feet or international border checkpoints.',
        actionLabel: 'Store Travel Records in PetHorizon'
      }
    },
    {
      id: 'travel-packing-checklist',
      heading: 'The Ultimate Pet Travel Packing Essentials',
      intro:
        'Pack a dedicated carry-on pet bag containing essential supplies for the unexpected.',
      bulletPoints: [
        { label: 'Food & Bottled Water', text: 'Pack 3 days of extra food and familiar bottled water; sudden municipal tap water changes trigger acute diarrhea.' },
        { label: 'Collapsible Silicone Bowls', text: 'Lightweight, leakproof, and easy to sanitize at airport pet relief areas or highway rest stops.' },
        { label: 'Medical Documentation', text: 'Physical and digital copies of rabies certificates, microchip registration, and pet insurance policy cards.' },
        { label: 'Enzymatic Cleanup Kit', text: 'Poop bags, absorbent pee pads, travel-size enzymatic wipes, and a spare leash and harness.' }
      ]
    }
  ]
};
