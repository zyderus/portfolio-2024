import type { ThemeName } from '@/lib/types';

interface ThemeThumbnailProps {
  themeName: ThemeName;
}

export default function ThemeThumbnail({ themeName }: ThemeThumbnailProps) {
  return (
    <div
      className={`${themeName} py-4 px-5 bg-bg-primary border border-color-primary w-40 h-24 rounded-lg shadow-xl`}
    >
      <div className='block mb-2 h-1 rounded-xl bg-color-primary'></div>
      <div className='mb-2 h-1 rounded-xl bg-color-primary'></div>
      <div className='mb-2 h-1 w-4/5 rounded-xl bg-color-primary'></div>
      <div className='ml-auto mt-5 w-10 h-4 rounded-md bg-accent'></div>
    </div>
  );
}
