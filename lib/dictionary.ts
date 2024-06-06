'use server';
import { i18n } from '@/i18n.config';
import type { Locale } from '@/i18n.config';

const dictionaries: Record<Locale, () => Promise<any>> = {} as Record<
  Locale,
  () => Promise<any>
>;

for (const locale of i18n.locales) {
  dictionaries[locale] = () =>
    import(`@/messages/${locale}.json`).then((module) => module.default);
}

// const dictionaries = {
//   en: () => import('@/messages/en.json').then((module) => module.default),
//   de: () => import('@/messages/de.json').then((module) => module.default),
// };

// TODO: /api/contact throws error
export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return dictionaries[locale]();
};
