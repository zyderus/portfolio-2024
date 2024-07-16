'use client';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type TooltipProps = {
  text?: string;
  delay?: number;
  children: ReactNode;
};

export default function Tooltip({ text, delay = 200, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [positionX, setPositionX] = useState<'left' | 'center' | 'right'>(
    'center'
  );
  const [positionY, setPositionY] = useState<'top' | 'bottom'>('bottom');
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
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

    setVisible(true);
  };

  const showTooltipWithDelay = (delay: number) => {
    timeoutRef.current = setTimeout(showTooltip, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current || visible) hideTooltip;
    };
  }, [visible]);

  return (
    <div className='relative flex items-center text-base'>
      <div
        onMouseEnter={() => text && showTooltipWithDelay(delay)}
        onMouseLeave={hideTooltip}
        onMouseDown={hideTooltip}
        onClick={hideTooltip}
        ref={tooltipRef}
        className='flex items-center'
      >
        {children}
      </div>
      {text && visible && (
        <>
          <div
            className={`absolute py-1 sm:py-2 px-2 xs:px-3 sm:px-5 text-left xs:text-center text-white bg-gray-800 rounded-md shadow-lg w-max max-w-[50vw] z-30
        ${positionX === 'left' ? 'left-0' : ''}
        ${positionX === 'center' ? 'left-1/2 transform -translate-x-1/2' : ''}
        ${positionX === 'right' ? 'right-0' : ''}
        ${positionY === 'bottom' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
          >
            {text}
          </div>
          <div
            className={`absolute ${
              positionY === 'bottom'
                ? 'bottom-full mb-[3px]'
                : 'top-full mt-[3px]'
            } left-1/2 transform -translate-x-1/2 
                border-l-[6px] border-l-transparent 
                border-r-[6px] border-r-transparent 
                ${positionY === 'bottom' ? 'border-t-[6px]' : 'border-b-[6px]'}
                border-gray-800`}
          ></div>
        </>
      )}
    </div>
  );
}
