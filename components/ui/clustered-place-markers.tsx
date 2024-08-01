import { InfoWindow, useMap } from '@vis.gl/react-google-maps';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { type Marker, MarkerClusterer } from '@googlemaps/markerclusterer';
import { Place } from '@/lib/constants/places';
import { fitBounds } from '@/lib/fitBounds';
import { PlaceMarker } from './place-marker';

export type ClusteredPlaceMarkersProps = {
  places: Place[];
  selectedPlaceId: number | null;
  setSelectedPlaceId: (id: number | null) => void;
};

export const ClusteredPlaceMarkers = ({
  places,
  selectedPlaceId,
  setSelectedPlaceId,
}: ClusteredPlaceMarkersProps) => {
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});

  const selectedPlace = useMemo(
    () =>
      places && selectedPlaceId
        ? places.find((t) => t.id === selectedPlaceId)!
        : null,
    [places, selectedPlaceId]
  );

  const map = useMap();
  const clusterer = useMemo(() => {
    if (!map) return null;

    return new MarkerClusterer({ map });
  }, [map]);

  useEffect(() => {
    if (!clusterer) return;

    clusterer.clearMarkers();
    clusterer.addMarkers(Object.values(markers));
  }, [clusterer, markers]);

  const setMarkerRef = useCallback((marker: Marker | null, id: number) => {
    setMarkers((markers) => {
      if ((marker && markers[id]) || (!marker && !markers[id])) return markers;

      if (marker) {
        return { ...markers, [id]: marker };
      } else {
        const { [id]: _, ...newMarkers } = markers;

        return newMarkers;
      }
    });
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setSelectedPlaceId(null);
  }, [setSelectedPlaceId]);

  const handleMarkerClick = useCallback(
    (place: Place) => {
      setSelectedPlaceId(place.id);
    },
    [setSelectedPlaceId]
  );

  useEffect(() => {
    fitBounds(map, places);
  }, [map, places]);

  return (
    <>
      {places.map((place) => (
        <PlaceMarker
          key={place.id}
          place={place}
          onClick={handleMarkerClick}
          setMarkerRef={setMarkerRef}
          isActive={selectedPlaceId === place.id}
        />
      ))}

      {selectedPlaceId && (
        <InfoWindow
          anchor={markers[selectedPlaceId]}
          onCloseClick={handleInfoWindowClose}
          className='text-gray-900'
        >
          {selectedPlace?.title}
        </InfoWindow>
      )}
    </>
  );
};
