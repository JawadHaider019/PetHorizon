import { FullBlogArticle } from './types';

export const dogDentalCareArticle: FullBlogArticle = {
  slug: 'dog-dental-care-brushing-teeth-periodontal-guide',
  readTime: '14 min read',
  overviewSummary:
    'Periodontal disease is the single most common clinical condition diagnosed in adult dogs: veterinary studies show that over 80% of dogs over the age of three show active signs of oral disease. Left untreated, bacteria living in subgingival plaque enter the bloodstream through inflamed gums, causing microscopic micro-abscesses in the heart valves, liver, and kidneys. Daily tooth brushing and dental hygiene can extend your dog’s life expectancy by 2 to 4 years. This veterinary guide breaks down tooth brushing habituation, the VOHC certification seal, and veterinary cleaning protocols.',
  sections: [
    {
      id: 'periodontal-disease-pathology',
      heading: 'The Progression of Periodontal Disease: Plaque to Systemic Organ Damage',
      intro:
        'Canine dental disease starts quietly. Plaque—a sticky biofilm of oral bacteria and salivary glycoproteins—forms across tooth enamel within 24 hours after eating.',
      paragraphs: [
        'Within 48 to 72 hours, minerals in canine saliva combine with plaque to form rock-hard calculus (tartar). Tartar provides a porous surface for anaerobic bacteria to migrate under the gumline.',
        'Stage 1 (Gingivitis) is reversible: gums swell, redden, and bleed easily upon contact. At this stage, daily home brushing can restore gum health.',
        'Stages 2 to 4 (Periodontitis) involve irreversible destruction of periodontal ligaments and alveolar bone. Teeth loosen, roots develop abscesses, and jawbones can fracture under minor chewing stress.',
        'Most dangerously, bacteremia from severe dental disease places continuous inflammatory stress on systemic organs, predisposing dogs to mitral valve endocarditis, hepatic fibrosis, and chronic renal failure.'
      ],
      table: {
        headers: ['Periodontal Stage', 'Clinical Signs', 'Bone Loss', 'Treatment Required'],
        rows: [
          ['Stage 1: Gingivitis', 'Red, inflamed gum margins, mild halitosis', '0% bone loss', 'Daily home brushing + professional cleaning'],
          ['Stage 2: Early Periodontitis', 'Gums bleed readily, tartar accumulation', '< 25% root attachment loss', 'Subgingival ultrasonic scaling + polishing'],
          ['Stage 3: Moderate Periodontitis', 'Gum recession, deep periodontal pockets', '25% – 50% bone loss', 'Advanced scaling, root planing, antibiotics'],
          ['Stage 4: Severe Periodontitis', 'Loose/mobile teeth, pus discharge, severe pain', '> 50% bone loss', 'Surgical extraction of affected teeth']
        ]
      },
      warningBox: {
        title: 'Never Use Human Toothpaste for Dogs',
        text: 'Human toothpaste contains foaming detergents (sodium lauryl sulfate) that upset canine stomachs, and often includes Xylitol (birch bark sweetener), an artificial sweetener that causes catastrophic hypoglycemic liver failure in dogs within 30 minutes.'
      }
    },
    {
      id: 'step-by-step-tooth-brushing-guide',
      heading: 'How to Habituate Your Dog to Tooth Brushing in 7 Days',
      intro:
        'Do not plunge a hard-bristled brush into an unfamiliar dog’s mouth on day one. Follow this positive reinforcement progression using poultry or beef-flavored enzymatic dog toothpaste.',
      stepByStep: {
        title: 'The 7-Day Dog Tooth Brushing Progression',
        steps: [
          { number: 1, title: 'Day 1: Toothpaste Licking', description: 'Let your dog lick a pea-sized amount of poultry-flavored dog toothpaste directly off your finger as a delicious treat.' },
          { number: 2, title: 'Days 2–3: Finger Gum Rubbing', description: 'Dip your finger in toothpaste, gently lift the upper lip, and massage the outside surfaces of the upper canine teeth for 5 seconds.' },
          { number: 3, title: 'Days 4–5: Silicone Finger Brush Introduction', description: 'Slip a soft silicone finger brush over your index finger and gently brush the outer front and premolar teeth in circular motions.' },
          { number: 4, title: 'Days 6–7: Full Toothbrush & Back Molars', description: 'Introduce an angled dual-head pet toothbrush. Target the upper back carnassial teeth (the large molars where heavy calculus builds up).' }
        ]
      },
      paragraphs: [
        'Focus on the outer surfaces of the upper teeth where the salivary parotid ducts deposit minerals. Dogs rarely accumulate heavy tartar on the inner tongue side because their rough tongue provides natural mechanical friction.',
        'Keep sessions short—30 to 60 seconds total—and always end with an enthusiastic verbal reward and a walk or favorite toy play.'
      ],
      routineTip: {
        title: 'Track Dental Care Milestones in PetHorizon',
        text: 'Log brushing sessions and annual veterinary dental cleanings in PetHorizon. Receive weekly reminders to maintain oral hygiene and upload veterinary dental x-ray reports to your health vault.',
        actionLabel: 'Log Dental Routine in PetHorizon'
      }
    },
    {
      id: 'vohc-chews-and-professional-cleanings',
      heading: 'Dental Chews, Water Additives & Anesthesia-Free Cleaning Truths',
      intro:
        'With hundreds of dental treats on the market, pet parents must know which products have clinical evidence and which are marketing hype.',
      paragraphs: [
        'Always look for the Veterinary Oral Health Council (VOHC) Seal of Acceptance on chew boxes. The VOHC is an independent clinical panel that verifies whether a product achieves at least a 20% reduction in plaque or calculus under double-blind clinical trials.',
        'Beware of "anesthesia-free" dental scraping services offered at grooming salons: scraping tartar with hand instruments without anesthesia only cosmeticizes visible crown enamel while leaving subgingival plaque untouched. Worse, it scratches the enamel, creating micro-grooves that accelerate future bacterial colonization.',
        'A proper veterinary dental procedure requires general endotracheal anesthesia so the veterinarian can probe pocket depths, take full-mouth dental radiographs (x-rays), and scale plaque beneath the gumline where disease truly lives.'
      ],
      bulletPoints: [
        { label: 'Look for VOHC Seal', text: 'Select dental chews, diets, or water additives that carry the official VOHC clinical seal.' },
        { label: 'Avoid Rock-Hard Chews', text: 'Bones, antlers, and nylon toys break carnassial teeth; if you cannot indent the chew with your thumbnail, it is too hard for canine enamel.' },
        { label: 'Annual Oral Exams', text: 'Schedule an annual oral veterinary checkup during routine vaccination appointments.' }
      ]
    }
  ]
};
