/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'fitness-green': '#22c55e',
        pink: {
          500: '#ec4899',
        },
        purple: {
          500: '#a855f7',
        },
        orange: {
          500: '#f97316',
        },
        navy: {
          500: '#1e40af',
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        shimmer: 'shimmer 2s infinite linear',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.8' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)', opacity: '0.9' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}