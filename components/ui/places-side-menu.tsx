import { useEffect, useRef, useState } from 'react';
import type { Place } from '@/lib/constants/places';
import TruncatedText from './truncated-text';

interface PlacesSideMenuProps {
  places: Place[];
  selectedPlaceId: number | null;
  setSelectedPlaceId: (id: number | null) => void;
}

export default function PlacesSideMenu({
  places,
  selectedPlaceId,
  setSelectedPlaceId,
}: PlacesSideMenuProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggleReadMore = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleClick = (id: number | null) => {
    if (selectedPlaceId === id) {
      setSelectedPlaceId(null);
    } else {
      setSelectedPlaceId(id);
    }
  };

  const truncateText = (text: string, length: number = 60) => {
    return text.length > length ? `${text.substring(0, length)}` : text;
  };

  useEffect(() => {
    if (selectedPlaceId !== null) {
      const index = places.findIndex((place) => place.id === selectedPlaceId);
      if (index !== -1 && itemRefs.current[index]) {
        itemRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [selectedPlaceId, places]);

  return (
    <div className='w-full h-full bg-bg-secondary rounded-r-xl overflow-y-auto overscroll-contain scrollbar-regular'>
      <ul>
        {places.map(({ id, title, description }, index) => (
          <li
            key={id}
            ref={(el: any) => (itemRefs.current[index] = el)}
            className={`${
              id === selectedPlaceId
                ? 'bg-accent text-black'
                : 'hover:bg-bg-primary'
            } text-left`}
          >
            <button
              onClick={() => handleClick(id)}
              className='w-full px-4 py-2 text-left'
            >
              <div className='text-left flex items-start gap-1'>
                <div
                  className={`h-full text-xs translate-y-[6px] ${
                    id === selectedPlaceId
                      ? 'text-color-primary'
                      : 'text-accent'
                  }`}
                >
                  {index + 1}
                </div>
                <h4 className='font-bold'>{title}</h4>
              </div>
              <TruncatedText
                key={index}
                description={description}
                isExpanded={index === expandedIndex}
                onToggle={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handleToggleReadMore(index);
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
