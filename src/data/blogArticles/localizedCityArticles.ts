import { FullBlogArticle } from './types';

export const nycVaccinationArticle: FullBlogArticle = {
  slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
  readTime: '8 min read',
  overviewSummary:
    'Raising a puppy or kitten in New York City requires navigating high-density sidewalks, shared apartment elevators, dog runs, and strict NYC Department of Health (DOHMH) mandates. This localized veterinary timetable outlines core boosters, mandatory NYC rabies licensing laws, and urban Leptospirosis and Bordetella protocols.',
  sections: [
    {
      id: 'nyc-health-code-mandates',
      heading: 'NYC Health Code Article 161: Rabies & Dog Licensing Laws',
      intro:
        'Under New York City Health Code Article 161, every dog and cat kept in the five boroughs must maintain an active, veterinarian-certified rabies immunization starting at 12 to 16 weeks of age.',
      paragraphs: [
        'For Manhattan, Brooklyn, Queens, Bronx, and Staten Island apartment dwellers, co-op boards and residential management companies routinely require a verified Rabies Certificate and NYC DOHMH Dog License before approving pet occupancy.',
        'Beyond legal compliance, NYC’s dense urban footprint creates unique infectious exposure vectors. Standing rainwater puddles near curb grates and parks carry Leptospira bacteria shed by urban rodents, making the 2-dose Leptospirosis series essential for city dogs.'
      ],
      table: {
        headers: ['Age Window', 'NYC Puppy Protocol', 'NYC Kitten Protocol', 'Borough Risk Factor'],
        rows: [
          ['6 – 8 Weeks', 'DHPP #1 + Bordetella (Intranasal)', 'FVRCP #1 + FeLV/FIV Test', 'High-density breeder/shelter transport'],
          ['10 – 12 Weeks', 'DHPP #2 + Leptospirosis #1 + Lyme #1', 'FVRCP #2 + FeLV #1', 'Sidewalk puddles & Hudson Valley ticks'],
          ['14 – 16 Weeks', 'DHPP #3 + Rabies (NYC Law) + Lepto #2 + Lyme #2', 'FVRCP #3 + Rabies (1-Yr)', 'Mandatory for NYC DOHMH license & dog runs'],
          ['12 Months', '1-Yr DHPP, Lepto, Bordetella & 3-Yr Rabies', '1-Yr FVRCP & Rabies Booster', 'Required by NYC daycares & groomers']
        ]
      },
      warningBox: {
        title: 'NYC Sidewalk & Dog Run Wait Rule',
        text: 'Avoid public NYC dog runs (such as Tompkins Square, Madison Square, or Central Park off-leash hours) and street puddles until 14 days after your puppy’s final 16-week DHPP and Leptospirosis boosters.'
      }
    },
    {
      id: 'nyc-boarding-daycare-records',
      heading: 'Digitizing Vaccine Certificates for NYC Daycares & Co-op Boards',
      intro:
        'Licensed NYC doggy daycares, groomers, and boarding facilities strictly inspect Bordetella (every 6–12 months), Canine Influenza (H3N2/H3N8), DHPP, and Rabies dates prior to check-in.',
      paragraphs: [
        'Instead of carrying crumpled paper receipts from your Manhattan or Brooklyn veterinary clinic, store your pet’s lot numbers, expiration dates, and veterinarian license details inside PetHorizon’s Clinical Health Card for instant PDF or QR inspection.'
      ],
      bulletPoints: [
        { label: 'Leptospirosis Protection', text: 'Critical across all 5 boroughs due to urban rat populations contaminating street runoff.' },
        { label: 'Lyme & Tick Prevention', text: 'Essential for dogs visiting Central Park, Prospect Park, Pelham Bay, or weekend Catskills trails.' },
        { label: '1-Tap Vet & Daycare Pass', text: 'Launch Emergency Vet Mode in PetHorizon to show verified booster timestamps on your phone.' }
      ],
      routineTip: {
        title: 'Store NYC Vaccine Certificates in PetHorizon',
        text: 'Log DHPP, Rabies, and Leptospirosis booster reminders so your NYC daycare pass never lapses.',
        actionLabel: 'Open Clinical Health Card'
      }
    }
  ]
};

