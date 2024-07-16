'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import useOutsideClick from '@/hooks/useOutsideClick';
import { type Locale, i18n } from '@/i18n.config';
import { saveLocale, getLocaleCookie } from '@/lib/save-locale';
import { language } from '@/i18n.config';
import { FaGlobe } from 'react-icons/fa6';
import Dropdown from './ui/dropdown';

interface LangSwitcherProps {
  lang: Locale;
}

export default function LangSwitcher({ lang }: LangSwitcherProps) {
  const [locale, setLocale] = useState<Locale | 'auto'>(lang);
  const { locales, defaultLocale } = i18n;
  const router = useRouter();
  let pathname = usePathname();
  const searchParams = useSearchParams().toString();

  const buildPathname = (locale: Locale | 'auto') => {
    if (!pathname) return '/';
    let url = pathname;

    const pathnameHasLocale = locales.some(
      (locale) => url.startsWith(`/${locale}/`) || url === `/${locale}`
    );

    if (pathnameHasLocale || url[3] === '/') {
      const [, , ...rest] = url.split('/');
      url = '/' + rest.join('/');
    }

    return locale === 'auto' || locale === defaultLocale
      ? `${url}?${searchParams}`
      : `/${locale}${url}?${searchParams}`;
  };

  const handleLanguageChange = async (newLocale: Locale | 'auto') => {
    console.log('change locale to', newLocale);

    // await saveLocale(newLocale);
    // const url = buildPathname(newLocale);
    // router.push(url);

    // if (newLocale === 'auto') {
    //   setLocale('auto');
    //   router.refresh();
    // }
  };

  useEffect(() => {
    const fetchLocale = async () => {
      const localeCookie = await getLocaleCookie();
      if (!localeCookie) setLocale('auto');
    };
    fetchLocale();
  }, []);

  const items = [
    {
      id: 'auto',
      label: 'Auto',
      icon: FaGlobe,
    },
    {
      id: 'en',
      label: 'English',
    },
    {
      id: 'ru',
      label: 'Русский',
    },
  ];

  return (
    <Dropdown
      items={items}
      activeId={locale}
      selectAction={handleLanguageChange}
      className='w-9 h-9 rounded-full'
      chevron
    />
  );
}
