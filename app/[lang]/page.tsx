import { getDictionary } from '@/lib/dictionary';
import { PageProps } from './layout';
import Hero from '@/components/hero';
import About from '@/components/about';
import FeatureProjects from '@/components/feature-projects';
import Dropdown from '@/components/ui/dropdown';

export default async function Home({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <>
      <Dropdown className='mx-auto bg-green-500' />

      {/* <Hero lang={lang} dictionary={page} /> */}
      {/* <About lang={lang} dictionary={page} /> */}
      {/* <FeatureProjects lang={lang} dictionary={page} /> */}
    </>
  );
}
