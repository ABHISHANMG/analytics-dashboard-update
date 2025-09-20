// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  darkMode: 'class', // enable class-based dark mode
  theme: {
    extend: {
      backgroundColor: {
        "light-background": "#1C1C1C1A", // if you meant semi-transparent, keep 8 chars
        "dark-background": "#1c1c1c"
      }
    },
  },
  plugins: [],
}
