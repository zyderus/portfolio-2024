'use client';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SectionActive({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <div
      className={`w-full transition-all duration-200 ease-in-out ${
        isHomePage
          ? isScrolled
            ? 'bg-bg-primary/85 h-14 sm:h-16 backdrop-blur-[5px]'
            : 'h-24 sm:h-36'
          : 'bg-bg-primary/85 h-14 sm:h-16 backdrop-blur-[5px]'
      }`}
    >
      {children}
      {isHomePage && !isScrolled && (
        <div
          className={`absolute inset-x-0 inset-y-5 sm:inset-y-8 bg-[url('/paisley/paisley-4.webp')] bg-center grayscale -z-10 opacity-[4%]`}
        ></div>
      )}
    </div>
  );
}
