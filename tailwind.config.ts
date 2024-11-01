import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      // padding: '2rem',
      screens: {
        // '2xl': '1280px'
      }
    },
    extend: {
      backgroundImage: {
        'span-bg': 'var(--span-bg)'
      },
      colors: {
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)'
        },
        'button-secondary': 'var(--button-secondary)',
        'button-text': 'var(--button-text)',
        'text-secondary': 'var(--text-secondary)',
        'background-secondary': 'var(--background-secondary)',
        secondary: 'var(--secondary)',
        button: 'var(--button)',
        selected: 'var(--selected)',
        dropdown: 'var(--dropdown)',
        dropdownHover: 'var(--dropdown-hover)',
        buttonSecondary: 'var(--button-secondary)',
        mainRed: 'var(--main-red)',
        mainRedLight: 'var(--main-red-light)',
        mainGreen: 'var(--main-green)',
        mainGreenLight: 'var(--main-green-light)',
        mainGreenGradient: 'var(--main-green-gradient)',
        contentPrimary: 'var(--content-primary)',
        contentSecondary: 'var(--content-secondary)',
        contentTertiary: 'var(--content-tertiary)'
      },

      fontFamily: {
        sans: ['var(--inter)']
        // serif: ['var(--magnet-trial)']
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
  daisyui: {
    themes: ['light']
  }
} satisfies Config

export default config
