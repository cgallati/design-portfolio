import { lightTheme } from "./theme";

// Media query breakpoints as defined in theme
export const breakpoints = {
  s: lightTheme.breakpoints.s,
  m: lightTheme.breakpoints.m,
  l: lightTheme.breakpoints.l,
  xl: 1440, // This matches the index from mq array, adding an xl breakpoint
};

// Function to check if current window width matches a media query
export const matchesMediaQuery = (breakpoint: keyof typeof breakpoints): boolean => {
  if (typeof window === 'undefined') {
    return false; // Default to false during SSR
  }
  return window.innerWidth >= breakpoints[breakpoint];
};

// Hook to get the current matching breakpoint
export const getCurrentBreakpoint = (): keyof typeof breakpoints | null => {
  if (typeof window === 'undefined') {
    return null; // Return null during SSR
  }
  
  const width = window.innerWidth;
  
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.l) return 'l';
  if (width >= breakpoints.m) return 'm';
  if (width >= breakpoints.s) return 's';
  
  return null; // Below smallest breakpoint
};

// Helper for conditional values based on media queries
export const responsiveValue = <T>(values: { [K in keyof typeof breakpoints]?: T }, defaultValue?: T): T => {
  if (typeof window === 'undefined') {
    // During SSR, return the smallest breakpoint value or default
    return values.s ?? defaultValue ?? values.m ?? values.l ?? values.xl;
  }
  
  const width = window.innerWidth;
  
  if (width >= breakpoints.xl && values.xl !== undefined) return values.xl;
  if (width >= breakpoints.l && values.l !== undefined) return values.l;
  if (width >= breakpoints.m && values.m !== undefined) return values.m;
  if (width >= breakpoints.s && values.s !== undefined) return values.s;
  
  return defaultValue;
};

// Indexed media query accessor (similar to mq[1] in styled components)
export const getMediaQueryIndex = (index: number): boolean => {
  if (typeof window === 'undefined') {
    return false; // Default to false during SSR
  }
  
  const breakpointValues = Object.values(breakpoints);
  if (index >= 0 && index < breakpointValues.length) {
    return window.innerWidth >= breakpointValues[index];
  }
  
  return false;
};
