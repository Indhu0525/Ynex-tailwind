/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
        'bg-color': 'rgb(17 28 67)',
        'textcolor':'rgb(163 174 209)',
      },
      width: {
        '60': '15rem', //custom header width
      },
      height:{
        '37':'3.7rem',//custom header height 
      },
      padding:{
        'p':'0.75rem 1.65rem',//main padding
      },
      fontSize: {
        'xs-custom': '10px',
      },
      fontfamily:{
'fontfamily':'Montserrat, sans-serif'
      },
     letterSpacing:{
      'letterspacing': '0.065rem'
     },
    },
  },
  variants: {},
  plugins: [],
}

