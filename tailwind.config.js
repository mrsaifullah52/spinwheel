module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/imgs/spinwheelbanner.jpg')",
      },
      backgroundColor:{
        'primary':"#ff6600",
        'secondary':"#fa8333fd"
      }
    },
  },
    variants: {
    extend: {},
  },
  plugins: [],
}
