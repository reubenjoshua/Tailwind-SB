/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gurey':'#2C2C32',
        'snow' : '#CDC9C9',
        'puti':'#ffffff',
    'maitim':'#2b2b2b',
    'lasalle':'#006341',
    'semento':'hsl(240,1.51%,50.98%)'
      },
      backgroundImage:{
        'star':"url('./img/star.png')"
      }
    },
  },
  plugins: [],
}

