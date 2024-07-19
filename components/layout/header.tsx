import { getDictionary } from '@/lib/dictionary';
import type { LangProps } from '@/lib/types';
import Navbar from '../navbar';
import { getAppVersion } from '@/lib/getAppVersion';

export default async function Header({ lang }: LangProps) {
  const {
    intl: {
      navigation,
      data: { name },
    },
  } = await getDictionary(lang);
  const version = await getAppVersion();

  return (
    <header className='z-40'>
      <Navbar
        lang={lang}
        dictionary={{ ...navigation, name }}
        version={version}
      />
    </header>
  );
}
