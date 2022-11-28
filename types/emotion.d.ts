import "@emotion/react";

interface Responsive<T> {
  s: T;
  m: T;
  l: T;
  xl: T;
}

declare module "@emotion/react" {
  export interface Tokens {
    //monochromatic themes only. Otherwise, this needs depth
    color: {
      [key: number]: string;
    };
    spacing: {
      [key: string | number]: string;
      mobile: string;
      tablet: string;
      desktop: string;
      largeDesktop: string;
    };
    typography: {
      font: {
        serif: string;
        sans: string;
      };
      size: { [key: number]: string };
    };
  }

  interface TypeFace {
    family: string;
    weight?: Responsive<number>;
    height?: Responsive<string>;
    size: Responsive<string>;
  }

  export interface Theme {
    breakpoints: Omit<Responsive<number>, "xl">;
    color: {
      primary: string;
      background: string;
    };
    spacing: {
      content: Responsive<string>;
      breathing: Responsive<T>;
      frame: Responsive<T>;
    };
    typography: {
      display: TypeFace;
      body: TypeFace;
      nav: TypeFace;
    };
  }
}
