import { useCallback } from 'react';
import type { Marker } from '@googlemaps/markerclusterer';
import type { Place } from '@/lib/constants/places';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { FaLocationDot } from 'react-icons/fa6';
import { PiCrosshairThin } from 'react-icons/pi';

export type PlaceMarkerProps = {
  place: Place;
  onClick: (place: Place) => void;
  setMarkerRef: (marker: Marker | null, id: number) => void;
  isActive: boolean;
};

export const PlaceMarker = ({
  place,
  onClick,
  setMarkerRef,
  isActive,
}: PlaceMarkerProps) => {
  const handleClick = useCallback(() => onClick(place), [onClick, place]);
  const ref = useCallback(
    (marker: google.maps.marker.AdvancedMarkerElement) =>
      setMarkerRef(marker, place.id),
    [setMarkerRef, place.id]
  );

  return (
    <AdvancedMarker position={place.position} ref={ref} onClick={handleClick}>
      <div className='relative p-8'>
        <FaLocationDot
          className={`absolute text-3xl bottom-6 left-[17px] text-red-500 ${
            isActive ? 'animate-bounce' : 'hover:animate-bounce'
          }`}
          style={{
            transformOrigin: 'center',
          }}
        />
        {isActive && (
          <PiCrosshairThin
            className='absolute text-6xl text-blue-600/80 -translate-y-1/2 animate-spin-tilt -z-10'
            style={{ transformOrigin: 'center' }}
          />
        )}
      </div>
    </AdvancedMarker>
  );
};
