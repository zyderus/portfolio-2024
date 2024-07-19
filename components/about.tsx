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

export default function About({ dictionary }: SectionProps) {
  const tabs: Tab[] = [
    {
      id: 0,
      label: dictionary?.navigation?.skills,
      component: (
        <div className='max-w-[38rem] mx-auto text-center'>
          <p className='my-4 text-sm sm:text-base break-all xs:break-normal'>
            {dictionary?.about?.skills}
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
    {
      id: 1,
      label: dictionary?.navigation?.work,
      component: (
        <Timeline list={work} dictionary={dictionary?.about?.experience} />
      ),
    },
    {
      id: 2,
      label: dictionary?.navigation?.education,
      component: (
        <Timeline list={education} dictionary={dictionary?.about?.experience} />
      ),
    },
  ];

  const paragraphs: string[] = dictionary?.about?.description.split('|');

  return (
    <section id='about' className='min-h-screen'>
      <SectionHeader id='about' title={dictionary?.about?.title} />
      <div className='space-y-4 break-all xs:break-normal'>
        {paragraphs.map((p, i) => (
          <p key={i} className='text-sm sm:text-base'>
            {p}
          </p>
        ))}
      </div>

      <AboutTabs tabs={tabs} />
    </section>
  );
}
