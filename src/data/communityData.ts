export interface QAItem {
  id: number;
  question: string;
  answersCount: number;
  bestAnswer: string;
  askedBy: string;
}

export interface Contributor {
  name: string;
  role: string;
  upvotes: number;
  avatar: string;
}

export const QA_DATA: QAItem[] = [
  {
    id: 1,
    question: 'How do I invite a family member or pet sitter?',
    answersCount: 5,
    bestAnswer: 'You can generate an invite link or a QR code directly from the Family Hub. When they accept the invite via the deep link, they will be added to your pet’s care team instantly.',
    askedBy: 'Marcus H. • Portland, OR',
  },
  {
    id: 2,
    question: 'Can I restrict what my pet sitter can see or edit?',
    answersCount: 12,
    bestAnswer: 'Yes! The permissions system allows you to assign "admin", "edit", or "readonly" access. For example, a pet sitter can be set to readonly so they can view the feeding schedule but cannot modify the budget.',
    askedBy: 'Clara D. • Seattle, WA',
  },
  {
    id: 3,
    question: 'Tips for introducing a conure to adult dogs?',
    answersCount: 8,
    bestAnswer: 'Always introduce birds and dogs in a controlled, neutral space. Keep the conure in its cage initially while rewarding your dog for calm behavior. Progress slowly and never leave them unsupervised.',
    askedBy: 'Ryan P. • Chicago, IL',
  },
  {
    id: 4,
    question: 'Is coconut oil safe for grooming dry skin on cats?',
    answersCount: 6,
    bestAnswer: 'In small, external amounts, pure virgin coconut oil is safe and can help soothe dry feline skin. Avoid excessive application since cats will lick it off, which might cause digestive issues. Monitor skin progress via your Pet Horizon journal notes.',
    askedBy: 'Elena R. • Miami, FL',
  },
  {
    id: 5,
    question: 'What temperature is too cold for outdoor dog training?',
    answersCount: 9,
    bestAnswer: "Generally, temperatures below 45°F (7°C) start to feel uncomfortable for most short-haired breeds. Under 32°F (0°C), smaller dogs and seniors should not spend extended periods outside. Log your session temperatures in the app to track your dog's physical limits.",
    askedBy: 'David T. • Chicago, IL',
  },
];

export const TOP_CONTRIBUTORS: Contributor[] = [
  {
    name: 'Dr. Arthur Mitchell',
    role: 'Vet Advisor',
    upvotes: 4120,
    avatar: 'https://images.pexels.com/photos/3756439/pexels-photo-3756439.jpeg',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Husky Parent',
    upvotes: 2890,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    name: 'Clara Dunst',
    role: 'Cat Behaviorist',
    upvotes: 1940,
    avatar: 'https://images.pexels.com/photos/3995209/pexels-photo-3995209.jpeg',
  },
];
