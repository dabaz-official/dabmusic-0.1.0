import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE9E6',
          100: '#FFBBB0',
          200: '#FF9A8A',
          300: '#FE6C55',
          400: '#FE5034',
          500: '#FE2401',
          600: '#E72101',
          700: '#B41A01',
          800: '#8C1401',
          900: '#6B0F00',
        },
      }
    },
  },
  plugins: [],
};
export default config;
