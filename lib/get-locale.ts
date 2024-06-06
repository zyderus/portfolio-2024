import { i18n, Locale, LOCALE_COOKIE } from '@/i18n.config';
import type { NextRequest } from 'next/server';

export function getLocale(request: NextRequest) {
  const { locales, defaultLocale } = i18n;

  // 1. If user selected a language and it is supported
  const savedLanguage = request.cookies.get(LOCALE_COOKIE)?.value;
  if (savedLanguage && locales.includes(savedLanguage as Locale)) {
    return savedLanguage;
  }

  // 2. If no accept-language preference in the header
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const localeSet = new Set(locales);
  const preferredLocales = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim());

  for (const headerLocale of preferredLocales) {
    // 3. Check if one of the exact locales is supported
    if (localeSet.has(headerLocale as Locale)) {
      return headerLocale;
    }

    // 4. Check if the base locale (e.g., 'en' from 'en-US') is supported
    const baseLocale = headerLocale.split('-')[0];
    if (localeSet.has(baseLocale as Locale)) {
      return baseLocale;
    }
  }

  // 5. Return default locale ('en') if none of the above match
  return defaultLocale;
}
