/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#1782fe",
        sec: "#ffffff",
        accent: "#ababae",
      },
      screens: {
        phone: "600px",
        // => @media (min-width: 600px) { ... }

        tablet: "1000px",
        // => @media (min-width: 850px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
