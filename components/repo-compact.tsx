import type { Repo as RepoProps } from '@/lib/types';
import { FaGithub } from 'react-icons/fa6';
import { IoRocketSharp } from 'react-icons/io5';
import HoverBox from './ui/hover-box';
import { formatRepoTitle } from '@/lib/format-string';

export default function RepoCompact({ repo }: RepoProps) {
  return (
    <div className='flex items-center gap-x-2 w-full'>
      <div className='flex-1'>
        <span className='text-lg font-bold'>{formatRepoTitle(repo.name)}</span>
        <span> | </span>
        <span>{repo.created_at.split('-')[0]}</span>
        <span> {repo.language ? '|' : ''} </span>
        <span className='text-accent'>{repo.language}</span>
        <span> {repo.description ? '|' : ''} </span>
        <span>{repo.description}</span>
      </div>
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
    </div>
  );
}
