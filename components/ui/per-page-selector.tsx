'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PerPageSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const per_page = searchParams.get('per_page') ?? '10';

  return (
    <div className='flex items-center gap-1'>
      <label htmlFor='items-per-page' className='text-xs'>
        PER PAGE:{' '}
      </label>
      <select
        id='items-per-page'
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
    </div>
  );
}
