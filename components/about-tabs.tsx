'use client';
import { skills } from '@/lib/constants/skills';
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import TechCard from './tech-card';
import Timeline from './ui/timeline';
import { work, education } from '@/lib/constants/experience';

interface Tab {
  id: number;
  label: string;
  component: JSX.Element;
}

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [underlineStyleX, setUnderlineStyleX] = useState<CSSProperties>({});
  const [underlineStyleY, setUnderlineStyleY] = useState<CSSProperties>({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  const tabs: Tab[] = [
    {
      id: 0,
      label: 'Skills',
      component: (
        <div className='max-w-[38rem] mx-auto text-center'>
          <p className='my-4 text-sm sm:text-base'>
            Today, I use the following set of tools to create beautiful,
            convenient and conversion-oriented applications:
          </p>
          <ul className='mx-auto flex flex-wrap justify-center gap-6 my-12'>
            {skills.map((skill) => (
              <li key={skill.label}>
                <TechCard skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    { id: 1, label: 'Work', component: <Timeline list={work} /> },
    { id: 2, label: 'Education', component: <Timeline list={education} /> },
  ];

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  useEffect(() => {
    const activeTabElement = tabsRef.current[activeTab];
    if (activeTabElement) {
      setUnderlineStyleX({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
      setUnderlineStyleY({
        top: activeTabElement.offsetTop,
        height: activeTabElement.offsetHeight,
      });
    }

    setMounted(true);
  }, [activeTab]);

  return (
    <div>
      <div className='relative flex flex-col sm:flex-row max-w-max mx-auto rounded-xl bg-bg-secondary text-sm sm:text-base my-12'>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el: any) => (tabsRef.current[index] = el)}
            onClick={() => handleClick(tab.id)}
            className={`px-4 py-2 z-10`}
          >
            {tab.label}
          </button>
        ))}
        {mounted && (
          <span
            className='hidden sm:block absolute h-full bg-accent border-[3px] border-bg-secondary rounded-xl transition-all duration-300'
            style={underlineStyleX}
          />
        )}
        {mounted && (
          <span
            className='block sm:hidden absolute w-full bg-accent border-[3px] border-bg-secondary rounded-xl transition-all duration-300'
            style={underlineStyleY}
          />
        )}
      </div>
      <div className='mx-auto'>{tabs[activeTab].component}</div>
    </div>
  );
}
