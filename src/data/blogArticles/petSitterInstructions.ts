import { FullBlogArticle } from './types';

export const petSitterInstructionsArticle: FullBlogArticle = {
  slug: 'pet-sitter-instructions-handover-checklist-template',
  readTime: '16 min read',
  overviewSummary:
    'Entrusting your dog or cat to a professional pet sitter, friend, or relative while traveling requires far more than casual text messages or verbal reminders. Misunderstandings regarding precise gram food portions, chronic medication schedules, fear triggers (thunderstorms, door-darting), and emergency veterinary spending authorizations account for the vast majority of preventable vacation emergencies. This comprehensive guide provides a complete 5-part caregiver handover checklist, a legally binding veterinary emergency treatment proxy form, feline- and canine-specific safety protocols, and digital QR synchronization.',
  sections: [
    {
      id: 'five-pillars-handover-checklist',
      heading: 'The 5 Essential Pillars of a Professional Caregiver Handover',
      intro:
        'A comprehensive pet sitter document prevents guesswork by providing clear, operational answers across five non-negotiable domains of daily care:',
      paragraphs: [
        '1. Nutritional Precision & Hydration Protocol: Document the exact commercial food brand, formula, and daily gram measurement (or level measuring cup with a photograph). Specify meal schedules, where food and treats are stored, and strict treat limits. For cats and dogs prone to bloat or kidney issues, detail water fountain cleaning schedules and whether kibble should be soaked in warm water before serving.',
        '2. Medication Schedule & Refusal Contingencies: List every prescription medication, exact milligram strength, frequency (e.g., every 12 hours with food), and the preferred delivery method (hidden in a pill pocket, mixed into pureed wet food, or administered orally via syringe). Specify exact missed-dose protocols and provide your prescribing veterinarian’s contact details.',
        '3. Elimination, Exercise & Behavioral Triggers: Detail bathroom outing schedules, favorite walking routes, and specific environmental triggers (e.g., "reactive to scooters—cross the street," "terrified of thunder—place Thundershirt in bedroom"). Note off-limit furniture and door-darting habits.',
        '4. Household Logistics & Security Systems: Provide Wi-Fi credentials, home security alarm arm/disarm codes, locations of breaker boxes and water shut-off valves, trash collection days, and names and numbers of trusted local neighbors who possess spare physical house keys.',
        '5. Emergency Veterinary Proxy Authorization: The single most critical document. If your pet suffers gastric bloat or a traumatic laceration while you are on a transatlantic flight, emergency animal hospitals will not initiate expensive surgery without pre-authorized financial payment guarantees.'
      ],
      table: {
        headers: ['Care Domain', 'Essential Documentation Required', 'Common Costly Oversight', 'Preventative Action'],
        rows: [
          ['Daily Nutrition', 'Exact gram weight, meal times, treat restrictions', 'Assuming "1 scoop" is standardized (often 30–50% overfed)', 'Provide digital kitchen scale with target gram weight'],
          ['Prescription Meds', 'Drug name, mg strength, timing, pill pocket technique', 'Sitter leaving pills out or skipping when pet spits it out', 'Demonstrate pill administration during trial run'],
          ['Behavior & Triggers', 'Leash reactivity, fear of thunder, door darting', 'Sitter dropping leash when dog lunges at skateboard', 'Enforce strict 6-foot fixed leash; ban retractable leashes'],
          ['Emergency Vet Proxy', 'Primary clinic, 24/7 ER hospital, signed financial cap', 'Clinic refusing surgery while awaiting overseas card approval', 'Leave signed proxy letter authorizing care up to pre-set limit']
        ]
      }
    },
    {
      id: 'veterinary-proxy-letter-template',
      heading: 'Veterinary Emergency Treatment Proxy Form Template',
      intro:
        'Print and sign this formal legal authorization form. Leave a physical copy on your kitchen counter and email a digital copy to both your primary veterinary clinic and your nearest 24/7 emergency veterinary hospital before your trip:',
      paragraphs: [
        'PET INFORMATION: Pet Name: [Name] | Species: [Canine / Feline] | Breed: [Breed] | Age: [Age] | Sex: [Spayed/Neutered] | Microchip Number: [Chip ID] | Microchip Company: [Registry Name] | Pet Insurance Provider: [Company] | Policy #: [Number].',
        'OWNER INFORMATION: Full Legal Name: [Your Name] | Mobile Phone (with international roaming): [+1-XXX-XXX-XXXX] | Email: [Email] | Travel Dates: [Start Date] to [End Date] | Hotel / Destination: [Details].',
        'AUTHORIZED CAREGIVER: Sitter Full Name: [Sitter Name] | Sitter Mobile: [Sitter Phone] | Sitter Government ID: [ID Details].',
        'MEDICAL AUTHORIZATION & FINANCIAL GUARANTEE: "I, [Your Name], hereby authorize [Sitter Name] to act as my designated proxy in seeking and approving medical treatment, diagnostic tests, anesthesia, and surgical procedures for my pet, [Pet Name], in the event of an emergency during my absence. I authorize veterinary treatment up to a financial ceiling of $[e.g., $2,500.00 USD] without prior telephone consultation. I accept full financial responsibility for all veterinary charges incurred under this agreement upon my return. Signed: ___________________________ Date: ___________________"'
      ],
      warningBox: {
        title: 'Call Your Vet Clinic Before Departure',
        text: 'Phone your regular veterinary clinic and 24/7 ER hospital before you leave. Have them place a note in your pet’s digital chart stating: "[Sitter Name] is authorized to bring in [Pet Name] and approve medical treatment up to $[Limit] while owner is out of town."'
      }
    },
    {
      id: 'species-specific-instructions',
      heading: 'Species-Specific Sitter Instructions: Cats vs. Dogs',
      intro:
        'Feline and canine caretaking present fundamentally different risks that your sitter must actively monitor:',
      paragraphs: [
        'Feline-Specific Rules: Sitter must physically lay eyes on every cat at every visit. A cat that hides under a bed for 48 hours may be suffering from acute urethral blockage or dehydration. Sitter must inspect the litter box daily: absence of urine clumps in a male cat is a life-threatening red alert requiring immediate ER transit.',
        'Canine-Specific Rules: Enforce a strict "double-door" airlock procedure: the sitter must ensure the front exterior storm door is latched before opening the main foyer door to prevent door-darting. Ban retractable flexi-leashes completely: thin nylon cords snap under sudden lunges and pull out of sitters’ hands.',
        'Extreme Weather Rules: Outline maximum outdoor walking limits during summer heatwaves (7-second asphalt test) or freezing winter weather (wipe sidewalk de-icing salts off paws immediately upon re-entering the home).'
      ],
      bulletPoints: [
        { label: 'Physical Sighting Mandate', text: 'Never allow a cat sitter to assume a hiding cat is fine just because food disappeared (multi-cat homes).' },
        { label: 'No Off-Leash Walks', text: 'Instruct sitters that your dog must remain on a 6-foot fixed leash at all times outside fenced yards; zero off-leash dog park visits.' },
        { label: 'Emergency Evacuation', text: 'Show the sitter where pet carriers, travel harnesses, and the 72-hour pet first aid kit are stored in case of fire or storm.' }
      ],
      routineTip: {
        title: 'Generate an Instant Sitter QR Code in PetHorizon',
        text: 'Skip handwriting pages of notes. In PetHorizon, generate a temporary Caregiver QR code for your pet sitter. Your sitter gets instant smartphone access to real-time feeding checklists, medication alarms, vaccine passports, and 1-tap ER vet dialing.',
        actionLabel: 'Generate Pet Sitter QR Code in PetHorizon'
      }
    }
  ]
};
