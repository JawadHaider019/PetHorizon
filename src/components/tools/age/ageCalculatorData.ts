export type PetType = 'dog' | 'cat';
export type DogBreedSize = 'small' | 'medium' | 'large' | 'giant';

export interface BreedSizeInfo {
  id: DogBreedSize;
  label: string;
  weightRange: string;
  examples: string;
  yearMultiplier: number;
}

export const DOG_SIZES: BreedSizeInfo[] = [
  {
    id: 'small',
    label: 'Small Breed',
    weightRange: '< 20 lbs (under 9 kg)',
    examples: 'Chihuahua, Yorkie, Frenchie, Dachshund',
    yearMultiplier: 4
  },
  {
    id: 'medium',
    label: 'Medium Breed',
    weightRange: '21 – 50 lbs (9.5 – 23 kg)',
    examples: 'Beagle, Australian Shepherd, Border Collie',
    yearMultiplier: 5
  },
  {
    id: 'large',
    label: 'Large Breed',
    weightRange: '51 – 90 lbs (23 – 41 kg)',
    examples: 'Labrador, Golden Retriever, German Shepherd',
    yearMultiplier: 6.5
  },
  {
    id: 'giant',
    label: 'Giant Breed',
    weightRange: '90+ lbs (41+ kg)',
    examples: 'Great Dane, Mastiff, Saint Bernard, Cane Corso',
    yearMultiplier: 8
  }
];

export interface LifeStageDetails {
  stage: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  lifePercentage: number;
  milestones: { title: string; desc: string }[];
  vetAdvice: string;
}

