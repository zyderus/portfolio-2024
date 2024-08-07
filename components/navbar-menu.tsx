'use client';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import LinkIntl from './ui/link-intl';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import useActiveSection from '@/hooks/useActiveSection';
import useLineStyle from '@/hooks/useLineStyle';
import { navLinks } from '@/lib/constants/constants';

// TODO: active link state bugs from features to projects

interface NavbarMenuProps {
  lang: Locale;
  dictionary: JsonType;
  activeLinkIndex: number;
  setActiveLinkIndex: (index: number) => void;
}

export default function NavbarMenu({
  activeLinkIndex,
  setActiveLinkIndex,
  lang,
  dictionary,
}: NavbarMenuProps) {
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const pathname = usePathname();
  const activeHashIndex = useActiveSection({
    rootMargin: '0px 0px -20% 0px',
    threshold: 1,
  });
  const isPathKnownRef = useRef(true);

  const handleClick = useCallback(
    (index: number) => {
      setActiveLinkIndex(index);
    },
    [setActiveLinkIndex]
  );

  useLayoutEffect(() => {
    const isHomePath = pathname === '/' || pathname === `/${lang}`;

    if (isHomePath) {
      setActiveLinkIndex(activeHashIndex || 0);
      isPathKnownRef.current = true;
    } else {
      const initialIndex = navLinks.findIndex(
        (link) => link.url === pathname || `/${lang}${link.url}` === pathname
      );
      setActiveLinkIndex(initialIndex !== -1 ? initialIndex : 0);
      isPathKnownRef.current = initialIndex !== -1;
    }
  }, [activeHashIndex, lang, pathname, setActiveLinkIndex]);

  const lineStyle = useLineStyle(activeLinkIndex, linkRefs.current);

  return (
    <ul className='relative hidden md:flex'>
      {navLinks.map(({ id, url }, index) => {
        return (
          <li key={id} ref={(el: any) => (linkRefs.current[index] = el)}>
            <LinkIntl
              href={url}
              lang={lang}
              className={`px-3 transition-colors duration-300 ease-in-out hover:text-color-primary ${
                isPathKnownRef.current && activeLinkIndex === index
                  ? 'text-color-primary'
                  : 'text-color-primary/60'
              }`}
              onClick={() => handleClick(index)}
              replace={url.startsWith('/#') || url.startsWith(`/${lang}#`)}
            >
              {dictionary[id]}
            </LinkIntl>
          </li>
        );
      })}
      {isPathKnownRef.current && (
        <div
          className='absolute left-1 -bottom-1 border-b border-accent transition-all duration-300 ease-in-out'
          style={lineStyle}
        ></div>
      )}
    </ul>
  );
}
