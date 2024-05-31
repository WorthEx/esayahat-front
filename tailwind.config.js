/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
	content: [
		"./src/**/*.{html,js,vue}",
		"./node_modules/flowbite/**/*.js",
		// "./src/components/*.{html,js,vue}",
		// "./src/*.{html,js,vue}"
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/vue-tailwind-datepicker/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				'blue': '#4B7DDD',
				'light-blue': '#00AFEF',
				'orange': '#E9583B',
				"vtd-primary": colors.sky,
				"vtd-secondary": colors.gray,
			},
			animation: {
			},
		},
		fontFamily: {
			'sans': ['Roboto', 'Audiowide'],
		}
	},
	plugins: [
		require("tailwindcss-animated"),
	],
};
