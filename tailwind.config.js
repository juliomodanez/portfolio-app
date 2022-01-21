module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        yanone:["Yanone Kaffeesatz"],
      },
      spacing: {
        42:'10.5rem',
        46:'11.5rem',
        47:'11.75rem',
        50:'12.5rem',
        54:'13.5rem',
        62:'15.5rem',
        74:'18.5rem',
        76:'19rem',
        79:'19.75rem',
        82:'20.25rem',
        100:'26rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
