'use client';
import { useState, useEffect, useRef } from 'react';
import { LONG_CLICK_DELAY } from '@/lib/constants';
import type { CustomTheme } from '@/lib/types';
import useLongClick from '@/hooks/useLongClick';
import useTheme from '@/hooks/useTheme';
import ProgressbarWrapper from '@/components/progressbar-wrapper';
import ThemeDropdown from '@/components/theme-dropdown';
import ThemeButton from '@/components/theme-button';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { icon, cycleTheme, setNewCustomTheme } = useTheme();

  const handleClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    } else {
      cycleTheme();
    }
  };

  const handleLongClick = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownTheme = (newTheme: CustomTheme) => {
    setNewCustomTheme(newTheme);
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
      setIsDropdownOpen(false);
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
          isDropdownOpen={isDropdownOpen}
          icon={icon}
          vibration={vibration}
          mounted={mounted}
          {...handlers}
        />
      </ProgressbarWrapper>

      <ThemeDropdown
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        handleDropdownTheme={handleDropdownTheme}
      />
    </div>
  );
}
