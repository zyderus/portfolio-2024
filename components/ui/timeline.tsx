import type { ExperienceItem } from '@/lib/constants/experience';
import type { JsonType } from '@/lib/types';
import TimelineItem from './timeline-item';

type TimelineProps = {
  list: ExperienceItem[];
  dictionary: JsonType;
};

export default function Timeline({ list, dictionary }: TimelineProps) {
  return (
    <ul className='flex flex-col gap-14 sm:gap-[2px]'>
      {list.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
          dictionary={{
            dict: dictionary[item.id],
            awards: dictionary.awards,
          }}
        />
      ))}
    </ul>
  );
}
