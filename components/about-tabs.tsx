'use client';
import { useState, useEffect, useRef, type CSSProperties } from 'react';

function TabOne() {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Tab One Content</h2>
      <p>This is the content for Tab One.</p>
      {/* Add more content and components as needed */}
    </div>
  );
}

function TabTwo() {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Tab Two Content</h2>
      <p>This is the content for Tab Two.</p>
      {/* Add more content and components as needed */}
    </div>
  );
}

function TabThree() {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Tab Three Content</h2>
      <p>This is the content for Tab Three.</p>
      {/* Add more content and components as needed */}
    </div>
  );
}

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

  const tabs = [
    { id: 0, label: 'Skills', component: <TabOne /> },
    { id: 1, label: 'Work', component: <TabTwo /> },
    { id: 2, label: 'Education', component: <TabThree /> },
  ];

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
      {/* <div className='flex max-w-max my-4 mx-auto p-[2px] rounded-full bg-bg-secondary'>
        <div className='px-3 py-1 bg-bg-primary rounded-full'>Skills</div>
        <div className='px-3 py-1 rounded-full'>Work</div>
        <div className='px-3 py-1 rounded-full'>Education</div>
      </div> */}

      <div className='relative flex flex-col sm:flex-row max-w-max my-4 mx-auto rounded-xl sm:rounded-full bg-bg-secondary'>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el: any) => (tabsRef.current[index] = el)}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 z-10`}
          >
            {tab.label}
          </button>
        ))}
        {mounted && (
          <span
            className='hidden sm:block absolute h-full bg-bg-primary border-2 border-bg-secondary rounded-full transition-all duration-300'
            style={underlineStyleX}
          />
        )}
        {mounted && (
          <span
            className='block sm:hidden absolute w-full bg-bg-primary border-2 border-bg-secondary rounded-xl transition-all duration-300'
            style={underlineStyleY}
          />
        )}
      </div>
      <div className='mt-4 p-4 border border-gray-200 rounded-lg'>
        {tabs[activeTab].component}
      </div>
    </div>
  );
}
