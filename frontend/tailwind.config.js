module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue': '#003580',
        'light-gray': 'rgb(243 244 246)',
        'light-blue': 'rgb(30 58 138)',
        'dark-blue': '#020b3a'
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    
    extend: {},
  },
  plugins: [],
};