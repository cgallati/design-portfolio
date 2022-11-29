import { Theme, Tokens } from "@emotion/react";

const eightPixelScale = (length: number): { [key: number]: string } => {
  let acc = {};
  for (let i = 1; i <= length + 1; i++) {
    acc[i] = i * 8 + "px";
  }
  return acc;
};

export const tokens: Tokens = {
  color: {
    0: "hsl(0, 0%, 100%)",
    9: "hsl(0, 0%, 10%)",
    10: "hsl(0, 0%, 0%)",
  },
  spacing: {
    auto: "auto",
    "1px": "1px",
    0: "0",
    ...eightPixelScale(10),
    mobile: "576px",
    tablet: "800px",
    desktop: "1140px",
    largeDesktop: "1140px",
  },
  typography: {
    font: {
      serif: "Monarcha, serif",
      sans: "Interstate, sans-serif",
    },
    size: {
      "01": ".75rem",
      0: "0.875rem",
      1: "1rem",
      2: "1.25rem",
      3: "1.5rem",
      4: "2rem",
      5: "3rem",
      6: "4.5rem",
      7: "6rem",
      8: "8rem",
      9: "10rem",
      10: "12rem",
    },
  },
};

export const lightTheme: Theme = {
  breakpoints: { s: 576, m: 800, l: 1200 },
  color: {
    primary: tokens.color[10],
    background: tokens.color[0],
  },
  spacing: {
    content: {
      s: tokens.spacing.mobile,
      m: tokens.spacing.tablet,
      l: tokens.spacing.desktop,
      xl: tokens.spacing.largeDesktop,
    },
    breathing: {
      s: tokens.spacing[2],
      m: tokens.spacing[3],
      l: tokens.spacing[3],
      xl: tokens.spacing[4],
    },
    frame: {
      s: tokens.spacing[2] + " " + tokens.spacing[1],
      m: tokens.spacing[3] + " " + tokens.spacing[1],
      l: tokens.spacing[3] + " " + tokens.spacing[2],
      xl: tokens.spacing[4] + " " + tokens.spacing[3],
    },
  },
  typography: {
    display: {
      family: tokens.typography.font.serif,
      weight: 400,
      size: {
        s: tokens.typography.size[2],
        m: tokens.typography.size[3],
        l: tokens.typography.size[4],
        xl: tokens.typography.size[5],
      },
    },
    subheading: {
      family: tokens.typography.font.sans,
      size: {
        s: tokens.typography.size["01"],
        m: tokens.typography.size[1],
        l: tokens.typography.size[1],
        xl: tokens.typography.size[1],
      },
    },
    body: {
      family: tokens.typography.font.sans,
      weight: 400,
      size: {
        s: tokens.typography.size["01"],
        m: tokens.typography.size[0],
        l: tokens.typography.size[1],
        xl: tokens.typography.size[2],
      },
    },
    nav: {
      family: tokens.typography.font.serif,
      size: {
        s: tokens.typography.size[0],
        m: tokens.typography.size[1],
        l: tokens.typography.size[2],
        xl: tokens.typography.size[2],
      },
    },
    interactive: {
      family: tokens.typography.font.sans,
      weight: 400,
      size: {
        s: tokens.typography.size["01"],
        m: tokens.typography.size[0],
        l: tokens.typography.size[0],
        xl: tokens.typography.size[0],
      },
    },
  },
};
