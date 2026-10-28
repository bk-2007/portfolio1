/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EC",
        ink: "#141414",
        coral: "#FF5A5F",
        sunny: "#FFC93C",
        teal: "#00A896",
        cobalt: "#2D5BFF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        neo: "4px 4px 0 #141414",
        "neo-hover": "8px 8px 0 #141414",
        "neo-sm": "2px 2px 0 #141414",
        "neo-lg": "6px 6px 0 #141414",
      },
      borderWidth: {
        DEFAULT: "2px",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      borderRadius: {
        neo: "12px",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};
