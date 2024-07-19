import { type ReactNode } from 'react';
import { navLinks } from '@/lib/constants/constants';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
import LangSwitcher from '../lang-switcher';
import ThemeSwitcher from './theme-switcher';
// import { debounce } from '@/lib/debounce';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenuOpen: () => void;
  lang: Locale;
  dictionary: JsonType;
  activeLinkIndex: number;
  setActiveLinkIndex: (index: number) => void;
  version: string;
  children?: ReactNode;
}

export default function MobileMenu({
  isOpen,
  toggleMenuOpen,
  lang,
  dictionary,
  activeLinkIndex,
  setActiveLinkIndex,
  version,
  children,
}: MobileMenuProps) {
  // TODO: uncomment to block background scrolling when mobile menu opens
  // const version = getAppVersion();
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

  const handleLinkClick = (index: number) => {
    setActiveLinkIndex(index);
    toggleMenuOpen();
  };

  return (
    <div
      className={`scrollbar-thin md:hidden fixed top-0 right-0 w-[75%] max-w-[480px] flex flex-col justify-between gap-4 bg-bg-primary rounded-l-2xl py-8 transition-transform duration-100 ease-in-out transform h-screen overflow-y-auto overscroll-contain ${
        isOpen
          ? 'translate-x-0 outline outline-8 outline-accent'
          : 'translate-x-full'
      }`}
    >
      <div className='flex gap-x-4 justify-center'>
        <LangSwitcher lang={lang} />
        <ThemeSwitcher dictionary={dictionary} />
      </div>
      <ul className='flex flex-col'>
        {navLinks.map(({ id, url }, index) => (
          <li
            key={id}
            className={`flex justify-center w-full py-2 xs:py-4 uppercase text-md xs:text-xl pointer-events-none ${
              activeLinkIndex === index ? 'bg-accent' : 'hover:bg-bg-secondary'
            }`}
          >
            <LinkIntl
              href={url}
              lang={lang}
              onClick={() => handleLinkClick(index)}
            >
              <div
                className={`w-48 py-2 xs:py-4 px-2 text-nowrap ${
                  activeLinkIndex === index
                    ? 'pointer-events-none'
                    : 'pointer-events-auto'
                }`}
              >
                {dictionary[id]}
              </div>
            </LinkIntl>
          </li>
        ))}
      </ul>
      <div className='flex flex-col gap-4 px-1 xs:px-8 sm:px-12'>
        {children}
        <p className='text-left text-sm'>ver: {version}</p>
      </div>
    </div>
  );
}
