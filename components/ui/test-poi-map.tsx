'use client';
import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMapsLibrary,
  useMap,
} from '@vis.gl/react-google-maps';
import { PointOfInterest } from '@/lib/constants/trips';
import { MdPlace } from 'react-icons/md';

type TestPoiMapProps = {
  poi: PointOfInterest[];
};

export default function TestPoiMap({ poi }: TestPoiMapProps) {
  const [open, setOpen] = useState(false);
  const [center, setCenter] = useState(poi[0].location);
  const [zoom, setZoom] = useState(12);
  const position = poi[0].location;

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className='flex w-full h-[400px] rounded-xl overflow-hidden'>
        <div className='w-2/3'>
          <Map
            defaultZoom={9}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_TRIP_MAP_ID}
            fullscreenControl={false}
            mapTypeControl={false}
            streetViewControl={false}
            zoomControl={false}
            // onLoad={(mapInstance) => map.setMap(mapInstance)}
          >
            <Markers poi={poi} />

            {/* {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <p>I&apos;m in Hamburg</p>
              </InfoWindow>
            )} */}
          </Map>
        </div>
        <div className='w-1/3 h-full rounded-r-xl bg-bg-secondary overflow-hidden'>
          <PointList poi={poi} setCenter={setCenter} setZoom={setZoom} />
        </div>
      </div>
    </APIProvider>
  );
}

function Markers({ poi }: TestPoiMapProps) {
  return (
    <>
      {poi.map((p, index) => (
        <AdvancedMarker key={index} position={p.location}>
          {/* <Pin
          // background={'gray'}
          // borderColor={'green'}
          // glyphColor={'purple'}
          /> */}
          <MdPlace className='text-red-400 text-4xl' />
        </AdvancedMarker>
      ))}
    </>
  );
}

type PlacesProps = {
  poi: PointOfInterest[];
  setCenter: (position: google.maps.LatLngLiteral) => void;
  setZoom: (zoom: number) => void;
};

function PointList({ poi, setCenter, setZoom }: PlacesProps) {
  const map = useMap();
  const routesLibrary = useMapsLibrary('marker');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [places, setPlaces] = useState([]);
  const [placeIndex, setPlaceIndex] = useState(0);
  const selected = poi[placeIndex];

  const handlePlaceClick = (index: number) => {
    setPlaceIndex(index);
    const selectedLocation = poi[index].location;
    if (map) {
      map.panTo(selectedLocation);
    }
  };

  return (
    <div className='w-full h-full overflow-y-auto overscroll-contain'>
      <ul className=''>
        {poi.map((place, index) => (
          <li
            key={index}
            className={`${
              placeIndex === index
                ? 'bg-accent text-black'
                : 'hover:bg-bg-primary'
            } text-left`}
          >
            <button
              onClick={() => handlePlaceClick(index)}
              className='w-full px-4 py-2 text-left'
            >
              <div className='text-left flex items-center gap-1'>
                <div
                  className={`h-full text-xs -translate-y-[1px] ${
                    placeIndex === index ? 'text-color-primary' : 'text-accent'
                  }`}
                >
                  {index + 1}
                </div>{' '}
                <h4 className='font-bold'>{place.title}</h4>
              </div>
              <p className='pl-3 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi a
                enim quibusdam?
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
