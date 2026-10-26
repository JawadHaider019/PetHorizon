import { FullBlogArticle } from './types';

export const emergencyVetArticle: FullBlogArticle = {
  slug: 'emergency-vet-symptoms-red-flags-petmd',
  overviewSummary:
    'Knowing how to differentiate urgent medical red flags from non-critical illness can save your pet’s life. Review this triage checklist to determine when an immediate visit to the 24-hour veterinary emergency room is non-negotiable.',
  sections: [
    {
      id: 'red-flags-triage',
      heading: 'The 5 Non-Negotiable Veterinary ER Red Flags',
      intro:
        'If your pet exhibits any of the following clinical signs, transport them to the nearest emergency clinic immediately:',
      bulletPoints: [
        {
          label: '1. GDV Bloat (Gastric Dilatation-Volvulus)',
          text: 'Unproductive retching, pacing, tight distended abdomen, and heavy salivation in large or deep-chested dogs. Requires emergency surgical intervention within hours.'
        },
        {
          label: '2. Male Cat Urinary Blockage',
          text: 'Straining in the litter box, crying out in pain, and licking genitals without producing urine. Urethral obstruction leads to potassium buildup and fatal cardiac arrest within 24 to 48 hours.'
        },
        {
          label: '3. Dyspnea (Respiratory Distress)',
          text: 'Open-mouth breathing in cats, blue/purple/pale tongue, exaggerated abdominal heaving, or neck extended forward to breathe.'
        },
        {
          label: '4. Sudden Hind-Limb Paralysis',
          text: 'Sudden weakness or dragged hind legs (common in aortic thromboembolism / saddle thrombus in cats or IVDD in chondrodystrophic dog breeds).'
        },
        {
          label: '5. Seizures Lasting >3 Minutes or Cluster Seizures',
          text: 'Status epilepticus causes brain hyperthermia and permanent neurological trauma without immediate anticonvulsants.'
        }
      ]
    },
    {
      id: 'emergency-prep-tips',
      heading: 'Safe Emergency Transport Protocol',
      intro:
        'Handling a distressed or injured pet safely prevents accidental bites and minimizes additional trauma during transit:',
      bulletPoints: [
        {
          label: 'Use a Firm Surface as a Stretcher',
          text: 'For large dogs with spinal trauma or bloat, slide a firm blanket or flat board underneath rather than lifting by the abdomen.'
        },
        {
          label: 'Call the Clinic En Route',
          text: 'Phoning 10 minutes ahead allows veterinary staff to clear a triage bay, warm up oxygen cages, and set up intravenous catheter supplies before your car pulls in.'
        }
      ]
    }
  ]
};

export const heartwormArticle: FullBlogArticle = {
  slug: 'flea-tick-heartworm-prevention-ahs-protocol',
  overviewSummary:
    'Heartworm disease is transmitted by mosquitoes and causes irreversible vascular and cardiopulmonary damage. Learn why monthly preventative medication is essential year-round, even for indoor pets.',
  sections: [
    {
      id: 'transmission-risks',
      heading: 'Why Prevention Must Continue 12 Months a Year',
      intro:
        'Mosquitoes easily infiltrate residential homes, and microclimates (such as heated urban basements and crawlspaces) allow vector survival through winter months.',
      bulletPoints: [
        {
          label: 'Indoor Pets Are At High Risk',
          text: 'Studies reveal over 25% of heartworm-positive cats are classified as strictly indoor pets.'
        },
        {
          label: 'The Lifecycle Window',
          text: 'Monthly preventatives work retroactively, killing microfilariae transmitted in the preceding 30 days. Skipping one month leaves a dangerous gap for adult worm maturation.'
        }
      ]
    },
    {
      id: 'missed-dose',
      heading: 'Protocol If You Miss a Preventative Dose',
      intro:
        'If you forget your pet’s monthly chewable or topical dose, follow this veterinary protocol:',
      bulletPoints: [
        {
          label: 'Missed by Less Than 14 Days',
          text: 'Administer the preventative immediately and adjust your recurring schedule to the new date.'
        },
        {
          label: 'Missed by More Than 30 Days',
          text: 'Administer the dose immediately, but consult your vet for an antigen and microfilariae blood test 6 months later, as early-stage worms cannot be detected immediately.'
        }
      ]
    }
  ]
};

export const petCaloriesArticle: FullBlogArticle = {
  slug: 'pet-calorie-calculator-feeding-guide-apop',
  overviewSummary:
    'More than 56% of dogs and 60% of cats are overweight, which shortens median lifespan by over 2.5 years and accelerates arthritis. Calculate your pet’s exact daily Resting Energy Requirements (RER) using clinical veterinary formulas.',
  sections: [
    {
      id: 'rer-formula',
      heading: 'How to Calculate Your Pet’s Resting Energy Requirement',
      intro:
        'Veterinary nutritionists calculate base daily energy expenditure using the exponential formula below:',
      bulletPoints: [
        {
          label: 'The Standard RER Equation',
          text: 'RER (kcal/day) = 70 × (Body Weight in kg)^0.75. For an adult pet between 2 kg and 20 kg, an accurate linear approximation is (30 × kg) + 70.'
        },
        {
          label: 'Activity Multipliers',
          text: 'Neutered adult dogs typically require 1.4 × RER; active working dogs require 2.0 to 3.0 × RER; senior or weight-loss pets require 1.0 to 1.2 × RER.'
        }
      ]
    },
    {
      id: 'treat-rules',
      heading: 'The 10% Treat Boundary & Food Scale Precision',
      intro:
        'Measuring dog food with standard volume cups introduces an error margin of up to 25% compared to kitchen scales.',
      bulletPoints: [
        {
          label: 'The 10% Caloric Cap',
          text: 'Treats, chews, and table scraps must never exceed 10% of total daily caloric intake to prevent nutritional dilution and obesity.'
        },
        {
          label: 'Weigh Food in Grams',
          text: 'Check the back of your pet food bag for kcal per cup or gram. Weighing kibble on a digital scale ensures exact portion control.'
        }
      ]
    }
  ]
};
