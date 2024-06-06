import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background-primary))',
        color: 'rgba(var(--color-primary))',

        primary: 'rgba(var(--color-primary))',
        secondary: 'rgba(var(--background-primary))',
        tertiary: 'rgba(var(--background-secondary))',
        accent: 'rgba(var(--accent))',
        // border: 'rgba(var(--border))',
        // card: 'rgba(var(--card))',
        // 'copy-primary': 'rgba(var(--copy-primary))',
        // 'copy-secondary': 'rgba(var(--copy-secondary))',
        // cta: 'rgba(var(--cta))',
        // 'cta-active': 'rgba(var(--cta-active))',
        // 'cta-text': 'rgba(var(--cta-text))',
      },
    },
  },
  plugins: [],
};
export default config;
