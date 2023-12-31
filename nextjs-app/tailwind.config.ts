// watch css var in @styles/globals

import type { Config } from "tailwindcss";
import containerPlugin from "@tailwindcss/container-queries";

const config: Config = {
   content: [
      "./src/shared/**/*.{js,ts,jsx,tsx,mdx,css}",
      "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],

   important: true,
   theme: {
      extend: {
         colors: {
            primary: "var(--primary-color)",
            secondary: "var(--secondary-color)",

            "primary-btn": "var(--active-button-color)",
            "secondary-btn": "var(--inactive-button-color)",
            "hover-btn": "var(--hover-button-color)",

            "primary-icon": "var(--active-icon-color)",
            "secondary-icon": "var(--inactive-icon-color)",

            "light-gray-txt": "var(--text-light-gray)",
            "gray-txt": "var(--text-gray)",
            "dark-gray-txt": "var(--text-dark-gray)",

            "active-status": "#31A24C",
            "create-account": "#42B72A",

            gray: "#f2f2f2",
            white: "#FFFFFF",
            red: "#FF0000",
            black: "#000000",
            transparent: "transparent",
         },

         width: {
            login: "315px",
            "chat-side": "248px",
            "dropdown-menu": "350px",
            "chat-box": "330px",
            "friend-page-nav-bar": "300px",
            "personal-page-left-side": "360px",
            "personal-page-right-side": "500px",
         },

         maxWidth: {
            "personal-page-side": "700px",
         },

         maxHeight: {
            "dropdown-menu": "540px",
         },

         fontSize: {
            tiny: "12px",
            small: "14px",
            regular: "16px",
            "regular-big": "20px",
            big: "24px",
            huge: "32px",

            sm: ["14px", "20px"],
            base: ["16px", "24px"],
            lg: ["20px", "28px"],
            xl: ["24px", "32px"],
         },

         borderRadius: {
            "half-circle": "50px",
         },

         fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
         },

         boxShadow: {
            modal: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            pre_message: "0px 5px 15px rgba(0, 0, 0, 0.5)",
            inner: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            around: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
         },

         screens: {
            tablet: "700px",
            // => @media (min-width: 640px) { ... }

            laptop: "900px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }

            "large-desktop": "1530px",
            // => @media (min-width: 1530px) { ... }
         },

         containers: {
            tablet: "450px",
            laptop: "900px",
            desktop: "1280px",
            "large-desktop": "1530px",
         },
      },
   },
   plugins: [containerPlugin],
   corePlugins: {
      preflight: false,
   },
};

export default config;
