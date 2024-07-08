export const LOCAL_STORAGE_THEME_KEY = 'THEME';
export const LOCALE_COOKIE = 'NEXT_LOCALE';
export const LONG_CLICK_DELAY = 700; // milliseconds
export const RATE_LIMIT_INTERVAL = 120; // seconds

export const navLinks = [
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
    id: 'experience',
    label: 'Experience',
    url: '/#experience',
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
  // {
  //   id: 'resume',
  //   label: 'Resume',
  //   url: '/#',
  // },
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
