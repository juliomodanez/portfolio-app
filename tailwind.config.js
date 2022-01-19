module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
