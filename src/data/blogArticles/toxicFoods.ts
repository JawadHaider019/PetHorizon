import { FullBlogArticle } from './types';

export const toxicFoodsArticle: FullBlogArticle = {
  slug: 'toxic-foods-dogs-cats-aspca-poison-control',
  readTime: '16 min read',
  overviewSummary:
    'Accidental poison ingestion is one of the most frequent clinical crises handled by veterinary emergency hospitals and animal poison control centers. Common human pantry items, holiday foods, and decorative indoor houseplants contain chemical compounds that are benign to humans but acutely fatal to dogs and cats due to unique feline and canine metabolic pathways. Supported by case registries from the ASPCA Animal Poison Control Center (APCC) and the Pet Poison Helpline, this emergency clinical reference outlines high-risk household toxins, exact toxic mechanisms, lethal dose thresholds, and veterinary decontamination windows.',
  sections: [
    {
      id: 'emergency-action-protocol',
      heading: 'The 15-Minute Poison Emergency Action Protocol',
      intro:
        'When you discover your pet has ingested a toxic food, chemical, or plant, panic is your greatest enemy. Follow this veterinary protocol immediately:',
      paragraphs: [
        'Step 1: Terminate Ingestion & Preserve Packaging. Immediately remove remaining items from your pet’s mouth or environment. Collect the wrapper, food container, candy label, or plant leaves into a sealable bag. The exact ingredients list, cocoa percentage, or artificial sweetener concentration allows the toxicologist to calculate lethal dose per kilogram in seconds.',
        'Step 2: Do NOT Induce Vomiting at Home Without Veterinary Authorization. Administering table salt is notoriously dangerous and frequently fatal, causing acute hypernatremia and irreversible cerebral edema. Using concentrated household hydrogen peroxide causes severe hemorrhagic gastritis and, if aspirated into the lungs, fatal chemical pneumonia. Never induce vomiting if the pet is lethargic, seizing, recumbent, or if the toxin was caustic or hydrocarbon-based.',
        'Step 3: Call Ahead to the Emergency Animal Hospital. Inform the triage staff of your pet’s exact body weight, the ingested substance, the estimated quantity consumed, and the time elapsed. This allows technicians to prepare apomorphine (for dogs) or dexmedetomidine (for cats) and calculate activated charcoal doses before you arrive.'
      ],
      warningBox: {
        title: '24/7 Animal Poison Hotlines (US, Canada & International)',
        text: 'ASPCA Animal Poison Control Center (APCC): (888) 426-4435 • Pet Poison Helpline: (855) 764-7661. Call immediately while en route to the veterinary emergency clinic.'
      }
    },
    {
      id: 'high-risk-toxins-breakdown',
      heading: 'The 8 Most Dangerous Household Food Toxins & Their Pathology',
      intro:
        'Different chemical compounds target distinct mammalian organs. Review the biological mechanisms and clinical danger thresholds below:',
      paragraphs: [
        '1. Chocolate & Cocoa Products (Theobromine & Caffeine): Methylxanthine alkaloids stimulate the central nervous system and cardiac beta-receptors while inhibiting cellular adenosine receptors and intracellular calcium reuptake. Dogs metabolize theobromine extraordinarily slowly (half-life of 17.5 hours compared to 6 hours in humans). Clinical signs progress from hyperactivity and polydipsia to severe tachyarrhythmias, muscle tremors, seizures, and fatal cardiac collapse. Baker’s unsweetened chocolate and dark cocoa powder contain 5 to 10 times more theobromine than milk chocolate.',
        '2. Xylitol / Birch Bark Sweetener (Wood Sugar): Found in sugar-free chewing gums, peanut butters, baked goods, and chewable human vitamins. In canines, xylitol triggers an immediate, massive 6-fold surge in pancreatic insulin release. Within 15 to 30 minutes, blood glucose plunges into profound hypoglycemia (seizures, coma, collapse). Doses exceeding 0.5 g/kg trigger acute, irreversible hepatic necrosis and coagulopathy.',
        '3. Grapes, Raisins, Sultanas & Currants (Tartaric Acid): Recent veterinary toxicology research identified tartaric acid and its salt, potassium bitartrate, as the toxic principle responsible for acute renal failure in dogs. Because tartaric acid concentrations vary wildly between grape cultivars, there is zero established safe dose: ingestion of even one or two grapes has triggered acute anuric renal failure in small dogs.',
        '4. Alliums (Onions, Garlic, Leeks, Chives, Scallions): Contain organic sulfur compounds (primarily N-propyl disulfide and thiosulfates) that oxidize hemoglobin inside canine and feline erythrocytes. Red blood cells develop microscopic precipitations called Heinz bodies, leading to acute hemolytic anemia, pale or icteric (yellow) gums, dark reddish-brown urine (hemoglobinuria), and weakness 2 to 5 days post-ingestion. Cats and Japanese dog breeds (Akita, Shiba Inu) are up to 3 times more sensitive to allium toxicity.',
        '5. True Lilies (Feline Emergency): Plants belonging to the genera *Lilium* (Easter, Tiger, Stargazer, Asiatic) and *Hemerocallis* (Daylilies) are acutely nephrotoxic to cats. All parts of the plant—including flower petals, leaves, stem, pollen, and even stagnant water from a flower vase—cause acute tubular necrosis. Microscopic pollen licked off whiskers causes complete anuric kidney failure within 24 to 72 hours without immediate IV diuresis.',
        '6. Macadamia Nuts: Ingestion in canines produces a distinct neurological and musculoskeletal syndrome characterized by posterior limb weakness, tremors, stiffness, hyperthermia, and abdominal pain within 12 hours. While rarely fatal, symptoms cause intense distress.',
        '7. Raw Yeast Bread Dough: Expanding warm yeast dough inside the stomach releases carbon dioxide, causing severe gastric distension and GDV bloat. Secondary anaerobic fermentation metabolizes sugars into ethanol, causing severe alcohol poisoning, respiratory depression, and metabolic acidosis.',
        '8. Sago Palm (*Cycas revoluta*): A common landscaping cycad containing cycasin. All parts of the sago palm are lethal to pets, especially the seeds. Ingestion causes acute bloody vomiting, severe coagulopathy, liver necrosis, and death in over 50% of cases even with intensive care.'
      ],
      table: {
        headers: ['Toxin Name', 'Toxic Principle', 'Primary Organ System', 'Lethal / Severe Danger Threshold', 'Emergency Clinical Antidote / Action'],
        rows: [
          ['Baker’s Chocolate / Cocoa', 'Theobromine / Caffeine', 'Cardiovascular & CNS', '0.1 – 0.3 oz/lb body weight', 'Emesis, activated charcoal, IV fluids, beta-blockers'],
          ['Xylitol (Birch Sweetener)', 'Massive Insulin Secretion', 'Liver & Pancreas', '0.05 g/lb (hypoglycemia) / 0.25 g/lb (liver failure)', 'IV Dextrose infusion, hepatoprotectants (SAMe, NAC)'],
          ['Grapes & Raisins', 'Tartaric Acid', 'Renal Proximal Tubules', 'Idiosyncratic (1 – 3 grapes can trigger failure)', 'Immediate emesis, 48-hour aggressive IV fluid diuresis'],
          ['Onions & Garlic', 'N-propyl Disulfide', 'Erythrocytes (Red Blood Cells)', '0.5% of body weight (garlic is 5x more potent)', 'Supportive care, blood transfusion in severe anemia'],
          ['True Lilies (*Lilium*)', 'Water-Soluble Glycosides', 'Feline Kidneys', 'Microscopic pollen contact', 'Aggressive 48–72h IV diuresis started < 18h post-exposure']
        ]
      }
    },
    {
      id: 'veterinary-decontamination-protocols',
      heading: 'Veterinary Decontamination: The Critical 2-Hour Window',
      intro:
        'When an animal arrives at the emergency hospital within 60 to 120 minutes of ingestion, veterinary staff perform aggressive medical decontamination to prevent toxic absorption into the bloodstream.',
      paragraphs: [
        'Induction of Emesis: In dogs, veterinary staff administer apomorphine hydrochloride (intravenously or into the conjunctival sac of the eye) or ropinirole ophthalmic drops, inducing safe, complete stomach evacuation within 3 to 5 minutes. In cats, dexmedetomidine is administered intramuscularly (reversed immediately with atipamezole once vomiting concludes).',
        'Activated Charcoal Administration: Following emesis, veterinary teams administer medical-grade activated charcoal slurry combined with a cathartic (sorbitol). Activated charcoal possesses an immense surface area that binds organic toxin molecules in the gut, escorting them safely through the digestive tract.',
        'Intravenous Fluid Diuresis & Intravenous Lipid Emulsion (ILE): For renal toxins (grapes, lilies), patients receive 48 to 72 hours of continuous IV crystalloid fluids at 2 to 3 times maintenance rate to protect glomerular filtration. For fat-soluble toxins (permethrin, ivermectin, local anesthetics), veterinarians administer Intravenous Lipid Emulsion (ILE) therapy—creating a "lipid sink" in the bloodstream that draws toxic molecules away from vital organs.'
      ],
      bulletPoints: [
        { label: 'Emesis Window (1–2 Hours)', text: 'Decontamination is most effective before toxins pass from the stomach into the small intestine.' },
        { label: 'Activated Charcoal', text: 'Adsorbs residual toxin molecules; must be repeated every 4 to 8 hours for enterohepatically recirculated toxins.' },
        { label: 'Baseline Bloodwork', text: 'CBC, chemistry panel, electrolytes, and urinalysis establish baseline renal and hepatic values for serial monitoring.' }
      ],
      routineTip: {
        title: 'Log Known Food Allergies & Emergency ER Contacts in PetHorizon',
        text: 'Save your pet’s dietary restrictions, prescription allergies, and 24/7 emergency clinic speed-dial in PetHorizon. Access complete medical histories instantly if an unexpected ingestion occurs.',
        actionLabel: 'Store Emergency Contacts in PetHorizon'
      }
    }
  ]
};
