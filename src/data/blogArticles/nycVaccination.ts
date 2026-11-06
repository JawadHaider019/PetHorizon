import { FullBlogArticle } from './types';

export const nycVaccinationArticle: FullBlogArticle = {
  slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
  readTime: '5 min read',
  overviewSummary:
    'Raising a puppy or kitten in New York City requires navigating high-density apartment buildings, shared elevators, public dog parks, and strict NYC Department of Health and Mental Hygiene (DOHMH) rabies mandates. Understand mandatory NYC Health Code Article 161 licensing laws, primary vs booster rabies immunity timelines, urban Leptospirosis risks from street runoff, and veterinary advice for young puppy outdoor socialization.',
  sections: [
    {
      id: 'nyc-health-code-mandates',
      heading: 'NYC Health Code Article 161: Legal Rabies Mandates & Dog Licensing',
      intro:
        'Under New York City Health Code Article 161 (§ 161.04) and New York State Public Health Law (§ 2141), rabies vaccination is legally mandatory for all dogs and cats residing in the five boroughs by 12 to 16 weeks of age.',
      paragraphs: [
        'For Manhattan, Brooklyn, Queens, Bronx, and Staten Island pet owners, residential co-op boards, condo associations, and rental properties routinely mandate verified veterinary rabies certificates and an active NYC DOHMH Dog License before approving occupancy. City licenses cost $8.50 annually for spayed or neutered dogs ($34 for intact dogs), and failure to license carries municipal fines.',
        'Understanding rabies immunity timelines is crucial under New York State regulations (10 NYCRR § 2.14). An animal receiving their very first (primary) rabies vaccination is not considered legally immunized until 28 days following administration. Conversely, revaccination (booster) creates an immediate protective anamnestic response, maintaining continuous legal status when administered on schedule.',
        'Beyond rabies, high-density residential living creates concentrated viral and bacterial exposure vectors. In apartment complexes where dozens of pets share corridors and elevators, maintaining core immunizations following our baseline [puppy and kitten vaccination schedule](/blogs/puppy-kitten-vaccination-schedule-booster-guide-worldwide) protects delicate developing immune systems.',
        'Keep 24/7 emergency clinic contacts accessible, including the Schwarzman Animal Medical Center (AMC) on Manhattan’s Upper East Side and BluePearl veterinary hospitals in Midtown, Downtown Brooklyn, and Queens. Plan first-year urban veterinary costs with our [monthly pet care budget guide](/blogs/monthly-pet-care-cost-vet-expense-budget-worldwide).'
      ],
      table: {
        headers: ['Age Window', 'NYC Puppy Protocol', 'NYC Kitten Protocol', 'Urban Exposure Context'],
        rows: [
          ['6 – 8 Weeks', 'DHPP #1 + Lifestyle risk assessment', 'FVRCP #1 + FeLV/FIV baseline testing', 'Apartment corridors & early breeder transit'],
          ['10 – 12 Weeks', 'DHPP #2 + Leptospirosis #1 + Lyme #1', 'FVRCP #2 + FeLV #1 (outdoor/multi-cat)', 'Street curb exposure & Hudson Valley ticks'],
          ['14 – 16 Weeks', 'DHPP #3 + Rabies (NYC Law) + Lepto #2 + Lyme #2', 'FVRCP #3 + Rabies (NYC Law) + FeLV #2', 'Mandatory for NYC DOHMH license & building leases'],
          ['12 Months', '1-Yr DHPP, Lepto 4-way, Lifestyle & 3-Yr Rabies', '1-Yr FVRCP, Rabies Booster & FeLV audit', 'Required by NYC daycares & boarding kennels']
        ]
      }
    },
    {
      id: 'leptospirosis-and-sidewalk-hazards',
      heading: 'Urban Leptospirosis Risks & Puppy Outdoor Socialization Timing',
      intro:
        'Leptospirosis is a serious bacterial infection caused by *Leptospira interrogans* serovars that can colonize urban environments across New York City.',
      paragraphs: [
        'Urban brown rats (*Rattus norvegicus*) shed leptospires through their urine into standing street rainwater, subway ventilation grates, and park puddles. When an unvaccinated puppy steps into contaminated standing water or licks street puddles, bacteria can enter through mucous membranes or minor abrasions, risking acute kidney and hepatic damage. Because leptospirosis is zoonotic (transmissible to humans), veterinary hospitals strongly recommend the 4-serovar canine leptospirosis vaccine for dogs walking city sidewalks.',
        'A frequent question from new NYC pet parents is when it is clinically safe to walk puppies on city pavement. While city regulations do not establish a statutory sidewalk quarantine, the American Animal Hospital Association (AAHA) and veterinary immunologists advise that puppies achieve optimal protective antibody titers roughly 10 to 14 days after completing their final 16-week core booster series (DHPP and Leptospirosis).'
      ],
      warningBox: {
        title: 'Veterinary Advisory: Balancing Socialization & Infection Risk',
        text: 'During the critical 8-to-16-week behavioral socialization window, veterinarians recommend carrying your puppy or using clean pet strollers for outdoor exposure, avoiding communal dog runs, curb puddles, and heavily trafficked sidewalks until 10–14 days after their final puppy series. Review house-training strategies in our [puppy potty training schedule](/blogs/puppy-potty-training-schedule-akc-guide).'
      }
    },
    {
      id: 'urban-lifestyle-vaccines',
      heading: 'Lifestyle Vaccines & NYC Boarding and Daycare Admission Policies',
      intro:
        'While rabies is the sole municipal legal mandate under the NYC Health Code, private boarding kennels, daycares, and training facilities enforce their own strict health entry requirements.',
      paragraphs: [
        'NYC Health Code § 161.15 requires boarding, grooming, and training facilities to keep proof of current veterinary rabies vaccination on file for all canine clients. To prevent outbreaks of infectious respiratory disease in communal playrooms, most NYC facilities independently require proof of Bordetella bronchiseptica (kennel cough), core DHPP, and frequently bivalent Canine Influenza (CIV H3N2 and H3N8) vaccinations.',
        'Lyme disease (*Borrelia burgdorferi*) transmitted by blacklegged deer ticks (*Ixodes scapularis*) is prevalent not only in the Hudson Valley and Long Island, but also in large wooded parks such as Pelham Bay Park, Van Cortlandt Park, and the Staten Island Greenbelt. Consult your veterinarian regarding Lyme vaccination based on your weekend travel habits.'
      ],
      bulletPoints: [
        { label: 'Facility Entry vs City Law', text: 'Rabies is legally mandated by city health code; Bordetella, DHPP, and Canine Influenza are private facility policies designed to prevent daycare transmission.' },
        { label: 'Advance Timing for Daycare', text: 'Administer mucosal or injectable respiratory vaccines at least 7 to 14 days prior to boarding check-in to ensure adequate immune response.' },
        { label: 'Apartment Feline Safety', text: 'Ensure window screens are securely latched: high-rise falls ("High-Rise Syndrome") pose severe trauma risks for indoor cats; review home safety in our [senior cat care guide](/blogs/senior-cat-care-health-diet-comfort-guide).' }
      ]
    },
    {
      id: 'nyc-daycare-records-and-pethorizon',
      heading: 'Digitizing NYC Vaccine Records for Co-ops, Daycares & Sitters',
      intro:
        'Navigating NYC co-op board approvals, municipal licensing, and daycare check-ins requires prompt access to verified veterinary documentation.',
      paragraphs: [
        'Rather than searching through physical veterinary paperwork during busy commutes, PetHorizon’s Clinical Health Card organizes your pet’s vaccine lot numbers, veterinary practice stamps, rabies certificate details, and expiration dates. You can export a compliant PDF record with a single tap.',
        'Coordinate booster reminders and medication schedules across your family or flatmates to ensure continuous protection; explore daily routine coordination in our [dog walking schedule by age and breed](/blogs/dog-walking-schedule-by-age-breed-exercise-guide).'
      ],
      stepByStep: {
        title: 'NYC Pet Health Pass Setup Checklist',
        steps: [
          {
            number: 1,
            title: 'Complete Core Puppy/Kitten Immunizations',
            description: 'Receive veterinarian-administered core boosters and rabies vaccination in accordance with NY State and NYC health regulations.'
          },
          {
            number: 2,
            title: 'Obtain Official NYC DOHMH Dog License',
            description: 'Submit veterinary rabies proof through the NYC Department of Health online licensing portal to receive your municipal tag.'
          },
          {
            number: 3,
            title: 'Save Digital Records in PetHorizon',
            description: 'Log vaccination dates and expiration alerts in PetHorizon Clinical Health Card for instant co-op lease and daycare verification.'
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
