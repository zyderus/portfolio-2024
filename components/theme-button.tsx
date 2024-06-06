import { FaXmark } from 'react-icons/fa6';
import { ImSpinner9 } from 'react-icons/im';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dropdownOpen: boolean;
  icon: ReactNode;
  vibration: boolean;
  mounted: boolean;
  className?: string;
}

export default function ThemeButton({
  dropdownOpen,
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
      aria-expanded={dropdownOpen}
    >
      <div
        className={`relative w-6 h-6 flex justify-center items-center z-10 ${
          vibration ? 'vibrate' : ''
        }`}
      >
        {!mounted ? (
          <ImSpinner9 className='spinner' />
        ) : dropdownOpen ? (
          <FaXmark />
        ) : (
          icon
        )}
      </div>
    </button>
  );
}
