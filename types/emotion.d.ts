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
      auto: 'auto';
      '1px': '1px';
      [key: number]: string;
      mobile: string;
      tablet: string;
      desktop: string;
      largeDesktop: string;
      block: Responsive<string>;
      content: Responsive<string>;
    };
    typography: {
      font: {
        serif: string;
        sans: string;
      };
      size: { [key: number | string]: string };
      weight: {
        light: number
        regular: number
      };
    };
  }

  interface TypeFace {
    family: string;
    weight?: number | string;
    height?: Responsive<string>;
    size: Responsive<string>;
  }

  export interface Theme {
    breakpoints: Omit<Responsive<number>, "xl">;
    radius: {
        s: string;
        m: string;
        l: string;
        xl: string;
    }
    color: {
      primary: string;
      secondary: string;
      background: string;
      darkGray: string;
    };
    spacing: {
      content: Responsive<string>;
      breathing: Responsive<string>;
      padding: Responsive<string>;
      frame: Responsive<T>;
      block: Responsive<string>;
      centerStage: Responsive<string>;
    };
    typography: {
      display: TypeFace;
      subheading: TypeFace;
      cover: TypeFace;
      body: TypeFace;
      nav: TypeFace;
      interactive: TypeFace;
    };
  }
}
