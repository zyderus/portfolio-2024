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
  const baseStyles = 'focus:outline-none transition duration-100';
  const variantStyles = {
    primary:
      'bg-accent border-2 border-accent hover:border-bg-secondary hover:bg-bg-secondary text-color-primary',
    secondary:
      'border-2 border-accent hover:bg-bg-secondary hover:border-bg-secondary text-color-primary',
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
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
