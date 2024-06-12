import { fetchFeatureProjects } from '@/lib/requests';
import type { SectionProps } from '@/lib/types';

export default async function FeatureProjects({
  lang,
  dictionary,
}: SectionProps) {
  const projects = await fetchFeatureProjects();

  return (
    <section id='feature-projects' className='py-24 px-16'>
      <div>
        <h1 className='text-3xl font-bold'>Feature Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h1 className='text-3xl font-bold mb-32'>{project.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
