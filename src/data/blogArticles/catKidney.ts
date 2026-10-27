import { FullBlogArticle } from './types';

export const catKidneyArticle: FullBlogArticle = {
  slug: 'feline-kidney-disease-dehydration-cornell',
  readTime: '15 min read',
  overviewSummary:
    'Chronic Kidney Disease (CKD) is one of the leading causes of morbidity and mortality in aging felines, affecting over 30% of cats over 10 years of age and more than 80% of cats aged 15 and older. Because cats evolved as desert animals with highly efficient kidneys, they naturally mask pain and gradual physical decline. By the time classical signs like overt lethargy and emaciation appear, over two-thirds of functional renal nephrons have already suffered irreversible fibrosis. This clinical guide breaks down the International Renal Interest Society (IRIS) staging criteria, early diagnostic biomarkers (SDMA and USG), the Cornell Feline Health Center hydration protocol, and home fluid tracking.',
  sections: [
    {
      id: 'ckd-pathophysiology-and-staging',
      heading: 'Understanding Feline CKD: Nephron Loss and the IRIS Staging System',
      intro:
        'The feline kidney contains approximately 200,000 microscopic filtration units called nephrons. Unlike epithelial skin cells, mammalian nephrons cannot regenerate once destroyed by chronic inflammation, ischemic events, or age-related degeneration.',
      paragraphs: [
        'The International Renal Interest Society (IRIS) classifies feline CKD into four distinct stages based on stable, fasted blood creatinine and symmetric dimethylarginine (SDMA) concentrations, combined with substaging for proteinuria (UPC ratio) and systemic arterial blood pressure.',
        'Stage 1 (Non-Azotemic CKD): Blood creatinine is normal (< 1.6 mg/dL), but blood SDMA is persistently elevated (> 14 mcg/dL) or kidneys show abnormal structural architecture on abdominal ultrasound. Glomerular filtration rate is reduced by 30% to 50%, yet cats show zero outward symptoms.',
        'Stage 2 (Mild Renal Azotemia): Creatinine ranges from 1.6 to 2.8 mg/dL. The kidneys lose their concentrating ability, causing compensatory polydipsia (excessive thirst) and polyuria (excessive urination).',
        'Stages 3 and 4 (Moderate to Severe Uremic Azotemia): Creatinine climbs above 2.9 to > 5.0 mg/dL. Waste nitrogen products build up in the bloodstream, triggering uremic gastritis, oral ulcerations, anemia from erythropoietin deficiency, and severe muscle wasting.'
      ],
      table: {
        headers: ['IRIS CKD Stage', 'Blood Creatinine (mg/dL)', 'Blood SDMA (mcg/dL)', 'Urine Specific Gravity (USG)', 'Clinical Focus & Management'],
        rows: [
          ['Stage 1 (Early / Silent)', '< 1.6 mg/dL', '14 – 17 mcg/dL', 'Variable (> 1.035 or dropping)', 'Identify toxins/infections, discontinue nephrotoxic drugs, switch to wet food'],
          ['Stage 2 (Compensated)', '1.6 – 2.8 mg/dL', '18 – 25 mcg/dL', '< 1.035 (Dilute / Isosthenuric)', 'Phosphorus-controlled renal diet, maintain hydration, treat hypertension'],
          ['Stage 3 (Moderate)', '2.9 – 5.0 mg/dL', '26 – 45 mcg/dL', '< 1.025 (Fixed isosthenuria)', 'Phosphate binders, anti-nausea meds, potassium supplementation, subcutaneous fluids'],
          ['Stage 4 (Severe / End-Stage)', '> 5.0 mg/dL', '> 45 mcg/dL', '< 1.015 (Severe dilution)', 'Daily subcutaneous fluids, manage anemia (EPO stimulating agents), palliative comfort care']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=1000&auto=format&fit=crop&q=80',
        caption: 'Monitoring feline litter clump volume and water bowl visits provides the earliest behavioral warning of advancing renal disease.',
        altText: 'Senior tabby cat drinking fresh filtered water from ceramic fountain'
      }
    },
    {
      id: 'early-warning-signs-and-triage',
      heading: '5 Early Warning Signs Pet Parents Frequently Overlook',
      intro:
        'Because cats instinctually hide vulnerability, owners frequently attribute subtle shifts in litter box habits or grooming to "normal aging" until a crisis occurs.',
      paragraphs: [
        '1. Expanding Litter Box Clump Size: When kidneys lose the ability to concentrate urine, cats produce vast volumes of pale, dilute urine. A litter clump that expands from the size of a golf ball to that of an orange indicates significant loss of concentrating capability.',
        '2. The Scruff "Tent" Test (Subclinical Dehydration): Gently pinch the skin along your cat’s shoulder blades and release. In a hydrated cat, it snaps back instantly. If it hesitates, folds, or tents for 2 to 3 seconds, systemic fluid deficits exceed 5% to 7%.',
        '3. Dry or Tacky Oral Mucous Membranes: Run your index finger along the upper gumline above the canine tooth. Healthy gums feel slick, moist, and slippery. Gums that feel sticky, tacky, or dry signify moderate to severe dehydration.',
        '4. Slouching or Hovering Over Water Bowls Without Drinking: Feline uremia causes chronic gastric hyperacidity and nausea. Cats often feel intense thirst yet hesitate or hover over the bowl because looking down triggers esophageal acid reflux.',
        '5. Gradual Weight Loss Along the Spine (Sarcopenia): Muscle wasting along the dorsal spine and pelvis is a hallmark of protein-energy wasting in advancing CKD. Weighing your senior cat monthly is vital.'
      ],
      warningBox: {
        title: 'Emergency Red Flag: Sudden Blindness or Dilated Pupils',
        text: 'Over 60% of cats with Stage 2 to 4 CKD develop systemic arterial hypertension (high blood pressure). Sudden bilateral pupil dilation, disoriented vocalizing, or bumping into walls signals acute hypertensive retinal detachment—a veterinary emergency requiring blood pressure reduction within 24 hours to restore sight.'
      }
    },
    {
      id: 'cornell-feline-hydration-protocol',
      heading: 'The Cornell Moisture & Hydration Protocol: Preserving Surviving Nephrons',
      intro:
        'Domestic cats descended from the African wildcat (*Felis lybica*) and possess an inherently blunt thirst response. In nature, 70% to 75% of a cat’s water intake comes directly from fresh prey.',
      paragraphs: [
        'Feeding dry extruded kibble (8% to 10% moisture) forces the feline kidney to work at peak concentration capacity for a lifetime. Switching to moisture-rich canned formulations (78% to 82% water) or adding rehydration toppers instantly doubles total daily fluid throughput, diluting toxic nitrogenous metabolites.',
        'Veterinary studies conducted at the Cornell Feline Health Center confirm that flowing, aerated water from stainless steel or ceramic pet fountains increases voluntary feline water consumption by up to 40% compared to stagnant standing bowls.',
        'Subcutaneous Fluid Therapy: In IRIS Stage 3 and 4, veterinary teams instruct pet parents on administering sterile Lactated Ringer’s Solution (LRS) under the skin at home (typically 100 mL every 1 to 3 days). Warming the fluid bag in a warm water bath to body temperature (100°F / 38°C) transforms the procedure into a comfortable, soothing daily routine.'
      ],
      stepByStep: {
        title: '5-Step Feline Home Hydration Habituation',
        steps: [
          { number: 1, title: 'Transition to 100% Canned Wet Food', description: 'Phase out dry kibble over 10 days by mixing increasing ratios of warm canned renal food.' },
          { number: 2, title: 'Incorporate Sodium-Free Bone Broths', description: 'Add 2 tablespoons of warm, plain, unsalted chicken or bone broth directly onto wet food meals.' },
          { number: 3, title: 'Deploy Aerated Water Fountains', description: 'Place stainless steel fountains in quiet living areas away from food bowls and litter boxes.' },
          { number: 4, title: 'Add Multiple Glass & Ceramic Water Stations', description: 'Distribute shallow, wide bowls across multiple rooms so cats can drink without whispering their whiskers against rims.' },
          { number: 5, title: 'Implement Home Subcutaneous Fluids When Prescribed', description: 'Administer veterinary-prescribed fluids using a gentle 18-to-20 gauge butterfly catheter needle in a calm lap setting.' }
        ]
      },
      routineTip: {
        title: 'Track Senior Cat Hydration & Weight in PetHorizon',
        text: 'Record daily wet meal portions, water refills, and monthly weigh-ins in PetHorizon. Export visual weight curves and medication schedules directly to your veterinarian to optimize senior renal care.',
        actionLabel: 'Track Cat Renal Health in PetHorizon'
      }
    },
    {
      id: 'dietary-phosphorus-and-protein-balance',
      heading: 'Dietary Management: The Critical Role of Phosphorus Restriction',
      intro:
        'Phosphorus retention is the primary driver of secondary renal hyperparathyroidism, soft-tissue mineralization, and accelerated nephron destruction in felines.',
      paragraphs: [
        'Restricting dietary phosphorus is the single most proven clinical intervention that prolongs life in cats with Stage 2, 3, and 4 CKD—extending median survival times by over 200% compared to standard maintenance adult diets.',
        'High-quality, easily digestible proteins should not be severely restricted in early CKD. Unnecessary severe protein starvation triggers muscle wasting (sarcopenia) and weight loss. Prescription renal diets balance moderate, ultra-pure biological value proteins with strict phosphorus ceilings (< 0.5% dry matter basis).'
      ],
      bulletPoints: [
        { label: 'Phosphorus Ceilings', text: 'Select renal diets formulated with dry-matter phosphorus under 0.4% to 0.6% to prevent mineral accumulation.' },
        { label: 'Phosphate Binders', text: 'If blood phosphorus remains above 4.6 mg/dL despite a renal diet, mix veterinary phosphate binders (aluminum hydroxide or sevelamer) into food.' },
        { label: 'Potassium Support', text: 'Failing kidneys leak potassium in urine; hypokalemia causes neck muscle weakness (ventroflexion) requiring potassium gluconate supplementation.' },
        { label: 'B-Complex Vitamins', text: 'Polyuria flushes water-soluble B vitamins; daily replenishment supports feline appetite, red blood cell synthesis, and neurological health.' }
      ]
    }
  ]
};
