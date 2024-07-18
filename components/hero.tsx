import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import LinkIntl from './ui/link-intl';
import type { SectionProps } from '@/lib/types';
import HoverBox from './ui/hover-box';

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
          {dictionary.name.split('|')[1]}
        </h1>
        <h2 className='text-2xl sm:text-4xl font-semibold'>
          {dictionary?.hero?.slogan}
        </h2>
        <p className='text-lg sm:text-xl'>{dictionary?.hero?.description}</p>
        <LinkIntl href='/contact' lang={lang}>
          <button className='w-full xs:w-auto bg-accent hover:bg-bg-secondary sm:text-xl px-2 xs:px-6 sm:px-12 py-2 xs:py-3 sm:py-5 rounded-xl sm:rounded-xl transition duration-100'>
            {dictionary?.button?.messageMe}
          </button>
        </LinkIntl>
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
