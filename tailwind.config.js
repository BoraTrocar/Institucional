/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF3FA',
          100: '#D7E6F5',
          200: '#7BA7D0',
          300: '#4A90E2',
          400: '#2171C7',
          500: '#1A5DA6',
        },
        pearl: {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};