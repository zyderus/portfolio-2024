import type { Locale } from '@/i18n.config';
import type { JsonType } from '@/lib/types';
import LinkIntl from '@/components/ui/link-intl';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import MobileMenu from '@/components/ui/mobile-menu';
import NavbarMenu from './navbar-menu';
import LangSwitcher from './lang-switcher';
import SectionActive from './ui/section-active';
import Tooltip from './ui/tooltip';

interface NavbarProps {
  lang: Locale;
  dictionary: JsonType;
}

export default function Navbar({ lang, dictionary }: NavbarProps) {
  const initials = dictionary.name.split('|')[0];

  return (
    <nav className='fixed w-full'>
      <SectionActive>
        <section className='h-full flex justify-between items-center py-0 my-auto'>
          <div className='text-3xl text-color-primary'>
            <LinkIntl href='/' lang={lang}>
              {initials}
            </LinkIntl>
          </div>
          <NavbarMenu lang={lang} dictionary={dictionary} />
          <div className='hidden md:flex md:items-center space-x-1'>
            <LangSwitcher lang={lang} />
            <ThemeSwitcher dictionary={dictionary} />
          </div>
          {/* <MobileMenu lang={lang} dictionary={dictionary} /> */}
        </section>
      </SectionActive>
    </nav>
  );
}
