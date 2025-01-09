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
    4: "hsl(0, 0%, 39%)",
    5: "hsl(0, 0%, 20%)",
    6: "hsl(0, 0%, 14%)",
    7: "hsl(0, 0%, 12%)",
    9: "hsl(0, 0%, 10%)",
    10: "hsl(0, 0%, 0%)",
  },
  spacing: {
    auto: "auto",
    "1px": "1px",
    0: "0",
    ...eightPixelScale(50),
    block: {
        s: "2rem",
        m: "5rem",
        l: "12rem",
        xl: "12rem",
    },
    content: {
      s: "none",
      m: "none",
      l: "40rem",
      xl: "68rem",
    },
    mobile: "576px",
    tablet: "800px",
    desktop: "1140px",
    largeDesktop: "1140px",
  },
  typography: {
    font: {
      serif: "Monarcha, serif",
      sans: "Poppins, serif",
    },
    size: {
      "01": ".75rem",
      0: "0.875rem",
      1: "1rem",
      2: "1.25rem",
      3: "1.75rem",
      4: "2rem",
      "4.5": "2.5rem",
      5: "2.88rem",
      6: "4rem",
      7: "5rem",
      8: "6rem",
      9: "7rem",
      10: "8rem",
    },
    weight: {
      light: 300,
      regular: 400,
    },
  },
};

export const lightTheme: Theme = {
  breakpoints: { s: 576, m: 800, l: 1200 },
  radius: {
    s: tokens.spacing[2],
    m: tokens.spacing[3],
    l: tokens.spacing[4],
  },
  color: {
    primary: tokens.color[10],
    secondary: tokens.color[4],
    background: tokens.color[0],
    darkGray: tokens.color[6],
  },
  spacing: {
    content: tokens.spacing.content,
    block: tokens.spacing.block,
    breathing: {
      s: tokens.spacing[2],
      m: tokens.spacing[3],
      l: tokens.spacing[2],
      xl: tokens.spacing[3],
    },
    padding: {
      s: tokens.spacing[6],
      m: tokens.spacing[9],
      l: tokens.spacing[12],
      xl: tokens.spacing[14],
    },
    frame: {
      s: tokens.spacing[6] + " " + tokens.spacing[4]  + " " + tokens.spacing[2],
      m: tokens.spacing[3] + " " + tokens.spacing[4]  + " " + tokens.spacing[4],
      l: tokens.spacing[4] + " " + tokens.spacing[4]  + " " + tokens.spacing[6],
      xl: tokens.spacing[4] + " " + tokens.spacing[6]  + " " + tokens.spacing[8] ,
    },
    centerStage: {
      s: '15rem',
      m: '30rem',
      l: '45rem',
      xl: '53rem',
    },
  },
  typography: {
    display: {
      family: tokens.typography.font.sans,
      weight: tokens.typography.weight.regular,
      size: {
        s: tokens.typography.size[3],
        m: tokens.typography.size[3],
        l: tokens.typography.size[3],
        xl: tokens.typography.size[5],
      },
    },
    subheading: {
      family: tokens.typography.font.sans,
      weight: tokens.typography.weight.light,
      size: {
        s: tokens.typography.size["01"],
        m: tokens.typography.size[2],
        l: tokens.typography.size[3],
        xl: tokens.typography.size[4],
      },
    },
    cover: {
      family: tokens.typography.font.sans,
      weight: tokens.typography.weight.regular,
      size: {
        s: tokens.typography.size[1],
        m: tokens.typography.size[2],
        l: tokens.typography.size[3],
        xl: tokens.typography.size[6],
      },
    },
    body: {
      family: tokens.typography.font.sans,
      weight: tokens.typography.weight.light,
      size: {
        s: tokens.typography.size["01"],
        m: tokens.typography.size[0],
        l: tokens.typography.size[1],
        xl: tokens.typography.size[2],
      },
    },
    nav: {
      family: tokens.typography.font.sans,
      weight: tokens.typography.weight.regular,
      size: {
        s: tokens.typography.size['01'],
        m: tokens.typography.size[0],
        l: tokens.typography.size[1],
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
