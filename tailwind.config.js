/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "mobile":"300px",
        "mobile-2":"400px",
        "mobile-3":"500px",
      }
    },
  },
  plugins: [],
}

