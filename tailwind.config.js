/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // IU crimson as brand primary
        primary: {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c7c7',
          300: '#f29a9a',
          400: '#e55d5d',
          500: '#990000',
          600: '#7a0000',
          700: '#660000',
          800: '#4d0000',
          900: '#330000',
        },
        crimson: {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c7c7',
          300: '#f29a9a',
          400: '#e55d5d',
          500: '#990000',
          600: '#7a0000',
          700: '#660000',
          800: '#4d0000',
          900: '#330000',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f7f1e6',
          200: '#efe6d4',
          300: '#e2d4b8',
        },
        ink: {
          50: '#f4f3f1',
          100: '#e5e2dc',
          200: '#c9c4b8',
          300: '#9e9788',
          400: '#6f685a',
          500: '#4a453c',
          600: '#2f2c26',
          700: '#1f1d19',
          800: '#151411',
          900: '#0c0b0a',
        },
        paper: {
          DEFAULT: '#f7f1e6',
          dark: '#151411',
        },
      },
      fontFamily: {
        sans: ['var(--font-plex)', 'IBM Plex Sans', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Source Serif 4', 'serif'],
        mono: ['var(--font-plex-mono)', 'IBM Plex Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
