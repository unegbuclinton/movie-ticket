/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dark: "rgb(3, 2, 16)",
        orange: "#f58d42",
        "slate-gray": "#6B818C",
        "light-grey": "rgb(227,227,227)",
        "raisin-black": "#25262e",
        gunmental: "#272C38",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "linear-gradient(90deg, rgba(185,185,199,1) 0%, rgba(210,210,219,1) 46%, rgba(255,255,255,1) 100%)",
      },
      gridTemplateColumns: {
        6: "repeat(9, 1fr)",
      },
      gridTemplateRows: {
        9: "repeat(9, 1fr)",
      },
      backgroundPosition: {
        // top: "left calc((50vw - 170px) - 340px) top",
      },
      boxShadow: {
        xl: "0 2px 8px rgba(0,0,0,0.1)",
        xxl: "3px 3px 9px 0px rgba(0,0,0,0.75);",
      },
    },
  },
  plugins: [],
};
