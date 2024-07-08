'use client';
import { useState, useRef, ReactNode } from 'react';

interface ProgressbarWrapperProps {
  duration: number;
  children?: ReactNode;
}

export default function ProgressbarWrapper({
  duration = 1000,
  children,
}: ProgressbarWrapperProps) {
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const handleMouseDown = () => {
    let startTime = Date.now();
    intervalRef.current = window.setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / duration) * 100, 100);
      setProgress(newProgress);
    }, 10);
  };

  const handleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setProgress(0);
  };

  return (
    <div
      className='h-9 w-9 relative flex justify-center items-center rounded-full bg-bg-primary cursor-pointer'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className='w-10 h-10 absolute rounded-full -z-10'
        style={{
          background: `conic-gradient(rgb(var(--accent)) ${progress}%, transparent 0)`,
        }}
      ></div>
      {children}
    </div>
  );
}