export const londonCoParentingArticle: FullBlogArticle = {
  slug: 'household-pet-coparenting-feeding-routine-sync-london',
  readTime: '7 min read',
  overviewSummary:
    'Between staggered London Underground commutes, hybrid office days in the City, and shared flatshares across Zone 1 to Zone 4, coordinating daily dog walks and cat feedings is a common household challenge. Learn how London pet owners prevent double-feeding and sync RCVS health records.',
  sections: [
    {
      id: 'london-commuter-pet-sync',
      heading: 'Solving the "Did You Feed the Dog Before the Tube?" Dilemma',
      intro:
        'When one partner catches an early Northern Line train at 7:15 AM and another works from home in Clapham or Hackney, verbal handoffs frequently break down—leading to accidental double breakfasts or missed evening medications.',
      paragraphs: [
        'Veterinary surgeons across the UK report that uncoordinated feeding between partners and flatmates is a primary driver of gradual pet weight gain. Even a single extra scoop of kibble twice a week adds thousands of surplus kilocalories over a year.',
        'By replacing kitchen whiteboards and buried WhatsApp threads with PetHorizon’s Family Hub, London households get an active Anti-Collision Care Lock: the moment one person starts pouring breakfast or clipping on the lead for a Hampstead Heath or Victoria Park walk, every paired phone updates in real time.'
      ],
      table: {
        headers: ['London Household Scenario', 'Common Breakdown', 'PetHorizon Family Hub Solution'],
        rows: [
          ['Staggered Tube Commutes', 'Both partners feed breakfast 45 mins apart', 'Live Care Lock & timestamped "Done" badge'],
          ['Flatshare / Housemates', 'Unclear who walked the dog at lunchtime', 'Shared daily walk log with duration & notes'],
          ['Weekend Dog Sitters', 'Lengthy handwritten medication sheets', 'Instant 6-character Household QR Join Code'],
          ['UK Vet & Boarding Check-In', 'Missing RCVS booster & microchip details', 'Digital Health Card with UK microchip ID']
        ]
      }
    },
    {
      id: 'uk-microchip-rcvs-compliance',
      heading: 'UK Microchipping Laws & RCVS Record Readiness',
      intro:
        'Under UK legislation (including the compulsory cat microchipping regulations in England), both dogs and cats must be microchipped and registered on an approved database before 20 weeks of age.',
      paragraphs: [
        'PetHorizon stores your pet’s 15-digit UK ISO microchip number, RCVS veterinary practice contact details, and annual booster history (DHP, Leptospirosis L4, Kennel Cough, and Feline Enteritis) in an offline-accessible passport.'
      ],
      routineTip: {
        title: 'Sync Your London Household in 10 Seconds',
        text: 'Generate a household QR code in PetHorizon so partners, flatmates, and sitters stay in lockstep.',
        actionLabel: 'Sync Family Hub Free'
      }
    }
  ]
};

export const torontoBudgetArticle: FullBlogArticle = {
  slug: 'monthly-pet-care-cost-vet-expense-budget-toronto',
  readTime: '8 min read',
  overviewSummary:
    'From Ontario Veterinary Medical Association (OVMA) exam rates to 12-month Lyme tick preventatives for High Park and Don Valley trails, owning a dog or cat in Toronto requires realistic CAD budgeting. Review our transparent Greater Toronto Area (GTA) monthly cost breakdown.',
  sections: [
    {
      id: 'toronto-monthly-cost-breakdown',
      heading: 'Average Monthly Dog & Cat Costs in Toronto (CAD Breakdown)',
      intro:
        'Veterinary clinical fees, urban daycare rates, and specialty pet nutrition in the Greater Toronto Area reflect Ontario’s higher operating and staffing standards.',
      paragraphs: [
        'For Toronto dog owners, recurring monthly costs typically range from $185 to $360 CAD, while indoor cats average $95 to $175 CAD per month. Setting aside a dedicated preventive care and seasonal gear allowance prevents financial surprise during annual wellness visits.'
      ],
      table: {
        headers: ['Expense Category', 'Toronto Dog (Monthly CAD)', 'Toronto Cat (Monthly CAD)', 'Local GTA Cost Driver'],
        rows: [
          ['Quality Nutrition & Treats', '$85 – $140 CAD', '$55 – $90 CAD', 'WSAVA-compliant kibble & wet hydration formulas'],
          ['Preventive Vet & Tick/Heartworm', '$35 – $55 CAD', '$20 – $35 CAD', 'Endemic blacklegged ticks in GTA ravines & parks'],
          ['Winter Paw Care & Grooming', '$30 – $75 CAD', '$10 – $20 CAD', 'Sidewalk salt boots, paw balm & coat maintenance'],
          ['Emergency Fund / Insurance', '$45 – $90 CAD', '$25 – $45 CAD', 'GTA 24/7 emergency clinic triage readiness']
        ]
      },
      warningBox: {
        title: 'Toronto Ravines & Year-Round Tick Risk',
        text: 'Blacklegged ticks carrying Lyme disease are active across the Don Valley, Rouge Park, and Toronto Islands whenever temperatures exceed 4°C. Budgeting for year-round parasite prevention is far cheaper than treating canine Lyme nephritis.'
      }
    },
    {
      id: 'winter-salt-budgeting-gta',
      heading: 'Tracking CAD Vet Receipts & Seasonal Winter Gear in PetHorizon',
      intro:
        'Heavy municipal road salting across downtown Toronto sidewalks between December and March makes protective dog booties, paw wax, and post-walk rinses essential.',
      paragraphs: [
        'Use PetHorizon’s Wallet & Expense Tracker to log veterinary invoices, food purchases, and seasonal gear with monthly budget alerts tailored to your household allowance.'
      ],
      routineTip: {
        title: 'Track Your Toronto Pet Budget',
        text: 'Categorize vet bills, food, and grooming expenses in PetHorizon to stay ahead of monthly spending.',
        actionLabel: 'Open Expense Tracker'
      }
    }
  ]
};

