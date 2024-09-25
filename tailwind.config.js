// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0_1.2px_1.2px_rgba(0,0,0,1.2)',
      },
      colors: {
        primary: '#096192',
        secondary: 'white',
        darkPrimary: '#096192',
        darkSecondary: '#096192'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace 'Inter' with MCPUR's font
      },
    },
  },
  plugins: [],
};
