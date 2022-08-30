/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   'mainBg-color': '#06202A',
    //   'mainText-color': '#d1d5db',
    // },
    extend: {
      colors: {
        'mainBg-color': '#06202A',
        'mainText-color': '#d1d5db',
      },
      screens: {
        '3xl': '2000px',
      },
      padding: {
        '56.25%': '56.25%',
      },
      left: {
        '5%': '5%',
      },
      keyframes: {
        rightArrow: {
          '0%,50%': { transform: 'translateX(-0.5rem)', opacity: '0.9' },
          '50%,75%': { transform: 'translateX(-0.5rem),', opacity: '0.7' },
          '75%,100%': { transform: 'translateX(-0.1rem),', opacity: '0.3' },
        },
        leftArrow: {
          '0%,50%': { transform: 'translateX(0.5rem)', opacity: '0.9' },
          '50%,75%': { transform: 'translateX(0.5rem),', opacity: '0.7' },
          '75%,100%': { transform: 'translateX(0.1rem),', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
