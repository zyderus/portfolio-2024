import { getDictionary } from '@/lib/dictionary';
import { PageProps } from './layout';
import Hero from '@/components/hero';
import About from '@/components/about';
import FeatureProjects from '@/components/feature-projects';

export default async function Home({ params: { lang } }: PageProps) {
  const {
    intl: {
      page: { main },
      data,
      featureProjects,
    },
  } = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dictionary={{ ...main, ...data }} />
      <About lang={lang} dictionary={main} />
      <FeatureProjects lang={lang} dictionary={{ ...main, featureProjects }} />
    </>
  );
}
