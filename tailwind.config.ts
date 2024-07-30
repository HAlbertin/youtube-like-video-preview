import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'header-height': 'var(--header-height)',
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'hover-color': 'var(--hover-color)',
        'text-secondary': 'var(--text-secondary)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
};

export default config;
