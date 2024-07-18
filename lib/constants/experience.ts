import type { IconType } from 'react-icons';
import { SiRedux } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa6';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { GiGraduateCap } from 'react-icons/gi';
import { ImStarEmpty } from 'react-icons/im';
import { TbSchoolBell } from 'react-icons/tb';
import { SlPlane } from 'react-icons/sl';
import { LuUser } from 'react-icons/lu';

interface Item {
  id: string;
  name: string;
}

export interface BackgroundItem {
  id: number;
  date_start: string;
  date_end: string;
  location: keyof typeof locationsIntl;
  description: string;
  awards: string;
  url: string;
  employer?: string;
  position?: keyof typeof positionsIntl;
  institution?: string;
  field?: keyof typeof fieldsIntl;
  icon?: IconType;
}

export const positionsIntl = {
  dev: {
    en: 'Software Engineer',
    de: 'Software-Ingenieur',
    es: 'Ingeniero de Software',
    ru: 'Инженер-программист',
  },
  autodev: {
    en: 'Automation Engineer',
    de: 'Automatisierungsingenieur',
    es: 'Ingeniero de automatización',
    ru: 'Инженер по автоматизации',
  },
  logistics: {
    en: 'Logistics Specialist',
    de: 'Fachkraft für Logistik',
    es: 'Especialista en Logística',
    ru: 'Специалист по логистике',
  },
  recruitment: {
    en: 'Recruitment Specialist',
    de: 'Spezialist für Personalbeschaffung',
    es: 'Especialista en contratación',
    ru: 'Специалист по подбору персонала',
  },
  talent: {
    en: 'Talent Manager',
    de: 'Talent Manager',
    es: 'Gestor de talentos',
    ru: 'Менеджер по работе с талантами',
  },
} as const;

export const fieldsIntl = {
  cloud: {
    en: 'Cloud Computing',
    de: 'Cloud Computing',
    es: 'Computación en nube',
    ru: 'Облачные технологии',
  },
  business: {
    en: 'Business Administration',
    de: 'Betriebswirtschaftslehre',
    es: 'Administración de empresas',
    ru: 'Управление бизнесом',
  },
  economics: {
    en: 'Economics',
    de: 'Wirtschaft',
    es: 'Economía',
    ru: 'Экономика',
  },
  general: {
    en: 'General Education',
    de: 'Allgemeine Bildung',
    es: 'Educación general',
    ru: 'Общее образование',
  },
} as const;

export const locationsIntl = {
  boulder: {
    en: 'Boulder, CO, USA',
    de: 'Boulder, CO, Vereinigte Staaten',
    es: 'Boulder, Colorado, EE. UU.',
    ru: 'Боулдер, Колорадо, США',
  },
  lakewood: {
    en: 'Lakewood, CO, USA',
    de: 'Lakewood, CO, Vereinigte Staaten',
    es: 'Lakewood, Colorado, EE. UU.',
    ru: 'Лейквуд, Колорадо, США',
  },
  london: {
    en: 'London, UK',
    de: 'London, Vereinigtes Königreich',
    es: 'Londres, Reino Unido',
    ru: 'Лондон, Великобритания',
  },
  bukhara: {
    en: 'Bukhara, Uzbekistan',
    de: 'Buchara, Usbekistan',
    es: 'Bujará, Uzbekistán',
    ru: 'Бухара, Узбекистан',
  },
  vilnius: {
    en: 'Vilnius, Lithuania',
    de: 'Vilnius, Litauen',
    es: 'Vilnius, Lituania',
    ru: 'Вильнюс, Литва',
  },
  navoi: {
    en: 'Navoi, Uzbekistan',
    de: 'Navoi, Usbekistan',
    es: 'Navoi, Uzbekistán',
    ru: 'Навои, Узбекистан',
  },
  moscow: {
    en: 'Moscow, Russia',
    de: 'Moskau, Russland',
    es: 'Moscú, Rusia',
    ru: 'Москва, Россия',
  },
} as const;

