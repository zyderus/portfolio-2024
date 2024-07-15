'use client';
import { useState, useRef } from 'react';
import { IconType } from 'react-icons';
import { FaBeerMugEmpty, FaBasketShopping, FaBluetooth } from 'react-icons/fa6';

interface Item {
  id: string;
  label: string;
  icon?: IconType;
}

const list: Item[] = [
  {
    id: 'one',
    label: 'One',
    icon: FaBeerMugEmpty,
  },
  {
    id: 'two',
    label: 'Two',
    // icon: FaBasketShopping,
  },
  {
    id: '333',
    label: 'Threeeeeedsfasdfasdfasdfasdf',
  },
];

interface DropdownProps {
  items?: Item[];
  activeId?: string;
  className?: string;
}

export default function Dropdown({
  items = list,
  activeId = '333',
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRef = useRef<Record<string, Item>>(
    items.reduce((acc: Record<string, Item>, item) => {
      acc[item.id] = item;
      return acc;
    }, {})
  );

  const hasIcon = items.some((item) => item.icon);
  const ActiveIcon = itemsRef.current[activeId]?.icon;

  console.log(hasIcon);

  return (
    <button
      // TODO: remove h and px
      className={`relative flex justify-start items-center hover:bg-bg-secondary focus:outline-none transition-colors duration-300 h-9 px-4 ${
        isOpen && 'bg-bg-secondary'
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
      {isOpen && (
        <ul className='border border-orange-500 w-max absolute left-0 top-12'>
          <span className='sr-only'>Open dropdown</span>
          {items.map((item, i) => (
            <li key={item.id} className='flex items-center'>
              {item.icon && <div className='w-1/2'>{<item.icon />}</div>}
              <div className={`w-${item.icon ? '1/2' : 'full'}`}>
                {item.label}
              </div>
            </li>

            // <li key={item.id} className='border border-green-500 py-2 flex'>
            //   {hasIcon && (
            //     <div className='w-1/2 pl-4 pr-1 flex justify-center items-center text-center bg-red-400'>
            //       {item.icon ? (
            //         <item.icon style={{ fontSize: '115%' }} />
            //       ) : (
            //         item.id.toUpperCase()
            //       )}
            //     </div>
            //   )}
            //   <div
            //     className={`bg-green-400 ${
            //       hasIcon ? 'w-2/3 pl-1 pr-4 text-left' : 'w-full px-4'
            //     }`}
            //   >
            //     {item.label}
            //   </div>
            // </li>
          ))}
        </ul>
      )}
    </button>
  );
}
