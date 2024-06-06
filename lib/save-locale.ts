'use server';
import { cookies } from 'next/headers';
import { LOCALE_COOKIE } from '@/i18n.config';

export async function saveLocale(locale: string = '') {
  if (locale === 'auto') cookies().delete(LOCALE_COOKIE);
  else cookies().set(LOCALE_COOKIE, locale);

  return {
    status: 'success',
  };
}
