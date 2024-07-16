'use client';
import { useState, useMemo } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa6';
import { ImSpinner8 } from 'react-icons/im';

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
  selectAction?: (id: any) => void | Promise<void>;
}

export default function Dropdown({
  items,
  activeId = items[0]?.id,
  className,
  loading,
  chevron,
  compact,
  selectAction,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLButtonElement>(() => {
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

  return (
    <button
      ref={dropdownRef}
      className={`relative flex justify-center items-center focus:outline-none transition-colors duration-300 ${
        isOpen || loading ? 'bg-bg-secondary' : 'hover:bg-bg-secondary'
      } ${className}`}
      onClick={() => setIsOpen((prev) => !prev)}
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
      {isOpen && (
        <ul
          className={`absolute w-max right-0 text-base bg-bg-secondary overflow-hidden z-10 ${
            compact ? 'top-8 rounded-md py-1' : 'top-12 rounded-lg py-2'
          }`}
        >
          <span className='sr-only'>Open dropdown</span>
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center hover:bg-bg-primary ${
                compact ? 'px-4 py-2' : 'pl-4 pr-6 py-2'
              }`}
              onClick={() => selectAction?.(item.id)}
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
    </button>
  );
}
