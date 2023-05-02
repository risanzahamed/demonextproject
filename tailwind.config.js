const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: {
        100: "#cfd4d8",
        200: "#9fa9b1",
        300: "#6e7d8a",
        400: "#3e5263",
        500: "#0e273c",
        600: "#0b1f30",
        700: "#081724",
        800: "#061018",
        900: "#03080c"
      },
      secondary: {
        100: "#edd3d8",
        200: "#dba7b1",
        300: "#c87c89",
        400: "#b65062",
        500: "#a4243b",
        600: "#831d2f",
        700: "#621623",
        800: "#420e18",
        900: "#21070c"
      },
      accent: {
        100: "#feedcf",
        200: "#fedaa0",
        300: "#fdc870",
        400: "#fdb541",
        500: "#fca311",
        600: "#ca820e",
        700: "#97620a",
        800: "#654107",
        900: "#322103"
      },
      neural: {
        100: "#e7fdfe",
        200: "#cffbfd",
        300: "#b7f9fd",
        400: "#9ff7fc",
        500: "#87f5fb",
        600: "#6cc4c9",
        700: "#519397",
        800: "#366264",
        900: "#1b3132"
      },
      shades: {
        100: "#fdfdfd",
        200: "#fafafb",
        300: "#f8f8f8",
        400: "#f5f5f6",
        500: "#f3f3f4",
        600: "#c2c2c3",
        700: "#929292",
        800: "#616162",
        900: "#313131"
      }
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-source)', ...fontFamily.sans],
      }
      ,
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': "1440px",
        '3xl': "1536px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

/*
-----------------------------
Colors
-----------------------------
primary - main for text 900
secondary - for important buttons and white is for button text
shades - 100 for white text - 900 for dark text and 500 is highlighted white
accent -


-----------------------------
Gaps
-----------------------------
3xl - gaps - 150
2xl, xl - gaps - 100
lg - gaps - 80
md - gaps - 30
sm - none
*/