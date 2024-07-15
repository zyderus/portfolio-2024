import type { SectionProps } from '@/lib/types';
import SectionHeader from './ui/section-header';
import AboutTabs from './about-tabs';
import TechCard from './tech-card';
import Timeline from './ui/timeline';
import { work, education } from '@/lib/constants/experience';
import { skills } from '@/lib/constants/skills';

export interface Tab {
  id: number;
  label: string;
  component: JSX.Element;
}

const tabs: Tab[] = [
  {
    id: 0,
    label: 'Skills',
    component: (
      <div className='max-w-[38rem] mx-auto text-center'>
        <p className='my-4 text-sm sm:text-base'>
          Today, I use the following set of tools to create beautiful,
          convenient and conversion-oriented applications:
        </p>
        <ul className='mx-auto flex flex-wrap justify-center gap-6 my-12'>
          {skills.map((skill) => (
            <li key={skill.label}>
              <TechCard {...skill} />
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  { id: 1, label: 'Work', component: <Timeline list={work} /> },
  { id: 2, label: 'Education', component: <Timeline list={education} /> },
];

export default function About({ lang, dictionary }: SectionProps) {
  return (
    <section id='about' className='min-h-screen'>
      <SectionHeader id='about' title='My Story' />

      <p className='text-sm sm:text-base'>
        Hi! I am Rustam and I enjoy creating attractive, human-friendly apps
        that brighten up the day. My interest in application development started
        back in 1998. Then, as a student, I grokked HTML and CGI scripts to
        built a personal web page with a guestbook. It was hideous, but somehow
        functional. However, in the following few years, my career path had not
        steered towards the code. I went from business consulting to artist
        management, construction recruiting, logistics. Fast-forward to 2018,
        and out of nowhere, I have an encounter with Arduino with its idea of
        C++. My head made a few blips and clicks and the rest is history.
      </p>

      <AboutTabs tabs={tabs} />
    </section>
  );
}
