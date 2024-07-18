import type { IconType } from 'react-icons';
import { SiRedux } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa6';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { GiGraduateCap } from 'react-icons/gi';
import { ImStarEmpty } from 'react-icons/im';
import { TbSchoolBell } from 'react-icons/tb';
import { SlPlane } from 'react-icons/sl';
import { LuUser } from 'react-icons/lu';

export interface ExperienceItem {
  id: number;
  organization: string;
  discipline: string;
  date_start: string;
  date_end: string;
  location: string;
  description: string;
  awards: string;
  url: string;
  icon?: IconType;
}

export const work: ExperienceItem[] = [
  {
    id: 101,
    organization: 'EPAM Systems',
    discipline: 'Software Engineer',
    date_start: 'September 2021',
    date_end: '2024',
    location: 'Vilnius, Lithuania',
    description:
      'Collaborated with a team of 11 developers to enhance the ERP connection for a European e-commerce platform. Rebuilt the administration panel, optimized React components and API handlers, cutting load times by 5x. Ensured comprehensive test coverage with integration, visual regression, and BDD testing. Regularly coordinated with the product owner and designer for feature reviews. Conducted candidate interviews and onboarding sessions.',
    awards: '',
    url: '',
    icon: SiRedux,
  },
  {
    id: 102,
    organization: 'Contract',
    discipline: 'Software Engineer',
    date_start: 'April 2018',
    date_end: 'September 2021',
    location: 'Moscow, Russia',
    description:
      'Develop advanced systems and software solutions tailored to customer goals and business environments. Utilize JavaScript, TypeScript, React, Express, Node, Strapi, and more. Engage in analysis, design, and implementation of business-critical applications, including UI development, server services, and database implementation.',
    awards: '',
    url: '',
    icon: FaReact,
  },
  {
    id: 103,
    organization: 'Contract',
    discipline: 'Automation Engineer',
    date_start: 'June 2018',
    date_end: 'August 2019',
    location: 'Bukhara, Uzbekistan',
    description:
      'Designed and implemented automation and centralized control systems, deployed networks for remote systems management, and programmed Siemens Simatic PLC and HMI interfaces on TIA Portal. Coded Arduino microcontrollers with OpenHAB as the HMI. Integrated telephony and a central control network using FreePBX (Asterisk) and PHP scripts, connecting to external services like databases, Google text-to-speech/speech-to-text, Yandex SpeechKit, and Dialogflow.',
    awards: '',
    url: '',
    icon: IoBriefcaseOutline,
  },
  {
    id: 104,
    organization: 'Contract',
    discipline: 'Logistics Specialist',
    date_start: 'March 2013',
    date_end: 'April 2018',
    location: 'Moscow, Russia',
    description: 'Coordinated and supervised incoming and outgoing shipments.',
    awards: '',
    url: '',
    icon: SlPlane,
  },
  {
    id: 105,
    organization: 'Constracom Ltd',
    discipline: 'Recruitment Specialist',
    date_start: 'July 2007',
    date_end: 'September 2010',
    location: 'London, UK',
    description: 'Recruitment for the construction and security sectors.',
    awards: '',
    url: '',
    icon: LuUser,
  },
  {
    id: 106,
    organization: 'Contract',
    discipline: 'Talent Manager',
    date_start: '2006',
    date_end: '2007',
    location: 'London, UK',
    description: 'Managed a rock-band of four artists.',
    awards: '',
    url: '',
    icon: ImStarEmpty,
  },
];

export const education: ExperienceItem[] = [
  {
    id: 201,
    organization: 'AWS Certified Solutions Architect Bootcamp',
    discipline: 'Cloud Computing',
    date_start: '2024',
    date_end: '',
    location: 'Vilnius, Lithuania',
    description: '',
    awards: '',
    url: '',
    icon: FaAws,
  },
  {
    id: 202,
    organization: 'University of Colorado',
    discipline: 'Business Administration',
    date_start: '1997',
    date_end: '1999',
    location: 'Boulder, CO, USA',
    description: '',
    awards: '',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 203,
    organization: 'State Mining Institute',
    discipline: 'Economics',
    date_start: '1996',
    date_end: '1997',
    location: 'Navoi, Uzbekistan',
    description: '',
    awards: 'Umid Foundation Grant',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 204,
    organization: 'Bear Creek High School',
    discipline: 'General Education',
    date_start: '1994',
    date_end: '1995',
    location: 'Lakewood, CO, USA',
    description: '',
    awards: '',
    url: '',
    icon: TbSchoolBell,
  },
  {
    id: 205,
    organization: 'Bukhara State Secondary School 13',
    discipline: 'General Education',
    date_start: '1985',
    date_end: '1994',
    location: 'Bukhara, Uzbekistan',
    description: '',
    awards: 'ACCELS/AFS Intercultural Exchange Grant',
    url: '',
    icon: TbSchoolBell,
  },
];
