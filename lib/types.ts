import type { Locale } from '@/i18n.config';
import { customThemes } from './constants/constants';

export type JsonType = { [key: string]: any };

export type CustomTheme = (typeof customThemes)[number];

export type ThemeName = CustomTheme | 'auto' | 'light' | 'dark';

export interface LangProps {
  lang: Locale;
}

export interface SectionProps {
  lang: Locale;
  dictionary: JsonType;
}

export interface FeatureProject {
  id: number;
  title: string;
  date: string;
  tech: string[];
  description: {
    [key: string]: string;
  };
  img?: string;
  src?: string;
  src_github?: string;
  type?: 'web' | 'mobile' | 'api' | 'pc' | 'iot' | 'ai';
  feature?: boolean;
  status?: 'complete' | 'in-progress';
}

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  created_at: string;
  homepage: string;
  language: string;
  disabled: boolean;
  languages_url: string;
  description: string;
  topics: string[];
  [key: string]: any;
}

export interface PaginationLinks {
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
  lastPage?: string;
}
