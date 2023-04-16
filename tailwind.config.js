/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow': {
          'beetsi': '#FFD700'
        }
      }
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    }
  },
  plugins: [],
}

