import ThemeThumbnail from './theme-thumbnail';
import { customThemes } from '../hooks/useTheme';

interface DropdownMenuProps {
  dropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  className?: string;
  setNewCustomTheme: (theme: string) => void;
}

export default function DropdownMenu({
  dropdownOpen,
  dropdownRef,
  className = '',
  setNewCustomTheme,
}: DropdownMenuProps) {
  const handleClick = (theme: string) => {
    setNewCustomTheme(theme);
  };

  if (!dropdownOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`absolute max-h-[80vh] overflow-hidden right-0 mt-2 w-48 bg-bg-primary border border-color-primary/10 rounded-lg py-1 z-20 shadow-dropdown hover:overflow-y-auto scrollbar-thin ${className}`}
      role='menu'
    >
      {customThemes.map((theme) => (
        <div
          key={theme}
          className='block px-4 py-2 cursor-pointer hover:bg-accent/30'
          onClick={() => handleClick(theme)}
          role='menuitem'
        >
          <ThemeThumbnail themeName={theme} />
        </div>
      ))}
    </div>
  );
}
