import { FullBlogArticle } from './types';

export const nycVaccinationArticle: FullBlogArticle = {
  slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
  readTime: '5 min read',
  overviewSummary:
    'Raising a puppy or kitten in New York City requires navigating high-density sidewalks, shared apartment building elevators, public dog runs, and strict NYC Department of Health (DOHMH) mandates. This localized veterinary timetable outlines core booster schedules, mandatory NYC Health Code Article 161 rabies licensing, urban Leptospirosis risks from street runoff, and digital records for NYC daycares.',
  sections: [
    {
      id: 'nyc-health-code-mandates',
      heading: 'NYC Health Code Article 161: Mandatory Rabies & Dog Licensing Laws',
      intro:
        'Under New York City Health Code Article 161, every dog and cat kept within the five boroughs must receive an accredited rabies vaccination administered by a licensed veterinarian by 12 to 16 weeks of age.',
      paragraphs: [
        'For Manhattan, Brooklyn, Queens, Bronx, and Staten Island apartment dwellers, residential co-op boards, condo associations, and rental management companies routinely require a verified Rabies Certificate and active NYC DOHMH Dog License before approving pet occupancy. City dog licenses cost $8.50 annually for spayed/neutered dogs ($34 for intact dogs), and failure to license carries municipal fines of up to $200.',
        'Beyond legal compliance, New York City’s sheer human and canine density creates intense viral and bacterial exposure vectors. In high-rise residential buildings where dozens of dogs share carpeted hallways and freight elevators, airborne pathogens circulate rapidly. Following our baseline [puppy and kitten vaccination schedule](/blogs/puppy-kitten-vaccination-schedule-booster-guide-worldwide) provides the foundational core immunization framework.',
        'Always maintain active records for NYC daycares and boarding kennels. Keep 24/7 veterinary emergency contacts saved in advance, including the Schwarzman Animal Medical Center (AMC) on Manhattan’s Upper East Side and BluePearl referral hospitals in Midtown, Downtown Brooklyn, and Forest Hills. Plan first-year urban veterinary costs with our [monthly pet care budget guide](/blogs/monthly-pet-care-cost-vet-expense-budget-worldwide).'
      ],
      table: {
        headers: ['Age Window', 'NYC Puppy Protocol', 'NYC Kitten Protocol', 'Urban Exposure Risk Vector'],
        rows: [
          ['6 – 8 Weeks', 'DHPP #1 + Bordetella (Oral/Intranasal)', 'FVRCP #1 + FeLV/FIV baseline testing', 'High-density breeder transport & apartment hallways'],
          ['10 – 12 Weeks', 'DHPP #2 + Leptospirosis #1 + Lyme #1', 'FVRCP #2 + FeLV #1 (outdoor/multi-cat)', 'Sidewalk curb runoff & Prospect/Central Park ticks'],
          ['14 – 16 Weeks', 'DHPP #3 + Rabies (NYC Law) + Lepto #2 + Lyme #2', 'FVRCP #3 + Rabies (NYC Law) + FeLV #2', 'Mandatory for NYC DOHMH license & dog runs'],
          ['12 Months', '1-Yr DHPP, Lepto 4-way, Bordetella & 3-Yr Rabies', '1-Yr FVRCP, Rabies Booster & FeLV audit', 'Strictly required for NYC boarding & grooming']
        ]
      }
    },
    {
      id: 'leptospirosis-and-sidewalk-hazards',
      heading: 'Urban Leptospirosis & The 14-Day NYC Sidewalk Quarantine Rule',
      intro:
        'Leptospirosis is a life-threatening bacterial spirochete infection (*Leptospira interrogans*) that is hyper-endemic across all five boroughs of New York City.',
      paragraphs: [
        'Urban brown rats (*Rattus norvegicus*) shed leptospires through their urine directly into standing street rainwater, subway ventilation grates, catch basins, and soil tree pits. When an unvaccinated puppy steps into an infected curb puddle or laps water off the sidewalk, the bacteria penetrate mucous membranes or micro-abrasions in the paw pads, attacking the kidneys and liver. Leptospirosis is also zoonotic, meaning it can transmit from infected pets directly to human family members.',
        'Veterinary emergency hospitals in NYC consistently report autumn surges in canine leptospirosis cases. A 2-dose Leptospirosis vaccine series (covering the four primary urban serovars: Canicola, Icterohaemorrhagiae, Grippotyphosa, and Pomona) is medically essential for any dog setting foot on NYC pavement.'
      ],
      warningBox: {
        title: 'NYC Sidewalk & Dog Run Quarantine Rule',
        text: 'Keep young puppies completely off public NYC sidewalks, curb gutters, and dog runs (such as Tompkins Square, Washington Square, or Central Park off-leash hours) until exactly 14 days after their final 16-week DHPP and Leptospirosis boosters. Carry your puppy outdoors or use indoor pee pads guided by our [puppy potty training schedule](/blogs/puppy-potty-training-schedule-akc-guide).'
      }
    },
    {
      id: 'urban-lifestyle-vaccines',
      heading: 'NYC Lifestyle Vaccines: Lyme Disease & Canine Infectious Respiratory Disease',
      intro:
        'New York pet lifestyles frequently include weekend trail escapes to upstate New York, coastal beach visits, and crowded indoor daycares.',
      paragraphs: [
        'Blacklegged deer ticks (*Ixodes scapularis*) carrying Lyme disease (*Borrelia burgdorferi*) are abundant not only in the Hudson Valley and Catskills but also in heavily wooded urban parks like Pelham Bay Park in the Bronx, Van Cortlandt Park, and the Staten Island Greenbelt. The canine Lyme vaccine provides an essential biological shield against chronic polyarthritis and fatal Lyme nephritis.',
        'For social city dogs attending indoor doggy daycares, boarding suites, or grooming salons, facilities mandate biannual Bordetella bronchiseptica (kennel cough) vaccination and bivalent Canine Influenza virus (CIV H3N2 and H3N8) boosters. Flu outbreaks frequently sweep Manhattan boarding kennels during winter holidays, requiring strict quarantine.'
      ],
      bulletPoints: [
        { label: 'Bordetella Intranasal Timing', text: 'Administer mucosal Bordetella at least 7 to 10 days before checking into NYC boarding to ensure local airway mucosal antibodies peak.' },
        { label: 'Canine Influenza Protocol', text: 'The CIV bivalent vaccine requires an initial dose followed by a mandatory booster 2 to 4 weeks later.' },
        { label: 'Feline High-Rise Syndrome', text: 'Window screens must be heavy-duty aluminum: indoor apartment cats stalking pigeons on high-rise sills suffer traumatic falls without reinforced guards; review indoor safety in our [senior cat care guide](/blogs/senior-cat-care-health-diet-comfort-guide).' }
      ]
    },
    {
      id: 'nyc-daycare-records-and-pethorizon',
      heading: 'Digitizing NYC Vaccine Records for Co-ops, Daycares & Sitters',
      intro:
        'NYC co-op boards and licensed pet care facilities will immediately reject admission without verified veterinary immunization paperwork.',
      paragraphs: [
        'Instead of scrambling to find paper receipts from your veterinary clinic during rush-hour daycare drop-off, PetHorizon’s Clinical Health Card stores your pet’s vaccine lot numbers, veterinary license stamps, rabies tag serials, and exact expiration dates. You can export a clean, compliant PDF certificate in one tap directly from your phone.',
        'Coordinate booster appointments and medication schedules across your family or room roommates to ensure zero lapses in city compliance; explore multi-caregiver coordination in our [dog walking schedule by age and breed](/blogs/dog-walking-schedule-by-age-breed-exercise-guide).'
      ],
      stepByStep: {
        title: 'NYC Pet Health Pass Setup Checklist',
        steps: [
          {
            number: 1,
            title: 'Complete 16-Week Core Booster Series',
            description: 'Ensure DHPP, Leptospirosis 4-way, Lyme, and Rabies boosters are certified by a licensed New York veterinarian.'
          },
          {
            number: 2,
            title: 'Register for NYC DOHMH Dog License',
            description: 'Submit your veterinary rabies certificate to the NYC Department of Health portal to receive your brass license tag.'
          },
          {
            number: 3,
            title: 'Upload Vaccine Proof into PetHorizon',
            description: 'Store lot numbers, clinic contact, and renewal dates in PetHorizon Clinical Health Card for instant 1-tap daycare pass export.'
          }
        ]
      },
      routineTip: {
        title: 'Store NYC Vaccine Certificates in PetHorizon',
        text: 'Keep DHPP, Rabies, and Leptospirosis booster reminders in PetHorizon so your NYC doggy daycare and building passes never expire.',
        actionLabel: 'Open Clinical Health Card'
      }
    }
  ]
};

