'use client';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import type { Locale } from '@/i18n.config';
import type { JSONtype } from '@/lib/types';
import LinkIntl from './link-intl';
import HamburgerMenu from './hamburger-menu';
import LanguageSwitcher from './language-switcher';
import ThemeContainer from './theme-container';

interface SideMenuProps {
  lang: Locale;
  dictionary: JSONtype;
}

export default function SideMenu({ lang, dictionary }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='flex md:hidden'>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div
        className={`fixed top-0 right-0 h-full w-[75%] flex flex-col-reverse justify-end items-center pt-7 bg-green-200 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-120 ease-in-out`}
      >
        <ul className='flex flex-col gap-y-4 w-full justify-start mt-16'>
          {navLinks.map(({ key, url }) => (
            <li
              key={key}
              className='flex justify-center uppercase text-xl pointer-events-none hover:bg-white'
            >
              <LinkIntl href={url} lang={lang}>
                <div className='w-48 py-4 px-8 pointer-events-auto'>
                  {dictionary[key]}
                </div>
              </LinkIntl>
            </li>
          ))}
        </ul>
        <div className='border border-black flex gap-4'>
          <LanguageSwitcher lang={lang} />
          <ThemeContainer />
        </div>
      </div>
    </div>
  );
}
