import { getDictionary } from '@/lib/dictionary';
import LinkIntl from './link-intl';
import LanguageSwitcher from './language-switcher';
import ThemeContainer from './theme-container';
import SideMenu from './side-menu';
import { LangProps } from '@/lib/types';
import { navLinks } from '@/lib/constants';

export default async function Header({ lang }: LangProps) {
  const {
    intl: { navigation },
  } = await getDictionary(lang);

  return (
    <header className='fixed py-3 bg-white shadow-md w-full top-0 left-0'>
      <nav className='h-12 flex px-16 items-center justify-between'>
        <div className='text-3xl text-color-primary'>RZ</div>
        <ul className='border border-black hidden md:flex gap-x-8 gap-y-0 justify-between'>
          {navLinks.map(({ key, url }) => (
            <li key={key}>
              <LinkIntl href={url} lang={lang}>
                {navigation[key]}
              </LinkIntl>
            </li>
          ))}
        </ul>
        <div className='border border-black hidden md:flex gap-4'>
          <LanguageSwitcher lang={lang} />
          <ThemeContainer />
        </div>
        <SideMenu lang={lang} dictionary={navigation} />
      </nav>
    </header>
  );
}
