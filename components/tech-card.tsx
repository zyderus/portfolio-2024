import { Skill } from '@/lib/constants/skills';
import Image from 'next/image';

export default function TechCard({ skill }: { skill: Skill }) {
  const { label, img_src, url } = skill;

  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='group'>
      <div className='relative flex flex-col justify-end items-center text-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-bg-secondary overflow-hidden'>
        <Image
          src={img_src}
          width={80}
          height={80}
          alt={`Picture of ${label} logo`}
          className={`
              absolute h-full w-full
              filter grayscale opacity-20
              transition ease-in-out 
              -translate-x-1 -translate-y-1 
              -rotate-12
              scale-110
              group-hover:grayscale-0 group-hover:opacity-100 
              group-hover:-translate-x-0 group-hover:-translate-y-0 
              group-hover:-rotate-0
              group-hover:scale-100
            `}
          style={{ transformOrigin: 'bottom left' }}
        />
        <div className='flex justify-center items-center w-full h-1/2 bg-bg-primary/75 text-sm sm:text-base z-10 transition group-hover:translate-y-12'>
          {label}
        </div>
      </div>
    </a>
  );
}
