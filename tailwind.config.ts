import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#3b82f6',
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config
