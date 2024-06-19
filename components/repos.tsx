import { fetchGithubRepos } from '@/lib/requests';
import { Repo as RepoProps } from '@/lib/types';
// import { movieAppMock as mock } from '@/lib/mocks';
import RepoFeature from './repo-feature';
import RepoCompact from './repo-compact';
import PaginationSet from './ui/pagination-set';

export default async function Repos({ searchParams }: any) {
  const page_num = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '10';

  const data: any = await fetchGithubRepos(page_num, per_page);

  return (
    <>
      <PaginationSet paginationData={data.pagination} />

      <ul className='striped mx-auto'>
        {data.repos.map((repo: any) => {
          const isFeature = repo.topics.includes('feature');

          return (
            // <li
            //   key={repo.id}
            //   className='px-8 py-4 border border-bg-secondary/10'
            // >
            //   <RepoFeatured repo={mock} />
            // </li>
            <li
              key={repo.id}
              className='px-8 py-4 border border-bg-secondary/10'
            >
              {isFeature ? (
                <RepoFeature repo={repo} />
              ) : (
                <RepoCompact repo={repo} />
              )}
            </li>
          );
        })}
      </ul>

      <PaginationSet paginationData={data.pagination} />
    </>
  );
}
