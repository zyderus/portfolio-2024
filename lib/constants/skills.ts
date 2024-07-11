export interface Skill {
  label: string;
  img_src: string;
  url: string;
  size: number;
}

// TODO: replace locale params in urls which support i18n

export const skills: Skill[] = [
  {
    label: 'Javascript',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    size: 1,
  },
  {
    label: 'Typescript',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
    url: 'https://www.typescriptlang.org/',
    size: 1,
  },
  {
    label: 'Node',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
    url: 'https://nodejs.org/en',
    size: 1,
  },
  {
    label: 'React',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    url: 'https://react.dev/',
    size: 3,
  },
  {
    label: 'Next',
    img_src:
      'https://raw.githubusercontent.com/github/explore/2ebcebd7b163b2ab12cb5a40bf29264799c81c03/topics/nextjs/nextjs.png',
    url: 'https://nextjs.org/',
    size: 1,
  },
  {
    label: 'PostgreSQL',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png',
    url: 'https://www.postgresql.org/',
    size: 1,
  },
  {
    label: 'MongoDB',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
    url: 'https://www.mongodb.com/',
    size: 1,
  },
  {
    label: 'GraphQL',
    img_src:
      'https://raw.githubusercontent.com/github/explore/e65ef46ef3e7bc457c93622f6a89fe8d3fd131d5/topics/graphql/graphql.png',
    url: 'https://graphql.org/',
    size: 1,
  },
  {
    label: 'Storybook',
    img_src:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png',
    url: 'https://storybook.js.org/',
    size: 1,
  },
  {
    label: 'Cucumber',
    img_src:
      'https://raw.githubusercontent.com/github/explore/fd411ff82401f5efce7009773091c2e22a042b24/topics/cucumber/cucumber.png',
    url: 'https://cucumber.io/',
    size: 1,
  },
];
