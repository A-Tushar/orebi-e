/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dms: ['DM Sans',],

      },
      colors: {
        'primary-color': '#D8D8D8',
        't-color': '#767676',
        'head': '#F5F5F3',
        'drop': '#262626',

      },
      maxWidth: {
        'container': '1604px',
      },
    },
  },
  plugins: [],
}

