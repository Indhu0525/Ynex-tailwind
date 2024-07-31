/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
        'bg-color': 'rgb(17 28 67)',
        'textcolor':'rgb(163 174 209)',
        'bgcolorr':'rgb(55 65 81)',
        'secondary':'rgb(132 90 223)',
        'bg':'yellow',
      },
      width: {
        '60': '15rem', //custom header width
      },
      height:{
        '37':'3.7rem',//custom header height 
        'home':'1.15rem',
      },
      padding:{
        'p':'0.75rem 1.65rem',//main padding
      },
      fontSize: {
        'xs-custom': '10px',
        'fsbox':'1.15rem',
      },
      fontfamily:{
'fontfamily':'Montserrat, sans-serif',
      },
     letterSpacing:{
      'letterspacing': '0.065rem',
     },
     bgcolor:{
      'bg-box':'rgb(255 255 255)',
     }
    },
  },
  variants: {},
  plugins: [ require('tailwind-scrollbar'),],
}

