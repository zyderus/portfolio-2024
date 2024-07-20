export const LOCAL_STORAGE_THEME_KEY = 'THEME';
export const LOCALE_COOKIE = 'NEXT_LOCALE';
export const LONG_CLICK_DELAY = 700; // milliseconds

// TODO: set proper limit once done testing
export const RATE_LIMIT_INTERVAL = 60; // seconds

export interface NavLink {
  id: string;
  label: string;
  url: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'home',
    label: 'Start',
    url: '/',
  },
  {
    id: 'about',
    label: 'My Story',
    url: '/#about',
  },
  {
    id: 'features',
    label: 'Features',
    url: '/#features',
  },
  {
    id: 'projects',
    label: 'Projects',
    url: '/projects',
  },
  {
    id: 'contact',
    label: 'Contact',
    url: '/contact',
  },
];

export const customThemes = [
  'pinky',
  'grayzle',
  'synth',
  'skyny',
  'cozify',
  'goldbluem',
  'violetize',
  'snob',
] as const;

export const myData = {
  name: 'Rustam',
  githubUrl: 'https://github.com/zyderus',
  linkedInUrl: 'https://www.linkedin.com/in/rustamziyadov',
  portfolioUrl: 'http://www.rystam.com',
  // TODO: localize resume
  resumeUrl: (lang: string) =>
    `https://www.rystam.com/resume/resume_${lang}.pdf`,
  telegramNick: '@rystamz',
};
