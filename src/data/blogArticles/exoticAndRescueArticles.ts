import { FullBlogArticle } from './types';

export const rabbitFeedingArticle: FullBlogArticle = {
  slug: 'rabbit-feeding-schedule-hay-diet-gi-stasis-guide',
  readTime: '3 min read',
  overviewSummary:
    'Domestic rabbits possess a specialized hindgut fermentation digestive tract that requires continuous fiber movement to survive. Unlike dogs or cats, a rabbit whose gut slows down for even 12 hours faces life-threatening Gastrointestinal (GI) Stasis. This exotic veterinary guide details the 85% grass hay ratio, safe daily leafy greens, pellet gram limits, and how PetHorizon tracks daily hay and fecal output.',
  sections: [
    {
      id: 'rabbit-digestive-food-pyramid',
      heading: 'The Veterinary Rabbit Food Pyramid: Why 85% Must Be Grass Hay',
      intro:
        'A rabbit’s open-rooted hypsodont teeth grow continuously at 2 to 3 millimeters per week. Grinding long-strand grass hay wears down molars evenly while driving indigestible fiber through the cecum.',
      paragraphs: [
        'Adult rabbits (over 7 months old) require unlimited, 24/7 access to fresh Timothy, Orchard, or Meadow hay—comprising 80% to 85% of their total dietary intake. Alfalfa hay is legume-based and overly high in calcium and protein; it should be reserved strictly for growing kits under 6 months or nursing does to prevent bladder sludge and uroliths.',
        'Fresh leafy greens (Romaine lettuce, cilantro, parsley, dandelion greens, bok choy) should make up 10% of the daily diet, measured at roughly 1 packed cup per 2 lbs (0.9 kg) of body weight. Fortified Timothy-based pellets must be restricted to 5% (1/8 to 1/4 cup daily for an average 5 lb rabbit). Avoid sugary treats, seeds, or corn which trigger cecal dysbiosis; verify safe greens and hazardous plants using our [toxic foods poison checklist](/blogs/toxic-foods-dogs-cats-poison-checklist) and compare avian chop guidelines in our [companion bird and parrot daily routine guide](/blogs/parrot-bird-daily-routine-chop-diet-sleep-guide).',
        'Rabbits also produce cecotropes—nutrient-rich clustered night feces that they ingest directly to absorb B vitamins and amino acids. Uneaten cecotropes clinging to the fur are an early indicator of obesity, dental spurs, or excess dietary sugars; record weight changes and veterinary visits in our [pet health records tracker](/blogs/pet-health-records-medication-schedule-tracker).'
      ],
      table: {
        headers: ['Life Stage', 'Hay Type & Allocation', 'Daily Leafy Greens', 'Fortified Timothy Pellets'],
        rows: [
          ['Young Kit (Under 6 Mos)', 'Unlimited Alfalfa + Timothy Hay', 'Introduce 1 green slowly at 12 wks', 'Unlimited plain pellets for bone growth'],
          ['Adult Rabbit (7 Mos – 5 Yrs)', 'Unlimited Timothy / Orchard (85%)', '1 cup per 2 lbs body weight daily', '1/8 to 1/4 cup (approx. 15g–25g) daily'],
          ['Senior Rabbit (6+ Years)', 'Unlimited Timothy / Oat Hay', '1 cup per 2 lbs body weight daily', 'Adjust grams in PetHorizon to maintain weight']
        ]
      }
    },
    {
      id: 'gi-stasis-early-detection',
      heading: 'Recognizing & Preventing Gastrointestinal (GI) Stasis',
      intro:
        'GI stasis occurs when intestinal peristalsis slows or halts due to low fiber intake, dehydration, dental spurs, or acute stress—allowing gas-producing pathogenic bacteria (*Clostridium* spp.) to proliferate.',
      bulletPoints: [
        { label: 'Fecal Pellet Monitoring', text: 'Healthy droppings are large, round, uniform, and fibrous. Small, tear-drop-shaped, or absent pellets are the earliest clinical warning sign.' },
        { label: 'Posture & Tooth Grinding', text: 'A hunched posture, pressing the abdomen to the floor, refusal of favorite greens, or loud tooth grinding (bruxism) indicates acute visceral pain.' },
        { label: 'Hydration via Ceramic Bowl', text: 'Heavy ceramic water bowls increase daily water intake by up to 30% compared to sipper bottles, protecting cecal hydration.' }
      ],
      warningBox: {
        title: '12-Hour Exotic Veterinary Emergency Rule',
        text: 'If your rabbit refuses food or produces zero fecal pellets for 8 to 12 hours, contact an exotic-savvy veterinarian immediately; see our [emergency vet symptoms and red flags guide](/blogs/emergency-vet-symptoms-red-flags-petmd) for crisis triage. Keep critical care recovery feeding supplies and oral syringes stocked in your [pet first aid kit](/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan).'
      },
      routineTip: {
        title: 'Log Daily Hay, Greens & Litter Output in PetHorizon',
        text: 'Use PetHorizon’s Small Pet profile to coordinate morning greens, evening pellet grams, and daily litter box checks across your family.',
        actionLabel: 'Set Up Rabbit Care Routine'
      }
    }
  ]
};

