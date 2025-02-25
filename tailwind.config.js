/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,scss}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("@designbycode/tailwindcss-text-shadow"),
  ],
}

