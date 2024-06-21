import Image from 'next/image';
import type { Repo } from '@/lib/types';
// import { movieAppMock as repo } from '@/lib/mocks';
import { FaGithub } from 'react-icons/fa6';
import { IoRocketSharp } from 'react-icons/io5';
import HoverBox from './ui/hover-box';
import { formatRepoTitle } from '@/lib/format-string';

export default function RepoFeature({ repo }: { repo: Repo }) {
  const { width: imageWidth, height: imageHeight } = {
    width: 830 * 0.75,
    height: 553 * 0.75,
  };

  return (
    <div className='feature flex flex-row items-center'>
      <div className='w-3/4 flex flex-col -mr-24 z-10 py-16'>
        <div className='flex gap-4 text-3xl'>
          {repo.html_url && (
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              <HoverBox>
                <FaGithub />
              </HoverBox>
            </a>
          )}
          {repo.homepage && (
            <a href={repo.homepage} target='_blank' rel='noopener noreferrer'>
              <HoverBox>
                <IoRocketSharp />
              </HoverBox>
            </a>
          )}
        </div>
        <h1 className='text-3xl font-bold mt-4'>
          {formatRepoTitle(repo.name)}
        </h1>
        <p className='text-sm text-accent'>{repo.created_at.split('-')[0]}</p>
        <div className='mt-4 bg-bg-secondary py-4 px-6 rounded-xl'>
          {repo.description}
        </div>
        <div className='mt-4 bg-accent rounded-sm w-max px-2'>
          {repo.language}
        </div>
      </div>

      <Image
        src={`https://raw.githubusercontent.com/${repo.full_name}/main/public/demo/${repo.name}.webp`}
        width={imageWidth}
        height={imageHeight}
        alt='repository screenshot'
        className='rounded-xl max-w-[550px]'
        priority
      />
    </div>
  );
}
