module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    require:('tw-elements/dist/plugin'),
  },

}
