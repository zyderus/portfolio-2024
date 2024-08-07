import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/constants/constants';

export default function useActiveSection(options: IntersectionObserverInit) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navLinks.findIndex(
            (link) => link.id === entry.target.id
          );
          setActiveIndex(index);

          const newHash =
            entry.target.id === 'home' ? '' : `#${entry.target.id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState({}, '', `${pathname}${newHash}`);
          }
        }
      });
    },
    [pathname]
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, options);
    const sectionElements = document.querySelectorAll('h1[id]');

    sectionElements.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleObserver, options]);

  return activeIndex;
}
