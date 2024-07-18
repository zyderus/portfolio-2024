'use client';
import { useCallback, useEffect, useState } from 'react';
import { navLinks } from '@/lib/constants/constants';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
import HamburgerMenu from '@/components/ui/hamburger-menu';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import LangSwitcher from '@/components/lang-switcher';
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

  // const handleMediaQueryChange = debounce(
  //   useCallback(
  //     (mediaQueryEvent: MediaQueryListEvent) => {
  //       if (isOpen && !mediaQueryEvent.matches) {
  //         document.body.style.overflow = 'hidden';
  //       } else {
  //         document.body.style.overflow = 'unset';
  //       }
  //     },
  //     [isOpen]
  //   ),
  //   500
  // );

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(min-width: 768px)');
  //   mediaQuery.addEventListener('change', handleMediaQueryChange);
  //   handleMediaQueryChange(mediaQuery as unknown as MediaQueryListEvent);

  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange);
  //     handleMediaQueryChange.cancel();
  //   };
  // }, [handleMediaQueryChange, isOpen]);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      <div
        className={`md:hidden fixed h-[100vh] inset-y-0 right-0 w-[75%] max-w-[480px] bg-bg-primary flex flex-col-reverse justify-end rounded-l-2xl py-6 transition-transform duration-100 ease-in-out transform ${
          isOpen
            ? 'translate-x-0 outline outline-8 outline-accent'
            : 'translate-x-full'
        }`}
      >
        <ul className='h-full flex flex-col items-center space-y-8 mt-16'>
          {navLinks.map(({ id, url }) => (
            <li
              key={id}
              className='flex justify-center w-full uppercase text-xl pointer-events-none hover:bg-accent'
            >
              <LinkIntl href={url} lang={lang}>
                <div className='w-48 py-4 px-2 text-nowrap pointer-events-auto'>
                  {dictionary[id]}
                </div>
              </LinkIntl>
            </li>
          ))}
        </ul>
        <div className='flex space-x-4 justify-center'>
          <LangSwitcher lang={lang} />
          {/* <ThemeSwitcher /> */}
        </div>
      </div>

      <div
        className={`fixed inset-0 h-[100vh] pointer-events-none transition ease-in-out duration-200 -z-10 ${
          isOpen
            ? 'backdrop-blur-sm bg-black/30 pointer-events-auto md:backdrop-blur-none md:bg-black/0 md:pointer-events-none'
            : ''
        }`}
        aria-label='Blur overlay'
      ></div>
    </>
  );
}
