export default function SectionHeader({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <>
      <h1 id={id} className='text-center text-xl sm:text-3xl font-bold'>
        {title}
      </h1>
      <div className='w-[80%] mx-auto my-4 h-px bg-gradient-to-r from-transparent via-bg-secondary/50 to-transparent'></div>
    </>
  );
}
