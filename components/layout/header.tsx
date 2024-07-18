import { getDictionary } from '@/lib/dictionary';
import type { LangProps } from '@/lib/types';
import Navbar from '../navbar';

export default async function Header({ lang }: LangProps) {
  const {
    intl: {
      navigation,
      data: { name },
    },
  } = await getDictionary(lang);

  return (
    <header className='z-40'>
      <Navbar lang={lang} dictionary={{ ...navigation, name }} />
    </header>
  );
}
