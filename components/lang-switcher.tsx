'use client';
import { useEffect, useState, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { type Locale, i18n, language } from '@/i18n.config';
import { saveLocale, getLocaleCookie } from '@/lib/save-locale';
import { FaGlobe } from 'react-icons/fa6';
import Dropdown from './ui/dropdown';

interface LangSwitcherProps {
  lang: Locale;
}

export default function LangSwitcher({ lang }: LangSwitcherProps) {
  const [locale, setLocale] = useState<Locale | 'auto'>(lang);
  const { locales, defaultLocale } = i18n;
  const router = useRouter();
  let pathname = usePathname() || '/';
  const searchParams = useSearchParams().toString();

  const buildPathname = (locale: Locale | 'auto') => {
    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale || pathname[3] === '/') {
      const [, , ...rest] = pathname.split('/');
      pathname = '/' + rest.join('/');
    }

    return locale === 'auto' || locale === defaultLocale
      ? `${pathname}?${searchParams}`
      : `/${locale}${pathname}?${searchParams}`;
  };

  const handleLanguageChange = async (newLocale: Locale | 'auto') => {
    await saveLocale(newLocale);
    setLocale(newLocale);
    router.push(buildPathname(newLocale));
    router.refresh();
  };

  useEffect(() => {
    (async () => {
      const localeCookie = await getLocaleCookie();
      if (!localeCookie) setLocale('auto');
    })();
  }, []);

  const items = useMemo(
    () => [
      { id: 'auto', label: 'Auto', icon: FaGlobe },
      ...locales.map((loc) => ({ id: loc, label: language[loc] })),
    ],
    [locales]
  );

  return (
    <Dropdown
      items={items}
      activeId={locale}
      selectAction={handleLanguageChange}
      className='w-9 h-9 rounded-full'
    />
  );
}
