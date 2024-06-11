import { getDictionary } from '@/lib/dictionary';
import { PageProps } from './layout';
import Hero from '@/components/hero';
import About from '@/components/about';

export default async function Home({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dictionary={page} />
      <About lang={lang} dictionary={page} />
    </>
  );
}
