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
    <section id='features' className='min-h-screen py-24 px-0 sm:px-16'>
      <SectionHeader id='features' title='Feature Projects' />

      <ul className='mx-auto flex flex-col gap-24 mt-16'>
        {featureRepos.map((repo) => (
          <li
            key={repo.id}
            className='group flex flex-col-reverse md:flex-row even:md:flex-row-reverse'
          >
            <RepoFeature {...repo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
