import type { IconType } from 'react-icons';
import { SiRedux } from 'react-icons/si';
import {
  FaReact,
  FaAws,
  FaCode,
  FaMicrochip,
  FaRadiation,
} from 'react-icons/fa6';
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
  date_start?: string;
  date_end?: string;
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
    date_end: '',
    location: 'Vilnius, Lithuania',
    description:
      'Collaborated with a team of 11 developers to enhance the ERP connection for a European e-commerce platform. Rebuilt the administration panel, optimized React components and API handlers, cutting load times by 5x. Ensured comprehensive test coverage with integration, visual regression, and BDD testing. Regularly coordinated with the product owner and designer for feature reviews. Conducted candidate interviews and onboarding sessions.',
    awards: '',
    url: '',
    icon: SiRedux,
  },
  {
    id: 102,
    organization: 'GK Algo',
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
  // {
  //   id: 106,
  //   organization: 'Contract',
  //   discipline: 'Talent Manager',
  //   date_start: '2006',
  //   date_end: '2007',
  //   location: 'London, UK',
  //   description: 'Managed a rock-band of four artists.',
  //   awards: '',
  //   url: '',
  //   icon: ImStarEmpty,
  // },
];

export const education: ExperienceItem[] = [
  {
    id: 209,
    organization: 'Machine Learning Specialization',
    discipline: 'Machine Learning',
    date_start: '2025',
    date_end: '',
    location: '',
    description:
      'In-depth training in supervised and unsupervised learning, including neural networks, decision trees, clustering, and model deployment. It provides learners with the skills to build and deploy effective machine learning solutions. An online program created in collaboration between DeepLearning.AI and Stanford Online.',
    awards: 'Machine Learning Specialization Certificate',
    url: '_',
    icon: FaRadiation,
  },
  {
    id: 206,
    organization: 'Cloud-Native Developer Program',
    discipline: 'Cloud Computing',
    date_start: '2025',
    date_end: '',
    location: 'Seattle, Washington',
    description:
      'Equips developers with the practical skills required to design and build robust, production-grade cloud applications on AWS. The program covers core services such as Lambda, DynamoDB, and SQS, while providing in-depth training in CI/CD, infrastructure as code, and event-driven architecture—laying a strong foundation for becoming a proficient, cloud-native engineer.',
    awards: 'AWS Certified Developer',
    url: 'https://www.credly.com/badges/4e4f3476-be87-42ef-bfd7-70fb0cefb4c7',
    icon: FaAws,
  },
  {
    id: 201,
    organization: 'Designing Scalable AWS Architectures Program',
    discipline: 'Cloud Computing',
    date_start: '2024',
    date_end: '',
    location: 'Vilnius, Lithuania',
    description:
      'This program prepares IT professionals to design, deploy, and manage secure, scalable, and cost-effective solutions on AWS, while also readying them for real-world architecture roles and certification.',
    awards: 'AWS Certified Solutions Architect',
    url: 'https://www.credly.com/badges/abf10898-2495-4a3c-bd0c-d53e9a0f15c8',
    icon: FaAws,
  },
  {
    id: 207,
    organization: 'Web Developer Bootcamp',
    discipline: 'Web Development',
    date_start: '2020',
    date_end: '',
    location: 'Moscow, Russia',
    description: '',
    awards: '',
    url: '',
    icon: FaCode,
  },
  {
    id: 208,
    organization: 'SCADA systems with Siemens TIA Portal',
    discipline: 'SCADA',
    date_start: '2018',
    date_end: '',
    location: 'Moscow, Russia',
    description: '',
    awards: '',
    url: '',
    icon: FaMicrochip,
  },
  {
    id: 202,
    organization: 'University of Colorado',
    discipline: 'Business Administration',
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
    // date_start: '1996',
    // date_end: '1997',
    location: 'Navoi, Uzbekistan',
    description: '',
    awards: 'Umid Foundation Grant',
    url: '',
    icon: GiGraduateCap,
  },
  {
    id: 210,
    organization: 'Anoka High School',
    discipline: 'General Education',
    // date_start: '1994',
    // date_end: '1995',
    location: 'Anoka, MN, USA',
    description: '',
    awards: '',
    url: '',
    icon: TbSchoolBell,
  },
  {
    id: 204,
    organization: 'Bear Creek High School',
    discipline: 'General Education',
    // date_start: '1994',
    // date_end: '1995',
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
    // date_start: '1985',
    // date_end: '1994',
    location: 'Bukhara, Uzbekistan',
    description: '',
    awards: 'ACCELS/AFS Intercultural Exchange Grant',
    url: '',
    icon: TbSchoolBell,
  },
];
