import { FullBlogArticle } from './types';

export const summerPetSafetyArticle: FullBlogArticle = {
  slug: 'summer-pet-safety-heatstroke-prevention-hot-pavement-guide',
  readTime: '16 min read',
  overviewSummary:
    'Summer brings hiking trails, lake days, and longer evening walks, but high ambient temperatures and humidity present acute, life-threatening physiological hazards to companion animals. Unlike humans who dissipate heat across millions of eccrine sweat glands, dogs can only sweat through tiny merocrine glands in their paw pads and must rely almost entirely on respiratory panting. When relative humidity exceeds 70% or ambient temperatures surpass 85°F (29°C), panting loses evaporative cooling efficacy, predisposing canines to rapid heatstroke, cellular necrosis, endotoxemia, and fatal disseminated intravascular coagulation (DIC). This veterinary guide details the biological cascade of heatstroke, safe emergency cooling protocols, asphalt temperature scales, and water intoxication risks.',
  sections: [
    {
      id: 'thermoregulation-and-heatstroke-cascade',
      heading: 'Canine Thermoregulation Biology: The Fatal Cellular Cascade of Heatstroke',
      intro:
        'Normal canine core rectal temperature ranges from 100.5°F to 102.5°F (38.0°C to 39.2°C). When physical exertion or environmental confinement drives core temperature above 104°F (40.0°C), cellular machinery begins to unravel.',
      paragraphs: [
        'How Dogs Cool Down: Dogs circulate blood through a dense network of blood vessels in their nasal turbinates and tongue. Panting moves air rapidly across these moist mucous membranes, using evaporative heat loss to cool arterial blood heading to the brain. However, as ambient humidity rises, moisture cannot evaporate into the already-saturated air, rendering panting ineffective.',
        'The Cellular Cascade of True Heatstroke (105°F to 107°F+): At sustained temperatures above 105.8°F (41.0°C), cellular proteins denature. The protective vascular endothelial lining collapses, triggering Disseminated Intravascular Coagulation (DIC)—a catastrophic syndrome where microscopic blood clots consume clotting factors, leading to simultaneous systemic thrombosis and uncontrollable internal hemorrhaging.',
        'Gastrointestinal Barrier Collapse: High core temperatures cause ischemic damage to the intestinal mucosal lining, allowing bacteria and endotoxins from the gut lumen to leak directly into the bloodstream (endotoxemia / septic shock). This is why dogs with heatstroke frequently develop bloody diarrhea and vomiting.',
        'High-Risk Demographics: Brachycephalic breeds (French Bulldogs, Pugs, Boxers, English Bulldogs) face up to 3 times higher risk due to Brachycephalic Obstructive Airway Syndrome (BOAS). Overweight dogs, dark-coated canines, and pets with pre-existing laryngeal paralysis or cardiovascular disease require strict indoor air conditioning during summer heatwaves.'
      ],
      table: {
        headers: ['Core Body Temp', 'Physiological State', 'Systemic Biological Impact', 'Emergency Clinical Intervention'],
        rows: [
          ['100.5°F – 102.5°F', 'Normal Resting Vitals', 'Homeostasis, optimal cellular enzymatic activity', 'Zero intervention required; standard hydration'],
          ['103.0°F – 104.5°F', 'Heat Exhaustion (Warning)', 'Compensatory tachypnea, peripheral vasodilation', 'Immediate shade/AC, rest, small sips of cool water'],
          ['105.0°F – 106.8°F', 'Severe Heatstroke (Emergency)', 'Cerebral edema, renal tubular damage, mucosal sloughing', 'Active cooling with cool tap water; rush to 24/7 ER'],
          ['107.0°F+ (41.6°C+)', 'Critical Multiorgan Failure', 'DIC coagulopathy, ARDS, coma, cardiac arrest', 'Critical ICU hospitalization, plasma transfusions, IV mannitol']
        ]
      }
    },
    {
      id: 'emergency-cooling-protocol-dos-donts',
      heading: 'Emergency Cooling Protocol: What to Do (And What NEVER to Do)',
      intro:
        'If your dog displays signs of heatstroke (glassy unfocused eyes, dark red or purple gums, excessive thick ropy drool, stumbling drunken gait, or collapse), your immediate actions determine survival:',
      paragraphs: [
        'Why You Must NEVER Use Ice Water or Freezing Baths: Submerging an overheated dog in ice water causes sudden peripheral vasoconstriction—the superficial blood vessels in the skin clamp shut, trapping superheated blood deep inside internal organs like an insulated thermos. Furthermore, freezing water induces violent shivering, which physiologically increases metabolic heat production. Always use cool (lukewarm to cool) tap water.',
        'Step 1: Move Directly Into Air Conditioning. Carry (do not force the dog to walk) into a cool air-conditioned vehicle or building.',
        'Step 2: Apply Cool Water and Continuous Airflow. Wet the paws, inner groin, armpits, and neck with cool tap water. Direct a high-speed car air conditioning vent or electric fan directly over the wet fur to maximize rapid evaporative cooling.',
        'Step 3: Stop Active Cooling at 103.5°F (39.7°C). Check rectal temperature every 3 minutes. Cease active wetting once the temperature drops to 103.5°F to prevent dangerous hypothermic rebound shock.',
        'Step 4: Transport Immediately to Veterinary ER. Even if the dog seems to recover after cooling, irreversible delayed organ damage (acute renal failure and DIC) can manifest 24 to 48 hours later without intravenous fluid therapy and serial blood chemistry monitoring.'
      ],
      warningBox: {
        title: 'Parked Car Greenhouse Physics: Fatal in 15 Minutes',
        text: 'When ambient outdoor temperature is just 70°F (21°C), the interior of a parked car reaches 89°F in 10 minutes and 104°F in 30 minutes, even with windows cracked 2 inches. On an 85°F day, car interior temperatures soar to 120°F in under 20 minutes. Leaving pets in cars in summer is lethal.'
      }
    },
    {
      id: 'hot-pavement-and-water-intoxication-hazards',
      heading: 'Hidden Summer Hazards: Asphalt Burns & Water Intoxication (Hyponatremia)',
      intro:
        'Summer walking and lake games conceal two acute hazards that catch well-intentioned pet owners unprepared:',
      bulletPoints: [
        { label: 'Hot Pavement Thermal Burns', text: 'Asphalt absorbs solar radiation: at 86°F (30°C) ambient temperature, direct asphalt temperature reaches 135°F (57°C). At this temperature, full-thickness skin blister burns occur in under 60 seconds. Always perform the 7-second bare-hand test before walking.' },
        { label: 'Water Intoxication (Acute Hyponatremia)', text: 'Dogs who bite water obsessively while fetching balls in lakes, swimming in pools, or playing with high-pressure garden hoses ingest massive volumes of water. Excess fluids dilute extracellular sodium ions, causing osmotic fluid shifts into brain cells (cerebral edema). Symptoms include lethargy, vomiting, dilated pupils, bloating, and seizures. Limit continuous water-biting play to 10-minute bursts.' },
        { label: 'Cyanobacteria (Blue-Green Algae)', text: 'Never allow dogs to swim in or drink from warm, stagnant freshwater lakes with blue-green, pea-soup, or paint-like scum. Cyanobacteria produce microcystins and anatoxins that cause fatal neurotoxicity and fulminant hepatic necrosis within 30 to 60 minutes.' }
      ],
      routineTip: {
        title: 'Check Summer Walk Advisories in PetHorizon',
        text: 'Schedule summer walks before 8:00 AM or after 8:00 PM. Log daily hydration and receive notifications when local temperature and humidity indexes exceed safe canine exercise limits.',
        actionLabel: 'Schedule Safe Summer Walks in PetHorizon'
      }
    }
  ]
};
