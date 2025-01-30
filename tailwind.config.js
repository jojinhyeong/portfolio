/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#4F46E5',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fadeOut': 'fadeOut 0.5s ease-in-out forwards 2s',
        'logo': 'logo 2s ease-in-out',
        'cursor': 'cursor .6s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate',
        'fadeIn': 'fadeIn 0.5s ease-out'
      },
      keyframes: {
        fadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0', visibility: 'hidden' },
        },
        logo: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        cursor: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        sans: ['Neue Montreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}