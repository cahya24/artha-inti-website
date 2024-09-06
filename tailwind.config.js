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
        primary: '#CDE8E5',
        secondary: '#EEF7FF',
        darkPrimary: '#4D869C',
        darkSecondary: '#7AB2B2'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace 'Inter' with MCPUR's font
      },
    },
  },
  plugins: [],
};
