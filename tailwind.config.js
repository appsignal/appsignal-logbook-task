module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@appsignal/design-system")],
  theme: {
    extend: {},
  },
  plugins: [],
};
