import type { Locale } from '@/i18n.config';
import { customThemes } from './constants';

export type JsonType = { [key: string]: any };

export type CustomTheme = (typeof customThemes)[number];

export type ThemeName = CustomTheme | 'auto' | 'light' | 'dark';

export interface LangProps {
  lang: Locale;
}

export type SectionProps = {
  lang: Locale;
  dictionary: JsonType;
};

export type FeatureProject = {
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
};

// TODO: fix type when shape is known
export type Project = any;
