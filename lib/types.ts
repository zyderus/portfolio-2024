import type { Locale } from '@/i18n.config';
import { customThemes } from './constants';

export interface LangProps {
  lang: Locale;
}

export type JsonType = { [key: string]: any };

export type CustomTheme = (typeof customThemes)[number];

export type ThemeName = CustomTheme | 'auto' | 'light' | 'dark';

export type SectionProps = {
  lang: Locale;
  dictionary: JsonType;
};
