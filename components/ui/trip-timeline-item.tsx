import { IconType } from 'react-icons';
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
    <li className='group list-none flex justify-center items-top flex-col sm:flex-row even:sm:flex-row-reverse text-sm sm:text-base text-center sm:text-left flex-wrap'>
      <div className='flex-1 sm:py-6'>
        <div className='flex justify-center sm:justify-end group-even:sm:justify-start items-center sm:px-4 sm:h-16'>
          date - date
        </div>
      </div>
      <div className='relative py-2 sm:py-6 text-3xl flex justify-center items-center sm:items-start'>
        <div className='w-16 h-16 flex justify-center items-center bg-bg-primary border-2 border-bg-secondary rounded-full'>
          <FaCar />
        </div>
        <div className='absolute inset-y-0 left-1/2 w-px border-dashed border-t-0 border-b-0 border-l border-r border-bg-secondary transform -translate-x-1/2 -z-10'></div>
      </div>
      <div className='flex-1 sm:py-6'>
        <div
          className='relative min-h-16 p-[5%] sm:px-6 py-4
            sm:ml-6 group-even:sm:mr-6 
            bg-bg-secondary rounded-xl 
            mr-0 sm:-mr-12 group-even:sm:mr0
            group-even:sm:-ml-12
          '
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
    </li>
  );
}
