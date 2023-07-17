/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: "League Spartan, sans-serif",
      },
    },
    colors: {
      lgcBg: "hsl(180, 52%, 96%)",
      lgcFilterTabs: "hsl(180, 31%, 95%)",
      dg: "hsl(180, 8%, 52%)",
      vdg: "hsl(180, 14%, 20%)",
      borderRight: "#5DA4A6",
      borderTopTags: "#BEC0BF",
      textCyan: "#569B90",
    },
    fontSize: {
      15: "0.938rem",
      18: "1.175rem",
    },
  },
  plugins: [],
};
