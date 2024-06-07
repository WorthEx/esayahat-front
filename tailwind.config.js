/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}",
    // "./src/components/*.{html,js,vue}",
    // "./src/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      animation: {},
    },
    fontFamily: {
      sans: ["Roboto", "Audiowide"],
    },
  },
  plugins: [require("tailwindcss-animated")],
}
