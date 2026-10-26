import { FullBlogArticle } from './types';

export const introducingKittenToCatArticle: FullBlogArticle = {
  slug: 'how-to-introduce-kitten-to-older-cat-guide',
  readTime: '14 min read',
  overviewSummary:
    'Cats are territorial, obligate solitary hunters by nature. Plunging a high-energy kitten directly into an established resident cat’s living territory without preparation is a recipe for chronic stress, territorial spraying, and feline inter-cat aggression. By following a structured scent-swapping and visual desensitization protocol over 10 to 21 days, you can foster mutual tolerance and lifelong companionship. This guide covers the phased introduction timeline, resource distribution rules, and behavioral red flags.',
  sections: [
    {
      id: 'feline-territorial-psychology',
      heading: 'Feline Territorial Biology: Why Direct Face-to-Face Introductions Fail',
      intro:
        'In feline ecology, unfamiliar animals represent resource competition and potential disease vectors. Unlike dogs who form social pack structures, cats establish individual home ranges.',
      paragraphs: [
        'When a resident cat hears, smells, or sees a new kitten without warning, their sympathetic nervous system triggers fight-or-flight hormones. Hissing, growling, and swatting are defensive reactions indicating high anxiety, not inherent malice.',
        'Kittens lack adult feline social boundaries: they pounce, stalk, and invade personal space, which an adult cat interprets as intolerable disrespect or aggression.',
        'A gradual phased introduction allows both felines to become accustomed to each other’s scent, vocalizations, and presence in micro-doses before physical contact ever occurs.'
      ],
      warningBox: {
        title: 'Never Let Them "Fight It Out"',
        text: 'Allowing cats to engage in a physical fight shatters trust permanently. Once traumatic associations and redirected aggression form, rehabilitating feline relationships can take months of intensive behavioral therapy.'
      }
    },
    {
      id: 'step-by-step-introduction-timeline',
      heading: 'The 4-Stage Protocol: From Scent Swapping to Supervised Coexistence',
      intro:
        'Follow this veterinary-recommended protocol over 2 to 4 weeks. Do not advance to the next stage until both cats show calm, relaxed body language at the current level.',
      table: {
        headers: ['Introduction Phase', 'Duration', 'Core Action', 'Success Criteria to Advance'],
        rows: [
          ['Phase 1: Complete Isolation', 'Days 1 – 4', 'Kitten in dedicated sanctuary room; zero visual contact', 'Both cats eating normally on their respective sides of the closed door'],
          ['Phase 2: Scent & Site Swapping', 'Days 5 – 8', 'Exchange bedding; swap rooms while cats explore alternate scents', 'Neutral curiosity, sniffing bedding without hissing or puffed tails'],
          ['Phase 3: Visual Contact with Barrier', 'Days 9 – 14', 'Eat meals on opposite sides of baby gate, screen door, or cracked door', 'Relaxed grooming and eating within 3 feet of each other through the barrier'],
          ['Phase 4: Supervised Free Contact', 'Days 15 – 21+', 'Interactive wand play, shared treat time, short 10-minute sessions', 'Mutual nose-touches, cooperative play, or peaceful co-resting']
        ]
      },
      paragraphs: [
        'During Phase 1, place the kitten in a safe, fully equipped room (litter box, food, water, scratcher, toys). Feed both cats their favorite meals right next to the closed door so they associate the smell of the other cat with delicious food.',
        'During Phase 2, rub a soft clean towel around the kitten’s scent glands (cheeks, chin, forehead) and place it under the adult cat’s food dish. Then do the reverse. Swap their living spaces for an hour so the kitten explores the house and the adult cat inspects the kitten room.',
        'In Phase 3, install a tall baby gate or double stacked gates. Feed canned wet food at opposite sides, gradually moving bowls closer over 4 to 5 days.',
        'In Phase 4, allow short supervised interactions. Always engage both cats in active play with separate wand toys to burn nervous adrenaline.'
      ],
      routineTip: {
        title: 'Coordinate Multi-Cat Feeding in PetHorizon',
        text: 'Use PetHorizon to set simultaneous morning and evening wet food schedules for both cats. Multi-profile tracking ensures neither cat steals the other’s prescribed diet or life-stage nutrition.',
        actionLabel: 'Set Multi-Cat Profiles in PetHorizon'
      }
    },
    {
      id: 'resource-distribution-rules',
      heading: 'The "N + 1" Rule: Preventing Territorial Resource Guarding',
      intro:
        'Feline territorial stress occurs when key survival resources are clustered or limited. In multi-cat homes, resource distribution is everything.',
      paragraphs: [
        'The universal feline veterinary rule is N + 1 for all critical items: if you have 2 cats, you must provide at least 3 litter boxes, 3 fresh water stations, and multiple separate scratching posts located in distinct rooms.',
        'Never place litter boxes directly adjacent to each other—a cat perceives two side-by-side boxes as a single large box that can be easily cornered or ambushed by an aggressive housemate.',
        'Vertical territory is essential. Provide tall cat trees, window perches, and wall shelves so the adult cat can retreat to elevated safe zones when the kitten’s high-energy play becomes overwhelming.'
      ],
      bulletPoints: [
        { label: 'Litter Box Calculation', text: 'Provide 3 litter boxes in 3 separate rooms so one cat cannot blockade bathroom access.' },
        { label: 'Vertical Safe Havens', text: 'Install multi-level cat trees and wall ramps to give the resident cat elevated private lounging spaces.' },
        { label: 'Separate Feeding Zones', text: 'Feed cats at least 6 to 10 feet apart or in different rooms to prevent competitive speed-eating and stress vomiting.' },
        { label: 'Synthetic Pheromones', text: 'Diffuse feline appeasing pheromones (Feliway Friends / MultiCat) in main living rooms to signal security.' }
      ]
    }
  ]
};
