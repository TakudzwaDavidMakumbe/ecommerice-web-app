/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: "0px",
      },
      colors:{
        primary:"#E5B528",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
}

