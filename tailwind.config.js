/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: '#EEF2EC',
        ink: '#13221C',
        teal: {
          DEFAULT: '#189F79',
          light: '#DCEFE7',
        },
        amber: {
          DEFAULT: '#F2A93B',
          light: '#FBEBCF',
        },
        sageline: '#D6DCD2',
        card: '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        pulseline: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-240' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseline: 'pulseline 6s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
