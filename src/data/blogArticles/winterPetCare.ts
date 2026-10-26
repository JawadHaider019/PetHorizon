import { FullBlogArticle } from './types';

export const winterPetCareArticle: FullBlogArticle = {
  slug: 'winter-pet-care-cold-weather-paw-safety-guide',
  readTime: '14 min read',
  overviewSummary:
    'Freezing temperatures, icy sidewalks, toxic chemical de-icers, and antifreeze spills make winter a hazardous season for companion animals. While thick-coated northern breeds (Huskies, Malamutes, Newfoundlands) are genetically insulated for sub-zero weather, small, short-coated, senior, or lean breeds (Whippets, Greyhounds, Chihuahuas) can develop hypothermia and frostbite in temperatures as mild as 32°F (0°C). This veterinary guide breaks down ambient temperature thresholds, toxic sidewalk salt hazards, ethylene glycol antifreeze emergencies, and protective paw care balms.',
  sections: [
    {
      id: 'cold-weather-temperature-thresholds',
      heading: 'How Cold Is Too Cold? Canine Temperature Safety Scale',
      intro:
        'Wind chill, moisture, cloud cover, and dog size dramatically influence how cold weather impacts your pet’s core temperature.',
      table: {
        headers: ['Ambient Temperature (with Wind Chill)', 'Small / Short-Coated / Senior Dogs', 'Medium Breeds (Standard Coat)', 'Large Northern Double-Coated Breeds'],
        rows: [
          ['45°F (7°C) and above', 'Safe for normal exercise', 'Safe for normal exercise', 'Safe for vigorous workouts'],
          ['32°F to 40°F (0°C to 4°C)', 'Caution: sweaters recommended for small breeds', 'Safe for moderate walks', 'Ideal comfortable temperature range'],
          ['20°F to 32°F (-6°C to 0°C)', 'Danger: limit outdoor trips to 10–15 minutes', 'Caution: watch for shivering or lifting paws', 'Safe for standard walks; monitor ear tips'],
          ['Under 20°F (Below -6°C)', 'Severe Risk: quick bathroom breaks only', 'Danger: short 10-minute leash walks only', 'Caution: monitor for ice balls between paw pads']
        ]
      },
      paragraphs: [
        'Recognizing Canine Hypothermia: Mild hypothermia (rectal temp 95°F–99°F) triggers violent shivering, slow lethargic movement, and cold ear flaps. Severe hypothermia (below 90°F / 32°C) causes muscle stiffness, shallow breathing, dilated pupils, collapse, and life-threatening cardiac arrhythmias.',
        'Frostbite Anatomy: Extremities with minimal blood supply—ear margins, the tip of the tail, scrotal tissue, and paw webbing—are most vulnerable. Frostbitten skin turns pale gray or blue and feels rock-hard to the touch; never rub or massage frozen tissue, which shatters fragile ice crystals into cellular membranes.'
      ],
      warningBox: {
        title: 'Antifreeze (Ethylene Glycol) is Acutely Fatal',
        text: 'Automotive antifreeze contains ethylene glycol—a sweet-tasting, odorless liquid that dogs and cats readily lick from puddles or garage floors. As little as 1 teaspoon for a cat or 1 tablespoon for a medium dog causes acute, irreversible kidney failure. Seek immediate veterinary care if suspected; antidote (4-MP / Fomepizole) must be administered within 3 hours.'
      }
    },
    {
      id: 'sidewalk-salt-and-paw-care',
      heading: 'Sidewalk Salt, Chemical De-icers & Paw Wax Protection',
      intro:
        'Rock salt (sodium chloride) and chemical de-icers (calcium chloride, magnesium chloride) create intense chemical burning when packed into paw crevices.',
      paragraphs: [
        'When dogs return from a winter walk and lick their stinging paws, they ingest chemical de-icer salts, leading to toxic sodium chloride poisoning, mucosal burning, vomiting, and dehydration.',
        'Always wipe your dog’s paws, groin, and underbelly with a warm, damp washcloth immediately upon stepping inside the door, or rinse paws in a bowl of lukewarm water.',
        'Protective paw balms (natural beeswax, shea butter, and vitamin E waxes like Musher’s Secret) create a semi-permeable protective barrier that prevents ice balls from adhering between toes and shields pads from chemical burns.',
        'For dogs walking urban city sidewalks with heavy salt coverage, waterproof rubber booties provide 100% barrier protection against cuts from hidden jagged ice and chemical de-icers.'
      ],
      routineTip: {
        title: 'Log Winter Walk Durations in PetHorizon',
        text: 'Keep track of winter walk times in PetHorizon to ensure older dogs with arthritis do not stay outdoors long enough for joints to seize up. Set reminders for post-walk paw wiping and daily joint supplements.',
        actionLabel: 'Track Winter Routines in PetHorizon'
      }
    },
    {
      id: 'indoor-winter-wellness-adjustments',
      heading: 'Indoor Winter Adjustments: Caloric Burn & Humidity Control',
      intro:
        'Winter changes indoor home environments in subtle ways that affect pet comfort and respiratory health.',
      bulletPoints: [
        { label: 'Central Heating & Dry Skin', text: 'Forced-air furnaces drop indoor humidity below 30%, causing dry, flaky skin and static fur. Run an ultrasonic room humidifier and supplement meals with omega-3 fish oil.' },
        { label: 'Caloric Adjustments', text: 'Outdoor dogs burn more calories maintaining core body heat and need a 10% to 15% food increase; conversely, indoor dogs who exercise less in winter need portion cuts to prevent winter obesity.' },
        { label: 'Draft-Free Sleeping Zones', text: 'Elevate orthopedic dog beds off drafty winter tile and keep bedding away from cold exterior windows.' }
      ]
    }
  ]
};
