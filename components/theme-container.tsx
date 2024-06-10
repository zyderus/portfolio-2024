'use client';
import { useState, useEffect, useRef } from 'react';
import { LONG_CLICK_DELAY } from '@/lib/constants';
import useLongClick from '@/hooks/useLongClick';
import useTheme from '@/hooks/useTheme';
import ProgressbarWrapper from '@/components/progressbar-wrapper';
import ThemeButton from '@/components/theme-button';
import DropdownMenu from '@/components/dropdown-menu';

export default function ThemeContainer() {
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { icon, cycleTheme, setNewCustomTheme } = useTheme();

  const handleClick = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else {
      cycleTheme();
    }
  };

  const handleLongClick = () => {
    setDropdownOpen(true);
  };

  const { vibration, handlers } = useLongClick({
    longPressDuration: LONG_CLICK_DELAY,
    onClick: handleClick,
    onLongClick: handleLongClick,
  });

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    setMounted(true);

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <div className='relative' style={{ position: 'relative' }}>
      <ProgressbarWrapper duration={LONG_CLICK_DELAY}>
        <ThemeButton
          dropdownOpen={dropdownOpen}
          icon={icon}
          vibration={vibration}
          mounted={mounted}
          {...handlers}
        />
      </ProgressbarWrapper>

      <DropdownMenu
        dropdownOpen={dropdownOpen}
        dropdownRef={dropdownRef}
        setNewCustomTheme={setNewCustomTheme}
      />
    </div>
  );
}
