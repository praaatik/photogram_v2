module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "charcoal": "#2F4858",
        "nyaza": "#DAF7DC",
        "granny_smith_apple": "#9EE493",
        "dark_sky_blue": "#86BBD8",
        "lapis_lazuli": "#336699"
      }
    },

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

