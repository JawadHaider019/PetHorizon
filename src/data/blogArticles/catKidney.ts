import { FullBlogArticle } from './types';

export const catKidneyArticle: FullBlogArticle = {
  slug: 'feline-kidney-disease-dehydration-cornell',
  overviewSummary:
    'Chronic Kidney Disease (CKD) affects more than 30% of senior cats over age 10. Because felines mask pain and gradual decline instinctively, recognizing early dehydration signs and preserving functioning nephrons through moisture hydration protocols is crucial.',
  sections: [
    {
      id: 'early-signs',
      heading: '5 Early Warning Signs Pet Parents Frequently Miss',
      intro:
        'By the time a cat exhibits overt clinical illness, up to 67% of renal function may already be compromised. Watch for these subtle clues:',
      bulletPoints: [
        {
          label: '1. Increasing Clump Size in the Litter Box',
          text: 'Failing kidneys lose the ability to concentrate urine. Cats produce larger volumes of dilute urine, resulting in golf-ball or baseball-sized litter clumps.'
        },
        {
          label: '2. Skin Elasticity Loss (The Scruff Tent Test)',
          text: 'Gently pinch the skin along your cat’s shoulder blades and release. In a well-hydrated cat, it snaps back immediately. In dehydrated cats, it tents and returns slowly.'
        },
        {
          label: '3. Sticky or Tacky Gums',
          text: 'Healthy feline gums are slick, wet, and salmon pink. If you feel dryness or tackiness against your finger, systemic dehydration is present.'
        },
        {
          label: '4. Hovering Over the Water Bowl Without Drinking',
          text: 'Cats with nausea caused by uremic toxins often sit slouched over the water bowl without actually lapping water.'
        },
        {
          label: '5. Dull, Clumping or Flaky Coat',
          text: 'Chronic dehydration limits natural sebaceous gland lubrication, leading to dandruff along the spine and unkempt fur.'
        }
      ]
    },
    {
      id: 'hydration-protocol',
      heading: 'The Cornell Feline Moisture & Hydration Protocol',
      intro:
        'Cats possess a low intrinsic thirst drive evolved from desert ancestors. They rely heavily on dietary moisture to sustain kidney filtration.',
      table: {
        headers: ['Feeding Strategy', 'Average Moisture Content', 'Kidney Filtration Impact', 'Recommended Action'],
        rows: [
          ['Dry Kibble Only', '8% – 10% Moisture', 'Heavy renal concentration stress', 'Gradually transition to wet food'],
          ['Canned Wet Food', '75% – 82% Moisture', 'Optimal biological hydration', 'Serve 2 to 3 smaller meals daily'],
          ['Hydration Broths & Purees', '88% – 94% Moisture', 'Stimulates fluid intake naturally', 'Add as a daily topper between meals'],
          ['Still Bowl vs Fountain', 'Flowing Aerated Water', 'Increases voluntary drinking by 40%', 'Use stainless steel or ceramic fountains']
        ]
      }
    },
    {
      id: 'pethorizon-renal',
      heading: 'Tracking Senior Cat Hydration With Pet Horizon',
      intro:
        'Continuous monitoring allows you to spot gradual trends in water intake and appetite before they evolve into medical crises.',
      routineTip: {
        title: 'Daily Water & Meal Logs',
        text: 'Use Pet Horizon to log morning water refills, wet food feeding adherence, and weekly weigh-ins. Share these visual timelines directly with your veterinarian during biannual senior blood chemistry checkups.',
        actionLabel: 'Track Senior Cat Routines in Pet Horizon'
      }
    }
  ]
};
