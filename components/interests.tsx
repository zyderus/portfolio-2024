import type { JsonType } from '@/lib/types';
import Tooltip from './ui/tooltip';
import { interests } from '@/lib/constants/interests';

interface InterestsProps {
  dictionary: JsonType;
}

export default function Interests({ dictionary }: InterestsProps) {
  return (
    <ul className='flex flex-wrap justify-center items-center text-bg-primary list-none'>
      {interests.map(({ id, icon: Icon, size, desc }) => (
        <li key={id}>
          <Tooltip text={dictionary?.[id] || desc}>
            <div
              className={`w-12 h-10 flex justify-center items-center cursor-pointer hover:text-accent transition-colors duration-200 text-${
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
