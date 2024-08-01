import type { Place } from './constants/places';

export const fitBounds = (map: google.maps.Map | null, items: Place[]) => {
  if (!map || !items) return;

  const bounds = new google.maps.LatLngBounds();
  items.forEach(({ position }) => bounds.extend(position));
  map.fitBounds(bounds);
};
