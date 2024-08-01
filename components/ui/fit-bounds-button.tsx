import type { Place } from '@/lib/constants/places';
import { fitBounds } from '@/lib/fitBounds';
import { useMap } from '@vis.gl/react-google-maps';
import { ReactNode, useCallback } from 'react';

interface FitBoundsButtonProps {
  places: Place[];
  children: ReactNode;
}

export default function FitBoundsButton({
  places,
  children,
}: FitBoundsButtonProps) {
  const map = useMap();

  const handleClick = useCallback(() => {
    fitBounds(map, places);
  }, [map, places]);

  return (
    <button
      onClick={handleClick}
      className='p-2 bg-bg-secondary hover:bg-bg-primary rounded-md'
    >
      {children}
    </button>
  );
}
