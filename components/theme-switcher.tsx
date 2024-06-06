'use client';
import { useEffect, useState } from 'react';
import { customThemes } from '@/lib/constants';

const themes = [...customThemes, 'light', 'dark'];

export default function ThemeSelector() {
  const [theme, setTheme] = useState(themes[0]);

  const handleTheme = (themeName: string) => {
    setTheme(themeName);
  };

  useEffect(() => {
    document.documentElement.className = `${theme}`;
  }, [theme]);

  return (
    <div className='flex gap-4'>
      ThemeSelector:{' '}
      {themes.map((theme) => (
        <div
          className='cursor-pointer'
          key={theme}
          onClick={() => handleTheme(theme)}
        >
          {theme}
        </div>
      ))}
    </div>
  );
}
