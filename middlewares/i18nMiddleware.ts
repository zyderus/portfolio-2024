import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18n } from '@/i18n.config';
import { getLocale } from '@/lib/get-locale';

export const i18nMiddleware =
  (middleware: Function) => (request: NextRequest) => {
    const { pathname, search } = request.nextUrl;

    // Ignore API paths
    if (pathname.startsWith('/api')) return;

    const { locales, defaultLocale } = i18n;

    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
      const locale = getLocale(request);
      const url = new URL(`/${locale}${pathname}${search}`, request.url);

      return locale === defaultLocale
        ? NextResponse.rewrite(url.toString())
        : NextResponse.redirect(url.toString());
    }

    return middleware(request);
  };