export const parrotCareArticle: FullBlogArticle = {
  slug: 'parrot-bird-daily-routine-chop-diet-sleep-guide',
  readTime: '3 min read',
  overviewSummary:
    'Companion parrots—including Conures, Cockatiels, Budgies, African Greys, and Macaws—retain the complex metabolic, photoperiod, and foraging instincts of wild flock birds. All-seed diets and erratic indoor lighting remain the leading causes of avian fatty liver disease and hormonal feather plucking. Master the daily fresh "chop" schedule, full-spectrum UV-B exposure, and 12-hour dark sleep routines.',
  sections: [
    {
      id: 'avian-nutrition-chop-and-pellets',
      heading: 'Avian Nutrition: Transitioning from Seeds to Pellets & Morning "Chop"',
      intro:
        'Commercial seed mixes are extraordinarily high in fat and deficient in Vitamin A, calcium, and iodine—predisposing companion birds to hepatic lipidosis and respiratory infections.',
      paragraphs: [
        'Avian veterinarians recommend a baseline diet of 60% formulated organic pellets (such as Harrison’s, Tops, or Roudybush) paired with 25% to 30% freshly diced vegetable "chop" and 10% cooked grains or legumes. Seeds should be reserved solely for training rewards. For households managing multiple exotic pets, compare dietary strategies with our [rabbit feeding schedule and GI stasis guide](/blogs/rabbit-feeding-schedule-hay-diet-gi-stasis-guide).',
        'An ideal daily chop mix balances raw chopped kale, broccoli florets, grated sweet potato, chili peppers (birds lack capsaicin receptors and love peppers), and sprouted mung beans. Never feed avocado (persin toxin), chocolate, fruit seeds (apple seeds contain cyanide), onions, or caffeine; review our full [toxic foods poison checklist](/blogs/toxic-foods-dogs-cats-poison-checklist) for avian toxicity warnings.',
        'Household air safety is equally vital: non-stick Teflon/PTFE cookware fumes cause fatal polytetrafluoroethylene toxicosis within minutes. Remove scented candles, plug-in air fresheners, and aerosol sprays entirely from homes with birds.'
      ],
      table: {
        headers: ['Feeding Window', 'Dietary Component', 'Preparation Protocol', 'Behavioral Goal'],
        rows: [
          ['Morning (7:00 – 9:00 AM)', 'Fresh Veggie "Chop" (2–3 tbsp)', 'Finely diced kale, sweet potato & legumes', 'Natural peak foraging engagement'],
          ['All Day (Cage Forager)', 'Cold-Pressed Avian Pellets', 'Placed in puzzle toys and foraging cups', 'Active physical & cognitive problem solving'],
          ['Late Afternoon (4:00 PM)', 'Chop Removal & Fresh Water', 'Discard moist chop to prevent bacterial growth', 'Avian hygiene & crop safety']
        ]
      }
    },
    {
      id: 'circadian-sleep-photoperiod',
      heading: 'The 10–12 Hour Uninterrupted Darkness Sleep Requirement',
      intro:
        'Equatorial parrots depend on consistent 10 to 12-hour photoperiods. Extended exposure to living room artificial lighting triggers continuous reproductive hormones, resulting in aggression, feather plucking, and egg-binding in females.',
      bulletPoints: [
        { label: 'Dedicated Sleep Cage', text: 'Transfer your bird to a smaller, covered sleep cage in a dark, quiet room away from television noise.' },
        { label: 'Full-Spectrum UV-B Lighting', text: 'Provide 3–4 hours of avian-specific UV-B lighting daily to synthesize Vitamin D3 for calcium absorption.' },
        { label: 'Weighing on Gram Scale', text: 'Weigh your bird on a digital gram scale 2–3 times a week; sudden weight loss of 5–10% or tail bobbing is a critical sign covered in our [emergency vet symptoms guide](/blogs/emergency-vet-symptoms-red-flags-petmd). Track weekly weight trends and molt logs in our [pet health records tracker](/blogs/pet-health-records-medication-schedule-tracker).' }
      ],
      routineTip: {
        title: 'Maintain Avian Health & Sleep Timestamps',
        text: 'Log weekly gram weights, molt cycles, and morning chop removal reminders across your household in PetHorizon.',
        actionLabel: 'Track Bird Routine in PetHorizon'
      }
    }
  ]
};

