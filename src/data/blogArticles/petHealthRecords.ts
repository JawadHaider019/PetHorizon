import { FullBlogArticle } from './types';

export const petHealthRecordsArticle: FullBlogArticle = {
  slug: 'pet-health-records-medication-schedule-tracker',
  readTime: '15 min read',
  overviewSummary:
    'Whether managing a senior dog with heart disease, a diabetic cat, or simply keeping routine vaccinations organized, maintaining meticulous pet health records is essential. During after-hours veterinary emergencies or unexpected hospitalizations, having instant access to your pet’s complete medical history can be lifesaving. This clinical guide outlines the five vital records every pet parent must maintain, veterinary protocols for administering medications safely, and how PetHorizon unifies your pet’s health passport.',
  sections: [
    {
      id: 'five-vital-health-records',
      heading: 'The 5 Critical Health Records Every Pet Parent Must Maintain',
      intro:
        'Veterinary clinics often operate on fragmented, proprietary record systems. If you visit an emergency clinic, move cities, or board your pet while traveling, the responsibility of providing accurate medical history falls squarely on you.',
      paragraphs: [
        'A comprehensive pet medical profile contains far more than just rabies certificates. Tracking subtle changes over time allows your veterinarian to detect early organ dysfunction, dental disease, or metabolic shifts before clinical symptoms escalate.',
        '1. Baseline Vitals & Weight Curves: Tracking monthly body weight is the single most sensitive indicator of feline kidney disease, canine cardiac decline, or endocrine disorders like Cushing’s and diabetes. A 10% weight loss in a cat is equivalent to a 15-pound drop in an adult human and warrants immediate bloodwork.',
        '2. Certified Immunization Records: Municipal pet licensing, residential leases, airline travel, and boarding kennels require verified vaccination records showing manufacturer lot numbers, administration dates, and expiration dates.',
        '3. Active & Historical Medication Logs: Exact drug names, concentrations (e.g., mg/ml or tablet strength), dosing frequencies, and prescribing clinics must be noted to prevent fatal drug-drug interactions in emergency settings.',
        '4. Diagnostic Bloodwork & Imaging Baselines: Retaining digital copies of annual complete blood counts (CBC), chemistry panels, urinalysis, and X-rays gives veterinarians a baseline against which acute illness can be compared.',
        '5. Adverse Reactions & Dietary Sensitivities: Documenting adverse drug events (such as facial swelling after a particular vaccine or acute gastrointestinal distress from chicken protein) prevents dangerous re-exposure.'
      ],
      table: {
        headers: ['Record Category', 'Key Data Fields to Record', 'Recommended Update Frequency', 'Why It Matters'],
        rows: [
          ['Weight & Vitals', 'Body weight (kg/lbs), Body Condition Score (1–9), resting respiratory rate', 'Monthly (puppies/seniors) or Quarterly (adults)', 'Spots early congestive heart failure, renal disease, and obesity'],
          ['Immunizations', 'Vaccine brand, serial/lot number, date given, booster expiration date', 'Annually or per 3-year booster cycle', 'Mandatory for municipal licenses, boarding, and legal rabies compliance'],
          ['Medications & Rx', 'Drug name, exact dosage (mg), administration route, prescribing doctor', 'Immediate upon prescription change', 'Prevents toxic drug interactions during emergency veterinary admissions'],
          ['Lab & Imaging', 'CBC panel, chemistry values, urinalysis, radiograph/ultrasound reports', 'Annually (senior exams) or post-surgery', 'Provides healthy baseline to measure acute organ stress against'],
          ['Allergies & Reactions', 'Specific drug, food allergen, reaction severity (hives, vomiting, lethargy)', 'Immediate upon occurrence', 'Prevents life-threatening anaphylaxis or severe dermatological flares']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=1200&h=750&crop=faces,focalpoint&fp-y=0.4&q=85',
        caption: 'Centralized health tracking: Storing medication dosages and vaccination due dates digitally eliminates paper record confusion.',
        altText: 'Veterinary clinical examination and digital pet health record tracking'
      }
    },
    {
      id: 'medication-adherence-protocols',
      heading: 'Medication Management: Dosages, Intervals & Missed Dose Protocols',
      intro:
        'Administering pet medications requires strict adherence to veterinary instructions. Unlike humans, dogs and cats metabolize pharmaceuticals via distinct hepatic and renal pathways, making slight dosing errors potentially catastrophic.',
      paragraphs: [
        'Understanding Dosing Frequencies: Veterinary prescriptions carry precise Latin abbreviations that dictate blood serum concentration intervals:',
        '• SID (Once Daily / Every 24 Hours): Typically used for maintenance medications like thyroid hormone replacement or long-acting allergy therapies.',
        '• BID (Twice Daily / Every 12 Hours): Crucial for antimicrobials and cardiac medications where blood levels must remain within a therapeutic window around the clock.',
        '• TID (Three Times Daily / Every 8 Hours): Requires meticulous caregiver scheduling to ensure doses do not overlap or space out excessively.',
        'What to Do If You Miss a Dose: Never double up on a medication to compensate for a missed dose. If the missed dose is realized within 2 to 3 hours of the scheduled time, administer it immediately. If it is already close to the next scheduled interval, skip the missed dose and resume normal timing. With narrow-therapeutic-index drugs like insulin or phenobarbital, always consult your veterinarian immediately before administering an off-schedule dose.'
      ],
      warningBox: {
        title: 'Critical Safety Warning: Never Give Human NSAIDs or Painkillers',
        text: 'Common human over-the-counter painkillers (such as Tylenol/Acetaminophen, Advil/Ibuprofen, and Aleve/Naproxen) are acutely toxic to dogs and cats. Acetaminophen causes fatal methemoglobinemia and liver failure in cats, while ibuprofen causes severe gastric perforation and acute kidney necrosis in dogs.'
      },
      routineTip: {
        title: 'PetHorizon Recurring Medication Reminders',
        text: 'Set up customized dosage schedules with built-in push alarms in PetHorizon. Caregivers can confirm administration with a single checkmark, keeping everyone informed in real time.',
        actionLabel: 'Set Medication Reminder'
      }
    },
    {
      id: 'emergency-preparedness-digital-passport',
      heading: 'Emergency Readiness: Why Paper Records Fail and Digital Sync Wins',
      intro:
        'When medical emergencies happen at 2:00 AM on a Sunday, the family pet binder is often sitting on a shelf miles away. Having an instant, exportable digital health passport on your smartphone bridges critical communication gaps.',
      paragraphs: [
        'In emergency triage rooms, veterinary staff need answers within seconds: Is the pet on anticoagulants? Does this dog have a heart murmur? When was their last seizure? What antibiotics were prescribed last week?',
        'When owners are distressed, memory lapses are natural and common. Pulling up an organized mobile record allows the attending emergency clinician to initiate immediate, targeted therapy without running duplicate diagnostics or risking adverse drug combinations.',
        'Boarding & Grooming Peace of Mind: Most pet care facilities require up-to-date proof of Rabies, Bordetella, and DHPP immunizations before intake. PetHorizon allows you to export or display a verified digital record directly from your phone screen.'
      ],
      stepByStep: {
        title: 'How to Organize Your Pet’s Digital Health Vault',
        steps: [
          {
            number: 1,
            title: 'Photograph or Scan Existing Paper Records',
            description: 'Request a full printout or PDF history from your primary veterinary clinic covering all historical vaccinations, surgeries, and microchip numbers.'
          },
          {
            number: 2,
            title: 'Enter Active Prescriptions & Exact Dosages',
            description: 'Log active medications, milligram strengths, administration instructions, and prescribing veterinarians into PetHorizon.'
          },
          {
            number: 3,
            title: 'Set Recurring Health & Preventative Alerts',
            description: 'Schedule automated reminders for monthly flea/tick chewables, heartworm preventatives, and annual wellness examinations.'
          },
          {
            number: 4,
            title: 'Sync With Family Caregivers & Sitters',
            description: 'Share your pet profile with family members, pet sitters, or dog walkers via PetHorizon’s Family Hub QR code for seamless team care.'
          }
        ]
      },
      productShowcase: {
        badge: 'Essential Health Tool',
        title: 'PetHorizon Clinical Health Card & Medical Vault',
        provider: 'Included Free in PetHorizon (Android & iOS)',
        price: 'Free Lifetime Access',
        image: '/screenshots/pet-profile-screen.webp',
        actionText: 'Organize Pet Records in PetHorizon',
        actionUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        actionType: 'playStore'
      }
    },
    {
      id: 'veterinary-communication-tips',
      heading: 'How to Maximize Your Veterinary Consultations',
      intro:
        'Veterinary visits are often time-constrained. Arriving with documented trends transforms your appointment from guesswork into collaborative precision medicine.',
      paragraphs: [
        'Track Behavior Trends: Rather than telling the vet "my dog has been acting a little tired lately," sharing that your dog’s daily walk distance dropped from 3.2 km to 1.1 km over the past three weeks provides objective clinical evidence.',
        'Log Water Intake & Elimination: Increases in water consumption (polydipsia) and urination (polyuria) are the earliest signs of renal insufficiency, diabetes mellitus, and hyperadrenocorticism. Recording these patterns allows prompt urinalysis screening.',
        'Bring the Medication Packaging: If your pet takes compound liquids or specialized pills, bringing the actual bottles or taking photos of the prescription labels prevents transcription errors.'
      ],
      bulletPoints: [
        {
          label: 'Keep Microchip Numbers Accessible',
          text: 'Save your pet’s 15-digit microchip number and registry phone number in your PetHorizon profile for instant access if your pet goes missing.'
        },
        {
          label: 'Record Baseline Vital Signs',
          text: 'Know your pet’s resting respiratory rate while sleeping (normal is 15 to 30 breaths per minute). A persistent rise above 30 breaths per minute is an early warning sign of congestive heart failure.'
        },
        {
          label: 'Keep an Emergency Contact Card',
          text: 'Always store the phone number and address of the nearest 24-hour emergency animal hospital in your phone and pet profile.'
        }
      ]
    }
  ]
};
