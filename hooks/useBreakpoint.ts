import { useEffect, useState } from 'react';
import { lightTheme } from '../lib/theme/theme';

type Breakpoint = 's' | 'm' | 'l';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('s');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < lightTheme.breakpoints.s) {
        setBreakpoint('s');
        setIsMobile(true);
      } else if (width < lightTheme.breakpoints.m) {
        setBreakpoint('s');
        setIsMobile(true);
      } else if (width < lightTheme.breakpoints.l) {
        setBreakpoint('m');
        setIsMobile(false);
      } else {
        setBreakpoint('l');
        setIsMobile(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { breakpoint, isMobile };
};
