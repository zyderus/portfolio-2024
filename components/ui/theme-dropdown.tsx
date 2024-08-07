import ThemeThumbnail from '@/components/ui/theme-thumbnail';
import { customThemes } from '@/lib/constants/constants';
import type { CustomTheme } from '@/lib/types';

interface DropdownMenuProps {
  isDropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  className?: string;
  handleDropdownTheme: (theme: CustomTheme) => void;
}

export default function DropdownMenu({
  isDropdownOpen,
  dropdownRef,
  className = '',
  handleDropdownTheme,
}: DropdownMenuProps) {
  if (!isDropdownOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`scrollbar-thin absolute max-h-[80vh] overflow-hidden right-0 top-12 w-48 bg-bg-secondary rounded-lg py-1 z-20 shadow-dropdown hover:overflow-y-auto overscroll-contain ${className}`}
      role='menu'
    >
      {customThemes.map((theme) => (
        <div
          key={theme}
          className='block px-4 py-2 cursor-pointer hover:bg-bg-primary'
          onClick={() => handleDropdownTheme(theme)}
          role='menuitem'
        >
          <ThemeThumbnail themeName={theme} />
        </div>
      ))}
    </div>
  );
}
