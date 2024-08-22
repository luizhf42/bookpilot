const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lato", "Arial", "sans-serif"],
			},
			screens: {
				xs: "475px",
			},
			keyframes: {
				disappear: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0", display: "none" },
				},
			},
			animation: {
				disappear: "disappear 0.5s ease-in-out forwards",
			},
		},
	},
};
