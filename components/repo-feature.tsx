import Image from 'next/image';
import type { Repo } from '@/lib/types';
// import { movieAppMock as repo } from '@/lib/mocks';
import { FaGithub } from 'react-icons/fa6';
import { IoRocketSharp } from 'react-icons/io5';
import HoverBox from './ui/hover-box';
import { formatRepoTitle } from '@/lib/format-string';

export default function RepoFeature({
  name,
  full_name,
  html_url,
  homepage,
  created_at,
  description,
  language,
}: Repo) {
  return (
    <>
      <div className='w-[95%] sm:w-1/2 -mt-32 sm:my-auto mx-auto z-10 p-2 sm:p-0 rounded-lg bg-bg-primary/90 sm:bg-[initial] flex flex-col-reverse sm:flex-col border border-bg-secondary sm:border-none py-4 sm:py-0'>
        <div className='flex flex-wrap justify-center sm:justify-start group-even:sm:justify-end gap-4 text-3xl mt-4 sm:mt-0'>
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
          <h1 className='text-xl sm:text-3xl font-bold text-accent sm:mt-10 group-even:sm:text-right'>
            {formatRepoTitle(name)}
          </h1>
          <p className='text-xs group-even:sm:text-right'>
            {created_at.split('-')[0]}
          </p>
          <div className='mt-4 sm:mt-10 bg-bg-secondary py-4 px-[5%] sm:px-6 rounded-lg shadow-xl'>
            {description}
          </div>

          <ul className='mt-3 flex flex-wrap gap-1 justify-center sm:justify-start group-even:sm:justify-end text-sm'>
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className='text-gray-300 bg-black px-[6px] py-[3px]'>
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='sm:w-1/2'>
        <div className='sm:-ml-16 group-even:sm:ml-0 group-even:sm:-mr-16 flex items-center h-80 rounded-xl overflow-hidden'>
          <Image
            src={`https://raw.githubusercontent.com/${full_name}/main/public/demo/${name}.webp`}
            width={800}
            height={800}
            alt='repository screenshot'
            className='my-auto w-full rounded-xl'
            priority
          />
        </div>
      </div>
    </>
  );
}
