import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdNotes } from 'react-icons/md';
import LinkIntl from './ui/link-intl';
import type { SectionProps } from '@/lib/types';
import HoverBox from './ui/hover-box';
import Button from './ui/button';
import Link from 'next/link';

export default function Hero({ lang, dictionary }: SectionProps) {
  return (
    <section id='home' className='min-h-screen xs:text-left'>
      <div className='flex flex-col space-y-8 max-w-[800px] mx-auto mt-[15vh]'>
        <p className='text-lg sm:text-2xl text-center sm:text-left'>
          <span className='text-2xl sm:text-5xl'>👋</span>{' '}
          {dictionary?.hero?.title}
        </p>
        <h1
          id='home'
          className='text-3xl xs:text-5xl sm:text-7xl font-normal xs:font-bold text-center sm:text-left'
        >
          {dictionary.name}
        </h1>
        <h2 className='text-2xl sm:text-4xl font-semibold text-center sm:text-left'>
          {dictionary?.hero?.slogan}
        </h2>
        <p className='text-lg sm:text-xl break-all xs:break-normal'>
          {dictionary?.hero?.description}
        </p>
        <div className='w-full sm:w-2/3 flex flex-wrap flex-col sm:flex-row gap-4'>
          <LinkIntl href='/contact' lang={lang} className='flex-1 sm:w-1/2'>
            <Button
              variant='primary'
              size='large'
              className='w-full xs:min-w-[200px]'
            >
              {dictionary?.button?.messageMe}
            </Button>
          </LinkIntl>
          <Link
            href={`/resume/resume_${lang}.pdf`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1 sm:w-1/2'
          >
            <Button
              variant='secondary'
              size='large'
              className='w-full xs:min-w-[200px]'
            >
              {dictionary.button.resume}
            </Button>
          </Link>
        </div>
        <div className='flex space-x-4 justify-center sm:justify-start'>
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
