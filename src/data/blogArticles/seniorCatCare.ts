import { FullBlogArticle } from './types';

export const seniorCatCareArticle: FullBlogArticle = {
  slug: 'senior-cat-care-health-diet-comfort-guide',
  readTime: '15 min read',
  overviewSummary:
    'Cats are masters of masking pain and weakness: an evolutionary survival trait that makes recognizing illness in older felines exceptionally challenging for pet parents. A senior cat does not slow down simply because of "old age"—underlying conditions like feline osteoarthritis (present in over 90% of cats over age 12), chronic kidney disease (CKD), systemic hypertension, and hyperthyroidism are frequently the true causes. This veterinary guide breaks down subtle pain indicators, high-moisture senior diets, home adaptations, and clinical screening protocols.',
  sections: [
    {
      id: 'subtle-signs-of-feline-aging',
      heading: 'Recognizing Subtle Signs of Aging: How Cats Signal Pain & Discomfort',
      intro:
        'Because cats rarely limp, whimper, or cry when experiencing chronic joint pain or metabolic illness, owners must look for subtle behavioral alterations.',
      paragraphs: [
        'Hesitation before jumping: A cat who previously leaped directly from the floor onto the kitchen counter who now calculates, hops onto a low chair first, or refuses jumping altogether is experiencing spinal or hip osteoarthritis.',
        'Changes in grooming habits: Unkempt, spiky fur along the spine and lower back indicates spinal stiffness preventing the cat from twisting to groom. Conversely, bald patches on the belly may reflect localized pain.',
        'Overgrown, thick claws: Senior cats retract claws less effectively and scratch sisal posts less frequently, causing nail husks to build up into thick, curled horns that can penetrate into paw pads.',
        'Increased vocalization at night: Loud wandering and meowing in dark hallways often points to feline cognitive dysfunction, sensory loss (fading eyesight/hearing), or hypertension related to kidney disease or hyperthyroidism.'
      ],
      table: {
        headers: ['Subtle Change', 'Likely Clinical Culprit', 'Recommended Diagnostic Step'],
        rows: [
          ['Hesitating to jump up/down', 'Feline Osteoarthritis (DJD)', 'Orthopedic exam, feline anti-NGF monoclonal antibody (Solensia)'],
          ['Increased thirst & larger litter clumps', 'Chronic Kidney Disease / Diabetes Mellitus', 'Senior blood panel (BUN/Creatinine/SDMA) & Urinalysis'],
          ['Voracious appetite with weight loss', 'Feline Hyperthyroidism', 'Serum Total T4 blood test, cardiac auscultation'],
          ['Nighttime yowling & disorientation', 'Hypertension / Cognitive Dysfunction', 'Doppler blood pressure measurement, retinal exam']
        ]
      }
    },
    {
      id: 'senior-feline-nutrition-hydration',
      heading: 'Senior Feline Nutrition: High-Digestibility Protein & Kidney Protection',
      intro:
        'Unlike senior dogs whose caloric needs typically decrease, geriatric cats (12+ years) actually experience a decline in digestive efficiency, requiring easily absorbable proteins and higher caloric density to prevent muscle wasting (sarcopenia).',
      paragraphs: [
        'Unless a cat has advanced kidney failure requiring strict protein and phosphorus restriction under veterinary direction, senior cats need high biological value animal proteins (poultry, rabbit, egg) to maintain lean muscle mass.',
        'Hydration remains the critical cornerstone of senior feline care. Provide multiple shallow ceramic water fountains and mix warm bone broth or warm water into all wet food meals to preserve kidney nephrons and prevent hard, painful fecal constipation.'
      ],
      warningBox: {
        title: 'Weigh Your Senior Cat Monthly',
        text: 'A weight drop of just 8 ounces (225 grams) in a 10-pound cat represents 5% of their total body mass—equivalent to a 150-pound human losing 7.5 pounds unexpectedly. Unintentional weight loss is the earliest clinical indicator of feline metabolic disease.'
      },
      routineTip: {
        title: 'Track Senior Cat Weight & Vitals in PetHorizon',
        text: 'Record monthly weight checks in PetHorizon to visualize trends on interactive weight curves. Receive reminders for semi-annual senior vet exams and bloodwork appointments.',
        actionLabel: 'Log Senior Cat Vitals in PetHorizon'
      }
    },
    {
      id: 'home-comfort-adaptations',
      heading: 'Home Comfort Adaptations for Senior Cats',
      intro:
        'Small modifications to your living space make a dramatic difference in a senior cat’s daily independence and comfort.',
      bulletPoints: [
        { label: 'Low-Entry Litter Boxes', text: 'Switch high-walled litter boxes for low-entry boxes (or shallow under-bed storage containers) with an entrance rim under 3 inches.' },
        { label: 'Pet Stairs & Bedside Ramps', text: 'Place fabric-covered ramps leading to favorite sofas, beds, and sunny window perches.' },
        { label: 'Heated Orthopedic Pads', text: 'Provide low-voltage, pet-safe self-warming or thermostatically controlled heated beds to soothe stiff arthritic joints.' },
        { label: 'Multiple Floor Resources', text: 'If living in a multi-story home, ensure food, water, and litter boxes exist on every level so the cat never has to navigate stairs in pain.' }
      ]
    }
  ]
};
