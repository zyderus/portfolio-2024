'use client';
import { useState, useEffect } from 'react';
import { LONG_CLICK_DELAY } from '@/lib/constants/constants';
import type { CustomTheme, JsonType } from '@/lib/types';
import useLongClick from '@/hooks/useLongClick';
import useTheme from '@/hooks/useTheme';
import useOutsideClick from '@/hooks/useOutsideClick';
import ProgressbarWrapper from '@/components/ui/progressbar-wrapper';
import ThemeDropdown from '@/components/ui/theme-dropdown';
import ThemeButton from '@/components/ui/theme-button';
import Tooltip from './tooltip';

interface ThemeSwitcherProps {
  dictionary: JsonType;
}

export default function ThemeSwitcher({ dictionary }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='relative'>
      <Tooltip text={dictionary?.tooltip?.themeButton} delay={700}>
        <ProgressbarWrapper duration={LONG_CLICK_DELAY}>
          <ThemeButton
            isDropdownOpen={isDropdownOpen}
            icon={icon}
            vibration={vibration}
            mounted={mounted}
            {...handlers}
          />
        </ProgressbarWrapper>
      </Tooltip>

      <ThemeDropdown
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        handleDropdownTheme={handleDropdownTheme}
      />
    </div>
  );
}