export const work: BackgroundItem[] = [
  {
    id: 101,
    employer: 'EPAM Systems',
    position: 'dev',
    date_start: 'September 2021',
    date_end: '2024',
    location: 'vilnius',
    description:
      'Collaborated with a team of 11 developers to enhance the ERP connection for a European e-commerce platform. Rebuilt the administration panel, optimized React components and API handlers, cutting load times by 5x. Ensured comprehensive test coverage with integration, visual regression, and BDD testing. Regularly coordinated with the product owner and designer for feature reviews. Conducted candidate interviews and onboarding sessions.',
    awards: '',
    url: '',
    icon: SiRedux,
  },
  {
    id: 102,
    employer: 'Contract',
    position: 'dev',
    date_start: 'April 2018',
    date_end: 'September 2021',
    location: 'moscow',
    description:
      'Develop advanced systems and software solutions tailored to customer goals and business environments. Utilize JavaScript, TypeScript, React, Express, Node, Strapi, and more. Engage in analysis, design, and implementation of business-critical applications, including UI development, server services, and database implementation.',
    awards: '',
    url: '',
    icon: FaReact,
  },
  {
    id: 103,
    employer: 'Contract',
    position: 'autodev',
    date_start: 'June 2018',
    date_end: 'August 2019',
    location: 'bukhara',
    description:
      'Designed and implemented automation and centralized control systems, deployed networks for remote systems management, and programmed Siemens Simatic PLC and HMI interfaces on TIA Portal. Coded Arduino microcontrollers with OpenHAB as the HMI. Integrated telephony and a central control network using FreePBX (Asterisk) and PHP scripts, connecting to external services like databases, Google text-to-speech/speech-to-text, Yandex SpeechKit, and Dialogflow.',
    awards: '',
    url: '',
    icon: IoBriefcaseOutline,
  },
  {
    id: 104,
    employer: 'Contract',
    position: 'logistics',
    date_start: 'March 2013',
    date_end: 'April 2018',
    location: 'moscow',
    description: 'Coordinated and supervised incoming and outgoing shipments.',
    awards: '',
    url: '',
    icon: SlPlane,
  },
  {
    id: 105,
    employer: 'Constracom Ltd',
    position: 'recruitment',
    date_start: 'July 2007',
    date_end: 'September 2010',
    location: 'london',
    description: 'Recruitment for the construction and security sectors.',
    awards: '',
    url: '',
    icon: LuUser,
  },
  {
    id: 106,
    employer: 'Contract',
    position: 'talent',
    date_start: '2006',
    date_end: '2007',
    location: 'london',
    description: 'Managed a rock-band of four artists.',
    awards: '',
    url: '',
    icon: ImStarEmpty,
  },
];

export const education: BackgroundItem[] = [
  {
    id: 201,
    institution: 'AWS Certified Solutions Architect Bootcamp',
    field: 'cloud',
    date_start: '2024',
    date_end: '',
    location: 'vilnius',
    description: '',
    awards: '',
    url: '',
    icon: FaAws,
  },
  {
    id: 202,
    institution: 'University of Colorado',
    field: 'business',
    date_start: '1997',
    date_end: '1999',
    location: 'boulder',
    description: '',
    awards: '',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 203,
    institution: 'State Mining Institute',
    field: 'economics',
    date_start: '1996',
    date_end: '1997',
    location: 'navoi',
    description: '',
    awards: 'Umid Foundation Grant',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 204,
    institution: 'Bear Creek High School',
    field: 'general',
    date_start: '1994',
    date_end: '1995',
    location: 'lakewood',
    description: '',
    awards: '',
    url: '',
    icon: TbSchoolBell,
  },
  {
    id: 205,
    institution: 'Bukhara State Secondary School 13',
    field: 'general',
    date_start: '1985',
    date_end: '1994',
    location: 'bukhara',
    description: '',
    awards: 'ACCELS/AFS Intercultural Exchange Grant',
    url: '',
    icon: TbSchoolBell,
  },
];
