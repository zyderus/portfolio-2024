import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ImSpinner9 } from 'react-icons/im';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDropdownOpen: boolean;
  icon: ReactNode;
  vibration: boolean;
  mounted: boolean;
}

export default function ThemeButton({
  isDropdownOpen,
  icon,
  vibration,
  mounted,
  // className = '',
  ...rest
}: ThemeButtonProps) {
  return (
    <button
      className={`relative h-full w-full rounded-full hover:bg-bg-secondary transition-colors duration-300 ${
        isDropdownOpen ? 'bg-bg-secondary' : ''
      }`}
      {...rest}
      aria-haspopup='true'
      aria-expanded={isDropdownOpen}
    >
      <div
        className={`flex justify-center items-center z-10 ${
          vibration ? 'vibrate' : ''
        }`}
      >
        {!mounted ? (
          // TODO: Replace spinner
          <ImSpinner9 className='spinner' />
        ) : isDropdownOpen ? (
          <FaXmark />
        ) : (
          icon
        )}
      </div>
    </button>
  );
}
