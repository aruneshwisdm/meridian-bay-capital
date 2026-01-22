// Design Tokens for Meridian Bay Capital
// Luxury-Refined Coastal Aesthetic

export const colors = {
  primary: {
    DEFAULT: "#0A2463",
    50: "#E8EDF7",
    100: "#C5D1EC",
    200: "#9FB3DF",
    300: "#7995D1",
    400: "#5377C4",
    500: "#2E5090",
    600: "#1E3A6E",
    700: "#0A2463",
    800: "#071A4A",
    900: "#041031",
  },
  secondary: {
    DEFAULT: "#2E5090",
  },
  accent: {
    DEFAULT: "#C9A961",
    light: "#E7D7B5",
    dark: "#B08E3E",
  },
  success: {
    DEFAULT: "#2D6A4F",
  },
  neutral: {
    DEFAULT: "#E8DCC4",
    light: "#F3EDE1",
    dark: "#D4C4A4",
  },
  background: {
    DEFAULT: "#F8F9FA",
    secondary: "#FFFFFF",
    tertiary: "#F0F4F8",
  },
  text: {
    DEFAULT: "#2B2D42",
    secondary: "#5C5F7A",
    tertiary: "#8D90A8",
    inverse: "#FFFFFF",
  },
} as const;

export const typography = {
  fontFamily: {
    heading: "var(--font-montserrat)",
    body: "var(--font-inter)",
    mono: "var(--font-ibm-plex-mono)",
  },
  fontSize: {
    displayXl: "4.5rem",
    displayLg: "3.5rem",
    displayMd: "2.75rem",
    displaySm: "2rem",
    headingXl: "1.75rem",
    headingLg: "1.5rem",
    headingMd: "1.25rem",
    headingSm: "1.125rem",
    bodyLg: "1.125rem",
    bodyMd: "1rem",
    bodySm: "0.875rem",
    caption: "0.75rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
  "5xl": "8rem",
} as const;

export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  easing: {
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    bouncy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

export const shadows = {
  soft: "0 2px 8px -2px rgba(10, 36, 99, 0.08), 0 4px 16px -4px rgba(10, 36, 99, 0.12)",
  medium: "0 4px 12px -4px rgba(10, 36, 99, 0.1), 0 8px 24px -8px rgba(10, 36, 99, 0.15)",
  large: "0 8px 24px -8px rgba(10, 36, 99, 0.12), 0 16px 48px -16px rgba(10, 36, 99, 0.18)",
  glowGold: "0 0 24px rgba(201, 169, 97, 0.25)",
  glowBlue: "0 0 24px rgba(10, 36, 99, 0.2)",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
