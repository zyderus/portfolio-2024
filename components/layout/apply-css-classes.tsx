'use client';
import { useLayoutEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/lib/constants/constants';

/*  TODO: find solution and write a bug report to vercel */
// Resolve theme class issue behind [lang] routes caused by i18n middleware redirects

export default function ApplyCssClasses() {
  useLayoutEffect(() => {
    const savedTheme = localStorage?.getItem(LOCAL_STORAGE_THEME_KEY);

    if (savedTheme) {
      document.documentElement.className = `${savedTheme}`;
    }
  }, []);

  return null;
}
