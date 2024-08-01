import { FaCar } from 'react-icons/fa6';
import TripMap from './trip-map';
import type { Place } from '@/lib/constants/places';

type TripTimelineProps = {
  item: Place;
  prevItem: Place;
};

export default function TripTimelineItem({
  item,
  prevItem,
}: TripTimelineProps) {
  return (
    <div className='relative flex flex-col sm:flex-row group-even:sm:flex-row-reverse flex-wrap justify-center items-top text-sm sm:text-base text-center sm:text-left py-14'>
      <div className='absolute inset-y-0 left-1/2 w-px border-dashed border-t-0 border-b-0 border-l border-r border-bg-secondary transform -translate-x-1/2 -z-10'></div>

      <div className='sm:flex-1 sm:py-6'>
        <div className='mx-auto flex justify-center sm:justify-end group-even:sm:justify-start items-center w-max sm:w-full px-4 py-1 sm:px-4 sm:h-16 rounded-md bg-bg-secondary sm:bg-bg-primary'>
          date - date
        </div>
      </div>
      <div className='py-2 sm:py-6 text-3xl flex justify-center items-center sm:items-start'>
        <div className='w-16 h-16 flex justify-center items-center bg-bg-primary border-2 border-bg-secondary rounded-full'>
          <FaCar />
        </div>
      </div>
      <div className='flex-1 sm:py-6'>
        <div
          className='relative min-h-16 p-[5%] sm:px-6 py-4
            sm:ml-6 group-even:sm:ml-0 group-even:sm:mr-6 
            bg-bg-secondary rounded-t-xl sm:rounded-xl'
        >
          <p className='font-bold mb-2'>{item.title}</p>
          <p>{item.description}</p>
          <div
            className='
              hidden sm:block
              absolute top-7 w-0 h-0
              -left-[5px] group-even:left-[initial] group-even:-right-[5px] 
              border-t-[6px] border-t-transparent 
              border-b-[6px] border-b-transparent 
              border-r-[5px] 
              group-even:border-r-0 
              group-even:border-l-[5px] 
              border-bg-secondary 
            '
          ></div>
        </div>
      </div>

      <TripMap
        origin={
          prevItem ? prevItem.title : `${item.title} international airport`
        }
        destination={item.title}
      />
    </div>
  );
}
