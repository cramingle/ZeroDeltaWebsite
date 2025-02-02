/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        success: '#00FF94',
        dark: {
          DEFAULT: '#0A0A0A',
          800: '#1A1A1A'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
        `
      },
      backgroundSize: {
        'grid': '64px 64px'
      }
    },
  },
  plugins: [],
};