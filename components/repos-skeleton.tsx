export default function ReposSkeleton({ amount }: { amount: number }) {
  return (
    <ul className='striped mx-auto'>
      {Array.from({ length: amount }).map((repo, i) => {
        return (
          <li
            key={i}
            className='flex items-center gap-x-8 space-between px-6 py-3 border border-bg-secondary/10 animate-pulse'
          >
            <div className='h-6 flex-1 bg-color-primary/40 rounded-xl'></div>
            <div className='flex gap-x-4 text-3xl p-1'>
              <div className='h-11 w-11 bg-color-primary/40 rounded-xl'></div>
              <div className='h-11 w-11 bg-color-primary/40 rounded-xl'></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
