import { FullBlogArticle } from './types';

export const nycVaccinationArticle: FullBlogArticle = {
  slug: 'puppy-kitten-vaccination-schedule-booster-guide-new-york',
  readTime: '5 min read',
  overviewSummary:
    'Raising a puppy or kitten in New York City requires navigating high-density apartment buildings, shared elevators, and statutory requirements under the New York City Health Code. Learn New York Public Health Law § 2140 rabies immunization definitions, NYC Health Code § 161.15 mandatory vaccination requirements for boarding, grooming, and training facilities, urban Leptospirosis risks from street runoff, and veterinary guidance for safe puppy socialization.',
  sections: [
    {
      id: 'nyc-health-code-mandates',
      heading: 'New York State Public Health Law & NYC Health Code Rabies Mandates',
      intro:
        'Under New York State Public Health Law § 2141 and New York City Health Code Article 161 (§ 161.04), rabies vaccination is legally mandatory for all dogs and cats residing in the five boroughs by four months of age.',
      paragraphs: [
        'New York State Public Health Law § 2140(1) establishes the statutory definition of active rabies immunization: active immunization begins 14 days after administration of the primary vaccination by a licensed veterinarian, or immediately upon revaccination (booster). Understanding this legal timeline is vital for residential lease approvals and municipal compliance; consult the [New York State Senate Public Health Law § 2140](https://www.nysenate.gov/legislation/laws/PBH/2140) and [Public Health Law § 2141](https://www.nysenate.gov/legislation/laws/PBH/2141).',
        'In Manhattan, Brooklyn, Queens, Bronx, and Staten Island, co-op boards, condo associations, and landlords routinely require verified rabies vaccination certificates and an active NYC Department of Health and Mental Hygiene (DOHMH) Dog License. City dog licenses cost $8.50 annually for spayed or neutered dogs ($34 for intact dogs), and failure to license carries municipal fines; review official guidelines via the [NYC DOHMH Rabies Portal](https://www.nyc.gov/site/doh/health/health-topics/rabies.page).',
        'In high-density apartment complexes where dozens of pets share corridors and elevators, maintaining core immunizations following our baseline [puppy and kitten vaccination schedule](/blogs/puppy-kitten-vaccination-schedule-booster-guide-worldwide) protects developing immune systems against urban viral transmission.',
        'Keep 24/7 emergency clinic contacts accessible, including the Schwarzman Animal Medical Center (AMC) on Manhattan’s Upper East Side and BluePearl referral hospitals in Midtown, Downtown Brooklyn, and Queens. Plan first-year urban veterinary expenses with our [monthly pet care budget guide](/blogs/monthly-pet-care-cost-vet-expense-budget-worldwide).'
      ],
      table: {
        headers: ['Age Window', 'NYC Puppy Protocol', 'NYC Kitten Protocol', 'Urban Exposure Context'],
        rows: [
          ['6 – 8 Weeks', 'DHPP #1 + Lifestyle risk assessment', 'FVRCP #1 + FeLV/FIV baseline testing', 'Apartment corridors & early breeder transit'],
          ['10 – 12 Weeks', 'DHPP #2 + Leptospirosis #1 + Lyme #1', 'FVRCP #2 + FeLV #1 (outdoor/multi-cat)', 'Street curb exposure & Hudson Valley ticks'],
          ['14 – 16 Weeks', 'DHPP #3 + Rabies (NYS Law) + Lepto #2 + Lyme #2', 'FVRCP #3 + Rabies (NYS Law) + FeLV #2', 'Mandatory for NYC DOHMH license & building leases'],
          ['12 Months', '1-Yr DHPP, Lepto 4-way, Lifestyle & 3-Yr Rabies', '1-Yr FVRCP, Rabies Booster & FeLV audit', 'Required by NYC daycares & boarding kennels']
        ]
      }
    },
    {
      id: 'leptospirosis-and-sidewalk-hazards',
      heading: 'Urban Leptospirosis Risks & Evidence-Based Puppy Socialization',
      intro:
        'Leptospirosis is a serious bacterial disease caused by *Leptospira interrogans* serovars that colonize standing water and soil across New York City.',
      paragraphs: [
        'Urban brown rats (*Rattus norvegicus*) shed leptospires through their urine into standing street rainwater, subway ventilation grates, tree pits, and park puddles. When an unvaccinated puppy steps into contaminated runoff or drinks street water, bacteria enter through mucous membranes or minor abrasions, risking acute renal and hepatic failure. Because leptospirosis is zoonotic (transmissible to humans), veterinary hospitals across the five boroughs strongly recommend the 4-serovar canine leptospirosis vaccine for dogs walking city sidewalks.',
        'Veterinary consensus (including WSAVA and AAHA guidance) emphasizes balancing infectious disease protection against essential early behavioral socialization (which peaks between 8 and 14–16 weeks). Maternal antibodies decline progressively between 8 and 16 weeks, creating variable individual windows of vulnerability. Rather than total indoor confinement, veterinarians recommend structured socialization in sanitary, controlled private indoor environments with healthy, fully vaccinated adult dogs, while strictly avoiding high-contamination communal dog runs, stagnant curb puddles, and street runoff based on local disease risks and individualized veterinary advice.'
      ],
      warningBox: {
        title: 'Veterinary Advisory: Balancing Socialization & Infection Risk',
        text: 'During early puppyhood, veterinarians advise carrying your puppy or using clean pet strollers for outdoor sensory exposure, while reserving off-leash park play for fully vaccinated adult dogs. Explore house-training strategies in our [puppy potty training schedule](/blogs/puppy-potty-training-schedule-akc-guide).'
      }
    },
    {
      id: 'urban-lifestyle-vaccines',
      heading: 'NYC Health Code § 161.15: Boarding, Grooming & Training Mandates',
      intro:
        'Under NYC Health Code § 161.15(e), animal-handling establishments operating in New York City must comply with explicit municipal vaccination documentation requirements.',
      paragraphs: [
        'Under the [NYC Health Code Article 161 § 161.15](https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-47139), no dog shall be accepted for boarding, training, or grooming without verified proof of current rabies vaccination. For boarding and training establishments, operators must additionally obtain proof that the dog is currently vaccinated against Distemper, Adenovirus (Hepatitis), Parainfluenza, Parvovirus (DHPP), and Bordetella bronchiseptica (administered according to manufacturer instructions).',
        'For grooming-only facilities, the health code provides a specific accommodation: an individual providing grooming services only is not required to maintain proof of vaccinations other than rabies, provided that the dog owner signs a written statement affirming that the dog has received all other vaccinations required under § 161.15(e). Acceptable proof of vaccination includes an official rabies certificate, a veterinary bill or invoice detailing the vaccines given, or a veterinary visit summary. Facilities must retain these records on premises for at least one year. A dog is legally exempt only if the owner presents a written statement from a licensed veterinarian certifying that vaccination is medically contraindicated and the animal shows no signs of infectious disease.',
        'Canine Influenza Virus (CIV H3N2/H3N8) is not enumerated in NYC Health Code § 161.15(e) and is not a municipal statutory mandate. However, individual boarding suites and daycares frequently require CIV immunization under their own facility policies to prevent kennel cough outbreaks. Consult your veterinarian regarding Lyme vaccination if your dog visits wooded spaces such as Pelham Bay Park, Van Cortlandt Park, or upstate trails.'
      ],
      bulletPoints: [
        { label: 'Rabies vs Boarding Vaccines', text: 'Proof of rabies vaccination is mandatory for boarding, training, and grooming; boarding and training facilities additionally require proof of DHPP and Bordetella.' },
        { label: 'Grooming-Only Written Statement', text: 'Groomers are not required to hold non-rabies records if the owner provides a signed written statement affirming all other required vaccines have been administered.' },
        { label: 'Record Retention & Exemptions', text: 'Facilities must keep verified records on-site for at least one year; written medical exemptions from a licensed veterinarian are recognized.' }
      ]
    },
    {
      id: 'nyc-daycare-records-and-pethorizon',
      heading: 'Digitizing NYC Vaccine Records for Co-ops, Daycares & Sitters',
      intro:
        'Navigating NYC co-op board approvals, municipal licensing, and facility check-ins requires prompt access to verified veterinary documentation.',
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
