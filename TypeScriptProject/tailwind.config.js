module.exports = {
  content: ['./src/client/**/*.html', './src/client/**/*.ts'],
  theme: {
    extend: {
      colors: {
        'card': '#1e1e26',
        'dark': '#14151a'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
