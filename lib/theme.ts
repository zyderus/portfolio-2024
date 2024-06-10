import { LOCAL_STORAGE_THEME_KEY, type ThemeName } from './constants';

const setDocumentTheme = (themeName: ThemeName) => {
  document.documentElement.className = `${themeName}`;
};

const removeDocumentTheme = () => {
  document.documentElement.removeAttribute('class');
};

export const setTheme = (themeName: ThemeName) => {
  const isSystemTheme = themeName === 'auto';
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (isSystemTheme && prefersDarkMode) {
    localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);
    setDocumentTheme('dark');
  } else if (isSystemTheme) {
    localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);
    removeDocumentTheme();
  } else {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
    setDocumentTheme(themeName);
  }
};

export const themeFlashFix = `
  const savedTheme = localStorage.getItem('${LOCAL_STORAGE_THEME_KEY}');
  if (savedTheme && savedTheme.length > 0) {
    document.documentElement.className = savedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.className = 'dark';
  }
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      if (!localStorage.${LOCAL_STORAGE_THEME_KEY}?.length) {
        const newColorScheme = event.matches ? 'dark' : 'light';
        document.documentElement.className = newColorScheme;
      }
    });
`;
