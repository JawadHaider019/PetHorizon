import { FullBlogArticle } from './types';

export const petMicrochipGuideArticle: FullBlogArticle = {
  slug: 'pet-microchip-registration-lookup-guide',
  readTime: '5 min read',
  overviewSummary:
    'A pet microchip is a grain-of-rice-sized passive RFID transponder implanted subcutaneously between the shoulder blades, yet veterinary shelter studies reveal that nearly 40% of microchipped lost pets have outdated, incorrect, or completely unregistered contact files. Learn ISO 11784/11785 15-digit standards, how national lookup registries operate across the US, UK, Canada, and Australia, and why recording your chip ID in a digital health card prevents permanent loss.',
  sections: [
    {
      id: 'how-microchip-registries-work',
      heading: 'How Microchips Work: Passive RFID vs Active GPS Trackers',
      intro:
        'A pervasive misconception among pet owners is that a microchip functions like a miniature GPS tracker that can be tracked on a smartphone map.',
      paragraphs: [
        'A microchip contains no internal battery, no GPS receiver, and no moving parts. Instead, it consists of an integrated circuit and ferrite coil encased in biocompatible soda lime or silicate glass. The chip remains inert until an RFID scanner passes within 2 to 3 inches of your pet’s skin. The scanner’s electromagnetic field energizes the coil, causing the chip to transmit its unique alphanumeric identification code back to the reader.',
        'Because microchips cannot transmit live coordinates, they serve as a permanent legal identity document rather than a real-time recovery device. For active real-time geofencing and lost-pet tracking in open terrain, explore our comparative evaluation in our [best pet GPS trackers and health wearables review](/blogs/best-pet-gps-trackers-health-wearables-review-worldwide).',
        'Crucially, having a veterinarian implant a microchip does not automatically register your home address and phone number in a national database. The vet provides an identification number, but the legal responsibility to complete database registration rests entirely with the pet owner.'
      ],
      warningBox: {
        title: 'The 40% Dead-End Registry Epidemic',
        text: 'A landmark study published in the Journal of the American Veterinary Medical Association (JAVMA) found that in nearly 40% of cases where a microchipped lost pet was brought to an animal shelter, the microchip was never registered with the owner’s contact details, or the phone number on file had been disconnected.'
      }
    },
    {
      id: 'global-microchip-standards-matrix',
      heading: 'Global Microchip Standards & Scanner Frequencies (ISO 11784/11785)',
      intro:
        'Not all microchips operate on the same electromagnetic frequency, which historically led to lost pets slipping through shelters equipped with incompatible scanners.',
      paragraphs: [
        'Today, the international veterinary standard is ISO 11784/11785, which operates on the 134.2 kHz radio frequency and encodes an unalterable 15-digit numeric sequence. Most modern animal shelters and veterinary clinics in North America, Europe, and Australasia utilize "forward-and-backward-reading" universal scanners capable of detecting 125 kHz, 128 kHz, and 134.2 kHz frequencies.',
        'If your pet carries an older 9-digit or 10-digit non-ISO chip and you plan to travel overseas, an upgrade to a 15-digit ISO chip is mandatory for border clearance.'
      ],
      table: {
        headers: ['Microchip Standard', 'Digit Length & Frequency', 'Typical Manufacturers', 'Global & Travel Compatibility'],
        rows: [
          ['ISO 11784/11785 (FDX-B)', '15 Digits (134.2 kHz)', 'HomeAgain, PetLink, Datamars, 24PetWatch', 'Universal international standard; mandatory for US, UK, EU, Canada & AU'],
          ['Legacy FECAVA (FDX-A)', '10 Digits (128 kHz / 125 kHz)', 'Trovan, Avid Euro', 'Read by modern universal scanners; non-compliant for European entry'],
          ['Legacy AVID Encrypted', '9 Digits (125 kHz)', 'AVID FriendChip (US domestic)', 'Requires specialized 125 kHz scanner; obsolete for international transit']
        ]
      }
    },
    {
      id: 'national-registries-by-country',
      heading: 'National Lookup Registries: US, UK, Canada & Australia Directories',
      intro:
        'When a shelter scans a 15-digit code, staff must query national and regional databases to retrieve the owner’s name and phone number.',
      paragraphs: [
        'United States Directory: In the US, shelters utilize the American Animal Hospital Association (AAHA) Universal Pet Microchip Lookup tool (`petmicrochiplookup.org`). This master directory does not store private personal data; rather, it queries participating registries (AKC Reunite, HomeAgain, 24PetWatch, PetLink, Michelson Found Animals) and reveals which registry maintains the active file and when it was last updated.',
        'United Kingdom Mandates: Under English law, all dogs must be microchipped by 8 weeks of age, and compulsory cat microchipping regulations mandate cat chipping by 20 weeks under penalty of a £500 fine. Registrations must be maintained on Defra-compliant databases such as Petlog, Identibase, or Animal Tracker.',
        'Canada: In Canada, microchip registrations are handled through Canadian Kennel Club (CKC) registries, EIDAP, and provincial humane societies. Verify compatibility when moving between provinces.',
        'Australia: Australian state legislation mandates microchipping prior to sale or transfer. New South Wales owners must maintain up-to-date records on the NSW Pet Registry, while Victoria and Queensland utilize Central Animal Records (CAR) and the Australasian Animal Registry (AAR).'
      ],
      bulletPoints: [
        { label: 'Annual Scan Checkup', text: 'Ask your veterinary team to scan your pet’s microchip during every annual wellness exam to verify the transponder has not migrated down the shoulder blade.' },
        { label: 'Moving & Address Updates', text: 'Set a calendar reminder whenever you move or switch cellular carriers to update your active registry contact profile within 48 hours.' },
        { label: 'Secondary Emergency Contact', text: 'Always designate an out-of-area relative or trusted veterinarian as a secondary contact in case local disasters disrupt cell towers.' }
      ]
    },
    {
      id: 'international-travel-and-digital-storage',
      heading: 'International Travel Import Rules: Microchip Timing by Destination',
      intro:
        'For pet owners traveling internationally, biosecurity import rules demand strict attention to the chronological order of microchipping and rabies immunization.',
      paragraphs: [
        'Import protocols vary substantially across destinations, species, and travel purposes, so pet owners should never assume universal rules. For travel to Great Britain, UK Defra requires an ISO 11784/11785 transponder implanted on or before the date of rabies vaccination. For the European Union, under the Animal Health Law framework and Commission Delegated Regulation (EU) 2026/131 (applicable from 22 April 2026 for non-commercial movements of pet animals, alongside transitional provisions), dogs, cats, and ferrets traveling non-commercially must have an ISO transponder implanted prior to or on the date of rabies vaccination; commercial movements follow separate certification under Regulation (EU) 2016/429.',
        'In Australia, the Department of Agriculture, Fisheries and Forestry (DAFF) categorizes imports by approved country group: Group 1 (rabies-absent nations like New Zealand) requires identity verification without rabies testing, while Group 3 (approved nations like the US, Canada, and UK) requires an ISO chip verified prior to rabies vaccination and before the mandatory RNAT blood titre test, followed by post-entry quarantine. In the United States, CDC rules (effective August 2024) mandate an ISO-compatible microchip prior to travel for all entering dogs, while cats have no federal microchip mandate. In Canada, the CFIA requires rabies vaccination certificates for personal pet dogs and cats over 3 months, while microchips and import permits are specifically mandatory for commercial imports (breeding, resale, or adoption). Always verify route-specific rules via official government agencies (such as UK Defra, EU Member State authorities, Australian DAFF, US CDC, and Canadian CFIA) in our [pet travel checklist and regulations guide](/blogs/pet-travel-checklist-flying-car-trips-vet-records).',
        'In an emergency evacuation or lost pet alert, few owners can produce paper veterinary registration documents on demand. Storing your pet’s verified 15-digit microchip number, manufacturer name, registry URL, and clinic contact inside PetHorizon’s Clinical Health Card ensures instantaneous access and one-tap PDF export.'
      ],
      stepByStep: {
        title: 'Step-by-Step Microchip Verification Protocol',
        steps: [
          {
            number: 1,
            title: 'Locate Your Pet’s 15-Digit Number',
            description: 'Check adoption paperwork, veterinary invoices, or ask your vet clinic to scan your pet’s shoulders during their next visit.'
          },
          {
            number: 2,
            title: 'Run a Search on the Universal Lookup Tool',
            description: 'Navigate to petmicrochiplookup.org (US) or your country’s official portal to see which registry holds the active record.'
          },
          {
            number: 3,
            title: 'Log In & Verify Primary/Secondary Phone Numbers',
            description: 'Confirm your current mobile phone, email address, and an alternate emergency contact are fully up to date.'
          },
          {
            number: 4,
            title: 'Vault the Record Digitally in PetHorizon',
            description: 'Save the 15-digit code in PetHorizon so you can generate an instant proof-of-ownership pass anytime, anywhere.'
          }
        ]
      },
      routineTip: {
        title: 'Vault Your Pet’s Microchip Passport in PetHorizon',
        text: 'Save your pet’s 15-digit microchip code, vaccine lot numbers, and registry contacts in PetHorizon for 1-tap emergency export.',
        actionLabel: 'Save Microchip in PetHorizon'
      }
    }
  ]
};

