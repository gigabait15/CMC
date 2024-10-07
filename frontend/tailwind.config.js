/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './App.jsx',
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/**.{html,js,ts,jsx,tsx}',
    './src/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins:{
    preflight : false
  },
}