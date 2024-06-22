/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Includes all files in the pages directory with the specified extensions
    './components/**/*.{js,ts,jsx,tsx}', // Includes all files in the components directory with the specified extensions
    './hooks/**/*.{js,ts,jsx,tsx}', // Includes all files in the hooks directory with the specified extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
