import { FullBlogArticle } from './types';

export const petFirstAidKitArticle: FullBlogArticle = {
  slug: 'pet-first-aid-kit-checklist-emergency-preparedness-plan',
  readTime: '15 min read',
  overviewSummary:
    'When a medical crisis occurs—whether an arterial cut on broken glass, a venomous snakebite, a bee sting causing facial swelling, or sudden choking—having a dedicated, fully stocked pet first aid kit and an emergency action plan can save your animal’s life before you reach the hospital. Human first aid kits contain drugs and antiseptics that are toxic to dogs and cats (such as acetaminophen, ibuprofen, and tea tree oil). This veterinary emergency guide details exact supply checklists, vital signs benchmarks, CPR protocols, and natural disaster preparedness plans.',
  sections: [
    {
      id: 'anatomy-of-a-pet-first-aid-kit',
      heading: 'The Master Pet First Aid Kit Checklist: Supplies Every Pet Parent Must Own',
      intro:
        'Store these essential supplies in a durable, waterproof tackle box or zippered duffel in an easily accessible location known to all family members.',
      table: {
        headers: ['First Aid Category', 'Essential Supplies', 'Specific Clinical Function'],
        rows: [
          ['Wound Care & Bandaging', 'Self-adherent cohesive wrap (Vetrap), sterile gauze pads, medical tape, blunt bandage scissors', 'Secures wound dressings without sticking to animal fur; controls hemorrhage'],
          ['Antiseptics & Cleansers', 'Chlorhexidine solution (0.05% diluted) or povidone-iodine, sterile saline eye wash flush', 'Cleans traumatic skin lacerations without stinging; safely flushes dust from corneas'],
          ['Bleeding Control', 'Styptic powder (Kwik Stop) or plain cornstarch, clean cotton swabs', 'Stops bleeding from torn toenails, quick nicks, and minor superficial abrasions'],
          ['Diagnostic Tools', 'Digital rectal thermometer (with petroleum jelly lubricant), mini LED penlight, tick removal tool', 'Accurately measures core body temp (normal: 100.5°F–102.5°F); inspects throat and pupils'],
          ['Safety & Restraint', 'Soft nylon basket muzzle, thick towel, slip-lead leash', 'Prevents pain-induced bite reflexes while handling severely injured pets during transport']
        ]
      },
      warningBox: {
        title: 'Always Muzzle Injured Pets (Except When Vomiting or Gasping)',
        text: 'Even the gentlest dog or cat will bite involuntarily when suffering from a fractured bone or acute abdominal pain. Place a soft muzzle before examining wounds. NEVER muzzle an animal that is vomiting, choking, hyperventilating, or experiencing heatstroke.'
      }
    },
    {
      id: 'canine-feline-vital-signs',
      heading: 'How to Check Pet Vitals: Temperature, Pulse & Capillary Refill Time (CRT)',
      intro:
        'Knowing your pet’s baseline healthy vitals allows you to communicate quantitative data to emergency triage nurses over the phone.',
      bulletPoints: [
        { label: 'Rectal Temperature', text: 'Normal: 100.5°F – 102.5°F (38.0°C – 39.2°C). Temperatures over 104°F indicate heatstroke or infection; under 99°F indicates hypothermia or circulatory shock.' },
        { label: 'Femoral Pulse & Heart Rate', text: 'Place fingers inside the upper inner thigh where the femoral artery pulses. Normal adult dogs: 60 – 140 bpm (smaller dogs beat faster). Cats: 140 – 220 bpm.' },
        { label: 'Respiration Rate', text: 'Count chest rises while resting. Normal: 15 to 30 breaths per minute. Effortful abdominal gasping or shallow panting exceeding 40 breaths/min indicates respiratory distress.' },
        { label: 'Capillary Refill Time (CRT)', text: 'Press your thumb firmly against the pink gum above an upper canine tooth, then release. The white blanch mark must return to healthy bubblegum pink in under 2 seconds. A CRT over 2 seconds or pale/blue gums signals circulatory collapse.' }
      ]
    },
    {
      id: 'pet-cpr-and-disaster-plan',
      heading: 'Pet CPR Basics & The 72-Hour "Go-Bag" Disaster Plan',
      intro:
        'Cardiopulmonary resuscitation (CPR) buys critical oxygen delivery to the brain during cardiac arrest while en route to a veterinary emergency center.',
      paragraphs: [
        'Pet CPR Compression Technique: Lay the pet on their right side on a firm flat surface. For barrel-chested dogs, compress the widest part of the ribcage. For keel-chested deep dogs (Greyhounds), compress directly over the heart. For cats and small dogs, cup one hand around the sternum. Compress 100 to 120 times per minute, depressing the chest by 1/3 to 1/2 its width.',
        'Rescue Breathing: Close the pet’s jaws tightly, extend the neck, and seal your mouth completely over the pet’s nostrils. Deliver 2 rescue breaths for every 30 chest compressions, watching for chest rise.',
        'The 72-Hour Emergency Evacuation Bag: In natural disasters (hurricanes, earthquakes, wildfires), keep a packed pet "go-bag" containing 7 days of canned and dry food, 3 gallons of potable water, portable bowls, extra leashes, copies of vaccination certificates, and a 14-day supply of all prescription medications.'
      ],
      routineTip: {
        title: 'Save Emergency ER Speed-Dials in PetHorizon',
        text: 'Store the telephone numbers, street addresses, and turn-by-turn directions to your nearest 24/7 veterinary emergency hospital and ASPCA Animal Poison Control in PetHorizon for instant 1-tap dialing.',
        actionLabel: 'Store Emergency Contacts in PetHorizon'
      }
    }
  ]
};
