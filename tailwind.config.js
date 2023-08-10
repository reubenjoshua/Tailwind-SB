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
    'semento':'hsl(240,1.51%,50.98%)',
    'medyowhite':'#F2F0EB',
    'mapink':'#eb81a5',
    'sbgreen':'#006241',
    'grimace':'#8f8bf4',
    'yilow':'#f1ff67',
    'purple':'#4C5FD5',
    'bulack': '#000000',
    'silver':'#DADBF1',
    'huwhite':'#fff',
      },
      backgroundImage:{
        'star':"url('./img/star.png')",
        'bg':"url('./img/bg.webp')",
      }
    },
  },
  plugins: [],
}

