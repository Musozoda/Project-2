/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],darkMode: 'class',
  theme: {
    screens: {

      'xl':  {"max":'1130px'} ,
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '920px'} ,
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '600px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '430px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

