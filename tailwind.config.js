module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        yanone:["Yanone Kaffeesatz"],
      },
      spacing: {
        74:'18.5rem',
        76:'19rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
