import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#fcf1e9',
        'primary-cream': '#fcfcfc',
        'accent-tan': '#ccbba5',
        'brown-primary': '#593405',
        'brown-dark': '#351f04',
        'text-black': '#030100',
        'green-dark': '#0d3505',
        'green-light': '#cce2c7',
        'gold': '#ddc769',
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        english: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;