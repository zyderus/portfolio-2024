'use client';
import { useEffect, useState } from 'react';
import type { Pagination, Repo } from '@/lib/types';
import { fetchGithubRepos } from '@/lib/requests';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface ProjectProps {
  initialData: any;
}

export default function Projects({ initialData }: ProjectProps) {
  const [repos, setRepos] = useState<Repo[]>(initialData.repos);
  const [pagination, setPagination] = useState<Pagination>(
    initialData.pagination
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);

  const fetchPageData = async (page: number, perPage?: number) => {
    const newData = await fetchGithubRepos(currentPage, perPage);

    setRepos(newData.repos);
    setPagination(newData.pagination);
    setCurrentPage(page);

    console.log('newData pagination :::', newData.pagination);
    console.log('pagination :::', pagination);
  };

  const handleNextPage = () => {
    if (pagination.next) {
      fetchPageData(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1 && pagination.prev) {
      fetchPageData(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    fetchPageData(1, Number(event.target.value));
    setCurrentPage(1);
    setPerPage(Number(event.target.value));
  };

  const handleTest = async (page: number) => {
    await fetchGithubRepos(page, 10);
  };

  // useEffect(() => {
  //   const getRepos = async () => {
  //     setLoading(true);
  //     try {
  //       const result = await fetchGithubRepos(currentPage, perPage);
  //       if (result) {
  //         setRepos(result.repos);
  //         setPagination(result.pagination);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching repos:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getRepos();
  // }, [currentPage, perPage]);

  return (
    <>
      <div className='flex gap-8'>
        <button onClick={() => handlePreviousPage()}>prev</button>
        <button onClick={() => handleNextPage()}>next</button>
      </div>

      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              {repo.name}
            </a>
          </li>
        ))}
      </ul>

      {/* <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              {repo.name}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex justify-between'>
        <div></div>
        <div className='flex items-center justify-center space-x-4'>
          <button
            className={`flex items-center gap-x-1 px-4 text-xs leading-6 border-b border-transparent transition-colors ${
              !pagination.prev
                ? 'text-color-primary/30'
                : loading
                ? 'hover:border-accent/50'
                : 'hover:border-accent active:border-accent/50'
            }`}
            onClick={handlePreviousPage}
            disabled={!pagination.prev || loading}
          >
            <FaAngleLeft />
            PREV
          </button>
          <div className='w-6 text-center text-accent'>{currentPage}</div>
          <button
            className={`flex items-center gap-x-1 px-4 text-xs leading-6 border-b border-transparent transition-colors duration-100 ${
              !pagination.next
                ? 'text-color-primary/30'
                : loading
                ? 'hover:border-accent/50'
                : 'hover:border-accent active:border-accent/50'
            }`}
            onClick={handleNextPage}
            disabled={!pagination.next || loading}
          >
            NEXT
            <FaAngleRight />
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='items-per-page' className='text-xs'>
            PER PAGE:
          </label>
          <select
            id='items-per-page'
            value={perPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div> */}
    </>
  );
}
