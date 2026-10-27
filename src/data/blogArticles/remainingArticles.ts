import { FullBlogArticle } from './types';

export const emergencyVetArticle: FullBlogArticle = {
  slug: 'emergency-vet-symptoms-red-flags-petmd',
  readTime: '15 min read',
  overviewSummary:
    'In a veterinary medical emergency, minutes directly determine whether an animal survives. Knowing how to distinguish true life-threatening emergencies from conditions that can wait for regular clinic hours is essential for every pet parent. Conditions like Gastric Dilatation-Volvulus (GDV bloat) in large dogs or urethral obstructions in male cats can cause fatal cardiac arrest or gastric necrosis in under two to four hours. This clinical guide outlines the five critical emergency red flags, the Manchester veterinary triage categories, safe emergency transit stretchers, and pre-arrival phone protocols.',
  sections: [
    {
      id: 'critical-triage-categories',
      heading: 'Veterinary Emergency Triage: The 4 Clinical Priority Levels',
      intro:
        'Emergency veterinary hospitals utilize formal triage scoring systems to categorize patients based on physiological stability, respiratory function, and perfusion rather than arrival order.',
      paragraphs: [
        'Level 1 (Resuscitation / Immediate): Catastrophic collapse, respiratory arrest, absent pulse, active status epilepticus (> 5 minutes), or severe traumatic hemorrhage. Patient is taken directly to the ICU crash bay with zero wait time.',
        'Level 2 (Emergent / Life-Threatening): Signs of severe shock, acute GDV bloat, male cat urinary blockage, respiratory distress (dyspnea), open pneumothorax, or penetrating thoracic wounds. Triage goal is veterinary intervention within 15 minutes.',
        'Level 3 (Urgent): Severe intractable pain, acute blunt trauma with stable vitals, persistent vomiting with dehydration, deep skin lacerations, or suspected toxin ingestion within the decontamination window. Evaluated within 30 to 60 minutes.',
        'Level 4 (Semi-Urgent / Non-Critical): Mild limping, ear infections, localized hot spots, chronic diarrhea with bright demeanor, or minor superficial scrapes. Can be safely examined once emergent patients are stabilized.'
      ],
      table: {
        headers: ['Triage Level', 'Clinical Presentation', 'Examples', 'Target Evaluation Window'],
        rows: [
          ['Level 1: Resuscitation', 'Cardiovascular / Respiratory Arrest', 'Apnea, unresponsive coma, pulseless electrical activity', 'Immediate (0 minutes)'],
          ['Level 2: Emergent', 'Acute organ threat, impending shock', 'GDV bloat, blocked tomcat, dyspnea, pale gums (CRT > 3s)', '< 15 minutes'],
          ['Level 3: Urgent', 'Severe systemic illness, active pain', 'Cluster seizures, snakebite, toxic chocolate ingestion', '< 60 minutes'],
          ['Level 4: Non-Critical', 'Stable vitals, localized discomfort', 'Mild lameness, ear hematoma, superficial abrasion', 'When triage capacity allows']
        ]
      }
    },
    {
      id: 'five-life-threatening-red-flags',
      heading: 'The 5 Critical Veterinary ER Red Flags Explained',
      intro:
        'If your pet exhibits any of the following five conditions, transport them to the nearest 24/7 veterinary emergency hospital immediately without waiting for morning clinic hours:',
      paragraphs: [
        '1. Gastric Dilatation-Volvulus (GDV Bloat): Primarily affects large, deep-chested dog breeds (Great Danes, German Shepherds, Standard Poodles). The stomach fills with gas and twists on its mesenteric axis, occluding the caudal vena cava, cutting off venous blood return to the heart, and causing stomach wall necrosis. Hallmarks include unproductive retching ("dry heaving"), profound restlessness, excessive drooling, and a visibly distended, hard, drum-like abdomen.',
        '2. Feline Urethral Obstruction ("Blocked Cat"): Male cats possess a narrow, tapered urethra that easily plugs with inflammatory proteinaceous plugs, struvite crystals, or bladder stones. Within 24 hours, the inability to void urine leads to severe post-renal azotemia and life-threatening hyperkalemia (high blood potassium), inducing fatal cardiac arrhythmias. Look for frequent straining in the litter box, painful crying, licking the penis, and vomiting.',
        '3. Respiratory Distress (Dyspnea): Open-mouth panting in a cat is always an emergency. In dogs and cats, exaggerated abdominal heave, extending the neck forward with elbows pointed outward (orthopneic posture), and pale, grey, or cyanotic (blue-purple) tongue membranes indicate oxygen starvation requiring immediate oxygen therapy.',
        '4. Sudden Hind-Limb Paralysis: In cats, sudden screaming accompanied by dragging cold, painful rear legs indicates Feline Aortic Thromboembolism ("Saddle Thrombus") secondary to underlying cardiomyopathy. In chondrodystrophic dogs (Dachshunds, French Bulldogs, Corgis), sudden paralysis points to acute Intervertebral Disc Disease (IVDD) requiring emergency decompression surgery within 24 to 48 hours to prevent permanent loss of deep pain sensation.',
        '5. Status Epilepticus & Cluster Seizures: A single seizure lasting more than 3 minutes, or two or more seizures within a 24-hour window without regaining normal consciousness between episodes. Prolonged seizures trigger hyperthermia (body temp > 106°F), cerebral edema, and irreversible neurological damage.'
      ],
      warningBox: {
        title: 'Call the Emergency Clinic While En Route',
        text: 'Always phone the 24-hour ER hospital while en route. Phoning 10 minutes ahead allows the veterinary ICU team to prepare an oxygen cage, draw up emergency resuscitation drugs, set out IV catheter kits, and clear the triage crash bay before your vehicle arrives.'
      }
    },
    {
      id: 'emergency-transport-and-handling',
      heading: 'Safe Emergency Handling & Transport Protocols',
      intro:
        'Handling an animal in severe pain requires caution: pain triggers reflexive biting even in gentle, devoted companion animals.',
      bulletPoints: [
        { label: 'Improvised Stretcher for Large Dogs', text: 'Slide a rigid ironing board, large wooden board, or taut heavy blanket under a dog with suspected spinal injury or GDV to lift them without twisting the spine or compressing the abdomen.' },
        { label: 'Gentle Towel Wrap for Cats', text: 'Wrap a distressed cat loosely in a thick bath towel ("burrito wrap") to protect their limbs, prevent thrashing, and secure them inside a rigid top-loading carrier.' },
        { label: 'Keep Head Level or Slightly Elevated', text: 'For pets with head trauma, respiratory distress, or active seizures, keep the head and neck elevated at a 15-to-30-degree angle to decrease intracranial pressure and facilitate airflow.' },
        { label: 'Never Give Human Medications', text: 'Never administer human pain relievers (aspirin, Tylenol/acetaminophen, Advil/ibuprofen). Acetaminophen is fatal to cats within hours, and ibuprofen causes fatal gastric perforation and acute kidney failure in dogs.' }
      ],
      routineTip: {
        title: 'Store 24/7 ER Vet Contacts in PetHorizon',
        text: 'Save the address, telephone number, and turn-by-turn navigation link for your nearest 24/7 emergency veterinary hospital in PetHorizon. Access complete medical histories and vaccine records with 1 tap during ER intake.',
        actionLabel: 'Store ER Contacts in PetHorizon'
      }
    }
  ]
};

