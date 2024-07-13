import type { BackgroundItem } from '@/lib/constants/experience';
import { IoBriefcaseOutline } from 'react-icons/io5';

type TimelineProps = {
  list: BackgroundItem[];
};

export default function Timeline({ list }: TimelineProps) {
  return (
    <ul>
      {list.map(
        ({
          id,
          employer,
          position,
          institution,
          field,
          date_start,
          date_end,
          location,
          description,
          awards,
          url,
          icon: Icon,
        }) => {
          return (
            <li
              key={id}
              className='group list-none flex justify-center items-top even:flex-row-reverse'
            >
              <div className='flex-1 py-6'>
                <div className='flex justify-end group-even:justify-start items-center px-4 h-16'>
                  {new Date(date_start).getFullYear()}
                  {date_end && ` - ${new Date(date_end).getFullYear()}`}
                </div>
              </div>
              <div className='relative py-6 text-3xl'>
                <div className='w-16 h-16 flex justify-center items-center bg-bg-primary border-2 border-bg-secondary rounded-full'>
                  {Icon ? <Icon /> : <IoBriefcaseOutline />}
                </div>
                <div className='absolute inset-y-0 left-1/2 w-px border-dashed border-t-0 border-b-0 border-l border-r border-bg-secondary transform -translate-x-1/2 -z-10'></div>
              </div>
              <div className='flex-1 py-6'>
                <div
                  className='relative px-6 py-4 text-left
                  ml-6 group-even:ml-[initial] group-even:mr-6 
                  bg-bg-secondary rounded-xl 
                  mr-0 sm:-mr-12 group-even:sm:mr0
                  group-even:sm:-ml-12
                  '
                >
                  <p className='font-bold mb-2'>{position || field}</p>
                  {(institution && (
                    <p className='font-bold'>{institution}</p>
                  )) ||
                    (employer !== 'Contract' && (
                      <p className='font-bold'>{employer}</p>
                    ))}
                  <p className='text-sm italic'>{location}</p>
                  <p>{description}</p>
                  {awards && (
                    <p className='mt-2 text-sm'>
                      <span className='font-bold'>Awards:</span> {awards}
                    </p>
                  )}
                  <div
                    className='
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
            </li>
          );
        }
      )}
    </ul>
  );
}
