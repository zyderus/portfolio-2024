'use client';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';
import { debounce } from '@/lib/debounce';

interface SectionActiveProps {
  children: ReactNode;
}

export default function SectionActive({ children }: SectionActiveProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const homePaths = useMemo(
    () => ['/', ...i18n.locales.map((locale) => `/${locale}`)],
    []
  );
  const isHomePage = homePaths.includes(pathname);

  const handleScroll = debounce(
    useCallback(() => {
      setIsScrolled(window.scrollY > 100);
    }, []),
    150
  );

  useEffect(() => {
    if (!isHomePage) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, isHomePage]);

  return (
    <div
      className={`w-full transition-all duration-200 ease-in-out ${
        isHomePage && !isScrolled
          ? 'h-24 sm:h-36'
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
