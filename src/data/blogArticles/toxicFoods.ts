import { FullBlogArticle } from './types';

export const toxicFoodsArticle: FullBlogArticle = {
  slug: 'toxic-foods-dogs-cats-poison-checklist',
  overviewSummary:
    'Pet toxicity emergencies require immediate, decisive action. This accredited clinical reference outlines the most common household toxins, dangerous dosage thresholds, symptom progression stages, and immediate life-saving triage protocols before reaching the emergency animal hospital.',
  sections: [
    {
      id: 'emergency-protocol',
      heading: 'Critical 15-Minute Emergency Action Protocol',
      intro:
        'If you suspect your dog or cat ingested a toxic substance, minutes matter. Follow these clinical steps in the first quarter-hour:',
      bulletPoints: [
        {
          label: 'Step 1: Secure the Toxin Packaging',
          text: 'Immediately remove remaining items from your pet. Save the box, label, ingredients list, or wrapper to present to the attending veterinarian.'
        },
        {
          label: 'Step 2: Do NOT Induce Vomiting Without Vet Approval',
          text: 'Administering hydrogen peroxide or salt can cause fatal chemical aspiration, corrosive esophageal burns, or hypernatremia. Never induce emesis unless explicitly instructed by a licensed veterinarian.'
        },
        {
          label: 'Step 3: Call Ahead to Your ER Clinic',
          text: 'Alert the triage team with your pet’s estimated weight, the ingested item, and approximate time elapsed so emergency oxygen and decontamination drugs are prepared prior to arrival.'
        }
      ],
      warningBox: {
        title: 'Immediate Poison Hotlines',
        text: 'ASPCA Animal Poison Control Center: (888) 426-4435 • Pet Poison Helpline: (855) 764-7661. Available 24/7/365 across the US and Canada.'
      }
    },
    {
      id: 'toxic-comparison-table',
      heading: 'High-Risk Household Toxins & Danger Thresholds',
      intro:
        'Different compounds target distinct organ systems. Review the toxic principles and clinical danger levels below:',
      table: {
        headers: ['Substance', 'Toxic Principle', 'Primary Organ Target', 'Dangerous Threshold'],
        rows: [
          ['Dark Chocolate & Cocoa', 'Theobromine & Caffeine', 'Cardiovascular & CNS', '0.5 oz dark chocolate per 10 lbs'],
          ['Xylitol (Birch Bark Sweetener)', 'Massive Insulin Secretion', 'Liver & Pancreas', '0.05 g/lb (severe hypoglycemia in 30m)'],
          ['Grapes, Raisins & Currants', 'Tartaric Acid', 'Renal / Kidneys', 'Idiosyncratic (even 1-2 grapes can trigger failure)'],
          ['Onions, Garlic & Chives', 'N-propyl Disulfide', 'Erythrocytes (Red Blood Cells)', 'Heinz body anemia at 0.5% body weight'],
          ['True Lilies (Easter, Tiger, Day)', 'Water-Soluble Glycosides', 'Feline Renal Tubules', 'Microscopic pollen contact in cats']
        ]
      }
    },
    {
      id: 'symptom-stages',
      heading: 'Toxicity Symptom Progression Timeline',
      intro:
        'Recognizing toxicity symptoms early dramatically increases treatment success rates:',
      bulletPoints: [
        {
          label: 'Stage 1 (0 to 2 Hours)',
          text: 'Profuse hypersalivation, lip-licking, sudden pacing, restlessness, vomiting, or diarrhea.'
        },
        {
          label: 'Stage 2 (2 to 6 Hours)',
          text: 'Lethargy, muscle tremors, ataxia (drunken-gait stumbling), elevated heart rate, and panting.'
        },
        {
          label: 'Stage 3 (6 to 24+ Hours)',
          text: 'Seizures, cardiac arrhythmias, jaundice (yellowing gums), lack of urination (anuria), and organ collapse.'
        }
      ]
    },
    {
      id: 'pethorizon-prevention',
      heading: 'Preventing Ingestion with Pet Horizon Daily Tracking',
      intro:
        'Prevention and fast access to health records are your pet’s strongest shield against accidental poisoning.',
      routineTip: {
        title: 'Emergency Preparedness Checklist',
        text: 'Store your primary vet and local 24/7 emergency clinic numbers in Pet Horizon’s Quick Contacts. Use the Daily Activity Journal to log any dietary changes, treat brands, or suspicious gastrointestinal events.',
        actionLabel: 'Setup Emergency Vet Contacts in Pet Horizon'
      }
    }
  ]
};
