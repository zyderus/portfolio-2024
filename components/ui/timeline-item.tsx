import type { ExperienceItem } from '@/lib/constants/experience';
import type { JsonType } from '@/lib/types';
import { IoBriefcaseOutline } from 'react-icons/io5';

type TimelineProps = {
  item: ExperienceItem;
  dictionary: JsonType;
};

export default function TimelineItem({ item, dictionary }: TimelineProps) {
  const intl = dictionary.dict.split('|');
  const intlItem = {
    organization: intl[0] || item.organization,
    discipline: intl[1] || item.discipline,
    location: intl[2] || item.location,
    description: intl[3] || item.description,
    awardsDescription: intl[4] || item.awards,
  };

  const startYear = new Date(item.date_start).getFullYear();
  const endYear = item.date_end
    ? ` - ${new Date(item.date_end).getFullYear()}`
    : '';

  return (
    <div className='flex justify-center items-top flex-col sm:flex-row group-even:sm:flex-row-reverse text-sm sm:text-base text-center sm:text-left'>
      <div className='flex-1 sm:py-6'>
        <div className='flex justify-center sm:justify-end group-even:sm:justify-start items-center sm:px-4 sm:h-16'>
          {startYear}
          {endYear}
        </div>
      </div>

      <div className='relative py-2 sm:py-6 text-3xl flex justify-center items-center sm:items-start'>
        <div className='w-16 h-16 flex justify-center items-center bg-bg-primary border-2 border-bg-secondary rounded-full'>
          {item.icon ? <item.icon /> : <IoBriefcaseOutline />}
        </div>
        <div className='absolute inset-y-0 left-1/2 w-px border-dashed border-t-0 border-b-0 border-l border-r border-bg-secondary transform -translate-x-1/2 -z-10'></div>
      </div>

      <div className='flex-1 sm:py-6'>
        <div
          className='relative p-[5%] sm:px-6 py-4
            sm:ml-6 group-even:sm:mr-6 
            bg-bg-secondary rounded-xl 
            mr-0 sm:-mr-12 group-even:sm:mr0
            group-even:sm:-ml-12
          '
        >
          <p className='font-bold mb-2'>{intlItem.discipline}</p>
          {intlItem.organization !== 'Contract' && (
            <p className='font-bold'>{intlItem.organization}</p>
          )}
          <p className='text-sm italic'>{intlItem.location}</p>
          <p>{intlItem.description}</p>
          {intlItem.awardsDescription && (
            <p className='mt-2 text-sm'>
              <span className='font-bold'>{dictionary?.awards}:</span>{' '}
              {intlItem.awardsDescription}
            </p>
          )}

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
    </div>
  );
}
