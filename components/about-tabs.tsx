'use client';
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Tab } from './about';

interface AboutTabsProps {
  tabs: Tab[];
}

export default function AboutTabs({ tabs }: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [underlineStyleX, setUnderlineStyleX] = useState<CSSProperties>({});
  const [underlineStyleY, setUnderlineStyleY] = useState<CSSProperties>({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

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
    <>
      <div className='relative flex flex-col sm:flex-row max-w-max mx-auto rounded-xl bg-bg-secondary text-sm sm:text-base my-12'>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el: any) => (tabsRef.current[index] = el)}
            onClick={() => handleClick(tab.id)}
            className='px-3 sm:px-4 py-2 z-10'
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
    </>
  );
}
