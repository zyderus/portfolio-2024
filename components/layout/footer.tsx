import { navLinks } from '@/lib/constants/constants';
import Link from 'next/link';
import LinkIntl from '../ui/link-intl';
import { getDictionary } from '@/lib/dictionary';
import type { LangProps } from '@/lib/types';
import Interests from '../interests';

export default async function Footer({ lang }: LangProps) {
  const {
    intl: { navigation },
  } = await getDictionary(lang);

  return (
    <div className='bg-bg-secondary w-full min-h-40 pt-10 pb-20 text-center text-sm text-color-primary/50 space-y-8'>
      <Interests />
      <ul className='flex flex-wrap justify-center list-none mx-auto space-x-4 text-color-primary/75'>
        {navLinks.slice(1, navLinks.length - 1).map(({ id, url }) => (
          <li
            key={id}
            className='hover:text-accent transition-colors duration-100'
          >
            <LinkIntl href={url} lang={lang}>
              {navigation[id]}
            </LinkIntl>
          </li>
        ))}
        <li className='hover:text-accent transition-colors duration-100'>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li className='hover:text-accent transition-colors duration-100'>
          <a
            href='https://github.com/zyderus'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </li>
        <li className='hover:text-accent transition-colors duration-100'>
          <Link href='#'>Resume</Link>
        </li>
        <li className='hover:text-accent transition-colors duration-100'>
          <LinkIntl href={navLinks.at(-1)?.url || '#'} lang={lang}>
            {navigation[navLinks.at(-1)?.id || 0]}
          </LinkIntl>
        </li>
      </ul>
      <p className='text-xs'>
        &copy; 2024 Rustam Ziyodov. All rights reserved.
      </p>
    </div>
  );
}
