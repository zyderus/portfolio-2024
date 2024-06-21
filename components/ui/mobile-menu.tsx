'use client';
import { useCallback, useEffect, useState } from 'react';
import { navLinks } from '@/lib/constants';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
import HamburgerMenu from '@/components/ui/hamburger-menu';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { debounce } from '@/lib/debounce';

interface MobileMenuProps {
  lang: Locale;
  dictionary: JsonType;
}

export default function MobileMenu({ lang, dictionary }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMediaQueryChange = debounce(
    useCallback(
      (mediaQueryEvent: MediaQueryListEvent) => {
        if (isOpen && !mediaQueryEvent.matches) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      },
      [isOpen]
    ),
    500
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery as unknown as MediaQueryListEvent);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      handleMediaQueryChange.cancel();
    };
  }, [handleMediaQueryChange, isOpen]);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[75%] min-w-[210px] max-w-[480px] py-6 bg-bg-primary rounded-l-2xl flex flex-col-reverse justify-end transition-transform duration-100 ease-in-out transform ${
          isOpen
            ? 'translate-x-0 outline outline-8 outline-accent'
            : 'translate-x-full'
        }`}
      >
        <ul className='flex flex-col items-center space-y-8 mt-16'>
          {navLinks.map(({ key, url }) => (
            <li
              key={key}
              className='flex justify-center w-full uppercase text-xl pointer-events-none hover:bg-accent'
            >
              <LinkIntl href={url} lang={lang}>
                <div className='w-48 py-4 px-2 text-nowrap pointer-events-auto'>
                  {dictionary[key]}
                </div>
              </LinkIntl>
            </li>
          ))}
        </ul>
        <div className='flex space-x-4 justify-center'>
          <LanguageSwitcher lang={lang} />
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full pointer-events-none -z-10 transition ease-in-out duration-300 ${
          isOpen
            ? 'backdrop-blur-sm bg-black/20 pointer-events-auto md:backdrop-blur-none md:bg-black/0 md:pointer-events-none'
            : ''
        }`}
        aria-label='Blur overlay'
      ></div>
    </>
  );
}
