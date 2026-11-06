import { FullBlogArticle } from './types';

export const parrotCareArticle: FullBlogArticle = {
  slug: 'parrot-bird-daily-routine-chop-diet-sleep-guide',
  readTime: '5 min read',
  overviewSummary:
    'Companion parrots—including Cockatiels, Conures, Budgies, African Greys, and Macaws—retain the delicate endocrine systems, high metabolic rates, and natural foraging instincts of wild birds. All-seed diets, indoor air toxins, and erratic artificial lighting remain major contributors to avian nutritional deficiencies, respiratory illness, and behavioral distress. Discover evidence-based guidelines for fresh vegetable chop, species-appropriate UVB lighting, photoperiod sleep cycles, and daily routine management.',
  sections: [
    {
      id: 'avian-nutrition-chop-and-pellets',
      heading: 'Avian Nutrition: Formulated Diets, Fresh "Chop" & Species Differences',
      intro:
        'All-seed diets composed primarily of sunflower seeds or millet are high in fat and low in essential micronutrients like Vitamin A, calcium, and trace minerals. Over time, exclusive seed feeding predisposes birds to hepatic lipidosis (fatty liver disease) and secondary respiratory infections.',
      paragraphs: [
        'For many common companion psittacines, avian veterinarians recommend a baseline diet where formulated, nutritionally complete pellets represent roughly 50% to 70% of daily intake, supplemented with 20% to 30% freshly prepared vegetable "chop", and small amounts of cooked whole grains or legumes. High-fat nuts and seeds are best reserved as positive reinforcement rewards during training.',
        'However, dietary proportions must always be tailored to the specific species. For example, nectarivorous species such as Lories and Lorikeets require specialized liquid or powdered nectar and fresh fruits, as their digestive systems cannot process dry seed or standard pellets. Eclectus parrots require higher proportions of fresh fiber and produce due to their specialized gastrointestinal anatomy. Conversely, arid-zone ground foragers such as Budgerigars and Cockatiels can incorporate a higher proportion of quality grains and seeds under veterinary guidance. Compare exotic feeding principles in our [rabbit feeding schedule and GI stasis guide](/blogs/rabbit-feeding-schedule-hay-diet-gi-stasis-guide).',
        'Transitioning a seed-conditioned bird to formulated diets requires gradual steps. Mixing crushed pellets with warm sweet potato or dusting pellets onto dampened food can encourage acceptance. Weigh your bird regularly using a digital gram scale; any unintentional weight loss exceeding 3% to 5% warrants pausing dietary changes and consulting an avian veterinarian. Record baseline weights in our [pet health records tracker](/blogs/pet-health-records-medication-schedule-tracker).'
      ],
      table: {
        headers: ['Dietary Element', 'Typical Proportion (Common Psittacines)', 'Recommended Ingredients', 'Nutritional Role'],
        rows: [
          ['Formulated Pellets', '50% – 70% (Species-dependent)', 'Accredited avian formulated pellets', 'Balanced vitamins, calcium, and amino acids'],
          ['Fresh Vegetable "Chop"', '20% – 30%', 'Kale, broccoli, squash, peppers, dark greens', 'Beta-carotene, hydration, natural foraging texture'],
          ['Grains, Legumes & Sprouts', '10% – 15%', 'Sprouted lentils, quinoa, buckwheat, oats', 'Digestible plant protein, living enzymes'],
          ['Nuts & Seeds', 'Small reward allowance (< 5%)', 'Raw walnuts, pumpkin seeds, hemp seeds', 'High-value positive reinforcement for training']
        ]
      }
    },
    {
      id: 'chop-prep-and-toxic-dangers',
      heading: 'Fresh Chop Preparation, Food Safety & Airborne Hazards',
      intro:
        'Avian respiratory anatomy features expansive air sacs that circulate air deeply into hollow bones, making companion birds uniquely vulnerable to aerosolized toxins and spoiled foods.',
      paragraphs: [
        'Vegetable chop recipes commonly blend cruciferous vegetables (broccoli florets, cabbage), beta-carotene-rich vegetables (sweet potato, carrots, squash), leafy greens, and chili peppers. Birds lack capsaicin receptors and readily consume peppers, which supply dietary carotenoids and Vitamin C.',
        'Food safety timing: In warm or humid indoor environments, moist vegetables and sprouted legumes can quickly harbor bacteria (*Pseudomonas*, *E. coli*) and fungal molds (*Aspergillus*). Fresh chop dishes should generally be removed within 2 to 4 hours of offering, or sooner in warm temperatures, to protect crop health.',
        'Airborne hazards in the home represent an urgent danger. Overheated cookware coated with polytetrafluoroethylene (PTFE/Teflon) releases toxic fluorinated fumes that cause fatal pulmonary hemorrhage within minutes. Eliminate non-stick pans, aerosol sprays, plug-in fragrance diffusers, and self-cleaning oven cycles from any home housing birds.'
      ],
      warningBox: {
        title: 'Toxic Foods to Strictly Avoid',
        text: 'Never feed avocado (persin can cause fatal heart failure in birds), chocolate, caffeine, fruit seeds/pits containing cyanogenic glycosides (apple seeds, stone fruit pits), onions, or garlic. Cross-check toxic items in our [toxic foods poison checklist](/blogs/toxic-foods-dogs-cats-poison-checklist).'
      }
    },
    {
      id: 'circadian-sleep-photoperiod',
      heading: 'Photoperiod Management, Sleep & Species-Specific UVB Guidelines',
      intro:
        'Photoperiod (day-length) directly regulates avian reproductive physiology, molt cycles, and behavioral stability.',
      paragraphs: [
        'Many equatorial parrot species thrive on roughly 10 to 12 hours of uninterrupted, quiet darkness each night. Artificial household lighting extending late into the evening can stimulate chronic reproductive hormones, leading to territorial aggression, excessive vocalization, feather-damaging behavior, or egg-binding in females. Providing a separate, covered sleep cage in a quiet, dark room helps preserve circadian rhythms.',
        'UVB lighting and Vitamin D3 synthesis: While wild birds synthesize Vitamin D3 via natural sunlight, window glass filters out beneficial UVB radiation. In accordance with Association of Avian Veterinarians (AAV) guidance on ultraviolet lighting for companion birds, artificial UVB provision supports endogenous Vitamin D3 synthesis, calcium metabolism, and natural tetrachromatic vision. However, UV requirements differ substantially across psittacine species: canopy dwellers, forest-understory birds, and arid-grassland foragers naturally experience vastly different solar intensities. Rather than applying a single universal UV index across all species, lighting must be tailored to your bird’s species-specific biology, enclosure dimensions, and veterinary recommendations.'
      ],
      bulletPoints: [
        { label: 'UVI vs Advertised Bulb Percentage', text: 'Advertised bulb percentages (such as 2.4% or 5% UVB) indicate spectral output at the lamp surface, but the actual UV Index (UVI) delivered to the perch decreases rapidly with distance and mesh interference. Measure levels with a solar meter or adhere strictly to manufacturer distance guidelines.' },
        { label: 'Safe Overhead Placement & Shade Gradients', text: 'Per AAV guidelines, mount UV fixtures directly overhead rather than from the side to prevent retinal irritation. Crucially, lighting must cover only part of the enclosure, maintaining an accessible shaded gradient so your bird can voluntarily move away from exposure at will.' },
        { label: 'Preventing Overexposure Hazards', text: 'Excessive or improperly positioned UV exposure without an escape gradient can cause photokeratitis (corneal burns), cataracts, and skin irritation. Consult an avian veterinarian regarding appropriate fixture distance and daily exposure duration.' }
      ]
    },
    {
      id: 'daily-avian-schedule-and-health',
      heading: 'Daily Avian Care Timetable & Subtle Illness Recognition',
      intro:
        'Because birds are prey species that mask clinical signs until illness is advanced, subtle shifts in daily activity, posture, or weight provide the earliest warning of medical concern.',
      paragraphs: [
        'Fluffed feathers, sitting on the cage floor, decreased vocalization, or a tail bobbing rhythmically with respiration represent urgent clinical signs requiring immediate avian veterinary evaluation. Review emergency indicators in our [emergency vet symptoms and red flags guide](/blogs/emergency-vet-symptoms-red-flags-petmd) and maintain first-aid supplies in your [pet first aid kit](/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan).'
      ],
      stepByStep: {
        title: 'Sample Daily Avian Care Flow',
        steps: [
          {
            number: 1,
            title: 'Morning: Uncover & Check Baseline Weight',
            description: 'Uncover sleep cage. Weigh your bird on a digital perch scale before breakfast to log regular weight trends in PetHorizon.'
          },
          {
            number: 2,
            title: 'Morning: Offer Fresh Vegetable Chop',
            description: 'Provide fresh vegetable chop alongside fresh water. Remove unconsumed moist food after 2 to 4 hours.'
          },
          {
            number: 3,
            title: 'Daytime: Foraging & Environmental Enrichment',
            description: 'Set up foraging puzzles with measured formulated pellets. Provide supervised out-of-cage exercise and appropriate overhead UVB exposure.'
          },
          {
            number: 4,
            title: 'Evening: Cage Inspection & Bedtime',
            description: 'Inspect daily droppings for color and consistency. Transfer your bird to their quiet, dark sleeping sanctuary for 10–12 hours of rest.'
          }
        ]
      },
      routineTip: {
        title: 'Track Avian Weights & Routines in PetHorizon',
        text: 'Record daily gram scale readings, molting cycles, and morning chop timers in PetHorizon to catch subtle health shifts before symptoms escalate.',
        actionLabel: 'Track Bird Routine in PetHorizon'
      }
    }
  ]
};
