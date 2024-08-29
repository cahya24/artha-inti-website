// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Replace with MCPUR's primary color
        secondary: '#6c757d', // Replace with MCPUR's secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace 'Inter' with MCPUR's font
      },
    },
  },
  plugins: [],
};
