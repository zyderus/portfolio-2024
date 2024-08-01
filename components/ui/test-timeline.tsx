import TestTimelineItem from './test-timeline-item';
import { IconType } from 'react-icons';
import TestTripMap from './test-trip-map';
import TestPoiMap from './test-poi-map';
import places, { type Place } from '@/lib/constants/places';

interface PlacesByArea {
  [area: string]: Place[];
}

export default function TestTimeline() {
  const placesByArea: PlacesByArea = places.reduce<PlacesByArea>(
    (acc, place) => {
      if (!acc[place.area]) {
        acc[place.area] = [];
      }
      acc[place.area].push(place as Place);
      return acc;
    },
    {}
  );

  return (
    <>
      <h1 className='text-center text-3xl mb-8'>Colorado</h1>
      <TestPoiMap places={placesByArea.Colorado} />

      <h1 className='text-center text-3xl my-8'>San Francisco</h1>
      <TestPoiMap places={placesByArea.California} />

      <h1 className='text-center text-3xl my-8'>California Road Trip</h1>
      <TestPoiMap places={placesByArea.RoadTrip} />

      <h1 className='text-center text-3xl my-8'>
        California road trip timeline
      </h1>
      <ul className='flex flex-col gap-14 sm:gap-[2px]'>
        {placesByArea.RoadTrip.map((item, index, arr) => (
          <TestTimelineItem
            key={item.id}
            item={item}
            prevItem={arr[index - 1]}
          />
        ))}
      </ul>
    </>
  );
}
