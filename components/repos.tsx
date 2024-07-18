import type { Repo } from '@/lib/types';
import RepoCompact from './repo-compact';

export default async function Repos({ repos }: { repos: Repo[] }) {
  if (!repos?.length)
    return (
      <h1 className='text-xl text-center'>Error fetching Github repository</h1>
    );

  return (
    <ul className='text-center sm:text-left'>
      {repos.map((repo) => {
        const isFeature = repo.topics.includes('feature');

        return (
          <li
            key={repo.id}
            className='py-2 sm:py-4 border-b last:border-b-0 border-color-primary/10'
          >
            <RepoCompact repo={repo} isFeature={isFeature} />
          </li>
        );
      })}
    </ul>
  );
}
