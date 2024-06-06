import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LinkIntl from './link-intl';
import LanguageSwitcher from './language-switcher';
import ThemeSelector from './theme-switcher';

export default async function Header({ lang }: { lang: Locale }) {
  const {
    intl: { navigation },
  } = await getDictionary(lang);

  return (
    <header className='py-6'>
      <nav className='px-16 flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <LinkIntl href='/' lang={lang}>
              {navigation.home}
            </LinkIntl>
          </li>
          <li>
            <LinkIntl href='/about' lang={lang}>
              {navigation.about}
            </LinkIntl>
          </li>
        </ul>
        <ThemeSelector />
        <LanguageSwitcher lang={lang} />
      </nav>
    </header>
  );
}
