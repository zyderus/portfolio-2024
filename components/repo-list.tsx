import { fetchGithubRepos } from '@/lib/requests';
import Pagination from '@/components/ui/pagination';
import PerPageSelector from '@/components/ui/per-page-selector';

export default async function RepoList({ searchParams }: any) {
  const page_num = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '10';

  const data: any = await fetchGithubRepos(page_num, per_page);

  return (
    <>
      {data.repos.map((repo: any) => (
        <li key={repo.id}>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
        </li>
      ))}

      <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
        <div className='hidden sm:block'></div>
        <div className='flex justify-center'>
          <Pagination links={data.pagination} />
        </div>
        <div className='flex justify-center sm:justify-end'>
          <PerPageSelector />
        </div>
      </div>
    </>
  );
}
