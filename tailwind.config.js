/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        sm: '1px',
      },
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

