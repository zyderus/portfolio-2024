'use client';
import { useEffect, useState } from 'react';
import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';

type DirectionsProps = {
  origin: any;
  destination: any;
};

export default function TestTripMap({ origin, destination }: DirectionsProps) {
  const position = { lat: 43.6532, lng: -79.3832 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className='flex w-full'>
        <Directions origin={origin} destination={destination} />
        <div className='w-1/2 h-[300px] rounded-r-xl overflow-hidden'>
          <Map
            defaultZoom={9}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_TRIP_MAP_ID}
            fullscreenControl={false}
            mapTypeControl={false}
            streetViewControl={false}
            zoomControl={false}
          ></Map>
        </div>
      </div>
    </APIProvider>
  );
}

function Directions({ origin, destination }: DirectionsProps) {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((res) => {
        directionsRenderer.setDirections(res);
        setRoutes(res.routes);
      });
  }, [directionsService, directionsRenderer, origin, destination]);

  useEffect(() => {
    if (!directionsRenderer) return;

    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className='w-1/2 rounded-l-xl bg-bg-secondary p-4'>
      <h2 className='font-bold text-lg'>{selected.summary}</h2>
      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
