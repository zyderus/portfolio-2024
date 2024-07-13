import type { Repo } from '@/lib/types';
import RepoCompact from './repo-compact';

export default async function Repos({ repos }: { repos: Repo[] }) {
  // await new Promise((res) => setTimeout(res, 5000));

  if (!repos?.length)
    return (
      <h1 className='text-xl text-center'>Error fetching Github repository</h1>
    );

  return (
    <ul className='striped mx-auto border border-yellow-500'>
      {repos.map((repo) => {
        const isFeature = repo.topics.includes('feature');

        return (
          <li key={repo.id} className='px-8 py-4 border border-bg-secondary/10'>
            <RepoCompact repo={repo} isFeature={isFeature} />
          </li>
        );
      })}
    </ul>
  );
}
