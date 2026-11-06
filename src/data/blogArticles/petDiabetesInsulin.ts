import { FullBlogArticle } from './types';

export const petDiabetesInsulinArticle: FullBlogArticle = {
  slug: 'dog-cat-diabetes-insulin-feeding-schedule-guide',
  readTime: '5 min read',
  overviewSummary:
    'Managing diabetes mellitus in dogs and cats hinges on strict 12-hour coordination between measured meals and subcutaneous insulin injections. Administering insulin on an empty stomach—or accidentally delivering a double dose between uncoordinated family members—can trigger fatal hypoglycemic neuroglycopenia within minutes. Review AAHA diabetes management guidelines, U-40 vs U-100 syringe safety, missed-dose decision trees, and PetHorizon’s Anti-Collision Care Lock.',
  sections: [
    {
      id: 'twelve-hour-insulin-meal-rule',
      heading: 'The Strict 12-Hour Meal & Insulin Synchronization Protocol',
      intro:
        'Canine and feline diabetes possess fundamentally different underlying pathophysiologies, yet both demand rigorous 12-hour chronobiology to maintain safe blood glucose levels.',
      paragraphs: [
        'Canine diabetes is almost universally insulin-dependent (resembling human Type 1 diabetes), resulting from autoimmune destruction of pancreatic beta cells. Dogs require lifelong twice-daily exogenous insulin. In contrast, feline diabetes closely mirrors human Type 2 diabetes characterized by insulin resistance and amyloid deposition in the islets of Langerhans. Remarkably, when cats are diagnosed promptly and managed with ultra-low-carbohydrate wet diets alongside glargine or protamine zinc insulin (PZI), up to 30% to 50% achieve clinical diabetic remission within the first 3 to 4 months.',
        'Regardless of species, the golden veterinary rule is: "Feed First, Confirm Appetite, Then Inject." Your pet must consume at least 50% to 75% of their measured meal before the morning or evening insulin injection is administered. This ensures that exogenous insulin peaks synchronously with intestinal glucose absorption, preventing postprandial hypoglycemia.',
        'Space injections strictly 12 hours apart (e.g., 7:00 AM and 7:00 PM). A variation of plus or minus 30 minutes is acceptable; shifts beyond 2 hours disrupt the glycaemic curve and require veterinary re-calibration.'
      ],
      warningBox: {
        title: 'Syringe Calibration Warning: Fatal U-40 vs U-100 Errors',
        text: 'Veterinary insulins (Vetsulin/Caninsulin, ProZinc) are formulated at 40 Units/mL and MUST ONLY be drawn with red-capped U-40 syringes. Human insulins (Glargine/Lantus, Humulin N) are 100 Units/mL and use orange-capped U-100 syringes. Drawing U-40 insulin into a U-100 syringe results in a 2.5-times fatal overdose error. Never interchange syringe types.'
      }
    },
    {
      id: 'dietary-architecture-and-calories',
      heading: 'Dietary Architecture: Fiber vs Ultra-Low Carbohydrate Formulations',
      intro:
        'Dietary macronutrient composition directly dictates the shape and predictability of your pet’s daily blood glucose curve.',
      paragraphs: [
        'For diabetic dogs, diets enriched with insoluble and soluble fiber (complex carbohydrates like barley, oats, and beet pulp) slow gastric emptying and blunt postprandial glucose surges. Measure exact meal grams using a digital kitchen scale rather than volumetric cups to eliminate portion variability.',
        'For diabetic cats, the dietary mandate is reversed: cats are obligate carnivores with negligible hepatic glucokinase activity. High-carbohydrate dry kibble inundates feline metabolism with excess glucose. Switching diabetic cats to high-protein, ultra-low-carbohydrate canned food (less than 10% metabolizable energy from carbs) dramatically lowers exogenous insulin requirements and is the single most potent trigger for feline diabetic remission.',
        'Calculate your pet’s precise daily caloric targets with our [pet calorie calculator](/tools/pet-calorie-calculator) and review clinical formulas in our [pet calorie calculation guide](/blogs/pet-calorie-calculator-feeding-guide-apop) and [dog feeding schedule by age](/blogs/dog-feeding-schedule-by-age-puppy-to-adult). Diabetic cats frequently present with concurrent chronic kidney disease; review hydration balance in our [feline kidney disease hydration protocol](/blogs/feline-kidney-disease-dehydration-cornell).'
      ],
      table: {
        headers: ['Species', 'Primary Diabetes Type', 'Optimal Dietary Architecture', 'Key Clinical Goal'],
        rows: [
          ['Canine (Dog)', 'Type 1 (Absolute deficiency)', 'High complex fiber, moderate protein, low fat', 'Blunt post-meal glucose spike; steady curve'],
          ['Feline (Cat)', 'Type 2 (Insulin resistance)', 'Ultra-low carb wet food (< 10% ME), high protein', 'Reversal of glucose toxicity; clinical remission']
        ]
      }
    },
    {
      id: 'missed-dose-and-uncertainty-rules',
      heading: 'The Missed, Delayed, or Partial Dose Decision Protocol',
      intro:
        'When daily routines get chaotic, knowing how to react to a missed, vomited, or uncertain injection prevents deadly medication errors.',
      paragraphs: [
        'Hyperglycemia (high blood sugar) damages organs gradually over months, but Hypoglycemia (low blood sugar) kills within minutes. It is far safer for a pet to run moderately high for 12 hours than to receive a double dose or an unverified second injection.',
        'Never re-inject if the fur feels wet after pushing the plunger ("fur shot"). It is impossible to know how many units entered subcutaneously versus leaked onto the skin. Always wait until the next scheduled 12-hour window.'
      ],
      table: {
        headers: ['Scenario Encountered', 'Appetite / Dosing Observation', 'AAHA Veterinary Action Protocol'],
        rows: [
          ['Normal Meal Consumed', 'Pet eats 100% of measured meal', 'Administer full prescribed dose subcutaneously within 15 mins'],
          ['Refuses Meal / Vomits', 'Pet eats 0% of meal or vomits within 30 mins', 'DO NOT give full dose; contact vet (often 0% or half-dose advised)'],
          ['"Fur Shot" / Wet Fur', 'Needle pulled out or fur feels wet', 'NEVER re-dose; record incident and wait for next 12-hour window'],
          ['Delayed by 1–2 Hours', 'Forgot morning injection until 8:30 AM', 'Administer regular dose and shift evening dose back accordingly'],
          ['Delayed by > 3 Hours', 'Caregiver returned late at noon', 'Skip dose entirely; resume full regular dose at evening window']
        ]
      }
    },
    {
      id: 'emergency-hypoglycemia-and-double-dosing',
      heading: 'Emergency Hypoglycemia Triage & Household Double-Dose Prevention',
      intro:
        'Accidental double-dosing by well-meaning spouses or roommates is one of the leading causes of fatal iatrogenic hypoglycemia reported by veterinary poison control centers.',
      paragraphs: [
        'Hypoglycemia occurs when blood glucose plunges below 60 mg/dL (3.3 mmol/L). Clinical signs progress rapidly from subtle lethargy and glassy eyes to drunken hind-limb ataxia, muscle tremors, head tilt, and full-blown tonic-clonic seizures. Review emergency triage in our [emergency vet symptoms guide](/blogs/emergency-vet-symptoms-red-flags-petmd) and keep oral syringes and Karo syrup stocked in your [pet first aid kit](/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan).',
        'Prevent accidental household dosing collisions by synchronizing family routines with PetHorizon’s Anti-Collision Care Lock: the moment one partner checks off the morning insulin dose, all family devices update in real time with an immutable timestamp. Explore household team protocols in our [household pet co-parenting routine guide](/blogs/household-pet-coparenting-feeding-routine-sync-worldwide).'
      ],
      stepByStep: {
        title: 'Emergency Hypoglycemia At-Home Action Steps',
        steps: [
          {
            number: 1,
            title: 'Step 1: Immediate Mucosal Sugar Absorption',
            description: 'If your pet is conscious but wobbly, rub 1 to 2 tablespoons of Karo syrup, maple syrup, or honey directly onto their gums. Do not force liquids down the throat if seizing.'
          },
          {
            number: 2,
            title: 'Step 2: Offer High-Protein Canned Food',
            description: 'Once alertness improves within 5 minutes, offer a small portion of canned wet food to sustain blood glucose levels.'
          },
          {
            number: 3,
            title: 'Step 3: Immediate 24/7 Veterinary ER Transport',
            description: 'Keep your pet wrapped in warm blankets (hypothermia often accompanies low blood sugar) and transport immediately for IV dextrose monitoring.'
          }
        ]
      },
      routineTip: {
        title: 'Lock In 12-Hour Insulin Reminders with PetHorizon',
        text: 'Configure locked 12-hour medication alarms and dose logs in PetHorizon to eliminate family double-dosing forever.',
        actionLabel: 'Set Up Insulin Alarms'
      }
    }
  ]
};

