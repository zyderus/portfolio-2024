import { fetchFeatureProjects, fetchGithubReposByTopic } from '@/lib/requests';
import type { SectionProps } from '@/lib/types';
import RepoFeature from './repo-feature';
import SectionHeader from './ui/section-header';

export default async function FeatureProjects({
  lang,
  dictionary,
}: SectionProps) {
  // const projects = await fetchFeatureProjects();
  const featureRepos = await fetchGithubReposByTopic();

  return (
    <section id='experience' className='min-h-screen py-24'>
      <SectionHeader id='experience' title='Feature Projects' />

      <ul className='mx-auto flex flex-col gap-24 mt-16'>
        {featureRepos.map((repo) => (
          <li
            key={repo.id}
            className='group flex flex-col-reverse sm:flex-row even:sm:flex-row-reverse'
          >
            <RepoFeature {...repo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