export function calculatePetAge(
  petType: PetType,
  dogSize: DogBreedSize,
  years: number,
  months: number
): { humanAge: number; stageDetails: LifeStageDetails } {
  const totalYears = years + months / 12;
  let calculatedHumanAge = 0;

  if (petType === 'cat') {
    if (totalYears <= 0.08) calculatedHumanAge = 1;
    else if (totalYears <= 0.25) calculatedHumanAge = 4;
    else if (totalYears <= 0.5) calculatedHumanAge = 10;
    else if (totalYears <= 1) calculatedHumanAge = Math.round(10 + (totalYears - 0.5) * 10);
    else if (totalYears <= 2) calculatedHumanAge = Math.round(15 + (totalYears - 1) * 9);
    else calculatedHumanAge = Math.round(24 + (totalYears - 2) * 4);
  } else {
    if (totalYears <= 0.25) calculatedHumanAge = Math.round(totalYears * 20);
    else if (totalYears <= 0.5) calculatedHumanAge = Math.round(5 + (totalYears - 0.25) * 20);
    else if (totalYears <= 1) calculatedHumanAge = Math.round(10 + (totalYears - 0.5) * 10);
    else if (totalYears <= 2) calculatedHumanAge = Math.round(15 + (totalYears - 1) * 9);
    else {
      const currentSize = DOG_SIZES.find((s) => s.id === dogSize) || DOG_SIZES[1];
      calculatedHumanAge = Math.round(24 + (totalYears - 2) * currentSize.yearMultiplier);
    }
  }

  let stage: string;
  let badgeColor: string;
  let borderColor: string;
  let description: string;
  let lifePercentage: number;
  let milestones: { title: string; desc: string }[] = [];
  let vetAdvice: string;

  if (petType === 'cat') {
    if (totalYears < 1) {
      stage = 'Kitten';
      badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
      borderColor = 'border-amber-200';
      description = 'High-growth pediatric stage. Rapid brain, motor, and immune system development.';
      lifePercentage = Math.min(15, Math.round((totalYears / 16) * 100));
      milestones = [
        { title: 'Core FVRCP Immunization', desc: 'Series at 8, 12, and 16 weeks to prevent viral rhinotracheitis and panleukopenia.' },
        { title: 'Rabies & Microchipping', desc: 'Permanent lifetime registration and rabies immunization around 12–16 weeks.' },
        { title: 'Spay / Neuter Window', desc: 'Veterinary consensus recommends surgical sterilization around 5–6 months before first heat cycle.' }
      ];
      vetAdvice = 'Feed calorie-dense kitten formula and begin routine indoor dental handling and nail trimming early.';
    } else if (totalYears <= 6) {
      stage = 'Young Adult';
      badgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
      borderColor = 'border-emerald-200';
      description = 'Peak physical vitality, metabolic stability, and prime agility.';
      lifePercentage = Math.round((totalYears / 16) * 100);
      milestones = [
        { title: 'Annual Wellness Exam & Boosters', desc: 'Routine preventative checkups and 1-yr / 3-yr core booster rotation.' },
        { title: 'Dental Plaque Monitoring', desc: 'Over 70% of cats show early periodontal disease by age 3. Daily brushing or dental kibble.' },
        { title: 'Weight & Hydration Management', desc: 'Introduce wet food fountains to protect against urinary crystal formation and kidney stress.' }
      ];
      vetAdvice = 'Monitor daily hydration and caloric intake closely after spay/neuter to prevent insidious adult weight gain.';
    } else if (totalYears <= 10) {
      stage = 'Mature Adult';
      badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
      borderColor = 'border-blue-200';
      description = 'Equates to human middle-age (48–56 years). Subtler activity shifts and baseline metabolic changes.';
      lifePercentage = Math.round((totalYears / 16) * 100);
      milestones = [
        { title: 'Baseline Geriatric Blood Screen', desc: 'Establish healthy baseline values for liver enzymes, creatinine, and thyroid (T4).' },
        { title: 'Joint Agility Observation', desc: 'Watch for subtle hesitancy before jumping onto counters or beds.' },
        { title: 'Kidney Health Screening', desc: 'Annual urinalysis to detect microalbuminuria or early feline chronic kidney disease.' }
      ];
      vetAdvice = 'Cats are masters at hiding chronic discomfort. Keep annual vet checks consistent even if they seem completely healthy.';
    } else if (totalYears <= 14) {
      stage = 'Senior';
      badgeColor = 'bg-purple-100 text-purple-900 border-purple-300';
      borderColor = 'border-purple-200';
      description = 'Senior golden years (human 60–72). Requires proactive renal, thyroid, and blood pressure surveillance.';
      lifePercentage = Math.min(95, Math.round((totalYears / 16) * 100));
      milestones = [
        { title: 'Bi-Annual Geriatric Vet Visits', desc: 'Every 6 months to detect hypertension, arthritis, and dental disease early.' },
        { title: 'Complete Blood & SDMA Renal Panel', desc: 'SDMA can identify renal decline up to 48 months earlier than traditional creatinine.' },
        { title: 'Orthopedic Home Adjustments', desc: 'Provide low-sided litter boxes, ramp cushions, and orthopedic heated pads.' }
      ];
      vetAdvice = 'Any uncharacteristic vocalization, sudden weight drop, or increased thirst warrants prompt veterinary evaluation.';
    } else {
      stage = 'Super Senior / Geriatric';
      badgeColor = 'bg-rose-100 text-rose-900 border-rose-300';
      borderColor = 'border-rose-200';
      description = 'Distinguished golden age (76+ human years). Focused on quality of life, comfort, and cognitive support.';
      lifePercentage = 98;
      milestones = [
        { title: 'Palliative & Comfort Care', desc: 'Environmental accessibility with multiple water bowls and non-slip floor rugs.' },
        { title: 'Cognitive Dysfunction Support', desc: 'Keep routines predictable and consult your vet on omega-3 fatty acids and antioxidants.' },
        { title: 'High-Palatability Senior Nutrition', desc: 'Warm wet meals with enhanced aromatics for aging feline olfactory senses.' }
      ];
      vetAdvice = 'Prioritize pain management, hydration, and warmth to make every day of their senior twilight calm and joyful.';
    }
  } else {
    const maxExpectedYears = dogSize === 'giant' ? 9 : dogSize === 'large' ? 12 : dogSize === 'medium' ? 14 : 16;
    lifePercentage = Math.min(98, Math.round((totalYears / maxExpectedYears) * 100));

    if (totalYears < 0.75) {
      stage = 'Young Puppy';
      badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
      borderColor = 'border-amber-200';
      description = 'Rapid pediatric growth, socialization window, and immune development.';
      milestones = [
        { title: 'Core Puppy Vaccine Series', desc: 'DHPP / DA2PP boosters at 8, 12, and 16 weeks to protect against canine parvovirus.' },
        { title: 'Socialization Window (3–14 Weeks)', desc: 'Safe exposure to sounds, textures, friendly dogs, and diverse domestic environments.' },
        { title: 'Parasite & Deworming Protocol', desc: 'Broad-spectrum deworming and monthly heartworm/flea prevention initiation.' }
      ];
      vetAdvice = 'High-protein puppy growth nutrition is crucial. Never switch to adult food until skeletal growth plates close.';
    } else if (totalYears < 2) {
      stage = 'Adolescent & Junior';
      badgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
      borderColor = 'border-emerald-200';
      description = 'Sexual maturity, boundary testing, and adult muscle transition (human 15–24 years).';
      milestones = [
        { title: 'Veterinary Spay/Neuter Consultation', desc: 'Timing depends on breed size (larger breeds often wait until 12–18 months for joint health).' },
        { title: 'Adult Dental & Teething Transition', desc: 'Confirm all 42 permanent adult teeth have cleanly erupted without retained deciduous teeth.' },
        { title: 'Consistent Training & Mental Enrichment', desc: 'Adolescent dogs require daily structured scentwork, agility, or obedience routines.' }
      ];
      vetAdvice = 'Reinforce boundaries with positive reinforcement. Adolescent dogs experience temporary secondary fear periods.';
    } else if (totalYears <= (dogSize === 'giant' ? 4 : dogSize === 'large' ? 5 : 6)) {
      stage = 'Adult';
      badgeColor = 'bg-teal-100 text-teal-900 border-teal-300';
      borderColor = 'border-teal-200';
      description = 'Peak physical endurance, prime cognitive stability, and prime life activity.';
      milestones = [
        { title: 'Annual Preventative Exam', desc: 'Heartworm antigen blood test, comprehensive physical exam, and vaccine booster rotation.' },
        { title: 'Professional Dental Cleaning', desc: 'Tartar scaling and polishing under veterinary supervision to preserve gums and heart health.' },
        { title: 'Weight & Body Condition Score (BCS)', desc: 'Maintain ideal BCS 4–5/9. Overweight dogs have a statistically reduced lifespan by 1.8 years.' }
      ];
      vetAdvice = 'Keep daily exercise structured and weigh your dog monthly to catch slow weight creep before it strains joints.';
    } else if (totalYears <= (dogSize === 'giant' ? 6 : dogSize === 'large' ? 8 : 10)) {
      stage = 'Mature Adult';
      badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
      borderColor = 'border-blue-200';
      description = 'Middle-aged companion (human 45–60). Metabolism begins gradual slowing; early joint changes emerge.';
      milestones = [
        { title: 'Senior Baseline Blood & Chemistry Panel', desc: 'Screen liver, kidney function, and electrolytes before symptoms appear.' },
        { title: 'Joint Mobility & Glucosamine Support', desc: 'Introduce vet-approved omega-3 EPA/DHA and chondroitin for cartilage maintenance.' },
        { title: 'Ocular & Ear Examination', desc: 'Check for lenticular sclerosis (normal clouding) vs cataracts and chronic ear canal health.' }
      ];
      vetAdvice = 'Watch for stiffness upon waking up or reluctance to jump into cars. Subtle mobility slowing is manageable with early care.';
    } else {
      stage = 'Senior / Geriatric';
      badgeColor = 'bg-purple-100 text-purple-900 border-purple-300';
      borderColor = 'border-purple-200';
      description = 'Cherished senior twilight. Requires proactive comfort, joint relief, and bi-annual geriatric health monitoring.';
      milestones = [
        { title: 'Bi-Annual Geriatric Checkups', desc: 'Every 6 months allows timely intervention for arthritis, kidney disease, or cardiac murmurs.' },
        { title: 'Orthopedic Bedding & Floor Grips', desc: 'Support achy joints with memory foam beds and yoga runner mats on hardwood floors.' },
        { title: 'Cognitive & Senses Routine', desc: 'Gentle sniff walks and predictable meal/sleep routines support aging canine cognitive health.' }
      ];
      vetAdvice = 'Celebrate their senior years with patience, extra warmth, and regular communication with your veterinarian.';
    }
  }

  return {
    humanAge: calculatedHumanAge,
    stageDetails: {
      stage,
      badgeColor,
      borderColor,
      description,
      lifePercentage,
      milestones,
      vetAdvice
    }
  };
}

