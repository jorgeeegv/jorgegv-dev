/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Metropolis"],
				pacifico: ["Pacifico"]
			},
			dropShadow:{
				'sm': '0 3px 3px #FEF1C3',
			},
			colors: {
				black: {
					50: "#F0F0F0",
					100: "#E0E0E0",
					200: "#BFBFBF",
					300: "#A1A1A1",
					400: "#808080",
					500: "#616161",
					600: "#404040",
					700: "#212121",
					800: "#000000",
					900: "#000000",
					950: "#000000"
				  },
				yellow: {
					50: "#FFFCF0",
					100: "#FEF8E1",
					200: "#FEF1C3",
					300: "#FDEAA5",
					400: "#FDE48C",
					500: "#FCDD6E",
					600: "#FBD650",
					700: "#FBCF32",
					800: "#FACA15",
					900: "#876A03",
					950: "#413301"
				  },
				white: '#ffffff'
			},
		},
	},
	plugins: [],
}
