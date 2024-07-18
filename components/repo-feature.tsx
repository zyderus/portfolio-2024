import Image from 'next/image';
import type { Repo } from '@/lib/types';
// import { movieAppMock as repo } from '@/lib/mocks';
import { FaGithub } from 'react-icons/fa6';
import { IoRocketSharp } from 'react-icons/io5';
import HoverBox from './ui/hover-box';
import { formatRepoTitle } from '@/lib/format-string';
import { techList } from '@/lib/constants/features-tech-list';

export default function RepoFeature({
  id,
  name,
  full_name,
  html_url,
  homepage,
  created_at,
  description,
  language,
  dictionary,
}: Repo) {
  return (
    <>
      <div className='w-[90%] md:w-1/2 -mt-[17%] md:my-auto mx-auto px-1 xs:px-4 md:p-0 rounded-xl bg-bg-secondary md:bg-[initial] flex flex-col-reverse md:flex-col border border-bg-secondary md:border-none py-4 md:py-0 text-sm sm:text-base'>
        <div className='flex flex-wrap justify-center md:justify-start group-even:md:justify-end gap-4 text-3xl mt-4 md:mt-0 z-10'>
          <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <HoverBox>
              <FaGithub />
            </HoverBox>
          </a>
          {homepage && (
            <a href={homepage} target='_blank' rel='noopener noreferrer'>
              <HoverBox>
                <IoRocketSharp />
              </HoverBox>
            </a>
          )}
        </div>
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-accent md:mt-10 group-even:md:text-right'>
            {formatRepoTitle(name)}
          </h1>
          <p className='text-xs group-even:md:text-right'>
            {created_at.split('-')[0]}
          </p>
          <div className='mt-4 md:mt-10 bg-bg-primary md:bg-bg-secondary py-4 px-2 xs:px-4 md:px-6 rounded-xl shadow-xl'>
            {dictionary?.[id] ? dictionary[id] : description}
          </div>

          <ul className='mt-3 flex flex-wrap gap-1 justify-center md:justify-start group-even:md:justify-end text-sm'>
            {techList?.[id]?.tech.length > 0 ? (
              techList?.[id]?.tech.map((tech, i) => (
                <li
                  key={i}
                  className='text-gray-300 bg-black px-[6px] py-[3px]'
                >
                  {tech}
                </li>
              ))
            ) : (
              <li className='text-gray-300 bg-black px-[6px] py-[3px]'>
                {language}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className='md:w-1/2 -z-10'>
        <div className='md:-ml-16 group-even:md:ml-0 group-even:md:-mr-16 flex items-start md:items-center h-[initial] sm:h-80 overflow-hidden sm:rounded-xl'>
          <Image
            src={`https://raw.githubusercontent.com/${full_name}/main/public/demo/${name}.webp`}
            width={800}
            height={600}
            alt='repository screenshot'
            className='my-0 md:my-auto w-full sm:rounded-xl'
            priority
          />
        </div>
      </div>
    </>
  );
}
