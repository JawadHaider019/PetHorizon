import { FullBlogArticle } from './types';

export const rabbitFeedingArticle: FullBlogArticle = {
  slug: 'rabbit-feeding-schedule-hay-diet-gi-stasis-guide',
  readTime: '14 min read',
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
        'Fresh leafy greens (Romaine lettuce, cilantro, parsley, dandelion greens, bok choy) should make up 10% of the daily diet, measured at roughly 1 packed cup per 2 lbs (0.9 kg) of body weight. Fortified Timothy-based pellets must be restricted to 5% (1/8 to 1/4 cup daily for an average 5 lb rabbit).'
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
        { label: 'Fecal Pellet Monitoring', text: 'Healthy rabbit droppings are large, round, uniform, and fibrous. Suddenly smaller, tear-drop-shaped, or absent fecal pellets are the earliest clinical warning sign.' },
        { label: 'Posture & Tooth Grinding', text: 'A hunched posture, pressing the abdomen to the floor, refusal of favorite greens, or loud tooth grinding (bruxism) indicates acute visceral pain.' },
        { label: 'Hydration Bowl vs. Bottle', text: 'Heavy ceramic water bowls increase daily water consumption by up to 30% compared to ball-bearing sipper bottles.' }
      ],
      warningBox: {
        title: '12-Hour Exotic Veterinary Emergency Rule',
        text: 'If your rabbit refuses food or produces zero fecal pellets for 8 to 12 hours, contact an exotic-savvy veterinarian immediately. Never force-feed a rabbit without veterinary imaging to rule out a mechanical gastric obstruction.'
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
  readTime: '13 min read',
  overviewSummary:
    'Companion parrots—including Conures, Cockatiels, Budgies, African Greys, and Macaws—retain the complex metabolic, photoperiod, and foraging instincts of wild flock birds. All-seed diets and erratic indoor lighting remain the leading causes of avian fatty liver disease and hormonal feather plucking. Master the daily fresh "chop" schedule, full-spectrum UV-B exposure, and 12-hour dark sleep routines.',
  sections: [
    {
      id: 'avian-nutrition-chop-and-pellets',
      heading: 'Avian Nutrition: Transitioning from Seeds to Pellets & Morning "Chop"',
      intro:
        'Commercial seed mixes are extraordinarily high in fat and deficient in Vitamin A, calcium, and iodine—predisposing companion birds to hepatic lipidosis and respiratory infections.',
      paragraphs: [
        'Association of Avian Veterinarians (AAV) guidelines recommend that formulated avian pellets comprise 60% to 70% of the daily diet, paired with 20% to 30% fresh vegetable "chop" (finely diced dark leafy greens, bell peppers, broccoli, cooked quinoa, and beta-carotene-rich sweet potato).',
        'Because fresh vegetable chop spoils rapidly at room temperature, serve morning chop for a strict 2-hour window before removing the dish to prevent bacterial or fungal crop infections.'
      ],
      table: {
        headers: ['Daily Time Block', 'Avian Routine Task', 'Clinical Purpose'],
        rows: [
          ['7:30 AM – 8:00 AM', 'Uncover cage, weigh bird (grams), serve fresh vegetable chop', 'Morning hunger maximizes vegetable acceptance'],
          ['10:00 AM', 'Remove fresh chop bowl; refresh clean water & dry pellets', 'Prevents bacterial spoilage in warm rooms'],
          ['1:00 PM – 4:00 PM', 'Foraging toys, out-of-cage flight & UV-B light session', 'Stimulates mental enrichment & calcium metabolism'],
          ['7:30 PM – 7:30 AM', '12 hours of uninterrupted dark, quiet covered sleep', 'Regulates photoperiod hormones & prevents screaming']
        ]
      },
      warningBox: {
        title: 'Lethal Household Inhalants & Toxic Foods for Birds',
        text: 'Avian air sacs are acutely sensitive to airborne toxins: overheated PTFE (Teflon) non-stick cookware, aerosol sprays, and scented candles can cause fatal respiratory arrest in minutes. Avocado, chocolate, onion, garlic, and fruit pits are also toxic.'
      }
    },
    {
      id: 'photoperiod-sleep-and-gram-weights',
      heading: 'The 12-Hour Photoperiod Sleep Rule & Weekly Gram Weighing',
      intro:
        'Because prey birds instinctually mask illness ("the preservation reflex") until they are critically decompensated, visual observation alone often misses early infection.',
      bulletPoints: [
        { label: 'Weekly Digital Gram Scale Checks', text: 'Weigh your bird on a T-perch digital scale every Sunday morning before breakfast. A 10% weight drop is an urgent clinical indicator.' },
        { label: '12-Hour Dark Sleep Cycle', text: 'Long artificial evening light mimics summer breeding days, triggering chronic egg-laying in females and territorial biting.' }
      ],
      routineTip: {
        title: 'Track Avian Gram Weights & Cage Routines in PetHorizon',
        text: 'Log weekly gram weights, molt cycles, and morning chop removal reminders across your household in PetHorizon.',
        actionLabel: 'Track Bird Routine in PetHorizon'
      }
    }
  ]
};

export const rescueDog333Article: FullBlogArticle = {
  slug: 'rescue-dog-3-3-3-rule-decompression-routine-guide',
  readTime: '15 min read',
  overviewSummary:
    'Adopting a rescue dog or shelter puppy is deeply rewarding, but the transition from a loud kennel environment to a residential home triggers acute cortisol elevation. The veterinary behavior "3-3-3 Rule" maps out what happens during the first 3 days, 3 weeks, and 3 months after adoption—and how predictable daily routines accelerate emotional decompression.',
  sections: [
    {
      id: 'understanding-the-3-3-3-timeline',
      heading: 'The 3-3-3 Rescue Dog Decompression Matrix Explained',
      intro:
        'Canine cortisol (stress hormone) takes up to 72 hours to clear the bloodstream after a single stressful event. During shelter transport and rehoming, your new dog is operating in survival mode.',
      paragraphs: [
        'Phase 1 — The First 3 Days (Decompression & Overwhelm): Newly adopted dogs often hide in crates, refuse food or water for 24 hours, pace, or experience stress diarrhea. Conversely, some shut down completely, appearing unusually quiet until they feel safe.',
        'Phase 2 — The First 3 Weeks (Settling In & Testing Boundaries): As adrenaline fades, your dog begins learning your household’s daily rhythm. True personality traits—and potential behavioral hurdles like leash reactivity, counter-surfing, or separation whining—typically surface during weeks two and three.',
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
        { label: 'Double-Leash Safety for Flight Risk', text: 'Newly adopted dogs can slip collars when startled by city traffic; pair a martingale collar with a secure Y-front harness.' }
      ],
      routineTip: {
        title: 'Coordinate Your Rescue Dog’s 3-3-3 Routine in PetHorizon',
        text: 'Share a unified daily feeding, walk, and potty timetable with your household via PetHorizon Family Hub.',
        actionLabel: 'Build Rescue Routine Free'
      }
    }
  ]
};
