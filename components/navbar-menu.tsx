'use client';
import { navLinks } from '@/lib/constants';
import LinkIntl from './ui/link-intl';
import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavbarMenuProps {
  lang: Locale;
  dictionary: JsonType;
}

export default function NavbarMenu({ lang, dictionary }: NavbarMenuProps) {
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const params = useParams();

  // TODO: Add intersection observer to change url with section hash => set active class to appropriate navbar link

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setActiveSection(window.location.hash);
  //   };

  //   window.addEventListener('hashchange', handleHashChange);
  //   handleHashChange();

  //   return () => {
  //     window.removeEventListener('hashchange', handleHashChange);
  //   };
  // }, []);

  useEffect(() => {
    setActiveSection(`/${window.location.hash}`);
  }, [params]);

  return (
    <ul className='hidden md:flex space-x-8'>
      {navLinks.map(({ key, url }) => {
        console.log('bla:::', activeSection, key, url, activeSection === url);

        return (
          <li key={key}>
            <LinkIntl
              href={url}
              lang={lang}
              className={`link ${
                pathname === url || activeSection === url
                  ? 'active bg-red-300'
                  : ''
              }`}
            >
              {dictionary[key]}
            </LinkIntl>
          </li>
        );
      })}
    </ul>
  );
}
