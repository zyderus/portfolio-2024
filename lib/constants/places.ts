import { places } from './placesData';

for (let i = 0; i < places.length; i++) {
  (places[i] as Place).id = 100 + i;
}

export interface Place {
  id: number;
  priority?: number;
  area: string;
  title: string;
  position: google.maps.LatLngLiteral;
  description: string;
}

export default places;
