import { FullBlogArticle } from './types';

export const petFirstAidKitArticle: FullBlogArticle = {
  slug: 'pet-first-aid-kit-checklist-emergency-preparedness-plan',
  readTime: '16 min read',
  overviewSummary:
    'When an acute medical crisis strikes—whether an arterial laceration from broken glass, sudden airway obstruction, chemical exposure, or sudden cardiopulmonary arrest—having a purpose-built pet first aid kit and knowing evidence-based stabilization protocols can mean the difference between survival and death before reaching an emergency veterinary hospital. Standard human first aid kits contain analgesics (such as acetaminophen, ibuprofen, and naproxen) and topical agents (such as tea tree oil or hydrocortisone formulations with zinc) that cause acute renal failure, hepatic necrosis, or red blood cell hemolysis in dogs and cats. This veterinary emergency preparedness guide adheres to the RECOVER Initiative (Reassessment Campaign on Veterinary Resuscitation) clinical guidelines, detailing vital sign diagnostic thresholds, triage scoring, life-support algorithms, arterial hemorrhage control, and 72-hour disaster evacuation go-bags.',
  sections: [
    {
      id: 'essential-pet-first-aid-inventory',
      heading: 'The Clinical Pet First Aid Kit: Essential Triage & Trauma Supplies',
      intro:
        'A dedicated pet first aid kit should be housed in an airtight, water-resistant container with organized internal compartments. Every family member and caregiver must know its exact storage location, and expiration dates on sterile flushes and topical antiseptics should be audited every six months.',
      table: {
        headers: ['Category', 'Required Supplies', 'Clinical Purpose & Usage Technique'],
        rows: [
          [
            'Wound Debridement & Cleansing',
            'Sterile 0.9% NaCl saline wash (250 ml), 0.05% diluted chlorhexidine diacetate solution, sterile 4x4 gauze sponges',
            'Irrigates contamination and debris from lacerations without tissue cytotoxicity. Avoid hydrogen peroxide on open wounds as it destroys healthy granulation tissue and fibroblast proliferation.'
          ],
          [
            'Hemostatic & Bandaging Materials',
            'Self-adherent cohesive wrap (Vetrap / Coban), sterile non-stick Telfa pads, cast padding roll, surgical paper tape',
            'Constructs a 3-layer protective compression bandage without adhering to animal hair. Controls venous hemorrhage while maintaining distal circulation.'
          ],
          [
            'Bleeding Arrest Agents',
            'Styptic powder (ferric subsulfate / Kwik Stop), calcium alginate dressing pads, clean cotton-tipped applicators',
            'Rapidly coagulates capillary bleeding from sheared toenails, quick nicks, and superficial abrasions. Not intended for deep cavitary or arterial wounds.'
          ],
          [
            'Diagnostic & Monitoring Instruments',
            'Digital flexible rectal thermometer, water-soluble lubricating jelly, LED pupillary penlight, blunt bandage shears',
            'Accurately assesses core core temperature (normal: 100.5°F–102.5°F); evaluates pupil symmetry and pupillary light reflex (PLR) during head trauma.'
          ],
          [
            'Barrier Protection & Restraint',
            'Soft nylon basket muzzle, heavy microfiber towel, slip-lead leash, thick leather handling gloves',
            'Prevents involuntary pain-induced bite reflexes while stabilizing fractures. Crucial safety measure before examining any injured animal.'
          ],
          [
            'Extraction & Poison Management',
            'Pointed splinter forceps, tick extraction hook, activated charcoal paste (use only under direct toxicologist guidance), sterile eye flush',
            'Removes embedded glass, thorns, or external parasites. Activated charcoal binds gastrointestinal toxins when emesis is contraindicated or complete.'
          ]
        ]
      },
      warningBox: {
        title: 'Safety First: The Involuntary Bite Reflex & Muzzling Rules',
        text: 'Even the most placid, affectionate pet will bite aggressively when experiencing intense trauma pain, hypovolemic shock, or pelvic fractures. Always secure an injured dog with a soft basket muzzle or temporary gauze muzzle before inspecting traumatic injuries. CRITICAL CONTRAINDICATION: Never place a muzzle on an animal that is vomiting, experiencing respiratory distress, coughing blood, or displaying signs of brachycephalic heat exhaustion, as this creates an immediate risk of airway obstruction and fatal aspiration.'
      }
    },
    {
      id: 'vital-signs-baseline-and-triage',
      heading: 'How to Measure Pet Vitals: Quantitative Triage for Emergency Hospital Hand-Offs',
      intro:
        'When calling ahead to an emergency veterinary hospital, delivering quantitative baseline vital signs allows the critical care triage nurse to prioritize immediate trauma bay entry upon your arrival.',
      bulletPoints: [
        {
          label: 'Core Body Temperature (Rectal)',
          text: 'Apply lubricating jelly to a dedicated digital thermometer. Insert gently 1 to 2 inches into the rectum against the mucosal wall. Healthy baseline: 100.5°F to 102.5°F (38.0°C to 39.2°C). A temperature above 104.0°F (40.0°C) signifies active hyperthermia/heatstroke demanding immediate cooling; a temperature below 99.0°F (37.2°C) signals impending circulatory shock or severe hypothermia.'
        },
        {
          label: 'Femoral Arterial Pulse & Heart Rate',
          text: 'Place two fingers inside the medial groove of the upper inner thigh where the femoral artery courses over the femur. Count beats for 15 seconds and multiply by 4. Normal adult dogs: 60 to 140 bpm (giant breeds: 60–90; small breeds: 100–140). Normal adult cats: 140 to 220 bpm. Weak, thready pulses indicate systemic hypoperfusion, while bounding pulses accompanied by tachycardia indicate early sepsis or extreme pain.'
        },
        {
          label: 'Respiration Rate & Effort',
          text: 'Observe thoracic and abdominal excursions while the pet is stationary. Normal resting respiratory rate: 15 to 30 breaths per minute. Elevated rates exceeding 40 breaths/min at rest, extended neck posture, flared nostrils, or abdominal pumping signify severe dyspnea, pleural effusion, or pulmonary contusion requiring supplemental oxygen.'
        },
        {
          label: 'Mucous Membrane Color & Capillary Refill Time (CRT)',
          text: 'Gently lift the upper lip and inspect the gingiva above the canine tooth. Healthy gums display a moist bubblegum-pink color. Depress your thumb against the gum to blanch the capillary bed, then release. The color must return within 1.5 to 2.0 seconds. Brick-red gums indicate sepsis or heatstroke; porcelain white or pale grey indicates hemorrhagic shock or severe anemia; cyanotic blue/purple gums indicate severe arterial hypoxemia.'
        }
      ],
      paragraphs: [
        'Document these four vital signs on paper or within PetHorizon immediately upon injury discovery. Re-evaluate and record values every 10 to 15 minutes during transit to track systemic deterioration or stabilization.'
      ]
    },
    {
      id: 'arterial-bleeding-wound-stabilization',
      heading: 'Severe Hemorrhage Control: Direct Pressure, Pressure Points & Tourniquet Cautions',
      intro:
        'Arterial lacerations can cause exsanguination and fatal hypovolemic collapse within 3 to 5 minutes. Stopping heavy blood loss requires disciplined, immediate intervention before attempting transport.',
      paragraphs: [
        'Direct Continuous Pressure: Place several layers of sterile gauze pads directly over the bleeding wound and apply firm, uninterrupted manual compression with the palm of your hand for a minimum of 5 full minutes without lifting the dressing to "check." Peeling back the dressing disrupts the fragile primary platelet plug and fibrin matrix.',
        'Layered Bandaging: If blood soaks through the initial gauze pads, do NOT remove them. Add additional sterile gauze and absorbent padding directly on top of the saturated layers and wrap snugly with self-adherent cohesive wrap (Vetrap). Ensure you do not wrap so tightly that distal paw swelling, cold footpads, or venous cyanosis occurs.',
        'Brachial & Femoral Pressure Points: For severe extremity lacerations where direct pressure fails to stem pulsating bright red arterial flow, compress the brachial artery against the inner humerus (for front leg injuries) or the femoral artery against the medial femur (for rear leg injuries).',
        'Tourniquet Risks: Improvised tourniquets carry high risks of irreversible ischemic nerve damage, tissue necrosis, and limb amputation. In companion animal veterinary medicine, tourniquets should be reserved exclusively for catastrophic traumatic extremity amputations or arterial transections where sustained manual pressure has completely failed to halt life-threatening exsanguination. If applied, note the exact minute of placement and inform the trauma team immediately upon hospital entry.'
      ]
    },
    {
      id: 'recover-pet-cpr-protocol',
      heading: 'Evidence-Based Pet CPR: The RECOVER Initiative Guidelines',
      intro:
        'In companion animals experiencing cardiopulmonary arrest (CPA)—manifested by sudden collapse, unresponsiveness, lack of spontaneous respiration, and absence of an apex heartbeat—initiating Basic Life Support (BLS) within 60 seconds is critical for cerebral and coronary perfusion.',
      paragraphs: [
        '1. Verify Cardiac Arrest (Rule of 5-10 Seconds): Call the pet’s name, touch the shoulder, and check for spontaneous chest movement or femoral pulse for no more than 10 seconds. If there is no response and no palpable pulse, initiate CPR immediately. Research demonstrates that the harm of brief CPR on an unresponsive animal is minimal compared to the catastrophic delay of withholding compressions.',
        '2. Patient Positioning: Lay the dog or cat in lateral recumbency (on their right side) on a rigid, flat surface or hard floor. Stand or kneel behind the animal’s spine.',
        '3. Chest Compression Mechanics: Lock your elbows, align your shoulders directly over your hands, and bend from your waist to deliver force. Compress at a frequency of 100 to 120 compressions per minute (the tempo of the Bee Gees song "Stayin\' Alive"). Depress the chest by 1/3 to 1/2 of its lateral diameter, allowing complete, unobstructed elastic chest recoil between compressions to facilitate diastolic cardiac refill.',
        'Chest Conformation Variations:',
        '• Keel-Chested / Deep-Chested Dogs (Greyhounds, Dobermans, Boxers): Position your hands directly over the heart (ventral third of the chest, at the level of the retracted elbow) using the cardiac pump theory.',
        '• Barrel-Chested / Round Dogs (Labradors, Golden Retrievers, Bulldogs): Position your hands over the widest circumference of the rib cage using the thoracic pump theory, where compressions elevate overall intrathoracic pressure to eject blood.',
        '• Cats & Small Dogs (<10 kg): Utilize a one-handed circumferential technique, wrapping fingers around the ventral sternum directly over the heart and compressing between your thumb and fingers, or use a two-handed approach over the costochondral junction.',
        '4. Rescue Breathing (Mouth-to-Snout): In single-rescuer CPR without an advanced endotracheal tube, perform a 30:2 ratio: 30 continuous chest compressions followed immediately by 2 rescue breaths. To deliver breaths, close the animal’s lips tightly, hold the muzzle shut, extend the cervical spine in a straight line, seal your lips completely over both nostrils, and exhale until you observe thoracic elevation. Avoid over-inflation, which creates barotrauma and impedes venous blood return to the right atrium.'
      ],
      warningBox: {
        title: 'Two-Minute CPR Cycles Without Interruption',
        text: 'The RECOVER clinical consensus emphasizes that compressions must continue in uninterrupted 2-minute cycles. Pausing compressions even for 5 to 10 seconds causes coronary perfusion pressure to drop to zero, requiring dozens of compressions to rebuild adequate arterial flow. Rotate compressors every 2 minutes to prevent rescuer fatigue.'
      }
    },
    {
      id: 'choking-and-heimlich-maneuver',
      heading: 'Choking & Foreign Body Airway Obstruction: The Pet Heimlich Maneuver',
      intro:
        'Sudden, frantic pawing at the mouth, extended neck, stridor, gagging, and rapid cyanosis indicate total or subtotal mechanical airway obstruction by balls, rawhides, or chew toys.',
      paragraphs: [
        'Step 1: Visual Inspection & Finger Sweep: Open the mouth by pressing the upper lips inward over the teeth to avoid bites. Depress the tongue and illuminate the hypopharynx with your LED penlight. If an object is clearly visible and accessible, carefully sweep it out using curved forceps or a finger. CAUTION: Never perform a blind finger sweep; pushing a foreign body deeper can wedge it firmly into the subglottic larynx.',
        'Step 2: Gravity & Back Blows: For small dogs and cats, suspend the animal upside down by the hips with the head pointing down, supporting the chest, and deliver 4 to 5 firm blows between the shoulder blades with the heel of your hand.',
        'Step 3: Canine Heimlich Maneuver (Abdominal Thrusts): If the object remains lodged, stand behind the standing dog (or place a recumbent dog on their side). Form a fist with one hand, place it in the soft abdomen just below the rib cage and sternum, cup your other hand over the fist, and deliver 4 to 5 rapid, upward and inward thrusts toward the diaphragm. This suddenly compresses residual lung air to expel the lodged foreign body.'
      ]
    },
    {
      id: 'disaster-72-hour-evacuation-bag',
      heading: 'The 72-Hour Disaster Evacuation Go-Bag: Hurricanes, Wildfires & Floods',
      intro:
        'During catastrophic natural disasters, human evacuation shelters often require strict animal documentation, containment gear, and self-contained food reserves before admitting pets.',
      table: {
        headers: ['Category', 'Essential Gear', 'Preparedness Specification'],
        rows: [
          [
            'Sustenance & Hydration',
            '72-hour supply of vacuum-sealed dry food, pull-tab canned food, 3 gallons of bottled water, collapsible silicone bowls',
            'Avoid foods that require refrigeration or cooking. Rotate water bottles every 6 months to prevent plastic leaching.'
          ],
          [
            'Medical & Prescription Dossier',
            'Waterproof pouch with rabies certificates, vaccination titers, 14-day supply of chronic medications, microchip registry ID',
            'Emergency boarding facilities and out-of-state shelters cannot accept companion animals without verified rabies status.'
          ],
          [
            'Containment & Transport',
            'Sturdy airline-compliant hard carrier, spare harness, 6-foot heavy nylon leash, carabiners',
            'Label carriers with owner contact numbers, animal medical alerts, and an emergency out-of-region secondary contact.'
          ],
          [
            'Sanitation & Comfort',
            'Pet-safe disinfectant wipes, waste bags, small disposable litter pan with cat litter, familiar blanket or toy',
            'Pheromone sprays (Feliway / Adaptil) reduce severe stress-induced cortisol spikes in loud disaster shelters.'
          ]
        ]
      },
      routineTip: {
        title: 'Digitize Emergency Health Records in PetHorizon',
        text: 'Store digital copies of rabies certificates, bloodwork history, microchip numbers, and veterinary contact cards directly in PetHorizon. In a disaster evacuation, your mobile device provides immediate, offline-accessible proof of ownership and vaccination status.',
        actionLabel: 'Store Emergency Records in PetHorizon'
      }
    }
  ]
};
