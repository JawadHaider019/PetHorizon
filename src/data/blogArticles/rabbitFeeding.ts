import { FullBlogArticle } from './types';

export const rabbitFeedingArticle: FullBlogArticle = {
  slug: 'rabbit-feeding-schedule-hay-diet-gi-stasis-guide',
  readTime: '5 min read',
  overviewSummary:
    'Domestic rabbits possess a specialized hindgut fermentation digestive system that requires continuous long-strand fiber movement to survive. Unlike dogs or cats, a rabbit whose gut motility slows for even 8 to 12 hours faces life-threatening Gastrointestinal (GI) Stasis. This exotic veterinary guide details the 85% grass hay pyramid, safe daily leafy greens, strict pellet gram limits, early GI stasis triage, and daily care logging with PetHorizon.',
  sections: [
    {
      id: 'rabbit-digestive-food-pyramid',
      heading: 'The Veterinary Rabbit Food Pyramid: Why 85% Must Be Grass Hay',
      intro:
        'A rabbit’s open-rooted hypsodont teeth grow continuously at 2 to 3 millimeters every week. Constant grinding of coarse grass hay wears down molar crowns evenly while driving indigestible lignified fiber through the cecum.',
      paragraphs: [
        'Adult rabbits (over 7 months old) require unlimited, 24/7 access to fresh Timothy, Orchard, Meadow, or Brome grass hay—comprising 80% to 85% of their total daily food intake. Ingested grass fiber stimulates rhythmic cecocolic peristalsis, prevents hairballs (trichobezoars) from forming tight impactions, and provides the cellulose substrate for beneficial cecal microflora.',
        'Alfalfa hay is a legume, not a grass. It is exceptionally dense in calcium (1.5% vs 0.4% in Timothy) and protein. While essential for growing kits under 6 months or pregnant does, feeding Alfalfa to adult rabbits causes hypercalciuria, thick bladder sludge (calcium carbonate precipitate), and painful cystic calculi (bladder stones).',
        'Rabbits also produce cecotropes—nutrient-rich clustered night feces enveloped in mucus that they consume directly from the anus to assimilate essential B vitamins, volatile fatty acids, and amino acids. Uneaten cecotropes smearing on fur or the cage floor are an immediate sign of dietary sugar excess, lack of fiber, or dental spurs. You can track weight fluctuations and veterinary exams in our [pet health records tracker](/blogs/pet-health-records-medication-schedule-tracker) and check companion avian routines in our [companion bird daily routine guide](/blogs/parrot-bird-daily-routine-chop-diet-sleep-guide).'
      ],
      table: {
        headers: ['Life Stage', 'Hay Type & Allocation', 'Daily Leafy Greens', 'Fortified Pellets'],
        rows: [
          ['Baby Kit (0–3 Months)', 'Mother’s milk, intro alfalfa + timothy', 'None (delicate gut flora)', 'Unlimited plain alfalfa pellets'],
          ['Juvenile (3–7 Months)', 'Unlimited alfalfa + timothy blend', 'Introduce 1 dark green weekly', '1/2 cup daily for skeletal growth'],
          ['Adult (7 Mos – 5 Yrs)', 'Unlimited Timothy / Orchard / Meadow (85%)', '1 packed cup per 2 lbs body weight', '1/8 to 1/4 cup (approx. 15g–25g) daily'],
          ['Senior (5+ Years)', 'Unlimited Timothy / Oat hay (high fiber)', '1 packed cup per 2 lbs body weight', 'Adjust grams in PetHorizon to maintain mass']
        ]
      }
    },
    {
      id: 'daily-greens-and-pellet-rationing',
      heading: 'Safe Daily Leafy Greens, Pellet Limits & Treat Boundaries',
      intro:
        'Excess carbohydrates and starches disrupt cecal pH, allowing deadly Clostridium perfringens and enterotoxigenic bacteria to colonize the hindgut.',
      paragraphs: [
        'Fresh leafy greens should form roughly 10% of the daily diet. Provide a rotating mix of 3 to 5 safe greens daily, portioned at 1 packed measuring cup per 2 lbs (0.9 kg) of body weight. Excellent low-oxalate daily staples include Romaine lettuce, cilantro (coriander), butterhead lettuce, dill, bok choy, mint, basil, and dandelion greens.',
        'Rotate high-oxalate greens (spinach, parsley, Swiss chard, beet greens, kale) only once or twice weekly to avoid calcium oxalate crystal accumulation in the kidneys. Never feed iceberg lettuce: it contains lactucarium, which triggers watery osmotic diarrhea and provides negligible nutrition.',
        'Fortified Timothy-based pellets must be restricted to 5% of daily intake (15 to 25 grams daily for an average 5 lb rabbit). Strictly avoid commercial muesli mixes containing seeds, dried corn, colored cornstarch puffs, or nuts. Rabbits selectively pick out sugary morsels, triggering cecal dysbiosis and severe malocclusion. Verify plant safety using our [toxic foods dogs cats poison checklist](/blogs/toxic-foods-dogs-cats-poison-checklist).'
      ],
      warningBox: {
        title: 'Treat Warning: Zero Seeds, Nuts, or Human Bread',
        text: 'A rabbit’s digestive tract cannot digest concentrated starches. Commercial yogurt drops, corn cobs, crackers, and bread cause fatal cecal enterotoxemia. Limit fruit treats (fresh apple, blueberry, or strawberry) to a single thumbnail-sized piece per day.'
      }
    },
    {
      id: 'gi-stasis-early-detection',
      heading: 'Recognizing & Preventing Gastrointestinal (GI) Stasis',
      intro:
        'GI stasis occurs when muscular contractions of the stomach and intestines slow down or cease entirely. Gas pockets accumulate, the stomach contents dehydrate into a hard mass, and the rabbit quickly enters hypothermic shock.',
      paragraphs: [
        'Unlike carnivores, rabbits cannot vomit due to a well-developed cardiac sphincter. When intestinal transit halts, gas and dehydrated cecal contents create agonizing visceral distension. Causes include insufficient dietary fiber, chronic dehydration, dental malocclusion spurs cutting the tongue, environmental stress, or untreated pain.',
        'Hydration plays a paramount role in preserving cecal fluid balance. Heavy ceramic water bowls encourage up to 30% greater fluid consumption than hanging ball-point sipper bottles. Refresh water twice daily to maintain pristine cleanliness.'
      ],
      bulletPoints: [
        { label: 'Small or Absent Fecal Pellets', text: 'Healthy droppings are round, plump, and uniform. Tear-drop, pinhead-sized, strung-together, or zero pellets over 6 to 8 hours indicate immediate danger.' },
        { label: 'Loud Tooth Grinding (Bruxism)', text: 'Gentle tooth purring indicates relaxation; loud, harsh, rhythmic grinding signifies severe abdominal cramping and visceral pain.' },
        { label: 'Hunched Posture & Belly Pressing', text: 'A rabbit pressing their belly flat against cold flooring or shifting restlessly while refusing favorite fresh greens is in clinical crisis.' },
        { label: 'Hypothermia (< 100°F / 37.8°C)', text: 'As metabolic shock sets in, rabbit ear tips turn icy cold. Emergency warming and intravenous fluids are required.' }
      ],
      warningBox: {
        title: '12-Hour Exotic Veterinary Emergency Rule',
        text: 'If your rabbit refuses all food or produces zero fecal pellets for 8 to 12 hours, treat this as a critical veterinary emergency. Review hospital triage in our [emergency vet symptoms red flags guide](/blogs/emergency-vet-symptoms-red-flags-petmd) and keep oral syringes and recovery formula in your [pet first aid kit](/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan).'
      }
    },
    {
      id: 'daily-rabbit-routine-timeline',
      heading: 'The Clockwork Daily Rabbit Feeding & Care Schedule',
      intro:
        'Because rabbits are crepuscular creatures—most active during dawn and twilight—aligning meals with their natural biorhythms minimizes metabolic stress.',
      paragraphs: [
        'Structuring predictable morning and evening feeding checkpoints enables family caregivers to spot appetite hesitation before clinical GI stasis escalates. You can calculate your rabbit’s approximate developmental life stage with our [pet age calculator](/tools/pet-age-calculator).'
      ],
      stepByStep: {
        title: 'Daily Crepuscular Feeding & Check-In Protocol',
        steps: [
          {
            number: 1,
            title: '7:30 AM: Morning Hay Top-Up & Pellet Ration',
            description: 'Replenish unlimited fresh Timothy hay in the manger. Weigh out 10–15g of fortified pellets. Rinse and refill the heavy ceramic water dish.'
          },
          {
            number: 2,
            title: '1:00 PM: Midday Litter & Motility Audit',
            description: 'Inspect litter box fecal output. Confirm normal pellet shape and volume. Offer fresh oat hay or willow chew sticks for dental wear.'
          },
          {
            number: 3,
            title: '6:30 PM: Fresh Leafy Green Salad & Foraging',
            description: 'Wash and serve 1 to 2 packed cups of wet leafy greens (Romaine, cilantro, bok choy). Moisture on greens boosts gut hydration.'
          },
          {
            number: 4,
            title: '10:00 PM: Night Hay Check & Bedtime Verification',
            description: 'Ensure hay manger is packed for overnight grazing. Confirm the rabbit eagerly approaches for a small sprig of fresh dill or parsley.'
          }
        ]
      },
      routineTip: {
        title: 'Log Daily Hay, Greens & Pellets in PetHorizon',
        text: 'Use PetHorizon’s Small Pet profile to log morning greens, evening pellet grams, and daily litter checks across all household members.',
        actionLabel: 'Set Up Rabbit Care Routine'
      }
    }
  ]
};
