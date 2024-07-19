type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Button({
  children,
  onClick,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  const baseStyles =
    'focus:outline-none transition duration-100 break-all xs:break-normal text-color-primary';
  const variantStyles = {
    primary: 'bg-accent border-2 border-accent ',
    secondary: 'border-2 border-accent',
  };
  const sizeStyles = {
    small: 'text-base',
    medium: 'text-md',
    large:
      'xs:text-lg sm:text-xl px-2 sm:px-4 md:px-6 py-2 xs:py-3 sm:py-4 rounded-lg sm:rounded-xl',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${
        variantStyles[variant]
      } disabled:opacity-50 disabled:bg-bg-secondary disabled:border-bg-secondary ${
        !disabled
          ? 'text-sm hover:bg-bg-secondary hover:border-bg-secondary'
          : ''
      } ${className}`}
    >
      {children}
    </button>
  );
}
