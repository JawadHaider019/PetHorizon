import { FullBlogArticle } from './types';

export const petDiabetesInsulinArticle: FullBlogArticle = {
  slug: 'dog-cat-diabetes-insulin-feeding-schedule-guide',
  readTime: '5 min read',
  overviewSummary:
    'Managing diabetes mellitus in dogs and cats hinges on strict 12-hour coordination between measured meals and subcutaneous insulin injections. Administering insulin on an empty stomach—or accidentally delivering a double dose between uncoordinated family members—can trigger life-threatening hypoglycemia. Review AAHA diabetes management guidelines, U-40 vs U-100 syringe concentration matching, missed-dose safety protocols, and PetHorizon’s Anti-Collision Care Lock.',
  sections: [
    {
      id: 'twelve-hour-insulin-meal-rule',
      heading: 'The Strict 12-Hour Meal & Insulin Synchronization Protocol',
      intro:
        'Canine and feline diabetes possess distinct underlying pathophysiologies, yet both demand rigorous 12-hour consistency to maintain stable blood glucose levels.',
      paragraphs: [
        'Canine diabetes is almost universally insulin-deficient (similar to human Type 1 diabetes), resulting from loss of pancreatic beta cells, requiring lifelong exogenous insulin. In contrast, feline diabetes frequently resembles human Type 2 diabetes characterized by insulin resistance and islet amyloid deposition. When cats are diagnosed promptly and managed with veterinary-prescribed ultra-low-carbohydrate wet diets alongside appropriate insulin (such as glargine or protamine zinc insulin), a meaningful proportion can achieve clinical diabetic remission.',
        'Regardless of species, the foundational veterinary rule is: "Feed First, Confirm Appetite, Then Inject." Your pet should consume their veterinary-prescribed meal portion before insulin is administered. This ensures that exogenous insulin action aligns with nutrient absorption from the gastrointestinal tract, preventing acute hypoglycemia.',
        'Injections are typically scheduled 12 hours apart (e.g., 7:00 AM and 7:00 PM). Always consult your treating veterinarian regarding acceptable schedule windows, as timing adjustments must be individualized to your pet’s specific insulin duration of action.'
      ],
      warningBox: {
        title: 'Critical Syringe Safety: Always Match Insulin Concentration',
        text: 'Insulins are formulated at different concentrations, most commonly U-40 (40 Units/mL, typical for veterinary products) or U-100 (100 Units/mL, typical for human products). U-40 insulin MUST ONLY be measured using a U-40 syringe, and U-100 insulin MUST ONLY be measured using a U-100 syringe. Never rely on syringe cap colors alone, as manufacturing standards vary. Always verify the printed concentration (Units/mL) on both the insulin vial label and the syringe barrel. Using mismatched syringes causes severe underdosing or fatal overdosing.'
      }
    },
    {
      id: 'dietary-architecture-and-calories',
      heading: 'Dietary Architecture: Fiber vs Low-Carbohydrate Formulations',
      intro:
        'Dietary composition directly impacts the predictability and shape of your pet’s daily blood glucose curve.',
      paragraphs: [
        'For diabetic dogs, diets enriched with balanced soluble and insoluble fiber help slow intestinal carbohydrate absorption and blunt postprandial glucose surges. Measuring meals with a digital kitchen scale rather than volumetric scoops provides consistent caloric intake from day to day.',
        'For diabetic cats, who are obligate carnivores, commercial dry foods high in carbohydrates can exacerbate glycemic variability. Veterinarians frequently recommend high-protein, ultra-low-carbohydrate canned formulations to reduce insulin requirements and support diabetic remission, provided there are no conflicting medical conditions.',
        'Calculate your pet’s baseline daily energy requirements with our [pet calorie calculator](/tools/pet-calorie-calculator) and review portioning principles in our [pet calorie calculation guide](/blogs/pet-calorie-calculator-feeding-guide-apop) and [dog feeding schedule by age](/blogs/dog-feeding-schedule-by-age-puppy-to-adult). Diabetic felines often present with concurrent renal disease; review fluid considerations in our [feline kidney disease hydration protocol](/blogs/feline-kidney-disease-dehydration-cornell).'
      ],
      table: {
        headers: ['Species', 'Common Diabetes Form', 'Typical Dietary Approach', 'Clinical Goal'],
        rows: [
          ['Canine (Dog)', 'Insulin-deficient (Type 1-like)', 'Balanced complex fiber, controlled fat', 'Smooth postprandial glucose absorption'],
          ['Feline (Cat)', 'Insulin-resistant (Type 2-like)', 'High protein, low-carbohydrate wet diet', 'Reduce glucose toxicity; support remission']
        ]
      }
    },
    {
      id: 'missed-dose-and-uncertainty-rules',
      heading: 'Handling Missed, Delayed, or Incomplete Injections',
      intro:
        'Understanding how to proceed during unexpected disruptions prevents dangerous insulin overdose errors. All dosing adjustments must follow your primary veterinarian’s pre-established protocol.',
      paragraphs: [
        'In veterinary diabetology, mild transient hyperglycemia is far less dangerous than acute hypoglycemia. While high blood sugar causes clinical signs over weeks or months, severe hypoglycemia can be fatal within minutes to hours. When in doubt, never administer extra insulin without direct veterinary guidance.',
        'If an injection is suspected to have leaked into the fur ("fur shot"), do not attempt to re-inject a second dose. Because it is impossible to determine how much insulin was absorbed subcutaneously versus lost on the coat, re-dosing creates severe risk of fatal hypoglycemia. Contact your veterinary clinic and document the occurrence.'
      ],
      table: {
        headers: ['Situation Encountered', 'Appetite / Dose Status', 'Veterinary Protocol Guideline'],
        rows: [
          ['Normal Meal Eaten', 'Pet finishes prescribed meal', 'Administer prescribed insulin dose subcutaneously per vet instructions'],
          ['Refuses Food or Vomits', 'Pet eats 0% or vomits meal', 'DO NOT administer regular insulin dose; call your veterinarian for specific instruction'],
          ['Incomplete / "Fur Shot"', 'Needle slips or fur feels wet', 'NEVER administer a second injection; wait until next scheduled window per vet plan'],
          ['Delayed Injection', 'Caregiver is late for scheduled dose', 'Follow your veterinarian’s specific schedule-adjustment instructions; never double the next dose']
        ]
      }
    },
    {
      id: 'emergency-hypoglycemia-and-double-dosing',
      heading: 'Recognizing Hypoglycemia & Preventing Family Dosing Collisions',
      intro:
        'Accidental double-dosing between uncoordinated family members is one of the most serious causes of iatrogenic hypoglycemia in diabetic pets.',
      paragraphs: [
        'Hypoglycemia (low blood sugar) occurs when insulin activity exceeds available circulating glucose. Early warning signs include restlessness, glazed eyes, weakness, hind-limb wobbling (ataxia), or profound lethargy. If left untreated, severe hypoglycemia progresses to muscle tremors, hypothermia, seizures, coma, and death. Review emergency clinical signs in our [emergency vet symptoms guide](/blogs/emergency-vet-symptoms-red-flags-petmd) and maintain emergency supplies in your [pet first aid kit](/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan).',
        'If your pet exhibits signs of hypoglycemia but is conscious and able to swallow, rub a high-sugar syrup (such as maple syrup, corn syrup, or honey) directly onto their gums with your finger. Do not pour liquids down their throat if they are unconscious or seizing, as this creates a choking and aspiration hazard. Contact your primary veterinarian or transport your pet to an emergency hospital immediately.',
        'Prevent household double-dosing by using PetHorizon’s Anti-Collision Care Lock: whenever a family member logs an insulin administration, connected household devices display an active timestamped confirmation. Learn more about shared pet care in our [household pet co-parenting routine guide](/blogs/household-pet-coparenting-feeding-routine-sync-worldwide).'
      ],
      stepByStep: {
        title: 'Emergency Hypoglycemia Response Steps (AAHA Aligned)',
        steps: [
          {
            number: 1,
            title: 'Step 1: Check Symptoms & Assess Consciousness',
            description: 'Observe for lethargy, disorientation, weakness, or tremors. If conscious, proceed with immediate oral sugar.'
          },
          {
            number: 2,
            title: 'Step 2: Apply Sugar Syrup to Mucous Membranes',
            description: 'Carefully rub honey or corn syrup directly onto the gums. If your pet can swallow safely, offer a small portion of their regular food.'
          },
          {
            number: 3,
            title: 'Step 3: Seek Immediate Veterinary Emergency Care',
            description: 'Even if your pet appears to improve temporarily, veterinary evaluation is essential to stabilize glucose and monitor for rebound hypoglycemia.'
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
