import Pagination from './pagination';
import PerPageSelector from './per-page-selector';

export default function PaginationSet({ paginationData }: any) {
  return (
    <div
      key={Math.random()}
      className='grid grid-cols-1 sm:grid-cols-3 items-center my-8'
    >
      <div className='hidden sm:block'></div>
      <div className='flex justify-center'>
        <Pagination links={paginationData} />
      </div>
      <div className='flex justify-center sm:justify-end'>
        <PerPageSelector />
      </div>
    </div>
  );
}
