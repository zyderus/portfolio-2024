import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import LinkIntl from './link-intl';
import type { SectionProps } from '@/lib/types';
import HoverBox from './ui/hover-box';

export default function Hero({ lang, dictionary }: SectionProps) {
  return (
    <section id='home' className='py-24 px-16 h-screen'>
      <div className='mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0'>
        <div className='flex flex-col space-y-8'>
          <p className='text-2xl'>
            <span className='text-5xl'>👋</span> Hello, I&apos;m
          </p>
          <h1 className='text-7xl font-bold'>Rustam Ziyodov</h1>
          <h2 className='text-4xl font-semibold'>
            and I build things with code.
          </h2>
          <p className='text-xl'>
            I&apos;m a software engineer specializing in creating functional and
            user-friendly applications.
          </p>
          <LinkIntl href='/contact' lang={lang}>
            <button className='relative flex justify-center items-center bg-accent hover:bg-bg-secondary text-xl px-12 py-5 rounded-xl transition duration-100'>
              Message me
            </button>
          </LinkIntl>
          <div className='flex space-x-4 mt-4'>
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
      </div>
    </section>
  );
}

// <section id='home' className='py-24 px-16'>
//   <div className='flex flex-col space-y-8'>
//     <p className='text-xl'>
//       <span className='text-5xl'>👋</span> Hi, my name is
//     </p>
//     <h1 className='text-6xl font-bold'>Rustam Ziyodov,</h1>
//     <h1 className='text-4xl font-bold'>and I build things with code.</h1>
//     <div className=''>
//       I am a software engineer who specializes in the development of
//       functional and human-friendly applications.
//     </div>
//     <LinkIntl href='/contact' lang={lang}>
//       <button className='flex justify-center items-center bg-accent text-xl px-12 py-5 rounded-xl'>
//         Message me
//       </button>
//     </LinkIntl>
//   </div>
// </section>
