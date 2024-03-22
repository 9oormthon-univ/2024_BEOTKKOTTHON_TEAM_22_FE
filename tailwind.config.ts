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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
