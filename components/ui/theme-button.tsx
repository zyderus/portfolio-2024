import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ImSpinner9 } from 'react-icons/im';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDropdownOpen: boolean;
  icon: ReactNode;
  vibration: boolean;
  mounted: boolean;
  className?: string;
}

export default function ThemeButton({
  isDropdownOpen,
  icon,
  vibration,
  mounted,
  className = '',
  ...rest
}: ThemeButtonProps) {
  return (
    <button
      className={`${className}`}
      {...rest}
      aria-haspopup='true'
      aria-expanded={isDropdownOpen}
    >
      <div
        className={`relative w-6 h-6 flex justify-center items-center z-10 ${
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
