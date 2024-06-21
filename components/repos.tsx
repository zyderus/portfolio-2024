import type { Repo } from '@/lib/types';
import RepoFeature from './repo-feature';
import RepoCompact from './repo-compact';

export default async function Repos({ repos }: { repos: Repo[] }) {
  await new Promise((res) => setTimeout(res, 5000));

  if (!repos?.length)
    return (
      <h1 className='text-xl text-center'>Error fetching Github repository</h1>
    );

  return (
    <ul className='striped mx-auto'>
      {repos.map((repo) => {
        const isFeature = repo.topics.includes('feature');
        return (
          <li key={repo.id} className='px-8 py-4 border border-bg-secondary/10'>
            {isFeature ? (
              <RepoFeature repo={repo} />
            ) : (
              <RepoCompact repo={repo} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
