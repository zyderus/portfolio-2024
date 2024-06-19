import Repos from '@/components/repos';
import { getDictionary } from '@/lib/dictionary';

export default async function ProjectPage({ params, searchParams }: any) {
  const {
    intl: { page },
  } = await getDictionary(params.lang);

  return (
    <section className='py-24 mx-auto'>
      <h1 className='text-3xl font-bold'>Projects</h1>
      <p>
        Welcome to my Projects page! Here you&apos;ll find a curated selection
        of the web applications and systems I&apos;ve designed and developed.
        These projects showcase my expertise in using modern web technologies
        like Next.js, React, AWS, NestJS, and more. Each project highlights my
        approach to solving complex problems, optimizing performance, and
        creating user-friendly interfaces. I invite you to explore these
        projects to see the depth and breadth of my work.
      </p>

      <h1 className='text-2xl font-bold mb-16'>Featured Projects</h1>
      <Repos searchParams={searchParams} />
    </section>
  );
}
