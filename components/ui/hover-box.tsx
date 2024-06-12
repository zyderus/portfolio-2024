import { ReactNode } from 'react';

interface HoverBoxProps {
  children: ReactNode;
}

export default function HoverBox({ children }: HoverBoxProps) {
  return (
    <div className='relative'>
      <div
        className='absolute rounded-xl bg-accent -z-10'
        style={{
          top: '1px',
          left: '1px',
          width: 'calc(100% - 2px)',
          height: 'calc(100% - 2px)',
        }}
      ></div>
      <div className='bg-bg-secondary rounded-xl p-2 transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:-translate-y-0'>
        {children}
      </div>
    </div>
  );
}
