import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdNotes } from 'react-icons/md';
import LinkIntl from './ui/link-intl';
import type { SectionProps } from '@/lib/types';
import HoverBox from './ui/hover-box';
import Button from './ui/button';

export default function Hero({ lang, dictionary }: SectionProps) {
  return (
    <section id='home' className='min-h-screen xs:text-left'>
      <div className='flex flex-col space-y-8 max-w-[800px] mx-auto mt-[15vh]'>
        <p className='text-lg sm:text-2xl'>
          <span className='text-2xl sm:text-5xl'>👋</span>{' '}
          {dictionary?.hero?.title}
        </p>
        <h1
          id='home'
          className='text-3xl xs:text-5xl sm:text-7xl font-normal xs:font-bold'
        >
          {dictionary.name}
        </h1>
        <h2 className='text-2xl sm:text-4xl font-semibold'>
          {dictionary?.hero?.slogan}
        </h2>
        <p className='text-lg sm:text-xl'>{dictionary?.hero?.description}</p>
        <div className='flex justify-start items-center gap-4'>
          <LinkIntl href='/contact' lang={lang}>
            <Button variant='primary' size='large'>
              {dictionary?.button?.messageMe}
            </Button>
          </LinkIntl>
          <a
            href={`/resume/resume_${lang}.pdf`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='secondary' size='large'>
              Resume
            </Button>
          </a>
        </div>
        <div className='flex space-x-4'>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <HoverBox>
              <FaLinkedin className='text-3xl' />
            </HoverBox>
          </a>
          <a
            href='https://github.com/zyderus'
            target='_blank'
            rel='noopener noreferrer'
          >
            <HoverBox>
              <FaGithub className='text-3xl' />
            </HoverBox>
          </a>
        </div>
      </div>
    </section>
  );
}
