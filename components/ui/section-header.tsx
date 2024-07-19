interface SectionHeaderProps {
  id?: string;
  title: string;
}

export default function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <div className='py-2 xs:py-4'>
      <h1
        id={id}
        className='text-center text-xl xs:text-3xl font-bold break-all xs:break-normal'
      >
        {title}
      </h1>
      <div className='w-[80%] mx-auto my-4 h-px bg-gradient-to-r from-transparent via-bg-secondary/50 to-transparent'></div>
    </div>
  );
}
