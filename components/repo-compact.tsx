import type { Repo as RepoProps } from '@/lib/types';
import { FaGithub } from 'react-icons/fa6';
import { IoRocketSharp } from 'react-icons/io5';
import HoverBox from './ui/hover-box';
import { formatRepoTitle } from '@/lib/format-string';

interface RepoCompactProps {
  repo: RepoProps;
  isFeature: boolean;
}

export default function RepoCompact({ repo, isFeature }: RepoCompactProps) {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-x-2 w-full'>
      <div className='flex-1'>
        <span className='font-bold'>{formatRepoTitle(repo.name)}</span>{' '}
        {isFeature && (
          <span className='bg-bg-secondary rounded-lg px-2 py-1 text-accent text-xs font-bold uppercase'>
            feature
          </span>
        )}
        <span> | </span>
        {repo.created_at.split('-')[0]}
        {repo.language && ' | '}
        <span className='text-accent'>{repo.language}</span>
        {repo.description && ' | '}
        {repo.description}
      </div>
      <div className='flex gap-4 text-xl xs:text-3xl'>
        {repo.homepage && (
          <a href={repo.homepage} target='_blank' rel='noopener noreferrer'>
            <HoverBox>
              <IoRocketSharp />
            </HoverBox>
          </a>
        )}
        {repo.html_url && (
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            <HoverBox>
              <FaGithub />
            </HoverBox>
          </a>
        )}
      </div>
    </div>
  );
}
