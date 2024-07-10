'use client';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'left' | 'center' | 'right'>(
    'center'
  );
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (rect.left < screenWidth / 4) {
        setPosition('left');
      } else if (rect.right > screenWidth - screenWidth / 4) {
        setPosition('right');
      } else {
        setPosition('center');
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className='relative flex items-center'>
      <div
        onMouseEnter={() => showTooltipWithDelay(200)}
        onMouseLeave={hideTooltip}
        ref={tooltipRef}
        className='flex items-center'
      >
        {children}
      </div>
      <div
        className={` transition-opacity duration-300 ease-in
            ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {visible && (
          <>
            <div
              className={`absolute bottom-full mb-2 p-2 text-center text-white bg-black rounded shadow-lg w-max max-w-[50vw]
        ${position === 'left' ? 'left-0' : ''}
        ${position === 'center' ? 'left-1/2 transform -translate-x-1/2' : ''}
        ${position === 'right' ? 'right-0' : ''}`}
            >
              {text}
            </div>
            <div
              className={`absolute bottom-full mb-[3px] left-1/2 transform -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
