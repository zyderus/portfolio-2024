'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import useOutsideClick from '@/hooks/useOutsideClick';
import { type Locale, i18n } from '@/i18n.config';
import { saveLocale, getLocaleCookie } from '@/lib/save-locale';
import { language } from '@/i18n.config';
import { FaGlobe } from 'react-icons/fa6';

interface LanguageSwitcherProps {
  lang: Locale;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    await saveLocale(newLocale);
    const url = buildPathname(newLocale);
    router.push(url);

    if (newLocale === 'auto') {
      setLocale('auto');
      router.refresh();
    }

    setIsDropdownOpen(false);
  };

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
  });

  useEffect(() => {
    const fetchLocale = async () => {
      const localeCookie = await getLocaleCookie();
      if (!localeCookie) setLocale('auto');
    };
    fetchLocale();
  }, []);

  return (
    <div ref={dropdownRef} className='relative flex justify-end'>
      <button
        className={`w-9 h-9 flex justify-center items-center hover:bg-bg-secondary focus:outline-none rounded-full transition-colors duration-300 ${
          isDropdownOpen ? 'bg-bg-secondary' : ''
        }`}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span className='sr-only'>Open dropdown</span>
        {locale === 'auto' ? (
          <FaGlobe />
        ) : (
          <span className='font-bold tracking-wider text-sm'>
            {locale.toUpperCase()}
          </span>
        )}
      </button>
      {isDropdownOpen && (
        <ul className='absolute top-12 z-10 text-base list-none rounded-lg shadow bg-bg-secondary py-2'>
          <li
            className='flex items-center pl-4 pr-6 py-2 hover:bg-bg-primary cursor-pointer'
            onClick={() => handleLanguageChange('auto')}
          >
            <span className='w-6 flex justify-center'>
              <FaGlobe />
            </span>
            <span className='ml-4 text-sm'>Auto</span>
          </li>
          {locales.map((loc) => (
            <li
              key={loc}
              className='flex items-center pl-4 pr-6 py-2 hover:bg-bg-primary cursor-pointer'
              onClick={() => handleLanguageChange(loc)}
            >
              <span className='w-6 flex justify-center font-bold tracking-wide'>
                {loc.toUpperCase()}
              </span>
              <span className='ml-4 text-sm'>{language[loc]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