export const sydneyTrackersArticle: FullBlogArticle = {
  slug: 'best-pet-gps-trackers-health-wearables-review-sydney',
  readTime: '9 min read',
  overviewSummary:
    'Testing pet GPS trackers and health wearables across Sydney’s off-leash coastal beaches, humid bushland reserves, and suburban backyards. Compare IP68 saltwater durability, Telstra/Optus 4G LTE-M coverage, and early paralysis tick lethargy detection.',
  sections: [
    {
      id: 'sydney-coastal-bushwalk-testing',
      heading: 'Sydney Beach & Bushland GPS Testing: LTE Coverage & Saltwater IP68 Ratings',
      intro:
        'From Sirius Cove and Curl Curl Lagoon to Ku-ring-gai Chase bush tracks, Sydney dogs face rugged terrain, sandstone gullies, and corrosive ocean surf that quickly destroy low-grade electronics.',
      paragraphs: [
        'Bluetooth proximity tags fail rapidly in dense Australian eucalyptus bushland where few passerby phones are nearby. Dedicated GPS collars utilizing Australian 4G LTE-M cellular bands (Telstra and Optus footprints) provide continuous real-time coordinates when a high-prey-drive dog bolts after bush turkeys or wallabies.',
        'Equally vital for NSW coastal pet owners is true IP68 waterproofing and rinsing the collar dock with fresh tap water after saltwater swims to prevent charging contact corrosion.'
      ],
      table: {
        headers: ['Evaluation Metric', 'Sydney Coastal / Bush Requirement', 'Why It Matters in NSW'],
        rows: [
          ['Cellular Network', '4G LTE-M (Telstra / Optus bands)', 'Penetrates sandstone gullies & coastal headlands'],
          ['Waterproofing', 'IP68 Continuous Immersion', 'Survives daily ocean swims at dog-friendly harbour beaches'],
          ['Activity & Sleep Telemetry', 'Baseline Lethargy & Scratching Alerts', 'Early indicator of East Coast Paralysis Tick toxicity'],
          ['Battery Endurance', '7 – 21 Days (Power-Saving Wi-Fi Zones)', 'Reliable tracking during weekend Blue Mountains trips']
        ]
      },
      warningBox: {
        title: 'East Coast Paralysis Tick (Ixodes holocyclus) Alert',
        text: 'Along Sydney’s Northern Beaches, North Shore, and coastal scrub, paralysis ticks are a lethal year-round hazard. Sudden drops in daily activity, hind-limb wobble, or altered bark pitch require immediate veterinary emergency care.'
      }
    },
    {
      id: 'pairing-wearables-pethorizon-au',
      heading: 'Pairing Wearable Activity Trends with PetHorizon Health Logs',
      intro:
        'A GPS wearable shows where your dog ran today, while PetHorizon unifies their complete preventive tick treatments, weight in kilograms, and family walk handoffs.',
      paragraphs: [
        'By logging monthly oral or spot-on paralysis tick preventatives (such as Isoxazoline-class chewables) alongside daily beach walks in PetHorizon, your entire household knows your pet is protected before heading off-leash.'
      ],
      routineTip: {
        title: 'Never Miss a Tick Preventative Dose',
        text: 'Set recurring paralysis tick & heartworm alarms in PetHorizon and log daily Sydney beach walks.',
        actionLabel: 'Set Preventative Alarms'
      }
    }
  ]
};

