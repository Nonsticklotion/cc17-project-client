/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          lightest: '#CCDBDC',
          light: '#DF928E',
          medium: '#C58882',
          dark: '#1D201F',
          darkest: '#37123C',
        }
      }
    }
  },
  variants: {},
  plugins: [],
}


