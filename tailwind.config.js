const config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#DEF0A4",
				"primary-dark": "#304739",
				accent: "#e4bd83",
				black: "hsl(210, 11%, 15%)",
				white: "hsl(5, 0%, 100%)",
			},
			screens: {
				xxs: "375px",
				xs: "425px",
				"2xl": "1440px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}
export default config

