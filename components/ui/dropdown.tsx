'use client';
import { useState, useMemo } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa6';
import { ImSpinner8 } from 'react-icons/im';
import Tooltip from './tooltip';

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
  compact?: boolean;
  tooltip?: string;
  selectAction?: (id: any) => void | Promise<void>;
}

export default function Dropdown({
  items,
  activeId = items[0]?.id,
  className,
  loading,
  chevron,
  compact,
  tooltip = '',
  selectAction,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [positionX, setPositionX] = useState<'left' | 'center' | 'right'>(
    'center'
  );
  const [positionY, setPositionY] = useState<'top' | 'bottom'>('bottom');
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  const itemsMap = useMemo(
    () =>
      items.reduce((acc: Record<string, Item>, item) => {
        acc[item.id] = item;
        return acc;
      }, {}),
    [items]
  );

  const hasIcon = useMemo(() => items.some((item) => item.icon), [items]);
  const ActiveIcon = itemsMap[activeId]?.icon;
  const maxIdLength = useMemo(
    () => Math.max(...items.map((item) => (item.icon ? 2 : item.id.length))),
    [items]
  );

  const showDropdown = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (rect.left < screenWidth / 4) {
        setPositionX('left');
      } else if (rect.right > screenWidth - screenWidth / 4) {
        setPositionX('right');
      } else {
        setPositionX('center');
      }

      if (rect.top < screenHeight / 2) {
        setPositionY('top');
      } else {
        setPositionY('bottom');
      }
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className='relative'>
      <Tooltip text={tooltip}>
        <button
          className={`flex justify-center items-center focus:outline-none transition-colors duration-300 ${
            isOpen || loading ? 'bg-bg-secondary' : 'hover:bg-bg-secondary'
          } ${className}`}
          onClick={showDropdown}
          disabled={loading}
        >
          {loading ? (
            <ImSpinner8 className='animate-spin' />
          ) : ActiveIcon ? (
            <ActiveIcon />
          ) : (
            <span
              className={`tracking-wider text-sm ${compact ? '' : 'font-bold'}`}
            >
              {itemsMap[activeId]?.id.toUpperCase()}
            </span>
          )}
          {chevron && (
            <div
              className={`ml-2 transition duration-300 text-xs ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <FaChevronDown className={`${compact ? 'text-xs' : ''}`} />
            </div>
          )}
        </button>
      </Tooltip>
      {isOpen && (
        <ul
          className={`absolute w-max text-base bg-bg-secondary overflow-hidden z-10 ${
            compact ? 'rounded-md py-1' : 'rounded-lg py-2'
          } ${positionX === 'left' ? 'left-0' : ''}
          ${positionX === 'center' ? 'left-1/2 transform -translate-x-1/2' : ''}
          ${positionX === 'right' ? 'right-0' : ''}
          ${positionY === 'bottom' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
        >
          <span className='sr-only'>Open dropdown</span>
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center hover:bg-bg-primary cursor-pointer ${
                compact ? 'px-4 py-2' : 'pl-4 pr-6 py-2'
              }`}
              onClick={() => {
                selectAction?.(item.id);
                setIsOpen(false);
              }}
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
                  hasIcon ? 'text-left pl-3 text-sm' : 'text-sm mx-auto'
                }`}
              >
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
