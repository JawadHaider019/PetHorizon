import { FullBlogArticle } from './types';

export const winterPetCareArticle: FullBlogArticle = {
  slug: 'winter-pet-care-cold-weather-paw-safety-guide',
  readTime: '16 min read',
  overviewSummary:
    'Freezing ambient temperatures, wind-chill factors, corrosive sidewalk chemical de-icers, and sweet-tasting toxic antifreeze spills make winter a hazardous season for companion animals. While thick double-coated northern breeds (Siberian Huskies, Alaskan Malamutes, Great Pyrenees) possess dense undercoats insulated for sub-zero conditions, short-coated, lean, toy, and senior dogs (Whippets, Greyhounds, Chihuahuas) can develop hypothermia and frostbite in temperatures as mild as 32°F (0°C). This veterinary guide breaks down the Tufts Animal Care and Condition (TACC) cold safety scale, hypothermia rewarming protocols, sidewalk de-icing chemical hazards, and lethal ethylene glycol antifreeze emergencies.',
  sections: [
    {
      id: 'tufts-cold-weather-safety-scale',
      heading: 'How Cold Is Too Cold? The Tufts University Animal Cold Weather Scale',
      intro:
        'Wind chill, humidity, precipitation (freezing rain, wet snow), and animal body condition drastically alter how cold weather impacts a pet’s core body temperature.',
      paragraphs: [
        'The Tufts Animal Care and Condition (TACC) scale evaluates cold risk based on ambient temperature, wind chill, dog size, coat type, and age. Under wet snow or icy conditions, a dog’s fur loses its thermal trapped-air boundary layer, accelerating conductive heat loss by up to 20 times.',
        'Canine Hypothermia Physiology: Normal rectal temperature is 100.5°F to 102.5°F (38.0°C to 39.2°C). Mild hypothermia (95°F to 99°F) triggers compensatory shivering, peripheral vasoconstriction, and elevated heart rate. As core temperature drops into moderate to severe hypothermia (< 90°F / 32°C), shivering ceases, muscles stiffen, respiratory rate drops, and cardiac conduction delays trigger fatal ventricular fibrillation.',
        'Frostbite Anatomy & Extracellular Ice Crystals: Blood is shunted away from extremities to preserve core thoracic and abdominal organs. Peripheral capillary beds in the ear tips, tail tip, prepuce/scrotum, and interdigital paw webbing freeze. Extracellular ice crystals expand, mechanically shredding delicate cell membranes. Frostbitten tissue appears pale, waxy, grey, or cyanotic, and feels rock-hard. Never rub, massage, or apply direct boiling water to frostbitten tissue; rapid aggressive friction shatters frozen cellular structures.'
      ],
      table: {
        headers: ['Ambient Temp (with Wind Chill)', 'Small / Short-Coated / Lean / Senior Dogs', 'Medium Breeds (Standard Dense Coat)', 'Large Double-Coated Northern Breeds', 'Outdoor Action Protocol'],
        rows: [
          ['45°F (7°C) and above', 'Safe for standard outdoor exercise', 'Safe for all normal activity', 'Optimal performance comfort zone', 'Standard routine walks'],
          ['32°F to 40°F (0°C to 4°C)', 'Caution: Insulated sweaters recommended', 'Safe for moderate walks', 'Ideal cold training temperature', 'Keep walks to 30–45 minutes'],
          ['20°F to 32°F (-6°C to 0°C)', 'Danger: Limit trips to 10–15 minutes', 'Caution: Monitor for lifting paws/shivering', 'Safe for standard 30-min exercise', 'Apply protective paw balms'],
          ['0°F to 20°F (-18°C to -6°C)', 'Critical Danger: 5-minute bathroom breaks only', 'Danger: Quick 10-minute leash relief', 'Caution: Monitor ear flaps and paw ice balls', 'Protective booties mandatory'],
          ['Below 0°F (Below -18°C)', 'Life Threatening: Indoor relief pads only', 'Severe Risk: 2-minute urgent relief only', 'Danger: 10-minute max leashed break', 'Zero prolonged outdoor exposure']
        ]
      }
    },
    {
      id: 'sidewalk-deicer-toxicity-paw-burns',
      heading: 'Sidewalk Chemical De-icers: Chemical Paw Burns & Sodium Chloride Poisoning',
      intro:
        'Municipalities and homeowners spread millions of tons of chemical salts and de-icing compounds across sidewalks, driveways, and road crossings each winter.',
      paragraphs: [
        'Chemical Irritation & Thermal Burns: Standard rock salt (sodium chloride) and chemical de-icers (calcium chloride, magnesium chloride, potassium chloride) are hygroscopic—they draw moisture out of the air to melt ice. Calcium chloride de-icers generate an exothermic chemical reaction (releasing heat up to 140°F upon contact with moisture), causing severe chemical burns, cracked fissures, and ulcerations in delicate paw webbing.',
        'Toxic Ingestion via Grooming: When pets return indoors with salt crystals packed between their toes, the stinging burning sensation prompts them to lick their paws obsessively. Ingesting chemical de-icers causes chemical stomatitis, severe vomiting, osmotic diarrhea, and acute hypernatremia (salt toxicity), which triggers cerebral edema, muscle tremors, and seizures.',
        'Post-Walk Paw Rinsing Protocol: Keep a shallow basin of warm water and a clean microfiber towel by your front entryway. Dip and rinse all four paws thoroughly immediately upon entering the house, paying careful attention to dislodge jagged salt crystals from between toes. Follow with a moisturizing pet paw balm containing organic beeswax and shea butter (e.g., Musher’s Secret) to seal micro-fissures.'
      ],
      warningBox: {
        title: 'Ethylene Glycol Antifreeze: Lethal in Teaspoons',
        text: 'Automotive antifreeze contains ethylene glycol—a sweet-tasting, odorless liquid that pools under vehicles in winter. As little as 1 teaspoon for a cat or 1 tablespoon for a medium dog causes acute, irreversible renal tubular necrosis. Ethylene glycol is metabolized by alcohol dehydrogenase into toxic glycolate and calcium oxalate monohydrate crystals that shred kidney nephrons. The veterinary antidote (Fomepizole / 4-MP) must be administered within 3 hours in cats and 8 hours in dogs to prevent 100% fatal kidney failure.'
      }
    },
    {
      id: 'indoor-winter-adjustments-and-arthritis',
      heading: 'Winter Arthritis Flare-Ups & Indoor Humidity Control',
      intro:
        'Cold barometric pressure drops and indoor heating systems alter home environments in ways that impact senior pets and respiratory health:',
      paragraphs: [
        'Barometric Pressure & Arthritic Pain: Cold, damp winter fronts cause barometric pressure drops that alter hydrostatic pressure inside arthritic joint capsules, exacerbating chronic hip and elbow dysplasia stiffness. Ensure senior dogs have heated orthopedic beds placed away from cold exterior drafts.',
        'Central Heating & Dry Skin Flaking: Forced-air furnaces drop indoor relative humidity below 25%, drying out the skin barrier and causing intense pruritus, static electricity, and flaky dandruff along the dorsal spine. Run an ultrasonic room humidifier and supplement meals with veterinary-strength omega-3 fish oils rich in EPA and DHA.'
      ],
      bulletPoints: [
        { label: 'Caloric Adjustments for Working Dogs', text: 'Working dogs spending hours in sub-freezing weather burn up to 25% more calories shivering to maintain core body temperature and require increased dietary fat and protein.' },
        { label: 'Portion Reductions for Indoor Dogs', text: 'Conversely, companion dogs whose winter walk durations drop from 60 minutes to 15 minutes require a 10% caloric reduction to prevent winter weight gain.' },
        { label: 'Car Engine Cat Safety', text: 'Outdoor and feral cats crawl inside vehicle engine bays to shelter near warm engines. Always firmly bang on your car hood and honk your horn before starting your vehicle on freezing mornings.' }
      ],
      routineTip: {
        title: 'Log Winter Walks & Vitals in PetHorizon',
        text: 'Monitor winter walk durations, log joint supplement adherence, and track monthly weight curves in PetHorizon to keep your pet healthy, active, and safe throughout the freezing winter season.',
        actionLabel: 'Track Winter Routines in PetHorizon'
      }
    }
  ]
};
