'use client';
import { useState, useRef, useEffect } from 'react';

interface LongClickParams {
  longPressDuration?: number;
  onClick?: () => void;
  onLongClick?: () => void;
}

interface LongClickReturn {
  vibration: boolean;
  handlers: {
    onClick: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
  };
}

type TimerRef = ReturnType<typeof setTimeout> | null;

export default function useLongClick({
  longPressDuration = 1000,
  onClick,
  onLongClick,
}: LongClickParams = {}): LongClickReturn {
  const [vibration, setVibration] = useState(false);
  const clickTimerRef = useRef<TimerRef>(null);
  const vibrationTimerRef = useRef<TimerRef>(null);
  const isLongPressRef = useRef(false);

  const startMouseDownTimer = () => {
    isLongPressRef.current = false;
    clickTimerRef.current = setTimeout(() => {
      isLongPressRef.current = true;
      setVibration(false);
      if (onLongClick) onLongClick();
    }, longPressDuration);

    vibrationTimerRef.current = setTimeout(() => {
      setVibration(true);
    }, longPressDuration * 0.5);
  };

  const cleanUp = () => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
    }
    if (vibrationTimerRef.current) {
      clearTimeout(vibrationTimerRef.current);
      vibrationTimerRef.current = null;
    }
  };

  const handleClick = () => {
    if (isLongPressRef.current) return;
    if (onClick) onClick();
  };

  const handleMouseDownOrTouchStart = () => {
    startMouseDownTimer();
  };

  const handleMouseUpOrLeaveOrTouchEnd = () => {
    setVibration(false);
    cleanUp();
  };

  useEffect(() => {
    return () => cleanUp();
  }, []);

  return {
    vibration,
    handlers: {
      onClick: handleClick,
      onMouseDown: handleMouseDownOrTouchStart,
      onMouseUp: handleMouseUpOrLeaveOrTouchEnd,
      onMouseLeave: handleMouseUpOrLeaveOrTouchEnd,
      onTouchStart: handleMouseDownOrTouchStart,
      onTouchEnd: handleMouseUpOrLeaveOrTouchEnd,
    },
  };
}
