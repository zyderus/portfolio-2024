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
    <section id='experience' className='min-h-screen py-24 px-16'>
      <div>
        <SectionHeader id='experience' title='Feature Projects' />
        <ul className='striped mx-auto'>
          {featureRepos.map((repo) => (
            <li
              key={repo.id}
              className='px-8 py-4 border border-bg-secondary/10'
            >
              <RepoFeature repo={repo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
