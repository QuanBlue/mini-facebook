import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/common/**/*.{js,ts,jsx,tsx,mdx,css}",
		"./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			blue: "#1fb6ff",
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#ffc82c",

			gray: "#F0F2F5",
		},
		fontSize: {
			sm: ["14px", "20px"],
			base: ["16px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};

export default config;
