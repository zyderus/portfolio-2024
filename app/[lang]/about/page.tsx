import { getDictionary } from '@/lib/dictionary';
import { PageProps } from '../layout';

export default async function About({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <section className='py-24'>
      <div className='container px-16'>
        <h1 className='text-3xl font-bold'>{page.about.title}</h1>
        <p>{page.about.description}</p>
      </div>
    </section>
  );
}
