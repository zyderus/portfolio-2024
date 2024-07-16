'use client';
import { useState, useRef } from 'react';
import { IconType } from 'react-icons';
import useOutsideClick from '@/hooks/useOutsideClick';

export interface Item {
  id: string;
  label?: string;
  icon?: IconType;
}

interface DropdownProps {
  items: Item[];
  activeId?: string;
  className?: string;
  loading?: boolean;
  chevron?: boolean;
  selectAction?: (id: any) => void | Promise<void>;
}

export default function Dropdown({
  items,
  activeId = items && items[0].id,
  className,
  loading,
  chevron,
  selectAction,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRef = useRef<Record<string, Item>>(
    items.reduce((acc: Record<string, Item>, item) => {
      acc[item.id] = item;
      return acc;
    }, {})
  );
  const dropdownRef = useOutsideClick<HTMLButtonElement>(() => {
    setIsOpen(false);
  });

  const hasIcon = items.some((item) => item.icon);
  const ActiveIcon = itemsRef.current[activeId]?.icon;

  const maxIdLength = Math.max(
    ...items.map((item: any) => (item.icon ? 2 : item.id.length))
  );

  const handleSelect = (id: string) => {
    console.log('select id:', id);
    selectAction && selectAction(id);
  };

  return (
    <>
      <button
        ref={dropdownRef}
        className={`relative flex justify-center items-center focus:outline-none transition-colors duration-300 ${
          isOpen ? 'bg-bg-secondary' : 'hover:bg-bg-secondary'
        } ${className}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {ActiveIcon ? (
          <ActiveIcon />
        ) : (
          <span className='font-bold tracking-wider text-sm'>
            {itemsRef.current[activeId]?.id.toUpperCase()}
          </span>
        )}
        {chevron && (
          <div
            className={`transition duration-300 ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}
            style={{ transformOrigin: '50% 50%' }}
          >
            ^
          </div>
        )}
        {isOpen && (
          <ul className='absolute w-max right-0 top-12 text-base bg-bg-secondary rounded-lg overflow-hidden py-2 z-10'>
            <span className='sr-only'>Open dropdown</span>
            {items.map((item, i) => (
              <li
                key={item.id}
                className='flex items-center pl-4 pr-6 py-2 hover:bg-bg-primary'
                onClick={() => handleSelect(item.id)}
              >
                {hasIcon && (
                  <div
                    className={`flex justify-center items-center text-center font-bold tracking-wide`}
                    style={{
                      width: `${maxIdLength}rem`,
                    }}
                  >
                    {item.icon ? <item.icon /> : item.id.toUpperCase()}
                  </div>
                )}
                <div
                  className={`flex items-center ${
                    hasIcon ? 'text-left pl-3 text-sm' : 'text-center mx-auto'
                  }`}
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        )}
      </button>
    </>
  );
}
