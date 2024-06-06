const setDocumentTheme = (themeName: string) => {
  document.documentElement?.setAttribute('data-theme', themeName);
};

const removeDocumentTheme = () => {
  document.documentElement?.removeAttribute('data-theme');
};

export const setTheme = (themeName: string) => {
  const isSystemTheme = themeName === 'auto';
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (isSystemTheme && prefersDarkMode) {
    localStorage.removeItem('theme');
    setDocumentTheme('dark');
  } else if (isSystemTheme) {
    localStorage.removeItem('theme');
    removeDocumentTheme();
  } else {
    localStorage.setItem('theme', themeName);
    setDocumentTheme(themeName);
  }
};

export const themeFlashFix = `
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && savedTheme.length > 0) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement?.setAttribute('data-theme', 'dark');
  }
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      if (!localStorage.theme?.length) {
        const newColorScheme = event.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newColorScheme);
      }
    });
`;
