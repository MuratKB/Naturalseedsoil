/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f5f0',
          100: '#e4ebe0',
          200: '#c9d7c2',
          300: '#adc3a3',
          400: '#92ae85',
          500: '#779966',
          600: '#5d7a4e', // Main primary color
          700: '#4a6741',
          800: '#3c5334',
          900: '#2f422a',
          950: '#1a2517',
        },
        secondary: {
          50: '#fcf8f0',
          100: '#f9f1e1',
          200: '#f3e3c3',
          300: '#edd5a5',
          400: '#e7c787',
          500: '#e1b969', // Main secondary color
          600: '#b4944f',
          700: '#8a7035',
          800: '#5f4c1b',
          900: '#352801',
          950: '#1a1401',
        },
        accent: {
          50: '#f2f8fc',
          100: '#e6f1f9',
          200: '#cde3f2',
          300: '#b4d5ec',
          400: '#9bc7e6',
          500: '#82b9df', // Main accent color
          600: '#6894b2',
          700: '#4e6f86',
          800: '#344a59',
          900: '#1a252d',
          950: '#0d1216',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      height: {
        'hero': 'calc(100vh - 80px)',
        'min-hero': 'min-content',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
          },
        },
      },
    },
  },
  plugins: [],
};