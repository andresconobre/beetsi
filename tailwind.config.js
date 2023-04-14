/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow': {
          'beetsi': '#F928'
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

