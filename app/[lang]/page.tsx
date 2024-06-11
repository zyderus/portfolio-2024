import { getDictionary } from '@/lib/dictionary';
import { PageProps } from './layout';
import LinkIntl from '@/components/link-intl';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

export default async function Home({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <section
      id='home'
      className='py-24 px-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
    >
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0'>
        <div className='flex flex-col space-y-8 md:w-1/2'>
          <p className='text-2xl'>
            <span className='text-5xl'>👋</span> Hello, I'm
          </p>
          <h1 className='text-7xl font-bold'>Rustam Ziyodov</h1>
          <h2 className='text-4xl font-semibold'>
            I build amazing things with code.
          </h2>
          <p className='text-xl'>
            I'm a software engineer specializing in creating functional and
            user-friendly applications. Let's build something great together!
          </p>
          <LinkIntl href='/contact' lang={lang}>
            <button className='flex justify-center items-center bg-accent hover:bg-accent-dark text-xl px-12 py-5 rounded-xl transition duration-300'>
              Message me
            </button>
          </LinkIntl>
          <div className='flex space-x-4 mt-4'>
            <a
              href='https://linkedin.com/in/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/zyderus'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className='md:w-1/2'>sfd</div>
      </div>
    </section>

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
  );
}
