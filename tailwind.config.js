/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			screens: {
				xs: "320px", // extra small devices (phones in portrait mode)
				sm: "640px", // small devices (phones)
				md: "768px", // medium devices (tablets)
				lg: "1024px", // large devices (laptops)
				xl: "1280px", // extra large devices (desktops)
				"2xl": "1536px", // extra extra large devices (large desktops)
			},
			fontFamily: {
				skyscapers: ["Skyscapers", "sans-serif"],
				kaushan: ['"Kaushan Script"', "cursive"],
				greatVibes: ['"Great Vibes"', "cursive"],
				poppins: ['"Poppins"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
