import { myData } from '@/lib/constants/constants';
import type { SectionProps } from '@/lib/types';
import SectionHeader from './ui/section-header';

export default function About({ lang, dictionary }: SectionProps) {
  return (
    <section id='about' className='min-h-screen py-24 px-16'>
      <SectionHeader id='about' title='My Story' />
      <p>
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
      <p>
        Today, I use the following set of tools to create beautiful, convenient
        and conversion-oriented applications:
      </p>
      <ul>
        {myData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
