import { FullBlogArticle } from './types';

export const seniorCatCareArticle: FullBlogArticle = {
  slug: 'senior-cat-care-health-diet-comfort-guide',
  readTime: '16 min read',
  overviewSummary:
    'Cats are masters of masking pain and weakness—an evolutionary adaptation developed by small solitary predators to avoid attracting larger carnivores in the wild. Consequently, an older cat does not slow down simply due to "normal old age"; underlying conditions like feline degenerative joint disease (present in over 90% of cats over age 12), chronic kidney disease, hyperthyroidism, and systemic hypertension are almost invariably the true clinical culprits. This veterinary guide breaks down subtle feline pain markers, geriatric digestive physiology, home accessibility adaptations, and clinical screening protocols.',
  sections: [
    {
      id: 'feline-lifestage-and-subtle-pain',
      heading: 'The Feline Aging Matrix: Mature, Senior & Geriatric Life Stages',
      intro:
        'The American Association of Feline Practitioners (AAFP) categorizes feline aging into three distinct advanced stages based on physiological and metabolic benchmarks:',
      paragraphs: [
        'Mature (7 to 10 Years): Feline metabolic rate begins to slow, predisposing sedentary indoor cats to middle-aged obesity and early insulin resistance.',
        'Senior (11 to 14 Years): The critical transition window where subclinical degenerative diseases (osteoarthritis, chronic kidney disease, hyperthyroidism, dental resorptive lesions) begin their clinical onset. Semiannual veterinary screening becomes essential.',
        'Geriatric (15+ Years): Digestive absorption efficiency declines, muscle wasting (sarcopenia) accelerates, and sensory fading (vision, hearing) alters nocturnal behavior.',
        'Why Cats Don’t Limp: Canine arthritis typically affects one limb or joint, producing an obvious limp. In cats, osteoarthritis is almost always bilateral and symmetrical, affecting both hips, knees, or the lumbosacral spine equally. Because both sides hurt identically, cats do not limp; instead, they adapt by refusing to jump, taking multiple small "stair-step" hops, or eliminating outside the litter box because climbing high sides is excruciating.'
      ],
      table: {
        headers: ['Subtle Behavioral Shift', 'Likely Clinical Diagnosis', 'Underlying Pathology', 'Veterinary Intervention'],
        rows: [
          ['Hesitating before jumping up or down', 'Feline Degenerative Joint Disease (DJD)', 'Loss of articular cartilage in hips/spine', 'Frunevetmab (Solensia) anti-NGF injection, omega-3 EPA'],
          ['Expanding litter clump size & excessive drinking', 'Chronic Kidney Disease (CKD) / Diabetes', 'Loss of renal tubular concentrating ability', 'Senior chemistry panel (BUN/Creatinine/SDMA) & Urinalysis'],
          ['Voracious appetite with paradoxical weight loss', 'Feline Hyperthyroidism', 'Functional thyroid adenoma producing excess T4', 'Serum Total T4 test, methimazole or I-131 radioactive iodine'],
          ['Nighttime howling, pacing, bumping walls', 'Systemic Hypertension / Cognitive Dysfunction', 'Retinal bleeding, secondary renal/cardiac pressure', 'Doppler blood pressure screening, amlodipine therapy'],
          ['Matted, unkempt fur along dorsal spine', 'Spinal Arthritis / Periodontal Stomatitis', 'Inability to flex spine or mouth pain while licking', 'Pain management, professional dental scaling under anesthesia']
        ]
      }
    },
    {
      id: 'geriatric-feline-nutrition-and-hydration',
      heading: 'Geriatric Feline Nutrition: Reversing Muscle Wasting (Sarcopenia)',
      intro:
        'A critical physiological divergence occurs between senior dogs and senior cats: while aging dogs need fewer calories, cats over 12 years of age experience a marked decrease in digestive enzyme activity.',
      paragraphs: [
        'Clinical nutrition studies published by the Cornell Feline Health Center demonstrate that geriatric cats show a 20% to 30% reduction in their ability to digest dietary proteins and fats. If fed a restricted-protein senior diet prematurely, an older cat will catabolize their own skeletal muscle to meet basic amino acid requirements, resulting in severe sarcopenia.',
        'Unless a cat has advanced IRIS Stage 3 or 4 chronic kidney disease requiring strict phosphorus restriction, senior cats thrive on highly digestible, moisture-dense animal proteins (poultry, rabbit, egg white) with moderate phosphorus levels (< 0.6% dry matter).',
        'Combatting Subclinical Dehydration: Older cats experience an age-related decline in thirst drive and kidney filtration. Adding warm water, bone broth, or pureed toppers to canned food provides the 40 to 50 mL/kg of daily dietary water necessary to prevent chronic constipation and preserve renal health.'
      ],
      warningBox: {
        title: 'Monthly Weigh-Ins Are Non-Negotiable',
        text: 'A weight drop of just 8 ounces (225 grams) in a 10-pound senior cat represents a 5% loss of total body mass—equivalent to a 150-pound adult losing 7.5 pounds without dieting. Unintentional weight loss is the earliest, most sensitive indicator of feline hyperthyroidism, renal failure, or gastrointestinal lymphoma.'
      }
    },
    {
      id: 'home-comfort-and-solensia-breakthrough',
      heading: 'Home Modifications & The Solensia (Frunevetmab) Breakthrough',
      intro:
        'Managing pain and optimizing physical home accessibility restores dignity and independence to an aging feline.',
      paragraphs: [
        'Frunevetmab (Solensia): The first FDA-approved feline-specific monoclonal antibody targeting Nerve Growth Factor (NGF). Administered as a simple monthly subcutaneous injection by your veterinary team, it neutralizes pain signals without being metabolized by the liver or kidneys, making it exceptionally safe for cats with concurrent renal disease.',
        'Low-Rim Litter Boxes: Replace high-walled plastic boxes with shallow storage containers or low-entry senior cat pans with an entrance threshold under 2.5 inches. Ensure litter substrate is soft, fine-grained, and unscented to prevent arthritic paw discomfort.'
      ],
      bulletPoints: [
        { label: 'Bedside Ramps & Footstools', text: 'Place pet stairs or low padded ottomans next to sofas and beds so your senior cat never has to jump.' },
        { label: 'Low-Voltage Heated Beds', text: 'Provide thermostatically controlled pet-safe warming beds (capped at 102°F) to soothe stiff joints and counteract fading thermoregulation.' },
        { label: 'Vertical Territory Safety', text: 'Ensure high cat perches have wide intermediate landing platforms to prevent devastating falls from height.' },
        { label: 'Multi-Floor Resources', text: 'In multi-story homes, place food, water fountains, and litter boxes on every single floor so your cat never has to navigate painful stairs.' }
      ],
      routineTip: {
        title: 'Track Senior Cat Weight & Vitals in PetHorizon',
        text: 'Log monthly body weight, appetite scores, and litter box habits in PetHorizon. Review visual weight curves and set medication reminders for thyroid, blood pressure, and renal therapies.',
        actionLabel: 'Track Senior Cat Health in PetHorizon'
      }
    }
  ]
};
