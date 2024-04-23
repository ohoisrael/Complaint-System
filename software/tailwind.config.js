/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "yellow": "#FFCE14",
        "darkblue": "#002451",
        "ash": "#e4e4e7",
        "ashblue": "#D0E1FD",
      }
    },
  },
  plugins: [],
}