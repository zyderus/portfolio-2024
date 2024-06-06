import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18n } from '@/i18n.config';
import { getLocale } from '@/lib/get-locale';

export const i18nMiddleware =
  (middleware: Function) => (request: NextRequest) => {
    const { locales, defaultLocale } = i18n;
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
      const locale = getLocale(request);
      const url = new URL(`/${locale}${pathname}`, request.url);

      return locale === defaultLocale
        ? NextResponse.rewrite(url)
        : NextResponse.redirect(url);
    }

    return middleware(request);
  };
