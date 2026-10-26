import { FullBlogArticle } from './types';

export const newPuppyChecklistArticle: FullBlogArticle = {
  slug: 'new-puppy-checklist-first-year-budget-guide',
  readTime: '16 min read',
  overviewSummary:
    'Welcoming a new puppy into your home is an exciting milestone, but unprepared pet parents are often blindsided by unexpected costs, sleepless nights, and home hazards. From essential first-week supplies to budgeting for veterinary wellness exams, preventive medications, and unexpected emergencies, this comprehensive checklist ensures you are fully prepared. Learn how to puppy-proof your home, manage your budget, and build daily routines with PetHorizon.',
  sections: [
    {
      id: 'the-48-hour-survival-kit',
      heading: 'The 48-Hour Survival Kit: Non-Negotiable Essentials for Day One',
      intro:
        'Before bringing your puppy through the front door, you need a foundational toolkit to handle feeding, sleeping, house-training, and early containment without emergency late-night store runs.',
      paragraphs: [
        'Bringing home a young puppy means managing an animal experiencing their first separation from mother and littermates. Having the right supplies ready immediately establishes a secure, predictable environment that reduces transition anxiety.',
        '1. Crate with Divider Panel: Choose a wire or plastic crate sized for your puppy’s projected adult size, featuring an adjustable divider panel. If a crate is too large, puppies will sleep in one corner and eliminate in the other; the divider ensures just enough room to stand, turn around, and lie flat comfortably.',
        '2. Enzymatic Stain & Odor Cleaner: Standard household disinfectants and ammonia-based cleaners fail to break down uric acid crystals. An enzymatic bio-cleaner is mandatory to dissolve pheromone scent markers that entice puppies to re-soil the same carpet spots.',
        '3. Stainless Steel Bowls: Avoid plastic feeding bowls, which develop microscopic scratches that harbor pathogenic bacteria and cause canine chin acne. Non-tip, heavy stainless steel or ceramic bowls are hygienic, durable, and dishwasher-safe.',
        '4. Four-to-Six-Foot Flat Leash & Y-Harness: Avoid retractable leashes, which teach puppies to pull against tension and present serious finger amputation and rope-burn hazards. A sturdy nylon flat leash paired with a chest-clip Y-harness protects fragile cervical vertebrae.'
      ],
      table: {
        headers: ['Supply Item', 'Recommended Type / Spec', 'Why It Is Essential', 'Est. Initial Cost'],
        rows: [
          ['Training Crate', 'Wire crate with movable divider & tray', 'Prevents nighttime accidents and establishes a safe den', '$45 – $110'],
          ['Enzymatic Cleaner', 'Bacterial enzymatic bio-formula spray', 'Permanently eliminates urine scent marks to stop repeat accidents', '$14 – $22'],
          ['Food & Water Bowls', 'Heavy-gauge stainless steel with silicone base', 'Non-porous, dishwasher safe, prevents chin bacterial dermatitis', '$15 – $30'],
          ['Leash & Harness', '6-foot fixed nylon leash + front-clip harness', 'Provides control without choking delicate tracheal cartilage', '$25 – $55'],
          ['Puppy Nutrition', 'AAFCO-certified complete puppy formulation', 'Matches rapid growth demands with proper calcium/phosphorus ratio', '$35 – $75/mo'],
          ['Safe Chew Toys', 'Textured rubber (e.g. Kong) & soft puppy teething rings', 'Soothes inflamed gums and redirects destructive furniture chewing', '$20 – $40']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1000&auto=format&fit=crop&q=80',
        caption: 'First-week preparation: Having a structured crate den and feeding station ready reduces puppy stress and accelerates house-training.',
        altText: 'Happy golden retriever puppy sitting comfortably beside crate and clean toys'
      }
    },
    {
      id: 'room-by-room-puppy-proofing',
      heading: 'Room-by-Room Puppy-Proofing: Eliminating Hidden Hazards',
      intro:
        'Puppies explore the physical world through their mouths. Common household objects that humans overlook represent severe toxicity and gastrointestinal obstruction hazards.',
      paragraphs: [
        'The Living Room & Bedrooms: Secure all electrical cords inside cord protectors or lift them out of reach; chewing live wires causes electrical burns to the tongue and pulmonary edema. Store all shoes, socks, and laundry in closed hampers. Ingested linear foreign bodies (like socks, hair ties, and underwear) are among the most frequent causes of emergency canine gastrointestinal resection surgery.',
        'The Kitchen & Pantry: Never leave human food within reach on countertops or low tables. Toxic canine pantry staples include chocolate (theobromine), grapes and raisins (acute renal failure), onions and garlic (hemolytic anemia), macadamia nuts (neurological tremors), and sugar-free candies or peanut butter containing Xylitol / Birch Bark Extract (catastrophic hypoglycemia and liver failure).',
        'The Bathroom & Laundry Room: Keep toilet lids closed at all times to prevent accidental drowning or ingestion of chemical cleaning blocks. Ensure all human prescription medications, vitamins, ibuprofen, and dental floss are locked away inside high cabinets.'
      ],
      warningBox: {
        title: 'Emergency Toxic Ingestion Alert: Xylitol & Human NSAIDs',
        text: 'Even minuscule amounts of Xylitol (found in sugar-free gum, peanut butter, and baked goods) trigger massive insulin surges in dogs within 30 minutes, leading to acute hypoglycemia, seizures, and liver necrosis. If accidental ingestion occurs, contact ASPCA Animal Poison Control or your emergency vet immediately.'
      },
      routineTip: {
        title: 'PetHorizon Expense & Budget Tracker',
        text: 'First-year puppy costs add up quickly. Use PetHorizon’s Budget Manager to track veterinary visits, food, toys, and supplies so your household budget stays balanced.',
        actionLabel: 'Open PetHorizon Expense Manager'
      }
    },
    {
      id: 'first-year-budget-ledger',
      heading: 'The Transparent First-Year Financial Ledger: What a Puppy Actually Costs',
      intro:
        'Pet adoption organizations frequently cite modest maintenance estimates that ignore the front-loaded costs of initial immunizations, spay/neuter surgery, gear, and preventative health supplies.',
      paragraphs: [
        'A comprehensive review of modern small-animal veterinary care and consumer pet spending reveals that the true first-year cost of owning a dog typically ranges between $1,800 and $4,200 depending on dog size, geographical location, and medical choices.',
        'Initial Capital Outlay (Months 1–2): Initial purchase or adoption fee ($100–$1,500), core puppy vaccination series ($150–$350), microchipping ($45–$70), crate, bedding, bowls, leash, harness, and initial toys ($200–$400).',
        'Ongoing Monthly Recurring Upkeep: Premium life-stage puppy kibble or wet food ($40–$100/mo), monthly flea, tick, and heartworm preventative chewables ($25–$50/mo), training classes or puppy socialization sessions ($150–$350 total), and pet health insurance premiums ($35–$70/mo).',
        'Surgical Spay or Neuter (Months 6–12): Routine laparoscopic or traditional gonadectomy ranges from $250 to $800 depending on animal weight, pre-anesthetic bloodwork panels, and intravenous fluid monitoring.'
      ],
      stepByStep: {
        title: 'How to Budget Your Pet Expenses with PetHorizon',
        steps: [
          {
            number: 1,
            title: 'Create Your Pet Profile & Initial Budget',
            description: 'Enter your puppy’s breed, weight, and set a monthly target spending cap in PetHorizon.'
          },
          {
            number: 2,
            title: 'Log Recurring Costs in Separate Categories',
            description: 'Categorize spending across Nutrition, Vet Care, Grooming, Training, and Gear with one tap.'
          },
          {
            number: 3,
            title: 'Set Emergency Health Savings Alerts',
            description: 'Establish a dedicated $1,000–$2,000 emergency medical reserve fund to cushion unexpected illnesses.'
          },
          {
            number: 4,
            title: 'Review Monthly Spending Analytics',
            description: 'Evaluate category breakdowns each month to optimize nutrition costs and prevent overspending.'
          }
        ]
      },
      productShowcase: {
        badge: 'Smart Financial Management',
        title: 'PetHorizon Pet Expense & Budget Manager',
        provider: 'Included Free in PetHorizon (Android & iOS)',
        price: 'Free Lifetime Access',
        image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&auto=format&fit=crop&q=80',
        actionText: 'Track Pet Budget in PetHorizon',
        actionUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon',
        actionType: 'playStore'
      }
    },
    {
      id: 'first-week-routine-blueprint',
      heading: 'The First-Week Routine Blueprint: Setting Up House-Training Success',
      intro:
        'Puppies thrive on strict routine consistency. Having an established schedule from day one minimizes indoor accidents and accelerates crate habituation.',
      paragraphs: [
        'The Bathroom Clock: A young puppy can only hold their bladder for approximately one hour per month of age plus one (e.g., an 8-week-old puppy must be taken outside every 2 to 3 hours during daytime). Always escort your puppy outside immediately upon waking, within 15 minutes after eating or drinking, and immediately after intense play sessions.',
        'Praise Over Punishment: Never scold or rub a puppy’s nose in an indoor accident. Punishment induces fear, causing the puppy to hide when eliminating rather than learning to go outside. Calmly clean the area with enzymatic spray and reward outdoor elimination within two seconds of completion.',
        'Team Handoffs: Coordinate morning and evening duties across all household members using PetHorizon so walks, feedings, and crate rest cycles are synchronized.'
      ],
      bulletPoints: [
        {
          label: 'Designate an Outdoor Bathroom Spot',
          text: 'Take your puppy to the exact same patch of grass each time. Residual scent cues prompt faster elimination.'
        },
        {
          label: 'Establish Sleep Cycles',
          text: 'Puppies need 16 to 20 hours of sleep per day. Over-tired puppies become hyperactive, mouthy, and prone to behavioral tantrums.'
        },
        {
          label: 'Schedule Your First Vet Exam Within 72 Hours',
          text: 'Bring your puppy to a veterinarian within the first 3 days for a full cardiac auscultation, fecal parasite test, and vaccine timetable review.'
        }
      ]
    }
  ]
};
