export default function SectionHeader({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className='flex justify-between items-center mb-12'>
      {/* <div className='flex-grow h-px bg-gradient-to-r from-transparent to-bg-secondary'></div> */}
      <h1 id={id} className='pr-4 text-center text-3xl font-bold'>
        {title}
      </h1>
      <div className='flex-grow h-px transform bg-gradient-to-l from-transparent to-bg-secondary'></div>
    </div>
  );
}
