import { FullBlogArticle } from './types';

export const dogSeparationAnxietyArticle: FullBlogArticle = {
  slug: 'dog-separation-anxiety-training-routine-guide',
  readTime: '15 min read',
  overviewSummary:
    'Dog separation anxiety training requires clinical precision and patience. Affecting an estimated 20% to 40% of companion dogs, true separation anxiety is a panic disorder triggered when a dog is left alone. Unlike destructive boredom, distress starts within 5 to 15 minutes of departure. This veterinary guide provides evidence-based dog separation anxiety training routines, desensitization schedules, departure cue fading protocols, and household tracking to help your dog achieve calm independence.',
  sections: [
    {
      id: 'separation-anxiety-vs-boredom',
      heading: 'Dog Separation Anxiety Training vs. Boredom: Diagnostic Differentiators',
      intro:
        'Successful dog separation anxiety training begins with accurate diagnosis. Many dog owners mistakenly label destructive chewing or potty accidents as "spite" or bad behavior. In veterinary behavioral medicine, anxiety is an involuntary physiological panic response.',
      paragraphs: [
        'Dogs suffering from separation anxiety experience an acute spike in cortisol and adrenaline immediately as departure cues begin. Symptoms typically appear within 15 minutes of the owner leaving, whereas dogs that are simply bored usually sleep for several hours before chewing items out of curiosity.',
        'Primary clinical signs include continuous vocalization (distress howling or persistent barking), hypersalivation, pacing, trembling, scratching at door frames or window sills (escape attempts), and loss of bladder or bowel control despite being house-trained.',
        'A critical diagnostic test is reviewing video footage: a bored dog investigates toys or trash cans leisurely with a relaxed body, while an anxious dog fixates on departure thresholds with dilated pupils, lip licking, and rapid respiration.'
      ],
      table: {
        headers: ['Behavioral Marker', 'Separation Anxiety (Panic Disorder)', 'Isolation Distress / Boredom'],
        rows: [
          ['Onset Time', '0 – 15 minutes after owner departure', '2 – 4 hours into solitary period'],
          ['Salivation / Panting', 'Severe drooling, wet chest, rapid panting', 'Normal resting respiration'],
          ['Destruction Focus', 'Doorways, windows, crates, exit points', 'Chew toys, cushions, trash cans'],
          ['Appetite While Alone', 'Refuses high-value treats and food puzzles', 'Gladly consumes food toys and licks mats'],
          ['Vocalization Pattern', 'Repetitive, high-pitched crying and howling', 'Intermittent barking at external sounds']
        ]
      },
      figure: {
        imageUrl: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=1000&auto=format&fit=crop&q=80',
        caption: 'Video monitoring reveals whether destructive chewing stems from acute panic at departure barriers or simple midday boredom.',
        altText: 'Anxious dog looking out living room window waiting for owner'
      }
    },
    {
      id: 'desensitization-training-schedule',
      heading: 'Systematic Desensitization: The 4-Phase Alone-Time Schedule',
      intro:
        'The gold standard treatment established by the American College of Veterinary Behaviorists (ACVB) is systematic desensitization: exposing the dog to absences that start so short they remain completely below the panic threshold.',
      paragraphs: [
        'Phase 1 focuses on uncoupling departure cues. Pick up your car keys, put on your shoes, or touch the door handle 8 to 10 times daily without actually leaving. When keys no longer predict abandonment, the dog stops anticipating panic.',
        'Phase 2 involves micro-absences. Step outside the front door for 3 seconds, then return calmly before any whining begins. Repeat 4 to 5 times per session, gradually increasing duration to 15 seconds, 30 seconds, 1 minute, and 3 minutes.',
        'Phase 3 breaks through the critical 15-minute barrier. Once a dog can comfortably relax for 15 to 20 minutes alone, brain neurotransmitters stabilize, allowing increments to jump by 5 to 10 minutes.',
        'Phase 4 reaches full independence (2 to 4 hours). Practice random variable schedules—never make every consecutive absence longer than the previous one to avoid fatigue.'
      ],
      stepByStep: {
        title: 'Step-by-Step Alone-Time Training Ladder',
        steps: [
          { number: 1, title: 'Departure Cue Fading', description: 'Jingle keys, open door, put on coat 10 times daily with zero departures.' },
          { number: 2, title: 'Threshold Disappearance (1-30 sec)', description: 'Step behind closed door for 5, 10, then 30 seconds. Return with zero emotional fuss.' },
          { number: 3, title: 'Sub-Threshold Extension (2-15 min)', description: 'Step outside building for 2, 5, 8, and 15 minutes while monitoring via home camera.' },
          { number: 4, title: 'Consolidation & Variable Absence (1-4 hrs)', description: 'Vary durations between 30 minutes, 1.5 hours, and 3 hours across consecutive days.' }
        ]
      },
      warningBox: {
        title: 'Do Not Use Aversive Bark Collars or Punishment',
        text: 'Punishing an anxious dog for barking or chewing suppresses outward signs while massively magnifying underlying terror. Shock, citronella, or choke collars increase chronic cortisol levels and often trigger fear-based aggression.'
      },
      routineTip: {
        title: 'Track Alone-Time Milestones in PetHorizon',
        text: 'Log every absence duration and dog calm score in the PetHorizon Activity Timeline. Sharing updates across household members prevents anyone from pushing duration too fast.',
        actionLabel: 'Log Alone-Time Training in PetHorizon'
      }
    },
    {
      id: 'environmental-enrichment-veterinary-support',
      heading: 'Environmental Setup, Calming Tools & Veterinary Medication',
      intro:
        'While behavioral conditioning rewires neural pathways, environmental management and veterinary pharmaceuticals can accelerate progress and prevent regression.',
      paragraphs: [
        'Long-lasting lick mats filled with frozen plain Greek yogurt, xylitol-free peanut butter, or canned wet food activate repetitive tongue stimulation, releasing endorphins that naturally reduce canine heart rate.',
        'Auditory masking is critical: white noise machines, calming canine reggae or classical piano playlists mask hallway footsteps and road traffic that trigger panic.',
        'For moderate to severe separation anxiety, veterinary-prescribed medications (such as SSRIs like fluoxetine or TCAs like clomipramine) are not chemical restraints—they restore neurochemical balance so the dog is capable of learning during desensitization.'
      ],
      bulletPoints: [
        { label: 'Nutritional Licking', text: 'Provide a frozen KONG or lick mat 5 minutes before leaving to build positive association with departure.' },
        { label: 'Auditory Masking', text: 'Play continuous white noise or bioacoustic pet music at 60 dB to drown out external auditory triggers.' },
        { label: 'Pheromone Therapy', text: 'Plug in Dog Appeasing Pheromone (DAP) diffusers near the dog’s resting bed to mimic maternal calming signals.' },
        { label: 'Veterinary Evaluation', text: 'Consult a board-certified veterinary behaviorist (DACVB) if panic causes self-mutilation or severe anorexia.' }
      ]
    }
  ]
};
