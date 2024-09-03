/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Merriweather: ['Merriweather', 'serif'],
    },
    colors:{
      richblack:{
        5:"#D9D9D9",
        100:"#2B354F",
        200:"#424242",
      },
      brown:{
        100:"#FFFFF6",
        200:"#DCD2BB",
        300:"#F2EBE0",
        400:"#DCD2BB",
        500:"#F2E7CE",


      },
      green:{
        100:"#2C4236",
        200:"#677557",
        300:"#164F49",
        400:"#15322D",
      },
      white:"#FFFFFF",
      red:"#FF6B6E",
      deepred:"#EB5757",
      oragne:"#f97316",
      
    },
    extend: {
      
    },
  },
  plugins: [],
}