export const heartwormArticle: FullBlogArticle = {
  slug: 'flea-tick-heartworm-prevention-ahs-protocol',
  readTime: '15 min read',
  overviewSummary:
    'Heartworm disease (*Dirofilaria immitis*) is a potentially fatal parasitic infection transmitted through the bite of infected mosquitoes. Once inside the host, microscopic larvae undergo complex tissue molts before migrating into the pulmonary arterial tree and right ventricle of the heart, growing into 12-inch-long adult worms that cause severe vascular scarring, pulmonary hypertension, and congestive heart failure. Supported by the American Heartworm Society (AHS) and AAHA guidelines, this clinical guide breaks down the parasite lifecycle, retroactive kill windows, feline heartworm vulnerabilities, and missed dose safety protocols.',
  sections: [
    {
      id: 'heartworm-lifecycle-and-pathology',
      heading: 'The Heartworm Lifecycle: How Microscopic Larvae Destroy the Cardiopulmonary Tree',
      intro:
        'Understanding the exact biological lifecycle of *Dirofilaria immitis* explains why veterinary medicine mandates year-round chemical prophylaxis rather than seasonal dosing.',
      paragraphs: [
        'The Mosquito Intermediate Vector: A female mosquito feeds on an infected animal, ingesting circulating microfilariae (L1 stage). Inside the mosquito, microfilariae develop over 10 to 14 days (at temperatures above 57°F / 14°C) into infective third-stage larvae (L3).',
        'Infection & Tissue Molts: When the mosquito bites a dog or cat, L3 larvae are deposited in a drop of hemolymph on the skin and enter through the bite wound. Over the next 70 days, larvae molt through L4 and immature adult (L5) stages in the host’s subcutaneous tissues.',
        'Pulmonary Artery Colonization: By day 70 to 100, immature worms enter the venous bloodstream and lodge in the small caudal pulmonary arteries. As they mature into 10-to-12-inch adult worms over 6 to 7 months, their presence causes severe proliferative endarteritis, chronic pulmonary thrombosis, right ventricular hypertrophy, and eventually fatal congestive heart failure or caval syndrome.'
      ],
      table: {
        headers: ['Lifecycle Stage', 'Location in Host', 'Timeline Post-Bite', 'Vulnerability to Monthly Preventatives'],
        rows: [
          ['L3 Infective Larvae', 'Skin bite puncture site', 'Days 0 – 3', '100% susceptible to monthly macrocyclic lactones'],
          ['L4 Tissue Larvae', 'Subcutaneous tissue & muscle', 'Days 3 – 70', '100% susceptible to monthly preventatives (Retroactive Kill Window)'],
          ['L5 Immature Adults', 'Pulmonary arterial vasculature', 'Days 70 – 120', 'Partially susceptible; survival rate increases dramatically'],
          ['Sexually Mature Adults', 'Main pulmonary artery & right ventricle', '6 – 7 Months+', 'Zero susceptibility to preventative chews; requires deep melarsomine injections']
        ]
      }
    },
    {
      id: 'feline-heartworm-disease-hard',
      heading: 'Heartworm in Cats: Heartworm-Associated Respiratory Disease (HARD)',
      intro:
        'A common and dangerous myth among pet owners is that cats cannot contract heartworms or that indoor cats are safe from infection.',
      paragraphs: [
        'Studies published by the American Heartworm Society reveal that up to 28% of cats diagnosed with heartworm infection are classified by their owners as strictly indoor pets. Mosquitoes routinely enter residential homes through open windows, doorway drafts, and air-conditioning vents.',
        'Cats are atypical hosts for *Dirofilaria immitis*. While dogs often harbor 30 to 100 adult worms, cats typically harbor only 1 to 3 worms. However, because a cat’s heart and pulmonary arteries are tiny, even a single adult worm can trigger acute fatal pulmonary thromboembolism or sudden cardiac collapse.',
        'Heartworm-Associated Respiratory Disease (HARD): Immature worms reaching feline pulmonary arteries trigger severe inflammatory immune reactions that mimic feline asthma. Clinical signs include chronic coughing, wheezing, dyspnea, intermittent vomiting unrelated to eating, and acute lethargy.',
        'Zero Approved Feline Adulticide: There are zero FDA-approved medical treatments to kill adult heartworms in cats. Arsenical adulticides (melarsomine) used in dogs are fatal to felines. Prevention is the only medical protection for cats.'
      ],
      warningBox: {
        title: 'Why Year-Round Prevention is Mandatory',
        text: 'Monthly heartworm preventatives do not form a protective shield against future mosquito bites; they work RETROACTIVELY by eliminating L3 and L4 larvae acquired during the previous 30 days. Stopping medication during winter leaves larvae free to develop into adult worms that cannot be killed by preventatives.'
      }
    },
    {
      id: 'missed-dose-protocol-and-testing',
      heading: 'Missed Dose Protocol & Annual Veterinary Testing Guidelines',
      intro:
        'If life gets busy and you realize you forgot your pet’s monthly heartworm chewable or topical dose, follow this veterinary timeline:',
      bulletPoints: [
        { label: 'Missed by Less Than 14 Days', text: 'Administer the preventative immediately. Reset your monthly recurring calendar to this new date; the safety margin of modern macrocyclic lactones (ivermectin, moxidectin, milbemycin oxime) will still clear young tissue larvae.' },
        { label: 'Missed by 15 to 30 Days', text: 'Administer the preventative immediately. Because larvae may have molted toward the resilient L5 stage, resume strict monthly dosing and inform your veterinarian at your next routine checkup.' },
        { label: 'Missed by More Than 30 Days', text: 'Administer the preventative immediately to kill any newly acquired larvae, but you MUST schedule an antigen and microfilariae blood test 6 months later. Adult worms take 6 months to mature and produce detectable uterine antigens.' },
        { label: 'The Annual Screening Mandate', text: 'The AHS mandates annual blood testing even for pets on year-round preventatives. Testing verifies compliance, guards against vomited doses or spit-out pills, and ensures safety before giving medications that could trigger anaphylaxis in microfilaria-positive dogs.' }
      ],
      routineTip: {
        title: 'Never Miss a Monthly Heartworm Chew with PetHorizon',
        text: 'Set recurring monthly heartworm, flea, and tick medication alarms in PetHorizon. Receive push notifications and tick off administered doses so household members never accidentally double-dose or skip parasite prevention.',
        actionLabel: 'Schedule Parasite Prevention in PetHorizon'
      }
    }
  ]
};

