import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cybernow: {
          primary: '#0f172a',      // Dark blue
          secondary: '#1e40af',    // Bright blue
          accent: '#f59e0b',       // Amber
          success: '#10b981',      // Green
          warning: '#f59e0b',      // Amber
          error: '#ef4444',        // Red
          light: '#f8fafc',        // Light blue-gray
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
