import type { SectionProps } from '@/lib/types';
import SectionHeader from './ui/section-header';
import AboutTabs from './about-tabs';

export default function About({ lang, dictionary }: SectionProps) {
  return (
    <section id='about' className='min-h-screen py-20'>
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

      <AboutTabs />
    </section>
  );
}
