/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F3ECE0',
          300: '#E9DECC',
        },
        nude: {
          100: '#F5EFE7',
          200: '#EADFD2',
          300: '#D9C8B4',
          400: '#C4AC92',
        },
        champagne: {
          100: '#F7F1E6',
          200: '#EFE3CF',
          300: '#E0CBA8',
          400: '#CDAF7E',
        },
        gold: {
          300: '#D9C08A',
          400: '#C9A96A',
          500: '#B8935A',
          600: '#A37E48',
        },
        graphite: {
          700: '#3A3A3A',
          800: '#262626',
          900: '#1A1A1A',
          950: '#111111',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.4em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(26, 26, 26, 0.25)',
        card: '0 10px 40px -12px rgba(26, 26, 26, 0.18)',
        gold: '0 10px 40px -10px rgba(185, 147, 90, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}