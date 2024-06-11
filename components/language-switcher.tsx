'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { type Locale, i18n } from '@/i18n.config';
import { saveLocale, getLocaleCookie } from '@/lib/save-locale';

interface LanguageSwitcherProps {
  lang: Locale;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const [locale, setLocale] = useState<Locale | 'auto'>(lang);
  const { locales, defaultLocale } = i18n;
  const router = useRouter();
  let pathname = usePathname();

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
      ? url
      : `/${locale}${url}`;
  };

  const handleLanguageChange = async (newLocale: Locale | 'auto') => {
    await saveLocale(newLocale);
    const url = buildPathname(newLocale);
    router.push(url);

    if (newLocale === 'auto') {
      setLocale('auto');
      router.refresh();
    }
  };

  useEffect(() => {
    const fetchLocale = async () => {
      const localeCookie = await getLocaleCookie();
      if (!localeCookie) setLocale('auto');
    };
    fetchLocale();
  }, []);

  return (
    <div>
      <select
        className='cursor-pointer'
        onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        value={locale === 'auto' ? 'auto' : lang}
      >
        <option value='auto'>Auto</option>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* TODO: Remove when done testing */}
      {/* <ul className='flex gap-x-3'>
        <li>
          <button
            className='rounded-md border bg-black px-3 py-2 text-white'
            onClick={() => handleLanguageChange('auto')}
          >
            Auto
          </button>
        </li>
        {locales.map((loc) => (
          <li key={loc}>
            <button
              className='rounded-md border bg-black px-3 py-2 text-white'
              onClick={() => handleLanguageChange(loc)}
            >
              {loc}
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
