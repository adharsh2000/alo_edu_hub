/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app-color':'#3493CE',
      },
      boxShadow:{
        'app-shadow':'0px 4px 25px 0px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [],
}

