export interface BlogContentSection {
  id: string;
  heading: string;
  intro: string;
  paragraphs?: string[];
  bulletPoints?: { label: string; text: string }[];
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
}

export interface FullBlogArticle {
  slug: string;
  overviewSummary: string;
  sections: BlogContentSection[];
}
