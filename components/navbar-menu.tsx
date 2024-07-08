'use client';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import LinkIntl from './ui/link-intl';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import useActiveSection from '@/hooks/useActiveSection';
import useLineStyle from '@/hooks/useLineStyle';
import { navLinks } from '@/lib/constants';

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

  useLayoutEffect(() => {
    if (pathname === '/') {
      setActiveLinkIndex(activeHashIndex || 0);
    } else {
      const initialIndex = navLinks.findIndex(
        (section) => section.url === pathname
      );
      setActiveLinkIndex(initialIndex !== -1 ? initialIndex : 0);
    }
  }, [activeHashIndex, pathname]);

  const lineStyle = useLineStyle(activeLinkIndex, linkRefs.current);

  return (
    <ul className='relative hidden md:flex space-x-8'>
      {navLinks.map(({ id, url }, index) => {
        return (
          <li key={id} ref={(el: any) => (linkRefs.current[index] = el)}>
            <LinkIntl
              href={url}
              lang={lang}
              className={`transition-colors duration-300 ease-in-out hover:text-color-primary ${
                activeLinkIndex === index
                  ? 'text-color-primary'
                  : 'text-gray-500'
              }`}
              onClick={() => handleClick(index)}
              replace={url.startsWith('/#')}
            >
              {dictionary[id]}
            </LinkIntl>
          </li>
        );
      })}
      <div
        className='absolute left-40 border-b border-accent -bottom-1 transition-all duration-300 ease-in-out'
        style={lineStyle}
      ></div>
    </ul>
  );
}
