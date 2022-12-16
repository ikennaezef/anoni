/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				darkMain: "#252525",
				darkLight: "#3a3a3a",
				purpleMain: "#a855f7",
				purpleDark: "#53269c",
				mintMain: "#64DFDF",
				mintDark: "#489b9b",
			},
		},
		fontFamily: {
			sans: ["Plus Jakarta Sans", "sans-serif"],
		},
	},
	plugins: [],
};
