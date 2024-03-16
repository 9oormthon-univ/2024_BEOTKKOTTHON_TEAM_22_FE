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
        mint: '#3fe0d1',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;
