/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        main: 'var(--font-main)',
        alt: 'var(--font-alt)'
      },
      fontSize: {
        '7xl': '7.938rem'
      },
      colors: {
        primary: '#FDC898',
        secondary: 'rgba(181, 23, 255, 0.11)'
      },
      animation: {
        'section-1': 'animate-section-1',
        'section-2': 'animate-section-2',
        'section-3': 'animate-section-3',
        'hidden-1': 'animate-hidden-1',
        scale: 'animate-scale',
      },
      transitionDuration: {
        2000: '2000ms'
      }
    },
  },
  plugins: [],
}
