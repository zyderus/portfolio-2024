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
    <nav className='border border-green-400 flex px-16 items-center justify-between'>
      <div className='border border-black text-3xl text-color-primary'>RZ</div>

      {/* Mobile menu */}
      <div className='border border-red-500 absolute md:static top-0 md:top-auto right-0 md:right-auto h-[100vh] md:h-auto w-[75%] md:w-auto flex flex-1 justify-between flex-col-reverse md:flex-row py-8 md:py-0 bg-green-200 md:bg-transparent items-center translate-x-[100%] md:translate-x-0'>
        <div></div>
        <ul className='border border-black flex flex-col md:flex-row md:gap-x-8 md:pb-0 pb-12 md:gap-y-0 gap-y-8 justify-between'>
          {links.map(({ key, url }) => (
            <li key={key}>
              <LinkIntl href={url} lang={lang}>
                {navigation[key]}
              </LinkIntl>
            </li>
          ))}
        </ul>
        <div className='border border-black flex gap-4'>
          <LanguageSwitcher lang={lang} />
          <ThemeContainer />
        </div>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
