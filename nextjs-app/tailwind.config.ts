// watch css var in @styles/globals

import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/common/**/*.{js,ts,jsx,tsx,mdx,css}",
      "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],

   important: true,
   theme: {
      colors: {
         primary: "var(--primary-color)",
         secondary: "var(--secondary-color)",

         "primary-btn": "var(--active-button-color)",
         "secondary-btn": "var(--inactive-button-color)",
         "hover-btn": "var(--hover-button-color)",

         "primary-icon": "var(--active-icon-color)",
         "secondary-icon": "var(--inactive-icon-color)",

         "gray-txt": "var(--text-gray)",
         "dark-gray-txt": "var(--text-dark-gray)",

         "active-status": "#31A24C",

         gray: "#f2f2f2",
         white: "#FFFFFF",
         red: "#FF0000",
         black: "#000000",
         transparent: "transparent",
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
      extend: {},
   },
   plugins: [],
   corePlugins: {
      preflight: false,
   },
};

export default config;
