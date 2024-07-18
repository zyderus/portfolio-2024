import type { JsonType } from '@/lib/types';
import Pagination from './pagination';
import PerPageSelector from './per-page-selector';

interface PaginationSet {
  paginationData: any;
  dictionary: JsonType;
}

export default function PaginationSet({ paginationData, dictionary }: any) {
  return (
    <div
      key={Math.random()}
      className='grid grid-cols-1 sm:grid-cols-3 items-center my-8'
    >
      <div className='hidden sm:block'></div>
      <div className='flex justify-center'>
        <Pagination links={paginationData} dictionary={dictionary} />
      </div>
      <div className='flex justify-center sm:justify-end'>
        <PerPageSelector dictionary={dictionary} />
      </div>
    </div>
  );
}
