import { useEffect, useRef, useState } from 'react';

export default function useCountdown(initialValue: number) {
  const [countdown, setCountdown] = useState(initialValue);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (countdown > 0) {
      timerRef.current = setInterval(
        () => setCountdown((prev) => prev - 1),
        1000
      );
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [countdown]);

  return { countdown, setCountdown };
}
