export const LOCAL_STORAGE_THEME_KEY = 'THEME';
export const LOCALE_COOKIE = 'NEXT_LOCALE';
export const LONG_CLICK_DELAY = 700; // milliseconds
export const RATE_LIMIT_INTERVAL = 120; // seconds

export const navLinks = [
  {
    key: 'about',
    title: 'About',
    url: '/#about',
  },
  {
    key: 'experience',
    title: 'Experience',
    url: '/#feature-projects',
  },
  {
    key: 'projects',
    title: 'Projects',
    url: '/#',
  },
  {
    key: 'contact',
    title: 'Contact',
    url: '/contact',
  },
  {
    key: 'resume',
    title: 'Resume',
    url: '/#',
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
  resumeUrl: 'https://www.rystam.com/assets/resume/resume_en.pdf',
  telegramNick: '@rystamz',
  skills: [
    'Javascript',
    'Typescript',
    'Node',
    'React',
    'Next',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Storybook',
    'Cucumber',
  ],
};
