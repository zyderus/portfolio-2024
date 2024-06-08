import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LinkIntl from './link-intl';
import LanguageSwitcher from './language-switcher';
import ThemeContainer from './theme-container';
import HamburgerMenu from './hamburger-menu';

const links = [
  {
    key: 'about',
    title: 'About',
    url: '/about',
  },
  {
    key: 'experience',
    title: 'Experience',
    url: '#',
  },
  {
    key: 'projects',
    title: 'Projects',
    url: '#',
  },
  {
    key: 'contact',
    title: 'Contact',
    url: '/contact',
  },
  {
    key: 'resume',
    title: 'Resume',
    url: '#',
  },
];

interface LangProps {
  lang: Locale;
}

export default async function Header({ lang }: LangProps) {
  const {
    intl: { navigation },
  } = await getDictionary(lang);

  return (
    <header className='py-6 bg-white shadow-md w-full fixed top-0 left-0'>
      <nav className='px-16 items-center justify-between md:flex md:px-10'>
        <div className='text-3xl font-bold text-color-primary'>RZ</div>
        <ul className='flex flex-col md:flex-row md:gap-x-8 md:pb-0 pb-12 md:gap-y-0 gap-y-8'>
          {links.map(({ key, url }) => (
            <li key={key}>
              <LinkIntl href={url} lang={lang}>
                {navigation[key]}
              </LinkIntl>
            </li>
          ))}
        </ul>
        <div className='flex gap-4'>
          <LanguageSwitcher lang={lang} />
          <ThemeContainer />
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
}
