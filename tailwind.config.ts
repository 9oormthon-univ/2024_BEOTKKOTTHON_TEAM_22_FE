import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#7d7d7d',
        black: '#000000',
        mint: '#3DDACB',
        white: '#ffffff',
        lightGray: '#D9D9D9',
        darkGray: '#8D8D8D',
        darkMint: '#31B0A4',
        dividing_line: '#F2F2F2',
      },
      screens: {
        xs: '360px',
        // => @media (min-width: 360px) { ... }, 360 ~ 369px 기기

        sm: '370px',
        // => @media (min-width: 370px) { ... }, 370 ~ 379px 기기

        md: '380px',
        // => @media (min-width: 380px) { ... }, 380px 이상 기기

        lg: '400px',
        // => @media (min-width: 400px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
