'use client';
import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, customThemes } from '@/lib/constants';
import { setTheme } from '@/lib/theme';
import type { CustomTheme } from '@/lib/types';
import { MdWbSunny } from 'react-icons/md';
import {
  FaCircleHalfStroke,
  FaMoon,
  FaGear,
  FaRegCircleQuestion,
} from 'react-icons/fa6';

export enum ThemeName {
  AUTO = 'auto',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeItem {
  name: ThemeName;
  icon: JSX.Element;
}

export const themes: ThemeItem[] = [
  { name: ThemeName.AUTO, icon: <FaCircleHalfStroke /> },
  {
    name: ThemeName.LIGHT,
    icon: <MdWbSunny style={{ fontSize: '1.25rem' }} />,
  },
  { name: ThemeName.DARK, icon: <FaMoon /> },
];

export default function useTheme() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [customTheme, setCustomTheme] = useState<string>('');

  const cycleTheme = () => {
    setCustomTheme('');
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    setTheme(themes[nextIndex].name);
  };

  const setNewCustomTheme = (themeName: CustomTheme) => {
    if (customThemes.includes(themeName)) {
      setCustomTheme(themeName);
      setTheme(themeName);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'auto';
    const storedThemeIndex =
      themes.findIndex((t) => t.name === storedTheme) || 0;
    const isStoredCustomTheme = customThemes.includes(
      storedTheme as CustomTheme
    )
      ? storedTheme
      : '';

    setCurrentThemeIndex(storedThemeIndex);
    setCustomTheme(isStoredCustomTheme);
  }, []);

  const icon = customTheme ? <FaGear /> : themes[currentThemeIndex]?.icon;

  return {
    icon: icon || <FaRegCircleQuestion style={{ fontSize: '1.20rem' }} />,
    cycleTheme,
    setNewCustomTheme,
  };
}
