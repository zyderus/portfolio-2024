import { useEffect } from 'react';
import type { JsonType } from '@/lib/types';

interface CountdownButtonProps {
  loading: boolean;
  countdown: number;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
  dictionary: JsonType;
}

export default function CountdownButton({
  loading,
  countdown,
  setCountdown,
  dictionary,
}: CountdownButtonProps) {
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, setCountdown]);

  const buttonDisabled = loading || countdown > 0;
  const buttonLabel = loading
    ? `${dictionary.sending}...`
    : countdown > 0
    ? `${dictionary.resend} ${countdown}`
    : dictionary.send;

  return (
    <button
      className={`hover:shadow-form rounded-md py-3 px-8 text-base font-semibold text-bg-primary outline-none ${
        buttonDisabled ? 'bg-gray-400' : 'bg-accent'
      }`}
      disabled={buttonDisabled}
    >
      {buttonLabel}
    </button>
  );
}
