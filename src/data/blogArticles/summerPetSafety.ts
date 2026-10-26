import { FullBlogArticle } from './types';

export const summerPetSafetyArticle: FullBlogArticle = {
  slug: 'summer-pet-safety-heatstroke-prevention-hot-pavement-guide',
  readTime: '14 min read',
  overviewSummary:
    'Summer brings outdoor adventures, swimming, and longer evenings, but high ambient temperatures and humidity present acute, life-threatening risks to dogs and cats. Unlike humans who dissipate heat efficiently across millions of eccrine sweat glands, dogs can only sweat through tiny merocrine glands in their paw pads and must rely almost entirely on panting. When humidity exceeds 70% or ambient temperatures surpass 85°F (29°C), panting loses evaporative cooling efficiency, predisposing pets to rapid heatstroke, cellular necrosis, and disseminated intravascular coagulation (DIC). This veterinary guide details heatstroke emergency protocols, the 7-second pavement test, safe hydration guidelines, and water intoxication risks.',
  sections: [
    {
      id: 'heatstroke-pathophysiology-symptoms',
      heading: 'Canine Thermoregulation & Heatstroke: Recognizing the Clinical Cascade',
      intro:
        'Normal canine rectal temperature ranges from 100.5°F to 102.5°F (38.0°C to 39.2°C). When body temperature climbs above 104°F (40.0°C), cellular proteins begin to denature, and systemic organ failure can occur in under 30 minutes.',
      paragraphs: [
        'Early Warning Signs (Heat Exhaustion): Excessive rapid panting, thick ropy saliva, dark brick-red or purple gums, glassed-over unfocused eyes, and excessive seeking of shade.',
        'Critical Emergency Signs (True Heatstroke - 105°F+): Unsteady drunkenness/wobbling (ataxia), vomiting, diarrhea (often bloody), collapse, seizures, and loss of consciousness.',
        'High-Risk Demographics: Brachycephalic breeds (Bulldogs, Pugs, Boxers) are 2 to 3 times more likely to develop fatal heatstroke due to restricted upper airways. Senior pets, overweight animals, and dark-coated or thick double-coated breeds also face severe thermal vulnerability.'
      ],
      warningBox: {
        title: 'DO NOT Submerge an Overheated Dog in Ice Water',
        text: 'Pouring freezing ice water or submerging an overheated dog in ice causes peripheral vasoconstriction, trapping superheated blood deep inside internal organs and triggering violent shivering that actually raises internal core body temperature. Use cool tap water only!'
      },
      table: {
        headers: ['Body Temperature', 'Clinical State', 'Physiological Impact', 'Emergency Action'],
        rows: [
          ['100.5°F – 102.5°F', 'Normal Resting Range', 'Optimal enzyme function, normal cellular metabolism', 'None; standard active monitoring'],
          ['103.0°F – 104.5°F', 'Heat Exhaustion', 'Compensatory panting, vasodilation, elevated heart rate', 'Move to air conditioning, offer cool water, rest immediately'],
          ['105.0°F – 107.0°F', 'Severe Heatstroke (Emergency)', 'Cellular protein denaturation, cerebral edema, renal damage', 'Active cooling with cool wet towels; rush to vet ER immediately'],
          ['107.0°F+ (41.6°C+)', 'Critical Multiorgan Failure', 'Disseminated intravascular coagulation (DIC), coma, death', 'Critical ICU hospitalization, IV fluids, plasma transfusion']
        ]
      }
    },
    {
      id: 'emergency-first-aid-cooling',
      heading: 'Emergency Cooling Protocol: What to Do While En Route to the ER',
      intro:
        'If your dog displays signs of heatstroke, immediate first-aid intervention before and during transport can mean the difference between survival and fatal brain damage.',
      stepByStep: {
        title: 'The 4-Step Veterinary Emergency Cooling Protocol',
        steps: [
          { number: 1, title: 'Move to Cool Environment', description: 'Immediately carry (do not walk) the dog into an air-conditioned room or vehicle.' },
          { number: 2, title: 'Apply Cool Tap Water', description: 'Wet the paws, groins, armpits, and neck with cool (not ice-cold) tap water. Direct a fan over wet fur to maximize evaporative cooling.' },
          { number: 3, title: 'Offer Small Sips of Cool Water', description: 'Never force-feed water into an unconscious or vomiting dog’s mouth to prevent pulmonary aspiration.' },
          { number: 4, title: 'Stop Cooling at 103.5°F (39.7°C)', description: 'Stop active wetting once rectal temperature reaches 103.5°F to prevent hypothermic rebound shock.' }
        ]
      },
      routineTip: {
        title: 'Check Summer Walk Temperature Advisories in PetHorizon',
        text: 'Plan summer walks before 8:00 AM or after 8:00 PM. Log daily hydration and receive notifications when local temperatures and UV indexes exceed safe canine walking thresholds.',
        actionLabel: 'Schedule Safe Summer Walks in PetHorizon'
      }
    },
    {
      id: 'hot-pavement-and-water-intoxication',
      heading: 'Pavement Burns & The Hidden Danger of Water Intoxication (Hyponatremia)',
      intro:
        'Summer walks and lake fetch games conceal two hazards frequently missed by well-intentioned pet owners.',
      bulletPoints: [
        { label: 'Hot Asphalt & Paw Burns', text: 'When air temperature is 86°F (30°C), direct asphalt temperature climbs to 135°F (57°C)—hot enough to cause severe blister burns in under 60 seconds. Always use the 7-second bare-hand test.' },
        { label: 'Water Intoxication (Hyponatremia)', text: 'Dogs who bite water obsessively while playing in sprinklers, pools, or lakes ingest excessive fluids, diluting bloodstream sodium levels. Symptoms include vomiting, lethargy, dilated pupils, and seizures. Limit continuous water fetch to 10-minute bursts.' },
        { label: 'Blue-Green Algae (Cyanobacteria)', text: 'Never let dogs swim in stagnant summer ponds with pea-soup or blue-green scum. Cyanobacteria produce potent neurotoxins and hepatotoxins that cause fatal liver failure within hours.' }
      ]
    }
  ]
};
