import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

export default function useLineStyle(
  activeLinkIndex: number,
  linkRefs: (HTMLLIElement | null)[]
) {
  const [lineStyle, setLineStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const activeLink = linkRefs[activeLinkIndex];
    if (activeLink) {
      setLineStyle({
        left: activeLink.offsetLeft + 4,
        width: activeLink.offsetWidth - 8,
      });
    }
  }, [activeLinkIndex, linkRefs]);

  return lineStyle;
}
