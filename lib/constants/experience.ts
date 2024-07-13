import type { IconType } from 'react-icons';
import { SiRedux } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa6';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { GiGraduateCap } from 'react-icons/gi';
import { PiUserCheckLight } from 'react-icons/pi';
import { ImStarEmpty } from 'react-icons/im';
import { TbSchoolBell } from 'react-icons/tb';
import { SlPlane } from 'react-icons/sl';

export interface BackgroundItem {
  id: number;
  date_start: string;
  date_end: string;
  location: string;
  description: string;
  achievements: string;
  url: string;
  employer?: string;
  position?: string;
  institution?: string;
  field?: string;
  icon?: IconType;
}

export const work: BackgroundItem[] = [
  {
    id: 1,
    employer: 'EPAM Systems',
    position: 'Software Engineer',
    date_start: 'September 2021',
    date_end: '2024',
    location: 'Vilnius, Lithuania',
    description:
      'Collaborated with a team of 11 developers to enhance the ERP connection for a European e-commerce platform. Rebuilt the administration panel, optimized React components and API handlers, cutting load times by 5x. Ensured comprehensive test coverage with integration, visual regression, and BDD testing. Regularly coordinated with the product owner and designer for feature reviews. Conducted candidate interviews and onboarding sessions.',
    achievements: '',
    url: '',
    icon: SiRedux,
  },
  {
    id: 2,
    employer: 'Contract',
    position: 'Software Engineer',
    date_start: 'April 2018',
    date_end: 'September 2021',
    location: 'Moscow, Russia',
    description:
      'Develop advanced systems and software solutions tailored to customer goals and business environments. Utilize JavaScript, TypeScript, React, Express, Node, Strapi, and more. Engage in analysis, design, and implementation of business-critical applications, including UI development, server services, and database implementation.',
    achievements: '',
    url: '',
    icon: FaReact,
  },
  {
    id: 3,
    employer: 'Contract',
    position: 'Automation Engineer',
    date_start: 'June 2018',
    date_end: 'August 2019',
    location: 'Bukhara, Uzbekistan',
    description:
      'Designed and implemented automation and centralized control systems, deployed networks for remote systems management, and programmed Siemens Simatic PLC and HMI interfaces on TIA Portal. Coded Arduino microcontrollers with OpenHAB as the HMI. Integrated telephony and a central control network using FreePBX (Asterisk) and PHP scripts, connecting to external services like databases, Google text-to-speech/speech-to-text, Yandex SpeechKit, and Dialogflow.',
    achievements: '',
    url: '',
    icon: IoBriefcaseOutline,
  },
  {
    id: 4,
    employer: 'Contract',
    position: 'Logistics Specialist',
    date_start: 'March 2013',
    date_end: 'April 2018',
    location: 'Moscow, Russia',
    description:
      "Planned and monitored client's inbound and outbound shipments.",
    achievements: '',
    url: '',
    icon: SlPlane,
  },
  {
    id: 5,
    employer: 'Constracom Ltd',
    position: 'Recruitment Specialist',
    date_start: 'July 2007',
    date_end: 'September 2010',
    location: 'London, UK',
    description: 'Recruiting in construction and security sectors.',
    achievements: '',
    url: '',
    icon: PiUserCheckLight,
  },
  {
    id: 6,
    employer: 'Contract',
    position: 'Talent Manager',
    date_start: '2006',
    date_end: '2007',
    location: 'London, UK',
    description: 'Managed a rock-band of four artists.',
    achievements: '',
    url: '',
    icon: ImStarEmpty,
  },
];

export const education: BackgroundItem[] = [
  {
    id: 1,
    institution: 'AWS Certified Solutions Architect Bootcamp',
    field: 'Cloud Computing',
    date_start: '2024',
    date_end: '',
    location: 'Vilnius, Lithuania',
    description:
      'asdf as dfa sdfa sf asdfasdfas dfas dfaas dfasdfasdfasd fas dfa sdf',
    achievements: '',
    url: '',
    icon: FaAws,
  },
  {
    id: 2,
    institution: 'University of Colorado',
    field: 'Business Administration',
    date_start: '1997',
    date_end: '1999',
    location: 'Boulder, CO, USA',
    description:
      'asd asdf asdf a sdfa sdfa sdf asfas dfas dfas df asd fas dfasa sdfas dfasdf  asfd',
    achievements: '',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 3,
    institution: 'State Mining Institute',
    field: 'Economics',
    date_start: '1996',
    date_end: '1997',
    location: 'Navoi, Uzbekistan',
    description: 'asdf asd fa sdfas dfa sfasd fasd f asdfasdfa sdfasdf asdf',
    achievements: 'Umid Foundation Grant',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 4,
    institution: 'Bukhara State Secondary School 13',
    field: 'General',
    date_start: '1985',
    date_end: '1995',
    location: 'Bukhara, Uzbekistan',
    description: '',
    achievements: 'ACCELS/AFS Intercultural Exchange',
    url: '',
    icon: TbSchoolBell,
  },
];