export const AGE_FAQS = [
  {
    q: 'Is 1 dog year really equal to 7 human years?',
    a: 'No. The traditional "multiply by 7" rule is a popular myth that does not match biological science. Puppies mature roughly 15 times faster than humans during their very first year, reaching the human equivalent of a 15-year-old by age one and 24 by age two. After age two, aging speed diverges dramatically based on breed weight: small dogs age roughly 4 human years per calendar year, while giant breeds can age 8 to 9 human years annually.'
  },
  {
    q: 'Why do giant and large dogs age faster than small dogs?',
    a: 'Scientific research from the American Kennel Club (AKC) and veterinary gerontologists indicates large dogs experience an accelerated growth rate during puppyhood and have higher cellular turnover and free-radical metabolic wear. While a Chihuahua or Dachshund frequently lives 15–18 years, a Great Dane or Mastiff enters senior status at just 6 years old.'
  },
  {
    q: 'How do cats age compared to humans?',
    a: 'Cats follow a rapid early maturation curve similar to dogs. At 1 calendar year, an indoor cat is biologically equivalent to a 15-year-old human. At 2 years, they reach the equivalent of a 24-year-old human adult. Thereafter, each cat year corresponds to roughly 4 human years. A 10-year-old cat is roughly 56 in human years, and a 15-year-old senior cat is 76.'
  },
  {
    q: 'When is a dog or cat officially considered a "senior"?',
    a: 'According to AAHA and AAFP guidelines, cats are classified as "mature" between ages 7–10, and enter true "senior" status at age 11. For dogs, senior timing depends directly on body size: Giant breeds (90+ lbs) reach senior status around age 6; large breeds (50–90 lbs) around age 7–8; medium dogs around age 8–9; and small breeds (under 20 lbs) around age 10–11.'
  },
  {
    q: 'How does the PetHorizon app help track aging milestones?',
    a: "PetHorizon automatically calculates your pet's exact biological life stage from their birthdate and schedules reminders for preventative care milestones: bi-annual geriatric wellness panels, dental cleanings, vaccine booster rotations, and weight management. You can also log daily medication routines and share care records with family members."
  }
];
