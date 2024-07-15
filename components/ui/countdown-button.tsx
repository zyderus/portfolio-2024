'use client';
import { useEffect, useState } from 'react';
import type { JsonType } from '@/lib/types';

interface CountdownButtonProps {
  loading: boolean;
  countdown: number;
  dictionary: JsonType;
  className: string;
  handleClick?: () => void;
}

export default function CountdownButton({
  loading,
  countdown,
  dictionary,
  className,
  handleClick,
}: CountdownButtonProps) {
  const [count, setCount] = useState(countdown);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count, setCount]);

  const buttonDisabled = loading || count > 0;
  const buttonLabel = loading
    ? `${dictionary.sending}...`
    : count > 0
    ? `${dictionary.resend} ${count}`
    : dictionary.send;

  return (
    <button
      className={`rounded-xl py-2 xs:py-3 px-2 xs:px-8 font-semibold outline-none ${
        buttonDisabled
          ? 'bg-gray-400 hover:bg-none'
          : 'bg-accent hover:bg-bg-secondary'
      } ${className}`}
      onClick={handleClick}
      disabled={buttonDisabled}
    >
      {buttonLabel}
    </button>
  );
}
