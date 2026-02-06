
export interface Milestone {
  period: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
  images?: {
    src: string;
    type: 'mobile' | 'pc';
    caption: string;
  }[];
}

export interface Competency {
  title: string;
  description: string;
  score: number;
  tags: string[];
}
