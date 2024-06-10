'use client';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/link-intl';
import HamburgerMenu from '@/components/hamburger-menu';
import ThemeSwitcher from '@/components/theme-switcher';
import LanguageSwitcher from '@/components/language-switcher';

interface MobileMenuProps {
  lang: Locale;
  dictionary: JsonType;
}

export default function MobileMenu({ lang, dictionary }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[75%] min-w-[210px] max-w-[480px] py-6 bg-bg-primary rounded-l-2xl flex flex-col-reverse justify-end transition-transform duration-120 ease-in-out transform ${
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
        className={`fixed top-0 left-0 h-full w-full transition ease-in-out duration-120 -z-10 ${
          isOpen ? 'backdrop-blur-sm bg-black/10' : ''
        }`}
        aria-label='Blur overlay'
      ></div>
    </>
  );
}
