import TestTimelineItem from './test-timeline-item';
import { IconType } from 'react-icons';
import TestTripMap from './test-trip-map';
import TestPoiMap from './test-poi-map';
import { PointOfInterest } from '@/lib/constants/trips';

export interface TestExperienceItem extends PointOfInterest {
  icon?: IconType;
}

type TestTimelineProps = {
  list: TestExperienceItem[];
};

export default function TestTimeline({ list }: TestTimelineProps) {
  return (
    <>
      <h1 className='text-center text-3xl my-4'>
        Places of interest: Colorado
      </h1>
      <TestPoiMap poi={list.filter((item) => item.section === 'Colorado')} />

      {/* <h1 className='text-center text-3xl my-4'>
        Places of interest: San Francisco
      </h1>
      <TestPoiMap poi={list.filter((item) => item.section === 'California')} /> */}

      {/* <h1 className='text-center text-3xl my-4'>California road trip</h1>
      <ul className='flex flex-col gap-14 sm:gap-[2px]'>
        {list
          .filter((item) => item.section === 'California')
          .map((item, index, arr) => (
            <TestTimelineItem
              key={item.id}
              item={item}
              prevItem={arr[index - 1]}
            />
          ))}
      </ul> */}
    </>
  );
}
