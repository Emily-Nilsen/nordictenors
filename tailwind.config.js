const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.875rem', { lineHeight: '1.5rem' }],
      sm: ['1rem', { lineHeight: '2rem' }],
      base: ['1.125rem', { lineHeight: '1.75rem' }],
      lg: ['1.25rem', { lineHeight: '2rem' }],
      xl: ['1.5rem', { lineHeight: '2.5rem' }],
      '2xl': ['2rem', { lineHeight: '2.5rem' }],
      '3xl': ['2.5rem', { lineHeight: '3rem' }],
      '4xl': ['3rem', { lineHeight: '3.5rem' }],
      '5xl': ['3.75rem', { lineHeight: '1' }],
      '6xl': ['4.5rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['7rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        'pulse-slow-5': 'pulse 4s ease-in-out infinite',
        'pulse-slow-4': 'pulse 3s ease-in-out infinite',
        'pulse-slow-3': 'pulse 2s ease-in-out infinite',
        'pulse-slow-2': 'pulse 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        gold: {
          600: '#d0a846',
          500: '#d8b24f',
        },
      },
      fontFamily: {
        hero: ['annabelle-jf', ...defaultTheme.fontFamily.sans],
        sans: ['ff-nuvo-web-pro', ...defaultTheme.fontFamily.sans],
        display: ['kepler-std-display', ...defaultTheme.fontFamily.serif],
        logo: ['trajan-pro-3', ...defaultTheme.fontFamily.serif],
      },

      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
