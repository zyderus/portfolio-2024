'use client';
import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/lib/constants';
import { setTheme } from '@/lib/theme';
import { FaCircleHalfStroke, FaMoon, FaGear } from 'react-icons/fa6';
import { MdWbSunny } from 'react-icons/md';

export enum ThemeName {
  AUTO = 'auto',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Theme {
  name: string;
  icon: JSX.Element;
}

export const themes: Theme[] = [
  { name: ThemeName.AUTO, icon: <FaCircleHalfStroke /> },
  {
    name: ThemeName.LIGHT,
    icon: <MdWbSunny style={{ fontSize: '1.25rem' }} />,
  },
  { name: ThemeName.DARK, icon: <FaMoon /> },
];

export const customThemes: string[] = [
  'pinky',
  'grayzle',
  'synth',
  'skyny',
  'cozify',
  'goldbluem',
  'violetize',
  'snob',
];

export default function useTheme() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [customTheme, setCustomTheme] = useState('');

  const cycleTheme = () => {
    setCustomTheme('');
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    setTheme(themes[nextIndex].name);
  };

  const setNewCustomTheme = (themeName: string) => {
    if (customThemes.includes(themeName)) {
      setCustomTheme(themeName);
      setTheme(themeName);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'auto';
    const storedThemeIndex =
      themes.findIndex((t) => t.name === storedTheme) || 0;
    const isStoredCustomTheme = customThemes.includes(storedTheme)
      ? storedTheme
      : '';

    setCurrentThemeIndex(storedThemeIndex);
    setCustomTheme(isStoredCustomTheme);
  }, []);

  const icon = customTheme ? <FaGear /> : themes[currentThemeIndex]?.icon;

  return {
    icon,
    cycleTheme,
    setNewCustomTheme,
  };
}
