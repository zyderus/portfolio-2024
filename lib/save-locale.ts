'use server';
import { cookies } from 'next/headers';
import { LOCALE_COOKIE } from '@/lib/constants';
import { Locale } from '@/i18n.config';

type SaveLocaleType = Locale | 'auto' | '';

export async function saveLocale(locale: SaveLocaleType = '') {
  if (locale === 'auto') {
    cookies().delete(LOCALE_COOKIE);
  } else {
    cookies().set(LOCALE_COOKIE, locale);
  }

  return { status: 'success' };
}

export async function getLocaleCookie() {
  return cookies().get(LOCALE_COOKIE);
}
