'use client';
import { useEffect } from 'react';
import type { JsonType } from '@/lib/types';
import Button from './button';
import useCountdown from '@/hooks/useCountdown';

interface CountdownButtonProps {
  loading: boolean;
  remainingTime: number;
  className: string;
  handleClick?: () => void;
  dictionary: JsonType;
}

export default function CountdownButton({
  loading,
  remainingTime,
  className,
  handleClick,
  dictionary,
}: CountdownButtonProps) {
  const [send, sending, resend] = dictionary.split('|');
  const { countdown, setCountdown } = useCountdown(remainingTime);

  useEffect(() => {
    setCountdown(remainingTime);
  }, [remainingTime, setCountdown]);

  const buttonDisabled = loading || countdown > 0;
  const buttonLabel = loading ? `${sending}...` : send;

  return (
    <>
      <Button
        variant='primary'
        size='large'
        disabled={buttonDisabled}
        onClick={handleClick}
        className={className}
      >
        {buttonLabel}
      </Button>
      {countdown > 0 && (
        <p className='text-accent'>{`${resend} ${countdown}`}</p>
      )}
    </>
  );
}
