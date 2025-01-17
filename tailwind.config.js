/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'montserrat' : ['Montserrat'],
        'lato' : ['Lato'],
        'garamond' : ['Garamond']
      },
      height: {
        '140vh':'140vh',
      },
    },
  },
  plugins: [],
}

