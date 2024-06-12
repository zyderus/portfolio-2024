import type { SectionProps } from '@/lib/types';

export default function FeatureProjects({ lang, dictionary }: SectionProps) {
  return (
    <section id='feature-projects' className='py-24 px-16'>
      <div>
        <h1 className='text-3xl font-bold'>Feature Projects</h1>
        <h1 className='text-3xl font-bold mb-32'>PROJECT 1</h1>
        <h1 className='text-3xl font-bold mb-32'>PROJECT 2</h1>
        <h1 className='text-3xl font-bold mb-32'>PROJECT 3</h1>
        <h1 className='text-3xl font-bold mb-32'>PROJECT 4</h1>
      </div>
    </section>
  );
}
