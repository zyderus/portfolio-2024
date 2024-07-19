'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import MobileMenu from '@/components/ui/mobile-menu';
import NavbarMenu from './navbar-menu';
import LangSwitcher from './lang-switcher';
import HamburgerMenu from './ui/hamburger-menu';
import Overlay from './ui/overlay';

interface NavbarProps {
  lang: Locale;
  dictionary: JsonType;
}

export default function Navbar({ lang, dictionary }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const pathname = usePathname();

  const homePaths = useMemo(
    () => ['/', ...i18n.locales.map((locale) => `/${locale}`)],
    []
  );
  const isHomePage = useMemo(
    () => homePaths.includes(pathname),
    [homePaths, pathname]
  );

  const toggleMenuOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, isHomePage]);

  const navbarInitial =
    isHomePage && !isScrolled
      ? 'h-24 sm:h-36'
      : 'h-14 sm:h-16 bg-bg-primary/85';

  return (
    <nav
      className={`fixed w-full transition-all duration-200 ease-in-out ${navbarInitial}`}
    >
      <section
        className={`h-full flex justify-between items-center py-0 my-auto ${
          isScrolled ? 'backdrop-blur-sm' : ''
        }`}
      >
        <div className='text-3xl text-color-primary'>
          <LinkIntl href='/' lang={lang}>
            RZ
          </LinkIntl>
        </div>
        <NavbarMenu
          lang={lang}
          dictionary={dictionary}
          activeLinkIndex={activeLinkIndex}
          setActiveLinkIndex={setActiveLinkIndex}
        />
        <div className='hidden md:flex md:items-center space-x-1'>
          <LangSwitcher lang={lang} />
          <ThemeSwitcher dictionary={dictionary} />
        </div>
        <HamburgerMenu isOpen={isOpen} toggleMenuOpen={toggleMenuOpen} />
        <MobileMenu
          isOpen={isOpen}
          toggleMenuOpen={toggleMenuOpen}
          lang={lang}
          dictionary={dictionary}
          activeLinkIndex={activeLinkIndex}
          setActiveLinkIndex={setActiveLinkIndex}
        >
          <LangSwitcher lang={lang} />
          <ThemeSwitcher dictionary={dictionary} />
        </MobileMenu>
      </section>
      <Overlay isOpen={isOpen} />
      {isHomePage && !isScrolled && (
        <div
          className={`absolute inset-x-0 inset-y-5 sm:inset-y-8 bg-[url('/images/backgrounds/paisley-4.webp')] bg-center grayscale -z-10 opacity-[4%]`}
        ></div>
      )}
    </nav>
  );
}
