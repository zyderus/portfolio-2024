import Tooltip from './ui/tooltip';
import { interests } from '@/lib/constants/interests';

export default function Interests() {
  return (
    <ul className='flex flex-wrap justify-center items-center text-bg-primary list-none mb-6'>
      {interests.map(({ id, icon: Icon, size, desc }) => (
        <li key={id}>
          <Tooltip text={desc}>
            <div
              className={`w-12 h-10 flex justify-center items-center hover:text-accent transition-colors duration-200 text-${
                size === 1 ? '' : size
              }xl`}
            >
              <Icon />
            </div>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
