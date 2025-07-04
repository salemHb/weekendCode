/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", "sans-serif"],
				mono: ["var(--font-geist-mono)", "monospace"],
			},
			colors: {
				primary: {
					500: "#4f46e5", // indigo-600
					600: "#4338ca",
				},
				secondary: {
					500: "#6b21a8", // purple-600
					600: "#5b1d8e",
				},
			},
		},
	},
	plugins: [],
};
