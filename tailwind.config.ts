import { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1000": "#F0F3F4",     // Light Gray
        "gray-900": "#CED6D9",      // Soft Gray
        "gray-800": "#A4B3B6",      // Gentle Gray
        "gray-700": "#5E5E5E",      // Medium Gray
        "main-1000": "#FFDADA",     // Light Pink
        "main-900": "#FFA6A6",      // Soft Coral
        "main-800": "#FF7474",      // Subdued Red
        "tertiary-1000": "#FFE29E", // Light Yellow
        "tertiary-900": "#FFCA57",  // Warm Yellow
      },
      backgroundImage: ({
        "gradient-calm": "linear-gradient(90deg, #FFDADA 0%, #FFA6A6 100%)",
        "moible-index": "url('/src/assets/images/mobile-index.png')",
      }),
      fontFamily: {
        'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
      },
      content: {
        evolvetext: "url('/src/assets/images/evolve-text.png')",
        abstractWaves: "url('/src/assets/images/abstract-wave.png')",
        shinny: "url('/src/assets/images/shinny.png')",
        round: "url('/src/assets/images/round.png')",
      }
    },
    screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
    }
  },
  plugins: [],
};

export default config;
