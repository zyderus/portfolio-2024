import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LinkIntl from './link-intl';
import LanguageSwitcher from './language-switcher';
import ThemeContainer from './theme-container';

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
          <li>
            <LinkIntl href='/contact' lang={lang}>
              {navigation.contact}
            </LinkIntl>
          </li>
        </ul>
        <div className='flex gap-4'>
          <LanguageSwitcher lang={lang} />
          <ThemeContainer />
        </div>
      </nav>
    </header>
  );
}
