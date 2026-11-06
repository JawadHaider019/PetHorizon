import { FullBlogArticle } from './types';

export const parrotCareArticle: FullBlogArticle = {
  slug: 'parrot-bird-daily-routine-chop-diet-sleep-guide',
  readTime: '5 min read',
  overviewSummary:
    'Companion parrots—including Cockatiels, Conures, Budgies, African Greys, and Macaws—retain the delicate endocrine systems, high metabolic rates, and natural foraging instincts of wild flock birds. All-seed diets, indoor air toxins, and erratic artificial lighting remain the leading causes of avian fatty liver disease, respiratory failure, and hormonal feather plucking. Master the morning fresh vegetable chop routine, full-spectrum UV-B exposure, and 12-hour dark sleep schedules.',
  sections: [
    {
      id: 'avian-nutrition-chop-and-pellets',
      heading: 'Avian Nutrition: Moving Beyond Seeds to Pellets & Morning "Chop"',
      intro:
        'Commercial sunflower and millet seed mixes are dangerously high in lipids (often exceeding 45% fat) while lacking Vitamin A, calcium, and essential amino acids. Chronic seed feeding inevitably leads to hepatic lipidosis (fatty liver disease) and severe vitamin A deficiency.',
      paragraphs: [
        'Avian veterinarians recommend a balanced dietary baseline of 60% formulated, cold-pressed organic pellets (such as Harrison’s, TOP’s, or Roudybush) paired with 25% to 30% freshly diced raw vegetable "chop", and 10% cooked ancient grains, sprouted seeds, or legumes. Loose seed mixes should be strictly reserved as high-value training rewards during flight or recall practice.',
        'Transitioning a seed-addicted bird requires patience. Birds do not instinctively recognize pellets as food. Begin by pulverizing 20% pellets into a fine powder and dusting it over lightly dampened seeds, or mixing crushed pellets into warm organic sweet potato mash. Compare exotic pet feeding principles in our [rabbit feeding schedule and GI stasis guide](/blogs/rabbit-feeding-schedule-hay-diet-gi-stasis-guide).',
        'Weigh your bird every morning before breakfast using a digital gram scale. If body weight drops by more than 3% during dietary transition, pause the reduction of seeds and consult an avian veterinarian. Record baseline morning weights in our [pet health records tracker](/blogs/pet-health-records-medication-schedule-tracker).'
      ],
      table: {
        headers: ['Dietary Component', 'Daily Percentage', 'Recommended Ingredients', 'Nutritional Purpose'],
        rows: [
          ['Organic Pellets', '55% – 65%', 'Cold-pressed formulated pellets', 'Complete vitamins, trace minerals & amino acids'],
          ['Fresh Veggie "Chop"', '25% – 30%', 'Kale, broccoli, sweet potato, chili peppers', 'Beta-carotene, hydration, natural foraging texture'],
          ['Sprouts & Grains', '10% – 15%', 'Sprouted lentils, quinoa, buckwheat, farro', 'Living plant enzymes, digestible lean protein'],
          ['Nuts / Seed Treats', '< 5% Total', 'Raw walnut, pumpkin seed, hemp heart', 'Positive reinforcement rewards for training']
        ]
      }
    },
    {
      id: 'chop-prep-and-toxic-dangers',
      heading: 'Morning Chop Preparation, Safe Ingredients & Airborne Hazards',
      intro:
        'Avian respiratory systems feature complex air sacs extending directly into hollow bones, making birds extraordinarily sensitive to food toxins and aerosolized chemical vapors.',
      paragraphs: [
        'An ideal daily chop recipe combines finely diced cruciferous vegetables (broccoli florets, cauliflower, red cabbage), beta-carotene roots (grated butternut squash, sweet potato), leafy greens (kale, dandelion, Swiss chard), and spicy peppers (jalapeño, habanero). Interestingly, birds lack the TRP-V1 heat receptor for capsaicin, allowing them to relish fiery peppers that provide concentrated Vitamin C and carotenoids.',
        'Always remove fresh chop dishes after 2 hours. Moist vegetables and sprouted legumes rapidly cultivate pathogenic Aspergillus mold and bacterial blooms (Pseudomonas, E. coli) at room temperature, which trigger crop stasis and fatal mycotic pneumonia.',
        'Airborne toxins in modern kitchens are swiftly fatal. Non-stick cookware containing polytetrafluoroethylene (PTFE/Teflon) releases odorless toxic fluorinated gases when heated above 280°C (536°F), destroying avian lung tissue within minutes. Discard all Teflon pans, air fryer inserts, self-cleaning oven cycles, scented candles, and aerosol sprays.'
      ],
      warningBox: {
        title: 'Emergency Avian Toxic Food Alert',
        text: 'Never feed avocado (contains persin, which causes fatal cardiac necrosis), chocolate, caffeine, fruit seeds/pits (contain amygdalin which metabolizes into cyanide), onions, or garlic. Cross-check household hazards in our [toxic foods poison checklist](/blogs/toxic-foods-dogs-cats-poison-checklist).'
      }
    },
    {
      id: 'circadian-sleep-photoperiod',
      heading: 'The 10–12 Hour Uninterrupted Darkness Sleep Requirement',
      intro:
        'Most companion parrots originate from equatorial rainforests and savannas where the solar cycle provides roughly 12 hours of sunlight and 12 hours of total darkness year-round.',
      paragraphs: [
        'Keeping a parrot in an active living room illuminated by television screens, smartphones, and ceiling fixtures until 11:00 PM artificially extends their photoperiod. This tricks their hypothalamus into perceiving an eternal spring breeding season. The clinical fallout includes intense sexual frustration, screaming fits, cage territoriality, feather-destructive plucking, and potentially fatal egg-binding in female birds.',
        'Provide a dedicated small "sleep cage" located in a quiet, dark, well-ventilated spare room or closet. Cover the sleep cage with a breathable blackout cloth. Ensure 10 to 12 hours of continuous, soundless darkness every single night.'
      ],
      bulletPoints: [
        { label: 'Full-Spectrum UV-B Lighting', text: 'Window glass blocks 98% of beneficial UV-B rays. Mount an avian-specific 2.4% to 5.0% UV-B lamp 12–18 inches above their daytime playstand for 3 to 4 hours daily to synthesize active Vitamin D3 for bone and eggshell health.' },
        { label: 'Foraging Enrichment', text: 'Wild parrots spend 70% of their waking hours hunting for sustenance. Never feed pellets in a plain open bowl; wrap them in untreated paper, wooden foraging blocks, or woven palm puzzles.' },
        { label: 'Draft & Temperature Stability', text: 'Maintain an ambient room temperature between 68°F and 78°F (20°C–26°C), avoiding drafts from air conditioners or exterior doorways.' }
      ]
    },
    {
      id: 'daily-avian-schedule-and-health',
      heading: 'Daily Avian Care Timetable & Masked Illness Detection',
      intro:
        'As prey animals, birds instinctively mask clinical illness until compensatory mechanisms collapse. A subtle decline in posture or body weight is frequently your only advance warning.',
      paragraphs: [
        'A bird that sits on the cage bottom with fluffed feathers, half-closed eyes, or a tail bobbing rhythmically with each breath is in critical respiratory or metabolic distress. Review urgent veterinary indicators in our [emergency vet symptoms and red flags guide](/blogs/emergency-vet-symptoms-red-flags-petmd) and ensure sterile gauze and styptic powder are stocked in your [pet first aid kit](/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan).'
      ],
      stepByStep: {
        title: 'The Master Daily Avian Care Protocol',
        steps: [
          {
            number: 1,
            title: '7:00 AM: Wake-Up & Morning Gram Weight',
            description: 'Uncover sleep cage. Transfer bird to scale perch and log digital gram weight in PetHorizon before serving breakfast.'
          },
          {
            number: 2,
            title: '7:30 AM: Fresh Chop & Medication Delivery',
            description: 'Serve 2 to 3 tablespoons of freshly diced vegetable chop with clean ceramic water. Administer any prescribed supplements.'
          },
          {
            number: 3,
            title: '9:30 AM: Chop Removal & Pellet Foraging Setup',
            description: 'Remove moist chop bowl to prevent bacterial growth. Fill foraging toys with measured cold-pressed pellets.'
          },
          {
            number: 4,
            title: '1:00 PM: Supervised Out-of-Cage Exercise & UV-B',
            description: 'Provide 2 to 3 hours of supervised wing exercise, training drills, and full-spectrum UV-B lamp exposure.'
          },
          {
            number: 5,
            title: '7:00 PM: Evening Bedtime & Dark Sanctuary',
            description: 'Inspect cage droppings for color and consistency. Transfer bird to sleep cage for 12 hours of quiet, dark rest.'
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
