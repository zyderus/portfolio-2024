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
  children?: ReactNode;
}

export default function MobileMenu({
  isOpen,
  toggleMenuOpen,
  lang,
  dictionary,
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

  return (
    <div
      className={`md:hidden fixed h-[100vh] inset-y-0 right-0 w-[75%] max-w-[480px] bg-bg-primary flex flex-col-reverse justify-end rounded-l-2xl pb-6 pt-16 xs:pt-8 sm:pt-14 transition-all duration-100 ease-in-out transform ${
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
            <LinkIntl href={url} lang={lang} onClick={toggleMenuOpen}>
              <div className='w-48 py-4 px-2 text-nowrap pointer-events-auto'>
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
