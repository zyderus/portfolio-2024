'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
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
}

export default function NavbarMenu({ lang, dictionary }: NavbarMenuProps) {
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const pathname = usePathname();
  const activeHashIndex = useActiveSection({
    rootMargin: '0px 0px -20% 0px',
    threshold: 1,
  });

  const handleClick = useCallback((index: number) => {
    setActiveLinkIndex(index);
  }, []);

  useEffect(() => {
    const isHomePath = pathname === '/' || pathname === `/${lang}`;

    if (isHomePath) {
      setActiveLinkIndex(activeHashIndex || 0);
    } else {
      const initialIndex = navLinks.findIndex(
        (link) => link.url === pathname || `/${lang}${link.url}` === pathname
      );
      setActiveLinkIndex(initialIndex !== -1 ? initialIndex : 0);
    }
  }, [activeHashIndex, lang, pathname]);

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
                activeLinkIndex === index
                  ? 'text-color-primary'
                  : 'text-gray-500'
              }`}
              onClick={() => handleClick(index)}
              replace={url.startsWith('/#') || url.startsWith(`/${lang}#`)}
            >
              {dictionary[id]}
            </LinkIntl>
          </li>
        );
      })}
      <div
        className='absolute left-1 -bottom-1 border-b border-accent transition-all duration-300 ease-in-out'
        style={lineStyle}
      ></div>
    </ul>
  );
}
