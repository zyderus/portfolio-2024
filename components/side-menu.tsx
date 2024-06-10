'use client';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/link-intl';
import HamburgerMenu from '@/components/hamburger-menu';
import LanguageSwitcher from '@/components/language-switcher';
import ThemeContainer from '@/components/theme-container';

interface SideMenuProps {
  lang: Locale;
  dictionary: JsonType;
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
        className={`fixed top-0 right-0 h-full w-[75%] min-w-[210px] max-w-[480px] rounded-l-2xl flex flex-col-reverse justify-end items-center pt-7 bg-bg-primary transform ${
          isOpen
            ? 'translate-x-0 outline outline-8 outline-accent shadow-xl'
            : 'translate-x-full'
        } transition-transform duration-120 ease-in-out`}
      >
        <ul className='flex flex-col gap-y-4 w-full justify-start mt-16'>
          {navLinks.map(({ key, url }) => (
            <li
              key={key}
              className='flex justify-center uppercase text-xl pointer-events-none hover:bg-white'
            >
              <LinkIntl href={url} lang={lang}>
                <div className='border-s-[8px] border-b-[8px] border-accent rounded-2xl w-48 py-4 px-2 text-nowrap pointer-events-auto'>
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
      <div
        className={`fixed top-0 left-0 h-full w-full transition ease-in-out duration-120 -z-10 ${
          isOpen ? 'backdrop-blur-sm bg-black/10' : ''
        }`}
        aria-label='Blur overlay'
      ></div>
    </div>
  );
}
