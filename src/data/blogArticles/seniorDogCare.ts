import { FullBlogArticle } from './types';

export const seniorDogCareArticle: FullBlogArticle = {
  slug: 'senior-dog-care-mobility-nutrition-routine-guide',
  readTime: '16 min read',
  overviewSummary:
    'Thanks to modern veterinary diagnostics, high-quality clinical nutrition, and preventive wellness care, dogs are living longer lives than ever before. However, the aging process brings unique physiological shifts: osteoarthritis affects an estimated 80% of dogs over age eight, metabolic rates slow down, and cognitive dysfunction syndrome (CDS) can alter sleep-wake cycles. Caring for a senior dog requires compassionate environmental adaptation, targeted nutritional support, and proactive veterinary monitoring. This comprehensive guide details joint mobility protocols, senior nutrition adjustments, pain scoring, and daily routine adaptation.',
  sections: [
    {
      id: 'senior-lifestage-benchmarks',
      heading: 'When Is a Dog Officially Senior? Breed Size & Biological Aging',
      intro:
        'There is no universal calendar age for a dog entering their golden years. Biological aging in canines correlates directly with adult body weight and breed genetics.',
      paragraphs: [
        'Giant breeds (Great Danes, Mastiffs, Saint Bernards) reach their senior years around age 5 to 6, whereas small breeds (Chihuahuas, Toy Poodles, Dachshunds) may not experience senior physiological changes until age 10 to 12.',
        'Veterinary consensus recommends shifting from annual to bi-annual (every 6 months) wellness examinations once a dog reaches senior status. Detecting early renal insufficiency, cardiac murmurs, or endocrine disorders like Cushing’s disease during routine screening can add years of high-quality life.'
      ],
      table: {
        headers: ['Dog Size Category', 'Adult Weight Range', 'Senior Age Benchmark', 'Geriatric Age Window'],
        rows: [
          ['Small Breeds', 'Under 20 lbs (9 kg)', '10 – 11 Years', '14+ Years'],
          ['Medium Breeds', '21 – 50 lbs (10 – 23 kg)', '8 – 9 Years', '12 – 14 Years'],
          ['Large Breeds', '51 – 90 lbs (24 – 41 kg)', '7 – 8 Years', '10 – 12 Years'],
          ['Giant Breeds', '90+ lbs (41+ kg)', '5 – 6 Years', '8 – 10 Years']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=1000&auto=format&fit=crop&q=80',
        caption: 'Biannual veterinary exams and orthopedic support keep senior companions active, comfortable, and pain-free.',
        altText: 'Senior golden retriever resting comfortably on orthopedic dog bed'
      }
    },
    {
      id: 'managing-osteoarthritis-mobility',
      heading: 'Managing Canine Osteoarthritis: Multimodal Pain Management & Home Adaptation',
      intro:
        'Dogs rarely cry out in pain from chronic arthritis; instead, they suffer in silence by slowing down, sleeping more, or hesitating before stairs and car jumps.',
      paragraphs: [
        'Modern veterinary pain management uses a "multimodal" strategy combining targeted pharmaceuticals, nutraceuticals, physical rehabilitation, and environmental modification to attack pain from multiple biological pathways.',
        'Pharmaceutical interventions include modern non-steroidal anti-inflammatory drugs (NSAIDs like carprofen or meloxicam) and anti-nerve growth factor (anti-NGF) monoclonal antibodies (bedinvetmab / Librela injections), which provide monthly relief with minimal liver and kidney metabolic load.',
        'Nutritional joint support should prioritize high concentrations of EPA and DHA omega-3 fatty acids, glucosamine hydrochloride, chondroitin sulfate, and green-lipped mussel extract to slow down cartilage degradation.'
      ],
      stepByStep: {
        title: '5 Home Modifications for Arthritic Dogs',
        steps: [
          { number: 1, title: 'Non-Slip Rug Runners', description: 'Cover hardwood and tile floors with yoga mats or non-slip runners to prevent painful splaying injuries.' },
          { number: 2, title: 'Orthopedic Memory Foam Bedding', description: 'Provide dense orthopedic memory foam beds at least 4 inches thick to relieve pressure on hips and elbows.' },
          { number: 3, title: 'Elevated Food and Water Bowls', description: 'Raise food and water dishes 6 to 10 inches off the floor to reduce strain on the cervical spine and front shoulders.' },
          { number: 4, title: 'Car Ramps & Sofa Stairs', description: 'Train your dog to use non-slip ramps rather than jumping in and out of vehicles or off furniture.' },
          { number: 5, title: 'Gentle Sniff Walks', description: 'Trade intense ball chasing for frequent, shorter 15-minute walks focused on mental enrichment and sniff exploration.' }
        ]
      },
      warningBox: {
        title: 'Never Give Human Aspirin or Ibuprofen',
        text: 'Human pain relievers cause acute gastric ulceration, intestinal perforation, and acute renal failure in dogs. Always use veterinary-prescribed canine NSAIDs with regular bloodwork monitoring.'
      },
      routineTip: {
        title: 'Track Senior Vitals & Medications in PetHorizon',
        text: 'Log daily mobility scores, joint supplement schedules, and prescription pain relief in PetHorizon. Monitor monthly weight changes on interactive charts to spot subtle muscle wasting early.',
        actionLabel: 'Track Senior Dog Health in PetHorizon'
      }
    },
    {
      id: 'canine-cognitive-dysfunction',
      heading: 'Canine Cognitive Dysfunction Syndrome (Dog Dementia): DISHA Symptoms',
      intro:
        'Cognitive decline in aging dogs is physiologically similar to Alzheimer’s disease in humans, characterized by beta-amyloid protein plaque accumulation in the cerebral cortex.',
      bulletPoints: [
        { label: 'D - Disorientation', text: 'Getting trapped behind doors, staring blankly at walls, or wandering into unfamiliar corners.' },
        { label: 'I - Interactions', text: 'Becoming unusually clingy, withdrawn, or irritable during petting.' },
        { label: 'S - Sleep-Wake Cycles', text: 'Pacing, panting, and vocalizing at night while sleeping heavily throughout the day.' },
        { label: 'H - Housetraining Accidents', text: 'Losing bladder/bowel control indoors without signaling to go outside.' },
        { label: 'A - Activity Level', text: 'Aimless wandering, repetitive pacing, or loss of interest in favorite toys and walks.' }
      ]
    }
  ]
};
