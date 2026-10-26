export interface BlogContentSection {
  id: string;
  heading: string;
  intro: string;
  paragraphs?: string[];
  bulletPoints?: { label: string; text: string }[];
  figure?: {
    imageUrl: string;
    caption: string;
    altText?: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  warningBox?: {
    title: string;
    text: string;
  };
  routineTip?: {
    title: string;
    text: string;
    actionLabel: string;
  };
  productShowcase?: {
    badge: string;
    title: string;
    provider: string;
    price: string;
    image: string;
    actionText: string;
    actionUrl: string;
    actionType?: 'qrModal' | 'playStore';
  };
  prosAndCons?: {
    pros: string[];
    cons: string[];
    whoShouldUse: string;
    whoShouldSkip: string;
  };
  stepByStep?: {
    title: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
  };
  scorecard?: {
    overallScore: number;
    maxScore: number;
    verdict: string;
    metrics: {
      label: string;
      score: number;
    }[];
  };
}

export interface FullBlogArticle {
  slug: string;
  readTime: string;
  overviewSummary: string;
  sections: BlogContentSection[];
}
