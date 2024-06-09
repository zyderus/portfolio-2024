interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps) {
  return (
    <div
      onClick={toggleMenu}
      className='p-1 hover:bg-bg-secondary cursor-pointer z-50 group'
    >
      <button className='relative w-9 h-9 flex items-center justify-center focus:outline-none'>
        <span
          className={`block absolute h-0.5 bg-color-primary transform transition duration-100 ease-in-out ${
            isOpen ? 'rotate-45 w-[85%]' : '-translate-y-1.5 w-full'
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 bg-color-primary transform transition-all duration-100 ease-in-out right-0 ${
            isOpen
              ? '-rotate-45 w-[85%] right-auto'
              : 'translate-y-1.5 w-2/3 group-hover:w-full'
          }`}
        ></span>
      </button>
    </div>
  );
}
