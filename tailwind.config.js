const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lato", "Arial", "sans-serif"],
			},

		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".default-button": {
					padding: "10px 20px",
					background: "#445e93",
					color: "white",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
					marginTop: "10px",
					transition: "all 0.2s ease-in-out",
					"&:hover": {
						background: "#30436a",
					},
				},
			});
		}),
	],
};
