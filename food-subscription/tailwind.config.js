import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5722',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#4CAF50',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFC107',
          foreground: '#333333',
        },
        background: '#FFFFFF',
        foreground: '#333333',
      },
    },
  },
  plugins: [],
}

export default config