export const rescueDog333Article: FullBlogArticle = {
  slug: 'rescue-dog-3-3-3-rule-decompression-routine-guide',
  readTime: '3 min read',
  overviewSummary:
    'Adopting a rescue dog or shelter puppy is deeply rewarding, but the transition from a loud kennel environment to a residential home triggers acute cortisol elevation. The veterinary behavior "3-3-3 Rule" maps out what happens during the first 3 days, 3 weeks, and 3 months after adoption—and how predictable daily routines accelerate emotional decompression.',
  sections: [
    {
      id: 'understanding-the-3-3-3-timeline',
      heading: 'The 3-3-3 Rescue Dog Decompression Matrix Explained',
      intro:
        'Canine cortisol (stress hormone) takes up to 72 hours to clear the bloodstream after a single stressful event. During shelter transport and rehoming, your new dog is operating in survival mode.',
      paragraphs: [
        'Phase 1 — The First 3 Days (Decompression & Overwhelm): Newly adopted dogs often hide in crates, refuse food or water for 24 hours, pace, or experience stress diarrhea. Conversely, some shut down completely, appearing unusually quiet until they feel safe. Set up a quiet sanctuary room using guidance from our [new puppy checklist first-week setup](/blogs/new-puppy-checklist-first-year-budget-guide) and initiate house-training boundaries with our [puppy potty training schedule](/blogs/puppy-potty-training-schedule-akc-guide).',
        'Phase 2 — The First 3 Weeks (Settling In & Testing Boundaries): As adrenaline fades, your dog begins learning your household’s daily rhythm. True personality traits—and potential behavioral hurdles like leash reactivity, counter-surfing, or separation whining—typically surface during weeks two and three (see our [dog separation anxiety training guide](/blogs/dog-separation-anxiety-training-routine-guide) for desensitization protocols). Hand-feeding a portion of daily kibble during calm moments accelerates trust and positive association, and updating registry details following our [pet microchip registration lookup guide](/blogs/pet-microchip-registration-lookup-guide) protects against flight risks.',
        'Phase 3 — The First 3 Months (Trust & True Bonding): By 90 days of consistent meal times, walk routes, and positive reinforcement, your rescue dog recognizes your home as permanent territory and forms a secure attachment bond.'
      ],
      table: {
        headers: ['Adaptation Phase', 'Typical Canine Behavior', 'Owner Care Protocol'],
        rows: [
          ['First 3 Days', 'Overwhelmed, hiding, low appetite, stress panting or shutdown', 'Quiet sanctuary zone, zero houseguests, short potty breaks on leash'],
          ['First 3 Weeks', 'Learning routine, energy rising, testing household boundaries', 'Fixed meal & walk timestamps, positive crate reinforcement'],
          ['First 3 Months', 'Full personality visible, secure attachment, reliable house-training', 'Gradual socialization, advanced training & routine maintenance']
        ]
      },
      warningBox: {
        title: 'Avoid Dog Parks & Welcome Parties in Week One',
        text: 'Taking a newly adopted rescue dog to an off-leash dog park, busy outdoor cafe, or hosting a "meet the dog" party during the first 14 days causes trigger stacking and defensive fear biting. Keep their world small and predictable first.'
      }
    },
    {
      id: 'building-predictable-decompression-schedule',
      heading: 'Why Clockwork Routines Cure Post-Shelter Anxiety',
      intro:
        'To an anxious rescue dog, unpredictability equals danger. When breakfast, potty walks, and bedtime occur at the exact same hour every day, nervous system hypervigilance drops dramatically.',
      bulletPoints: [
        { label: 'Synchronize All Family Members', text: 'Use identical cue words ("Outside", "Crate", "Wait") and feeding times across all partners and kids.' },
        { label: 'Double-Leash Flight Risk Safety', text: 'Newly adopted dogs can slip collars when startled by traffic; pair a martingale collar with a secure Y-front harness and dual leashes.' },
        { label: 'Low-Pressure Decompression Walks', text: 'Opt for quiet neighborhood routes or sniffaris rather than busy urban shopping strips during the first month, adjusting distance based on our [dog walking schedule by age and breed](/blogs/dog-walking-schedule-by-age-breed-exercise-guide) and estimating life stage with our [pet age calculator](/tools/pet-age-calculator).' }
      ],
      routineTip: {
        title: 'Coordinate Your Rescue Dog’s 3-3-3 Routine in PetHorizon',
        text: 'Share a unified daily feeding, walk, and potty timetable with your household via PetHorizon Family Hub.',
        actionLabel: 'Build Rescue Routine Free'
      }
    }
  ]
};
