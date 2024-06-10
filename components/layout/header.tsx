import { getDictionary } from '@/lib/dictionary';
import type { LangProps } from '@/lib/types';
import Navbar from '../navbar';

export default async function Header({ lang }: LangProps) {
  const {
    intl: { navigation },
  } = await getDictionary(lang);

  return (
    <header className='shadow-md'>
      <Navbar lang={lang} dictionary={navigation} />
    </header>
  );
}
