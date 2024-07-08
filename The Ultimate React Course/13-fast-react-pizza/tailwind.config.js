/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
    },
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
  },
  plugins: [],
};
