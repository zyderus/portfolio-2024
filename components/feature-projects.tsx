import { fetchGithubReposByTopic } from '@/lib/requests';
import type { SectionProps } from '@/lib/types';
import RepoFeature from './repo-feature';
import SectionHeader from './ui/section-header';

export default async function FeatureProjects({ dictionary }: SectionProps) {
  const featureRepos = await fetchGithubReposByTopic();

  return (
    <section id='features' className='min-h-screen px-0 sm:px-16'>
      <SectionHeader id='features' title={dictionary?.features?.title} />

      <ul className='mx-auto flex flex-col gap-32 mt-4'>
        {featureRepos.map((repo) => (
          <li
            key={repo.id}
            className='group flex flex-col-reverse md:flex-row even:md:flex-row-reverse'
          >
            <RepoFeature
              dictionary={dictionary?.featureProjects?.description}
              {...repo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
