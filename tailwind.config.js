const { colors } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite US Trad"', 'sans-serif'],
        colors: {
          primary_BGD: '#181818',
          primary_TXD: '#E0E0E0',
          secondary_BGD: '#1F1F1F',
          secondary_TXD: '#B0B0B0',
          BTN_BGD: '#A0A0A0',
          BTN_TXD: '#f8fafc',
          FOTR_BGD: '#1A1A1A',
        },
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.4s ease-out forwards',
        'slide-out-left': 'slide-out-left 0.3s ease-in forwards',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


