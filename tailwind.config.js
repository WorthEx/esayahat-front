/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
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
  plugins: [require("tailwindcss-animated"), require("flowbite/plugin")],
}
