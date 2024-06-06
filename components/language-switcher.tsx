'use client';
import { useRouter, usePathname } from 'next/navigation';
import { saveLocale } from '@/lib/save-locale';
import { Locale, i18n } from '@/i18n.config';

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const { locales, defaultLocale } = i18n;
  const router = useRouter();
  let pathname = usePathname();

  const buildPathname = (locale: string) => {
    if (!pathname) return '/';
    let url = pathname;

    const pathnameHasLocale = locales.some(
      (locale) => url.startsWith(`/${locale}/`) || url === `/${locale}`
    );

    if (pathnameHasLocale || url[3] === '/') {
      const [, , ...rest] = url.split('/');
      url = '/' + rest.join('/');
    }

    if (locale === 'auto' || locale === defaultLocale) {
      return url;
    }

    return `/${locale}${url}`;
  };

  const handleLanguageChange = async (locale: string) => {
    await saveLocale(locale);
    const url = buildPathname(locale);
    router.push(url);

    if (locale === 'auto') {
      router.refresh();
    }
  };

  return (
    <div>
      <select
        className='cursor-pointer'
        onChange={(e) => handleLanguageChange(e.target.value)}
        defaultValue={lang}
      >
        <option value='auto'>Auto</option>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
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
