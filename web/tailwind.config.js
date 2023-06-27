/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{jsx,tsx,vue}',
    './src/layouts/**/*.{jsx,tsx,vue}',
    './src/pages/**/*.{jsx,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
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
          950: '#052e16',
        },
      },
      minHeight: {
        screen: ['100vh', '100svh'],
      },
    },
  },
  plugins: [],
};
