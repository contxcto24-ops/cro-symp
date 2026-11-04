export type CategoryId = 'todos' | 'primeros-pasos' | 'puntos-basicos' | 'patrones' | 'tutoriales' | 'materiales' | 'amigurumis' | 'ropa';

export type DifficultyLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface MaterialItem {
  item: string;
  detail?: string;
}

export interface StitchAbbr {
  abbr: string;
  full: string;
  description?: string;
}

export interface StepInstruction {
  number: number;
  heading: string;
  text: string;
  tip?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CommonMistakeItem {
  mistake: string;
  consequence?: string;
  solution: string;
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs?: string[];
  steps?: StepInstruction[];
  subsections?: {
    title: string;
    text: string;
    highlight?: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: CategoryId;
  categoryLabel: string;
  difficulty: DifficultyLevel;
  readingTime: string;
  date: string;
  isoDate: string;
  updatedDate?: string;
  isoUpdatedDate?: string;
  author: Author;
  heroImage: string;
  imageAlt: string;
  excerpt: string;
  tableOfContents: { id: string; title: string }[];
  materials: MaterialItem[];
  gauge?: string;
  hookSize?: string;
  estimatedTime?: string;
  pinterestImage?: string;
  abbreviations?: StitchAbbr[];
  contentSections: ContentSection[];
  commonMistakes?: CommonMistakeItem[];
  faqs?: FaqItem[];
  expertTip?: string;
  personalTip?: string;
  relatedSlugs: string[];
}

export interface CookiePreferences {
  technical: boolean; // Always true
  analytics: boolean;
  advertising: boolean;
  hasConsented: boolean;
  updatedAt?: string;
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
}
