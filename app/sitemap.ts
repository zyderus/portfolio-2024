import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.rystam.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://www.rystam.com/es',
          de: 'https://www.rystam.com/de',
          ru: 'https://www.rystam.com/ru',
        },
      },
    },
    {
      url: 'https://www.rystam.com/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://www.rystam.com/es/contact',
          de: 'https://www.rystam.com/de/contact',
          ru: 'https://www.rystam.com/ru/contact',
        },
      },
    },
    {
      url: 'https://acme.com/projects',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://www.rystam.com/es/projects',
          de: 'https://www.rystam.com/de/projects',
          ru: 'https://www.rystam.com/ru/projects',
        },
      },
    },
  ];
}
