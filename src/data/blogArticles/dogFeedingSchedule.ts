import { FullBlogArticle } from './types';

export const dogFeedingScheduleArticle: FullBlogArticle = {
  slug: 'dog-feeding-schedule-by-age-puppy-to-adult',
  readTime: '15 min read',
  overviewSummary:
    'Establishing a consistent, age-appropriate feeding schedule is the foundation of lifelong canine health. From rapid skeletal growth in puppies to metabolic deceleration in senior dogs, nutritional requirements and meal frequency evolve constantly. This veterinary-backed guide breaks down exact daily feeding frequencies, portion calculation formulas, kibble transition protocols, and how PetHorizon helps households track feeding times with zero guesswork.',
  sections: [
    {
      id: 'feeding-by-age-breakdown',
      heading: 'Daily Feeding Frequency by Age: From 8 Weeks to Senior Years',
      intro:
        'A dog’s digestive tract and metabolic burn rate change dramatically between weaning and adulthood. Free-feeding (leaving a bowl filled all day) increases the risk of obesity, makes house-training unpredictable, and masks early signs of illness like anorexia.',
      paragraphs: [
        'Between 8 and 12 weeks of age, young puppies possess miniature stomachs and high metabolic demands. Feeding them four small, evenly spaced meals per day prevents both painful abdominal distension and life-threatening hypoglycemia (especially critical in toy breeds such as Chihuahuas and Yorkshire Terriers).',
        'By 3 to 6 months of age, stomach capacity expands, allowing a smooth reduction to three structured meals daily. This frequency aligns with rapid skeletal bone development and keeps blood glucose steady across daytime play and crate rest periods.',
        'From 6 to 12 months (or up to 18–24 months for giant breeds like Great Danes and Mastiffs whose growth plates fuse later), meal frequency shifts to twice daily—once in the morning and once in the evening. Most adult dogs thrive on this two-meal cadence for life, as a single large daily meal increases hunger anxiety, bile reflux, and the catastrophic risk of Gastric Dilatation-Volvulus (bloat).'
      ],
      table: {
        headers: ['Life Stage', 'Age Window', 'Meals Per Day', 'Primary Nutritional Focus'],
        rows: [
          ['Young Puppy', '8 – 12 Weeks', '4 Meals Daily', 'High energy density, calcium/phosphorus balance for bone growth, DHA for cognitive development'],
          ['Growing Puppy', '3 – 6 Months', '3 Meals Daily', 'Steady protein intake, portion control to prevent rapid skeletal elongation'],
          ['Adolescent', '6 – 12 Months', '2 Meals Daily', 'Metabolic stabilization, gradual transition prep for adult maintenance formulas'],
          ['Adult Dog', '1 – 7 Years', '2 Meals Daily', 'Caloric equilibrium, lean muscle maintenance, dental support'],
          ['Senior Dog', '7+ Years', '2 Meals Daily (or 3 smaller)', 'Reduced caloric density, increased digestible protein, joint glucosamine, omega-3 fatty acids']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.45&q=85',
        caption: 'Portion precision: Weighing daily meals using a kitchen gram scale prevents inadvertent overfeeding and canine obesity.',
        altText: 'Dog sitting beside ceramic food bowl waiting for measured meal portion'
      }
    },
    {
      id: 'portion-calculation-rer',
      heading: 'How Much Food Does Your Dog Need? The Science of RER Calculations',
      intro:
        'Generic feeding charts printed on commercial dog food bags are broad estimates that frequently overestimate caloric requirements by 20% to 30%, assuming high working activity.',
      paragraphs: [
        'Veterinary nutritionists calculate base daily caloric requirements using Resting Energy Requirement (RER). RER represents the energy burned by an animal at rest in a thermoneutral environment:',
        'The Universal Exponential RER Equation: RER (kcal/day) = 70 × [Body Weight in kg]^0.75. For adult dogs weighing between 2 kg and 20 kg, an accurate linear approximation is RER = (30 × Body Weight in kg) + 70.',
        'To establish Total Daily Energy Expenditure (Maintenance Energy Requirement or MER), the RER is multiplied by an activity factor: Intact Adult Dog = 1.8 × RER; Neutered/Spayed Adult Dog = 1.4 to 1.6 × RER; Weight Loss Program = 1.0 × RER; Active Working Dog = 2.0 to 3.0 × RER.',
        'Why Kitchen Scales Beat Measuring Cups: A standard volumetric cup can pack anywhere from 90g to 135g of kibble depending on pellet shape, settled air space, and whether the scoop is level or heaping. Over one year, a 20g daily error translates to an extra 7,300 grams of food—enough to cause a 15% body weight increase in a medium dog.'
      ],
      warningBox: {
        title: 'Veterinary Golden Rule: The 10% Treat Boundary',
        text: 'Treats, training rewards, and table scraps must never exceed 10% of your dog’s total daily caloric allowance. Exceeding this boundary dilutes essential amino acids, calcium, and vitamins formulated in the primary diet and is the number one cause of stubborn weight gain.'
      },
      routineTip: {
        title: 'PetHorizon In-App Portion & Calorie Logger',
        text: 'Record your dog’s exact daily gram target in PetHorizon. Caregivers can log morning and evening meals with one tap so no one accidentally serves a second breakfast.',
        actionLabel: 'Set Up Feeding Schedule'
      }
    },
    {
      id: 'transition-protocol-bloat-safety',
      heading: 'Safe 7-Day Food Transition Protocol & Bloat (GDV) Safety',
      intro:
        'Switching diets too quickly overwhelms the canine gut microbiome, triggering acute osmotic diarrhea, vomiting, and inappetence.',
      paragraphs: [
        'Whenever transitioning from puppy food to adult food or introducing a new protein source, always follow a progressive 7-day ratio protocol to give intestinal brush-border enzymes time to adapt.',
        'Beyond digestion, meal timing plays a critical role in preventing Gastric Dilatation-Volvulus (GDV or Bloat)—a life-threatening surgical emergency where the stomach fills with gas and twists on its mesenteric axis. Deep-chested breeds (such as German Shepherds, Great Danes, Standard Poodles, and Boxers) are at highest risk.',
        'Bloat Prevention Guidelines: Avoid vigorous aerobic exercise, sprinting, or heavy play for at least 45 to 60 minutes before and after meals. Utilize slow-feeder maze bowls if your dog inhales their food. Contrary to older beliefs, veterinary research has shown that elevated food bowls actually increase bloat risk in large breeds unless medically recommended for megaesophagus.'
      ],
      stepByStep: {
        title: 'The Veterinary 7-Day Dietary Transition Protocol',
        steps: [
          {
            number: 1,
            title: 'Days 1 & 2: 75% Old Food / 25% New Food',
            description: 'Introduce the new formulation gradually. Monitor stool consistency and watch for any signs of facial itching or flatulence.'
          },
          {
            number: 2,
            title: 'Days 3 & 4: 50% Old Food / 50% New Food',
            description: 'Equal split between formulas. Stools should remain firm. If stools soften, maintain this ratio for an additional day before advancing.'
          },
          {
            number: 3,
            title: 'Days 5 & 6: 25% Old Food / 75% New Food',
            description: 'The gut microbiome has adapted to the new nutrient profile and protein sources. Appetite should be robust.'
          },
          {
            number: 4,
            title: 'Day 7 Onward: 100% New Food',
            description: 'Complete transition achieved. Record the new diet brand, batch number, and daily gram allocation in your PetHorizon profile.'
          }
        ]
      },
      productShowcase: {
        badge: 'Core Routine Feature',
        title: 'PetHorizon Feeding Routine Tracker & Family Sync',
        provider: 'Included Free in PetHorizon (iOS & Android)',
        price: 'Free Lifetime Access',
        image: '/screenshots/schedule-screen.webp',
        actionText: 'Track Feeding Times on PetHorizon',
        actionUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        actionType: 'playStore'
      }
    },
    {
      id: 'common-feeding-troubleshooting',
      heading: 'Troubleshooting Common Feeding Dilemmas: Picky Eaters & Multi-Dog Homes',
      intro:
        'Even the best-planned feeding schedule can run into behavioral roadblocks. Here is how veterinary behaviorists resolve everyday challenges.',
      paragraphs: [
        'The "Picky Eater" Trap: If an otherwise healthy dog walks away from their bowl, leaving the food out all day teaches them to graze and ignore hunger cues. Instead, employ the 15-Minute Rule: place the bowl down, wait 15 minutes, and calmly lift whatever remains untouched until the next scheduled meal. A healthy dog will not starve themselves, and this rapidly re-establishes feeding enthusiasm.',
        'Multi-Dog Households: Dogs should never be fed side-by-side in close proximity if one dog eats significantly faster than another or displays resource guarding (stiff posture, growling, rapid swallowing). Feed dogs in separate rooms or behind baby gates so each pet can eat calmly without competition.',
        'Hydration Awareness: For dogs fed exclusively dry kibble (which contains only 8–10% moisture), access to fresh, clean water is mandatory. Many veterinarians recommend adding warm water or bone broth (free of onions and garlic) to kibble to enhance aroma and boost baseline renal hydration.'
      ],
      bulletPoints: [
        {
          label: 'Avoid Free-Feeding',
          text: 'Structured meal windows teach house-training schedules, prevent obesity, and alert you immediately if your dog loses their appetite.'
        },
        {
          label: 'Weigh Food Weekly',
          text: 'Regularly monitor your dog’s Body Condition Score (BCS) on a 1-to-9 scale. Adjust daily grams up or down by 10% to keep ribs easily palpable under a slight fat covering.'
        },
        {
          label: 'Coordinate Across Caregivers',
          text: 'Use PetHorizon’s Family Hub to mark "Morning Kibble Served" so family members or roommates never feed the dog twice.'
        }
      ]
    }
  ]
};
