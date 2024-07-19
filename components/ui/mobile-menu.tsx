import { type ReactNode } from 'react';
import { navLinks } from '@/lib/constants/constants';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
// import { debounce } from '@/lib/debounce';

// TODO: remove commented items

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenuOpen: () => void;
  lang: Locale;
  dictionary: JsonType;
  activeLinkIndex: number;
  setActiveLinkIndex: (index: number) => void;
  children?: ReactNode;
}

export default function MobileMenu({
  isOpen,
  toggleMenuOpen,
  lang,
  dictionary,
  activeLinkIndex,
  setActiveLinkIndex,
  children,
}: MobileMenuProps) {
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
      className={`md:hidden fixed h-[100vh] inset-y-0 right-0 w-[75%] max-w-[480px] bg-bg-primary flex flex-col-reverse justify-end rounded-l-2xl pb-6 pt-16 xs:pt-8 sm:pt-14 transition-transform duration-100 ease-in-out transform ${
        isOpen
          ? 'translate-x-0 outline outline-8 outline-accent'
          : 'translate-x-full'
      }`}
    >
      <ul className='h-full flex flex-col items-center mt-16'>
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
      <div className='flex space-x-4 justify-center'>{children}</div>
    </div>
  );
}
