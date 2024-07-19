interface Project {
  name: string;
  tech: string[];
}

interface TechList {
  [key: string]: Project;
}

export const techList: TechList = {
  '811107600': {
    name: 'portfolio-2024',
    tech: ['TypeScript', 'Next', 'TailwindCSS', 'i18n'],
  },
  '402301890': {
    name: 'parts-store',
    tech: ['TypeScript', 'Express', 'Mongoose', 'MongoDB', 'Stripe'],
  },
  '384571830': {
    name: 'portfolio',
    tech: ['TypeScript', 'Next', 'SCSS'],
  },
  '293103208': {
    name: 'movie-app',
    tech: ['JavaScript', 'Express', 'MongoDB', 'Bootstrap', 'i18n'],
  },
  '397773172': {
    name: 'meco-chat',
    tech: ['TypeScript', 'Next', 'NextAuth', 'Express', 'Websockets'],
  },
};
