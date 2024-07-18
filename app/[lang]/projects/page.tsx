import { Suspense } from 'react';
import Repos from '@/components/repos';
import ReposSkeleton from '@/components/repos-skeleton';
import PaginationSet from '@/components/ui/pagination-set';
import { getDictionary } from '@/lib/dictionary';
import { fetchGithubRepos } from '@/lib/requests';
import type { PaginationLinks, Repo } from '@/lib/types';
import SectionHeader from '@/components/ui/section-header';

export default async function ProjectPage({ params, searchParams }: any) {
  const {
    intl: {
      page: { projects },
    },
  } = await getDictionary(params.lang);

  const page_num = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '10';

  const data: { repos: Repo[]; pagination: PaginationLinks } =
    await fetchGithubRepos(page_num, per_page);

  return (
    // key={random} allows to stop caching to allow for skeletons on api fetch
    <section className='mx-auto text-sm xs:text-base' key={Math.random()}>
      <SectionHeader title={projects?.title} />
      <p>{projects?.description}</p>

      <div className='px-1 xs:px4 sm:px-8 mx-auto'>
        <PaginationSet
          paginationData={data.pagination}
          dictionary={projects?.pagination}
        />

        <Suspense fallback={<ReposSkeleton amount={Number(per_page)} />}>
          <Repos repos={data.repos} />
        </Suspense>

        <PaginationSet
          paginationData={data.pagination}
          dictionary={projects?.pagination}
        />
      </div>
    </section>
  );
}
