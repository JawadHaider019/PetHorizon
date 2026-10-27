import { FullBlogArticle } from './types';

export const seniorDogCareArticle: FullBlogArticle = {
  slug: 'senior-dog-care-mobility-nutrition-routine-guide',
  readTime: '16 min read',
  overviewSummary:
    'Advances in companion animal medicine, preventive diagnostic blood screening, and clinical nutrition have extended canine life expectancy significantly over the last two decades. However, chronological aging introduces distinct physiological challenges: osteoarthritis affects an estimated 80% of dogs over eight years of age, metabolic efficiency declines, and canine cognitive dysfunction syndrome (CDS) can alter circadian sleep-wake cycles. Caring for a senior dog requires proactive veterinary monitoring, evidence-based multimodal pain management, targeted neuroprotective nutrition, and environmental home modifications.',
  sections: [
    {
      id: 'biological-aging-benchmarks',
      heading: 'When Is a Dog Officially Senior? Biological Aging by Adult Weight',
      intro:
        'Canine biological aging correlates inversely with adult body size: giant breeds age at an accelerated biological rate compared to toy and small companion breeds.',
      paragraphs: [
        'Giant breeds (Great Danes, Mastiffs, Saint Bernards) reach their senior years around age 5 to 6, with life expectancies averaging 8 to 10 years. In contrast, small dogs (Chihuahuas, Toy Poodles, Yorkshire Terriers) typically enter senior physiological status at age 10 to 11 and often thrive well past 15 or 16 years.',
        'Veterinary consensus established by the American Animal Hospital Association (AAHA) recommends transitioning from annual to bi-annual (every 6 months) wellness examinations once a dog reaches senior benchmark status. Because dogs age approximately five to seven biological years for every single human calendar year, biannual visits are equivalent to a human seeing their physician every three to four years.',
        'Comprehensive Senior Screening Panels: A thorough senior exam must include a complete blood count (CBC), full serum biochemical profile, symmetric dimethylarginine (SDMA) for early renal decline, complete urinalysis (checking for proteinuria and specific gravity), resting blood pressure auscultation, and orthopedic palpation.'
      ],
      table: {
        headers: ['Dog Size Category', 'Adult Weight Range', 'Senior Age Benchmark', 'Geriatric Age Window', 'Key Health Screening Focus'],
        rows: [
          ['Small Breeds', 'Under 20 lbs (9 kg)', '10 – 11 Years', '14+ Years', 'Mitral valve disease, periodontal disease, luxating patellas'],
          ['Medium Breeds', '21 – 50 lbs (10 – 23 kg)', '8 – 9 Years', '12 – 14 Years', 'Endocrine disorders (Cushing’s, hypothyroidism), osteoarthritis'],
          ['Large Breeds', '51 – 90 lbs (24 – 41 kg)', '7 – 8 Years', '10 – 12 Years', 'Hip/elbow dysplasia, splenic masses, degenerative myelopathy'],
          ['Giant Breeds', '90+ lbs (41+ kg)', '5 – 6 Years', '8 – 10 Years', 'Dilated cardiomyopathy (DCM), GDV bloat, osteosarcoma']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=1000&auto=format&fit=crop&q=80',
        caption: 'Biannual veterinary exams, low-impact exercise, and orthopedic support keep senior dogs pain-free and cognitively engaged.',
        altText: 'Senior golden retriever resting peacefully on dense orthopedic memory foam bed'
      }
    },
    {
      id: 'multimodal-osteoarthritis-pain-management',
      heading: 'Canine Osteoarthritis (OA): Multimodal Pain Protocols & Home Adaptation',
      intro:
        'Dogs possess an evolutionary drive to conceal chronic orthopedic pain. They rarely vocalize or yelp from arthritis; instead, pain manifests as subtle behavioral withdrawal: hesitating before stairs, sleeping more, or struggling to stand after resting.',
      paragraphs: [
        'Modern veterinary pain management rejects single-drug therapies in favor of a "multimodal" strategy. Multimodal management targets distinct pain pathways simultaneously to achieve superior analgesia with lower individual drug dosages and fewer organ side effects.',
        'Anti-Nerve Growth Factor (anti-NGF) Monoclonal Antibodies: Bedinvetmab (Librela) represents a breakthrough in veterinary pain control. Administered as a monthly subcutaneous injection, it specifically neutralizes Nerve Growth Factor (a primary driver of osteoarthritic chronic pain) without hepatic or renal clearance, making it exceptionally safe for senior dogs with borderline blood chemistry.',
        'Targeted NSAIDs & Neuropathic Agents: Modern non-steroidal anti-inflammatory drugs (carprofen, meloxicam) or EP4 receptor antagonists (grapiprant) provide powerful anti-inflammatory relief. For chronic central pain sensitization (wind-up pain), veterinarians combine NSAIDs with gabapentin or amantadine.',
        'Nutraceutical Chondroprotection: High-potency omega-3 fatty acids rich in eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) clinically suppress cartilage-degrading matrix metalloproteinases (MMPs). Combine EPA with glucosamine hydrochloride, chondroitin sulfate, and ASU (avocado-soybean unsaponifiables).'
      ],
      stepByStep: {
        title: '5 Crucial Home Modifications for Senior Mobility',
        steps: [
          { number: 1, title: 'Non-Slip Rug Runners on Hard Floors', description: 'Lay textured yoga mats or rubber-backed carpet runners across all hardwood, tile, and laminate walkways to eliminate terrifying slip-and-fall injuries.' },
          { number: 2, title: '4-Inch Orthopedic Memory Foam Beds', description: 'Invest in true medical-grade memory foam bedding that contours to arthritic hips and elbows without bottoming out onto the hard floor.' },
          { number: 3, title: 'Gentle Graded Ramps for Vehicles and Furniture', description: 'Train your senior dog to use gentle non-slip ramps rather than jumping down from SUVs or beds, which subjects front carpal joints to 3x body weight impact.' },
          { number: 4, title: 'Elevated Food and Water Dishes', description: 'Raise bowls 6 to 10 inches off the floor to prevent painful neck and shoulder hyperextension during mealtimes.' },
          { number: 5, title: 'Decompression Scent Walks', description: 'Replace high-impact ball chasing with unhurried 15-to-20-minute sniffing strolls on soft grass to lubricate joint capsules without causing fatigue.' }
        ]
      },
      warningBox: {
        title: 'Never Give Human Painkillers to Dogs',
        text: 'Human non-steroidal anti-inflammatory drugs (ibuprofen, naproxen, Advil, Aleve) cause acute, life-threatening gastric ulcerations, intestinal perforation, and acute renal tubular necrosis in dogs. Acetaminophen (Tylenol) triggers severe liver failure. Only administer canine-specific pain medications prescribed by your veterinarian.'
      }
    },
    {
      id: 'canine-cognitive-dysfunction-disha',
      heading: 'Canine Cognitive Dysfunction Syndrome (Dog Dementia): The DISHA Assessment',
      intro:
        'Cognitive decline in aging canines shares striking neurochemical and pathological similarities with human Alzheimer’s disease, including cerebral cortical atrophy and beta-amyloid neuritic plaque deposition.',
      paragraphs: [
        'Veterinarians use the validated DISHA acronym to evaluate the onset and progression of canine cognitive dysfunction syndrome (CDS):',
        'D - Disorientation: Wandering aimlessly, staring blankly at corners or walls, getting trapped behind open doors, or failing to recognize familiar family friends.',
        'I - Interactions: Changes in social behavior—becoming unusually clingy and anxious or conversely detached, irritable, and aloof.',
        'S - Sleep-Wake Cycles: Reversal of circadian rhythms—pacing, panting, and vocalizing at 2:00 AM while sleeping heavily during the day.',
        'H - Housetraining Loss: Eliminating indoors without signaling, or walking outdoors and immediately returning inside to urinate on the living room rug.',
        'A - Activity & Memory: Pacing back and forth, licking floors obsessively, or forgetting previously mastered obedience cues.',
        'Nutritional Cognitive Support: Diets supplemented with Medium Chain Triglycerides (MCTs) provide ketone bodies as an alternative energy source for aging neurons that have lost the ability to efficiently metabolize glucose. Antioxidants (vitamin E, vitamin C, selenium) and selegiline (Anipryl) support dopaminergic neurotransmission.'
      ],
      routineTip: {
        title: 'Track Senior Vitals & Medications in PetHorizon',
        text: 'Log daily mobility scores, joint supplement schedules, and prescription pain relief in PetHorizon. Monitor monthly weight changes on interactive curves to spot muscle wasting early.',
        actionLabel: 'Track Senior Dog Health in PetHorizon'
      }
    }
  ]
};
