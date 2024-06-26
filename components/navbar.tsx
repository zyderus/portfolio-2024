import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import LanguageSwitcher from '@/components/ui/language-switcher';
import MobileMenu from '@/components/ui/mobile-menu';
import NavbarMenu from './navbar-menu';

interface NavbarProps {
  lang: Locale;
  dictionary: JsonType;
}

export default function Navbar({ lang, dictionary }: NavbarProps) {
  return (
    <nav className='fixed w-full py-4 shadow-md'>
      <div className='px-16 flex justify-between items-center'>
        <div className='text-3xl text-color-primary'>
          <LinkIntl href='/' lang={lang}>
            RZ
          </LinkIntl>
        </div>
        <NavbarMenu lang={lang} dictionary={dictionary} />
        <div className='hidden md:flex space-x-4'>
          <LanguageSwitcher lang={lang} />
          <ThemeSwitcher />
        </div>
        <MobileMenu lang={lang} dictionary={dictionary} />
      </div>
    </nav>
  );
}
