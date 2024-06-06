export default function ThemeThumbnail({ themeName }: { themeName: string }) {
  return (
    <div
      data-theme={themeName}
      className='py-4 px-5 bg-secondary border border-primary w-40 h-24 rounded-lg shadow-xl'
    >
      <div className='block mb-2 h-1 rounded-xl bg-primary'></div>
      <div className='mb-2 h-1 rounded-xl bg-primary'></div>
      <div className='mb-2 h-1 w-4/5 rounded-xl bg-primary'></div>
      <div className='ml-auto mt-5 w-10 h-4 rounded-md bg-accent'></div>
    </div>
  );
}
