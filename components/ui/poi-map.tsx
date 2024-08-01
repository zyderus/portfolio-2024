'use client';
import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { ClusteredPlaceMarkers } from './clustered-place-markers';
import PlacesSideMenu from './places-side-menu';
import { PiBracketsSquare } from 'react-icons/pi';
import FitBoundsButton from './fit-bounds-button';

type PoiMapProps = {
  places: any;
};

export default function PoiMap({ places }: PoiMapProps) {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className='flex w-full h-[500px]'>
        <div className='relative flex-grow rounded-l-xl overflow-hidden'>
          <Map
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
            defaultCenter={places[0].position}
            defaultZoom={10}
            gestureHandling={'greedy'}
            onClick={() => setSelectedPlaceId(null)}
            disableDefaultUI
          >
            <ClusteredPlaceMarkers
              places={places}
              selectedPlaceId={selectedPlaceId}
              setSelectedPlaceId={setSelectedPlaceId}
            />
          </Map>
          <div className='absolute top-2 right-2'>
            <FitBoundsButton places={places}>
              <PiBracketsSquare className='text-xl' />
            </FitBoundsButton>
          </div>
        </div>

        <div className='w-1/3 max-w-[250px]'>
          <PlacesSideMenu
            places={places}
            selectedPlaceId={selectedPlaceId}
            setSelectedPlaceId={setSelectedPlaceId}
          />
        </div>
      </div>
    </APIProvider>
  );
}
