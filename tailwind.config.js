module.exports = {
  content: [
    './**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Playfair Display', 'serif'],
        'heading' : ['Fira Sans Condensed', 'serif'],
        'sans' : ['Overpass', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"),require('flowbite/plugin')],
};
