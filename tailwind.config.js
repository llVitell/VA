/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'verde': '#79A057',
        'nav-bar': '#F7F5F3',
        'rojizo': '#612E33',
      }
    },
  },
  plugins: [],
}
