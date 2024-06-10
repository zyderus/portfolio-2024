'use client';
import { useLayoutEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/lib/constants';

/*  TODO: find solution and write a bug report to vercel */
// Fix theme class breaking on i18n middleware redirect && app behind [lang] route

export default function ApplyCssClasses() {
  useLayoutEffect(() => {
    const savedTheme = localStorage?.getItem(LOCAL_STORAGE_THEME_KEY);

    if (savedTheme) {
      document.documentElement.className = `${savedTheme}`;
    }
  }, []);

  return null;
}
