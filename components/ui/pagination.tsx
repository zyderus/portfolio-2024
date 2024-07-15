'use client';
import { PaginationLinks } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface PaginationProps {
  links: PaginationLinks;
}

export default function Pagination({ links }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page_num = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '10';

  return (
    <div className='flex items-center justify-center xs:gap-4'>
      <button
        className={`flex items-center gap-1 px-2 xs:px-4 text-xs border-b border-transparent transition-colors ${
          !links.prev
            ? 'text-color-primary/30'
            : 'hover:border-accent active:border-accent/50'
        }`}
        onClick={() => {
          router.push(
            `/projects?page=${Number(page_num) - 1}&per_page=${per_page}`
          );
        }}
        disabled={!links.prev}
      >
        <FaAngleLeft />
        PREV
      </button>
      <div
        className={`text-center text-accent ${
          +page_num > 99 ? 'w-max' : +page_num > 9 ? 'w-16' : 'w-12'
        }`}
      >
        {page_num} {links?.lastPage ? `/ ${links.lastPage}` : ''}
      </div>
      <button
        className={`flex items-center gap-x-1 px-2 xs:px-4 text-xs border-b border-transparent transition-colors duration-100 ${
          !links.next
            ? 'text-color-primary/30'
            : 'hover:border-accent active:border-accent/50'
        }`}
        onClick={() => {
          router.push(
            `/projects?page=${Number(page_num) + 1}&per_page=${per_page}`
          );
        }}
        disabled={!links.next}
      >
        NEXT
        <FaAngleRight />
      </button>
    </div>
  );
}
