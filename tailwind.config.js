/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: ({
        "mobileImg": "url('/assets/tinderimgphone.webp')",
        "largeImage": "url('/assets/tinderimg.webp')",
      })
    },
  },
  plugins: [],
}
