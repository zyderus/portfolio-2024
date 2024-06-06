import { getDictionary } from '@/lib/dictionary';
import { PageProps } from './layout';

export default async function Home({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <section className='py-24 px-16'>
      <h1 className='text-3xl font-bold'>{page.home.title}</h1>
      <p>{page.home.description}</p>
      <br />
      <div className='py-4 px-5 bg-bg-primary border border-color-primary w-40 h-24 rounded-lg shadow-xl'>
        <div className='block mb-2 h-1 rounded-xl bg-color-primary'></div>
        <div className='mb-2 h-1 rounded-xl bg-color-primary'></div>
        <div className='mb-2 h-1 w-4/5 rounded-xl bg-color-primary'></div>
        <div className='ml-auto mt-5 w-10 h-4 rounded-md bg-accent'></div>
      </div>
    </section>
  );
}
