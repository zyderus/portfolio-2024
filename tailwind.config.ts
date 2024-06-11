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

        'color-primary': 'rgba(var(--color-primary))',
        'bg-primary': 'rgba(var(--background-primary))',
        'bg-secondary': 'rgba(var(--background-secondary))',
        accent: 'rgba(var(--accent))',
        linkedin: 'rgba(7, 98, 200)',
      },
      boxShadow: {
        dropdown:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
