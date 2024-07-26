import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
    'primary':"#0066FF",
    'white':"#ffffffff",
    'black':"#18191C",
    'gray':"#E4E5E8",
    'gray-500':"#767F8C",
    "linear":"#FFF6E6"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-login":"url(/auth-bg.png)"
      },
    },
  },
  plugins: [],
};
export default config;
