import { Skill } from '@/lib/constants/skills';
import Image from 'next/image';

export default function TechCard({ skill }: { skill: Skill }) {
  const { label, img_src, url } = skill;

  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='group'>
      <div className='p-6'>
        <div className='relative w-24 h-16 flex justify-center items-center bg-bg-secondary rounded-xl translate-y-3'>
          <Image
            src={img_src}
            width={75}
            height={75}
            alt='Picture of the author'
            className={`absolute -top-5 rounded-xl filter grayscale group-hover:grayscale-0 transition duration-200 ease-in-out group-hover:-translate-y-5`}
          />
        </div>

        <div className='flex rounded-b-xl justify-center items-center w-full pt-4 pb-1 bg-bg-secondary/70 text-sm transition-colors duration-200 group-hover:bg-accent'>
          <h1>{label}</h1>
        </div>
      </div>
    </a>
  );
}
