interface OverlayProps {
  isOpen: boolean;
}

export default function Overlay({ isOpen }: OverlayProps) {
  return (
    <div
      className={`fixed inset-0 h-[100vh] pointer-events-none transition ease-in-out duration-200 -z-10 ${
        isOpen
          ? 'backdrop-blur bg-black/30 pointer-events-auto md:backdrop-blur-none md:bg-black/0 md:pointer-events-none'
          : ''
      }`}
      aria-label='Blur overlay'
    ></div>
  );
}