export const petCaloriesArticle: FullBlogArticle = {
  slug: 'pet-calorie-calculator-feeding-guide-apop',
  readTime: '15 min read',
  overviewSummary:
    'Pet obesity is classified as the number one preventable health epidemic facing companion animals: surveys by the Association for Pet Obesity Prevention (APOP) demonstrate that over 59% of dogs and 61% of cats in developed nations are overweight or obese. Carrying excess adipose tissue is not cosmetic; fat is an active endocrine organ that secretes pro-inflammatory adipokines, accelerating osteoarthritis, predisposing felines to type 2 diabetes mellitus, and shortening median canine lifespan by 2.5 years. This clinical guide details the Resting Energy Requirement (RER) mathematical formula, life-stage Maintenance Energy Requirement (MER) multipliers, and kitchen scale precision.',
  sections: [
    {
      id: 'rer-mathematical-formula',
      heading: 'The Mathematical Biology of Pet Calories: The WSAVA RER Formula',
      intro:
        'Feeding charts printed on commercial pet food bags provide broad population averages that frequently overestimate caloric requirements by 20% to 40%, predisposing indoor and neutered pets to chronic obesity.',
      paragraphs: [
        'Resting Energy Requirement (RER): The baseline energy expenditure of a dog or cat at rest in a thermoneutral environment, supporting vital metabolic processes including cellular ion pumping, cardiac function, respiration, and thermoregulation.',
        'The Scientific Allometric Equation: The gold-standard equation recognized by the World Small Animal Veterinary Association (WSAVA) and the American College of Veterinary Internal Medicine (ACVIM) is: RER (kcal/day) = 70 × (Body Weight in kg)^0.75.',
        'The Linear Approximation: For pets weighing between 2 kg and 20 kg (4.4 lbs to 44 lbs), veterinary teams often use the linear approximation: RER (kcal/day) = (30 × Body Weight in kg) + 70. However, for giant breeds (> 25 kg) or toy breeds (< 2 kg), only the exponential 0.75 power formula provides accurate metabolic scaling.'
      ],
      table: {
        headers: ['Body Weight (lbs / kg)', 'Scientific RER (kcal/day)', 'Neutered Adult Dog (1.6 × RER)', 'Weight Loss Dog (1.0 × RER)', 'Neutered Adult Cat (1.2 × RER)'],
        rows: [
          ['5 lbs / 2.27 kg', '128 kcal/day', '205 kcal/day', '128 kcal/day', '154 kcal/day'],
          ['10 lbs / 4.54 kg', '216 kcal/day', '345 kcal/day', '216 kcal/day', '259 kcal/day'],
          ['25 lbs / 11.34 kg', '432 kcal/day', '691 kcal/day', '432 kcal/day', 'N/A (Canine range)'],
          ['50 lbs / 22.68 kg', '727 kcal/day', '1,163 kcal/day', '727 kcal/day', 'N/A (Canine range)'],
          ['75 lbs / 34.02 kg', '985 kcal/day', '1,576 kcal/day', '985 kcal/day', 'N/A (Canine range)'],
          ['100 lbs / 45.36 kg', '1,222 kcal/day', '1,955 kcal/day', '1,222 kcal/day', 'N/A (Canine range)']
        ]
      }
    },
    {
      id: 'mer-lifestage-multipliers',
      heading: 'Maintenance Energy Requirements (MER): Life-Stage & Activity Factors',
      intro:
        'RER represents coma baseline energy. To calculate total daily calories (Maintenance Energy Requirement / MER), multiply RER by your pet’s physiological life stage factor:',
      bulletPoints: [
        { label: 'Neutered Adult Dog', text: 'Factor: 1.6 × RER. Baseline for typical house pets with standard daily 30-to-60 minute leash walks.' },
        { label: 'Intact Adult Dog', text: 'Factor: 1.8 × RER. Unaltered reproductive hormones increase baseline metabolic rate.' },
        { label: 'Canine Weight Loss Program', text: 'Factor: 1.0 × RER (calculated at TARGET ideal weight, never current obese weight).' },
        { label: 'Active Working / Agility Dog', text: 'Factor: 2.0 to 3.5 × RER. Sled dogs, hunting hounds, and police canines during active working seasons.' },
        { label: 'Growing Puppy (< 4 months)', text: 'Factor: 3.0 × RER. Rapid bone calcification and tissue synthesis demands massive caloric density.' },
        { label: 'Growing Puppy (4 to 12 months)', text: 'Factor: 2.0 × RER. Moderate growth curve before adult skeletal plate closure.' },
        { label: 'Neutered Adult Indoor Cat', text: 'Factor: 1.2 × RER. Sedentary indoor feline lifestyle requires strict caloric control.' },
        { label: 'Feline Weight Loss Protocol', text: 'Factor: 0.8 to 1.0 × RER. Note: Cats must NEVER be starved rapidly; losing weight faster than 1% to 2% of body weight per week triggers fatal Feline Hepatic Lipidosis.' }
      ],
      warningBox: {
        title: 'Never Rapidly Starve an Overweight Cat',
        text: 'Rapid caloric deprivation in cats mobilizes large volumes of peripheral fatty acids to the liver, overwhelming hepatic processing and causing Hepatic Lipidosis (fatty liver syndrome)—a life-threatening liver failure requiring esophageal feeding tubes. Feline weight loss must be slow and steady under veterinary supervision.'
      }
    },
    {
      id: 'kitchen-scales-and-treat-boundaries',
      heading: 'Precision Measuring: Kitchen Scales vs. The 25% Cup Error Margin',
      intro:
        'A landmark study evaluated pet owners using volumetric plastic measuring cups to portion kibble: owners overfed by an average of 18% to 26% due to mounding kibble over the rim.',
      paragraphs: [
        'A single extra tablespoon of dry dog kibble per meal in a 15-pound dog is the caloric equivalent of a human eating an extra cheeseburger every day. Over 12 months, this minor human measuring error results in a 3-pound fat gain—a 20% increase in total body mass.',
        'Always read the nutritional label on your pet food bag for metabolizable energy per kilogram (e.g., 3,650 kcal ME/kg = 3.65 kcal per gram). Weighing meals on an inexpensive digital kitchen scale takes 10 seconds and guarantees 100% caloric precision.',
        'The 10% Treat Boundary: Treats, training morsels, dental chews, and table foods must comprise less than 10% of your pet’s total daily caloric allowance. Treats are not nutritionally complete and balanced; exceeding 10% dilutes essential dietary vitamins, amino acids, and minerals.'
      ],
      routineTip: {
        title: 'Calculate & Log Pet Portions in PetHorizon',
        text: 'Use PetHorizon’s daily feeding routine tracker to record exact gram meal allocations. Set meal reminders across household members to prevent accidental double-feeding and keep your pet at their lean, healthy ideal weight.',
        actionLabel: 'Track Pet Portions in PetHorizon'
      }
    }
  ]
};
