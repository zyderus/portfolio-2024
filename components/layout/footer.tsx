import { myData, type NavLink, navLinks } from '@/lib/constants/constants';
import LinkIntl from '../ui/link-intl';
import { getDictionary } from '@/lib/dictionary';
import type { LangProps } from '@/lib/types';
import Interests from '../interests';

interface FooterLink extends NavLink {
  external?: boolean;
}

const footerLinks: FooterLink[] = [
  ...navLinks.slice(0, -1),
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: myData.linkedInUrl,
    external: true,
  },
  {
    id: 'github',
    label: 'Github',
    url: myData.githubUrl,
    external: true,
  },
  navLinks[navLinks.length - 1],
];

export default async function Footer({ lang }: LangProps) {
  const {
    intl: { navigation },
  } = await getDictionary(lang);

  return (
    <div className='bg-bg-secondary w-full'>
      <section className='min-h-40 pt-10 pb-20 text-center text-sm text-color-primary/60 space-y-8'>
        <Interests />

        <ul className='flex flex-wrap justify-center list-none mx-auto gap-x-4 text-color-primary/75'>
          {footerLinks.map(({ id, label, url, external }) => (
            <li
              key={id}
              className='hover:text-accent transition-colors duration-100'
            >
              {external ? (
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  {label}
                </a>
              ) : (
                <LinkIntl href={url} lang={lang}>
                  {navigation[id]}
                </LinkIntl>
              )}
            </li>
          ))}
        </ul>

        <p className='text-xs'>
          &copy; 2024 Rustam Ziyodov. All rights reserved.
        </p>
      </section>
    </div>
  );
}
