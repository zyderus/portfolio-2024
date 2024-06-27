export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className='flex justify-between items-center mb-12'>
      <div className='flex-grow h-px bg-gradient-to-r from-transparent to-bg-secondary'></div>
      <h1 className='p-4 text-center text-3xl font-bold'>{title}</h1>
      <div className='flex-grow h-px bg-gradient-to-l from-transparent to-bg-secondary'></div>
    </div>
  );
}
