import { FullBlogArticle } from './types';

export const petTravelChecklistArticle: FullBlogArticle = {
  slug: 'pet-travel-checklist-flying-car-trips-vet-records',
  readTime: '16 min read',
  overviewSummary:
    'Traveling with a companion animal—whether taking an interstate highway road trip or boarding a long-haul commercial flight—demands rigorous logistical, medical, and behavioral preparation. Strict airline in-cabin carrier dimensions, mandatory USDA APHIS health certification windows, International Air Transport Association (IATA) Live Animals Regulations, motion sickness management, and international rabies titer testing can quickly overwhelm pet parents. This comprehensive veterinary travel guide details airline carrier specifications, crash-tested vehicle restraint physics, motion sickness protocols, and digital health passport organization.',
  sections: [
    {
      id: 'flying-in-cabin-vs-cargo-hold',
      heading: 'Commercial Air Travel: In-Cabin Guidelines vs. Cargo Hold Safety',
      intro:
        'Airlines enforce rigid biological and physical criteria governing pet transit to maintain aircraft safety, cabin hygiene, and animal welfare:',
      paragraphs: [
        'In-Cabin Travel Regulations: Permitted for cats and small dogs whose combined body weight with their carrier does not exceed airline limits (typically 15 to 20 lbs / 7 to 9 kg). The carrier must fit completely underneath the seat directly in front of you without compressing your pet. The animal must be able to stand up, turn around completely, and lie down in a natural resting posture throughout the flight.',
        'Brachycephalic Breed Bans: Due to high historic mortality rates associated with severe respiratory distress and heat stress at high altitudes, snub-nosed dog breeds (French Bulldogs, Pugs, English Bulldogs, Boxers) and brachycephalic cats (Persians, Himalayans) are strictly prohibited from flying in cargo holds by virtually every major global airline.',
        'Cargo Hold Realities (IATA LAR Compliance): Large dogs that exceed in-cabin limits must fly as manifest cargo or checked baggage in rigid, fiberglass/hard-plastic crates meeting IATA Live Animals Regulations (LAR Container Requirement 1). Crates must feature metal bolt fasteners (never plastic dial clips), exterior water funnels, absorbent bedding, and ventilation on all four sides. Always book non-stop flights during temperate seasons (early morning or late evening in summer; midday in winter) to prevent tarmac thermal extremes.'
      ],
      table: {
        headers: ['Airline / Regulatory Body', 'In-Cabin Pet Fee (One-Way)', 'Max Soft-Sided Dimensions', 'Health Certificate Mandate', 'Brachycephalic Policy'],
        rows: [
          ['Delta Air Lines', '$95 – $125 USD', '18" L x 11" W x 11" H', 'Required for international; state dependent', 'Strictly banned from cargo'],
          ['United Airlines', '$125 – $150 USD', '18" L x 11" W x 11" H', 'Mandatory CVI within 10 days of travel', 'Banned from all cargo transit'],
          ['American Airlines', '$150 USD', '19" L x 13" W x 9" H', 'Required for cargo; state dependent for cabin', 'Banned from checked baggage'],
          ['European Union (EU Pet Passport)', '€50 – €140 EUR', 'Varies by European carrier', 'Mandatory ISO 11784/11785 microchip + rabies vaccine', 'Carrier specific restrictions']
        ]
      },
      warningBox: {
        title: 'The USDA APHIS 10-Day Health Certificate Rule',
        text: 'Most commercial airlines and international agricultural departments mandate a Certificate of Veterinary Inspection (CVI) signed by an accredited USDA veterinarian within exactly 10 days of departure. Missing this strict 10-day window results in denied airline boarding at check-in with zero exceptions.'
      }
    },
    {
      id: 'road-trip-car-safety-and-restraints',
      heading: 'Car Road Trips: Crash-Tested Restraints vs. Deadly Projectile Physics',
      intro:
        'A 10-pound unrestrained dog in a 30 mph vehicle collision exerts roughly 300 pounds of projectile impact force, endangering the animal, front-seat passengers, and emergency first responders.',
      paragraphs: [
        'Never permit dogs to ride on your lap, roam freely across back seats, or hang their heads out of moving car windows. Airborne road gravel, insects, and debris frequently cause traumatic corneal lacerations and eye punctures. Furthermore, deploying front-seat airbags strike small pets with devastating, fatal force.',
        'The Center for Pet Safety (CPS) Standard: The Center for Pet Safety is an independent non-profit that conducts dynamic crash tests using instrumented canine crash dummies. The vast majority of retail "dog seatbelts" fail catastrophically during simulated 30 mph impacts. Only crash-certified harnesses (e.g., Sleepypod Clickit Terrain) or crash-tested structural crates (e.g., Gunner Kennels G1) safely distribute crash forces across the chest and pelvic girdle.',
        'Road Trip Hydration & Rest Cycles: Plan rest stops every 2 to 3 hours for leashed bathroom walks and hydration. Never leave a dog or cat inside a parked car, even with windows cracked: interior vehicle temperatures soar from 70°F to 100°F (38°C) in under 20 minutes on sunny days.'
      ],
      stepByStep: {
        title: 'Pre-Travel Desensitization & Preparation Ladder',
        steps: [
          { number: 1, title: 'Week 3: Crate Positive Association', description: 'Set travel carrier in living room with door open; feed all daily meals and high-value treats inside.' },
          { number: 2, title: 'Week 2: Short 10-Minute Drives', description: 'Take short 5-to-10 minute car rides ending at a pleasant park to prevent vehicle motion anxiety.' },
          { number: 3, title: 'Week 1: Veterinary Travel Exam & Medication', description: 'Obtain USDA health certificate, refill prescriptions, and acquire veterinary anti-nausea meds (Cerenia).' },
          { number: 4, title: 'Day of Departure: Fasting & Packing', description: 'Feed a light meal 4 to 6 hours before travel to prevent motion sickness; pack 48 hours of food in carry-on.' }
        ]
      }
    },
    {
      id: 'travel-pharmacology-and-packing',
      heading: 'Travel Pharmacology & The Essential Packing Checklist',
      intro:
        'Motion sickness and travel anxiety are biological issues with highly effective veterinary solutions:',
      paragraphs: [
        'Maropitant Citrate (Cerenia): A neurokinin-1 (NK-1) receptor antagonist that blocks substance P in the central emetic center of the brain. Administered orally 2 hours before travel with a small piece of food, Cerenia completely prevents vehicle motion sickness without causing sedation.',
        'Situational Anxiolytics: For pets experiencing acute panic during flight takeoff or highway driving, veterinarians frequently prescribe gabapentin (for cats and dogs) or trazodone (for dogs) administered 90 minutes prior to travel to promote gentle relaxation.',
        'TSA Airport Security Walkthrough: At airport security checkpoints, you must remove your pet from their soft carrier. You will carry your dog or cat in your arms through the metal detector while their empty carrier passes through the X-ray machine. Always ensure your pet is wearing a secure, escape-proof chest harness and leash during this screening.'
      ],
      bulletPoints: [
        { label: 'Familiar Bottled Water', text: 'Pack municipal tap water from home or bottled water; sudden mineral changes in hotel tap water trigger acute osmotic diarrhea.' },
        { label: 'Collapsible Silicone Bowls', text: 'Lightweight, easily sanitized bowls for airport relief areas or highway rest stops.' },
        { label: 'Prescription Medication Vault', text: 'Carry all medications in original pharmacy bottles with veterinarian contact details in your personal carry-on bag.' },
        { label: 'Microchip ID Verification', text: 'Confirm your pet’s ISO microchip number is registered with your current mobile phone number before leaving.' }
      ],
      routineTip: {
        title: 'Store Digital Travel Passports in PetHorizon',
        text: 'Save vaccination certificates, rabies tag IDs, microchip registration numbers, and vet contacts directly in PetHorizon. Access full clinical records offline even at 35,000 feet or international border checkpoints.',
        actionLabel: 'Store Travel Records in PetHorizon'
      }
    }
  ]
};
