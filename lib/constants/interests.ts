import {
  GiCampingTent,
  GiDna2,
  GiWhiteBook,
  GiSkier,
  GiPalmTree,
  GiTinker,
} from 'react-icons/gi';
import { IconType } from 'react-icons';

export interface Interest {
  id: string;
  icon: IconType;
  size: number;
  desc: string;
}

export const interests: Interest[] = [
  {
    id: 'reading',
    icon: GiWhiteBook,
    size: 1,
    desc: "Reading: Some say reading is like procrastinating. I'd argue, but I'll do it later.",
  },
  {
    id: 'traveling',
    icon: GiPalmTree,
    size: 1,
    desc: 'Traveling: Some say I measure distances in frequent flyer miles.',
  },
  {
    id: 'camping',
    icon: GiCampingTent,
    size: 2,
    desc: "Camping: I'm a pro at building fires — and burning dinner.",
  },
  {
    id: 'skiing',
    icon: GiSkier,
    size: 2,
    desc: 'Skiing: The fastest way I can turn money into bruises.',
  },
  {
    id: 'science',
    icon: GiDna2,
    size: 1,
    desc: "Science: I now understand why microwaving a grape isn't just a culinary experiment.",
  },
  {
    id: 'tinkering',
    icon: GiTinker,
    size: 1,
    desc: 'Tinkering: My profound quest to demonstrate that duct tape reigns supreme as the ultimate problem-solving marvel in the cosmos.',
  },
];
