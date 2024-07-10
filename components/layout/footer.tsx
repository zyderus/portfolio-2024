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
    <div className='bg-bg-secondary w-full min-h-40 p-8 text-center text-sm text-color-primary/60 space-y-2'>
      <Interests />
      <ul className='flex flex-wrap justify-center list-none mx-auto text-color-primary/70'>
        {navLinks.slice(1, navLinks.length - 1).map(({ id, url }) => (
          <li
            key={id}
            className='px-1 hover:text-color-primary transition-colors duration-100'
          >
            <LinkIntl href={url} lang={lang}>
              {navigation[id]}
            </LinkIntl>
          </li>
        ))}
        <li className='px-1 hover:text-color-primary transition-colors duration-100'>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li className='px-1 hover:text-color-primary transition-colors duration-100'>
          <a
            href='https://github.com/zyderus'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </li>
        <li className='px-1 hover:text-color-primary transition-colors duration-100'>
          <Link href='#'>Resume</Link>
        </li>
        <li className='px-1 hover:text-color-primary transition-colors duration-100'>
          <LinkIntl href={navLinks.at(-1)?.url || '#'} lang={lang}>
            {navigation[navLinks.at(-1)?.id || 0]}
          </LinkIntl>
        </li>
      </ul>
      <p className=''>by Rustam Ziyodov</p>
      <p className=''>&copy; 2024</p>
    </div>
  );
}
