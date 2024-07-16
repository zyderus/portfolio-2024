'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Dropdown, { Item } from './dropdown';

export default function PerPageSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const per_page = searchParams.get('per_page') ?? '10';
  const items_per_page: Item[] = [
    { id: '10', label: '10' },
    { id: '25', label: '25' },
    { id: '50', label: '50' },
    { id: '100', label: '100' },
  ];

  const setItemsPerPage = (newItemsPerPage: string) => {
    if (newItemsPerPage === per_page) return;
    router.push(`/projects?page=1&per_page=${newItemsPerPage}`);
  };

  return (
    <div className='flex items-center gap-1'>
      <span className='text-sm'>PER PAGE: </span>
      <Dropdown
        className='px-2 py-1 rounded-md'
        items={items_per_page}
        activeId={per_page}
        selectAction={setItemsPerPage}
        chevron
        compact
      />
    </div>
  );
}

{
  /* <div className='flex items-center gap-1'>
      <label htmlFor={`items-per-page-${uniqueId}`} className='text-xs'>
        PER PAGE:{' '}
      </label>
      <select
        id={`items-per-page-${uniqueId}`}
        value={per_page}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          router.push(`/projects?page=1&per_page=${Number(e.target.value)}`);
        }}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div> */
}
